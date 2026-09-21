import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'

export function Section({
  id,
  children,
  className = '',
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-24 ${className}`.trim()}>
      <Container className="relative">{children}</Container>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <header className="mb-10 max-w-2xl">
      <p className="font-mono text-xs tracking-[0.22em] text-[var(--accent)] uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl text-[var(--text)] drop-shadow-[0_14px_30px_rgba(126,224,200,0.08)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-[var(--text-soft)] leading-relaxed">{description}</p>
      ) : null}
    </header>
  )
}
