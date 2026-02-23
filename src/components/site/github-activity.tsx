interface GitHubActivityProps {
  username: string;
  profileUrl: string;
}

export default function GitHubActivity({
  username,
  profileUrl,
}: GitHubActivityProps) {
  const contributionsGraphUrl = `https://ghchart.rshah.org/f97316/${username}`;

  return (
    <div className="mt-8">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-medium text-zinc-400">
          Contribuições públicas no GitHub{' '}
          <span className="text-orange-500">@{username}</span>
        </p>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-orange-500 transition hover:text-orange-400"
        >
          Ver perfil
        </a>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2 sm:p-3">
        <div className="overflow-x-auto rounded-xl bg-white p-3 sm:p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={contributionsGraphUrl}
            alt={`Gráfico de contribuições do GitHub de ${username}`}
            className="block min-w-[720px]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
