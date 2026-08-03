import type { ReactNode } from "react"

type SectionHeadingProps = {
  label: string
  title: ReactNode
  description?: string
  centered?: boolean
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 lg:mb-20 ${centered ? "text-center" : ""}`}>
      <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-violet-300 sm:text-xs">
        <span className="h-1 w-1 rounded-full bg-violet-400 shadow-[0_0_6px_rgba(167,139,250,0.8)]" />
        {label}
      </span>
      <h2 className="font-display mb-6 text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-white md:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-[1.75] tracking-[-0.01em] text-zinc-400 md:text-lg lg:text-xl ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
