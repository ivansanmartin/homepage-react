import { LangProvider } from './i18n'
import Sidebar from './components/NavBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import FooterComp from './components/FooterComp'

function App() {
  return (
    <LangProvider>
      <div className="page-layout">
        <Sidebar />
        <main className="page-main">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
          <FooterComp />
        </main>
      </div>
    </LangProvider>
  )
}

export default App
