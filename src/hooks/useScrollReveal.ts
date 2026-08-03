import { useEffect, useRef, useState } from "react"

export type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "blur"

export function useScrollReveal(threshold = 0.1, rootMargin = "0px 0px -8% 0px") {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, visible }
}
