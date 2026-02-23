import type { TalkItem } from '@/lib/site/content';

interface TalksListProps {
  talks: TalkItem[];
  repoUrl?: string;
}

export default function TalksList({ talks, repoUrl }: TalksListProps) {
  return (
    <section className="pt-8 pb-12 sm:pt-10 sm:pb-16" aria-labelledby="talks-title">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2
              id="talks-title"
              className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              Talks
            </h2>
            <div className="mt-3 h-px w-14 bg-orange-500" />
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
              Workshops e talks que compartilhei com a comunidade ao longo dos últimos anos.
            </p>
          </div>

          {repoUrl ? (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-orange-500 transition hover:text-orange-400"
            >
              Ver repositório de talks
            </a>
          ) : null}
        </div>

        <ul className="mt-8 space-y-6" role="list">
          {talks.map((talk) => (
            <li key={`${talk.title}-${talk.date}`}>
              <article className="group">
                <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                  <span>{talk.date}</span>
                  <span aria-hidden="true" className="text-orange-500">
                    •
                  </span>
                  <span>Talk / Workshop</span>
                </div>

                <h3 className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
                  <a
                    href={talk.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-orange-500"
                  >
                    {talk.title}
                  </a>
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
                  {talk.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
