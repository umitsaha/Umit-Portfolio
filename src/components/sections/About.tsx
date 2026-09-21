import { Section, SectionHeading } from '@/components/ui/Section'
import { profile } from '@/data/portfolio'

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="Engineering, algorithms, and research"
        description="A concise professional background for recruiters and graduate admissions."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {profile.about.map((paragraph) => (
          <p
            key={paragraph}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 leading-relaxed text-[var(--text-soft)]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  )
}
