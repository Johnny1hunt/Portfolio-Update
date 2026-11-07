import { events } from '../data/content.js'

export default function Events() {
  const { featured, others } = events

  return (
    <section className="section shell" id="events">
      <div className="section-head">
        <p className="eyebrow reveal">{events.eyebrow}</p>
        <h2 className="display reveal" style={{ '--d': '80ms' }}>
          Rooms I helped <em>fill.</em>
        </h2>
      </div>

      <article className="event-feature reveal">
        <div>
          <span className="tag">{featured.tag}</span>
          <h3>
            {featured.title}
            {featured.subtitle && (
              <span className="event-subtitle">{featured.subtitle}</span>
            )}
          </h3>
          {featured.theme && (
            <p className="event-theme">
              <span>Theme</span> {featured.theme}
            </p>
          )}
          <p>{featured.body}</p>
          <p className="event-note">{featured.note}</p>
        </div>

        <div className="event-side">
          <p className="role">
            Role
            <b>{featured.role}</b>
          </p>
          <p className="role">
            When
            <b>{featured.date}</b>
          </p>
          <p className="role">
            Where
            <b>{featured.venue}</b>
          </p>
        </div>
      </article>

      <div className="event-others">
        {others.map((item, i) => (
          <article
            key={item.title}
            className="event-other reveal"
            style={{ '--d': `${i * 80}ms` }}
          >
            <span className="role">{item.role}</span>
            <h4>{item.title}</h4>
            {item.org && <p className="event-org">{item.org}</p>}
            {item.date && (
              <p className="event-when">
                {item.date}
                {item.venue ? ` · ${item.venue}` : ''}
              </p>
            )}
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
