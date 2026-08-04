import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Calculator, Clock, Euro, TrendingUp } from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import { CTAPrimary } from "./ui/CTA"
import { premiumTransition } from "../lib/motion"

const AGENT_COST = 800

export default function ROICalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(12)
  const [hourlyRate, setHourlyRate] = useState(45)
  const [automationRate, setAutomationRate] = useState(70)

  const results = useMemo(() => {
    const hoursSavedWeek = hoursPerWeek * (automationRate / 100)
    const hoursSavedMonth = hoursSavedWeek * 4.33
    const moneySavedMonth = hoursSavedMonth * hourlyRate
    const moneySavedYear = moneySavedMonth * 12
    const roi = ((moneySavedMonth - AGENT_COST) / AGENT_COST) * 100
    const paybackWeeks = moneySavedMonth > 0 ? (AGENT_COST / moneySavedMonth) * 4.33 : 0

    return { hoursSavedWeek, hoursSavedMonth, moneySavedMonth, moneySavedYear, roi, paybackWeeks }
  }, [hoursPerWeek, hourlyRate, automationRate])

  return (
    <section id="roi" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="light-orb" style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 700, height: 400, background: "rgba(124,58,237,0.08)" }} />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Calculateur ROI"
            title={<>Combien pourriez-vous <span className="gradient-text">économiser</span> ?</>}
            description="Estimez le retour sur investissement d'un agent IA Nivantos en moins de 30 secondes."
          />
        </MotionReveal>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <MotionReveal variant="left">
            <div className="glass-premium rounded-2xl p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 ring-1 ring-violet-500/25">
                  <Calculator size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-bold text-white">Vos paramètres</h3>
              </div>

              <div className="space-y-7">
                <SliderField
                  label="Heures admin / semaine"
                  value={hoursPerWeek}
                  min={2}
                  max={40}
                  step={1}
                  unit="h"
                  onChange={setHoursPerWeek}
                />
                <SliderField
                  label="Coût horaire moyen"
                  value={hourlyRate}
                  min={20}
                  max={150}
                  step={5}
                  unit="€/h"
                  onChange={setHourlyRate}
                />
                <SliderField
                  label="Taux d'automatisation"
                  value={automationRate}
                  min={30}
                  max={90}
                  step={5}
                  unit="%"
                  onChange={setAutomationRate}
                />
              </div>
            </div>
          </MotionReveal>

          <MotionReveal variant="right" delay={0.1}>
            <motion.div
              className="gradient-border h-full rounded-2xl"
              whileHover={{ scale: 1.01 }}
              transition={premiumTransition}
            >
              <div className="flex h-full flex-col rounded-2xl bg-gradient-to-br from-violet-600/15 via-purple-900/10 to-transparent p-6 sm:p-8">
                <p className="mb-6 text-sm text-zinc-400">
                  Basé sur un agent Nivantos à ~{AGENT_COST.toLocaleString("fr-FR")} €/mois (maintenance, hors mise en place)
                </p>

                <div className="grid flex-1 gap-4 sm:grid-cols-2">
                  <ResultCard
                    icon={Clock}
                    label="Heures économisées"
                    value={`${results.hoursSavedMonth.toFixed(0)} h/mois`}
                    sub={`${results.hoursSavedWeek.toFixed(1)} h/semaine`}
                  />
                  <ResultCard
                    icon={Euro}
                    label="Argent économisé"
                    value={`${results.moneySavedMonth.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €/mois`}
                    sub={`${results.moneySavedYear.toLocaleString("fr-FR", { maximumFractionDigits: 0 })} €/an`}
                  />
                  <ResultCard
                    icon={TrendingUp}
                    label="Retour sur investissement"
                    value={`${results.roi > 0 ? "+" : ""}${results.roi.toFixed(0)}%`}
                    sub="vs coût agent mensuel"
                    highlight
                  />
                  <ResultCard
                    icon={Calculator}
                    label="Rentabilité"
                    value={results.paybackWeeks < 52 ? `${results.paybackWeeks.toFixed(1)} sem.` : "—"}
                    sub="pour amortir l'investissement"
                  />
                </div>

                <CTAPrimary block className="mt-6" />
              </div>
            </motion.div>
          </MotionReveal>
        </div>
      </div>
    </section>
  )
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  unit: string
  onChange: (v: number) => void
}) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <label className="text-sm font-medium text-zinc-300">{label}</label>
        <span className="font-display text-sm font-bold text-violet-300">
          {value} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-slider w-full"
      />
    </div>
  )
}

function ResultCard({
  icon: Icon,
  label,
  value,
  sub,
  highlight = false,
}: {
  icon: typeof Clock
  label: string
  value: string
  sub: string
  highlight?: boolean
}) {
  return (
    <motion.div
      className={`rounded-xl border p-4 backdrop-blur-sm ${
        highlight
          ? "border-violet-500/30 bg-violet-500/10 shadow-[0_0_32px_rgba(124,58,237,0.15)]"
          : "border-white/[0.08] bg-white/[0.03]"
      }`}
      whileHover={{ y: -2 }}
      transition={premiumTransition}
    >
      <Icon size={18} className="mb-2 text-violet-400" strokeWidth={1.5} />
      <div className="text-xs text-zinc-500">{label}</div>
      <div className="font-display mt-1 text-xl font-bold text-white sm:text-2xl">{value}</div>
      <div className="mt-0.5 text-xs text-zinc-600">{sub}</div>
    </motion.div>
  )
}
