const CALENDLY_URL =
  import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/nivantos/audit-gratuit"

let scriptLoading: Promise<void> | null = null

function loadCalendlyScript(): Promise<void> {
  if (window.Calendly) return Promise.resolve()
  if (scriptLoading) return scriptLoading

  scriptLoading = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[src*="calendly.com"]')
    if (existing) {
      existing.addEventListener("load", () => resolve())
      return
    }

    const link = document.createElement("link")
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error("Calendly script failed to load"))
    document.head.appendChild(script)
  })

  return scriptLoading
}

export async function openCalendlyPopup(): Promise<void> {
  await loadCalendlyScript()
  window.Calendly?.initPopupWidget({ url: CALENDLY_URL })
}

export { CALENDLY_URL }
