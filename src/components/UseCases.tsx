import { motion } from "framer-motion"
import {
  UtensilsCrossed,
  Stethoscope,
  Building,
  ShoppingBag,
  Briefcase,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import { premiumTransition } from "../lib/motion"

type UseCase = {
  icon: LucideIcon
  sector: string
  agent: string
  tasks: string[]
  result: string
}

const useCases: UseCase[] = [
  {
    icon: UtensilsCrossed,
    sector: "Restaurant",
    agent: "Agent Service Client",
    tasks: ["Réservations", "Allergies & menus", "Horaires & événements"],
    result: "−60% d'appels manqués en dehors service",
  },
  {
    icon: Stethoscope,
    sector: "Cabinet médical",
    agent: "Agent Administratif",
    tasks: ["Prise de RDV", "Rappels patients", "Questions fréquentes"],
    result: "Secrétariat libéré 15h/semaine",
  },
  {
    icon: Building,
    sector: "Immobilier",
    agent: "Agent Commercial",
    tasks: ["Qualification prospects", "Relances automatiques", "Visites & créneaux"],
    result: "+3 contrats signés / mois en moyenne",
  },
  {
    icon: ShoppingBag,
    sector: "E-commerce",
    agent: "Agent Service Client",
    tasks: ["Suivi commandes", "Retours & SAV", "Recommandations produits"],
    result: "Satisfaction client +40%",
  },
  {
    icon: Briefcase,
    sector: "Cabinet comptable",
    agent: "Agent Administratif",
    tasks: ["Collecte documents", "Relances clients", "Emails récurrents"],
    result: "2 demi-journées récupérées / semaine",
  },
  {
    icon: Wrench,
    sector: "Artisan BTP",
    agent: "Agent Sur Mesure",
    tasks: ["Devis automatiques", "Planification chantiers", "Relances impayés"],
    result: "Devis envoyés en moins de 2h",
  },
]

export default function UseCases() {
  return (
    <section id="cas-usage" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="light-orb" style={{ right: "0", bottom: "0", width: 550, height: 400, background: "rgba(147,51,234,0.08)" }} />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Cas d'usage"
            title={<>L&apos;IA adaptée à <span className="gradient-text">votre métier</span></>}
            description="Chaque secteur a ses défis. Nos agents IA s'adaptent à votre réalité terrain."
          />
        </MotionReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {useCases.map((item, i) => {
            const Icon = item.icon
            return (
              <MotionReveal key={item.sector} delay={i * 0.07} variant="up">
                <motion.article
                  className="glass-premium group relative h-full overflow-hidden rounded-2xl p-6"
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={premiumTransition}
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet-600/10 blur-3xl transition-all duration-500 group-hover:bg-violet-600/20" />

                  <div className="relative">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-purple-900/10 text-violet-300 ring-1 ring-violet-500/25 transition-all duration-500 group-hover:shadow-[0_0_28px_rgba(124,58,237,0.3)]">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                      <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-0.5 text-[0.65rem] font-medium text-violet-300">
                        {item.agent}
                      </span>
                    </div>

                    <h3 className="font-display mb-3 text-xl font-bold text-white">{item.sector}</h3>

                    <ul className="mb-4 space-y-1.5">
                      {item.tasks.map((task) => (
                        <li key={task} className="flex items-center gap-2 text-sm text-zinc-400">
                          <span className="h-1 w-1 rounded-full bg-violet-400" />
                          {task}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-white/[0.06] pt-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600">Résultat</span>
                      <p className="mt-1 text-sm font-medium text-violet-200">{item.result}</p>
                    </div>
                  </div>
                </motion.article>
              </MotionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
