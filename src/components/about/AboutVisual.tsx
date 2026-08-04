import { motion, useReducedMotion } from "framer-motion"
import NivantosMark from "../ui/NivantosMark"

const networkNodes = [
  { x: 18, y: 22, r: 4, delay: 0 },
  { x: 82, y: 18, r: 5, delay: 0.15 },
  { x: 88, y: 58, r: 4, delay: 0.3 },
  { x: 72, y: 82, r: 3.5, delay: 0.45 },
  { x: 28, y: 78, r: 4, delay: 0.6 },
  { x: 12, y: 52, r: 3, delay: 0.75 },
  { x: 50, y: 12, r: 3.5, delay: 0.2 },
  { x: 50, y: 88, r: 3.5, delay: 0.55 },
]

const connections: [number, number][] = [
  [0, 6], [6, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
  [0, 4], [1, 3], [6, 2], [5, 7], [7, 4],
]

export default function AboutVisual() {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[520px] lg:mx-0"
    >
      <div className="gradient-border relative w-full rounded-3xl">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-8 md:p-10">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, rgba(124,58,237,0.16) 0%, transparent 68%)",
            }}
          />

          <div className="relative mx-auto aspect-square w-full max-w-[380px]">
            {/* Orbit rings */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/20"
              animate={reduced ? undefined : { rotate: 360 }}
              transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-400/15"
              animate={reduced ? undefined : { rotate: -360 }}
              transition={{ duration: 64, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/25 bg-violet-500/[0.04] backdrop-blur-sm"
              animate={reduced ? undefined : { scale: [1, 1.03, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Network SVG */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              {connections.map(([a, b], i) => {
                const na = networkNodes[a]
                const nb = networkNodes[b]
                return (
                  <motion.line
                    key={`${a}-${b}`}
                    x1={na.x}
                    y1={na.y}
                    x2={nb.x}
                    y2={nb.y}
                    stroke="url(#aboutLineGrad)"
                    strokeWidth="0.35"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.45 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.04 }}
                  />
                )
              })}
              <defs>
                <linearGradient id="aboutLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity="0.15" />
                </linearGradient>
              </defs>
            </svg>

            {/* Nodes */}
            {networkNodes.map((node, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-violet-300 to-violet-600 shadow-[0_0_12px_rgba(167,139,250,0.6)]"
                style={{
                  width: node.r * 2.5,
                  height: node.r * 2.5,
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + node.delay }}
                animate={
                  reduced
                    ? undefined
                    : { opacity: [0.55, 1, 0.55], scale: [1, 1.15, 1] }
                }
                {...(!reduced && {
                  transition: {
                    opacity: { duration: 2.8, repeat: Infinity, delay: node.delay },
                    scale: { duration: 2.8, repeat: Infinity, delay: node.delay },
                  },
                })}
              />
            ))}

            {/* Central mark */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-[26%] w-[26%] min-h-[72px] min-w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-violet-400/25 bg-violet-500/10 shadow-[0_0_40px_rgba(124,58,237,0.35)] backdrop-blur-md">
              <NivantosMark size={40} variant="color" />
            </div>
          </div>

          {/* Bottom chips */}
          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-2">
            {["Automatisation", "Intégration", "Optimisation"].map((label, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[0.6875rem] font-medium tracking-wide text-zinc-300 backdrop-blur-sm sm:text-xs"
              >
                {label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 -z-10 scale-105 rounded-full opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />
    </motion.div>
  )
}
