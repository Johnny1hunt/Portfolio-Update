import { useEffect, useState } from 'react'
import { nav, profile } from '../data/content.js'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-locked', open)
    return () => document.body.classList.remove('is-locked')
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <a href="#top" className="nav-mark" aria-label="Back to top">
          <b>{profile.initials}</b>
          <span>—</span>
          <b>{profile.shortName}</b>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-cta">
          Get in touch
        </a>

        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <i />
          <i />
          <i />
        </button>
      </header>

      <div className={`drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        {nav.map((item, i) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            <small>{String(i + 1).padStart(2, '0')}</small>
            {item.label}
          </a>
        ))}
        <div className="drawer-foot">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span>{profile.location}</span>
        </div>
      </div>
    </>
  )
}
