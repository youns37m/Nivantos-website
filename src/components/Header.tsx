import { useEffect, useState, type MouseEvent } from "react"
import Logo from "./ui/Logo"
import { CTAPrimary, CTASecondary } from "./ui/CTA"
import { scrollToSection } from "../lib/scroll"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Démos", href: "#demonstrations" },
  { label: "Offres", href: "#offres" },
  { label: "ROI", href: "#roi" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

const sectionIds = [
  "services", "demonstrations", "demo", "offres", "roi", "avantages",
  "processus", "exemples", "fondateur", "faq", "contact",
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const scrollPos = window.scrollY + 120
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i])
          break
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  function handleNavClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault()
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" })
    else scrollToSection(href.replace("#", ""))
    setMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-white/[0.06] bg-black/85 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6 lg:px-8">
          <Logo href="#" />

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "")
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 xl:px-3.5 ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <CTASecondary className="py-2.5 px-4 text-sm" icon={false} />
            <CTAPrimary className="py-2.5 px-5 text-sm" icon={false} />
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:border-violet-500/30 lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
        <div className="absolute inset-0 bg-black/94 backdrop-blur-2xl" />
        <nav className="relative flex flex-col items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-8 py-3 text-xl font-semibold text-zinc-300 transition-colors hover:text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8 flex w-full max-w-xs flex-col gap-3 px-6">
            <CTAPrimary block />
            <CTASecondary block />
          </div>
        </nav>
      </div>
    </>
  )
}
