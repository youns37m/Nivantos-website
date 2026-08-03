import { motion, useReducedMotion } from "framer-motion"

const nodes = [
  { angle: 0, radius: 130, size: 10, delay: 0 },
  { angle: 72, radius: 130, size: 8, delay: 0.4 },
  { angle: 144, radius: 130, size: 9, delay: 0.8 },
  { angle: 216, radius: 130, size: 7, delay: 1.2 },
  { angle: 288, radius: 130, size: 10, delay: 1.6 },
  { angle: 36, radius: 185, size: 6, delay: 0.2 },
  { angle: 108, radius: 185, size: 7, delay: 0.6 },
  { angle: 180, radius: 185, size: 5, delay: 1.0 },
  { angle: 252, radius: 185, size: 6, delay: 1.4 },
  { angle: 324, radius: 185, size: 7, delay: 1.8 },
]

function polarToXY(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius }
}

export default function HeroVisual() {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotateY: -15 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto flex w-full max-w-[480px] items-center justify-center lg:max-w-none"
    >
      {/* Glass frame */}
      <div className="gradient-border relative w-full rounded-3xl">
        <div className="relative overflow-hidden rounded-3xl glass-strong px-6 py-10 sm:px-8 sm:py-12">
          {/* Inner glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.15) 0%, transparent 65%)",
            }}
          />

          <div className="hero-visual-scene relative mx-auto flex h-[320px] w-full items-center justify-center sm:h-[380px]">
            {/* SVG connection lines */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 400 400"
              fill="none"
              aria-hidden="true"
            >
              {nodes.slice(0, 5).map((node, i) => {
                const { x, y } = polarToXY(node.angle, node.radius * 0.85)
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
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                  />
                )
              })}
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#c084fc" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Outer ring */}
            <motion.div
              className="hero-visual-ring absolute h-[280px] w-[280px] rounded-full sm:h-[320px] sm:w-[320px]"
              style={{ transform: "rotateX(72deg)" }}
              animate={reduced ? undefined : { rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Middle ring */}
            <motion.div
              className="hero-visual-ring absolute h-[220px] w-[220px] rounded-full border-dashed opacity-60 sm:h-[250px] sm:w-[250px]"
              style={{ transform: "rotateX(65deg) rotateY(10deg)" }}
              animate={reduced ? undefined : { rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner ring */}
            <motion.div
              className="hero-visual-ring absolute h-[160px] w-[160px] rounded-full opacity-40 sm:h-[180px] sm:w-[180px]"
              style={{ transform: "rotateX(55deg) rotateY(-8deg)" }}
              animate={reduced ? undefined : { rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Central AI core */}
            <motion.div
              className="hero-visual-core relative z-10 h-24 w-24 rounded-full sm:h-28 sm:w-28"
              animate={
                reduced
                  ? undefined
                  : {
                      scale: [1, 1.06, 1],
                      boxShadow: [
                        "0 0 60px rgba(124,58,237,0.6), 0 0 120px rgba(124,58,237,0.25)",
                        "0 0 80px rgba(124,58,237,0.8), 0 0 160px rgba(124,58,237,0.35)",
                        "0 0 60px rgba(124,58,237,0.6), 0 0 120px rgba(124,58,237,0.25)",
                      ],
                    }
              }
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Core inner pattern */}
              <div className="absolute inset-2 rounded-full border border-white/20" />
              <div className="absolute inset-5 rounded-full bg-white/10 backdrop-blur-sm" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={reduced ? undefined : { rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 40 40" className="h-10 w-10 text-white/90" fill="none">
                  <path
                    d="M20 4 L24 16 L36 16 L26 24 L30 36 L20 28 L10 36 L14 24 L4 16 L16 16 Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    fill="rgba(255,255,255,0.08)"
                  />
                </svg>
              </motion.div>
            </motion.div>

            {/* Orbiting nodes */}
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
                  transition={{ duration: 0.5, delay: 0.9 + node.delay }}
                >
                  <motion.div
                    className="h-full w-full rounded-full"
                    animate={
                      reduced
                        ? undefined
                        : { opacity: [0.6, 1, 0.6], scale: [1, 1.3, 1] }
                    }
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: node.delay,
                    }}
                  />
                </motion.div>
              )
            })}

            {/* Floating data chips */}
            {[
              { label: "GPT-4", x: "-10%", y: "8%", delay: 1.2 },
              { label: "RAG", x: "72%", y: "12%", delay: 1.4 },
              { label: "ML", x: "68%", y: "72%", delay: 1.6 },
              { label: "NLP", x: "-5%", y: "68%", delay: 1.8 },
            ].map((chip) => (
              <motion.div
                key={chip.label}
                className="absolute rounded-lg border border-violet-500/25 bg-violet-500/10 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wider text-violet-200 backdrop-blur-sm sm:text-xs"
                style={{ left: chip.x, top: chip.y }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: chip.delay }}
              >
                <motion.span
                  animate={reduced ? undefined : { y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: chip.delay }}
                  className="block"
                >
                  {chip.label}
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* Status bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-4 flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs text-zinc-400">IA active</span>
            </div>
            <span className="font-display text-xs font-semibold text-violet-300">
              99.8% uptime
            </span>
          </motion.div>
        </div>
      </div>

      {/* Decorative glow behind visual */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full opacity-50"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
    </motion.div>
  )
}
