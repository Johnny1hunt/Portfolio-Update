import { learning } from '../data/content.js'

export default function Learning() {
  return (
    <section className="section learning" id="learning">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow reveal">{learning.eyebrow}</p>
          <h2 className="display reveal" style={{ '--d': '80ms' }}>
            The layer <em>underneath.</em>
          </h2>
          <p className="lede reveal" style={{ '--d': '160ms' }}>
            {learning.lede}
          </p>
        </div>

        <div className="learning-list">
          {learning.items.map((item, i) => (
            <article
              key={item.n}
              className="learning-card reveal"
              style={{ '--d': `${i * 90}ms` }}
            >
              <span className="n">{item.n}</span>
              <h3>{item.title}</h3>
              <p className="provider">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.provider}
                  </a>
                ) : (
                  item.provider
                )}
              </p>
              <p>{item.body}</p>
              <span className="status">{item.status}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
