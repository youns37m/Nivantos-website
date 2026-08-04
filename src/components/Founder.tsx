import MotionReveal from "./ui/MotionReveal"
import { CTAPrimary } from "./ui/CTA"
import { company } from "../lib/company"

const credentials = [
  "Expert IA appliquée aux PME",
  "Accompagnement de bout en bout",
  "Basé à Paris · Clients partout en France",
]

export default function Founder() {
  return (
    <section id="fondateur" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <MotionReveal variant="left">
            <div className="relative mx-auto max-w-sm lg:mx-0">
              <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
                <div className="relative aspect-[4/5] bg-[#0a0118]">
                  <img
                    src="/founder/younes.jpg"
                    alt="Younes Mahdjoub, fondateur de Nivantos"
                    className="h-full w-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.src = "/founder/younes.svg"
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#010008]/70 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal variant="right" delay={0.08}>
            <div className="text-center lg:text-left">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                Fondateur
              </p>
              <h2 className="font-display mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Younes Mahdjoub
              </h2>

              <div className="space-y-4 text-[0.9375rem] leading-[1.8] text-zinc-300">
                <p>
                  J&apos;ai créé Nivantos parce que les dirigeants de PME passent trop de temps
                  sur des tâches que l&apos;IA peut déjà faire — sans sacrifier la qualité ni la relation client.
                </p>
                <p>
                  Notre promesse : des agents utiles dès la première semaine, intégrés à vos outils,
                  avec un interlocuteur humain à chaque étape.
                </p>
              </div>

              <ul className="mt-6 space-y-2">
                {credentials.map((item) => (
                  <li key={item} className="text-sm text-zinc-400">· {item}</li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <CTAPrimary />
                <a
                  href={company.linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-violet-300 underline underline-offset-2 hover:text-violet-200"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  )
}
