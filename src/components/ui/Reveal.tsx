import type { ReactNode } from "react"
import { useScrollReveal } from "../../hooks/useScrollReveal"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3 | 4 | 5
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const { ref, visible } = useScrollReveal()
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : ""

  return (
    <div
      ref={ref}
      className={`reveal ${delayClass} ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  )
}
