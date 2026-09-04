import { TypeAnimation } from 'react-type-animation'
import { useLang } from '../i18n'

const HeroSection = () => {
  const { t } = useLang()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home" aria-label="Introduction">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__eyebrow mono">{t.hero.eyebrow}</p>
        <h1 className="hero__name">
          Iván<br />
          <span>San Martín</span>
        </h1>
        <div className="hero__animated mono" aria-live="polite">
          <span className="hero__cursor-inline" aria-hidden="true">&gt;</span>{' '}
          <TypeAnimation
            key={t.hero.animated[0] as string}
            sequence={t.hero.animated as (string | number)[]}
            speed={55}
            repeat={Infinity}
          />
        </div>
        <p className="hero__summary">{t.hero.summary}</p>
        <div className="hero__actions">
          <button className="btn btn--primary" onClick={() => scrollTo('contact')}>
            {t.hero.cta_contact}
          </button>
          <a className="btn btn--outline" href="/files/cv.pdf" target="_blank" rel="noopener noreferrer">
            {t.hero.cta_cv}
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
