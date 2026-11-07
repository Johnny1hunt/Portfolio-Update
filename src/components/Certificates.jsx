import { certificates } from '../data/content.js'

export default function Certificates() {
  return (
    <section className="section certs" id="certificates">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow reveal">{certificates.eyebrow}</p>
          <h2 className="display reveal" style={{ '--d': '80ms' }}>
            Paper, where it <em>exists.</em>
          </h2>
        </div>

        <div className="cert-grid">
          {certificates.items.map((cert, i) => (
            <article
              key={cert.title}
              className="cert reveal"
              style={{ '--d': `${i * 90}ms` }}
            >
              <span className="issuer">{cert.issuer}</span>
              <h3>{cert.title}</h3>
              <p className="date">{cert.date}</p>
              <p className="note">{cert.note}</p>
            </article>
          ))}
        </div>

        <p className="cert-pending reveal">{certificates.pending}</p>
      </div>
    </section>
  )
}
