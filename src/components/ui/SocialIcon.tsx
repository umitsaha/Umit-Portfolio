import { Mail } from 'lucide-react'
import type { SocialLink } from '@/types/portfolio'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.18h4.56V24H.22zM8.34 8.18h4.37v2.16h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v8.99h-4.56v-8c0-1.9-.03-4.35-2.65-4.35-2.65 0-3.06 2.07-3.06 4.2V24H8.34z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="currentColor">
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-6a4.6 4.6 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.2s1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.7 4.3 18.7 4.6 18.7 4.6a4.3 4.3 0 0 1 .1 3.2 4.6 4.6 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
    </svg>
  )
}

export function SocialIcon({ kind }: { kind: SocialLink['kind'] }) {
  if (kind === 'linkedin') return <LinkedInIcon />
  if (kind === 'github') return <GitHubIcon />
  if (kind === 'email') return <Mail className="h-4 w-4" aria-hidden="true" />
  return (
    <span className="font-mono text-[10px] tracking-wide" aria-hidden="true">
      CF
    </span>
  )
}
