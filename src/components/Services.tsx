import { motion } from "framer-motion"
import type { MouseEvent } from "react"
import {
  Bot,
  BarChart3,
  MessageSquare,
  Eye,
  ShieldCheck,
  GraduationCap,
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
    icon: Bot,
    title: "Agents IA sur mesure",
    description:
      "Assistants intelligents entraînés sur vos données pour automatiser vos workflows et multiplier la productivité de vos équipes.",
    tags: ["LLM", "RAG", "Automation"],
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Analyse prédictive",
    description:
      "Modèles de machine learning pour anticiper les tendances, optimiser vos décisions et maximiser votre performance commerciale.",
    tags: ["ML", "Forecasting", "BI"],
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Chatbots & NLP",
    description:
      "Interfaces conversationnelles naturelles, multilingues et disponibles 24h/24 pour transformer votre relation client.",
    tags: ["NLP", "Support", "Multilingue"],
  },
  {
    number: "04",
    icon: Eye,
    title: "Vision par ordinateur",
    description:
      "Reconnaissance d'images, détection d'anomalies et analyse vidéo en temps réel pour industrialiser vos contrôles qualité.",
    tags: ["CV", "Qualité", "Temps réel"],
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Audit & Conformité IA",
    description:
      "Évaluation de vos systèmes, conformité RGPD et gouvernance responsable pour une IA éthique et sécurisée.",
    tags: ["RGPD", "Éthique", "Audit"],
  },
  {
    number: "06",
    icon: GraduationCap,
    title: "Formation & Accompagnement",
    description:
      "Montée en compétences de vos équipes et intégration de l'IA dans votre culture d'entreprise pour un impact durable.",
    tags: ["Workshops", "Change", "Support"],
  },
]

function handleMouseMove(e: MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100
  e.currentTarget.style.setProperty("--mouse-x", `${x}%`)
  e.currentTarget.style.setProperty("--mouse-y", `${y}%`)
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div
        className="light-orb"
        style={{
          left: "-5%",
          top: "40%",
          width: 500,
          height: 500,
          background: "rgba(124,58,237,0.12)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Nos services"
            title={
              <>
                Des solutions IA{" "}
                <span className="gradient-text">haut de gamme</span>
              </>
            }
            description="De la stratégie à la mise en production, nous concevons des systèmes d'intelligence artificielle qui génèrent un impact mesurable."
          />
        </MotionReveal>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <MotionReveal
                key={service.title}
                delay={i * 0.08}
                variant={i % 2 === 0 ? "up" : "scale"}
              >
                <motion.article
                  className="service-card group glass-card relative h-full cursor-default rounded-2xl p-7 sm:p-8 lg:p-9"
                  onMouseMove={handleMouseMove}
                  whileHover={{ y: -8 }}
                  transition={premiumTransition}
                >
                  <div className="font-display absolute -right-3 -top-3 text-6xl font-bold text-white/[0.025] transition-all duration-700 group-hover:text-violet-500/[0.1] sm:text-7xl">
                    {service.number}
                  </div>

                  <div className="relative">
                    <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-violet-500/30 to-purple-900/15 p-4 text-violet-200 ring-1 ring-violet-400/30 transition-all duration-500 group-hover:scale-110 group-hover:text-white group-hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] group-hover:ring-violet-300/50 sm:mb-7">
                      <Icon size={26} strokeWidth={1.5} />
                    </div>

                    <h3 className="font-display mb-3 text-lg font-bold tracking-tight text-white sm:mb-3.5 sm:text-xl lg:text-[1.35rem]">
                      {service.title}
                    </h3>
                    <p className="mb-5 text-[0.9rem] leading-[1.75] text-zinc-400 sm:mb-6 sm:text-[0.95rem]">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/[0.06] bg-white/[0.04] px-2.5 py-0.5 text-[0.7rem] font-medium text-zinc-500 transition-all duration-500 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 group-hover:text-violet-200 sm:px-3 sm:py-1 sm:text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-zinc-600 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-violet-300"
                        strokeWidth={1.5}
                      />
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
