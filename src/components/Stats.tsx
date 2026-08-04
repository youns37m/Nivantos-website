import { motion } from "framer-motion"
import { Clock, Bot, Zap, Users } from "lucide-react"
import MotionReveal from "./ui/MotionReveal"
import AnimatedCounter from "./ui/AnimatedCounter"
import { premiumTransition } from "../lib/motion"

const stats = [
  {
    icon: Clock,
    display: "24/7",
    animated: false,
    label: "Disponibilité",
    detail: "Sans interruption ni congés",
  },
  {
    icon: Bot,
    display: null,
    animated: true,
    value: 4,
    suffix: "",
    label: "Types d'agents",
    detail: "Client, commercial, admin, sur mesure",
  },
  {
    icon: Zap,
    display: null,
    animated: true,
    value: 70,
    prefix: "−",
    suffix: "%",
    label: "Tâches admin*",
    detail: "Temps libéré en moyenne",
  },
  {
    icon: Users,
    display: null,
    animated: true,
    value: 48,
    suffix: "h",
    label: "Premier échange",
    detail: "Sous 48h ouvrées",
  },
]

export default function Stats() {
  return (
    <section id="stats" className="section-padding-compact relative px-5 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          En chiffres
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <MotionReveal key={stat.label} delay={i * 0.06} variant="up">
                <motion.div
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6"
                  whileHover={{ y: -4 }}
                  transition={premiumTransition}
                >
                  <div className="mb-3 inline-flex rounded-lg bg-violet-500/12 p-2 text-violet-300">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div className="font-display mb-1 text-2xl font-bold text-white sm:text-3xl">
                    {stat.animated && stat.value !== undefined ? (
                      <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    ) : (
                      stat.display
                    )}
                  </div>
                  <div className="mb-0.5 text-sm font-medium text-zinc-200">{stat.label}</div>
                  <div className="text-xs text-zinc-500">{stat.detail}</div>
                </motion.div>
              </MotionReveal>
            )
          })}
        </div>
        <p className="mt-4 text-center text-[0.65rem] text-zinc-600">* Estimation moyenne observée sur nos déploiements PME</p>
      </div>
    </section>
  )
}
