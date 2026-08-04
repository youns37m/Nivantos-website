import type { ReactNode } from "react"
import Logo from "../components/ui/Logo"
import { company, legalLinks } from "../lib/company"

type LegalLayoutProps = {
  title: string
  lastUpdated?: string
  children: ReactNode
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="noise min-h-screen bg-nivantos-black font-sans text-white antialiased">
      <header className="border-b border-white/[0.06] px-5 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Logo />
          <a
            href="/"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-violet-300"
          >
            ← Retour au site
          </a>
        </div>
      </header>

      <main className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <article className="legal-content mx-auto max-w-3xl">
          <h1 className="font-display mb-2 text-3xl font-bold text-white sm:text-4xl">{title}</h1>
          {lastUpdated && (
            <p className="mb-10 text-sm text-zinc-500">Dernière mise à jour : {lastUpdated}</p>
          )}
          {children}
        </article>
      </main>

      <footer className="border-t border-white/[0.06] px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} {company.name}. {company.legalName}
          </p>
          <nav className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-zinc-500 transition-colors hover:text-violet-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  )
}
