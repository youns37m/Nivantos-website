import { useEffect, useState } from "react"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Avantages", href: "#avantages" },
  { label: "Processus", href: "#processus" },
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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/5 bg-black/70 backdrop-blur-2xl shadow-2xl shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="group flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 opacity-80 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-400 to-fuchsia-500 opacity-0 blur-md transition-opacity group-hover:opacity-60" />
              <span className="relative text-sm font-bold text-white">N</span>
            </div>
            <span
              className="text-xl font-bold tracking-tight text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Nexus<span className="gradient-text">AI</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-300 group-hover:from-violet-500 group-hover:to-purple-500" />
              <span className="absolute inset-0 rounded-full opacity-0 blur-xl bg-violet-500 transition-opacity duration-300 group-hover:opacity-40" />
              <span className="relative">Prendre un rendez-vous</span>
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" />
        <nav className="relative flex flex-col items-center gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-8 py-3 text-2xl font-semibold text-zinc-300 transition-colors hover:text-white"
              style={{
                fontFamily: "var(--font-display)",
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 text-base font-semibold text-white"
          >
            Prendre un rendez-vous
          </a>
        </nav>
      </div>
    </>
  )
}
