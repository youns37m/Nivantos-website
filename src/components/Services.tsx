import { motion } from "framer-motion"
import type { MouseEvent } from "react"
import {
  Bot, BarChart3, MessageSquare, Eye, ShieldCheck, GraduationCap,
  ArrowUpRight, type LucideIcon,
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
  { number: "01", icon: Bot, title: "Agents IA sur mesure", description: "Assistants intelligents entraînés sur vos données pour automatiser vos workflows et multiplier la productivité.", tags: ["LLM", "RAG", "Automation"] },
  { number: "02", icon: BarChart3, title: "Analyse prédictive", description: "Modèles ML pour anticiper les tendances, optimiser vos décisions et maximiser votre performance commerciale.", tags: ["ML", "Forecasting", "BI"] },
  { number: "03", icon: MessageSquare, title: "Chatbots & NLP", description: "Interfaces conversationnelles naturelles, multilingues et disponibles 24h/24 pour transformer votre relation client.", tags: ["NLP", "Support", "Multilingue"] },
  { number: "04", icon: Eye, title: "Vision par ordinateur", description: "Reconnaissance d'images, détection d'anomalies et analyse vidéo en temps réel pour vos contrôles qualité.", tags: ["CV", "Qualité", "Temps réel"] },
  { number: "05", icon: ShieldCheck, title: "Audit & Conformité IA", description: "Évaluation de vos systèmes, conformité RGPD et gouvernance responsable pour une IA éthique et sécurisée.", tags: ["RGPD", "Éthique", "Audit"] },
  { number: "06", icon: GraduationCap, title: "Formation & Accompagnement", description: "Montée en compétences de vos équipes et intégration de l'IA dans votre culture d'entreprise.", tags: ["Workshops", "Change", "Support"] },
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
            title={<>Des solutions IA <span className="gradient-text">haut de gamme</span></>}
            description="De la stratégie à la mise en production, nous concevons des systèmes d'intelligence artificielle qui génèrent un impact mesurable."
          />
        </MotionReveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
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
