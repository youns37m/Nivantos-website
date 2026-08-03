import { motion } from "framer-motion"
import HeroBackground from "./HeroBackground"
import HeroVisual from "./hero/HeroVisual"
import { HeroButtonPrimary, HeroButtonSecondary } from "./hero/HeroButtons"
import "./hero/hero.css"

const stats = [
  { value: "120+", label: "Projets livrés" },
  { value: "98%", label: "Satisfaction" },
  { value: "×4", label: "ROI moyen" },
]

const clients = ["TechCorp", "DataFlow", "InnovateLab", "SmartBiz", "FutureScale"]

const ease = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 48, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

const fadeRight = {
  hidden: { opacity: 0, x: 60, filter: "blur(6px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8 lg:pb-24">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Two-column layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left — Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.9, ease }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/[0.08] px-5 py-2.5 text-sm tracking-wide text-violet-200 backdrop-blur-md sm:mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
              </span>
              Agence Premium d&apos;Intelligence Artificielle
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.9, ease }}
              className="font-display mb-6 text-[2.35rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:mb-7 sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem]"
            >
              L&apos;IA qui{" "}
              <span className="gradient-text">transforme</span>
              <br />
              votre entreprise
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.9, ease }}
              className="mx-auto mb-9 max-w-xl text-base leading-[1.8] text-zinc-400 sm:mb-10 sm:text-lg lg:mx-0 lg:text-xl"
            >
              NexusAI conçoit des solutions d&apos;intelligence artificielle sur
              mesure pour les entreprises qui visent l&apos;excellence.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.9, ease }}
              className="flex flex-col items-center gap-3.5 sm:flex-row sm:gap-4 lg:justify-start"
            >
              <HeroButtonPrimary href="#contact">
                Prendre un rendez-vous
              </HeroButtonPrimary>
              <HeroButtonSecondary href="#services">
                Découvrir nos services
              </HeroButtonSecondary>
            </motion.div>

            {/* Inline stats — desktop */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="mt-10 hidden gap-8 border-t border-white/[0.06] pt-8 lg:flex"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-white xl:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — 3D Visual */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeRight}
            transition={{ duration: 1.1, ease, delay: 0.25 }}
            className="relative order-first lg:order-last"
          >
            <HeroVisual />
          </motion.div>
        </div>

        {/* Stats bar — mobile/tablet */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.7 }}
          className="mx-auto mt-12 max-w-3xl lg:hidden"
        >
          <div className="gradient-border rounded-2xl">
            <div className="grid grid-cols-3 divide-x divide-white/[0.06] rounded-2xl glass-strong py-6 sm:py-8">
              {stats.map((stat) => (
                <div key={stat.label} className="px-2 text-center sm:px-4">
                  <div className="font-display text-xl font-bold text-white sm:text-2xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.1em] text-zinc-500 sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.9 }}
          className="mt-12 text-center sm:mt-16"
        >
          <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-zinc-600 sm:mb-6 sm:text-xs">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 opacity-35 sm:gap-x-10">
            {clients.map((name) => (
              <span
                key={name}
                className="font-display text-[0.65rem] font-semibold tracking-[0.18em] text-zinc-400 uppercase sm:text-xs"
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
