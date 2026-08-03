import { motion } from "framer-motion"
import { Clock, Bot, Zap, Building2 } from "lucide-react"
import MotionReveal from "./ui/MotionReveal"
import AnimatedCounter from "./ui/AnimatedCounter"
import { premiumTransition } from "../lib/motion"

const stats = [
  {
    icon: Clock,
    display: "24/7",
    animated: false,
    label: "Agents disponibles",
    detail: "Sans interruption, sans congés",
  },
  {
    icon: Bot,
    display: null,
    animated: true,
    value: 4,
    suffix: "",
    label: "Agents spécialisés",
    detail: "Client, commercial, admin, sur mesure",
  },
  {
    icon: Zap,
    display: null,
    animated: true,
    value: 70,
    prefix: "−",
    suffix: "%",
    label: "Tâches répétitives",
    detail: "Temps administratif économisé",
  },
  {
    icon: Building2,
    display: "PME",
    animated: false,
    label: "& TPE",
    detail: "Notre cœur de métier",
  },
]

export default function Stats() {
  return (
    <section id="stats" className="relative px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <MotionReveal key={stat.label} delay={i * 0.08} variant="up">
                <motion.div
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-6 backdrop-blur-xl sm:p-7"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={premiumTransition}
                >
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-violet-600/10 blur-2xl transition-all duration-500 group-hover:bg-violet-600/25" />
                  <motion.div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />

                  <div className="relative">
                    <div className="mb-4 inline-flex rounded-xl bg-violet-500/15 p-2.5 text-violet-300 ring-1 ring-violet-500/20 transition-all duration-500 group-hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div className="font-display mb-1 text-3xl font-bold text-white sm:text-4xl">
                      {stat.animated && stat.value !== undefined ? (
                        <AnimatedCounter
                          value={stat.value}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                        />
                      ) : (
                        stat.display
                      )}
                    </div>
                    <div className="mb-1 text-sm font-semibold text-zinc-300">{stat.label}</div>
                    <div className="text-xs text-zinc-600">{stat.detail}</div>
                  </div>
                </motion.div>
              </MotionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
