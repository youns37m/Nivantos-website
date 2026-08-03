import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, HelpCircle } from "lucide-react"
import MotionReveal from "./ui/MotionReveal"
import { premiumTransition } from "../lib/motion"

const faqs = [
  {
    question: "Combien coûte un agent IA avec Nivantos ?",
    answer: "Le tarif dépend du type d'agent et de son périmètre. Comptez entre 500 € et 2 000 €/mois pour un agent standard, ou un forfait de mise en place à partir de 3 000 €. Nous établissons un devis transparent après un audit gratuit de 30 minutes.",
  },
  {
    question: "En combien de temps mon agent est-il opérationnel ?",
    answer: "Un agent service client ou administratif peut être déployé en 2 à 4 semaines. Un agent sur mesure avec intégrations complexes demande 4 à 6 semaines. Nous vous communiquons un calendrier précis dès l'audit.",
  },
  {
    question: "Est-ce adapté à ma TPE ou ma PME ?",
    answer: "C'est notre spécialité. Nivantos accompagne des commerces, artisans, professions libérales, agences et PME de services. Nos agents s'adaptent à votre taille, votre budget et vos outils existants.",
  },
  {
    question: "L'agent remplace-t-il mes employés ?",
    answer: "Non. L'agent IA prend en charge les tâches répétitives et chronophages pour libérer votre équipe sur le relationnel, la vente et la prise de décision. C'est un assistant, pas un substitut.",
  },
  {
    question: "Mes données clients sont-elles protégées ?",
    answer: "Oui. Hébergement en Europe, conformité RGPD, chiffrement des échanges et aucune utilisation de vos données pour entraîner des modèles tiers. Vous restez propriétaire de vos informations.",
  },
  {
    question: "Puis-je modifier ou faire évoluer mon agent ?",
    answer: "Absolument. Votre agent évolue avec votre activité : nouveaux scénarios, intégrations supplémentaires, ajustements du ton. Un suivi mensuel est inclus dans nos formules.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <MotionReveal variant="blur">
            <div className="lg:sticky lg:top-32">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                <HelpCircle size={14} />
                FAQ
              </div>
              <h2 className="font-display mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Questions{" "}
                <span className="gradient-text">fréquentes</span>
              </h2>
              <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
                Tout ce que vous devez savoir avant de déployer votre premier agent IA avec Nivantos.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition-colors duration-300 hover:text-white"
              >
                Une autre question ? Contactez-nous →
              </a>
            </div>
          </MotionReveal>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <MotionReveal key={faq.question} delay={i * 0.05} variant="up">
                  <motion.div
                    layout
                    className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
                      isOpen
                        ? "border-violet-500/25 bg-gradient-to-br from-violet-500/[0.08] to-white/[0.02] shadow-[0_8px_40px_rgba(124,58,237,0.12)]"
                        : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    >
                      <span className="text-sm font-semibold text-white sm:text-base">{faq.question}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={premiumTransition}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                          isOpen ? "border-violet-400/40 bg-violet-500/15 text-violet-300" : "border-white/10 text-zinc-500"
                        }`}
                      >
                        <Plus size={15} strokeWidth={2} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-sm leading-[1.8] text-zinc-400 sm:px-6 sm:pb-6">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </MotionReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
