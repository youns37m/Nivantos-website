import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import NivantosMark from "./NivantosMark"

const STORAGE_KEY = "nivantos_loaded"

export default function LoadingScreen() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true
    return !sessionStorage.getItem(STORAGE_KEY)
  })

  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, "1")
      setVisible(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [visible])

  if (!visible) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#010008]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <NivantosMark size={44} variant="color" />
            <span className="font-display text-base font-bold tracking-[-0.04em] text-white">Nivantos</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
