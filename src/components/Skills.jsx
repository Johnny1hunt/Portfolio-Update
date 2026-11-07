import { skills } from '../data/content.js'

export default function Skills() {
  return (
    <section className="section shell" id="skills">
      <div className="section-head">
        <p className="eyebrow reveal">{skills.eyebrow}</p>
        <h2 className="display reveal" style={{ '--d': '80ms' }}>
          What I <em>actually do.</em>
        </h2>
      </div>

      <div className="skills-grid">
        {skills.groups.map((group, i) => (
          <div
            key={group.title}
            className="skill-group reveal"
            style={{ '--d': `${i * 90}ms` }}
          >
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
