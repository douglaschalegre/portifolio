export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <section className="pt-16 pb-6 sm:pt-20 sm:pb-8">
        <div className="site-container">
          <div className="h-10 w-28 animate-pulse rounded bg-white/10 sm:h-11" />
          <div className="mt-4 h-px w-14 bg-orange-500/40" />
          <div className="mt-4 h-5 max-w-2xl animate-pulse rounded bg-white/10" />
          <div className="mt-2 h-5 max-w-xl animate-pulse rounded bg-white/10" />
          <div className="mt-4 h-4 w-36 animate-pulse rounded bg-white/10" />
        </div>
      </section>

      <section className="pt-0 pb-12 sm:pb-16">
        <div className="site-container">
          <div className="space-y-12 sm:space-y-14">
            {[0, 1].map((group) => (
              <section key={group} aria-hidden="true">
                <div className="mb-5 flex items-center gap-4">
                  <div className="h-6 w-14 animate-pulse rounded bg-white/10" />
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <ul className="space-y-8">
                  {[0, 1, 2].map((item) => (
                    <li key={`${group}-${item}`}>
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <div className="h-3.5 w-32 animate-pulse rounded bg-white/10" />
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-500/50" />
                        <div className="h-3.5 w-24 animate-pulse rounded bg-white/10" />
                      </div>

                      <div className="mt-2 h-7 w-4/5 animate-pulse rounded bg-white/10 sm:h-8 sm:w-3/5" />
                      <div className="mt-2 h-4 w-full animate-pulse rounded bg-white/10" />
                      <div className="mt-2 h-4 w-3/4 animate-pulse rounded bg-white/10" />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
