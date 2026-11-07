import { hero, profile } from '../data/content.js'

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M4 12L12 4M12 4H5.5M12 4v6.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-grid">
        <div>
          <p className="eyebrow">
            {profile.name} — {profile.location}
          </p>

          <h1 className="hero-title">
            {hero.lines.map((line, i) => (
              <span key={line}>
                <i>{i === hero.italicLine ? <em>{line}</em> : line}</i>
              </span>
            ))}
          </h1>

          <p className="hero-lede">{hero.lede}</p>

          <div className="hero-actions">
            <a href="#work" className="btn btn--solid">
              See the work <Arrow />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>
        </div>

        <figure className="hero-figure">
          <img src="/img/hero.jpg" alt={`${profile.name}, photographed against a warm wall`} />
          <figcaption>{profile.availability}</figcaption>
        </figure>
      </div>

      <dl className="hero-meta">
        {hero.meta.map((m) => (
          <div key={m.label}>
            <dt>{m.label}</dt>
            <dd>{m.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
