import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import HeroBackground from "./HeroBackground"
import Button from "./ui/Button"
import { fadeUp, premiumTransition, staggerContainer } from "../lib/motion"

const stats = [
  { value: "120+", label: "Projets livrés" },
  { value: "98%", label: "Satisfaction client" },
  { value: "×4", label: "ROI moyen constaté" },
]

const clients = ["TechCorp", "DataFlow", "InnovateLab", "SmartBiz", "FutureScale"]

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 pb-20 sm:px-6 sm:pt-32 sm:pb-24 lg:px-8">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            transition={premiumTransition}
            className="mb-8 inline-flex items-center gap-3 rounded-full glass px-5 py-2.5 text-sm tracking-wide text-violet-200 sm:mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>
            Agence Premium d&apos;Intelligence Artificielle
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={premiumTransition}
            className="font-display mb-7 text-[2.5rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:mb-8 sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            L&apos;IA qui{" "}
            <span className="gradient-text">transforme</span>
            <br />
            votre entreprise
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={premiumTransition}
            className="mx-auto mb-12 max-w-2xl text-base leading-[1.8] tracking-[-0.01em] text-zinc-400 sm:mb-14 sm:text-lg md:text-xl lg:text-[1.3rem]"
          >
            NexusAI conçoit des solutions d&apos;intelligence artificielle sur
            mesure pour les entreprises qui visent l&apos;excellence.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={premiumTransition}
            className="flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-5"
          >
            <Button href="#contact" variant="primary" icon>
              Prendre un rendez-vous
            </Button>
            <Button href="#services" variant="secondary">
              <>
                Découvrir nos services
                <ChevronDown
                  size={18}
                  strokeWidth={2}
                  className="transition-transform duration-500 [.btn-premium-secondary:hover_&]:translate-y-1"
                />
              </>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...premiumTransition, delay: 0.55 }}
          className="mx-auto mt-16 max-w-3xl sm:mt-24"
        >
          <div className="gradient-border rounded-2xl">
            <div className="grid grid-cols-3 divide-x divide-white/[0.06] rounded-2xl glass-strong py-7 sm:py-9 md:py-10">
              {stats.map((stat) => (
                <div key={stat.label} className="px-2 text-center sm:px-6">
                  <div className="font-display text-xl font-bold text-white sm:text-3xl md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-[0.6rem] font-medium uppercase tracking-[0.12em] text-zinc-500 sm:mt-2 sm:text-xs md:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...premiumTransition, delay: 0.75 }}
          className="mt-14 text-center sm:mt-20"
        >
          <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-zinc-600 sm:mb-7 sm:text-xs">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 opacity-35 sm:gap-x-10 md:gap-x-12">
            {clients.map((name) => (
              <span
                key={name}
                className="font-display text-[0.65rem] font-semibold tracking-[0.18em] text-zinc-400 uppercase sm:text-xs md:text-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
