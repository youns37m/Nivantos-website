import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"

const steps = [
  {
    number: "01",
    title: "Découverte & Audit",
    description:
      "Analyse approfondie de vos processus, identification des opportunités IA et définition des objectifs mesurables.",
    duration: "Semaine 1",
  },
  {
    number: "02",
    title: "Stratégie & Conception",
    description:
      "Architecture technique, choix des modèles, prototypage rapide et validation du concept avec vos équipes.",
    duration: "Semaines 2–3",
  },
  {
    number: "03",
    title: "Développement & Intégration",
    description:
      "Construction itérative, intégration à vos systèmes existants et tests rigoureux en conditions réelles.",
    duration: "Semaines 4–8",
  },
  {
    number: "04",
    title: "Déploiement & Suivi",
    description:
      "Mise en production sécurisée, formation de vos équipes, monitoring continu et optimisation des performances.",
    duration: "Continu",
  },
]

export default function Process() {
  return (
    <section id="processus" className="section-padding relative px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div
        className="light-orb"
        style={{
          right: "0",
          top: "30%",
          width: 550,
          height: 550,
          background: "rgba(109,40,217,0.1)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Notre méthode"
            title={
              <>
                Une collaboration{" "}
                <span className="gradient-text">transparente</span>
              </>
            }
            description="Une méthodologie éprouvée en 4 étapes pour garantir le succès de votre projet IA, du premier échange à la mise en production."
          />
        </MotionReveal>

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500/50 via-violet-500/15 to-transparent lg:left-1/2 lg:block lg:-translate-x-px" />

          <div className="space-y-6 lg:space-y-10">
            {steps.map((step, i) => (
              <MotionReveal
                key={step.number}
                delay={(i % 3 + 1) as 1 | 2 | 3}
                variant={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex flex-col gap-5 lg:flex-row lg:items-center ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:pr-20 lg:text-right" : "lg:pl-20"}`}>
                    <div className="glass-card rounded-2xl p-7 lg:p-8">
                      <div className={`mb-4 flex items-center gap-3 ${i % 2 === 0 ? "lg:justify-end" : ""}`}>
                        <span className="rounded-full border border-violet-500/25 bg-violet-500/10 px-3.5 py-1 text-xs font-medium tracking-wide text-violet-300">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="font-display mb-3 text-2xl font-bold tracking-tight text-white">
                        {step.title}
                      </h3>
                      <p className="text-[0.95rem] leading-[1.7] text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-6 hidden lg:left-1/2 lg:block lg:-translate-x-1/2">
                    <div className="relative flex h-16 w-16 items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-violet-600/25 blur-lg transition-all duration-500" />
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-violet-500/35 bg-[#030014] shadow-[0_0_24px_rgba(124,58,237,0.2)]">
                        <span className="font-display text-lg font-bold gradient-text">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden flex-1 lg:block" />
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
