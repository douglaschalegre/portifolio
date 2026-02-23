export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="border-b border-white/10 py-20 sm:py-28">
        <div className="site-container">
          <div className="h-4 w-16 animate-pulse rounded bg-white/10" />
          <div className="mt-4 h-12 max-w-2xl animate-pulse rounded bg-white/10" />
          <div className="mt-4 h-5 max-w-xl animate-pulse rounded bg-white/10" />
        </div>
      </section>
      <section className="py-14 sm:py-20">
        <div className="site-container grid gap-6">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="h-4 w-40 animate-pulse rounded bg-white/10" />
              <div className="mt-4 h-8 w-3/4 animate-pulse rounded bg-white/10" />
              <div className="mt-4 h-4 w-full animate-pulse rounded bg-white/10" />
              <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-white/10" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
