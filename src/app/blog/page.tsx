import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPostMeta } from '@/lib/blog/content';

export const metadata: Metadata = {
  title: 'Blog | Douglas Chalegre',
  description:
    'Artigos técnicos sobre desenvolvimento web, arquitetura, back-end e temas de engenharia de software.',
  alternates: {
    canonical: '/blog',
  },
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

export default async function BlogPage() {
  const posts = await getAllBlogPostMeta();
  const postsByYear = posts.reduce<Array<{ year: string; items: typeof posts }>>(
    (groups, post) => {
      const lastGroup = groups[groups.length - 1];

      if (lastGroup && lastGroup.year === post.year) {
        lastGroup.items.push(post);
        return groups;
      }

      groups.push({ year: post.year, items: [post] });
      return groups;
    },
    [],
  );

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <section className="pt-16 pb-6 sm:pt-20 sm:pb-8">
        <div className="site-container">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Blog
          </h1>
          <div className="mt-4 h-px w-14 bg-orange-500" />
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            Artigos técnicos sobre desenvolvimento, arquitetura e boas práticas.
          </p>
          <p className="mt-4 text-sm text-zinc-400">
            <span className="font-medium text-orange-500">{posts.length}</span>{' '}
            {posts.length === 1 ? 'artigo publicado' : 'artigos publicados'}
          </p>
        </div>
      </section>

      <section className="pt-0 pb-12 sm:pb-16">
        <div className="site-container">
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-10 text-center">
              <h2 className="text-xl font-semibold text-white">
                Nenhum artigo publicado ainda
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Adicione arquivos em <code className="text-orange-300">/blog/&lt;ano&gt;/*.md</code>{' '}
                para popular esta página.
              </p>
            </div>
          ) : (
            <div className="space-y-12 sm:space-y-14">
              {postsByYear.map((group) => (
                <section key={group.year} aria-labelledby={`year-${group.year}`}>
                  <div className="mb-5 flex items-center gap-4">
                    <h2
                      id={`year-${group.year}`}
                      className="text-base font-semibold tracking-tight text-orange-500 sm:text-lg"
                    >
                      {group.year}
                    </h2>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <ul className="space-y-8">
                    {group.items.map((post) => (
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
                </section>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
