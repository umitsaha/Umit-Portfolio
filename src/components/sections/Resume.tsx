import { Download, ExternalLink } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { profile } from '@/data/portfolio'

export function Resume() {
  return (
    <Section id="resume">
      <SectionHeading
        eyebrow="Resume"
        title="Curriculum vitae"
        description="Read or download the latest version of my curriculum vitae."
      />
      <div className="mb-5 flex flex-wrap gap-3">
        <ButtonLink href={profile.resumePath} target="_blank" rel="noopener noreferrer" variant="secondary">
          View Resume
          <ExternalLink className="h-4 w-4" />
        </ButtonLink>
        <ButtonLink href={profile.resumePath} download>
          Download Resume
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
            PDF preview is not supported on this device. Use the View Resume or Download Resume buttons above.
          </div>
        </object>
      </div>
    </Section>
  )
}
