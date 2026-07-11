import { profile, projects } from "@/content/portfolio";

const techStacks = {
  data: ["Python", "Pandas", "Seaborn", "PostgreSQL"],
  web: ["React", "Next.js", "Node.js", "Tailwind"],
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-[#e5e2e1] selection:bg-[#00f2ff] selection:text-[#00363a]">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_20%_10%,rgba(0,219,231,0.16),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(0,242,255,0.10),transparent_24%),radial-gradient(circle_at_50%_90%,rgba(0,242,255,0.08),transparent_28%),linear-gradient(180deg,#0a0a0a_0%,#0c0c0c_55%,#0a0a0a_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:88px_88px] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

      <header className="fixed top-0 z-50 w-full border-b border-white/8 bg-[#0a0a0a]/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a
            href="#home"
            className="text-2xl font-extrabold tracking-[-0.08em] text-[#f1f1f1] sm:text-[2rem]"
          >
            ALEX.DEV
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              className="text-sm text-[#b9cacb] transition hover:text-[#e5e2e1]"
              href="#about"
            >
              About
            </a>
            <a
              className="border-b-2 border-[#00dbe7] pb-1 text-sm font-semibold text-[#00dbe7]"
              href="#projects"
            >
              Work
            </a>
            <a
              className="text-sm text-[#b9cacb] transition hover:text-[#e5e2e1]"
              href="#contact"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="rounded-full bg-[#00f2ff] px-5 py-2 text-sm font-semibold text-[#00363a] transition duration-300 hover:scale-95 active:scale-90"
            >
              Connect
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#00f2ff] px-4 py-2 text-sm font-semibold text-[#00363a] md:hidden"
          >
            Connect
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 pb-10 pt-32 sm:px-8 lg:px-12">
        <section
          id="home"
          className="scroll-mt-28 pb-16 pt-4 sm:pb-20 lg:pb-24"
        >
          <div className="max-w-5xl">
            <h1 className="text-balance text-[clamp(3.2rem,8vw,5.9rem)] font-extrabold leading-[0.95] tracking-[-0.07em] text-[#f1f1f1] sm:max-w-6xl">
              Hi, I&apos;m <span className="text-[#00dbe7]">Alex</span>. I turn
              raw data into insights and build the apps that deliver them.
            </h1>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-[#00f2ff] px-7 py-4 text-base font-semibold text-[#00363a] shadow-[0_18px_40px_rgba(0,242,255,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(0,242,255,0.28)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/14 bg-transparent px-7 py-4 text-base font-medium text-[#e5e2e1] transition duration-300 hover:-translate-y-0.5 hover:bg-white/5"
              >
                Download CV
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="grid gap-4 pb-6 md:grid-cols-12 lg:gap-5"
        >
          <article className="glass-card col-span-12 rounded-[22px] border border-white/10 bg-[rgba(26,26,26,0.42)] p-7 md:col-span-7 lg:min-h-[330px] lg:p-8">
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#00dbe7] shadow-[0_0_18px_rgba(0,219,231,0.45)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b9cacb]">
                  Biography
                </span>
              </div>
              <p className="max-w-2xl text-[clamp(1.6rem,3vw,2.6rem)] font-bold leading-[1.08] tracking-[-0.05em] text-[#f1f1f1]">
                Bridging the gap between engineering and analytics. I build
                robust web apps that don&apos;t just function, they reveal
                hidden patterns.
              </p>
            </div>
          </article>

          <article className="glass-card col-span-12 rounded-[22px] border border-white/10 bg-[rgba(26,26,26,0.42)] p-7 md:col-span-5 lg:p-8">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#00dbe7] shadow-[0_0_18px_rgba(0,219,231,0.45)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b9cacb]">
                Tech Stack
              </span>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b9cacb]">
                  Data Analytics
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {techStacks.data.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#2a2a2a] px-3 py-1 text-xs font-medium text-[#e5e2e1]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b9cacb]">
                  Web Development
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {techStacks.web.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#2a2a2a] px-3 py-1 text-xs font-medium text-[#e5e2e1]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="glass-card col-span-12 rounded-[22px] border border-white/10 bg-[rgba(26,26,26,0.42)] p-7 text-center md:col-span-4 lg:p-8">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#00dbe7]/20 bg-[#0f0f0f] shadow-[0_0_0_1px_rgba(0,219,231,0.12)]">
              <span className="text-3xl text-[#00dbe7]">⌘</span>
            </div>
            <div className="mt-6">
              <h3 className="text-4xl font-bold tracking-[-0.05em] text-[#f1f1f1]">
                100+ WPM
              </h3>
              <p className="mt-2 text-[#b9cacb]">Typing Velocity</p>
            </div>
          </article>

          <article className="glass-card col-span-12 rounded-[22px] border border-white/10 bg-[rgba(26,26,26,0.42)] p-7 md:col-span-8 lg:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-3xl">
                <h3 className="text-3xl font-bold tracking-[-0.05em] text-[#f1f1f1]">
                  Full-Stack Precision
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#b9cacb]">
                  Every line of code is optimized for scale and performance,
                  ensuring data flows seamlessly from database to UI.
                </p>
              </div>
              <div className="flex -space-x-3">
                {["◐", "&lt;&gt;", "⌂"].map((icon) => (
                  <div
                    key={icon}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#1c1b1b] text-sm text-[#e5e2e1] shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section id="projects" className="pt-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#00dbe7]">
                Portfolio
              </p>
              <h2 className="mt-2 text-[clamp(2.4rem,4vw,4rem)] font-bold tracking-[-0.06em] text-[#f1f1f1]">
                Featured Projects
              </h2>
            </div>
            <a
              href="#"
              className="hidden items-center gap-2 text-sm text-[#b9cacb] transition hover:text-[#00dbe7] md:flex"
            >
              View Archive <span>→</span>
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.slice(0, 2).map((project, index) => (
              <article
                key={project.name}
                className="glass-card group overflow-hidden rounded-[22px] border border-white/10 bg-[rgba(26,26,26,0.42)] transition duration-300 hover:-translate-y-1"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    src={
                      index === 0
                        ? "https://lh3.googleusercontent.com/aida/AP1WRLuWc65ohB7CsqH9eyT8RnnyJanJFWynoESmImN0W1I2V7Y0jRH19lrHNcEssfPopy-v1Gl6DHPI8iIWbrIrYlip8FLZpqBWf-PD0zNM3IwxuWo7pM_JU0-mTlMK5ScI0J104RI9RUorHenBlsf5tQN1iFlNZff2VLNAexGn1XoGDnCrpcfnLCZIHuOd05GqzSryhj0a7zpGCMGgrK5CRU6f73foTR2yOHrFAMzaKUR9ozs0hcpjw9tR0w"
                        : "https://lh3.googleusercontent.com/aida/AP1WRLuDbMuwISgPAj7vihydUUpfjSuiC8pc_Mhoaj5a7B-ogxOktBX5cr1a4rN_KzcQIsFq6VX4JDYgnduyUFUAyS3sl8e6H_Zce3hNfQMK7XwqSNjCrbB0PGiFJsouLBtvMgctfMgUJzCE6FDuhSqfiHPXr6EL7Hj6DZy-Ml4j8y8MaBHc4K2mZndjh0lvKpnjPdX9dKxdF273Qp9F1PLeIDXdruZa9A2MiSqqNPWTY-SOXkxoF6l7_GGL3ZQ"
                    }
                    alt={project.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#0a0a0a]/80 px-3 py-1 text-xs font-medium text-[#e5e2e1] backdrop-blur-md">
                    {index === 0 ? "Final Year Project" : "Habit Tracking App"}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-3xl font-semibold tracking-[-0.04em] text-[#f1f1f1]">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#b9cacb]">
                    {project.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#00dbe7]"
                      >
                        <span>✦</span> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="pt-10">
          <article className="glass-card relative overflow-hidden rounded-[22px] border border-white/10 bg-[rgba(26,26,26,0.42)] px-6 py-20 text-center sm:px-10 lg:px-12">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#00f2ff]/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#00f2ff]/5 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="text-[clamp(2.6rem,5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.06em] text-[#f1f1f1]">
                Let&apos;s build something <br />
                <span className="text-[#00dbe7]">data-driven.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#b9cacb]">
                Currently accepting select freelance projects and
                collaborations. Reach out for a consultation.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href="mailto:hello@example.com"
                  className="rounded-full bg-[#00f2ff] px-8 py-4 text-base font-semibold text-[#00363a] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(0,242,255,0.25)]"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </article>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-[#0a0a0a]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-7 text-sm text-[#b9cacb] sm:px-8 lg:flex-row lg:px-12">
          <div className="text-2xl font-extrabold tracking-[-0.08em] text-[#f1f1f1]">
            ALEX.DEV
          </div>
          <div className="flex gap-6">
            <a href="#about" className="transition hover:text-[#00dbe7]">
              LinkedIn
            </a>
            <a href="#projects" className="transition hover:text-[#00dbe7]">
              GitHub
            </a>
            <a href="#contact" className="transition hover:text-[#00dbe7]">
              Email
            </a>
          </div>
          <div>© 2026 ALEX.DEV. Built with precision.</div>
        </div>
      </footer>
    </main>
  );
}
