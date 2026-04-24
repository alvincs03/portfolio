import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

export function useStaggeredReveal(count, threshold = 0.1) {
  const ref = useRef(null)
  const [visibleItems, setVisibleItems] = useState(new Array(count).fill(false))

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          for (let i = 0; i < count; i++) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const next = [...prev]
                next[i] = true
                return next
              })
            }, i * 80)
          }
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [count, threshold])

  return [ref, visibleItems]
}
