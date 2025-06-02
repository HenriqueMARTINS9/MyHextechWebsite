"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.resume": "Resume",

    // Hero Section
    "hero.subtitle": "Software Engineer & Creative Developer",
    "hero.greeting": "Hi, I'm",
    "hero.description": "I craft exceptional digital experiences with code, creativity, and a passion for innovation.",
    "hero.viewProjects": "View Projects",
    "hero.contactMe": "Contact Me",

    // About Section
    "about.title": "About Me",
    "about.subtitle": "My background and journey",
    "about.description1":
      "I'm a passionate software engineer with experience building web applications and digital products. I specialize in frontend development with React and Next.js, but I'm also comfortable working with backend technologies.",
    "about.description2":
      "My journey in tech started with a strong foundation in software development. I've worked with various companies to create intuitive, performant, and accessible digital experiences.",
    "about.description3":
      "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, and staying up-to-date with the latest industry trends.",
    "about.name": "Name",
    "about.email": "Email",
    "about.location": "Location",
    "about.availability": "Availability",
    "about.availabilityStatus": "Open to opportunities",
    "about.downloadResume": "Download Resume",
    "about.availableForWork": "Available for work",

    // Skills Section
    "skills.title": "My Skills",
    "skills.subtitle": "Technologies I work with",

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.subtitle": "Some of my recent work",

    // Experience Section
    "experience.title": "Work Experience",
    "experience.subtitle": "My professional journey",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle": "Let's work together",
    "contact.info": "Contact Information",
    "contact.currentStatus": "Current Status",
    "contact.statusMessage": "Available for freelance work and full-time opportunities",

    // Footer
    "footer.rights": "All rights reserved.",
  },
  fr: {
    // Navigation
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.experience": "Expérience",
    "nav.contact": "Contact",
    "nav.resume": "CV",

    // Hero Section
    "hero.subtitle": "Ingénieur Logiciel & Développeur Créatif",
    "hero.greeting": "Salut, je suis",
    "hero.description":
      "Je crée des expériences numériques exceptionnelles avec du code, de la créativité et une passion pour l'innovation.",
    "hero.viewProjects": "Voir les Projets",
    "hero.contactMe": "Me Contacter",

    // About Section
    "about.title": "À Propos de Moi",
    "about.subtitle": "Mon parcours et mon histoire",
    "about.description1":
      "Je suis un ingénieur logiciel passionné avec de l'expérience dans la création d'applications web et de produits numériques. Je me spécialise dans le développement frontend avec React et Next.js, mais je suis aussi à l'aise avec les technologies backend.",
    "about.description2":
      "Mon parcours dans la tech a commencé avec une base solide en développement logiciel. J'ai travaillé avec diverses entreprises pour créer des expériences numériques intuitives, performantes et accessibles.",
    "about.description3":
      "Quand je ne code pas, vous pouvez me trouver en train d'explorer de nouvelles technologies, de contribuer à des projets open-source, et de rester à jour avec les dernières tendances de l'industrie.",
    "about.name": "Nom",
    "about.email": "Email",
    "about.location": "Localisation",
    "about.availability": "Disponibilité",
    "about.availabilityStatus": "Ouvert aux opportunités",
    "about.downloadResume": "Télécharger le CV",
    "about.availableForWork": "Disponible pour travailler",

    // Skills Section
    "skills.title": "Mes Compétences",
    "skills.subtitle": "Technologies avec lesquelles je travaille",

    // Projects Section
    "projects.title": "Projets en Vedette",
    "projects.subtitle": "Quelques-uns de mes travaux récents",

    // Experience Section
    "experience.title": "Expérience Professionnelle",
    "experience.subtitle": "Mon parcours professionnel",

    // Contact Section
    "contact.title": "Entrer en Contact",
    "contact.subtitle": "Travaillons ensemble",
    "contact.info": "Informations de Contact",
    "contact.currentStatus": "Statut Actuel",
    "contact.statusMessage": "Disponible pour du travail freelance et des opportunités à temps plein",

    // Footer
    "footer.rights": "Tous droits réservés.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
