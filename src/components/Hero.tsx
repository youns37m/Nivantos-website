import { motion } from "framer-motion"
import { Check } from "lucide-react"
import HeroBackground from "./HeroBackground"
import HeroVisual from "./hero/HeroVisual"
import { CTAPrimary, CTASecondary } from "./ui/CTA"
import "./hero/hero.css"

const ease = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

const fadeRight = {
  hidden: { opacity: 0, x: 32, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
}

const trustPoints = [
  "Audit gratuit · 30 minutes",
  "Premier agent en 2 à 4 semaines",
  "Intégré à vos outils existants",
]

export default function Hero() {
  return (
    <section className="hero-section relative min-h-[100svh] overflow-x-hidden">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-5 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="grid w-full items-center gap-12 md:gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 xl:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="hero-copy relative z-10 min-w-0 text-center lg:text-left"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65, ease }}
              className="mb-4 text-sm font-medium text-violet-300/90"
            >
              Agents IA sur mesure pour dirigeants de PME & TPE
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.65, ease }}
              className="font-display mx-auto mb-6 max-w-2xl lg:mx-0 lg:max-w-none"
            >
              <span className="block text-[1.875rem] font-extrabold leading-[1.06] tracking-[-0.045em] text-white sm:text-[2.375rem] md:text-[2.625rem] lg:text-[2.75rem] xl:text-[3.125rem]">
                Automatisez jusqu&apos;à{" "}
                <span className="gradient-text">70&nbsp;%</span> de vos tâches
                administratives
              </span>
              <span className="mt-3 block text-[1.375rem] font-bold leading-[1.12] tracking-[-0.035em] text-zinc-200/90 sm:text-[1.625rem] md:text-[1.75rem] lg:text-[1.875rem] xl:text-[2rem]">
                avec des agents IA sur mesure.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65, ease }}
              className="hero-lead mx-auto mb-8 max-w-[38ch] text-[0.9375rem] leading-[1.65] text-zinc-400 sm:text-base lg:mx-0"
            >
              Service client, relances commerciales, administratif — vos agents travaillent
              pendant que vous développez votre activité.
            </motion.p>

            <motion.ul
              variants={fadeUp}
              transition={{ duration: 0.65, ease }}
              className="hero-trust mx-auto mb-8 flex max-w-md flex-col gap-4 lg:mx-0"
            >
              {trustPoints.map((point) => (
                <li key={point} className="hero-trust-item flex items-center gap-3 text-left">
                  <span className="hero-trust-icon flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/15 ring-1 ring-violet-500/25">
                    <Check size={13} className="text-violet-300" strokeWidth={2.75} />
                  </span>
                  <span className="text-[0.9375rem] leading-snug text-zinc-200 sm:text-base">{point}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65, ease }}
              className="hero-cta-row flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <CTAPrimary className="hero-btn-primary w-full sm:w-auto" />
              <CTASecondary className="hero-btn-secondary w-full sm:w-auto" />
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.65, ease }}
              className="mx-auto mt-6 max-w-[38ch] text-xs leading-relaxed text-zinc-500 lg:mx-0"
            >
              * Estimation basée sur nos déploiements PME — calculez votre ROI dans la{" "}
              <a href="#roi" className="text-violet-300 underline underline-offset-2 hover:text-violet-200">
                section dédiée
              </a>
              .
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeRight}
            transition={{ duration: 0.85, ease, delay: 0.1 }}
            className="hero-visual-wrap relative min-w-0"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
