import { Section, SectionHeading } from '@/components/ui/Section'
import { profile } from '@/data/portfolio'
import { useAnimatedNumber } from '@/hooks/useAnimatedNumber'
import { useInViewOnce } from '@/hooks/useInViewOnce'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { OnlineJudgeProfiles } from '@/components/sections/OnlineJudgeProfiles'
import { ExternalLink } from 'lucide-react'

function Stat({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5">
      <p className="mb-3 text-sm text-[var(--text-soft)]">{label}</p>
      <p className="font-display text-3xl text-[var(--text)]">{value}</p>
    </article>
  )
}

export function CompetitiveProgramming() {
  const reduced = usePrefersReducedMotion()
  const { setNode, visible } = useInViewOnce<HTMLDivElement>()
  const count = useAnimatedNumber(4000, visible && !reduced)

  return (
    <Section id="competitive-programming">
      <SectionHeading
        eyebrow="Competitive programming"
        title="Contest record and platforms"
        description="A snapshot of my competitive programming practice and verified online judge profiles."
      />
      <div ref={setNode} className="max-w-xs">
        <Stat
          label="Problems solved"
          value={`${count}+`}
        />
      </div>
      <p className="mt-3 text-sm text-[var(--text-soft)]">{profile.platforms.problemsSolvedNote}</p>

      <OnlineJudgeProfiles />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {profile.achievements.map((item) => (
          <article key={item.id} className="rounded-2xl border border-[var(--border)] p-5">
            <h3 className="text-[var(--text)]">{item.title}</h3>
            <p className="mt-2 text-sm text-[var(--text-soft)]">{item.detail}</p>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] transition hover:gap-2.5"
              >
                Read source
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
          </article>
        ))}
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border border-[var(--border)]">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Selected contest rankings</caption>
          <thead className="bg-[var(--bg-elevated)] text-[var(--text-soft)]">
            <tr>
              <th className="px-4 py-3 font-medium">Contest</th>
              <th className="px-4 py-3 font-medium">Year</th>
              <th className="px-4 py-3 font-medium">Result</th>
            </tr>
          </thead>
          <tbody>
            {profile.contests.map((row) => (
              <tr key={row.id} className="border-t border-[var(--border)]">
                <td className="px-4 py-3 text-[var(--text)]">
                  {row.href ? (
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-[var(--accent)]/50 underline-offset-4 transition hover:text-[var(--accent)]"
                    >
                      {row.contest}
                    </a>
                  ) : (
                    row.contest
                  )}
                </td>
                <td className="px-4 py-3 text-[var(--text-soft)]">{row.year}</td>
                <td className="px-4 py-3 text-[var(--text)]">{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}
