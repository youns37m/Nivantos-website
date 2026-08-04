import { motion } from "framer-motion"
import { Check, X, Building2, Settings2, Clock, Headphones } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import { CTAPrimary } from "./ui/CTA"
import { premiumTransition } from "../lib/motion"

type Advantage = {
  icon: LucideIcon
  title: string
  description: string
}

const advantages: Advantage[] = [
  {
    icon: Building2,
    title: "Spécialiste PME & TPE",
    description:
      "Nous comprenons vos contraintes de temps, de budget et d'équipe. Pas de jargon enterprise — des solutions à votre échelle.",
  },
  {
    icon: Settings2,
    title: "100 % sur mesure",
    description:
      "Chaque agent est configuré selon votre métier, vos outils et votre ton. Zéro template imposé.",
  },
  {
    icon: Clock,
    title: "Résultats en semaines",
    description:
      "Emails, relances, réponses clients — vos agents traitent le répétitif pendant que vous développez l'activité.",
  },
  {
    icon: Headphones,
    title: "Un interlocuteur dédié",
    description:
      "De l'audit à la mise en service, un expert vous accompagne. Formation incluse pour vos équipes.",
  },
]

const comparison = [
  { feature: "Disponibilité", traditional: "Horaires bureau", nivantos: "24h/24, 7j/7" },
  { feature: "Coût mensuel", traditional: "1 800–2 500 € (1 poste)", nivantos: "500–2 000 €" },
  { feature: "Mise en place", traditional: "1–3 mois", nivantos: "2–4 semaines" },
  { feature: "Congés & absences", traditional: "Service interrompu", nivantos: "Continu" },
  { feature: "Évolutivité", traditional: "Recrutement", nivantos: "Ajustement en jours" },
]

export default function WhyChooseUs() {
  return (
    <section id="avantages" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Pourquoi Nivantos"
            title={<>L&apos;alternative intelligente au <span className="gradient-text">recrutement</span></>}
            description="Pour les dirigeants qui veulent gagner du temps sans sacrifier la qualité ni exploser le budget."
          />
        </MotionReveal>

        <div className="mb-12 grid gap-5 sm:grid-cols-2">
          {advantages.map((item, i) => {
            const Icon = item.icon
            return (
              <MotionReveal key={item.title} delay={i * 0.05} variant="up">
                <motion.div
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 lg:p-7"
                  whileHover={{ y: -3 }}
                  transition={premiumTransition}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/12 text-violet-300">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display mb-2 text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-[1.7] text-zinc-300">{item.description}</p>
                </motion.div>
              </MotionReveal>
            )
          })}
        </div>

        <MotionReveal variant="blur">
          <div className="hidden overflow-hidden rounded-2xl border border-white/[0.08] lg:block">
            <div className="grid grid-cols-3 border-b border-white/[0.06] bg-white/[0.03] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider">
              <div className="text-zinc-500" />
              <div className="text-center text-zinc-500">Méthode traditionnelle</div>
              <div className="text-center text-violet-300">Nivantos</div>
            </div>
            {comparison.map((row) => (
              <div key={row.feature} className="grid grid-cols-3 items-center border-b border-white/[0.04] px-6 py-3.5 last:border-0">
                <div className="text-sm font-medium text-zinc-200">{row.feature}</div>
                <div className="flex items-center justify-center gap-2 text-center text-sm text-zinc-500">
                  <X size={14} className="shrink-0 text-red-400/60" />
                  {row.traditional}
                </div>
                <div className="flex items-center justify-center gap-2 text-center text-sm font-medium text-violet-200">
                  <Check size={14} className="shrink-0 text-emerald-400" />
                  {row.nivantos}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3 lg:hidden">
            {comparison.map((row) => (
              <div key={row.feature} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                <p className="mb-3 text-sm font-semibold text-white">{row.feature}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-zinc-500">
                    <X size={14} className="mt-0.5 shrink-0 text-red-400/60" />
                    {row.traditional}
                  </div>
                  <div className="flex items-start gap-2 font-medium text-violet-200">
                    <Check size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                    {row.nivantos}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MotionReveal>

        <div className="mt-10 flex justify-center">
          <CTAPrimary />
        </div>
      </div>
    </section>
  )
}
