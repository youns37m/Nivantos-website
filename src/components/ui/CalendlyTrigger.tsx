import type { MouseEvent, ReactNode } from "react"
import { openCalendlyPopup } from "../../lib/calendly"

type CalendlyTriggerProps = {
  children: ReactNode
  className?: string
  as?: "button" | "a"
  href?: string
}

export default function CalendlyTrigger({
  children,
  className = "",
  as = "button",
  href = "#",
}: CalendlyTriggerProps) {
  async function handleClick(e: MouseEvent) {
    e.preventDefault()
    try {
      await openCalendlyPopup()
    } catch {
      window.open(href, "_blank")
    }
  }

  if (as === "a") {
    return (
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  )
}
