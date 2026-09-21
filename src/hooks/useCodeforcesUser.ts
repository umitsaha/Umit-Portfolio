import { useEffect, useState } from 'react'

type CodeforcesUser = {
  handle: string
  rating?: number
  maxRating?: number
  rank?: string
  maxRank?: string
}

type State =
  | { status: 'idle' | 'loading' }
  | { status: 'ready'; user: CodeforcesUser }
  | { status: 'unavailable'; reason: string }

type ApiResponse = {
  status: string
  result?: CodeforcesUser[]
  comment?: string
}

export function useCodeforcesUser(handle: string) {
  const [state, setState] = useState<State>({ status: 'idle' })

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      setState({ status: 'loading' })
      try {
        const response = await fetch(
          `https://codeforces.com/api/user.info?handles=${encodeURIComponent(handle)}`,
          { signal: controller.signal },
        )
        if (!response.ok) {
          throw new Error(`Request failed with ${response.status}`)
        }
        const payload = (await response.json()) as ApiResponse
        const user = payload.result?.[0]
        if (payload.status !== 'OK' || !user) {
          throw new Error(payload.comment ?? 'No user data returned')
        }
        setState({ status: 'ready', user })
      } catch (error) {
        if (controller.signal.aborted) return
        setState({
          status: 'unavailable',
          reason:
            error instanceof Error
              ? error.message
              : 'Live Codeforces data could not be loaded.',
        })
      }
    }

    void load()
    return () => controller.abort()
  }, [handle])

  return state
}
