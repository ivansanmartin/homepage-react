import { useState, useEffect } from 'react'
import { useLang } from '../i18n'

const SECTION_IDS = ['home', 'about', 'projects', 'experience', 'skills', 'contact'] as const
type SectionId = typeof SECTION_IDS[number]

const NAV_KEYS: SectionId[] = ['home', 'about', 'projects', 'experience', 'skills', 'contact']

const Sidebar = () => {
  const { lang, t, setLang } = useLang()
  const [active, setActive] = useState<SectionId>('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(SECTION_IDS[i])
          return
        }
      }
      setActive('home')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLabels: Record<SectionId, string> = {
    home: t.nav.home,
    about: t.nav.about,
    projects: t.nav.projects,
    experience: t.nav.experience,
    skills: t.nav.skills,
    contact: t.nav.contact,
  }

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sidebar">
        <button className="sidebar__brand" onClick={() => scrollTo('home')}>
          <span className="sidebar__brand-name">Iván San Martín</span>
          <span className="sidebar__brand-role">Software Analyst</span>
        </button>

        <nav className="sidebar__nav" aria-label="Site navigation">
          {NAV_KEYS.map(key => (
            <button
              key={key}
              className={`sidebar__item${active === key ? ' sidebar__item--active' : ''}`}
              onClick={() => scrollTo(key)}
              aria-current={active === key ? 'page' : undefined}
            >
              <span className="sidebar__arrow" aria-hidden="true">›</span>
              <span className="sidebar__label">{navLabels[key]}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar__divider" aria-hidden="true" />

        <div className="sidebar__links">
          <a href="https://github.com/ivansanmartin" target="_blank" rel="noopener noreferrer" className="sidebar__ext">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/ivan-sanmartin" target="_blank" rel="noopener noreferrer" className="sidebar__ext">
            LinkedIn ↗
          </a>
          <a href="/files/cv.pdf" target="_blank" rel="noopener noreferrer" className="sidebar__ext sidebar__ext--cv">
            {t.sidebar.cv}
          </a>
        </div>

        <div className="sidebar__divider" aria-hidden="true" />

        <div className="sidebar__lang" role="group" aria-label="Language selector">
          <button
            className={`sidebar__lang-btn mono${lang === 'en' ? ' sidebar__lang-btn--active' : ''}`}
            onClick={() => setLang('en')}
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
          <span className="sidebar__lang-sep" aria-hidden="true">·</span>
          <button
            className={`sidebar__lang-btn mono${lang === 'es' ? ' sidebar__lang-btn--active' : ''}`}
            onClick={() => setLang('es')}
            aria-pressed={lang === 'es'}
          >
            ES
          </button>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="mobile-bar">
        <button className="mobile-bar__brand" onClick={() => { setMenuOpen(false); scrollTo('home') }}>
          Iván San Martín
        </button>
        <div className="mobile-bar__right">
          <div className="sidebar__lang" role="group" aria-label="Language selector">
            <button
              className={`sidebar__lang-btn mono${lang === 'en' ? ' sidebar__lang-btn--active' : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >EN</button>
            <span className="sidebar__lang-sep" aria-hidden="true">·</span>
            <button
              className={`sidebar__lang-btn mono${lang === 'es' ? ' sidebar__lang-btn--active' : ''}`}
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
            >ES</button>
          </div>
          <button
            className={`mobile-bar__hamburger${menuOpen ? ' mobile-bar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-menu" aria-label="Site navigation">
            {NAV_KEYS.map(key => (
              <button
                key={key}
                className={`mobile-menu__item${active === key ? ' mobile-menu__item--active' : ''}`}
                onClick={() => scrollTo(key)}
              >
                <span className="sidebar__arrow">›</span>
                {navLabels[key]}
              </button>
            ))}
            <div className="mobile-menu__links">
              <a href="https://github.com/ivansanmartin" target="_blank" rel="noopener noreferrer" className="sidebar__ext">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/ivan-sanmartin" target="_blank" rel="noopener noreferrer" className="sidebar__ext">LinkedIn ↗</a>
              <a href="/files/cv.pdf" target="_blank" rel="noopener noreferrer" className="sidebar__ext">{t.sidebar.cv}</a>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}

export default Sidebar
