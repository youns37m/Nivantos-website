import { useState } from "react"
import type { FormEvent } from "react"
import { Mail, Phone, MapPin, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import Button from "./ui/Button"
import CalendlyTrigger from "./ui/CalendlyTrigger"
import { sendContactEmail, isEmailConfigured } from "../lib/email"

const inputClass =
  "w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3.5 text-white placeholder-zinc-600 outline-none transition-all duration-500 focus:border-violet-500/45 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-500/15"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      if (isEmailConfigured()) {
        await sendContactEmail(data)
      } else {
        const subject = encodeURIComponent(`Demande Nivantos — ${data.name}`)
        const body = encodeURIComponent(
          `Nom: ${data.name}\nEmail: ${data.email}\nEntreprise: ${data.company}\nBudget: ${data.budget}\n\nMessage:\n${data.message}`
        )
        window.location.href = `mailto:contact@nivantos.fr?subject=${subject}&body=${body}`
      }
      setSubmitted(true)
    } catch {
      setError("L'envoi a échoué. Réessayez ou contactez-nous à contact@nivantos.fr")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-padding relative px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="light-orb" style={{ bottom: "0", left: "50%", transform: "translateX(-50%)", width: 800, height: 500, background: "rgba(124,58,237,0.12)" }} />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Contact"
            title={<>Lancez votre <span className="gradient-text">agent IA</span></>}
            description="Réservez un audit gratuit de 30 minutes ou envoyez-nous votre demande. Réponse sous 24h."
          />
        </MotionReveal>

        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
          <MotionReveal className="lg:col-span-2" delay={1} variant="left">
            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", value: "contact@nivantos.fr", href: "mailto:contact@nivantos.fr" },
                { icon: Phone, label: "Téléphone", value: "+33 1 23 45 67 89", href: "tel:+33123456789" },
                { icon: MapPin, label: "Adresse", value: "Paris, France", href: undefined },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="group flex items-center gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-purple-800/10 text-violet-300 ring-1 ring-violet-500/25 transition-all duration-500 group-hover:shadow-[0_0_24px_rgba(124,58,237,0.25)]">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="font-medium text-white transition-colors duration-500 hover:text-violet-300">{item.value}</a>
                      ) : (
                        <div className="font-medium text-white">{item.value}</div>
                      )}
                    </div>
                  </div>
                )
              })}

              <CalendlyTrigger
                as="button"
                className="btn-premium btn-premium-primary w-full"
              >
                <span className="btn-premium-shimmer" aria-hidden="true" />
                <span className="btn-premium-glow" aria-hidden="true" />
                <span className="btn-premium-label">Prendre un rendez-vous</span>
              </CalendlyTrigger>

              <div className="rounded-2xl glass p-6">
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-sm font-medium text-emerald-400">Disponible pour de nouveaux projets</span>
                </div>
                <p className="text-sm leading-relaxed text-zinc-500">Prochain créneau disponible : sous 48 heures ouvrées.</p>
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
                    <h3 className="font-display mb-3 text-2xl font-bold text-white">Message envoyé !</h3>
                    <p className="max-w-sm text-zinc-400">Merci pour votre confiance. Un expert Nivantos vous recontactera sous 24 heures.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">Nom complet</label>
                        <input id="name" name="name" type="text" required placeholder="Jean Dupont" className={inputClass} disabled={loading} />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">Email professionnel</label>
                        <input id="email" name="email" type="email" required placeholder="jean@entreprise.fr" className={inputClass} disabled={loading} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-zinc-300">Entreprise</label>
                      <input id="company" name="company" type="text" placeholder="Nom de votre entreprise" className={inputClass} disabled={loading} />
                    </div>
                    <div>
                      <label htmlFor="budget" className="mb-2 block text-sm font-medium text-zinc-300">Formule souhaitée</label>
                      <select id="budget" name="budget" className={inputClass} disabled={loading}>
                        <option value="" className="bg-zinc-900">Sélectionnez une formule</option>
                        <option value="starter" className="bg-zinc-900">Starter — à partir de 2 000 €</option>
                        <option value="business" className="bg-zinc-900">Business — à partir de 5 000 €</option>
                        <option value="enterprise" className="bg-zinc-900">Enterprise — sur devis</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">Décrivez votre projet</label>
                      <textarea id="message" name="message" required rows={4} placeholder="Quelles tâches souhaitez-vous automatiser ?" className={`${inputClass} resize-none`} disabled={loading} />
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                        <AlertCircle size={16} />
                        {error}
                      </div>
                    )}

                    <Button type="submit" variant="primary" className="btn-premium-block w-full" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 size={18} className="btn-premium-icon animate-spin" />
                          <span className="btn-premium-label">Envoi en cours…</span>
                        </>
                      ) : (
                        "Envoyer ma demande"
                      )}
                    </Button>
                    <p className="text-center text-xs text-zinc-600">Réponse garantie sous 24h · Données protégées RGPD</p>
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
