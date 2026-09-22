import { ExternalLink, Trophy } from 'lucide-react'
import { profile } from '@/data/portfolio'
import type { OnlineJudgeProfile } from '@/types/portfolio'

function ProfileCard({ item }: { item: OnlineJudgeProfile }) {
  return (
    <article
      className={`group rounded-3xl border bg-[var(--bg-elevated)] p-5 transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)] ${item.featured ? 'md:col-span-2' : ''}`}
      style={{ borderTopColor: item.accent }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] text-sm font-semibold"
            style={{ color: item.accent }}
            aria-label={`${item.platform} logo mark`}
          >
            {item.platform.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <h3 className="text-lg font-medium text-[var(--text)]">{item.platform}</h3>
            <p className="text-sm text-[var(--text-soft)]">@{item.username}</p>
          </div>
        </div>
        {item.featured ? <Trophy className="h-5 w-5 text-[var(--gold)]" aria-label="Featured profile" /> : null}
      </div>

      <p className="mt-5 text-sm leading-relaxed text-[var(--text-soft)]">{item.description}</p>

      <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
        {item.rating || (item.id === 'vjudge' && item.problemsSolved) ? (
          <div>
            <dt className="text-[var(--text-soft)]">{item.id === 'vjudge' ? 'Solved' : 'Rating'}</dt>
            <dd className="mt-1 text-[var(--text)]">{item.id === 'vjudge' ? item.problemsSolved : item.rating}</dd>
          </div>
        ) : null}
        {item.maxRating ? (
          <div>
            <dt className="text-[var(--text-soft)]">Max rating</dt>
            <dd className="mt-1 text-[var(--text)]">{item.maxRating}</dd>
          </div>
        ) : null}
        {item.rank ? (
          <div>
            <dt className="text-[var(--text-soft)]">Rank</dt>
            <dd className="mt-1 text-[var(--text)]">{item.rank}</dd>
          </div>
        ) : null}
        {item.problemsSolved && item.id !== 'vjudge' ? (
          <div>
            <dt className="text-[var(--text-soft)]">Problems solved</dt>
            <dd className="mt-1 text-[var(--text)]">{item.problemsSolved}</dd>
          </div>
        ) : null}
      </dl>

      {item.statistic ? <p className="mt-5 border-t border-[var(--border)] pt-4 text-xs text-[var(--text-soft)]">{item.statistic}</p> : null}

      <a
        href={item.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] transition group-hover:gap-3"
      >
        View Profile
        <ExternalLink className="h-4 w-4" />
      </a>
    </article>
  )
}

export function OnlineJudgeProfiles() {
  return (
    <div className="mt-10">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-[var(--accent)] uppercase">Profiles</p>
          <h3 className="mt-2 font-display text-2xl text-[var(--text)]">Online Judge Profiles</h3>
        </div>
        <p className="hidden text-right text-xs text-[var(--text-soft)] sm:block">Public profile snapshots</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {profile.onlineJudgeProfiles.map((item) => (
          <ProfileCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}