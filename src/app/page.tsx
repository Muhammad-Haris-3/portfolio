import {
  certificates,
  experience,
  highlights,
  links,
  profile,
  projects,
} from "@/content/portfolio";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-[#08111f] text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.22),_transparent_30%),radial-gradient(circle_at_80%_15%,_rgba(20,184,166,0.24),_transparent_28%),radial-gradient(circle_at_20%_85%,_rgba(244,114,182,0.16),_transparent_24%),linear-gradient(180deg,_#07111e_0%,_#0b1627_40%,_#121d2f_72%,_#f6efe4_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-[-6rem] -z-10 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute right-[-6rem] top-[10rem] -z-10 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute bottom-[-8rem] left-[20%] -z-10 h-80 w-80 rounded-full bg-fuchsia-300/10 blur-3xl animate-pulse-glow" />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-12">
        <header className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.42)] backdrop-blur-xl sm:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_28%,transparent_72%,rgba(255,255,255,0.08))]" />
          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-amber-200/90">
                <span className="rounded-full border border-amber-200/20 bg-amber-300/10 px-3 py-1 text-amber-100">
                  Live on Vercel
                </span>
                <span className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-cyan-100">
                  Editable portfolio system
                </span>
              </div>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-7 text-stone-300 sm:text-base">
                {profile.role} · {profile.location}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {links.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/16 hover:shadow-[0_12px_30px_rgba(56,189,248,0.16)]"
                >
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-300 to-cyan-300 transition group-hover:scale-125" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </header>

        <div className="grid flex-1 gap-6 py-6 lg:grid-cols-[1.35fr_0.65fr] lg:py-8">
          <div className="space-y-6">
            <section className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/58 p-7 shadow-[0_24px_80px_rgba(2,6,23,0.36)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-200/20 hover:shadow-[0_30px_100px_rgba(14,165,233,0.18)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.14),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.13),_transparent_30%)] opacity-90 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex flex-wrap items-center gap-3">
                <p className="rounded-full border border-teal-200/15 bg-teal-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-teal-100">
                  About
                </p>
                <span className="text-xs text-stone-400">
                  A sharper visual system for future updates
                </span>
              </div>
              <div className="relative mt-5 grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                  <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Built to feel premium, lively, and easy to evolve.
                  </h2>
                  <p className="mt-5 max-w-3xl text-base leading-8 text-stone-300 sm:text-lg">
                    {profile.intro}
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 text-sm text-stone-200 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200/80">
                    Visual direction
                  </p>
                  <p className="mt-3 leading-7 text-stone-300">
                    Dark glass surfaces, high-contrast accents, glowing
                    gradients, and motion on hover.
                  </p>
                </div>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
              {highlights.map((item, index) => (
                <article
                  key={item.label}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/8 p-5 shadow-[0_14px_40px_rgba(2,6,23,0.18)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/12 hover:shadow-[0_20px_60px_rgba(251,191,36,0.12)]"
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${index === 0 ? "from-amber-300 via-orange-300 to-rose-300" : index === 1 ? "from-cyan-300 via-teal-300 to-emerald-300" : "from-fuchsia-300 via-pink-300 to-amber-300"}`}
                  />
                  <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                    {item.label}
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold text-white transition duration-300 group-hover:translate-x-1">
                    {item.value}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-stone-300">
                    {item.detail}
                  </p>
                </article>
              ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-2">
              <article className="group rounded-[2rem] border border-white/10 bg-slate-950/58 p-7 shadow-[0_24px_80px_rgba(2,6,23,0.34)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-amber-200/20 hover:shadow-[0_30px_100px_rgba(251,191,36,0.12)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/80">
                      Experience
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">
                      Career timeline
                    </h2>
                  </div>
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100 transition duration-300 group-hover:scale-105">
                    Editable
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {experience.map((item) => (
                    <div
                      key={`${item.title}-${item.company}`}
                      className="group/item rounded-[1.4rem] border border-white/10 bg-white/6 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/20 hover:bg-white/10 hover:shadow-[0_12px_30px_rgba(34,211,238,0.08)]"
                    >
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-white transition duration-300 group-hover/item:translate-x-1">
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

              <article className="group rounded-[2rem] border border-white/10 bg-white/8 p-7 shadow-[0_24px_80px_rgba(2,6,23,0.28)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-fuchsia-200/20 hover:shadow-[0_30px_100px_rgba(236,72,153,0.1)]">
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
                      className="flex items-start justify-between gap-4 rounded-[1.4rem] border border-white/10 bg-slate-950/45 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/20 hover:bg-slate-950/60"
                    >
                      <div>
                        <h3 className="font-medium text-white">{item.name}</h3>
                        <p className="mt-1 text-sm text-stone-300">
                          {item.issuer}
                        </p>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-stone-200 transition duration-300 group-hover:scale-105">
                        {item.year}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.4rem] border border-amber-200/15 bg-amber-200/10 p-4 text-sm leading-6 text-amber-50">
                  Keep adding certificates here as you earn them. This section
                  is already wired to a list, so future updates stay fast.
                </div>
              </article>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-8 lg:self-start">
            <section className="group rounded-[2rem] border border-white/10 bg-white/8 p-7 shadow-[0_24px_80px_rgba(2,6,23,0.26)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-rose-200/20 hover:shadow-[0_30px_100px_rgba(251,113,133,0.12)]">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-gradient-to-r from-rose-300 via-amber-300 to-cyan-300 shadow-[0_0_18px_rgba(251,191,36,0.55)]" />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-200/80">
                  Currently working on
                </p>
              </div>
              <p className="mt-4 text-xl leading-8 text-white">
                {profile.currentlyWorkingOn}
              </p>
            </section>

            <section className="group rounded-[2rem] border border-white/10 bg-slate-950/58 p-7 shadow-[0_24px_80px_rgba(2,6,23,0.34)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-emerald-200/20 hover:shadow-[0_30px_100px_rgba(16,185,129,0.11)]">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/80">
                Projects
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Selected work
              </h2>

              <div className="mt-6 space-y-4">
                {projects.map((project, index) => (
                  <article
                    key={project.name}
                    className="group/item relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/6 p-4 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(14,165,233,0.12)]"
                  >
                    <div
                      className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${index === 0 ? "from-amber-300 to-orange-400" : index === 1 ? "from-cyan-300 to-teal-400" : "from-fuchsia-300 to-rose-400"}`}
                    />
                    <h3 className="pl-2 text-lg font-medium text-white transition duration-300 group-hover/item:translate-x-1">
                      {project.name}
                    </h3>
                    <p className="mt-2 pl-2 text-sm leading-6 text-stone-300">
                      {project.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2 pl-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-slate-900/40 px-3 py-1 text-xs text-stone-200 transition duration-300 hover:border-white/20 hover:bg-white/12"
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
