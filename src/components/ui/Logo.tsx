import { motion } from "framer-motion"
import NivantosMark from "./NivantosMark"

type LogoVariant = "horizontal" | "icon" | "square"
type LogoSize = "sm" | "md" | "lg"

type LogoProps = {
  href?: string
  variant?: LogoVariant
  size?: LogoSize
  showWordmark?: boolean
  className?: string
  mono?: boolean
}

const iconSizes: Record<LogoSize, number> = {
  sm: 28,
  md: 32,
  lg: 40,
}

const wordmarkSizes: Record<LogoSize, string> = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
}

export default function Logo({
  href = "#",
  variant = "horizontal",
  size = "md",
  showWordmark = true,
  className = "",
  mono = false,
}: LogoProps) {
  const markVariant = mono ? "mono" : "color"
  const iconPx = iconSizes[size]
  const wordmarkClass = wordmarkSizes[size]

  const mark = (
    <motion.div
      className="relative shrink-0"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
    >
      {variant === "square" ? (
        <div
          className="flex items-center justify-center rounded-xl bg-[#010008] ring-1 ring-white/[0.08] transition-all duration-500 group-hover:ring-violet-500/30 group-hover:shadow-[0_0_28px_rgba(124,58,237,0.35)]"
          style={{ width: iconPx + 8, height: iconPx + 8 }}
        >
          <NivantosMark size={iconPx} variant={markVariant} />
        </div>
      ) : (
        <div className="transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.55)]">
          <NivantosMark size={iconPx} variant={markVariant} />
        </div>
      )}
    </motion.div>
  )

  const wordmark = showWordmark && variant !== "icon" && (
    <span
      className={`font-display ${wordmarkClass} font-bold tracking-[-0.045em] text-white`}
    >
      Nivantos
    </span>
  )

  const content = (
    <>
      {mark}
      {wordmark}
    </>
  )

  if (variant === "icon") {
    return (
      <a
        href={href}
        className={`group inline-flex ${className}`}
        aria-label="Nivantos — Accueil"
      >
        {mark}
      </a>
    )
  }

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Nivantos — Accueil"
    >
      {content}
    </a>
  )
}
