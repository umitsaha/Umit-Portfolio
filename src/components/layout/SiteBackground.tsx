export function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />
      <div
        className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full blur-3xl motion-safe:animate-pulse"
        style={{ background: 'var(--glow)' }}
      />
      <div
        className="absolute right-[-8rem] bottom-24 h-72 w-72 rounded-full blur-3xl opacity-70"
        style={{ background: 'color-mix(in oklab, var(--gold) 35%, transparent)' }}
      />
    </div>
  )
}
