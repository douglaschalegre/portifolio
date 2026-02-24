export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  cover?: string;
  draft?: boolean;
  updatedAt?: string;
}

export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover?: string;
  draft: boolean;
  updatedAt?: string;
  year: string;
  slug: string;
  href: string;
  readTime: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export interface BlogPostParams {
  year: string;
  slug: string;
}
