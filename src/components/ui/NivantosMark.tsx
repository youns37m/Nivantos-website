type MarkVariant = "color" | "mono" | "mono-black"

type NivantosMarkProps = {
  size?: number
  variant?: MarkVariant
  className?: string
  title?: string
}

const strokeMap: Record<MarkVariant, string> = {
  color: "#7C3AED",
  mono: "#FFFFFF",
  "mono-black": "#010008",
}

/**
 * Nivantos mark — flowing "N" with convergence node.
 * Abstract intelligence symbol: connection, flow, focal point.
 */
export default function NivantosMark({
  size = 32,
  variant = "color",
  className = "",
  title = "Nivantos",
}: NivantosMarkProps) {
  const stroke = strokeMap[variant]
  const nodeFill = variant === "color" ? "#7C3AED" : stroke

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
    >
      {title ? <title>{title}</title> : null}
      {/* Left pillar */}
      <path
        d="M9 23V9"
        stroke={stroke}
        strokeWidth="2.75"
        strokeLinecap="round"
      />
      {/* Flowing bridge — intelligence arc */}
      <path
        d="M9 9Q16 23 23 23"
        stroke={stroke}
        strokeWidth="2.75"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right pillar */}
      <path
        d="M23 23V9"
        stroke={stroke}
        strokeWidth="2.75"
        strokeLinecap="round"
      />
      {/* Convergence node */}
      <circle cx="16" cy="16.5" r="2" fill={nodeFill} />
    </svg>
  )
}

export const NIVANTOS_MARK_PATHS = {
  left: "M9 23V9",
  bridge: "M9 9Q16 23 23 23",
  right: "M23 23V9",
  node: { cx: 16, cy: 16.5, r: 2 },
} as const
