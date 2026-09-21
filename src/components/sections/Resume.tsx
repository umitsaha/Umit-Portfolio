import { Download } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { profile } from '@/data/portfolio'

export function Resume() {
  return (
    <Section id="resume">
      <SectionHeading
        eyebrow="Resume"
        title="Curriculum vitae"
        description="Place your PDF at public/resume.pdf. Until then, the viewer shows a placeholder."
      />
      <div className="mb-5">
        <ButtonLink href={profile.resumePath} download>
          Download CV
          <Download className="h-4 w-4" />
        </ButtonLink>
      </div>
      <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)]">
        <object
          data={profile.resumePath}
          type="application/pdf"
          className="h-[70vh] w-full"
          aria-label="Resume PDF viewer"
        >
          <div className="p-8 text-[var(--text-soft)]">
            Resume PDF is not available yet. Add a file at{' '}
            <code className="font-mono text-[var(--text)]">public/resume.pdf</code> to enable the
            embedded viewer and download button.
          </div>
        </object>
      </div>
    </Section>
  )
}
