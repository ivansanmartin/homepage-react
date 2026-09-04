import { useLang } from '../i18n'

const ExperienceSection = () => {
  const { t } = useLang()

  return (
    <section className="section experience" id="experience" aria-labelledby="exp-title">
      <div className="section__inner">
        <span className="section-label mono">{t.experience.label}</span>
        <h2 className="section-title" id="exp-title">{t.experience.title}</h2>
        <div className="exp-card">
          <div className="exp-card__header">
            <div>
              <h3 className="exp-card__role">Software Analyst</h3>
              <p className="exp-card__company">Unilink Corp</p>
            </div>
            <span className="exp-card__period mono">{t.experience.current}</span>
          </div>
          <ul className="exp-card__list">
            {t.experience.highlights.map((h, i) => (
              <li key={i} className="exp-card__item">{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
