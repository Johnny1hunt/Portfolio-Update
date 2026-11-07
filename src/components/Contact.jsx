import { contact } from '../data/content.js'

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M4 12L12 4M12 4H5.5M12 4v6.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="shell">
        <p className="eyebrow reveal">{contact.eyebrow}</p>

        <h2 className="reveal" style={{ '--d': '80ms' }}>
          Let&rsquo;s build something worth <em>reading closely.</em>
        </h2>

        <p className="lede reveal" style={{ '--d': '160ms' }}>
          {contact.lede}
        </p>

        <div className="contact-links">
          {contact.links.map((link, i) => (
            <a
              key={link.label}
              className="contact-link reveal"
              style={{ '--d': `${i * 70}ms` }}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="k">{link.label}</span>
              <span className="v">{link.value}</span>
              <Arrow />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
