import { Section, SectionHeading } from '@/components/ui/Section'
import { SourceBadge } from '@/components/ui/SourceBadge'
import { profile } from '@/data/portfolio'
import { useAnimatedNumber } from '@/hooks/useAnimatedNumber'
import { useCodeforcesUser } from '@/hooks/useCodeforcesUser'
import { useInViewOnce } from '@/hooks/useInViewOnce'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

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
  const live = useCodeforcesUser(profile.platforms.codeforcesHandle)
  const count = useAnimatedNumber(3000, visible && !reduced)

  return (
    <Section id="competitive-programming">
      <SectionHeading
        eyebrow="Competitive programming"
        title="Contest record and platforms"
        description="Self-reported figures come from the profile data file. Live figures are fetched from the public Codeforces API when the browser allows it."
      />
      <div ref={setNode} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat
          label="Problems solved"
          value={`${count}+`}
          source="self-reported"
        />
        <Stat
          label="Codeforces max rating"
          value={String(profile.platforms.codeforcesMaxRating)}
          source="self-reported"
        />
        <Stat
          label="Codeforces rank"
          value={profile.platforms.codeforcesRank}
          source="self-reported"
        />
        <Stat
          label="CodeChef"
          value={`${profile.platforms.codechefStars}★`}
          source="self-reported"
        />
      </div>
      <p className="mt-3 text-sm text-[var(--text-soft)]">{profile.platforms.problemsSolvedNote}</p>

      <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg text-[var(--text)]">Codeforces live lookup</h3>
          <a
            href={`https://codeforces.com/profile/${profile.platforms.codeforcesHandle}`}
            className="text-sm text-[var(--accent)]"
            target="_blank"
            rel="noreferrer"
          >
            Open profile
          </a>
        </div>
        {live.status === 'loading' || live.status === 'idle' ? (
          <p className="mt-3 text-sm text-[var(--text-soft)]">Loading live statistics…</p>
        ) : null}
        {live.status === 'ready' ? (
          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="text-sm text-[var(--text-soft)]">Handle</dt>
              <dd className="text-[var(--text)]">{live.user.handle}</dd>
            </div>
            <div>
              <dt className="text-sm text-[var(--text-soft)]">Current rating</dt>
              <dd className="text-[var(--text)]">{live.user.rating ?? 'Unavailable'}</dd>
            </div>
            <div>
              <dt className="text-sm text-[var(--text-soft)]">Max rating (API)</dt>
              <dd className="text-[var(--text)]">{live.user.maxRating ?? 'Unavailable'}</dd>
            </div>
          </dl>
        ) : null}
        {live.status === 'unavailable' ? (
          <p className="mt-3 text-sm text-[var(--text-soft)]">
            Live statistics are currently unavailable from this browser (often due to API CORS
            limits). The self-reported Codeforces figures above remain the source of truth on this
            page.
          </p>
        ) : null}
      </div>

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
                <td className="px-4 py-3 text-[var(--text)]">{row.contest}</td>
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
