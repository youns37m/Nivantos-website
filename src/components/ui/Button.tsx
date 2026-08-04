import type { ButtonHTMLAttributes } from "react"
import { CTAPrimary, CTASecondary, CTAPrimarySubmit } from "./CTA"

type ButtonVariant = "primary" | "secondary"

type BaseProps = {
  variant?: ButtonVariant
  className?: string
  block?: boolean
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
    loading?: boolean
  }

/** @deprecated Prefer CTAPrimary, CTASecondary or CTAPrimarySubmit directly. */
export default function Button({
  variant = "primary",
  className = "",
  block,
  loading,
  type,
  ...props
}: ButtonProps) {
  if (variant === "secondary") {
    return <CTASecondary className={className} block={block} />
  }

  if (type === "submit") {
    return <CTAPrimarySubmit className={className} block={block} loading={loading} {...props} />
  }

  return <CTAPrimary className={className} block={block} />
}
