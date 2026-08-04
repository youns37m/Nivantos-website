import { motion } from "framer-motion"
import type { MouseEvent } from "react"
import {
  MessageSquare,
  TrendingUp,
  FileText,
  Bot,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import { scrollToSection } from "../lib/scroll"
import { premiumTransition } from "../lib/motion"

type Service = {
  number: string
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

const services: Service[] = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Agent IA Service Client",
    description: "Répond aux clients 24h/24, traite les questions fréquentes et oriente les demandes sans embaucher.",
    tags: ["Support", "24h/24", "Multicanal"],
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Agent IA Commercial",
    description: "Qualifie les prospects, relance automatiquement et fait avancer votre pipeline commercial.",
    tags: ["Prospection", "Relances", "Conversion"],
  },
  {
    number: "03",
    icon: FileText,
    title: "Agent IA Administratif",
    description: "Automatise emails, devis et factures. Libérez plusieurs heures par semaine dès le premier mois.",
    tags: ["Emails", "Devis", "Facturation"],
  },
  {
    number: "04",
    icon: Bot,
    title: "Agent IA Sur Mesure",
    description: "Un agent conçu pour votre métier, intégré à vos outils et formé sur vos processus.",
    tags: ["Sur mesure", "Intégration", "Évolutif"],
  },
]

function handleMouseMove(e: MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty("--mouse-x", `${((e.clientX - rect.left) / rect.width) * 100}%`)
  e.currentTarget.style.setProperty("--mouse-y", `${((e.clientY - rect.top) / rect.height) * 100}%`)
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Nos services"
            title={<>Quatre agents IA, <span className="gradient-text">un objectif</span></>}
            description="Chaque agent est configuré pour votre métier. Pas de template générique — uniquement ce qui sert votre activité."
          />
        </MotionReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <MotionReveal key={service.title} delay={i * 0.06} variant="up">
                <motion.button
                  type="button"
                  onClick={() => scrollToSection("demonstrations")}
                  onMouseMove={handleMouseMove}
                  className="service-card glass-premium group relative h-full w-full overflow-hidden rounded-2xl p-6 text-left sm:p-7"
                  whileHover={{ y: -6 }}
                  transition={premiumTransition}
                >
                  <div className="font-display absolute -right-2 -top-2 text-6xl font-bold text-white/[0.02] sm:text-7xl">{service.number}</div>

                  <div className="relative">
                    <div className="mb-4 inline-flex rounded-xl bg-violet-500/15 p-3 text-violet-200 ring-1 ring-violet-400/20">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display mb-2 text-lg font-bold text-white">{service.title}</h3>
                    <p className="mb-4 text-sm leading-[1.7] text-zinc-300">{service.description}</p>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {service.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/[0.06] bg-black/20 px-2.5 py-0.5 text-[0.65rem] font-medium text-zinc-500 sm:text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="flex items-center gap-1 text-xs font-medium text-violet-300">
                        Voir la démo
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </motion.button>
              </MotionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
