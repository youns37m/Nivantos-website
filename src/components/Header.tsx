import { useEffect, useState } from "react"
import Button from "./ui/Button"
import Logo from "./ui/Logo"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Avantages", href: "#avantages" },
  { label: "Méthode", href: "#processus" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "border-b border-white/[0.06] bg-black/75 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-500 hover:bg-white/[0.05] hover:text-white"
                style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Button href="#contact" variant="ghost">
              Prendre un rendez-vous
            </Button>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-500 hover:border-violet-500/30 hover:bg-white/[0.08] lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-500 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-500 ${
                  menuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-500 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-700 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        <div className="absolute inset-0 bg-black/92 backdrop-blur-2xl" />
        <nav className="relative flex flex-col items-center gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-8 py-3.5 text-2xl font-semibold text-zinc-300 transition-all duration-500 hover:text-white"
              style={{
                fontFamily: "var(--font-display)",
                transitionDelay: menuOpen ? `${i * 50}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8" onClick={() => setMenuOpen(false)}>
            <Button href="#contact" variant="primary" icon>
              Prendre un rendez-vous
            </Button>
          </div>
        </nav>
      </div>
    </>
  )
}
