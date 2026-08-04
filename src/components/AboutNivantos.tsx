import { motion } from "framer-motion"
import MotionReveal from "./ui/MotionReveal"
import { CTAPrimary, CTASecondary } from "./ui/CTA"
import AboutVisual from "./about/AboutVisual"
import { premiumTransition } from "../lib/motion"

const approach = [
  "Analyse de vos processus",
  "Développement d'un agent IA sur mesure",
  "Intégration à vos outils",
  "Accompagnement et optimisation continue",
]

export default function AboutNivantos() {
  return (
    <section id="a-propos" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div
        className="light-orb pointer-events-none"
        style={{ left: "-8%", top: "30%", width: 480, height: 480, background: "rgba(124,58,237,0.07)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <AboutVisual />

          <div className="min-w-0">
            <MotionReveal variant="blur">
              <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-violet-300 sm:text-xs">
                <span className="h-1 w-1 rounded-full bg-violet-400 shadow-[0_0_6px_rgba(167,139,250,0.8)]" />
                À propos de Nivantos
              </span>
            </MotionReveal>

            <MotionReveal variant="up" delay={0.05}>
              <h2 className="font-display mb-8 text-[1.75rem] font-bold leading-[1.12] tracking-[-0.035em] text-white sm:text-3xl md:text-[2.125rem] lg:text-[2.375rem] xl:leading-[1.14]">
                Nous concevons des agents IA qui travaillent pendant que vous développez votre entreprise.
              </h2>
            </MotionReveal>

            <MotionReveal variant="up" delay={0.08}>
              <div className="space-y-6 text-[0.9375rem] leading-[1.8] text-zinc-300 sm:text-base">
                <p className="max-w-xl">
                  Nivantos accompagne les dirigeants de PME et TPE dans l&apos;automatisation de leurs
                  tâches administratives et opérationnelles grâce à des agents IA sur mesure.
                </p>
                <p className="max-w-xl">
                  Chaque solution est pensée pour s&apos;intégrer à vos outils, réduire les tâches
                  répétitives et faire gagner un temps précieux à votre équipe.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal variant="up" delay={0.1}>
              <div className="mt-10">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Notre approche est simple
                </p>
                <ul className="space-y-4">
                  {approach.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ ...premiumTransition, delay: i * 0.06 }}
                      className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-zinc-200 sm:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.6)]" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </MotionReveal>

            <MotionReveal variant="up" delay={0.14}>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CTAPrimary />
                <CTASecondary />
              </div>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
