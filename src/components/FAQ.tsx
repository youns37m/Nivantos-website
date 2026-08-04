import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, HelpCircle } from "lucide-react"
import MotionReveal from "./ui/MotionReveal"
import { CTAPrimary } from "./ui/CTA"
import { premiumTransition } from "../lib/motion"

const faqs = [
  {
    question: "Combien coûte un projet Nivantos ?",
    answer:
      "Les formules Starter (à partir de 2 000 €) et Business (à partir de 5 000 €) couvrent la mise en place. La maintenance et l'optimisation se situent entre 500 € et 2 000 €/mois selon le périmètre. Enterprise est sur devis. L'audit gratuit de 30 minutes permet d'estimer précisément votre budget.",
  },
  {
    question: "En combien de temps mon agent est-il opérationnel ?",
    answer:
      "Un premier agent est déployé en 2 à 4 semaines. Un projet multi-agents (Business) demande 4 à 6 semaines. Vous recevez un calendrier détaillé dès l'audit.",
  },
  {
    question: "Est-ce adapté à ma TPE ou ma PME ?",
    answer:
      "C'est notre cœur de métier. Nous accompagnons commerces, artisans, professions libérales, agences et PME de services — avec des agents dimensionnés à votre budget.",
  },
  {
    question: "L'agent remplace-t-il mes employés ?",
    answer:
      "Non. L'agent prend en charge le répétitif pour libérer votre équipe sur le relationnel, la vente et les décisions stratégiques.",
  },
  {
    question: "Quels outils pouvez-vous intégrer ?",
    answer:
      "CRM (HubSpot, Pipedrive), email (Gmail, Outlook), agendas (Google Calendar, Calendly), messageries (WhatsApp, Slack) et vos outils métier existants.",
  },
  {
    question: "Mes données sont-elles protégées ?",
    answer:
      "Oui. Hébergement en Europe, conformité RGPD, chiffrement des échanges. Vos données ne servent jamais à entraîner des modèles tiers.",
  },
  {
    question: "Y a-t-il un engagement long terme ?",
    answer:
      "Non après la phase de mise en place pour Starter et Business. Enterprise inclut un SLA défini contractuellement.",
  },
  {
    question: "Comment se déroule l'audit gratuit ?",
    answer:
      "30 minutes en visio : analyse de vos processus, identification des gains rapides, estimation du ROI et recommandation de formule. Aucune obligation.",
  },
  {
    question: "Intervenez-vous en dehors de Paris ?",
    answer:
      "100 % à distance partout en France. Présentiel possible sur Paris et la région parisienne.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-14">
          <MotionReveal variant="blur">
            <div className="lg:sticky lg:top-28">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
                <HelpCircle size={14} />
                FAQ
              </div>
              <h2 className="font-display mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Vos questions, <span className="gradient-text">nos réponses</span>
              </h2>
              <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                Les objections les plus fréquentes des dirigeants de PME, répondues clairement.
              </p>
              <div className="mt-7 hidden lg:block">
                <CTAPrimary />
              </div>
            </div>
          </MotionReveal>

          <div className="space-y-2.5">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <MotionReveal key={faq.question} delay={i * 0.02} variant="up">
                  <motion.div
                    className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                      isOpen ? "border-violet-500/25 bg-violet-500/[0.06]" : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.1]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-semibold text-white sm:text-[0.9375rem]">{faq.question}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={premiumTransition}
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                          isOpen ? "border-violet-400/40 text-violet-300" : "border-white/10 text-zinc-500"
                        }`}
                      >
                        <Plus size={14} strokeWidth={2} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-4 text-sm leading-[1.75] text-zinc-400">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </MotionReveal>
              )
            })}
          </div>

          <div className="lg:hidden">
            <CTAPrimary block />
          </div>
        </div>
      </div>
    </section>
  )
}
