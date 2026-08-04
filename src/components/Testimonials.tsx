import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import { premiumTransition } from "../lib/motion"

const testimonials = [
  {
    quote:
      "En trois semaines, notre agent a pris en charge 80 % des demandes récurrentes. Je retrouve enfin du temps pour développer mon activité.",
    name: "Sophie M.",
    role: "Gérante",
    company: "Cabinet comptable · Lyon",
  },
  {
    quote:
      "Les relances prospects se font toutes seules. On a signé 3 contrats supplémentaires le premier mois, sans recruter.",
    name: "Karim B.",
    role: "Directeur commercial",
    company: "Agence immobilière · Paris",
  },
  {
    quote:
      "L'équipe Nivantos a compris nos contraintes de PME dès le premier appel. Déploiement simple, résultats visibles rapidement.",
    name: "Claire D.",
    role: "Fondatrice",
    company: "E-commerce B2B · Bordeaux",
  },
]

export default function Testimonials() {
  return (
    <section id="temoignages" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Ils nous font confiance"
            title={<>Ce que disent les <span className="gradient-text">dirigeants</span></>}
            description="Retours anonymisés de dirigeants de PME accompagnés par Nivantos."
            compact
          />
        </MotionReveal>

        <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
          {testimonials.map((item, i) => (
            <MotionReveal key={item.name} delay={i * 0.08} variant="up">
              <motion.blockquote
                className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6"
                whileHover={{ y: -4 }}
                transition={premiumTransition}
              >
                <Quote size={20} className="mb-4 text-violet-400/70" strokeWidth={1.5} />
                <p className="mb-6 flex-1 text-sm leading-[1.75] text-zinc-300">&ldquo;{item.quote}&rdquo;</p>
                <footer className="border-t border-white/[0.06] pt-4">
                  <cite className="not-italic">
                    <span className="block text-sm font-semibold text-white">{item.name}</span>
                    <span className="block text-xs text-zinc-500">{item.role}</span>
                    <span className="block text-xs text-zinc-600">{item.company}</span>
                  </cite>
                </footer>
              </motion.blockquote>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
