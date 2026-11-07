import { about, profile } from '../data/content.js'

export default function About() {
  return (
    <section className="section shell" id="about">
      <div className="section-head">
        <p className="eyebrow reveal">{about.eyebrow}</p>
        <h2 className="display reveal" style={{ '--d': '80ms' }}>
          Two sides of the <em>same line.</em>
        </h2>
      </div>

      <div className="about-grid">
        <figure className="about-figure reveal">
          <img src="/img/portrait.jpg" alt={`Portrait of ${profile.name}`} />
          <div className="stamp">
            Akure
            <br />
            NG
          </div>
        </figure>

        <div className="about-body">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="reveal" style={{ '--d': `${i * 70}ms` }}>
              {p}
            </p>
          ))}

          <dl className="about-facts reveal" style={{ '--d': '220ms' }}>
            {about.facts.map((f) => (
              <div key={f.k}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
