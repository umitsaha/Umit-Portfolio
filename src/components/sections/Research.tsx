import { ExternalLink } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/Section'
import { profile } from '@/data/portfolio'

export function Research() {
  const paper = profile.publication

  return (
    <Section id="research">
      <SectionHeading
        eyebrow="Research & publications"
        title="Peer-reviewed work"
        description="Publication metadata is taken from the public IEEE / arXiv records for this paper."
      />
      <article className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 sm:p-8">
        <p className="font-mono text-xs tracking-widest text-[var(--accent)] uppercase">
          {paper.venue} · {paper.year}
        </p>
        <h3 className="mt-3 max-w-3xl font-display text-2xl text-[var(--text)] sm:text-3xl">
          {paper.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-[var(--text-soft)]">{paper.overview}</p>
        <p className="mt-4 text-sm text-[var(--text-soft)]">
          <span className="text-[var(--text)]">Authors: </span>
          {paper.authors.join(', ')}
        </p>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {paper.documentId ? (
            <div>
              <dt className="text-xs tracking-wide text-[var(--text-soft)] uppercase">
                IEEE Xplore document ID
              </dt>
              <dd className="mt-1 font-mono text-sm">{paper.documentId}</dd>
            </div>
          ) : null}
          {paper.doi ? (
            <div>
              <dt className="text-xs tracking-wide text-[var(--text-soft)] uppercase">DOI</dt>
              <dd className="mt-1 font-mono text-sm">{paper.doi}</dd>
            </div>
          ) : null}
        </dl>
        <div className="mt-6 flex flex-wrap gap-3">
          {paper.ieeeXploreUrl ? (
            <a
              href={paper.ieeeXploreUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm text-[var(--bg)]"
            >
              IEEE Xplore
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}
          {paper.arxivUrl ? (
            <a
              href={paper.arxivUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--text)]"
            >
              arXiv (open access)
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </article>
    </Section>
  )
}
