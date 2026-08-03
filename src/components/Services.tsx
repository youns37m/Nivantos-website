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
    description: "Répond automatiquement aux clients 24h/24. Gère les questions fréquentes, oriente les demandes et améliore la satisfaction sans embaucher.",
    tags: ["Support", "24h/24", "Multicanal"],
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Agent IA Commercial",
    description: "Qualifie les prospects, relance automatiquement et augmente les ventes. Votre pipeline avance même quand vous êtes sur le terrain.",
    tags: ["Prospection", "Relances", "Conversion"],
  },
  {
    number: "03",
    icon: FileText,
    title: "Agent IA Administratif",
    description: "Automatise les emails, devis, factures et tâches répétitives. Libérez des heures chaque semaine pour vous concentrer sur l'essentiel.",
    tags: ["Emails", "Devis", "Facturation"],
  },
  {
    number: "04",
    icon: Bot,
    title: "Agent IA Sur Mesure",
    description: "Développement d'un agent IA adapté aux besoins spécifiques de votre entreprise. Intégré à vos outils, formé sur vos processus.",
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
      <div className="light-orb" style={{ left: "-5%", top: "40%", width: 500, height: 500, background: "rgba(124,58,237,0.1)" }} />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Nos services"
            title={<>Des agents IA <span className="gradient-text">sur mesure</span></>}
            description="Quatre solutions conçues pour les PME et TPE qui veulent automatiser sans complexité ni investissement disproportionné."
          />
        </MotionReveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <MotionReveal key={service.title} delay={i * 0.07} variant={i % 2 === 0 ? "up" : "scale"}>
                <motion.article
                  className="service-card glass-premium group relative h-full overflow-hidden rounded-2xl p-6 sm:p-7 lg:p-8"
                  onMouseMove={handleMouseMove}
                  whileHover={{ y: -10 }}
                  transition={premiumTransition}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.06] transition-all duration-500 group-hover:ring-violet-400/20" />
                  <div className="font-display absolute -right-2 -top-2 text-6xl font-bold text-white/[0.02] group-hover:text-violet-500/[0.06] sm:text-7xl">{service.number}</div>

                  <div className="relative">
                    <div className="mb-5 inline-flex rounded-xl bg-gradient-to-br from-violet-500/25 to-purple-900/10 p-3.5 text-violet-200 ring-1 ring-violet-400/25 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_32px_rgba(124,58,237,0.35)] sm:mb-6">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display mb-2.5 text-lg font-bold text-white sm:text-xl">{service.title}</h3>
                    <p className="mb-5 text-sm leading-[1.75] text-zinc-400 sm:text-[0.95rem]">{service.description}</p>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {service.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/[0.06] bg-black/20 px-2.5 py-0.5 text-[0.65rem] font-medium text-zinc-500 backdrop-blur-sm group-hover:border-violet-500/25 group-hover:text-violet-200 sm:text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ArrowUpRight size={16} className="shrink-0 text-zinc-600 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-300" />
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
