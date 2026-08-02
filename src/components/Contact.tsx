import { useState } from "react"
import type { FormEvent } from "react"
import SectionHeading from "./ui/SectionHeading"
import Reveal from "./ui/Reveal"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative px-6 py-28 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-700/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            label="Contact"
            title={
              <>
                Prêt à{" "}
                <span className="gradient-text">innover</span> ?
              </>
            }
            description="Réservez un appel découverte gratuit de 30 minutes. Nous analyserons vos besoins et vous proposerons une feuille de route personnalisée."
          />
        </Reveal>

        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Info column */}
          <Reveal className="lg:col-span-2" delay={1}>
            <div className="space-y-8">
              {[
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: "Email",
                  value: "contact@nexusai.fr",
                  href: "mailto:contact@nexusai.fr",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  ),
                  label: "Téléphone",
                  value: "+33 1 23 45 67 89",
                  href: "tel:+33123456789",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                  label: "Adresse",
                  value: "Paris, France",
                  href: undefined,
                },
              ].map((item) => (
                <div key={item.label} className="group flex items-center gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-700/10 text-violet-300 ring-1 ring-violet-500/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-violet-500/20">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-white transition-colors hover:text-violet-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-medium text-white">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}

              {/* Availability badge */}
              <div className="rounded-2xl glass p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-sm font-medium text-emerald-400">
                    Disponible pour de nouveaux projets
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-zinc-500">
                  Prochain créneau disponible : sous 48 heures ouvrées.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal className="lg:col-span-3" delay={2}>
            <div className="gradient-border rounded-2xl">
              <div className="rounded-2xl glass-strong p-8 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-purple-700/10 ring-1 ring-violet-500/30">
                      <svg className="h-10 w-10 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3
                      className="mb-3 text-2xl font-bold text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Message envoyé !
                    </h3>
                    <p className="max-w-sm text-zinc-400">
                      Merci pour votre confiance. Un expert NexusAI vous
                      recontactera sous 24 heures.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
                          Nom complet
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Jean Dupont"
                          className="w-full rounded-xl border border-white/8 bg-white/5 px-4 py-3.5 text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-violet-500/40 focus:bg-white/8 focus:ring-2 focus:ring-violet-500/15"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                          Email professionnel
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="jean@entreprise.fr"
                          className="w-full rounded-xl border border-white/8 bg-white/5 px-4 py-3.5 text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-violet-500/40 focus:bg-white/8 focus:ring-2 focus:ring-violet-500/15"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-zinc-300">
                        Entreprise
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Nom de votre entreprise"
                        className="w-full rounded-xl border border-white/8 bg-white/5 px-4 py-3.5 text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-violet-500/40 focus:bg-white/8 focus:ring-2 focus:ring-violet-500/15"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="mb-2 block text-sm font-medium text-zinc-300">
                        Budget estimé
                      </label>
                      <select
                        id="budget"
                        className="w-full rounded-xl border border-white/8 bg-white/5 px-4 py-3.5 text-white outline-none transition-all duration-300 focus:border-violet-500/40 focus:bg-white/8 focus:ring-2 focus:ring-violet-500/15"
                      >
                        <option value="" className="bg-zinc-900">Sélectionnez une fourchette</option>
                        <option value="15-30k" className="bg-zinc-900">15 000 – 30 000 €</option>
                        <option value="30-60k" className="bg-zinc-900">30 000 – 60 000 €</option>
                        <option value="60-100k" className="bg-zinc-900">60 000 – 100 000 €</option>
                        <option value="100k+" className="bg-zinc-900">100 000 € +</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
                        Décrivez votre projet
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Quels sont vos objectifs, défis et contraintes ?"
                        className="w-full resize-none rounded-xl border border-white/8 bg-white/5 px-4 py-3.5 text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-violet-500/40 focus:bg-white/8 focus:ring-2 focus:ring-violet-500/15"
                      />
                    </div>
                    <button
                      type="submit"
                      className="group relative w-full overflow-hidden rounded-xl py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-violet-500/25"
                    >
                      <span className="absolute inset-0 btn-shimmer" />
                      <span className="relative">Prendre un rendez-vous</span>
                    </button>
                    <p className="text-center text-xs text-zinc-600">
                      Réponse garantie sous 24h · Appel découverte gratuit · Sans engagement
                    </p>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
