import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <a
      href="#top"
      className="fixed right-5 bottom-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text)] shadow-lg transition hover:border-[var(--accent)]"
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4" />
    </a>
  )
}
