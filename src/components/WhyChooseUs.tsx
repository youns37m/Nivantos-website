import { motion } from "framer-motion"
import { Check, X, Building2, Settings2, Clock, Headphones, type LucideIcon } from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import { premiumTransition } from "../lib/motion"

type Advantage = {
  icon: LucideIcon
  title: string
  description: string
  stat: string
  statLabel: string
}

const advantages: Advantage[] = [
  {
    icon: Building2,
    title: "Spécialiste PME & TPE",
    description:
      "Nous comprenons vos contraintes de temps, de budget et d'équipe. Nos agents IA sont pensés pour des structures agiles, pas pour des multinationales.",
    stat: "100%",
    statLabel: "adapté aux PME",
  },
  {
    icon: Settings2,
    title: "Agents 100% sur mesure",
    description:
      "Chaque agent est configuré selon votre métier, vos outils et votre ton de communication. Pas de solution générique copiée-collée.",
    stat: "0",
    statLabel: "template imposé",
  },
  {
    icon: Clock,
    title: "Gain de temps immédiat",
    description:
      "Emails, relances, prises de rendez-vous, réponses clients — vos agents traitent le répétitif pendant que vous développez votre activité.",
    stat: "−70%",
    statLabel: "de tâches admin",
  },
  {
    icon: Headphones,
    title: "Accompagnement humain",
    description:
      "Un interlocuteur dédié vous guide de l'audit à la mise en service. Formation incluse pour que vos équipes restent maîtres de leurs outils.",
    stat: "48h",
    statLabel: "premier échange",
  },
]

const comparison = [
  { feature: "Disponibilité", traditional: "Horaires bureau", nivantos: "24h/24, 7j/7" },
  { feature: "Coût mensuel", traditional: "1 800–2 500 € (1 employé)", nivantos: "500–2 000 €" },
  { feature: "Mise en place", traditional: "1–3 mois (recrutement)", nivantos: "2–4 semaines" },
  { feature: "Congés & absences", traditional: "Service interrompu", nivantos: "Jamais d'interruption" },
  { feature: "Évolutivité", traditional: "Recrutement supplémentaire", nivantos: "Ajustement en jours" },
  { feature: "Personnalisation", traditional: "Formation longue", nivantos: "Configuré sur votre métier" },
]

export default function WhyChooseUs() {
  return (
    <section id="avantages" className="section-padding relative px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="light-orb" style={{ right: "-8%", top: "20%", width: 450, height: 450, background: "rgba(147,51,234,0.1)" }} />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Pourquoi nous choisir"
            title={<>Pourquoi choisir <span className="gradient-text">Nivantos</span> ?</>}
            description="Nivantos place l'intelligence artificielle au service des entrepreneurs et dirigeants de PME qui veulent gagner du temps sans sacrifier la qualité."
          />
        </MotionReveal>

        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:gap-7">
          {advantages.map((item, i) => {
            const Icon = item.icon
            return (
              <MotionReveal key={item.title} delay={(i % 2 + 1) as 1 | 2} variant="up">
                <motion.div
                  className="group glass-card relative overflow-hidden rounded-2xl p-8 lg:p-10"
                  whileHover={{ y: -4 }}
                  transition={premiumTransition}
                >
                  <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-violet-600/10 blur-3xl transition-all duration-700 group-hover:bg-violet-600/20" />
                  <div className="relative flex flex-col gap-6 sm:flex-row sm:gap-7">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-purple-800/10 text-violet-300 ring-1 ring-violet-500/25 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_28px_rgba(124,58,237,0.3)]">
                      <Icon size={26} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display mb-2.5 text-xl font-bold tracking-tight text-white">{item.title}</h3>
                      <p className="text-[0.95rem] leading-[1.7] text-zinc-400">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative mt-7 flex items-end gap-2.5 border-t border-white/[0.06] pt-7">
                    <span className="font-display text-3xl font-bold gradient-text">{item.stat}</span>
                    <span className="mb-1 text-sm text-zinc-500">{item.statLabel}</span>
                  </div>
                </motion.div>
              </MotionReveal>
            )
          })}
        </div>

        {/* Comparison table */}
        <MotionReveal variant="blur">
          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl">
            <div className="grid grid-cols-3 border-b border-white/[0.06] bg-white/[0.03] px-4 py-4 sm:px-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 sm:text-sm" />
              <div className="text-center text-xs font-semibold uppercase tracking-wider text-zinc-500 sm:text-sm">Méthode traditionnelle</div>
              <div className="text-center text-xs font-semibold uppercase tracking-wider text-violet-300 sm:text-sm">Nivantos</div>
            </div>
            {comparison.map((row, i) => (
              <motion.div
                key={row.feature}
                className="grid grid-cols-3 items-center border-b border-white/[0.04] px-4 py-4 last:border-0 sm:px-6"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-sm font-medium text-zinc-300">{row.feature}</div>
                <div className="flex items-center justify-center gap-2 text-center text-xs text-zinc-500 sm:text-sm">
                  <X size={14} className="shrink-0 text-red-400/60" />
                  <span>{row.traditional}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-center text-xs font-medium text-violet-200 sm:text-sm">
                  <Check size={14} className="shrink-0 text-emerald-400" />
                  <span>{row.nivantos}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
