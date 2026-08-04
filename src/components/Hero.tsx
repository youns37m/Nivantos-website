import { motion } from "framer-motion"
import { Check } from "lucide-react"
import HeroBackground from "./HeroBackground"
import HeroVisual from "./hero/HeroVisual"
import { CTAPrimary, CTASecondary } from "./ui/CTA"
import "./hero/hero.css"

const ease = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

const fadeRight = {
  hidden: { opacity: 0, x: 40, filter: "blur(6px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const trustPoints = [
  "Audit gratuit · 30 minutes",
  "Premier agent en 2 à 4 semaines",
  "Intégré à vos outils existants",
]

export default function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-14 lg:min-h-[88svh] lg:pt-32 lg:pb-16">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 xl:gap-14">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="relative z-10 text-center lg:pr-2 lg:text-left"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7, ease }}
              className="mb-5 text-sm font-medium text-violet-300/90 sm:mb-6"
            >
              Agents IA sur mesure pour dirigeants de PME & TPE
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7, ease }}
              className="font-display mx-auto mb-5 max-w-2xl text-[1.85rem] font-extrabold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl sm:leading-[1.06] md:text-[2.65rem] lg:mx-0 lg:max-w-none xl:text-[3rem]"
            >
              Automatisez jusqu&apos;à{" "}
              <span className="gradient-text">70&nbsp;%</span> de vos tâches
              administratives avec des agents IA sur mesure.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7, ease }}
              className="mx-auto mb-6 max-w-xl text-[0.9375rem] leading-[1.7] text-zinc-300 sm:text-base lg:mx-0 lg:max-w-[32rem]"
            >
              Service client, relances commerciales, administratif — vos agents travaillent
              pendant que vous développez votre activité.
            </motion.p>

            <motion.ul
              variants={fadeUp}
              transition={{ duration: 0.7, ease }}
              className="mx-auto mb-8 flex max-w-md flex-col gap-2 sm:mb-9 lg:mx-0"
            >
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-left text-sm text-zinc-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/15 ring-1 ring-violet-500/25">
                    <Check size={11} className="text-violet-300" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, ease }}
              className="flex flex-col items-center gap-3 sm:flex-row sm:gap-3.5 lg:justify-start"
            >
              <CTAPrimary />
              <CTASecondary />
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7, ease }}
              className="mx-auto mt-5 max-w-md text-xs leading-relaxed text-zinc-500 lg:mx-0"
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
            transition={{ duration: 0.9, ease, delay: 0.12 }}
            className="relative md:block lg:-mr-2 xl:-mr-4"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
