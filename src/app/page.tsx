import {
  certificates,
  contactLinks,
  experience,
  highlights,
  links,
  navigation,
  profile,
  projects,
  services,
  skills,
} from "@/content/portfolio";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-[#08111f] text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.22),_transparent_30%),radial-gradient(circle_at_80%_15%,_rgba(20,184,166,0.24),_transparent_28%),radial-gradient(circle_at_20%_85%,_rgba(244,114,182,0.16),_transparent_24%),linear-gradient(180deg,_#07111e_0%,_#0b1627_40%,_#121d2f_72%,_#f6efe4_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-[-6rem] -z-10 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute right-[-6rem] top-[10rem] -z-10 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute bottom-[-8rem] left-[20%] -z-10 h-80 w-80 rounded-full bg-fuchsia-300/10 blur-3xl animate-pulse-glow" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08111f]/70 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
          <a
            href="#home"
            className="text-xl font-semibold tracking-[0.35em] text-white sm:text-2xl"
          >
            {profile.name}
          </a>

          <nav className="hidden flex-wrap items-center gap-1 rounded-full border border-white/10 bg-white/6 px-2 py-2 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-stone-300 transition duration-300 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/40 hover:bg-cyan-300/15"
          >
            Connect
          </a>
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-12 lg:py-8">
        <section
          id="home"
          className="scroll-mt-28 grid gap-6 py-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-10"
        >
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-amber-200/90">
              <span className="rounded-full border border-amber-200/20 bg-amber-300/10 px-3 py-1 text-amber-100">
                Live on Vercel
              </span>
              <span className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-cyan-100">
                Editable portfolio system
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-amber-200 via-cyan-200 to-fuchsia-200 bg-clip-text text-transparent">
                {profile.name}
              </span>
              . I turn raw ideas into polished digital work.
            </h1>

            <p className="max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
              {profile.role} · {profile.location}. This space is designed to
              showcase your experience, skills, services, projects, and future
              updates without losing the visual polish.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-cyan-300 via-teal-300 to-amber-300 px-6 py-3 font-semibold text-slate-950 shadow-[0_18px_40px_rgba(34,211,238,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(34,211,238,0.28)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/8 px-6 py-3 font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/12"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="group rounded-[2rem] border border-white/10 bg-slate-950/58 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.36)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-200/20 hover:shadow-[0_30px_100px_rgba(14,165,233,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/80">
                Snapshot
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {highlights.map((item, index) => (
                  <article
                    key={item.label}
                    className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/12"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                      {item.label}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {item.value}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-stone-300">
                      {item.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.28)] backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                Currently working on
              </p>
              <p className="mt-4 text-xl leading-8 text-white">
                {profile.currentlyWorkingOn}
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-28 py-6 lg:py-8">
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/58 p-7 shadow-[0_24px_80px_rgba(2,6,23,0.36)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-200/20 hover:shadow-[0_30px_100px_rgba(14,165,233,0.18)]">
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
            </article>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/8 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/12">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-200/80">
                  Career Focus
                </p>
                <p className="mt-4 text-lg leading-8 text-white">
                  Product-minded development with clean systems, sharp visuals,
                  and easy future edits.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/58 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-slate-950/70">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                  Quick Links
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-sm text-stone-200 transition duration-300 hover:border-white/20 hover:bg-white/12"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-28 py-6 lg:py-8">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/80">
                Skills
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                What I work with
              </h2>
            </div>
            <span className="hidden rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-stone-300 md:inline-flex">
              Modular and easy to expand
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((skill, index) => (
              <article
                key={skill.category}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/8 p-6 shadow-[0_14px_40px_rgba(2,6,23,0.18)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/12 hover:shadow-[0_20px_60px_rgba(251,191,36,0.12)]"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${index === 0 ? "from-amber-300 via-orange-300 to-rose-300" : index === 1 ? "from-cyan-300 via-teal-300 to-emerald-300" : "from-fuchsia-300 via-pink-300 to-amber-300"}`}
                />
                <h3 className="text-lg font-semibold text-white">
                  {skill.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-900/40 px-3 py-1 text-xs font-medium text-stone-200 transition duration-300 hover:border-white/20 hover:bg-white/12"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-28 py-6 lg:py-8">
          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <article className="group rounded-[2rem] border border-white/10 bg-slate-950/58 p-7 shadow-[0_24px_80px_rgba(2,6,23,0.34)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-amber-200/20 hover:shadow-[0_30px_100px_rgba(251,191,36,0.12)]">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/80">
                Experience
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Career timeline
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-300">
                Real-world work, internships, and builds that shaped the way I
                approach design systems and delivery.
              </p>
            </article>

            <div className="space-y-4">
              {experience.map((item) => (
                <article
                  key={`${item.title}-${item.company}`}
                  className="group rounded-[1.5rem] border border-white/10 bg-white/8 p-5 shadow-[0_12px_34px_rgba(2,6,23,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/20 hover:bg-white/12"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-white transition duration-300 group-hover:translate-x-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-stone-300">{item.company}</p>
                    </div>
                    <p className="text-sm text-amber-200/80">{item.period}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-stone-300">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-28 py-6 lg:py-8">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              What I can help with
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group rounded-[1.75rem] border border-white/10 bg-white/8 p-6 shadow-[0_14px_40px_rgba(2,6,23,0.18)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/12 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]"
              >
                <div
                  className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${index === 0 ? "from-amber-300/90 to-orange-500/90" : index === 1 ? "from-cyan-300/90 to-teal-500/90" : "from-fuchsia-300/90 to-rose-500/90"} shadow-[0_12px_30px_rgba(2,6,23,0.2)]`}
                />
                <h3 className="mt-4 text-lg font-semibold text-white transition duration-300 group-hover:translate-x-1">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  {service.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-28 py-6 lg:py-8">
          <div className="mb-5 flex justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-fixed-dim">
                Projects
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Featured work
              </h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/58 shadow-[0_24px_80px_rgba(2,6,23,0.34)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-200/20 hover:shadow-[0_30px_100px_rgba(34,211,238,0.16)]">
              <div className="relative h-72 overflow-hidden sm:h-80">
                <img
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLuWc65ohB7CsqH9eyT8RnnyJanJFWynoESmImN0W1I2V7Y0jRH19lrHNcEssfPopy-v1Gl6DHPI8iIWbrIrYlip8FLZpqBWf-PD0zNM3IwxuWo7pM_JU0-mTlMK5ScI0J104RI9RUorHenBlsf5tQN1iFlNZff2VLNAexGn1XoGDnCrpcfnLCZIHuOd05GqzSryhj0a7zpGCMGgrK5CRU6f73foTR2yOHrFAMzaKUR9ozs0hcpjw9tR0w"
                  alt="Featured analytics project"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#08111f]/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  Final Year Project
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">
                  Job Data Analytics
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-300">
                  A comprehensive analytics dashboard mapping global tech career
                  pathways and emerging market trends using advanced data
                  scraping.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.25em] text-stone-300">
                  <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1">
                    Python
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1">
                    Seaborn
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1">
                    SQL
                  </span>
                </div>
              </div>
            </article>

            <div className="space-y-4">
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/8 p-5 shadow-[0_14px_40px_rgba(2,6,23,0.18)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/12"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-white transition duration-300 group-hover:translate-x-1">
                      {project.name}
                    </h3>
                    <span
                      className={`h-3 w-3 rounded-full ${index === 0 ? "bg-amber-300 shadow-[0_0_18px_rgba(251,191,36,0.6)]" : index === 1 ? "bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.6)]" : "bg-fuchsia-300 shadow-[0_0_18px_rgba(232,121,249,0.6)]"}`}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-stone-300">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
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
          </div>

          <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/8 p-6 text-sm leading-7 text-stone-300 backdrop-blur-xl">
            Keep adding new projects here as you build. The layout already
            supports a hero project and supporting cards, so future work stays
            easy to publish.
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 py-6 lg:py-8">
          <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
            <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/58 p-7 shadow-[0_24px_80px_rgba(2,6,23,0.34)] backdrop-blur-xl">
              <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/80">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  Let&apos;s build something great.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-stone-300">
                  If you want to collaborate, interview, or discuss a project,
                  this is the place to reach out.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/12"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>

            <article className="rounded-[2rem] border border-white/10 bg-white/8 p-7 shadow-[0_24px_80px_rgba(2,6,23,0.28)] backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                Ready to customize
              </p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-stone-300">
                <p>
                  Replace the placeholder name, links, and project data inside{" "}
                  <span className="text-white">src/content/portfolio.ts</span>.
                </p>
                <p>
                  Add a resume file to{" "}
                  <span className="text-white">public/</span> and point the
                  Resume link to it.
                </p>
                <p>
                  Drop in new sections later without rebuilding the whole page,
                  because the layout is already section-based.
                </p>
              </div>
            </article>
          </div>
        </section>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/70">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-stone-400 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="font-semibold tracking-[0.2em] text-white">
            {profile.name}
          </div>
          <div>© 2026 Built with precision, clarity, and a lot of glass.</div>
        </div>
      </footer>
    </main>
  );
}
