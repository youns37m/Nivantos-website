import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react"
import { ArrowRight } from "lucide-react"

type ButtonVariant = "primary" | "secondary" | "ghost"

type BaseProps = {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
  icon?: boolean
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

const variants: Record<ButtonVariant, string> = {
  primary: "btn-premium btn-premium-primary",
  secondary: "btn-premium btn-premium-secondary",
  ghost: "btn-premium btn-premium-ghost",
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  icon = false,
  href,
  ...props
}: ButtonProps | LinkProps) {
  const classes = `${variants[variant]} ${className}`

  const content = (
    <>
      {variant === "primary" && <span className="btn-premium-shimmer" aria-hidden="true" />}
      {variant === "primary" && <span className="btn-premium-glow" aria-hidden="true" />}
      <span className="btn-premium-label">{children}</span>
      {icon && (
        <ArrowRight
          size={16}
          className="btn-premium-icon relative shrink-0"
          strokeWidth={2}
        />
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
}
