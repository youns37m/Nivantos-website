import { motion, useReducedMotion } from "framer-motion"

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: `${8 + (i * 17) % 84}%`,
  y: `${5 + (i * 23) % 90}%`,
  size: 2 + (i % 3),
  duration: 4 + (i % 5),
  delay: (i % 7) * 0.4,
}))

export default function HeroBackground() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      {/* Animated spotlight */}
      <motion.div
        className="hero-spotlight"
        animate={
          prefersReducedMotion
            ? undefined
            : { opacity: [0.5, 0.85, 0.5], scale: [1, 1.06, 1] }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="hero-beam"
        animate={prefersReducedMotion ? undefined : { opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="hero-beam-glow" />

      {/* Floating orbs */}
      <motion.div
        className="hero-orb"
        style={{
          left: "50%",
          top: "15%",
          width: 720,
          height: 720,
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.32) 0%, rgba(124,58,237,0.06) 45%, transparent 70%)",
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : { scale: [1, 1.12, 1], opacity: [0.6, 0.9, 0.6] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="hero-orb"
        style={{
          right: "-10%",
          top: "10%",
          width: 500,
          height: 500,
          background: "rgba(109,40,217,0.16)",
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, -30, 0], y: [0, 25, 0] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="hero-orb"
        style={{
          left: "-12%",
          bottom: "5%",
          width: 440,
          height: 440,
          background: "rgba(192,132,252,0.12)",
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, 25, 0], y: [0, -20, 0] }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rotating aurora ring */}
      <motion.div
        className="absolute left-1/2 top-[20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-30"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, rgba(168,85,247,0.15), transparent, rgba(124,58,237,0.1), transparent)",
        }}
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-violet-400/40"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.1, 0.6, 0.1], y: [0, -20, 0] }
          }
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Orbital rings — desktop */}
      <div className="absolute right-0 top-1/2 hidden h-[580px] w-[580px] -translate-y-1/2 translate-x-1/4 xl:block">
        <motion.div
          className="hero-ring absolute inset-0"
          animate={prefersReducedMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <div className="hero-ring absolute inset-10 opacity-50" />
        <motion.div
          className="hero-ring absolute inset-20 border-dashed opacity-30"
          animate={prefersReducedMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_24px_rgba(167,139,250,0.9)]"
          animate={
            prefersReducedMotion
              ? undefined
              : { boxShadow: ["0 0 16px rgba(167,139,250,0.6)", "0 0 32px rgba(167,139,250,1)", "0 0 16px rgba(167,139,250,0.6)"] }
          }
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </div>
  )
}
