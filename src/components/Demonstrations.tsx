import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X, Clock3 } from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import { CTAPrimary } from "./ui/CTA"
import { premiumTransition } from "../lib/motion"

const DEFAULT_VIDEO = "/videos/agent-ia-demo.mp4"

type Demo = {
  title: string
  duration: string
  description: string
  poster: string
  video?: string
}

const demos: Demo[] = [
  {
    title: "Agent Service Client",
    duration: "2:15",
    description:
      "Découvrez comment l'agent répond aux questions fréquentes, oriente les demandes et assure un support continu — même la nuit et le week-end.",
    poster: "/videos/demo-service-client.svg",
  },
  {
    title: "Agent Commercial",
    duration: "1:48",
    description:
      "Suivez la qualification automatique des prospects, les relances personnalisées et la mise à jour du pipeline commercial en temps réel.",
    poster: "/videos/demo-commercial.svg",
  },
  {
    title: "Agent Administratif",
    duration: "2:02",
    description:
      "Voyez l'agent traiter les emails entrants, générer des devis, relancer les factures et synchroniser vos outils sans saisie manuelle.",
    poster: "/videos/demo-administratif.svg",
  },
  {
    title: "Agent Sur Mesure",
    duration: "2:30",
    description:
      "Explorez un workflow entièrement adapté à un métier spécifique : règles métier, intégrations API et automatisations uniques à votre entreprise.",
    poster: "/videos/demo-sur-mesure.svg",
  },
]

function VideoModal({ demo, onClose }: { demo: Demo; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [onClose])

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [demo])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Démonstration — ${demo.title}`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Fermer"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={premiumTransition}
        className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#010008] shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
          <div>
            <h3 className="font-display text-lg font-bold text-white">{demo.title}</h3>
            <p className="text-xs text-zinc-500">Durée · {demo.duration}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-400 transition-colors hover:text-white"
            aria-label="Fermer la vidéo"
          >
            <X size={18} />
          </button>
        </div>

        <div className="relative aspect-video bg-black">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            poster={demo.poster}
            controls
            playsInline
          >
            <source src={demo.video ?? DEFAULT_VIDEO} type="video/mp4" />
          </video>
        </div>

        <p className="px-5 py-4 text-sm leading-relaxed text-zinc-400">{demo.description}</p>
      </motion.div>
    </motion.div>
  )
}

function DemoCard({ demo, index, onPlay }: { demo: Demo; index: number; onPlay: () => void }) {
  return (
    <MotionReveal delay={index * 0.08} variant="up">
      <motion.article
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]"
        whileHover={{ y: -6 }}
        transition={premiumTransition}
      >
        <button
          type="button"
          onClick={onPlay}
          className="relative aspect-video w-full overflow-hidden text-left"
          aria-label={`Voir la démo — ${demo.title}`}
        >
          <img
            src={demo.poster}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#010008]/80 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-xs font-medium text-zinc-200 backdrop-blur-md">
            <Clock3 size={12} strokeWidth={2} />
            {demo.duration}
          </span>
          <span className="absolute inset-0 flex items-center justify-center opacity-100 sm:opacity-0 sm:transition-opacity sm:duration-500 sm:group-hover:opacity-100">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-600/90 shadow-[0_0_40px_rgba(124,58,237,0.5)]">
              <Play size={22} className="ml-0.5 text-white" fill="white" strokeWidth={0} />
            </span>
          </span>
          <span className="absolute bottom-3 left-3 rounded-md bg-violet-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-200 ring-1 ring-violet-500/30">
            Vidéo
          </span>
        </button>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="font-display mb-2 text-lg font-bold text-white">{demo.title}</h3>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-400">{demo.description}</p>
          <button
            type="button"
            onClick={onPlay}
            className="btn-premium btn-premium-secondary w-full"
          >
            <span className="btn-premium-label">
              <Play size={15} className="btn-premium-icon" strokeWidth={2.5} fill="currentColor" />
              Voir la démo
            </span>
          </button>
        </div>
      </motion.article>
    </MotionReveal>
  )
}

export default function Demonstrations() {
  const [activeDemo, setActiveDemo] = useState<Demo | null>(null)

  return (
    <section id="demonstrations" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div
        className="light-orb"
        style={{ right: "-5%", top: "20%", width: 520, height: 520, background: "rgba(124,58,237,0.08)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Vidéo"
            title={<>Nos <span className="gradient-text">démonstrations</span></>}
            description="Quatre agents IA en action — miniature, durée et cas concrets pour visualiser ce que Nivantos peut automatiser dans votre entreprise."
          />
        </MotionReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {demos.map((demo, i) => (
            <DemoCard key={demo.title} demo={demo} index={i} onPlay={() => setActiveDemo(demo)} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAPrimary />
        </div>
      </div>

      <AnimatePresence>
        {activeDemo && <VideoModal demo={activeDemo} onClose={() => setActiveDemo(null)} />}
      </AnimatePresence>
    </section>
  )
}
