import { useEffect, useState } from 'react'

export function useAnimatedNumber(target: number, enabled: boolean, duration = 1200) {
  const [value, setValue] = useState(enabled ? 0 : target)

  useEffect(() => {
    if (!enabled) {
      setValue(target)
      return
    }

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(target * eased))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, enabled, duration])

  return value
}
