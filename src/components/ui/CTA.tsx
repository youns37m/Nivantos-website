import type { ButtonHTMLAttributes, MouseEvent } from "react"
import { ArrowRight, Play, Loader2 } from "lucide-react"
import CalendlyTrigger from "./CalendlyTrigger"
import { scrollToSection } from "../../lib/scroll"

export const CTA_PRIMARY_LABEL = "Réserver un audit gratuit"
export const CTA_SECONDARY_LABEL = "Voir une démonstration"
export const CTA_FORM_SUBMIT_LABEL = "Envoyer ma demande"
export const CTA_DEMO_SECTION = "demo"

type CTAProps = {
  className?: string
  block?: boolean
  icon?: boolean
}

function primaryClassName(block?: boolean, className = "") {
  return ["btn-premium", "btn-premium-primary", block && "btn-premium-block w-full", className]
    .filter(Boolean)
    .join(" ")
}

function secondaryClassName(block?: boolean, className = "") {
  return ["btn-premium", "btn-premium-secondary", block && "btn-premium-block w-full", className]
    .filter(Boolean)
    .join(" ")
}

function PrimaryContent({ icon = true, label = CTA_PRIMARY_LABEL }: { icon?: boolean; label?: string }) {
  return (
    <>
      <span className="btn-premium-shimmer" aria-hidden="true" />
      <span className="btn-premium-glow" aria-hidden="true" />
      <span className="btn-premium-label">{label}</span>
      {icon && <ArrowRight size={16} className="btn-premium-icon relative shrink-0" strokeWidth={2} />}
    </>
  )
}

function SecondaryContent({ icon = true }: { icon?: boolean }) {
  return (
    <span className="btn-premium-label">
      {icon && <Play size={15} className="btn-premium-icon" strokeWidth={2.5} fill="currentColor" />}
      {CTA_SECONDARY_LABEL}
    </span>
  )
}

function handleDemoClick(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault()
  scrollToSection(CTA_DEMO_SECTION)
}

export function CTAPrimary({ className = "", block, icon = true }: CTAProps) {
  return (
    <CalendlyTrigger as="button" className={primaryClassName(block, className)}>
      <PrimaryContent icon={icon} />
    </CalendlyTrigger>
  )
}

export function CTASecondary({ className = "", block, icon = true }: CTAProps) {
  return (
    <a href={`#${CTA_DEMO_SECTION}`} onClick={handleDemoClick} className={secondaryClassName(block, className)}>
      <SecondaryContent icon={icon} />
    </a>
  )
}

type CTAPrimarySubmitProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  block?: boolean
  loading?: boolean
}

export function CTAPrimarySubmit({
  className = "",
  block = true,
  loading = false,
  disabled,
  ...props
}: CTAPrimarySubmitProps) {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      className={primaryClassName(block, className)}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 size={18} className="btn-premium-icon animate-spin" />
          <span className="btn-premium-label">Envoi en cours…</span>
        </>
      ) : (
        <PrimaryContent label={CTA_FORM_SUBMIT_LABEL} />
      )}
    </button>
  )
}
