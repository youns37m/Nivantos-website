import { useCallback, useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Send, Sparkles } from "lucide-react"
import SectionHeading from "./ui/SectionHeading"
import MotionReveal from "./ui/MotionReveal"
import { premiumTransition } from "../lib/motion"

type Message = { role: "user" | "agent"; text: string }

const suggestions = [
  "Quels sont vos horaires ?",
  "Je voudrais prendre rendez-vous",
  "Quels services proposez-vous ?",
]

const responses: Record<string, string> = {
  default:
    "Je suis l'agent Nivantos. Je peux répondre à vos clients, gérer les rendez-vous et automatiser vos relances 24h/24. Que souhaitez-vous automatiser ?",
  horaires:
    "Nous sommes disponibles du lundi au vendredi, 9h–18h. En dehors de ces horaires, je réponds automatiquement aux demandes urgentes et planifie un rappel.",
  rendez:
    "Parfait ! Je peux planifier un créneau demain à 10h ou 14h30. Quel horaire vous convient le mieux ?",
  services:
    "Nivantos propose 4 agents IA : Service Client, Commercial, Administratif et Sur Mesure. Chaque agent s'adapte à votre métier et vos outils.",
}

function getResponse(input: string): string {
  const lower = input.toLowerCase()
  if (lower.includes("horaire") || lower.includes("ouvert")) return responses.horaires
  if (lower.includes("rendez") || lower.includes("rdv") || lower.includes("créneau")) return responses.rendez
  if (lower.includes("service") || lower.includes("propose")) return responses.services
  return responses.default
}

export default function AgentDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "agent",
      text: "Bonjour ! Je suis un agent IA Nivantos. Essayez de me poser une question 👇",
    },
  ])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollDown = useCallback(() => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
    })
  }, [])

  useEffect(() => {
    scrollDown()
  }, [messages, typing, scrollDown])

  function sendMessage(text: string) {
    if (!text.trim() || typing) return

    setMessages((prev) => [...prev, { role: "user", text: text.trim() }])
    setInput("")
    setTyping(true)

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "agent", text: getResponse(text) },
      ])
      setTyping(false)
    }, 900 + Math.random() * 600)
  }

  return (
    <section id="demo" className="section-padding relative px-5 sm:px-6 lg:px-8">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="light-orb" style={{ right: "-10%", top: "20%", width: 500, height: 500, background: "rgba(124,58,237,0.1)" }} />

      <div className="relative mx-auto max-w-7xl">
        <MotionReveal variant="blur">
          <SectionHeading
            label="Démonstration"
            title={<>Testez un agent IA <span className="gradient-text">en direct</span></>}
            description="Découvrez comment un agent Nivantos répond à vos clients — instantanément, 24h/24."
          />
        </MotionReveal>

        <MotionReveal variant="scale" delay={0.1}>
          <motion.div
            className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent shadow-[0_24px_80px_rgba(0,0,0,0.4)]"
            whileHover={{ boxShadow: "0 32px 100px rgba(124,58,237,0.15)" }}
            transition={premiumTransition}
          >
            {/* Chat header */}
            <div className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.03] px-5 py-4">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                <Bot size={20} className="text-white" strokeWidth={1.5} />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#010008] bg-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  Agent Nivantos
                  <Sparkles size={14} className="text-violet-400" />
                </div>
                <div className="text-xs text-emerald-400">En ligne · Répond en ~1s</div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex h-80 flex-col gap-3 overflow-y-auto px-5 py-5 sm:h-96">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={`${msg.role}-${i}`}
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-violet-600 text-white"
                          : "border border-white/[0.08] bg-white/[0.04] text-zinc-200"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {typing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-1 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-2 w-2 rounded-full bg-violet-400"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Suggestions */}
            <div className="flex flex-wrap gap-2 border-t border-white/[0.06] px-5 py-3">
              {suggestions.map((s) => (
                <motion.button
                  key={s}
                  type="button"
                  onClick={() => sendMessage(s)}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-violet-500/30 hover:text-violet-200"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {s}
                </motion.button>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage(input)
              }}
              className="flex gap-2 border-t border-white/[0.06] p-4"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Écrivez votre message…"
                className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:border-violet-500/40 focus:ring-2 focus:ring-violet-500/10"
              />
              <motion.button
                type="submit"
                disabled={!input.trim() || typing}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-white transition-all hover:bg-violet-500 disabled:opacity-40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </MotionReveal>
      </div>
    </section>
  )
}
