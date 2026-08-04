import type { ReactNode } from "react"

type SectionHeadingProps = {
  label: string
  title: ReactNode
  description?: string
  centered?: boolean
  compact?: boolean
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
  compact = false,
}: SectionHeadingProps) {
  return (
    <div className={`${compact ? "mb-10 lg:mb-12" : "mb-12 lg:mb-14"} ${centered ? "text-center" : ""}`}>
      <span className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-violet-300 sm:text-xs">
        <span className="h-1 w-1 rounded-full bg-violet-400 shadow-[0_0_6px_rgba(167,139,250,0.8)]" />
        {label}
      </span>
      <h2 className="font-display mb-5 text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-[2.75rem] lg:text-[3.15rem]">
        {title}
      </h2>
      {description && (
        <p
          className={`text-[0.9375rem] leading-[1.7] text-zinc-300 md:text-base lg:text-lg ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
