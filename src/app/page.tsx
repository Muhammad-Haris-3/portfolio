const skillTags = ["Pandas", "PyTorch", "SQL"];
const webTags = ["React", "Next.js", "Node.js", "Tailwind"];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "40+", label: "Projects Completed" },
  { value: "12+", label: "Tech Certifications" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-[#e5e2e1] selection:bg-[#00f2ff] selection:text-[#00363a]">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_20%_10%,rgba(0,219,231,0.16),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(0,242,255,0.10),transparent_24%),radial-gradient(circle_at_50%_90%,rgba(0,242,255,0.08),transparent_28%),linear-gradient(180deg,#0a0a0a_0%,#0c0c0c_55%,#0a0a0a_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:88px_88px] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />

      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a
            href="#home"
            className="text-2xl font-extrabold tracking-[-0.08em] text-[#f1f1f1] sm:text-[2rem]"
          >
            ALEX.DEV
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <a
              className="border-b-2 border-[#00dbe7] pb-1 text-sm font-semibold text-[#e5e2e1]"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-sm text-[#b9cacb] transition hover:text-[#e5e2e1]"
              href="#about"
            >
              About
            </a>
            <a
              className="text-sm text-[#b9cacb] transition hover:text-[#e5e2e1]"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="text-sm text-[#b9cacb] transition hover:text-[#e5e2e1]"
              href="#experience"
            >
              Experience
            </a>
            <a
              className="text-sm text-[#b9cacb] transition hover:text-[#e5e2e1]"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="text-sm text-[#b9cacb] transition hover:text-[#e5e2e1]"
              href="#services"
            >
              Services
            </a>
            <a
              className="text-sm text-[#b9cacb] transition hover:text-[#e5e2e1]"
              href="#contact"
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#00f2ff] px-5 py-2 text-sm font-semibold text-[#00363a] transition duration-300 hover:scale-95 active:scale-90"
          >
            Resume
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 pb-10 pt-28 sm:px-8 lg:px-12 lg:pt-32">
        <section
          id="home"
          className="flex justify-center pb-16 sm:pb-20 lg:pb-24"
        >
          <div className="glass-card relative w-full max-w-5xl rounded-[28px] border border-white/10 bg-[rgba(26,26,26,0.6)] px-6 py-14 text-center shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#00dbe7]">
              <span className="text-[#00f2ff]">⚡</span>
              Available for new projects
            </div>

            <h1 className="mx-auto max-w-4xl text-[clamp(3rem,6.8vw,5.7rem)] font-extrabold leading-[0.95] tracking-[-0.08em] text-[#f1f1f1]">
              Hi, I&apos;m <span className="text-[#00dbe7]">Alex</span>.
              Building the Future with Data &amp; Code.
            </h1>

            <h2 className="mt-6 text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold tracking-[-0.04em] text-[#c8c6c5]">
              Data Analyst &amp; Software Developer
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#b9cacb] sm:text-[15px] sm:leading-8">
              Focused on transforming complex datasets into actionable insights
              and crafting robust web applications from the ground up.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-2xl bg-[#e1fdff] px-10 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#00363a] shadow-[0_18px_40px_rgba(0,242,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(0,242,255,0.22)]"
              >
                View My Work →
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/14 bg-transparent px-10 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#e5e2e1] transition duration-300 hover:-translate-y-0.5 hover:bg-white/5"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-12 lg:gap-6">
          <article className="glass-card group md:col-span-8 rounded-[22px] border border-white/10 bg-[rgba(26,26,26,0.6)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#00dbe7]/20 hover:shadow-[0_20px_60px_rgba(0,219,231,0.10)] sm:p-8">
            <div className="mb-8 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/6 text-[#e5e2e1]">
                ⛃
              </div>
              <span className="text-white/20 transition group-hover:text-[#00dbe7]">
                ↗
              </span>
            </div>

            <div className="max-w-2xl">
              <h3 className="text-[clamp(1.6rem,2.8vw,2.4rem)] font-bold tracking-[-0.05em] text-[#e5e2e1]">
                Advanced Analytics
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#b9cacb]">
                Harnessing Big Data to predict trends and optimize operations
                with Python and R.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {skillTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#2a2a2a] px-3 py-1 text-xs font-medium text-[#e5e2e1]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article className="glass-card md:col-span-4 rounded-[22px] border border-white/10 bg-[rgba(26,26,26,0.6)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#00dbe7]/20 hover:shadow-[0_20px_60px_rgba(0,219,231,0.10)] sm:p-8">
            <div className="mb-8 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f2e31] text-[#00f2ff]">
                &lt;/&gt;
              </div>
            </div>

            <div className="max-w-xs">
              <h3 className="text-[clamp(1.55rem,2.7vw,2.25rem)] font-bold tracking-[-0.05em] text-[#e5e2e1]">
                Clean Code
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#b9cacb]">
                Building scalable, high-performance web systems.
              </p>

              <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-[90%] rounded-full bg-[#e1fdff]" />
              </div>
            </div>
          </article>

          {stats.map((stat) => (
            <article
              key={stat.label}
              className="glass-card md:col-span-4 rounded-[22px] border border-white/10 bg-[rgba(26,26,26,0.6)] px-6 py-8 text-center transition duration-300 hover:-translate-y-1 hover:border-[#00dbe7]/20 hover:shadow-[0_20px_60px_rgba(0,219,231,0.10)]"
            >
              <div className="text-[clamp(2.5rem,4vw,3.8rem)] font-extrabold tracking-[-0.05em] text-[#e1fdff]">
                {stat.value}
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#b9cacb]">
                {stat.label}
              </p>
            </article>
          ))}
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[#0a0a0a]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-7 text-sm text-[#b9cacb] sm:px-8 lg:flex-row lg:px-12">
          <div>
            <div className="text-2xl font-extrabold tracking-[-0.08em] text-[#f1f1f1]">
              ALEX.DEV
            </div>
            <div className="mt-1 text-xs">
              © 2026 Alex Dev. Built with precision.
            </div>
          </div>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-[#00dbe7]">
              LinkedIn
            </a>
            <a href="#" className="transition hover:text-[#00dbe7]">
              GitHub
            </a>
            <a href="#" className="transition hover:text-[#00dbe7]">
              Twitter
            </a>
            <a href="#contact" className="transition hover:text-[#00dbe7]">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
