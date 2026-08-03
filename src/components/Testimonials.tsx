import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import { premiumTransition } from "../lib/motion"

const avatarColors = [
  "from-violet-500 to-purple-700",
  "from-purple-500 to-fuchsia-700",
  "from-indigo-500 to-violet-700",
]

const testimonials = [
  {
    quote: "Notre agent service client répond aux demandes en dehors des horaires de bureau. On a réduit le temps passé au téléphone de moitié, sans embaucher.",
    name: "Marie L.",
    role: "Gérante",
    company: "Cabinet comptable · Lyon",
    rating: 5,
  },
  {
    quote: "L'agent commercial relance nos prospects automatiquement. On a signé 3 contrats supplémentaires le premier mois, juste grâce aux relances qu'on n'avait plus le temps de faire.",
    name: "Julien M.",
    role: "Directeur",
    company: "Agence immobilière · Bordeaux",
    rating: 5,
  },
  {
    quote: "Les devis et emails récurrents sont gérés par l'agent administratif. Je récupère facilement 2 demi-journées par semaine pour me concentrer sur mes clients.",
    name: "Sophie R.",
    role: "Fondatrice",
    company: "Boutique en ligne · Nantes",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="temoignages" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="light-orb" style={{ right: "-5%", bottom: "10%", width: 480, height: 480, background: "rgba(147,51,234,0.08)" }} />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Témoignages"
            title={<>Ce que disent <span className="gradient-text">nos clients</span></>}
            description="Des dirigeants de PME et TPE qui ont automatisé leur quotidien avec Nivantos."
          />
        </MotionReveal>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <MotionReveal key={item.name} delay={i * 0.1} variant="up">
              <motion.div
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-transparent p-6 backdrop-blur-xl sm:p-7"
                whileHover={{ y: -8 }}
                transition={premiumTransition}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <Quote size={28} className="mb-4 text-violet-500/25 group-hover:text-violet-400/40" strokeWidth={1.5} />

                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star key={j} size={13} className="fill-violet-400 text-violet-400" strokeWidth={0} />
                  ))}
                </div>

                <blockquote className="mb-6 flex-1 text-sm leading-[1.8] text-zinc-300 sm:text-[0.95rem]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3.5 border-t border-white/[0.06] pt-5">
                  <div className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${avatarColors[i]} text-sm font-bold text-white shadow-[0_0_24px_rgba(124,58,237,0.25)]`}>
                    {item.name.split(" ").map((n) => n[0]).join("")}
                    <div className="absolute inset-0 rounded-full ring-2 ring-white/10" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{item.name}</div>
                    <div className="text-xs text-zinc-500">{item.role} · {item.company}</div>
                  </div>
                </div>
              </motion.div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
