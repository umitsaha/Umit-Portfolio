import { useState } from 'react'
import { Section, SectionHeading } from '@/components/ui/Section'
import { profile } from '@/data/portfolio'

export function Experience() {
  const [activeId, setActiveId] = useState(profile.experience[0]?.id)

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Professional timeline"
        description="Select a role to read the details. No internal product or confidential project names are listed."
      />
      <div className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
        <ol className="relative border-l border-[var(--border)] pl-6">
          {profile.experience.map((item) => {
            const selected = item.id === activeId
            return (
              <li key={item.id} className="mb-6 last:mb-0">
                <span
                  className={`absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full ${
                    selected ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`w-full rounded-xl px-3 py-2 text-left transition ${
                    selected
                      ? 'bg-[var(--accent-soft)] text-[var(--text)]'
                      : 'text-[var(--text-soft)] hover:text-[var(--text)]'
                  }`}
                  aria-pressed={selected}
                >
                  <span className="block font-medium">{item.role}</span>
                  <span className="block text-sm">
                    {item.organization} · {item.start} – {item.end}
                  </span>
                </button>
              </li>
            )
          })}
        </ol>
        {profile.experience.map((item) =>
          item.id === activeId ? (
            <article
              key={item.id}
              className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 sm:p-8"
            >
              <h3 className="text-xl text-[var(--text)]">{item.role}</h3>
              <p className="mt-1 text-[var(--text-soft)]">
                {item.organization} · {item.start} – {item.end}
              </p>
              {item.highlight ? (
                <p className="mt-4 rounded-2xl border border-[var(--border)] px-4 py-3 text-sm text-[var(--text)]">
                  {item.highlight}
                </p>
              ) : null}
              <ul className="mt-5 list-disc space-y-2 pl-5 text-[var(--text-soft)]">
                {item.summary.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ) : null,
        )}
      </div>
    </Section>
  )
}
