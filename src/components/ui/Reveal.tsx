import type { ReactNode } from "react"
import { useScrollReveal, type RevealVariant } from "../../hooks/useScrollReveal"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3 | 4 | 5
  variant?: RevealVariant
}

const variantClass: Record<RevealVariant, string> = {
  up: "reveal-up",
  down: "reveal-down",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  blur: "reveal-blur",
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: RevealProps) {
  const { ref, visible } = useScrollReveal()
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : ""

  return (
    <div
      ref={ref}
      className={`reveal ${variantClass[variant]} ${delayClass} ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  )
}
