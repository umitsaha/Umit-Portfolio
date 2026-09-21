import { type FormEvent, useState } from 'react'
import { Section, SectionHeading } from '@/components/ui/Section'
import { SocialIcon } from '@/components/ui/SocialIcon'
import { profile } from '@/data/portfolio'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s talk"
        description="The form below is a UI only. It is not connected to a backend and does not send messages."
      />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="space-y-4">
          {profile.email ? (
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-2xl border border-[var(--border)] p-4 text-[var(--text)]"
            >
              <SocialIcon kind="email" />
              {profile.email}
            </a>
          ) : (
            <p className="rounded-2xl border border-dashed border-[var(--border)] p-4 text-sm text-[var(--text-soft)]">
              Email is not listed yet. Add it to <code className="font-mono">src/data/portfolio.ts</code>{' '}
              when you want it public.
            </p>
          )}
          {profile.social.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-[var(--border)] p-4 text-[var(--text)]"
            >
              <SocialIcon kind={link.kind} />
              {link.label}
            </a>
          ))}
        </div>
        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6"
          noValidate
        >
          <p className="mb-4 rounded-xl bg-[var(--accent-soft)] px-3 py-2 text-sm text-[var(--text)]">
            This contact form is not connected. Use LinkedIn or email instead.
          </p>
          <label className="block text-sm text-[var(--text-soft)]" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="mt-1 mb-4 w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--text)]"
            autoComplete="name"
          />
          <label className="block text-sm text-[var(--text-soft)]" htmlFor="from-email">
            Your email
          </label>
          <input
            id="from-email"
            name="email"
            type="email"
            className="mt-1 mb-4 w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--text)]"
            autoComplete="email"
          />
          <label className="block text-sm text-[var(--text-soft)]" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-1 mb-4 w-full rounded-xl border border-[var(--border)] bg-transparent px-3 py-2 text-[var(--text)]"
          />
          <button
            type="submit"
            className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--bg)]"
          >
            Submit (not sent)
          </button>
          {submitted ? (
            <p className="mt-3 text-sm text-[var(--text-soft)]" role="status">
              Nothing was sent. Please contact me through LinkedIn until a mail service is wired up.
            </p>
          ) : null}
        </form>
      </div>
    </Section>
  )
}
