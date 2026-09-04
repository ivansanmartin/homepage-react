import { useLang } from '../i18n'

const CATEGORIES = [
  { key: 'Languages', skills: ['Python', 'C#', 'JavaScript', 'TypeScript', 'SQL', 'Java'] },
  { key: 'Backend', skills: ['.NET / ASP.NET Core', 'Node.js', 'Express', 'FastAPI', 'REST APIs'] },
  { key: 'Frontend', skills: ['Vue.js', 'React', 'HTML', 'CSS'] },
  { key: 'Databases', skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
  { key: 'Infrastructure', skills: ['Docker', 'Kubernetes', 'Azure DevOps', 'Azure Functions', 'Jenkins', 'Nginx', 'Linux'] },
  { key: 'Networking', skills: ['TCP/IP', 'DNS', 'DHCP', 'LAN/WAN', 'OSI Model'] },
  { key: 'Tools', skills: ['Git', 'GitHub', 'CI/CD', 'ERP Integrations', 'REST API Design'] },
]

const SkillsSection = () => {
  const { t } = useLang()

  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <div className="section__inner">
        <span className="section-label mono">{t.skills.label}</span>
        <h2 className="section-title" id="skills-title">{t.skills.title}</h2>
        <p className="section-subtitle">{t.skills.subtitle}</p>
        <div className="skills-table">
          {CATEGORIES.map(cat => (
            <div className="skills-row" key={cat.key}>
              <span className="skills-row__key mono">{cat.key}</span>
              <ul className="skills-row__pills">
                {cat.skills.map(s => <li key={s} className="skills-pill">{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
