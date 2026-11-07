import { useEffect } from 'react'
import useReveal from './hooks/useReveal.js'

import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Learning from './components/Learning.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Work from './components/Work.jsx'
import Events from './components/Events.jsx'
import Certificates from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useReveal()

  // Optional smooth scrolling. Fails silently if Lenis is unavailable
  // or the visitor prefers reduced motion.
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    let lenis
    let raf
    let cancelled = false

    import('lenis')
      .then(({ default: Lenis }) => {
        if (cancelled) return
        lenis = new Lenis({ duration: 1.05, smoothWheel: true })
        const loop = (time) => {
          lenis.raf(time)
          raf = requestAnimationFrame(loop)
        }
        raf = requestAnimationFrame(loop)
      })
      .catch(() => {
        /* native scrolling is fine */
      })

    return () => {
      cancelled = true
      if (raf) cancelAnimationFrame(raf)
      if (lenis) lenis.destroy()
    }
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Learning />
        <Skills />
        <Experience />
        <Work />
        <Events />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
