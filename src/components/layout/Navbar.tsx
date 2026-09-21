import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '@/data/portfolio'
import { ThemeToggle } from '@/components/layout/ThemeToggle'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-200 ${
        scrolled
          ? 'border-[var(--border)] bg-[color-mix(in_oklab,var(--bg)_82%,transparent)] backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-xl tracking-tight text-[var(--text)] transition hover:text-[var(--accent)]"
        >
          Umit Saha
        </a>
        <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
          {profile.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-[var(--text-soft)] transition hover:bg-[color-mix(in_oklab,var(--bg-elevated)_90%,transparent)] hover:text-[var(--text)]"
            >
              {item.label}
            </a>
          ))}
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--bg-elevated)_90%,transparent)] transition hover:border-[var(--accent)]"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-menu"
          className="border-t border-[var(--border)] bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] px-5 py-4 backdrop-blur-lg lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {profile.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-1 text-[var(--text)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
