import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import { CTAPrimary } from "./ui/CTA"
import { premiumTransition } from "../lib/motion"

const includedInAll = [
  "Audit personnalisé",
  "Estimation du ROI",
  "Aucun engagement",
]

const plans = [
  {
    name: "Starter",
    price: "2 000 €",
    priceNote: "À partir de",
    description: "Idéal pour débuter avec l'IA et automatiser une première tâche clé.",
    features: ["Audit IA complet", "1 automatisation", "Support email", "Formation initiale", "Mise en service en 2 semaines"],
    highlighted: false,
  },
  {
    name: "Business",
    price: "5 000 €",
    priceNote: "À partir de",
    description: "La formule la plus populaire pour les PME qui veulent scaler leurs agents IA.",
    features: ["Jusqu'à 5 agents IA", "Intégration CRM", "Automatisations avancées", "Support prioritaire", "Optimisation mensuelle"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    priceNote: "",
    description: "Pour les entreprises avec des besoins complexes et des intégrations sur mesure.",
    features: ["IA 100% sur mesure", "Intégrations complètes", "Support prioritaire 24/7", "Chef de projet dédié", "SLA garanti"],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="offres" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="light-orb" style={{ left: "50%", top: "0", transform: "translateX(-50%)", width: 800, height: 400, background: "rgba(124,58,237,0.1)" }} />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Nos offres"
            title={<>Des formules <span className="gradient-text">adaptées</span> à votre ambition</>}
            description="Frais de mise en place transparents. Maintenance et optimisation à partir de 500 €/mois selon le périmètre."
          />
        </MotionReveal>

        <MotionReveal variant="up" delay={0.05}>
          <div className="mx-auto mb-12 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/[0.06] px-5 py-4 text-center sm:mb-14 sm:px-6">
            <Sparkles size={18} className="shrink-0 text-violet-400" strokeWidth={1.5} />
            <p className="text-sm font-medium text-violet-100 sm:text-base">
              Toutes nos offres commencent par un{" "}
              <span className="font-semibold text-white">audit gratuit de 30 minutes</span>.
            </p>
          </div>
        </MotionReveal>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, i) => (
            <MotionReveal key={plan.name} delay={i * 0.1} variant="up">
              <motion.div
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 sm:p-8 ${
                  plan.highlighted
                    ? "border-violet-500/40 bg-gradient-to-b from-violet-600/15 to-white/[0.02] shadow-[0_0_60px_rgba(124,58,237,0.2)]"
                    : "glass-premium border-white/[0.08]"
                }`}
                whileHover={{ y: -8 }}
                transition={premiumTransition}
              >
                {plan.highlighted && (
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
                )}
                {plan.highlighted && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-200">
                    Le plus choisi
                  </span>
                )}

                <h3 className="font-display mb-2 text-2xl font-bold text-white">{plan.name}</h3>
                <p className="mb-6 text-sm leading-relaxed text-zinc-400">{plan.description}</p>

                <div className="mb-6">
                  {plan.priceNote && (
                    <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">{plan.priceNote}</span>
                  )}
                  <div className="font-display text-4xl font-bold text-white">{plan.price}</div>
                  {plan.priceNote && (
                    <p className="mt-1 text-xs text-zinc-500">Frais de mise en place · maintenance dès 500 €/mois</p>
                  )}
                </div>

                <ul className="mb-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <Check size={16} className="mt-0.5 shrink-0 text-violet-400" strokeWidth={2.5} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <ul className="mb-8 space-y-2.5 border-t border-white/[0.06] pt-6">
                  {includedInAll.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-400">
                      <Check size={14} className="shrink-0 text-emerald-400/90" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>

                <CTAPrimary block />
              </motion.div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
