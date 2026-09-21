import { Section, SectionHeading } from '@/components/ui/Section'
import { profile } from '@/data/portfolio'

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Academic timeline" />
      <ol className="relative space-y-6 border-l border-[var(--border)] pl-6">
        {profile.education.map((item) => (
          <li key={item.id}>
            <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
            <h3 className="text-lg text-[var(--text)]">{item.credential}</h3>
            <p className="text-[var(--text-soft)]">{item.school}</p>
            <p className="mt-1 text-sm text-[var(--text-soft)]">
              {item.detail} · {item.period}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
