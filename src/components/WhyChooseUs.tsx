import SectionHeading from "./ui/SectionHeading"
import Reveal from "./ui/Reveal"

const advantages = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Expertise de pointe",
    description:
      "Une équipe senior certifiée sur les dernières architectures IA — GPT, Claude, Llama et modèles propriétaires.",
    stat: "8+ ans",
    statLabel: "d'expertise IA",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "100% sur mesure",
    description:
      "Chaque solution est conçue spécifiquement pour vos enjeux métier. Zéro template, zéro compromis.",
    stat: "0",
    statLabel: "solution générique",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "ROI mesurable",
    description:
      "Des KPIs définis dès le départ. Nous garantissons un retour sur investissement quantifiable à chaque étape.",
    stat: "×4",
    statLabel: "ROI moyen",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Accompagnement premium",
    description:
      "Un chef de projet dédié, des points hebdomadaires et un support réactif tout au long de la collaboration.",
    stat: "24h",
    statLabel: "délai de réponse",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="avantages" className="relative px-6 py-28 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            label="Pourquoi nous choisir"
            title={
              <>
                L&apos;excellence IA,{" "}
                <span className="gradient-text">sans compromis</span>
              </>
            }
            description="NexusAI combine expertise technique, vision stratégique et exécution rigoureuse pour des résultats qui dépassent vos attentes."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {advantages.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2 + 1) as 1 | 2}>
              <div className="group relative overflow-hidden rounded-2xl glass-card p-8 lg:p-10">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet-600/10 blur-2xl transition-all duration-500 group-hover:bg-violet-600/20" />

                <div className="relative flex gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-700/10 text-violet-300 ring-1 ring-violet-500/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-violet-500/20">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <h3
                      className="mb-2 text-xl font-bold text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="relative mt-6 flex items-end gap-2 border-t border-white/5 pt-6">
                  <span
                    className="text-3xl font-bold gradient-text"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.stat}
                  </span>
                  <span className="mb-1 text-sm text-zinc-500">{item.statLabel}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
