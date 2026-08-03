import { motion } from "framer-motion"
import { MessageCircle, Search, Settings, Rocket } from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import { premiumTransition, staggerContainer } from "../lib/motion"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Échange gratuit",
    description: "30 minutes pour comprendre votre activité, vos tâches répétitives et vos objectifs.",
  },
  {
    number: "02",
    icon: Search,
    title: "Audit personnalisé",
    description: "Nous identifions les processus à automatiser et estimons vos gains de temps et d'argent.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Configuration de l'agent",
    description: "Votre agent est formé sur votre métier, connecté à vos outils et testé avec votre équipe.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Mise en service",
    description: "L'agent travaille pour vous 24h/24. Nous restons disponibles pour l'optimiser en continu.",
  },
]

export default function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="light-orb" style={{ left: "-5%", bottom: "10%", width: 450, height: 450, background: "rgba(109,40,217,0.08)" }} />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Comment ça fonctionne"
            title={<>4 étapes pour <span className="gradient-text">automatiser</span></>}
            description="Un parcours simple et transparent, pensé pour les dirigeants de PME qui n'ont pas le temps de s'occuper de la technique."
          />
        </MotionReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {/* Connector line — desktop */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[52px] hidden h-px bg-gradient-to-r from-violet-500/0 via-violet-500/40 to-violet-500/0 lg:block" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <MotionReveal key={step.number} delay={i * 0.1} variant="up">
                <motion.div
                  className="group relative"
                  whileHover={{ y: -6 }}
                  transition={premiumTransition}
                >
                  <div className="mb-5 flex justify-center lg:justify-start">
                    <motion.div
                      className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/30 bg-[#010008] shadow-[0_0_24px_rgba(124,58,237,0.2)]"
                      whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(124,58,237,0.35)" }}
                      transition={premiumTransition}
                    >
                      <Icon size={22} className="text-violet-300" strokeWidth={1.5} />
                      <motion.span
                        className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-[0.65rem] font-bold text-white"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 400 }}
                      >
                        {step.number}
                      </motion.span>
                    </motion.div>
                  </div>

                  <div className="glass-premium rounded-2xl p-5 text-center lg:text-left">
                    <h3 className="font-display mb-2 text-lg font-bold text-white">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-400">{step.description}</p>
                  </div>
                </motion.div>
              </MotionReveal>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
