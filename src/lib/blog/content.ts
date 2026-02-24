import 'server-only';

import fs from 'node:fs/promises';
import path from 'node:path';
import { cache } from 'react';
import matter from 'gray-matter';
import type {
  BlogFrontmatter,
  BlogPost,
  BlogPostMeta,
  BlogPostParams,
} from '@/lib/blog/types';

const BLOG_ROOT_DIR = path.join(process.cwd(), 'blog');
const YEAR_DIR_PATTERN = /^\d{4}$/;
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const MARKDOWN_EXTENSION = '.md';
const WORDS_PER_MINUTE = 200;

function isProduction() {
  return process.env.NODE_ENV === 'production';
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function ensureString(
  value: unknown,
  field: keyof BlogFrontmatter,
  sourcePath: string,
): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(
      `Blog post "${sourcePath}" is missing a valid "${field}" string in frontmatter.`,
    );
  }

  return value.trim();
}

function ensureOptionalString(
  value: unknown,
  field: keyof BlogFrontmatter,
  sourcePath: string,
): string | undefined {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(
      `Blog post "${sourcePath}" has an invalid "${field}" value. Expected a non-empty string.`,
    );
  }

  return value.trim();
}

function ensureIsoDate(
  value: unknown,
  field: 'date' | 'updatedAt',
  sourcePath: string,
): string {
  const dateValue = ensureString(value, field, sourcePath);

  if (!ISO_DATE_PATTERN.test(dateValue) || Number.isNaN(Date.parse(dateValue))) {
    throw new Error(
      `Blog post "${sourcePath}" has an invalid "${field}" value "${dateValue}". Expected YYYY-MM-DD.`,
    );
  }

  return dateValue;
}

function ensureTags(value: unknown, sourcePath: string): string[] {
  if (value === undefined) {
    return [];
  }

  if (!Array.isArray(value)) {
    throw new Error(
      `Blog post "${sourcePath}" has an invalid "tags" value. Expected an array of strings.`,
    );
  }

  return value
    .map((tag) => (typeof tag === 'string' ? tag.trim() : ''))
    .filter(Boolean);
}

function ensureOptionalBoolean(
  value: unknown,
  field: keyof BlogFrontmatter,
  sourcePath: string,
): boolean | undefined {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== 'boolean') {
    throw new Error(
      `Blog post "${sourcePath}" has an invalid "${field}" value. Expected boolean.`,
    );
  }

  return value;
}

function estimateReadTime(content: string): string {
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
  return `${minutes} min`;
}

function toHref(year: string, slug: string): string {
  return `/blog/${year}/${slug}`;
}

function normalizeForSearch(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function matchesQuery(post: BlogPost, query: string): boolean {
  const normalizedQuery = normalizeForSearch(query).trim();
  if (!normalizedQuery) return false;

  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  if (terms.length === 0) return false;

  const searchable = normalizeForSearch(
    [post.title, post.description, post.content].join('\n'),
  );

  return terms.every((term) => searchable.includes(term));
}

function normalizeFrontmatter(
  rawData: unknown,
  sourcePath: string,
  year: string,
): Omit<BlogPostMeta, 'year' | 'slug' | 'href' | 'readTime'> {
  if (!isRecord(rawData)) {
    throw new Error(
      `Blog post "${sourcePath}" has invalid frontmatter. Expected an object.`,
    );
  }

  const title = ensureString(rawData.title, 'title', sourcePath);
  const description = ensureString(rawData.description, 'description', sourcePath);
  const date = ensureIsoDate(rawData.date, 'date', sourcePath);
  const updatedAt =
    rawData.updatedAt === undefined
      ? undefined
      : ensureIsoDate(rawData.updatedAt, 'updatedAt', sourcePath);
  const tags = ensureTags(rawData.tags, sourcePath);
  const cover = ensureOptionalString(rawData.cover, 'cover', sourcePath);
  const draft = ensureOptionalBoolean(rawData.draft, 'draft', sourcePath) ?? false;

  if (date.slice(0, 4) !== year) {
    throw new Error(
      `Blog post "${sourcePath}" date year (${date.slice(0, 4)}) does not match folder year (${year}).`,
    );
  }

  return {
    title,
    description,
    date,
    updatedAt,
    tags,
    cover,
    draft,
  };
}

async function listYearDirectories(): Promise<string[]> {
  try {
    const entries = await fs.readdir(BLOG_ROOT_DIR, { withFileTypes: true });

    return entries
      .filter((entry) => entry.isDirectory() && YEAR_DIR_PATTERN.test(entry.name))
      .map((entry) => entry.name)
      .sort((a, b) => b.localeCompare(a));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }

    throw error;
  }
}

const loadAllBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const years = await listYearDirectories();
  const posts: BlogPost[] = [];
  const seen = new Set<string>();

  for (const year of years) {
    const yearDirPath = path.join(BLOG_ROOT_DIR, year);
    const entries = await fs.readdir(yearDirPath, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isFile() || path.extname(entry.name) !== MARKDOWN_EXTENSION) {
        continue;
      }

      const slug = path.basename(entry.name, MARKDOWN_EXTENSION);
      const key = `${year}/${slug}`;
      const sourcePath = path.join('blog', year, entry.name);

      if (seen.has(key)) {
        throw new Error(`Duplicate blog post detected for "${key}".`);
      }

      seen.add(key);

      const filePath = path.join(yearDirPath, entry.name);
      const fileContents = await fs.readFile(filePath, 'utf8');
      const parsed = matter(fileContents);
      const normalized = normalizeFrontmatter(parsed.data, sourcePath, year);

      posts.push({
        ...normalized,
        year,
        slug,
        href: toHref(year, slug),
        readTime: estimateReadTime(parsed.content),
        content: parsed.content.trim(),
      });
    }
  }

  posts.sort((a, b) => {
    const primary = b.date.localeCompare(a.date);
    if (primary !== 0) return primary;
    return a.slug.localeCompare(b.slug);
  });

  if (isProduction()) {
    return posts.filter((post) => !post.draft);
  }

  return posts;
});

function toMeta(post: BlogPost): BlogPostMeta {
  const { content, ...meta } = post;
  void content;
  return meta;
}

export const getAllBlogPostMeta = cache(async (): Promise<BlogPostMeta[]> => {
  const posts = await loadAllBlogPosts();
  return posts.map(toMeta);
});

export async function getLatestBlogPosts(limit: number): Promise<BlogPostMeta[]> {
  const posts = await getAllBlogPostMeta();
  return posts.slice(0, Math.max(0, limit));
}

export async function getBlogPost(
  year: string,
  slug: string,
): Promise<BlogPost | null> {
  const posts = await loadAllBlogPosts();
  return posts.find((post) => post.year === year && post.slug === slug) ?? null;
}

export async function getAllBlogParams(): Promise<BlogPostParams[]> {
  const posts = await getAllBlogPostMeta();
  return posts.map(({ year, slug }) => ({ year, slug }));
}

export async function searchBlogPosts(query: string): Promise<BlogPostMeta[]> {
  const normalizedQuery = query.trim();
  if (!normalizedQuery) {
    return [];
  }

  const posts = await loadAllBlogPosts();
  return posts.filter((post) => matchesQuery(post, normalizedQuery)).map(toMeta);
}
