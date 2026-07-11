import {
  certificates,
  experience,
  highlights,
  links,
  portfolio,
} from "@/content/portfolio";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(214,158,46,0.22),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(15,118,110,0.22),_transparent_30%),linear-gradient(180deg,_#08111f_0%,_#0d1728_45%,_#f5efe6_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-[linear-gradient(135deg,_rgba(255,255,255,0.12),_transparent_55%)]" />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 text-stone-100 sm:px-10 lg:px-12">
        <header className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/80">
              Portfolio ready for Vercel
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {portfolio.name}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-300 sm:text-base">
              {portfolio.role} · {portfolio.location}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-amber-200/50 hover:bg-amber-200/15"
              >
                {link.label}
              </a>
            ))}
          </div>
        </header>

        <div className="grid flex-1 gap-6 py-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-6">
            <section className="rounded-[2rem] border border-white/10 bg-slate-950/55 p-7 shadow-2xl shadow-slate-950/30 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-teal-200/80">
                About
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Built to make your work easy to share, easy to update, and easy
                to trust.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-stone-300 sm:text-lg">
                {portfolio.intro}
              </p>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
              {highlights.map((item) => (
                <article
                  key={item.label}
                  className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 backdrop-blur"
                >
                  <p className="text-sm uppercase tracking-[0.28em] text-stone-400">
                    {item.label}
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold text-white">
                    {item.value}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-stone-300">
                    {item.detail}
                  </p>
                </article>
              ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-2">
              <article className="rounded-[2rem] border border-white/10 bg-slate-950/55 p-7 backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/80">
                      Experience
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">
                      Career timeline
                    </h2>
                  </div>
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100">
                    Editable
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {experience.map((item) => (
                    <div
                      key={`${item.title}-${item.company}`}
                      className="rounded-2xl border border-white/10 bg-white/6 p-4"
                    >
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-white">
                            {item.title}
                          </h3>
                          <p className="text-sm text-stone-300">
                            {item.company}
                          </p>
                        </div>
                        <p className="text-sm text-amber-200/80">
                          {item.period}
                        </p>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-stone-300">
                        {item.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[2rem] border border-white/10 bg-white/8 p-7 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                  Certificates
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Learning and proof
                </h2>

                <div className="mt-6 space-y-3">
                  {certificates.map((item) => (
                    <div
                      key={`${item.name}-${item.year}`}
                      className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                    >
                      <div>
                        <h3 className="font-medium text-white">{item.name}</h3>
                        <p className="mt-1 text-sm text-stone-300">
                          {item.issuer}
                        </p>
                      </div>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-stone-200">
                        {item.year}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-amber-200/15 bg-amber-200/10 p-4 text-sm leading-6 text-amber-50">
                  Keep adding certificates here as you earn them. This section
                  is already wired to a list, so future updates are quick.
                </div>
              </article>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
            <section className="rounded-[2rem] border border-white/10 bg-white/8 p-7 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-200/80">
                Currently working on
              </p>
              <p className="mt-4 text-xl leading-8 text-white">
                {portfolio.currentlyWorkingOn}
              </p>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-slate-950/55 p-7 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/80">
                Projects
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Selected work
              </h2>

              <div className="mt-6 space-y-4">
                {projects.map((project) => (
                  <article
                    key={project.name}
                    className="rounded-2xl border border-white/10 bg-white/6 p-4"
                  >
                    <h3 className="text-lg font-medium text-white">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-stone-300">
                      {project.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-slate-900/40 px-3 py-1 text-xs text-stone-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
