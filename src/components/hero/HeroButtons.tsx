import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroButtonPrimary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="hero-btn hero-btn-primary group">
      <span className="hero-btn-primary-glow" aria-hidden="true" />
      <span className="hero-btn-primary-bg" aria-hidden="true" />
      <span className="hero-btn-primary-shine" aria-hidden="true" />
      <span className="hero-btn-label">{children}</span>
      <ArrowRight size={17} className="hero-btn-icon" strokeWidth={2.5} />
    </a>
  )
}

export function HeroButtonSecondary({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="hero-btn hero-btn-secondary group">
      <span className="hero-btn-secondary-border" aria-hidden="true" />
      <span className="hero-btn-label">
        {children}
        <ChevronDown size={17} className="hero-btn-icon-down" strokeWidth={2.5} />
      </span>
    </a>
  )
}
