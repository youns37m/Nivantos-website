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
    quote: "Nivantos a transformé notre service client en 6 semaines. Notre chatbot IA traite 70 % des demandes automatiquement, avec une satisfaction client en hausse de 35 %.",
    name: "Sophie Martin",
    role: "Directrice Digital",
    company: "TechCorp",
    rating: 5,
  },
  {
    quote: "L'équipe a su comprendre nos enjeux métier dès le premier échange. Le ROI a été visible dès le 3e mois — un investissement que je referais sans hésiter.",
    name: "Thomas Dubois",
    role: "CEO",
    company: "DataFlow",
    rating: 5,
  },
  {
    quote: "Un accompagnement premium du début à la fin. Architecture solide, formation de nos équipes, et un support réactif. Nivantos est notre partenaire IA de référence.",
    name: "Camille Renard",
    role: "CTO",
    company: "InnovateLab",
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
            description="Des entreprises ambitieuses nous font confiance pour propulser leur transformation IA."
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
