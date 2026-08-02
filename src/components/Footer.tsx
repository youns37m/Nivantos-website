const footerLinks = {
  services: [
    { label: "Agents IA", href: "#services" },
    { label: "Analyse prédictive", href: "#services" },
    { label: "Chatbots & NLP", href: "#services" },
    { label: "Vision par ordinateur", href: "#services" },
  ],
  entreprise: [
    { label: "Nos avantages", href: "#avantages" },
    { label: "Notre processus", href: "#processus" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "CGV", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="section-divider absolute inset-x-0 top-0" />

      {/* CTA Banner */}
      <div className="px-6 py-16 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-800/10 to-black" />
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/20 blur-[80px]" />

          <div className="relative flex flex-col items-center gap-6 px-8 py-16 text-center md:py-20">
            <h2
              className="max-w-2xl text-3xl font-bold text-white md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Prêt à propulser votre entreprise avec l&apos;IA ?
            </h2>
            <p className="max-w-lg text-zinc-400">
              Rejoignez les entreprises qui ont choisi NexusAI pour leur
              transformation numérique.
            </p>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-violet-500/20 transition-all duration-300 hover:scale-105 hover:shadow-violet-500/40"
            >
              <span className="absolute inset-0 btn-shimmer rounded-full" />
              <span className="relative">Démarrer votre projet</span>
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
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700">
                <span className="text-sm font-bold text-white">N</span>
              </div>
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Nexus<span className="gradient-text">AI</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
              Agence premium d&apos;intelligence artificielle. Nous transformons
              les entreprises ambitieuses grâce à l&apos;IA.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors duration-300 hover:text-violet-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Entreprise
            </h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors duration-300 hover:text-violet-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Légal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors duration-300 hover:text-violet-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} NexusAI. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            {["LinkedIn", "Twitter", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-zinc-600 transition-colors duration-300 hover:text-violet-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
