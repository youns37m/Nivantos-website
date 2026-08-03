import { motion } from "framer-motion"
import { TrendingUp, Users, Clock, Award } from "lucide-react"
import MotionReveal from "./ui/MotionReveal"
import { premiumTransition } from "../lib/motion"

const stats = [
  {
    icon: Award,
    value: "98%",
    label: "Satisfaction client",
    detail: "Taux de recommandation",
  },
  {
    icon: TrendingUp,
    value: "120+",
    label: "Projets livrés",
    detail: "Depuis 2018",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support dédié",
    detail: "Réponse sous 24h",
  },
  {
    icon: Users,
    value: "×4",
    label: "ROI moyen",
    detail: "Retour constaté",
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
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={premiumTransition}
                >
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-violet-600/10 blur-2xl transition-all duration-500 group-hover:bg-violet-600/20" />

                  <div className="relative">
                    <div className="mb-4 inline-flex rounded-xl bg-violet-500/15 p-2.5 text-violet-300 ring-1 ring-violet-500/20 transition-all duration-500 group-hover:shadow-[0_0_24px_rgba(124,58,237,0.3)]">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div className="font-display mb-1 text-3xl font-bold text-white sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mb-1 text-sm font-semibold text-zinc-300">
                      {stat.label}
                    </div>
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
