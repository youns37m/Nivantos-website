import { useState } from "react"
import SectionHeading from "./ui/SectionHeading"
import Reveal from "./ui/Reveal"

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
    <section id="faq" className="relative px-6 py-28 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />

      <div className="relative mx-auto max-w-3xl">
        <Reveal>
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
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={faq.question} delay={(i % 3 + 1) as 1 | 2 | 3}>
                <div
                  className={`overflow-hidden rounded-2xl transition-all duration-300 ${
                    isOpen
                      ? "glass-strong shadow-lg shadow-violet-500/5"
                      : "glass hover:border-white/12"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-white">{faq.question}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-violet-500/40 bg-violet-500/10 text-violet-300"
                          : "border-white/10 text-zinc-400"
                      }`}
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 leading-relaxed text-zinc-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
