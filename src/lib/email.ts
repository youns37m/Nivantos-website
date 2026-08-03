import emailjs from "@emailjs/browser"

export type ContactFormData = {
  name: string
  email: string
  company: string
  budget: string
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
      budget: data.budget || "Non renseigné",
      message: data.message,
      to_email: "contact@nivantos.fr",
    },
    PUBLIC_KEY
  )
}
