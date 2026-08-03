import { LinkedInIcon, XIcon, GitHubIcon } from "./ui/SocialIcons"
import Button from "./ui/Button"
import MotionReveal from "./ui/MotionReveal"

const footerLinks = {
  services: [
    { label: "Agents IA", href: "#services" },
    { label: "Analyse prédictive", href: "#services" },
    { label: "Chatbots & NLP", href: "#services" },
    { label: "Vision par ordinateur", href: "#services" },
  ],
  entreprise: [
    { label: "Nos avantages", href: "#avantages" },
    { label: "Notre méthode", href: "#processus" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "CGV", href: "#" },
  ],
}

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
  { label: "Twitter", href: "https://twitter.com", icon: XIcon },
  { label: "GitHub", href: "https://github.com", icon: GitHubIcon },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="section-divider absolute inset-x-0 top-0" />

      <div className="px-6 py-16 lg:px-8 lg:py-20">
        <MotionReveal variant="scale">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/25 via-purple-900/10 to-transparent" />
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-purple-700/15 blur-[70px]" />

            <div className="relative flex flex-col items-center gap-7 px-8 py-16 text-center md:py-20">
              <h2 className="font-display max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Prêt à propulser votre entreprise avec l&apos;IA ?
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-zinc-400 md:text-lg">
                Rejoignez les entreprises qui ont choisi NexusAI pour leur
                transformation numérique.
              </p>
              <Button href="#contact" variant="primary" icon>
                Démarrer votre projet
              </Button>
            </div>
          </div>
        </MotionReveal>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#" className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                <span className="text-sm font-bold text-white">N</span>
              </div>
              <span className="font-display text-xl font-bold text-white">
                Nexus<span className="gradient-text">AI</span>
              </span>
            </a>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-zinc-500">
              Agence premium d&apos;intelligence artificielle. Nous transformons
              les entreprises ambitieuses grâce à l&apos;IA.
            </p>

            <div className="flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-zinc-500 transition-all duration-500 hover:border-violet-500/35 hover:bg-violet-500/10 hover:text-violet-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors duration-500 hover:text-violet-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
              Entreprise
            </h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors duration-500 hover:text-violet-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
              Légal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors duration-500 hover:text-violet-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} NexusAI. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={`bottom-${label}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-2 text-sm text-zinc-600 transition-all duration-500 hover:text-violet-300"
              >
                <Icon size={15} />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
