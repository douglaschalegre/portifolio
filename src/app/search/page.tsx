import type { Metadata } from 'next';
import Link from 'next/link';
import { searchBlogPosts } from '@/lib/blog/content';

interface SearchPageProps {
  searchParams?: {
    q?: string | string[];
  };
}

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Buscar | Douglas Chalegre',
  description: 'Busque artigos no blog por palavra-chave.',
  alternates: {
    canonical: '/search',
  },
  robots: {
    index: false,
    follow: false,
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

function getQueryValue(value: string | string[] | undefined): string {
  if (Array.isArray(value)) {
    return value[0] ?? '';
  }

  return value ?? '';
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const rawQuery = getQueryValue(searchParams?.q);
  const query = rawQuery.trim();
  const results = query ? await searchBlogPosts(query) : [];

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16" aria-labelledby="search-title">
        <div className="site-container">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">
            Search
          </p>
          <h1
            id="search-title"
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Buscar no blog
          </h1>
          <div className="mt-3 h-px w-14 bg-orange-500" />

          <form action="/search" method="get" className="mt-6 max-w-2xl">
            <label htmlFor="search-page-query" className="sr-only">
              Buscar artigos
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="search-page-query"
                name="q"
                type="search"
                defaultValue={query}
                placeholder="Ex.: microservices, event-driven, APIs..."
                className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-zinc-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 text-sm font-semibold text-orange-500 transition hover:border-orange-500/60 hover:bg-orange-500/15"
              >
                Buscar
              </button>
            </div>
          </form>

          <div className="mt-6 text-sm text-zinc-400">
            {query ? (
              <>
                <span className="font-medium text-orange-500">
                  {results.length}
                </span>{' '}
                {results.length === 1 ? 'resultado' : 'resultados'} para{' '}
                <span className="text-zinc-200">&quot;{query}&quot;</span>
              </>
            ) : (
              'Digite uma palavra para buscar artigos no blog.'
            )}
          </div>

          {query && results.length === 0 ? (
            <p className="mt-8 text-sm leading-7 text-zinc-300 sm:text-base">
              Nenhum artigo encontrado para essa busca.
            </p>
          ) : null}

          {results.length > 0 ? (
            <ul className="mt-8 space-y-7" role="list">
              {results.map((post) => (
                <li key={post.href}>
                  <article className="group">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                      <span>{formatDate(post.date)}</span>
                      <span aria-hidden="true" className="text-orange-500">
                        •
                      </span>
                      <span>{post.readTime} de leitura</span>
                    </div>

                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      <Link
                        href={post.href}
                        className="transition hover:text-orange-500"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
                      {post.description}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>
    </div>
  );
}
