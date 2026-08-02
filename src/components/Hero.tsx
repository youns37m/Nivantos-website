export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20 lg:px-8">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-glow absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="animate-float-slow absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-purple-700/15 blur-[120px]" />
        <div className="animate-float absolute -left-32 bottom-1/4 h-[350px] w-[350px] rounded-full bg-fuchsia-600/10 blur-[100px]" />
      </div>

      {/* Decorative ring */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 lg:block">
        <div className="animate-spin-slow absolute inset-0 rounded-full border border-violet-500/10" />
        <div className="absolute inset-8 rounded-full border border-violet-500/5" />
        <div className="absolute inset-16 rounded-full border border-dashed border-violet-500/10" />
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="animate-fade-up mb-8 inline-flex items-center gap-3 rounded-full glass px-5 py-2 text-sm text-violet-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>
            Agence Premium d&apos;Intelligence Artificielle
          </div>

          {/* Main title */}
          <h1
            className="animate-fade-up mb-8 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: "var(--font-display)", animationDelay: "0.1s" }}
          >
            L&apos;IA qui{" "}
            <span className="gradient-text">transforme</span>
            <br />
            votre entreprise
          </h1>

          <p
            className="animate-fade-up mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl lg:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            NexusAI conçoit des solutions d&apos;intelligence artificielle
            sur mesure pour les entreprises qui visent l&apos;excellence.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-violet-500/20 transition-all duration-300 hover:shadow-violet-500/40 hover:scale-105"
            >
              <span className="absolute inset-0 btn-shimmer rounded-full" />
              <span className="absolute inset-0 rounded-full opacity-0 blur-xl bg-violet-500 transition-opacity duration-300 group-hover:opacity-50" />
              <span className="relative">Prendre un rendez-vous</span>
              <svg
                className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-3 rounded-full glass px-8 py-4 text-base font-semibold text-zinc-300 transition-all duration-300 hover:border-violet-500/30 hover:text-white hover:bg-white/5"
            >
              Découvrir nos services
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="animate-fade-up mx-auto mt-20 max-w-3xl"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="gradient-border rounded-2xl">
            <div className="grid grid-cols-3 divide-x divide-white/5 rounded-2xl glass-strong py-8">
              {[
                { value: "120+", label: "Projets livrés" },
                { value: "98%", label: "Satisfaction client" },
                { value: "×4", label: "ROI moyen constaté" },
              ].map((stat) => (
                <div key={stat.label} className="px-4 text-center">
                  <div
                    className="text-3xl font-bold text-white md:text-4xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-xs font-medium uppercase tracking-wider text-zinc-500 md:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trusted by */}
        <div
          className="animate-fade-up mt-16 text-center"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-600">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-40">
            {["TechCorp", "DataFlow", "InnovateLab", "SmartBiz", "FutureScale"].map(
              (name) => (
                <span
                  key={name}
                  className="text-sm font-semibold tracking-widest text-zinc-400 uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {name}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
