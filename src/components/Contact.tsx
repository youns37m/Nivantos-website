import { useState } from "react"
import type { FormEvent } from "react"
import { CheckCircle2, AlertCircle, Check, Clock, Gift, Shield, Lock, ChevronDown } from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import { CTAPrimary, CTAPrimarySubmit } from "./ui/CTA"
import { sendContactEmail, isEmailConfigured, buildMailtoLink, type ContactFormData } from "../lib/email"
import { company } from "../lib/company"

const inputClass =
  "w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-[0.9375rem] text-white placeholder-zinc-500 outline-none transition-all duration-300 focus:border-violet-500/45 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-500/15"

const selectClass = `${inputClass} cursor-pointer`

const trustPoints = [
  { icon: Clock, label: "Réponse sous 24h" },
  { icon: Gift, label: "Audit gratuit" },
  { icon: Shield, label: "Aucun engagement" },
  { icon: Lock, label: "Confidentialité garantie" },
]

function readFormData(form: HTMLFormElement): ContactFormData {
  return {
    name: (form.elements.namedItem("name") as HTMLInputElement).value,
    email: (form.elements.namedItem("email") as HTMLInputElement).value,
    company: (form.elements.namedItem("company") as HTMLInputElement).value,
    sector: (form.elements.namedItem("sector") as HTMLSelectElement).value,
    employees: (form.elements.namedItem("employees") as HTMLSelectElement).value,
    software: (form.elements.namedItem("software") as HTMLInputElement).value,
    problem: (form.elements.namedItem("problem") as HTMLTextAreaElement).value,
    budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
    desiredDate: (form.elements.namedItem("desiredDate") as HTMLInputElement).value,
    message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
  }
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showOptional, setShowOptional] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const data = readFormData(e.currentTarget)

    try {
      if (isEmailConfigured()) {
        await sendContactEmail(data)
      } else {
        window.location.href = buildMailtoLink(data)
      }
      setSubmitted(true)
    } catch {
      setError("L'envoi a échoué. Écrivez-nous à contact@nivantos.fr")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Contact"
            title={<>Parlons de votre <span className="gradient-text">projet</span></>}
            description="Quatre champs suffisent pour démarrer. Un expert Nivantos vous recontacte sous 24h avec une première estimation."
          />
        </MotionReveal>

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <MotionReveal className="lg:col-span-7 xl:col-span-8" delay={0.05} variant="left">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/15 ring-1 ring-violet-500/30">
                    <CheckCircle2 size={32} className="text-violet-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display mb-2 text-2xl font-bold text-white">Demande reçue</h3>
                  <p className="mb-8 max-w-sm text-sm leading-relaxed text-zinc-400">
                    Un expert analyse votre demande et vous répond sous 24h. Vous pouvez aussi choisir
                    un créneau d&apos;audit dès maintenant.
                  </p>
                  <CTAPrimary />
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-200">Nom complet *</label>
                      <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jean Dupont" className={inputClass} disabled={loading} />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-200">Email professionnel *</label>
                      <input id="email" name="email" type="email" required autoComplete="email" placeholder="jean@entreprise.fr" className={inputClass} disabled={loading} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-zinc-200">Entreprise *</label>
                    <input id="company" name="company" type="text" required placeholder="Nom de votre entreprise" className={inputClass} disabled={loading} />
                  </div>

                  <div>
                    <label htmlFor="problem" className="mb-1.5 block text-sm font-medium text-zinc-200">Quel est votre principal problème ? *</label>
                    <textarea
                      id="problem"
                      name="problem"
                      required
                      rows={3}
                      placeholder="Ex. Trop de relances manuelles, support client saturé…"
                      className={`${inputClass} resize-none`}
                      disabled={loading}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowOptional(!showOptional)}
                    className="flex w-full items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-left text-sm text-zinc-400 transition-colors hover:text-zinc-200"
                  >
                    <span>Informations complémentaires (optionnel)</span>
                    <ChevronDown size={16} className={`transition-transform ${showOptional ? "rotate-180" : ""}`} />
                  </button>

                  {showOptional && (
                    <div className="space-y-5 border-l-2 border-violet-500/20 pl-4">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="sector" className="mb-1.5 block text-sm font-medium text-zinc-300">Secteur</label>
                          <select id="sector" name="sector" className={selectClass} disabled={loading} defaultValue="">
                            <option value="" className="bg-zinc-900">—</option>
                            <option value="commerce" className="bg-zinc-900">Commerce & retail</option>
                            <option value="services" className="bg-zinc-900">Services B2B</option>
                            <option value="industrie" className="bg-zinc-900">Industrie & BTP</option>
                            <option value="sante" className="bg-zinc-900">Santé</option>
                            <option value="immobilier" className="bg-zinc-900">Immobilier</option>
                            <option value="autre" className="bg-zinc-900">Autre</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="employees" className="mb-1.5 block text-sm font-medium text-zinc-300">Effectif</label>
                          <select id="employees" name="employees" className={selectClass} disabled={loading} defaultValue="">
                            <option value="" className="bg-zinc-900">—</option>
                            <option value="1-5" className="bg-zinc-900">1 à 5</option>
                            <option value="6-20" className="bg-zinc-900">6 à 20</option>
                            <option value="21-50" className="bg-zinc-900">21 à 50</option>
                            <option value="51+" className="bg-zinc-900">51+</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-zinc-300">Budget envisagé</label>
                          <select id="budget" name="budget" className={selectClass} disabled={loading} defaultValue="">
                            <option value="" className="bg-zinc-900">—</option>
                            <option value="moins-2000" className="bg-zinc-900">Moins de 2 000 €</option>
                            <option value="2000-5000" className="bg-zinc-900">2 000 – 5 000 €</option>
                            <option value="5000+" className="bg-zinc-900">Plus de 5 000 €</option>
                            <option value="a-definir" className="bg-zinc-900">À définir</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="desiredDate" className="mb-1.5 block text-sm font-medium text-zinc-300">Date souhaitée</label>
                          <input id="desiredDate" name="desiredDate" type="date" className={`${inputClass} [color-scheme:dark]`} disabled={loading} />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="software" className="mb-1.5 block text-sm font-medium text-zinc-300">Logiciels utilisés</label>
                        <input id="software" name="software" type="text" placeholder="HubSpot, Notion, Excel…" className={inputClass} disabled={loading} />
                      </div>
                      <div>
                        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-300">Message</label>
                        <textarea id="message" name="message" rows={3} placeholder="Contexte, objectifs, contraintes…" className={`${inputClass} resize-none`} disabled={loading} />
                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      <AlertCircle size={16} />
                      {error}
                    </div>
                  )}

                  <CTAPrimarySubmit loading={loading} disabled={loading} />
                  <p className="text-center text-xs text-zinc-500">
                    En envoyant ce formulaire, vous acceptez notre{" "}
                    <a href="/politique-rgpd" className="text-violet-300 underline underline-offset-2">politique RGPD</a>.
                  </p>
                </form>
              )}
            </div>
          </MotionReveal>

          <MotionReveal className="lg:col-span-5 xl:col-span-4" delay={0.1} variant="right">
            <div className="sticky top-24 rounded-2xl border border-white/[0.08] bg-[#0a0118]/80 p-6 sm:p-7">
              <h3 className="font-display mb-2 text-lg font-bold text-white">Réponse garantie sous 24h</h3>
              <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                Chaque demande est lue par un expert, pas par un chatbot. Nous préparons votre audit avant le premier échange.
              </p>

              <ul className="mb-6 space-y-4">
                {trustPoints.map(({ label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <Check size={14} className="shrink-0 text-emerald-400" strokeWidth={2.5} />
                    <span className="text-sm text-zinc-200">{label}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/[0.06] pt-5">
                <p className="text-xs text-zinc-500">Contact direct</p>
                <a href={`mailto:${company.email}`} className="mt-1 block text-sm font-medium text-violet-300 hover:text-violet-200">
                  {company.email}
                </a>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  )
}
