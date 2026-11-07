import { useEffect } from 'react'

/**
 * Adds `.in` to every `.reveal` element once it scrolls into view.
 * Runs once on mount; new nodes added later are picked up by the
 * MutationObserver so nothing is left invisible.
 */
export default function useReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    )

    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el))
    }

    observeAll()

    const mo = new MutationObserver(observeAll)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
