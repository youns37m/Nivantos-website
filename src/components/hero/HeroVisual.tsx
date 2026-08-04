import { motion, useReducedMotion } from "framer-motion"

const nodes = [
  { angle: 0, radius: 88, size: 9, delay: 0 },
  { angle: 72, radius: 88, size: 7, delay: 0.4 },
  { angle: 144, radius: 88, size: 8, delay: 0.8 },
  { angle: 216, radius: 88, size: 6, delay: 1.2 },
  { angle: 288, radius: 88, size: 9, delay: 1.6 },
  { angle: 36, radius: 118, size: 5, delay: 0.2 },
  { angle: 108, radius: 118, size: 6, delay: 0.6 },
  { angle: 180, radius: 118, size: 5, delay: 1.0 },
  { angle: 252, radius: 118, size: 5, delay: 1.4 },
  { angle: 324, radius: 118, size: 6, delay: 1.8 },
]

const chips = [
  { label: "GPT-4", delay: 1.2 },
  { label: "RAG", delay: 1.4 },
  { label: "NLP", delay: 1.6 },
  { label: "ML", delay: 1.8 },
]

function polarToXY(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius }
}

function DataChip({ label, delay }: { label: string; delay: number }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="shrink-0 rounded-lg border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-[0.6875rem] font-semibold tracking-wider text-violet-100 backdrop-blur-md sm:text-xs"
    >
      <motion.span
        animate={reduced ? undefined : { y: [0, -3, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, delay }}
        className="block whitespace-nowrap"
      >
        {label}
      </motion.span>
    </motion.div>
  )
}

export default function HeroVisual() {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[440px] lg:max-w-none"
    >
      <div className="gradient-border relative w-full rounded-3xl">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-6 md:p-8">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 42%, rgba(124,58,237,0.14) 0%, transparent 62%)",
            }}
          />

          {/* Top badges */}
          <div className="relative z-20 mb-5 flex items-center justify-between gap-3">
            <DataChip label={chips[0].label} delay={chips[0].delay} />
            <DataChip label={chips[1].label} delay={chips[1].delay} />
          </div>

          {/* Orbital scene — contained square, nothing clipped */}
          <div className="relative z-10 mx-auto w-full max-w-[300px] sm:max-w-[320px] lg:max-w-[340px]">
            <div className="hero-visual-scene relative aspect-square w-full [container-type:size]">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 400 400"
                fill="none"
                aria-hidden="true"
              >
                {nodes.slice(0, 5).map((node, i) => {
                  const { x, y } = polarToXY(node.angle, node.radius * 0.92)
                  return (
                    <motion.line
                      key={node.angle}
                      x1="200"
                      y1="200"
                      x2={200 + x}
                      y2={200 + y}
                      stroke="url(#lineGrad)"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.35 }}
                      transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                    />
                  )
                })}
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#c084fc" stopOpacity="0.08" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Rings — sized to fit inside safe area (~78% of scene) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="hero-visual-ring h-[min(260px,78cqw)] w-[min(260px,78cqw)] rounded-full sm:h-[min(280px,78cqw)] sm:w-[min(280px,78cqw)]"
                  style={{ transform: "rotateX(72deg)" }}
                  animate={reduced ? undefined : { rotate: 360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="hero-visual-ring h-[min(210px,62cqw)] w-[min(210px,62cqw)] rounded-full border-dashed opacity-55 sm:h-[min(220px,62cqw)] sm:w-[min(220px,62cqw)]"
                  style={{ transform: "rotateX(65deg) rotateY(10deg)" }}
                  animate={reduced ? undefined : { rotate: -360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="hero-visual-ring h-[min(155px,46cqw)] w-[min(155px,46cqw)] rounded-full opacity-35 sm:h-[min(165px,46cqw)] sm:w-[min(165px,46cqw)]"
                  style={{ transform: "rotateX(55deg) rotateY(-8deg)" }}
                  animate={reduced ? undefined : { rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Core — centered, subtle intentional glow */}
              <motion.div
                className="hero-visual-core absolute left-1/2 top-1/2 z-10 h-[22%] w-[22%] min-h-[72px] min-w-[72px] max-h-[96px] max-w-[96px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:min-h-[80px] sm:min-w-[80px]"
                animate={
                  reduced
                    ? undefined
                    : {
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          "0 0 48px rgba(124,58,237,0.55), 0 0 96px rgba(124,58,237,0.2)",
                          "0 0 64px rgba(124,58,237,0.75), 0 0 128px rgba(124,58,237,0.28)",
                          "0 0 48px rgba(124,58,237,0.55), 0 0 96px rgba(124,58,237,0.2)",
                        ],
                      }
                }
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-2 rounded-full border border-white/20" />
                <div className="absolute inset-[22%] rounded-full bg-white/10 backdrop-blur-sm" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={reduced ? undefined : { rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 40 40" className="h-8 w-8 text-white/90 sm:h-9 sm:w-9" fill="none">
                    <path
                      d="M20 4 L24 16 L36 16 L26 24 L30 36 L20 28 L10 36 L14 24 L4 16 L16 16 Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      fill="rgba(255,255,255,0.08)"
                    />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Orbiting nodes — radii scaled to scene */}
              {nodes.map((node) => {
                const { x, y } = polarToXY(node.angle, node.radius)
                return (
                  <motion.div
                    key={node.angle}
                    className="hero-visual-node absolute rounded-full"
                    style={{
                      width: node.size,
                      height: node.size,
                      left: "50%",
                      top: "50%",
                      marginLeft: x - node.size / 2,
                      marginTop: y - node.size / 2,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, delay: 0.9 + node.delay }}
                  >
                    <motion.div
                      className="h-full w-full rounded-full"
                      animate={
                        reduced ? undefined : { opacity: [0.55, 1, 0.55], scale: [1, 1.25, 1] }
                      }
                      transition={{ duration: 2.5, repeat: Infinity, delay: node.delay }}
                    />
                  </motion.div>
                )
              })}

              <div className="hero-depth-vignette pointer-events-none absolute inset-0 rounded-full" />
            </div>
          </div>

          {/* Bottom badges */}
          <div className="relative z-20 mt-5 flex items-center justify-between gap-3">
            <DataChip label={chips[2].label} delay={chips[2].delay} />
            <DataChip label={chips[3].label} delay={chips[3].delay} />
          </div>

          {/* Status bar */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="relative z-20 mt-6 flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs text-zinc-400">IA active</span>
            </div>
            <span className="font-display text-xs font-semibold text-violet-300">99.8% uptime</span>
          </motion.div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 -z-10 scale-105 rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 68%)",
          filter: "blur(36px)",
        }}
      />
    </motion.div>
  )
}
