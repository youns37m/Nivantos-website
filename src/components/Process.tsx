import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Search, PenTool, Code2, Rocket, HeartHandshake } from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import { premiumTransition } from "../lib/motion"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit",
    description: "Analyse de vos processus, identification des tâches automatisables et estimation du ROI.",
    duration: "Semaine 1",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Conception",
    description: "Architecture de l'agent, scénarios conversationnels, intégrations et validation du cahier des charges.",
    duration: "Semaine 2",
  },
  {
    number: "03",
    icon: Code2,
    title: "Développement",
    description: "Création de l'agent IA, connexion à vos outils (CRM, email, agenda) et tests en conditions réelles.",
    duration: "Semaines 3–4",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Déploiement",
    description: "Mise en production, formation de vos équipes et activation du monitoring en temps réel.",
    duration: "Semaine 5",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Suivi",
    description: "Optimisation continue, mises à jour des scénarios et support réactif pour maximiser les résultats.",
    duration: "Continu",
  },
]

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  const lineProgress = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"])

  return (
    <section id="processus" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="light-orb" style={{ right: "0", top: "30%", width: 550, height: 550, background: "rgba(109,40,217,0.08)" }} />

      <div className="relative mx-auto max-w-7xl" ref={containerRef}>
        <MotionReveal variant="blur">
          <SectionHeading
            label="Notre processus"
            title={<>De l&apos;audit au <span className="gradient-text">suivi continu</span></>}
            description="5 étapes structurées pour déployer votre agent IA en toute sérénité, sans perturber votre activité."
          />
        </MotionReveal>

        {/* Desktop timeline */}
        <div className="relative hidden lg:block">
          <div className="absolute left-0 right-0 top-[52px] h-px bg-white/[0.06]" />
          <motion.div
            className="absolute left-0 top-[52px] h-px origin-left bg-gradient-to-r from-violet-500 via-purple-400 to-violet-500"
            style={{ width: lineProgress }}
          />
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <MotionReveal key={step.number} delay={i * 0.08} variant="up">
                  <motion.div
                    className="group relative pt-16"
                    whileHover={{ y: -4 }}
                    transition={premiumTransition}
                  >
                    <div className="absolute left-0 top-0 flex w-full flex-col items-center">
                      <motion.div
                        className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/30 bg-[#010008] shadow-[0_0_24px_rgba(124,58,237,0.15)]"
                        whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Icon size={22} className="text-violet-300" strokeWidth={1.5} />
                      </motion.div>
                      <span className="font-display mt-3 text-xs font-bold text-violet-400/60">{step.number}</span>
                    </div>
                    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 backdrop-blur-sm transition-all duration-500 group-hover:border-violet-500/20 group-hover:bg-white/[0.04]">
                      <span className="mb-2 inline-block rounded-full bg-violet-500/10 px-2 py-0.5 text-[0.6rem] font-medium text-violet-300">{step.duration}</span>
                      <h3 className="font-display mb-1.5 text-base font-bold text-white">{step.title}</h3>
                      <p className="text-xs leading-relaxed text-zinc-400">{step.description}</p>
                    </div>
                  </motion.div>
                </MotionReveal>
              )
            })}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="relative space-y-4 lg:hidden">
          <div className="absolute bottom-0 left-[27px] top-0 w-px bg-white/[0.06]" />
          <motion.div
            className="absolute left-[27px] top-0 w-px origin-top bg-gradient-to-b from-violet-500 to-purple-400"
            style={{ height: lineProgress }}
          />
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <MotionReveal key={step.number} delay={i * 0.06} variant="left">
                <div className="relative flex gap-5 pl-2">
                  <motion.div
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-500/25 bg-[#010008]"
                    whileInView={{ scale: [0.85, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Icon size={20} className="text-violet-300" strokeWidth={1.5} />
                  </motion.div>
                  <div className="flex-1 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="font-display text-xs font-bold text-violet-400">{step.number}</span>
                      <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-[0.65rem] text-violet-300">{step.duration}</span>
                    </div>
                    <h3 className="font-display mb-1.5 text-lg font-bold text-white">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-400">{step.description}</p>
                  </div>
                </div>
              </MotionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
