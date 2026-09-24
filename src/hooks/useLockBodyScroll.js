import { useEffect } from 'react'

/** Prevents the page from scrolling while `locked` is true (e.g. mobile menu open). */
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [locked])
}
