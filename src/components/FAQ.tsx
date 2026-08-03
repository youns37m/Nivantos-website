import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import { premiumTransition } from "../lib/motion"

const faqs = [
  {
    question: "Combien coûte un projet IA avec NexusAI ?",
    answer:
      "Chaque projet est unique. Nos missions démarrent généralement à partir de 15 000 € pour un POC, et peuvent aller au-delà de 100 000 € pour des systèmes complexes. Nous proposons toujours un devis détaillé après un audit gratuit de vos besoins.",
  },
  {
    question: "Quel est le délai moyen de livraison ?",
    answer:
      "Un proof of concept est livrable en 3 à 4 semaines. Un projet complet de bout en bout prend généralement entre 2 et 4 mois, selon la complexité et le périmètre fonctionnel.",
  },
  {
    question: "Travaillez-vous avec des PME ou uniquement des grands groupes ?",
    answer:
      "Nous accompagnons des entreprises de toutes tailles — de la scale-up ambitieuse au grand groupe. Notre approche modulaire s'adapte à votre budget et à vos ambitions.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer:
      "Absolument. Nous appliquons les standards les plus stricts : chiffrement des données, hébergement souverain possible, conformité RGPD et audits de sécurité réguliers. Vos données ne sont jamais utilisées pour entraîner des modèles tiers.",
  },
  {
    question: "Proposez-vous un accompagnement post-lancement ?",
    answer:
      "Oui, c'est inclus dans notre offre premium. Monitoring continu, mises à jour des modèles, support réactif et évolutions fonctionnelles font partie de notre engagement long terme.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "Nous maîtrisons l'écosystème complet : OpenAI, Anthropic, Mistral, LangChain, PyTorch, TensorFlow, AWS, GCP, Azure. Nous sélectionnons la stack optimale pour chaque cas d'usage.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />

      <div className="relative mx-auto max-w-3xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="FAQ"
            title={
              <>
                Questions{" "}
                <span className="gradient-text">fréquentes</span>
              </>
            }
            description="Tout ce que vous devez savoir avant de démarrer votre projet IA avec NexusAI."
          />
        </MotionReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <MotionReveal key={faq.question} delay={i * 0.06} variant="up">
                <motion.div
                  layout
                  className={`overflow-hidden rounded-2xl transition-colors duration-500 ${
                    isOpen
                      ? "glass-strong shadow-[0_8px_40px_rgba(124,58,237,0.1)]"
                      : "glass hover:border-white/[0.12]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-7 sm:py-5"
                  >
                    <span className="text-[0.9rem] font-semibold leading-snug text-white sm:text-base">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={premiumTransition}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${
                        isOpen
                          ? "border-violet-500/40 bg-violet-500/15 text-violet-300"
                          : "border-white/10 text-zinc-400"
                      }`}
                    >
                      <Plus size={16} strokeWidth={2} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-[0.9rem] leading-[1.8] text-zinc-400 sm:px-7 sm:pb-6 sm:text-[0.95rem]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </MotionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
