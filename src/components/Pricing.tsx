import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import CalendlyTrigger from "./ui/CalendlyTrigger"
import { premiumTransition } from "../lib/motion"

const plans = [
  {
    name: "Starter",
    price: "2 000 €",
    priceNote: "À partir de",
    description: "Idéal pour débuter avec l'IA et automatiser une première tâche clé.",
    features: ["Audit IA complet", "1 automatisation", "Support email", "Formation initiale", "Mise en service en 2 semaines"],
    highlighted: false,
    cta: "Choisir Starter",
  },
  {
    name: "Business",
    price: "5 000 €",
    priceNote: "À partir de",
    description: "La formule la plus populaire pour les PME qui veulent scaler leurs agents IA.",
    features: ["Jusqu'à 5 agents IA", "Intégration CRM", "Automatisations avancées", "Support prioritaire", "Optimisation mensuelle"],
    highlighted: true,
    cta: "Choisir Business",
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    priceNote: "",
    description: "Pour les entreprises avec des besoins complexes et des intégrations sur mesure.",
    features: ["IA 100% sur mesure", "Intégrations complètes", "Support prioritaire 24/7", "Chef de projet dédié", "SLA garanti"],
    highlighted: false,
    cta: "Nous contacter",
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
            description="Des tarifs transparents pour chaque étape de votre transformation IA. Audit gratuit avant tout engagement."
          />
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
                    Le plus populaire
                  </span>
                )}

                <h3 className="font-display mb-2 text-2xl font-bold text-white">{plan.name}</h3>
                <p className="mb-6 text-sm leading-relaxed text-zinc-400">{plan.description}</p>

                <div className="mb-6">
                  {plan.priceNote && (
                    <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">{plan.priceNote}</span>
                  )}
                  <div className="font-display text-4xl font-bold text-white">{plan.price}</div>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <Check size={16} className="mt-0.5 shrink-0 text-violet-400" strokeWidth={2.5} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {plan.name === "Enterprise" ? (
                  <a
                    href="#contact"
                    className={`btn-premium w-full text-center ${plan.highlighted ? "btn-premium-primary" : "btn-premium-secondary"}`}
                  >
                    {plan.highlighted && <span className="btn-premium-shimmer" aria-hidden="true" />}
                    <span className="btn-premium-label">{plan.cta}</span>
                  </a>
                ) : (
                  <CalendlyTrigger
                    as="button"
                    className={`btn-premium w-full ${plan.highlighted ? "btn-premium-primary" : "btn-premium-secondary"}`}
                  >
                    {plan.highlighted && <span className="btn-premium-shimmer" aria-hidden="true" />}
                    {plan.highlighted && <span className="btn-premium-glow" aria-hidden="true" />}
                    <span className="btn-premium-label">{plan.cta}</span>
                    <ArrowRight size={16} className="btn-premium-icon relative shrink-0" />
                  </CalendlyTrigger>
                )}
              </motion.div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
