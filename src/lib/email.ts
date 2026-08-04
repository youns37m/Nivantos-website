import emailjs from "@emailjs/browser"

export type ContactFormData = {
  name: string
  email: string
  company: string
  sector: string
  employees: string
  software: string
  problem: string
  budget: string
  desiredDate: string
  message: string
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function isEmailConfigured(): boolean {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  if (!isEmailConfigured()) {
    throw new Error(
      "EmailJS non configuré. Définissez VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID et VITE_EMAILJS_PUBLIC_KEY."
    )
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: data.name,
      from_email: data.email,
      company: data.company || "Non renseigné",
      sector: data.sector || "Non renseigné",
      employees: data.employees || "Non renseigné",
      software: data.software || "Non renseigné",
      problem: data.problem || "Non renseigné",
      budget: data.budget || "Non renseigné",
      desired_date: data.desiredDate || "Non renseigné",
      message: data.message,
      to_email: "contact@nivantos.fr",
    },
    PUBLIC_KEY
  )
}

function formatMailtoBody(data: ContactFormData): string {
  return [
    `Nom: ${data.name}`,
    `Email: ${data.email}`,
    `Entreprise: ${data.company}`,
    `Secteur: ${data.sector}`,
    `Nombre d'employés: ${data.employees}`,
    `Logiciels utilisés: ${data.software}`,
    `Principal problème: ${data.problem}`,
    `Budget: ${data.budget}`,
    `Date souhaitée: ${data.desiredDate}`,
    "",
    "Message:",
    data.message,
  ].join("\n")
}

export function buildMailtoLink(data: ContactFormData): string {
  const subject = encodeURIComponent(`Demande audit gratuit — ${data.name}`)
  const body = encodeURIComponent(formatMailtoBody(data))
  return `mailto:contact@nivantos.fr?subject=${subject}&body=${body}`
}
