import { motion } from "framer-motion"
import HeroBackground from "./HeroBackground"
import HeroVisual from "./hero/HeroVisual"
import { HeroButtonPrimary, HeroButtonSecondary } from "./hero/HeroButtons"
import "./hero/hero.css"

const ease = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 56, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

const fadeRight = {
  hidden: { opacity: 0, x: 80, filter: "blur(8px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
}

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pb-20">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Asymmetric grid — content 55%, visual 45% offset right */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6 xl:grid-cols-[1.2fr_0.8fr] xl:gap-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="relative z-10 text-center lg:pr-4 lg:text-left xl:pr-8"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.95, ease }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-2 text-xs tracking-wide text-violet-200 backdrop-blur-xl sm:mb-8 sm:gap-3 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
              </span>
              Nivantos · Intelligence Artificielle
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.95, ease }}
              className="font-display mb-5 text-[2.5rem] font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4.5rem]"
            >
              L&apos;IA au service
              <br />
              de votre{" "}
              <span className="gradient-text">croissance</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.95, ease }}
              className="mx-auto mb-4 max-w-lg text-lg font-medium leading-snug text-zinc-200 sm:mb-5 sm:text-xl lg:mx-0 lg:max-w-xl"
            >
              L&apos;intelligence artificielle au service de votre croissance.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.95, ease }}
              className="mx-auto mb-9 max-w-lg text-base leading-[1.85] text-zinc-400 sm:mb-10 sm:text-[1.05rem] lg:mx-0 lg:max-w-xl"
            >
              Nivantos conçoit des solutions d&apos;intelligence artificielle
              sur mesure pour automatiser les processus, augmenter la
              productivité et accélérer la croissance des entreprises.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.95, ease }}
              className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:justify-start"
            >
              <HeroButtonPrimary href="#contact">
                Prendre un rendez-vous
              </HeroButtonPrimary>
              <HeroButtonSecondary href="#services">
                Voir nos services
              </HeroButtonSecondary>
            </motion.div>
          </motion.div>

          {/* Visual — bleeds right on large screens */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeRight}
            transition={{ duration: 1.15, ease, delay: 0.2 }}
            className="relative lg:-mr-8 xl:-mr-16"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
