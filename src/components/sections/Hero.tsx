import { ArrowDownRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '@/data/portfolio'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SocialIcon } from '@/components/ui/SocialIcon'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function Hero() {
  const reduced = usePrefersReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)] lg:items-center">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.24em] text-[var(--accent)] uppercase">
            Software Engineer · Competitive Programmer · Researcher
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] text-[var(--text)] sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg text-[var(--text-soft)]">{profile.title}</p>
          <p className="mt-6 max-w-xl text-[var(--text-soft)] leading-relaxed">
            {profile.introduction}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projects">
              View My Work
              <ArrowDownRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={profile.resumePath} variant="secondary" download>
              Download Resume
              <Download className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {profile.social.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-soft)] transition hover:border-[var(--accent)] hover:text-[var(--text)]"
              >
                <SocialIcon kind={link.kind} />
                {link.label}
              </a>
            ))}
            {profile.email ? (
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-soft)] transition hover:border-[var(--accent)] hover:text-[var(--text)]"
              >
                <SocialIcon kind="email" />
                Email
              </a>
            ) : null}
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center lg:justify-end"
        >
          {profile.image ? (
            <div className="w-full max-w-[20rem] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--bg-elevated)] p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <img
                src={profile.image.src}
                alt={profile.image.alt}
                className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-center"
              />
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  )
}
