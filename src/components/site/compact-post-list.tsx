import Link from 'next/link';
import type { BlogPostMeta } from '@/lib/blog/types';

interface CompactPostListProps {
  posts: BlogPostMeta[];
  title?: string;
  description?: string;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function CompactPostList({
  posts,
  title = 'Artigos',
  description,
}: CompactPostListProps) {
  return (
    <section className="pt-0 pb-12 sm:pb-16" aria-labelledby="compact-post-list-title">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-6">
          <h2
            id="compact-post-list-title"
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            {title}
          </h2>
          <div className="mt-3 h-px w-14 bg-orange-500" />
          {description ? (
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
              {description}
            </p>
          ) : null}
          <p className="mt-3 text-sm text-zinc-400">
            <span className="font-medium text-orange-500">{posts.length}</span>{' '}
            {posts.length === 1 ? 'artigo publicado' : 'artigos publicados'}
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-sm leading-7 text-zinc-300">
            Ainda não há artigos publicados.
          </p>
        ) : (
          <ul className="space-y-7" role="list">
            {posts.map((post) => (
              <li key={post.href}>
                <article className="group">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                    <span>{formatDate(post.date)}</span>
                    <span aria-hidden="true" className="text-orange-500">
                      •
                    </span>
                    <span>{post.readTime} de leitura</span>
                  </div>

                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    <Link
                      href={post.href}
                      className="transition hover:text-orange-500"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
                    {post.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
