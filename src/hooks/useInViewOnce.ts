import { useEffect, useState } from 'react'

export function useInViewOnce<T extends HTMLElement>() {
  const [node, setNode] = useState<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!node || visible) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [node, visible])

  return { setNode, visible }
}
