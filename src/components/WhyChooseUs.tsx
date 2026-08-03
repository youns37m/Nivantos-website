import {
  Star,
  Settings2,
  TrendingUp,
  Headphones,
  type LucideIcon,
} from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"

type Advantage = {
  icon: LucideIcon
  title: string
  description: string
  stat: string
  statLabel: string
}

const advantages: Advantage[] = [
  {
    icon: Star,
    title: "Expertise de pointe",
    description:
      "Une équipe senior certifiée sur les dernières architectures IA — GPT, Claude, Llama et modèles propriétaires.",
    stat: "8+ ans",
    statLabel: "d'expertise IA",
  },
  {
    icon: Settings2,
    title: "100% sur mesure",
    description:
      "Chaque solution est conçue spécifiquement pour vos enjeux métier. Zéro template, zéro compromis.",
    stat: "0",
    statLabel: "solution générique",
  },
  {
    icon: TrendingUp,
    title: "ROI mesurable",
    description:
      "Des KPIs définis dès le départ. Nous garantissons un retour sur investissement quantifiable à chaque étape.",
    stat: "×4",
    statLabel: "ROI moyen",
  },
  {
    icon: Headphones,
    title: "Accompagnement premium",
    description:
      "Un chef de projet dédié, des points hebdomadaires et un support réactif tout au long de la collaboration.",
    stat: "24h",
    statLabel: "délai de réponse",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="avantages" className="section-padding relative px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div
        className="light-orb"
        style={{
          right: "-8%",
          top: "20%",
          width: 450,
          height: 450,
          background: "rgba(147,51,234,0.1)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Pourquoi nous choisir"
            title={
              <>
                Pourquoi choisir{" "}
                <span className="gradient-text">NexusAI</span> ?
              </>
            }
            description="NexusAI combine expertise technique, vision stratégique et exécution rigoureuse pour des résultats qui dépassent vos attentes."
          />
        </MotionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-7">
          {advantages.map((item, i) => {
            const Icon = item.icon
            return (
              <MotionReveal key={item.title} delay={(i % 2 + 1) as 1 | 2} variant="up">
                <div className="group glass-card relative overflow-hidden rounded-2xl p-8 lg:p-10">
                  <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-violet-600/10 blur-3xl transition-all duration-700 group-hover:bg-violet-600/20" />

                  <div className="relative flex flex-col gap-6 sm:flex-row sm:gap-7">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-purple-800/10 text-violet-300 ring-1 ring-violet-500/25 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_28px_rgba(124,58,237,0.3)]">
                      <Icon size={26} strokeWidth={1.5} />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-display mb-2.5 text-xl font-bold tracking-tight text-white">
                        {item.title}
                      </h3>
                      <p className="text-[0.95rem] leading-[1.7] text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative mt-7 flex items-end gap-2.5 border-t border-white/[0.06] pt-7">
                    <span className="font-display text-3xl font-bold gradient-text">
                      {item.stat}
                    </span>
                    <span className="mb-1 text-sm text-zinc-500">{item.statLabel}</span>
                  </div>
                </div>
              </MotionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
