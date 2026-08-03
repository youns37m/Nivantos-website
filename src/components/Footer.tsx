import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import Logo from "./ui/Logo"
import { LinkedInIcon, XIcon, GitHubIcon } from "./ui/SocialIcons"
import MotionReveal from "./ui/MotionReveal"

const links = {
  Produit: [
    { label: "Services", href: "#services" },
    { label: "Notre méthode", href: "#processus" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "FAQ", href: "#faq" },
  ],
  Entreprise: [
    { label: "À propos", href: "#avantages" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "#" },
    { label: "Carrières", href: "#" },
  ],
  Légal: [
    { label: "Mentions légales", href: "#" },
    { label: "Confidentialité", href: "#" },
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
    <footer className="relative mt-8 overflow-hidden">
      {/* Top gradient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-violet-600/[0.06] to-transparent" />

      {/* CTA block */}
      <div className="relative px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <MotionReveal variant="scale">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/[0.08]">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-900/5 to-transparent" />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <motion.div
              className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-violet-500/20 blur-[80px]"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="relative flex flex-col items-center gap-6 px-6 py-14 text-center sm:px-10 sm:py-16">
              <h2 className="font-display max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Libérez du temps pour votre entreprise
              </h2>
              <p className="max-w-md text-base text-zinc-400">
                Découvrez comment un agent IA Nivantos peut automatiser vos tâches répétitives dès les premières semaines.
              </p>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(124,58,237,0.3)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-500 group-hover:from-violet-500 group-hover:to-purple-500" />
                <span className="absolute inset-0 opacity-0 blur-xl bg-violet-500 transition-opacity duration-500 group-hover:opacity-50" />
                <span className="relative">Demander un audit gratuit</span>
                <ArrowRight size={16} className="relative transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </MotionReveal>
      </div>

      {/* Main footer grid */}
      <div className="border-t border-white/[0.05] px-5 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {/* Brand + newsletter */}
            <div className="lg:col-span-2">
              <Logo className="mb-5" />
              <p className="mb-6 max-w-xs text-sm leading-relaxed text-zinc-400">
                L&apos;IA qui travaille pendant que vous développez votre entreprise. Agents IA sur mesure pour PME et TPE.
              </p>
              <div className="flex max-w-xs items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] p-1.5 pl-4">
                <Mail size={15} className="shrink-0 text-zinc-500" />
                <span className="flex-1 truncate text-sm text-zinc-400">contact@nivantos.fr</span>
              </div>
              <div className="mt-5 flex gap-2">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] text-zinc-500 transition-all duration-500 hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-300 hover:shadow-[0_0_16px_rgba(124,58,237,0.2)]"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">{title}</h4>
                <ul className="space-y-2.5">
                  {items.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm text-zinc-500 transition-colors duration-300 hover:text-violet-300">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.05] pt-8 sm:flex-row">
            <p className="text-xs text-zinc-600">
              &copy; {new Date().getFullYear()} Nivantos. Tous droits réservés.
            </p>
            <p className="text-xs text-zinc-700">
              Conçu avec passion à Paris, France
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
