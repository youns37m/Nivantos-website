import { motion, useReducedMotion } from "framer-motion"

const particles = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  x: `${(i * 19 + 7) % 96}%`,
  y: `${(i * 31 + 11) % 94}%`,
  size: i % 5 === 0 ? 3.5 : i % 3 === 0 ? 2 : 1.2,
  duration: 3.5 + (i % 8),
  delay: (i % 11) * 0.35,
  glow: i % 4 === 0,
}))

const depthLayers = [
  { opacity: 0.04, blur: 0, scale: 1 },
  { opacity: 0.07, blur: 1, scale: 1.05 },
  { opacity: 0.1, blur: 2, scale: 1.1 },
]

export default function HeroBackground() {
  const reduced = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base depth gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 20% 40%, rgba(76,29,149,0.18) 0%, transparent 55%), radial-gradient(ellipse 70% 60% at 85% 30%, rgba(109,40,217,0.14) 0%, transparent 50%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.08) 0%, transparent 45%)",
        }}
      />

      <div className="absolute inset-0 grid-bg opacity-80" />
      <div className="hero-depth-vignette absolute inset-0" />

      {/* Animated light beams */}
      <motion.div
        className="absolute left-[15%] top-0 h-[65%] w-[2px] opacity-40"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(196,181,253,0.7), transparent)",
          filter: "blur(1px)",
        }}
        animate={reduced ? undefined : { opacity: [0.2, 0.6, 0.2], scaleY: [0.9, 1.05, 0.9] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[28%] top-0 h-[55%] w-[1px] opacity-25"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(168,85,247,0.5), transparent)",
        }}
        animate={reduced ? undefined : { opacity: [0.1, 0.45, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Central spotlight — shifted left for two-column layout */}
      <motion.div
        className="absolute left-[20%] top-0 h-[75%] w-[70%] -translate-x-1/4"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 40% 0%, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0.08) 40%, transparent 70%)",
        }}
        animate={reduced ? undefined : { opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating orbs — layered depth */}
      {depthLayers.map((layer, i) => (
        <motion.div
          key={i}
          className="hero-orb absolute rounded-full"
          style={{
            left: `${15 + i * 25}%`,
            top: `${20 + i * 15}%`,
            width: 300 + i * 120,
            height: 300 + i * 120,
            background: `rgba(124,58,237,${layer.opacity})`,
            filter: `blur(${40 + i * 20}px)`,
          }}
          animate={
            reduced
              ? undefined
              : {
                  x: [0, 20 * (i + 1), 0],
                  y: [0, -15 * (i + 1), 0],
                  scale: [layer.scale, layer.scale * 1.05, layer.scale],
                }
          }
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        className="hero-orb absolute rounded-full"
        style={{
          right: "-5%",
          top: "20%",
          width: 520,
          height: 520,
          background: "rgba(147,51,234,0.15)",
        }}
        animate={reduced ? undefined : { x: [0, -25, 0], y: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Aurora sweep */}
      <motion.div
        className="absolute left-[10%] top-[10%] h-[500px] w-[500px] rounded-full opacity-20"
        style={{
          background:
            "conic-gradient(from 180deg, transparent, rgba(168,85,247,0.2), transparent, rgba(192,132,252,0.12), transparent)",
        }}
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Light particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className={`absolute rounded-full ${p.glow ? "hero-particle-glow bg-violet-300/70" : "bg-violet-400/50"}`}
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={
            reduced
              ? undefined
              : {
                  opacity: p.glow ? [0.15, 0.9, 0.15] : [0.08, 0.5, 0.08],
                  y: [0, -18 - (p.id % 12), 0],
                  x: [0, (p.id % 2 === 0 ? 8 : -8), 0],
                  scale: p.glow ? [1, 1.4, 1] : [1, 1.2, 1],
                }
          }
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background: "linear-gradient(to top, var(--color-nexus-black, #020010), transparent)",
        }}
      />
    </div>
  )
}
