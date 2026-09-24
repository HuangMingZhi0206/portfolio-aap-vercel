import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently "active" based on scroll position.
 * A section becomes active once its top passes a marker placed `offset`
 * of the viewport height from the top. `ids` should be a stable array.
 */
export function useActiveSection(ids, offset = 0.4) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const marker = window.scrollY + window.innerHeight * offset
      let current = ids[0]

      for (const id of ids) {
        const element = document.getElementById(id)
        if (element && element.offsetTop <= marker) current = id
      }

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) current = ids[ids.length - 1]

      setActive(current)
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ids, offset])

  return active
}
