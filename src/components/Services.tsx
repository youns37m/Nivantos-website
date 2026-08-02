import SectionHeading from "./ui/SectionHeading"
import Reveal from "./ui/Reveal"

const services = [
  {
    number: "01",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Agents IA sur mesure",
    description:
      "Assistants intelligents entraînés sur vos données pour automatiser vos workflows et multiplier la productivité de vos équipes.",
    tags: ["LLM", "RAG", "Automation"],
  },
  {
    number: "02",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Analyse prédictive",
    description:
      "Modèles de machine learning pour anticiper les tendances, optimiser vos décisions et maximiser votre performance commerciale.",
    tags: ["ML", "Forecasting", "BI"],
  },
  {
    number: "03",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Chatbots & NLP",
    description:
      "Interfaces conversationnelles naturelles, multilingues et disponibles 24h/24 pour transformer votre relation client.",
    tags: ["NLP", "Support", "Multilingue"],
  },
  {
    number: "04",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Vision par ordinateur",
    description:
      "Reconnaissance d'images, détection d'anomalies et analyse vidéo en temps réel pour industrialiser vos contrôles qualité.",
    tags: ["CV", "Qualité", "Temps réel"],
  },
  {
    number: "05",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Audit & Conformité IA",
    description:
      "Évaluation de vos systèmes, conformité RGPD et gouvernance responsable pour une IA éthique et sécurisée.",
    tags: ["RGPD", "Éthique", "Audit"],
  },
  {
    number: "06",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    title: "Formation & Accompagnement",
    description:
      "Montée en compétences de vos équipes et intégration de l'IA dans votre culture d'entreprise pour un impact durable.",
    tags: ["Workshops", "Change", "Support"],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-28 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-violet-700/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            label="Nos services"
            title={
              <>
                Des solutions IA{" "}
                <span className="gradient-text">haut de gamme</span>
              </>
            }
            description="De la stratégie à la mise en production, nous concevons des systèmes d'intelligence artificielle qui génèrent un impact mesurable."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3 + 1) as 1 | 2 | 3}>
              <article className="group relative h-full overflow-hidden rounded-2xl glass-card p-8">
                <div className="absolute -right-4 -top-4 text-7xl font-bold text-white/[0.03] transition-colors duration-500 group-hover:text-violet-500/10"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.number}
                </div>

                <div className="relative">
                  <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-600/10 p-3.5 text-violet-300 ring-1 ring-violet-500/20 transition-all duration-300 group-hover:from-violet-500/30 group-hover:text-white group-hover:shadow-lg group-hover:shadow-violet-500/20">
                    {service.icon}
                  </div>

                  <h3
                    className="mb-3 text-xl font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="mb-5 leading-relaxed text-zinc-400">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-500 transition-colors duration-300 group-hover:border-violet-500/20 group-hover:text-violet-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
