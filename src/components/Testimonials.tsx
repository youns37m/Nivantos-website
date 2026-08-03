import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import { premiumTransition } from "../lib/motion"

const testimonials = [
  {
    quote:
      "NexusAI a transformé notre service client en 6 semaines. Notre chatbot IA traite 70 % des demandes automatiquement, avec une satisfaction client en hausse de 35 %.",
    name: "Sophie Martin",
    role: "Directrice Digital",
    company: "TechCorp",
    rating: 5,
  },
  {
    quote:
      "L'équipe a su comprendre nos enjeux métier dès le premier échange. Le ROI a été visible dès le 3e mois — un investissement que je referais sans hésiter.",
    name: "Thomas Dubois",
    role: "CEO",
    company: "DataFlow",
    rating: 5,
  },
  {
    quote:
      "Un accompagnement premium du début à la fin. Architecture solide, formation de nos équipes, et un support réactif. NexusAI est notre partenaire IA de référence.",
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
      <div
        className="light-orb"
        style={{
          right: "-5%",
          bottom: "10%",
          width: 480,
          height: 480,
          background: "rgba(147,51,234,0.1)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Témoignages"
            title={
              <>
                Ce que disent{" "}
                <span className="gradient-text">nos clients</span>
              </>
            }
            description="Des entreprises ambitieuses nous font confiance pour propulser leur transformation IA."
          />
        </MotionReveal>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <MotionReveal key={item.name} delay={i * 0.1} variant="up">
              <motion.div
                className="group relative flex h-full flex-col rounded-2xl glass-card p-7 sm:p-8"
                whileHover={{ y: -6 }}
                transition={premiumTransition}
              >
                <Quote
                  size={32}
                  className="mb-5 text-violet-500/30 transition-colors duration-500 group-hover:text-violet-400/50"
                  strokeWidth={1.5}
                />

                <div className="mb-5 flex gap-1">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="fill-violet-400 text-violet-400"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <blockquote className="mb-8 flex-1 text-[0.95rem] leading-[1.75] text-zinc-300">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 border-t border-white/[0.06] pt-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-700 text-sm font-bold text-white shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{item.name}</div>
                    <div className="text-sm text-zinc-500">
                      {item.role} · {item.company}
                    </div>
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
