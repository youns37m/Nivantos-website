import { motion } from "framer-motion"

type LogoProps = {
  href?: string
  size?: "sm" | "md"
  showWordmark?: boolean
  className?: string
}

export default function Logo({
  href = "#",
  size = "md",
  showWordmark = true,
  className = "",
}: LogoProps) {
  const iconSize = size === "sm" ? "h-8 w-8" : "h-9 w-9"
  const textSize = size === "sm" ? "text-lg" : "text-xl"

  const content = (
    <>
      <motion.div
        className={`relative flex ${iconSize} items-center justify-center`}
        whileHover={{ scale: 1.06 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 opacity-95 shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-shadow duration-500 group-hover:shadow-[0_0_28px_rgba(124,58,237,0.55)]" />
        <div className="absolute inset-[1.5px] rounded-[10px] bg-[var(--color-nivantos-black)]/50 backdrop-blur-sm" />
        <span className="relative font-display text-sm font-extrabold tracking-tight text-white">
          N
        </span>
      </motion.div>
      {showWordmark && (
        <span className={`font-display ${textSize} font-bold tracking-[-0.04em] text-white`}>
          Nivan<span className="gradient-text">tos</span>
        </span>
      )}
    </>
  )

  return (
    <a href={href} className={`group flex items-center gap-3 ${className}`} aria-label="Nivantos — Accueil">
      {content}
    </a>
  )
}
