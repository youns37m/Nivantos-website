export const company = {
  name: "Nivantos",
  legalName: "Nivantos SAS",
  tagline: "L'IA qui travaille pendant que vous développez votre entreprise.",
  email: "contact@nivantos.fr",
  address: {
    line1: "Paris",
    line2: "France",
    full: "Paris, France",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nivantos",
  },
  foundedYear: 2024,
} as const

export const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/confidentialite" },
  { label: "CGV", href: "/cgv" },
  { label: "Politique RGPD", href: "/politique-rgpd" },
] as const

export const footerNav = {
  solutions: [
    { label: "Services", href: "/#services" },
    { label: "Démonstrations", href: "/#demonstrations" },
    { label: "Nos offres", href: "/#offres" },
    { label: "Calculateur ROI", href: "/#roi" },
  ],
  entreprise: [
    { label: "Processus", href: "/#processus" },
    { label: "Cas clients", href: "/#exemples" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ],
} as const
