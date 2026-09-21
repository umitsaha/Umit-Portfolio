import { profile } from '@/data/portfolio'
import { SocialIcon } from '@/components/ui/SocialIcon'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-[var(--text-soft)]">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm">
          {profile.nav.slice(0, 5).map((item) => (
            <a key={item.href} href={item.href} className="text-[var(--text-soft)] hover:text-[var(--text)]">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-3">
          {profile.social.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-soft)] hover:text-[var(--text)]"
              aria-label={link.label}
            >
              <SocialIcon kind={link.kind} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
