import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { getAllBlogParams, getBlogPost } from '@/lib/blog/content';
import type { BlogPost } from '@/lib/blog/types';

interface BlogPostPageProps {
  params: {
    year: string;
    slug: string;
  };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

function stripLeadingMarkdownH1(markdown: string) {
  return markdown.replace(/^\s*#\s+.+\r?\n+/, '');
}

function buildPostMetadata(post: BlogPost): Metadata {
  const image = post.cover
    ? [
        {
          url: post.cover,
          alt: post.title,
        },
      ]
    : undefined;

  return {
    title: `${post.title} | Blog | Douglas Chalegre`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: 'Douglas Chalegre' }],
    alternates: {
      canonical: post.href,
    },
    openGraph: {
      type: 'article',
      locale: 'pt_BR',
      url: post.href,
      title: post.title,
      description: post.description,
      siteName: 'Douglas Chalegre',
      publishedTime: new Date(`${post.date}T00:00:00Z`).toISOString(),
      modifiedTime: new Date(
        `${(post.updatedAt ?? post.date)}T00:00:00Z`,
      ).toISOString(),
      tags: post.tags,
      images: image,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: image?.map((img) => img.url),
      creator: '@dev_douglas',
    },
  };
}

export async function generateStaticParams() {
  return getAllBlogParams();
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.year, params.slug);

  if (!post) {
    return {
      title: 'Artigo não encontrado | Blog | Douglas Chalegre',
      description: 'O artigo solicitado não foi encontrado.',
    };
  }

  return buildPostMetadata(post);
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.year, params.slug);

  if (!post) {
    notFound();
  }

  const renderedContent = stripLeadingMarkdownH1(post.content);

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <section className="pt-12 pb-4 sm:pt-16 sm:pb-6">
        <div className="site-container">
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
            <span>{formatDate(post.date)}</span>
            <span aria-hidden="true" className="text-orange-500">
              •
            </span>
            <span>{post.readTime} de leitura</span>
            {post.updatedAt && post.updatedAt !== post.date && (
              <>
                <span aria-hidden="true" className="text-orange-500">
                  •
                </span>
                <span>Atualizado em {formatDate(post.updatedAt)}</span>
              </>
            )}
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 h-px w-16 bg-orange-500" />
          <p className="mt-5 text-base leading-8 text-zinc-300 sm:text-lg">
            {post.description}
          </p>
        </div>
      </section>

      <section className="pt-0 pb-8 sm:pb-12">
        <div className="site-container">
          {post.cover ? (
            <div className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.cover}
                alt={`Capa do artigo ${post.title}`}
                className="h-auto max-h-[460px] w-full object-cover"
              />
            </div>
          ) : null}

          <article className="blog-prose prose prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {renderedContent}
            </ReactMarkdown>
          </article>
        </div>
      </section>
    </div>
  );
}
