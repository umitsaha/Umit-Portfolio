import { useMemo, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { Section, SectionHeading } from '@/components/ui/Section'
import { profile } from '@/data/portfolio'
import type { Project } from '@/types/portfolio'

const filters = ['All', 'Research', 'Engineering'] as const

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const [active, setActive] = useState<Project | null>(null)

  const projects = useMemo(
    () =>
      profile.projects.filter((project) => filter === 'All' || project.category === filter),
    [filter],
  )

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="Only verified work is listed. Add future projects in src/data/portfolio.ts."
      />
      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={filter === item}
            onClick={() => setFilter(item)}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              filter === item
                ? 'bg-[var(--accent)] text-[var(--bg)]'
                : 'border border-[var(--border)] text-[var(--text-soft)] hover:text-[var(--text)]'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      {projects.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-[var(--border)] p-8 text-[var(--text-soft)]">
          No projects in this category yet. Engineering projects can be added later without
          changing the layout.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6"
            >
              <p className="font-mono text-xs tracking-widest text-[var(--accent)] uppercase">
                {project.category}
              </p>
              <h3 className="mt-2 text-xl text-[var(--text)]">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-soft)]">
                {project.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-soft)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="mt-5 self-start text-sm text-[var(--accent)]"
                onClick={() => setActive(project)}
              >
                View details
              </button>
            </article>
          ))}
        </div>
      )}

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4"
          role="presentation"
          onClick={() => setActive(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 id="project-dialog-title" className="text-xl text-[var(--text)]">
                {active.title}
              </h3>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)]"
                aria-label="Close project details"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--text-soft)]">
              {active.details.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              {active.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/35 px-3 py-1.5 text-sm text-[var(--accent)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  )
}
