import { useLang } from '../i18n'

const AboutSection = () => {
  const { t } = useLang()
  const f = t.about.facts

  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="section__inner">
        <span className="section-label mono">{t.about.label}</span>
        <h2 className="section-title" id="about-title">{t.about.title}</h2>
        <div className="about__grid">
          <div className="about__body">
            <p className="about__lead">{t.about.lead}</p>
            <p className="about__p">{t.about.p2}</p>
            <p className="about__p">{t.about.p3}</p>
            <p className="about__quote mono">{t.about.quote}</p>
          </div>
          <aside className="about__facts" aria-label="Key facts">
            <div className="about__fact"><span className="about__fact-key mono">{f.education}</span><span className="about__fact-val">{f.educationVal}</span></div>
            <div className="about__fact"><span className="about__fact-key mono">{f.focus}</span><span className="about__fact-val">{f.focusVal}</span></div>
            <div className="about__fact"><span className="about__fact-key mono">{f.languages}</span><span className="about__fact-val">{f.languagesVal}</span></div>
            <div className="about__fact"><span className="about__fact-key mono">{f.data}</span><span className="about__fact-val">{f.dataVal}</span></div>
            <div className="about__fact"><span className="about__fact-key mono">{f.infra}</span><span className="about__fact-val">{f.infraVal}</span></div>
            <div className="about__fact"><span className="about__fact-key mono">{f.email}</span><a href="mailto:ivansanmartin987@gmail.com" className="about__fact-link">ivansanmartin987@gmail.com</a></div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
