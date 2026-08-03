import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, HelpCircle } from "lucide-react"
import MotionReveal from "./ui/MotionReveal"
import { premiumTransition } from "../lib/motion"

const faqs = [
  {
    question: "Combien coûtent vos formules ?",
    answer: "Nous proposons 3 formules : Starter à partir de 2 000 € (audit + 1 automatisation), Business à partir de 5 000 € (jusqu'à 5 agents IA + CRM), et Enterprise sur devis pour des projets sur mesure. Un audit gratuit de 30 minutes permet d'identifier la formule adaptée.",
  },
  {
    question: "Combien coûte un agent IA avec Nivantos ?",
    answer: "Un agent standard coûte entre 500 € et 2 000 €/mois selon son périmètre. Les forfaits Starter et Business incluent la mise en place. Nous établissons un devis transparent après l'audit gratuit.",
  },
  {
    question: "En combien de temps mon agent est-il opérationnel ?",
    answer: "Un agent service client ou administratif est déployé en 2 à 4 semaines. La formule Business avec plusieurs agents demande 4 à 6 semaines. Un calendrier précis vous est communiqué dès l'audit.",
  },
  {
    question: "Est-ce adapté à ma TPE ou ma PME ?",
    answer: "C'est notre spécialité. Nivantos accompagne des commerces, artisans, professions libérales, agences et PME de services. Nos agents s'adaptent à votre taille, votre budget et vos outils existants.",
  },
  {
    question: "L'agent remplace-t-il mes employés ?",
    answer: "Non. L'agent IA prend en charge les tâches répétitives pour libérer votre équipe sur le relationnel, la vente et la prise de décision. C'est un assistant intelligent, pas un substitut humain.",
  },
  {
    question: "Quels outils pouvez-vous intégrer ?",
    answer: "Nous intégrons les CRM (HubSpot, Pipedrive, Salesforce), les outils email (Gmail, Outlook), les agendas (Google Calendar, Calendly), les messageries (WhatsApp, Slack) et vos outils métier existants.",
  },
  {
    question: "Mes données clients sont-elles protégées ?",
    answer: "Oui. Hébergement en Europe, conformité RGPD, chiffrement des échanges et aucune utilisation de vos données pour entraîner des modèles tiers. Vous restez propriétaire de vos informations.",
  },
  {
    question: "Proposez-vous un contrat ou un engagement ?",
    answer: "Nos formules Starter et Business sont sans engagement long terme après la phase de mise en place. La formule Enterprise inclut un SLA et un accompagnement sur mesure défini contractuellement.",
  },
  {
    question: "Puis-je modifier ou faire évoluer mon agent ?",
    answer: "Absolument. Votre agent évolue avec votre activité : nouveaux scénarios, intégrations supplémentaires, ajustements du ton. L'optimisation mensuelle est incluse dans les formules Business et Enterprise.",
  },
  {
    question: "Comment se déroule l'audit gratuit ?",
    answer: "Réservez un créneau de 30 minutes via Calendly. Nous analysons vos processus, identifions les gains rapides et vous présentons la formule et le ROI estimé. Aucun engagement requis.",
  },
  {
    question: "Intervenez-vous en dehors de Paris ?",
    answer: "Oui, 100 % de notre processus peut se faire à distance. Nous accompagnons des entreprises partout en France. Des rendez-vous en présentiel sont possibles sur Paris et la région parisienne.",
  },
  {
    question: "Que se passe-t-il après le déploiement ?",
    answer: "Notre équipe assure un suivi continu : monitoring des performances, mises à jour des scénarios, support réactif sous 24h et rapports mensuels sur les gains de temps et le ROI constaté.",
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
                Questions <span className="gradient-text">fréquentes</span>
              </h2>
              <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
                Retrouvez les réponses aux questions les plus courantes sur nos agents IA, nos formules et notre accompagnement.
              </p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition-colors duration-300 hover:text-white">
                Une autre question ? Contactez-nous →
              </a>
            </div>
          </MotionReveal>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <MotionReveal key={faq.question} delay={i * 0.03} variant="up">
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
