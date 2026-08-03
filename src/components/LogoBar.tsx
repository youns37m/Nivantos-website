import { motion } from "framer-motion"

const logos = [
  "TechCorp", "DataFlow", "InnovateLab", "SmartBiz", "FutureScale",
  "NeuralWorks", "CloudMind", "DeepLogic",
]

export default function LogoBar() {
  const doubled = [...logos, ...logos]

  return (
    <section className="relative border-y border-white/[0.05] bg-white/[0.01] py-8 backdrop-blur-sm sm:py-10">
      <div className="mx-auto mb-5 max-w-7xl px-5 text-center sm:px-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-zinc-600 sm:text-xs">
          Ils nous font confiance
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#020010] to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#020010] to-transparent sm:w-32" />

        <motion.div
          className="flex w-max gap-12 sm:gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display shrink-0 text-sm font-semibold tracking-[0.2em] text-zinc-500 uppercase transition-colors duration-300 hover:text-zinc-300 sm:text-base"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
