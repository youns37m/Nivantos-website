import { motion } from "framer-motion"
import {
  UtensilsCrossed,
  Briefcase,
  Building,
  Factory,
  ArrowRight,
  Clock,
  type LucideIcon,
} from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import { premiumTransition } from "../lib/motion"

type Example = {
  icon: LucideIcon
  sector: string
  tasks: string[]
  before: string
  after: string
  timeSaved: string
}

const examples: Example[] = [
  {
    icon: UtensilsCrossed,
    sector: "Restaurant",
    tasks: ["Prise de réservation", "Réponses automatiques", "Menus", "Horaires"],
    before: "Appels manqués hors service, réponses répétitives au téléphone et sur les réseaux.",
    after: "Agent 24h/24 qui gère réservations, menus et horaires sans intervention.",
    timeSaved: "12 h / semaine",
  },
  {
    icon: Briefcase,
    sector: "Cabinet comptable",
    tasks: ["Relances clients", "Collecte documents", "Emails"],
    before: "Relances manuelles, relances oubliées et échanges email chronophages.",
    after: "Relances automatiques, collecte de pièces structurée et emails triés.",
    timeSaved: "15 h / semaine",
  },
  {
    icon: Building,
    sector: "Immobilier",
    tasks: ["Qualification prospects", "Prise de rendez-vous", "Réponses automatiques"],
    before: "Prospects non relancés, créneaux de visite gérés à la main.",
    after: "Pipeline qualifié en continu, RDV planifiés et FAQ traitées instantanément.",
    timeSaved: "10 h / semaine",
  },
  {
    icon: Factory,
    sector: "PME",
    tasks: ["Devis", "Factures", "CRM", "Emails"],
    before: "Devis lents à envoyer, CRM mal alimenté, inbox saturée.",
    after: "Devis générés rapidement, CRM synchronisé et emails routés automatiquement.",
    timeSaved: "20 h / semaine",
  },
]

export default function AutomationExamples() {
  return (
    <section id="exemples" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="light-orb" style={{ left: "50%", top: "30%", transform: "translateX(-50%)", width: 700, height: 400, background: "rgba(124,58,237,0.07)" }} />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Cas concrets"
            title={<>Exemples d&apos;<span className="gradient-text">automatisation</span></>}
            description="Des scénarios réels où nos agents IA transforment le quotidien des PME — avec des résultats mesurables."
          />
        </MotionReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {examples.map((item, i) => {
            const Icon = item.icon
            return (
              <MotionReveal key={item.sector} delay={i * 0.08} variant="up">
                <motion.article
                  className="glass-premium group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 sm:p-7"
                  whileHover={{ y: -6 }}
                  transition={premiumTransition}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Header */}
                  <div className="mb-5 flex items-center gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-purple-900/10 text-violet-300 ring-1 ring-violet-500/25 transition-all duration-500 group-hover:shadow-[0_0_28px_rgba(124,58,237,0.3)]">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">{item.sector}</h3>
                  </div>

                  {/* Tasks */}
                  <ul className="mb-6 flex flex-wrap gap-2">
                    {item.tasks.map((task) => (
                      <li
                        key={task}
                        className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-400 backdrop-blur-sm transition-colors duration-300 group-hover:border-violet-500/20 group-hover:text-violet-200"
                      >
                        {task}
                      </li>
                    ))}
                  </ul>

                  {/* Avant / Après */}
                  <div className="mb-5 grid flex-1 gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch">
                    <div className="rounded-xl border border-red-500/10 bg-red-500/[0.04] p-4">
                      <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-red-400/80">
                        Avant
                      </span>
                      <p className="text-sm leading-relaxed text-zinc-400">{item.before}</p>
                    </div>

                    <div className="hidden items-center justify-center sm:flex">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-500/25 bg-violet-500/10 text-violet-300">
                        <ArrowRight size={14} strokeWidth={2} />
                      </div>
                    </div>

                    <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/[0.04] p-4">
                      <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-emerald-400/80">
                        Après
                      </span>
                      <p className="text-sm leading-relaxed text-zinc-300">{item.after}</p>
                    </div>
                  </div>

                  {/* Temps gagné */}
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-violet-500/20 bg-gradient-to-r from-violet-600/10 to-purple-600/5 px-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <Clock size={16} className="text-violet-400" strokeWidth={1.5} />
                      <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Temps gagné
                      </span>
                    </div>
                    <span className="font-display text-lg font-bold gradient-text">{item.timeSaved}</span>
                  </div>
                </motion.article>
              </MotionReveal>
            )
          })}
        </div>
        <p className="mt-6 text-center text-xs text-zinc-600">
          Résultats observés chez des clients PME — ordres de grandeur indicatifs, non garantis.
        </p>
      </div>
    </section>
  )
}
