import type { ComponentProps } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const styles: Record<Variant, string> = {
  primary:
    'border border-[color-mix(in_oklab,var(--accent)_70%,transparent)] bg-[linear-gradient(135deg,var(--accent),color-mix(in_oklab,var(--accent)_75%,white))] text-[var(--bg)] shadow-[0_14px_32px_rgba(126,224,200,0.22)] hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(126,224,200,0.28)]',
  secondary:
    'border border-[var(--border)] bg-[color-mix(in_oklab,var(--bg-elevated)_88%,transparent)] text-[var(--text)] shadow-[0_8px_22px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-[0_10px_26px_rgba(126,224,200,0.10)]',
  ghost: 'text-[var(--text-soft)] hover:text-[var(--text)] hover:bg-[color-mix(in_oklab,var(--bg-elevated)_75%,transparent)]',
}

type ButtonProps = ComponentProps<'a'> & {
  variant?: Variant
}

export function ButtonLink({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-200 ease-out ${styles[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  )
}
