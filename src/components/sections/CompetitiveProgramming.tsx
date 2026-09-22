import { Section, SectionHeading } from '@/components/ui/Section'
import { SourceBadge } from '@/components/ui/SourceBadge'
import { profile } from '@/data/portfolio'
import { useAnimatedNumber } from '@/hooks/useAnimatedNumber'
import { useInViewOnce } from '@/hooks/useInViewOnce'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { OnlineJudgeProfiles } from '@/components/sections/OnlineJudgeProfiles'

function Stat({
  label,
  value,
  source,
}: {
  label: string
  value: string
  source: 'self-reported' | 'live'
}) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm text-[var(--text-soft)]">{label}</p>
        <SourceBadge source={source} />
      </div>
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
          source="self-reported"
        />
      </div>
      <p className="mt-3 text-sm text-[var(--text-soft)]">{profile.platforms.problemsSolvedNote}</p>

      <OnlineJudgeProfiles />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {profile.achievements.map((item) => (
          <article key={item.id} className="rounded-2xl border border-[var(--border)] p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[var(--text)]">{item.title}</h3>
              <SourceBadge source={item.source} />
            </div>
            <p className="mt-2 text-sm text-[var(--text-soft)]">{item.detail}</p>
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
