import { motion, useReducedMotion, type Variants } from "framer-motion"
import type { ReactNode } from "react"
import {
  blurIn,
  fadeDown,
  fadeLeft,
  fadeRight,
  fadeUp,
  premiumTransition,
  scaleIn,
  viewportOnce,
} from "../../lib/motion"

type Variant = "up" | "down" | "left" | "right" | "scale" | "blur"

type MotionRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  variant?: Variant
}

const variants: Record<Variant, Variants> = {
  up: fadeUp,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
  blur: blurIn,
}

export default function MotionReveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants[variant]}
      transition={{ ...premiumTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
