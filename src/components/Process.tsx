import { motion } from "framer-motion"
import { Search, PenTool, Plug, Rocket } from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import { premiumTransition } from "../lib/motion"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit & Diagnostic",
    description: "Nous identifions les tâches répétitives, les points de friction et les gains rapides possibles dans votre activité.",
    duration: "Semaine 1",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Conception de l'agent",
    description: "Définition du périmètre, du ton, des scénarios et des intégrations avec vos outils existants (CRM, email, agenda…).",
    duration: "Semaine 2",
  },
  {
    number: "03",
    icon: Plug,
    title: "Intégration & Tests",
    description: "Développement de l'agent, connexion à vos systèmes et validation en conditions réelles avec votre équipe.",
    duration: "Semaines 3–4",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Mise en service & Suivi",
    description: "Déploiement, formation de vos collaborateurs et ajustements continus pour maximiser les résultats.",
    duration: "Continu",
  },
]

export default function Process() {
  return (
    <section id="processus" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="light-orb" style={{ right: "0", top: "30%", width: 550, height: 550, background: "rgba(109,40,217,0.08)" }} />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Notre méthode"
            title={<>De l&apos;audit à l&apos;agent <span className="gradient-text">opérationnel</span></>}
            description="Un processus clair en 4 étapes pour déployer votre agent IA sans perturber votre activité quotidienne."
          />
        </MotionReveal>

        {/* Horizontal timeline — desktop */}
        <div className="relative hidden lg:block">
          <div className="absolute left-0 right-0 top-[52px] h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <MotionReveal key={step.number} delay={i * 0.1} variant="up">
                  <motion.div
                    className="group relative pt-16"
                    whileHover={{ y: -4 }}
                    transition={premiumTransition}
                  >
                    <div className="absolute left-0 top-0 flex h-[104px] w-full flex-col items-center">
                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/30 bg-[#020010] shadow-[0_0_24px_rgba(124,58,237,0.15)] transition-all duration-500 group-hover:border-violet-400/50 group-hover:shadow-[0_0_32px_rgba(124,58,237,0.3)]">
                        <Icon size={22} className="text-violet-300" strokeWidth={1.5} />
                      </div>
                      <span className="font-display mt-3 text-xs font-bold text-violet-400/60">{step.number}</span>
                    </div>
                    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm transition-all duration-500 group-hover:border-violet-500/20 group-hover:bg-white/[0.04]">
                      <span className="mb-2 inline-block rounded-full bg-violet-500/10 px-2.5 py-0.5 text-[0.65rem] font-medium text-violet-300">{step.duration}</span>
                      <h3 className="font-display mb-2 text-lg font-bold text-white">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-zinc-400">{step.description}</p>
                    </div>
                  </motion.div>
                </MotionReveal>
              )
            })}
          </div>
        </div>

        {/* Vertical timeline — mobile */}
        <div className="relative space-y-4 lg:hidden">
          <div className="absolute bottom-0 left-[27px] top-0 w-px bg-gradient-to-b from-violet-500/40 via-violet-500/15 to-transparent" />
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <MotionReveal key={step.number} delay={i * 0.08} variant="left">
                <div className="relative flex gap-5 pl-2">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-500/25 bg-[#020010]">
                    <Icon size={20} className="text-violet-300" strokeWidth={1.5} />
                  </div>
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
