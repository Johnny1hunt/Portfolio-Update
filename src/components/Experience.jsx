import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <section className="section shell" id="experience">
      <div className="section-head">
        <p className="eyebrow reveal">{experience.eyebrow}</p>
        <h2 className="display reveal" style={{ '--d': '80ms' }}>
          Where the work <em>has been.</em>
        </h2>
      </div>

      <div className="exp-list">
        {experience.items.map((item, i) => (
          <article
            key={item.role + item.org}
            className="exp-item reveal"
            style={{ '--d': `${i * 70}ms` }}
          >
            <p className="exp-period">{item.period}</p>

            <div className="exp-role">
              <h3>{item.role}</h3>
              <p className="exp-org">{item.org}</p>
              <p className="exp-place">{item.place}</p>
            </div>

            <ul className="exp-points">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
