import { Section, SectionHeading } from '@/components/ui/Section'
import { profile } from '@/data/portfolio'

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Technical toolkit"
        description="Grouped by how I actually use them, without inflated proficiency bars."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {profile.skills.map((group) => (
          <article
            key={group.title}
            className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6"
          >
            <h3 className="text-[var(--text)]">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <span className="inline-flex rounded-full border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--text-soft)] transition hover:border-[var(--accent)] hover:text-[var(--text)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
