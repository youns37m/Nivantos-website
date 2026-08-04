import { MapPin, Mail, ExternalLink, ShieldCheck } from "lucide-react"
import { CTAPrimary } from "./ui/CTA"
import Logo from "./ui/Logo"
import { LinkedInIcon } from "./ui/SocialIcons"
import MotionReveal from "./ui/MotionReveal"
import { company, legalLinks, footerNav } from "../lib/company"

function FooterLinkColumn({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-violet-600/[0.05] to-transparent" />

      {/* CTA */}
      <div className="relative px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <MotionReveal variant="scale">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/15 via-transparent to-purple-900/10" />
            <div className="absolute inset-0 grid-bg opacity-20" />

            <div className="relative flex flex-col items-center gap-5 px-6 py-12 text-center sm:px-10 sm:py-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1 text-xs font-medium text-emerald-300">
                <ShieldCheck size={14} strokeWidth={2} />
                Audit gratuit · Sans engagement
              </div>
              <h2 className="font-display max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                Prêt à automatiser votre entreprise&nbsp;?
              </h2>
              <p className="max-w-lg text-base text-zinc-400">
                Réservez un audit de 30 minutes avec un expert Nivantos. Nous identifions vos gains potentiels et
                estimons votre ROI — gratuitement.
              </p>
              <CTAPrimary />
            </div>
          </div>
        </MotionReveal>
      </div>

      {/* Main footer */}
      <div className="border-t border-white/[0.06] bg-[#02010a]/80 px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl py-14 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Logo className="mb-5" />
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-zinc-400">{company.tagline}</p>
              <p className="text-xs leading-relaxed text-zinc-600">
                {company.legalName} · Agents IA sur mesure pour PME et TPE
              </p>
            </div>

            {/* Navigation */}
            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4">
              <FooterLinkColumn title="Solutions" links={footerNav.solutions} />
              <FooterLinkColumn title="Entreprise" links={footerNav.entreprise} />
            </div>

            {/* Contact */}
            <div className="lg:col-span-4">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">Nous contacter</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(company.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    <MapPin size={16} className="mt-0.5 shrink-0 text-violet-400" strokeWidth={1.75} />
                    <span>
                      <span className="block font-medium text-zinc-300 group-hover:text-white">Adresse</span>
                      {company.address.line1}
                      <br />
                      {company.address.line2}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className="group flex items-start gap-3 text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    <Mail size={16} className="mt-0.5 shrink-0 text-violet-400" strokeWidth={1.75} />
                    <span>
                      <span className="block font-medium text-zinc-300 group-hover:text-white">Email</span>
                      {company.email}
                      <span className="mt-0.5 block text-xs text-zinc-500">Réponse sous 24h</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={company.linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-zinc-300 transition-all hover:border-violet-500/30 hover:bg-violet-500/[0.08] hover:text-white"
                  >
                    <LinkedInIcon size={16} className="text-violet-300" />
                    <span className="font-medium">{company.linkedin.label}</span>
                    <ExternalLink size={13} className="ml-auto text-zinc-600 group-hover:text-violet-300" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal links row */}
          <div className="mt-12 border-t border-white/[0.06] pt-8">
            <nav aria-label="Informations légales" className="flex flex-wrap gap-x-6 gap-y-3">
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-500 transition-colors hover:text-violet-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar — trust signals */}
      <div className="border-t border-white/[0.06] bg-[#010008] px-5 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs text-zinc-600">
            © {year} {company.name}. Tous droits réservés.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-600">
            <span>{company.legalName}</span>
            <span className="hidden h-3 w-px bg-white/10 sm:block" aria-hidden="true" />
            <span>{company.address.full}</span>
          </div>

          <p className="text-xs text-zinc-700">
            Conçu et opéré depuis Paris, France
          </p>
        </div>
      </div>
    </footer>
  )
}
