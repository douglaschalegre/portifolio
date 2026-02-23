import Link from 'next/link';

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 py-24 text-white">
      <div className="site-container">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">
            Blog
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight">
            Página não encontrada
          </h1>
          <p className="mt-3 text-sm leading-6 text-zinc-300 sm:text-base">
            O conteúdo solicitado não existe ou ainda não foi publicado.
          </p>
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Voltar para o blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
