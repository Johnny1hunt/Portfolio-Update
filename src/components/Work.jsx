import { work } from '../data/content.js'

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M4 12L12 4M12 4H5.5M12 4v6.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Work() {
  return (
    <section className="section work" id="work">
      <div className="shell">
        <div className="section-head">
          <p className="eyebrow reveal">{work.eyebrow}</p>
          <h2 className="display reveal" style={{ '--d': '80ms' }}>
            Five builds, five <em>different problems.</em>
          </h2>
          <p className="lede reveal" style={{ '--d': '160ms' }}>
            {work.lede}
          </p>
        </div>

        <div className="work-list">
          {work.projects.map((project, i) => (
            <article
              key={project.title}
              className="project reveal"
              style={{ '--d': `${(i % 2) * 80}ms` }}
            >
              <a
                className="project-media"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} in a new tab`}
              >
                <img src={project.image} alt={`${project.title} — hero section`} loading="lazy" />
                <span className="view">
                  <Arrow />
                </span>
              </a>

              <div className="project-body">
                <div className="project-top">
                  <span>{project.n}</span>
                  <span
                    className={`project-kind${
                      project.kind === 'Front-end recreation' ? ' recreation' : ''
                    }`}
                  >
                    {project.kind} · {project.year}
                  </span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.blurb}</p>

                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit live site <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
