import { useState } from "react"
import type { FormEvent } from "react"
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import Button from "./ui/Button"

const inputClass =
  "w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3.5 text-white placeholder-zinc-600 outline-none transition-all duration-500 focus:border-violet-500/45 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-500/15"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding relative px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div
        className="light-orb"
        style={{
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 500,
          background: "rgba(124,58,237,0.12)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
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
        </MotionReveal>

        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          <MotionReveal className="lg:col-span-2" delay={1} variant="left">
            <div className="space-y-8">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "contact@nivantos.fr",
                  href: "mailto:contact@nivantos.fr",
                },
                {
                  icon: Phone,
                  label: "Téléphone",
                  value: "+33 1 23 45 67 89",
                  href: "tel:+33123456789",
                },
                {
                  icon: MapPin,
                  label: "Adresse",
                  value: "Paris, France",
                  href: undefined,
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="group flex items-center gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-purple-800/10 text-violet-300 ring-1 ring-violet-500/25 transition-all duration-500 group-hover:shadow-[0_0_24px_rgba(124,58,237,0.25)]">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-white transition-colors duration-500 hover:text-violet-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-medium text-white">{item.value}</div>
                      )}
                    </div>
                  </div>
                )
              })}

              <div className="rounded-2xl glass p-6">
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
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
          </MotionReveal>

          <MotionReveal className="lg:col-span-3" delay={2} variant="right">
            <div className="gradient-border rounded-2xl">
              <div className="rounded-2xl glass-strong p-7 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/25 to-purple-800/10 ring-1 ring-violet-500/30">
                      <CheckCircle2 size={40} className="text-violet-400" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display mb-3 text-2xl font-bold text-white">
                      Message envoyé !
                    </h3>
                    <p className="max-w-sm text-zinc-400">
                      Merci pour votre confiance. Un expert Nivantos vous
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
                        <input id="name" type="text" required placeholder="Jean Dupont" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                          Email professionnel
                        </label>
                        <input id="email" type="email" required placeholder="jean@entreprise.fr" className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-zinc-300">
                        Entreprise
                      </label>
                      <input id="company" type="text" placeholder="Nom de votre entreprise" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="budget" className="mb-2 block text-sm font-medium text-zinc-300">
                        Budget estimé
                      </label>
                      <select id="budget" className={inputClass}>
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
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    <Button type="submit" variant="primary" className="btn-premium-block w-full">
                      Prendre un rendez-vous
                    </Button>
                    <p className="text-center text-xs text-zinc-600">
                      Réponse garantie sous 24h · Appel découverte gratuit · Sans engagement
                    </p>
                  </form>
                )}
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  )
}
