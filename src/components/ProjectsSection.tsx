import { useState } from 'react'
import { useLang } from '../i18n'

interface Project {
  id: string
  name: string
  year: string
  impact: string
  description: string
  stack: string[]
  repo: string
  live?: string
  featured?: boolean
}

const PROJECTS: Project[] = [
  {
    id: '1', name: 'ivsm-link', year: '2025',
    impact: 'A link-shortening service — turn long URLs into short, trackable ones. Deployed live and publicly accessible.',
    description: 'URL shortening via a Python REST API, deployed on Kubernetes with Jenkins CI/CD. Frontend in React, storage in MongoDB.',
    stack: ['Python', 'React', 'MongoDB', 'Kubernetes', 'Jenkins'],
    repo: 'https://github.com/ivansanmartin/ivsm-link',
    live: 'https://ivsm.link',
    featured: true,
  },
  {
    id: '2', name: 'url-shortener', year: '2025',
    impact: 'The backend engine behind ivsm-link. Short URLs expire after 5 days and every click is tracked with metadata.',
    description: 'Python REST API. MongoDB for persistence, click tracking per URL, metadata endpoints. Containerised on Kubernetes via Jenkins.',
    stack: ['Python', 'MongoDB', 'Kubernetes', 'Jenkins'],
    repo: 'https://github.com/ivansanmartin/url_repository-shortener',
    featured: true,
  },
  {
    id: '3', name: 'api-key-manager', year: '2025',
    impact: "A security gate for APIs — create, verify, and revoke API keys. Redis makes key verification fast without hitting the database every time.",
    description: 'Full API key lifecycle management. MongoDB for persistence, Redis caches verification results. Kubernetes deployment via Jenkins.',
    stack: ['Python', 'MongoDB', 'Redis', 'Kubernetes', 'Jenkins'],
    repo: 'https://github.com/ivansanmartin/api-key-manager',
    featured: true,
  },
  {
    id: '4', name: 'flash-cache', year: '2024',
    impact: 'Demo tool showing how Redis caching speeds up API responses. Measure the difference in real time.',
    description: 'Express/Node.js backend proxies API requests; Redis caches responses. React frontend shows latency comparison.',
    stack: ['Node.js', 'Express', 'React', 'Redis', 'Docker'],
    repo: 'https://github.com/ivansanmartin/flash-cache',
  },
  {
    id: '5', name: 'ivsm-ecommerce', year: '2024',
    impact: 'Long-term e-commerce platform used to practice integrating new technologies.',
    description: 'Ongoing exploratory project. Stack evolves as new tools are learned.',
    stack: [],
    repo: 'https://github.com/ivansanmartin/ivsm-ecommerce-info',
  },
  {
    id: '6', name: 'Binary Decimal App', year: '2023',
    impact: 'Full-stack binary↔decimal converter. First project using Auth0 for authentication.',
    description: 'MERN stack application consuming the Binary Decimal API.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    repo: 'https://github.com/ivansanmartin/binary-decimal-app',
  },
  {
    id: '7', name: 'Binary Decimal API', year: '2023',
    impact: 'A simple REST API for binary↔decimal conversions, designed as a practice target for junior developers.',
    description: 'Node.js/Express REST API. Intentionally minimal to serve as a learning resource.',
    stack: ['Node.js', 'Express'],
    repo: 'https://ivansanmartin.vercel.app/project',
  },
  {
    id: '8', name: 'ivsmPanel', year: '2024',
    impact: 'Responsive admin dashboard layout — drop it into any project that needs a control panel.',
    description: 'Reusable admin panel template. Vanilla JS, HTML, CSS with Bootstrap. Fully responsive.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    repo: 'https://github.com/ivansanmartin/ivsm-panel',
  },
  {
    id: '9', name: 'Sport Gym App', year: '2023',
    impact: 'Gym management app — track clients and training routines. Deployed on Fly.io.',
    description: 'Full-stack with EJS server-side rendering. Node.js/Express backend, MySQL for relational data.',
    stack: ['Node.js', 'Express', 'MySQL', 'EJS'],
    repo: 'https://github.com/ivansanmartin/sport-gym-app',
  },
]

const ExtIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const FeaturedCard = ({ p, t }: { p: Project; t: any }) => (
  <article className="proj-card">
    <div className="proj-card__badge mono">{t.projects.featured}</div>
    <header className="proj-card__header">
      <h3 className="proj-card__name">{p.name}</h3>
      <span className="proj-card__year mono">{p.year}</span>
    </header>
    <p className="proj-card__impact">{p.impact}</p>
    <p className="proj-card__tech-desc">{p.description}</p>
    {p.stack.length > 0 && (
      <ul className="proj-card__stack" aria-label="Tech stack">
        {p.stack.map(s => <li key={s} className="proj-card__tag mono">{s}</li>)}
      </ul>
    )}
    <footer className="proj-card__footer">
      <a href={p.repo} target="_blank" rel="noopener noreferrer" className="proj-card__link">
        {t.projects.repo} <ExtIcon />
      </a>
      {p.live && (
        <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-card__link proj-card__link--live">
          {t.projects.live} <ExtIcon />
        </a>
      )}
    </footer>
  </article>
)

const ListRow = ({ p }: { p: Project }) => (
  <li className="proj-row">
    <span className="proj-row__arrow" aria-hidden="true">→</span>
    <a href={p.repo} target="_blank" rel="noopener noreferrer" className="proj-row__name mono">{p.name}</a>
    {p.stack.length > 0 && (
      <span className="proj-row__stack mono">{p.stack.slice(0, 3).join(' · ')}</span>
    )}
    <span className="proj-row__year mono">{p.year}</span>
    {p.live && (
      <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-row__live" aria-label={`Visit ${p.name} live`}>
        <ExtIcon />
      </a>
    )}
  </li>
)

const ProjectsSection = () => {
  const { t } = useLang()
  const [showAll, setShowAll] = useState(false)

  const featured = PROJECTS.filter(p => p.featured)
  const rest = PROJECTS.filter(p => !p.featured)
  const visibleRest = showAll ? rest : rest.slice(0, 4)

  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="section__inner">
        <span className="section-label mono">{t.projects.label}</span>
        <h2 className="section-title" id="projects-title">{t.projects.title}</h2>
        <p className="section-subtitle">{t.projects.subtitle}</p>

        <div className="proj-featured">
          {featured.map(p => <FeaturedCard key={p.id} p={p} t={t} />)}
        </div>

        <h3 className="proj-other-title mono">{t.projects.otherTitle}</h3>
        <ul className="proj-list">
          {visibleRest.map(p => <ListRow key={p.id} p={p} />)}
        </ul>

        {rest.length > 4 && (
          <button className="btn btn--ghost proj-toggle" onClick={() => setShowAll(s => !s)}>
            {showAll ? t.projects.showLess : t.projects.showAll}
          </button>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection
