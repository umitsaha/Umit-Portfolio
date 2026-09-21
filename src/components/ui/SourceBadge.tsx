export function SourceBadge({ source }: { source: 'self-reported' | 'live' }) {
  const isLive = source === 'live'
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 font-mono text-[10px] tracking-wide uppercase ${
        isLive
          ? 'bg-[var(--accent-soft)] text-[var(--accent)]'
          : 'border border-[var(--border)] text-[var(--text-soft)]'
      }`}
    >
      {isLive ? 'Live' : 'Self-reported'}
    </span>
  )
}
