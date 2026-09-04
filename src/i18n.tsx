import { createContext, useContext, useState, ReactNode } from 'react'

export type Lang = 'en' | 'es'

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
    },
    sidebar: {
      cv: 'Download CV',
    },
    hero: {
      eyebrow: 'Software Developer & Backend Specialist',
      summary: "I'm a developer who builds the systems behind the scenes — APIs, databases, and infrastructure that make applications work reliably and at scale.",
      animated: [
        'Building software that works.',
        1800,
        'Backend Development & APIs',
        1500,
        'Python · Node.js · Docker · Kubernetes',
        2000,
        'Open to new opportunities.',
        2500,
      ] as (string | number)[],
      cta_contact: 'Get in touch',
      cta_cv: 'Download CV',
    },
    about: {
      label: 'About',
      title: 'Who I am',
      lead: "I'm a software developer who believes good software is built by good teams. I care as much about how we work together as about what we ship.",
      p2: "Technically, I work across the full picture — from designing APIs and modelling databases to building integration layers between platforms, developing business logic for complex workflows, and managing the infrastructure that keeps it all running. I've taken features from concept to production, designed database structures from scratch, and worked on systems that connect suppliers, clients, and internal teams in real operational environments.",
      p3: "I've had the chance to collaborate with people from different backgrounds, roles, and cultures. I take pride in being someone others can rely on — whether that means digging into a hard problem, asking the right questions at the right moment, or staying calm when things don't go as planned.",
      quote: '"Learning and practice."',
      facts: {
        education: 'Education',
        educationVal: 'Analista Programador · Networking & Connectivity',
        focus: 'Focus',
        focusVal: 'Backend & Infrastructure',
        languages: 'Languages',
        languagesVal: 'Python · JS · TS · SQL',
        data: 'Data stores',
        dataVal: 'MongoDB · Redis · MySQL',
        infra: 'Infrastructure',
        infraVal: 'Docker · K8s · Jenkins',
        email: 'Email',
      },
    },
    projects: {
      label: 'Projects',
      title: 'What I\'ve built',
      subtitle: 'Personal projects built to learn, experiment, and solve real problems. Each entry explains what it does in plain language, then the technical detail.',
      featured: 'Featured',
      otherTitle: 'More projects',
      showAll: 'Show all projects',
      showLess: 'Show fewer',
      repo: 'Repository',
      live: 'Live site',
    },
    experience: {
      label: 'Experience',
      title: 'Work Experience',
      current: 'Current',
      highlights: [
        'Ship full-stack features across Unilink\'s B2B procurement suite — trusted by Collahuasi, ENAP, and First Quantum Minerals to digitise supplier management, quotations, and tenders across Latin America.',
        'Built and extended modules across the portfolio: Supplier Hub, Opportunity Hub, AccuSeller, and CAT4MRO — helping connect 60,000+ suppliers with industrial buyers across 8 countries.',
        'Design and implement REST APIs and integration layers connecting Unilink\'s platforms to client ERP systems (SAP, Oracle, Dynamics, JD Edwards). Backend in .NET/C# and Python; frontend in Vue.js.',
        'Designed extensive database structures end-to-end — ER diagrams, physical models, normalization, and full implementation on SQL Server and PostgreSQL.',
        '5,000+ service billing requests processed end-to-end. Designed and delivered the SAR module for FQML from scratch — a system that orchestrates supplier requests, multi-service charges, and client approval workflows with dynamic business routing and cross-platform integrations.',
      ],
    },
    skills: {
      label: 'Skills',
      title: 'Technical Skills',
      subtitle: 'Technologies I work with, organised by discipline.',
    },
    contact: {
      label: 'Contact',
      title: 'Get in touch',
      subtitle: 'Whether you have a project in mind, a role to fill, or just want to connect — I\'m available.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      quote: '"Learning and practice."',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      experience: 'Experiencia',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    sidebar: {
      cv: 'Descargar CV',
    },
    hero: {
      eyebrow: 'Analista Programador · Desarrollador Backend',
      summary: 'Construyo los sistemas que funcionan detrás de escena: APIs, bases de datos e infraestructura que hacen que las aplicaciones sean confiables y escalables.',
      animated: [
        'Construyendo software que funciona.',
        1800,
        'Desarrollo Backend & APIs',
        1500,
        'Python · Node.js · Docker · Kubernetes',
        2000,
        'Abierto a nuevas oportunidades.',
        2500,
      ] as (string | number)[],
      cta_contact: 'Contactar',
      cta_cv: 'Descargar CV',
    },
    about: {
      label: 'Sobre mí',
      title: 'Quién soy',
      lead: 'Soy desarrollador de software que cree que el buen software lo construyen buenos equipos. Me importa tanto cómo trabajamos juntos como lo que entregamos.',
      p2: 'En lo técnico, abarcó el panorama completo — desde el diseño de APIs y el modelado de bases de datos hasta la construcción de capas de integración entre plataformas, el desarrollo de lógica de negocio para flujos complejos y la gestión de la infraestructura que mantiene todo funcionando. He llevado funcionalidades de la idea a producción, diseñado estructuras de datos desde cero y trabajado en sistemas que conectan proveedores, clientes y equipos internos en entornos operacionales reales.',
      p3: 'He tenido la oportunidad de colaborar con personas de distintos contextos, roles y culturas. Me enorgullece ser alguien en quien los demás pueden confiar — ya sea para resolver un problema difícil, hacer las preguntas correctas en el momento indicado o mantener la calma cuando las cosas no salen como se esperaba.',
      quote: '"Aprender y practicar."',
      facts: {
        education: 'Formación',
        educationVal: 'Analista Programador · Conectividad y Redes',
        focus: 'Enfoque',
        focusVal: 'Backend e Infraestructura',
        languages: 'Lenguajes',
        languagesVal: 'Python · JS · TS · SQL',
        data: 'Bases de datos',
        dataVal: 'MongoDB · Redis · MySQL',
        infra: 'Infraestructura',
        infraVal: 'Docker · K8s · Jenkins',
        email: 'Email',
      },
    },
    projects: {
      label: 'Proyectos',
      title: 'Lo que he construido',
      subtitle: 'Proyectos personales construidos para aprender, experimentar y resolver problemas reales. Cada tarjeta muestra primero el impacto en lenguaje simple.',
      featured: 'Destacado',
      otherTitle: 'Más proyectos',
      showAll: 'Ver todos los proyectos',
      showLess: 'Mostrar menos',
      repo: 'Repositorio',
      live: 'Sitio en vivo',
    },
    experience: {
      label: 'Experiencia',
      title: 'Experiencia Laboral',
      current: 'Actual',
      highlights: [
        'Entrego funcionalidades full-stack en la suite de procurement B2B de Unilink — utilizada por Collahuasi, ENAP y First Quantum Minerals para digitalizar la gestión de proveedores, cotizaciones y licitaciones en Latinoamérica.',
        'Construí y extendí módulos a lo largo del portafolio: Hub de Proveedores, Hub de Oportunidades, AccuSeller y CAT4MRO — contribuyendo a conectar más de 60.000 proveedores con compradores industriales en 8 países.',
        'Diseño e implementación de APIs REST y capas de integración que conectan las plataformas de Unilink con los ERP de los clientes (SAP, Oracle, Dynamics, JD Edwards). Backend en .NET/C# y Python; frontend en Vue.js.',
        'Diseñé extensas estructuras de base de datos de principio a fin — diagramas entidad-relación, modelos físicos, normalización e implementación completa en SQL Server y PostgreSQL.',
        'Más de 5.000 solicitudes de cobro procesadas de extremo a extremo. Diseñé y entregué el módulo SAR para FQML desde cero — un sistema que orquesta solicitudes de proveedores, cobros de múltiples servicios y flujos de aprobación del cliente comprador, con rutas de negocio dinámicas e integraciones entre plataformas.',
      ],
    },
    skills: {
      label: 'Habilidades',
      title: 'Habilidades Técnicas',
      subtitle: 'Tecnologías con las que trabajo, organizadas por disciplina.',
    },
    contact: {
      label: 'Contacto',
      title: 'Contactar',
      subtitle: 'Tengas un proyecto en mente, una posición que cubrir o simplemente quieras conectar — estoy disponible.',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      quote: '"Aprender y practicar."',
    },
  },
} as const

type Translations = typeof translations.en

const LangContext = createContext<{
  lang: Lang
  t: Translations
  setLang: (l: Lang) => void
}>({
  lang: 'en',
  t: translations.en,
  setLang: () => {},
})

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en')
  const t = translations[lang] as unknown as Translations
  return (
    <LangContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
