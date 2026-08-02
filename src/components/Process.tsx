import SectionHeading from "./ui/SectionHeading"
import Reveal from "./ui/Reveal"

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
    title: "Déploiement & Formation",
    description:
      "Mise en production sécurisée, formation de vos équipes et documentation complète.",
    duration: "Semaine 9",
  },
  {
    number: "05",
    title: "Suivi & Optimisation",
    description:
      "Monitoring continu, amélioration des performances et évolutions fonctionnelles selon vos retours.",
    duration: "Continu",
  },
]

export default function Process() {
  return (
    <section id="processus" className="relative px-6 py-28 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-800/8 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            label="Notre processus"
            title={
              <>
                Une collaboration{" "}
                <span className="gradient-text">transparente</span>
              </>
            }
            description="Une méthodologie éprouvée en 5 étapes pour garantir le succès de votre projet IA, du premier échange à la mise en production."
          />
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent lg:left-1/2 lg:block lg:-translate-x-px" />

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={(i % 3 + 1) as 1 | 2 | 3}>
                <div
                  className={`relative flex flex-col gap-6 lg:flex-row lg:items-center ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <div className="rounded-2xl glass-card p-8">
                      <div className={`mb-4 flex items-center gap-3 ${i % 2 === 0 ? "lg:justify-end" : ""}`}>
                        <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                          {step.duration}
                        </span>
                      </div>
                      <h3
                        className="mb-3 text-2xl font-bold text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="leading-relaxed text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="absolute left-8 hidden lg:left-1/2 lg:block lg:-translate-x-1/2">
                    <div className="relative flex h-16 w-16 items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-md" />
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-violet-500/30 bg-black">
                        <span
                          className="text-lg font-bold gradient-text"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden flex-1 lg:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
