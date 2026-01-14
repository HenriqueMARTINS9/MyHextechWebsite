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
    "hero.subtitle": "Software Engineer & Full-Stack Developer",
    "hero.greeting": "Hi, I'm",
    "hero.description": "I design and build tailored digital experiences, blending code, creativity, and technical precision.",
    "hero.viewProjects": "View Projects",
    "hero.contactMe": "Contact Me",

    // About Section
    "about.title": "About Me",
    "about.subtitle": "My background and journey",
    "about.description1":
      "I'm a full-stack developer driven by the challenge of turning ideas into real, performant digital products from UI design to backend logic.",
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
    "about.availableForWork": "Available for work (TJM between 350€ and 500€ depending on the mission)",

    // Skills Section
    "skills.title": "My Skills",
    "skills.subtitle": "Technologies I work with",

    // GitHub Section
    "github.title": "GitHub Activity",
    "github.subtitle": "My contributions in the last year",

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
    "hero.subtitle": "Ingénieur Logiciel & Développeur Full-Stack",
    "hero.greeting": "Bonjour, je suis",
    "hero.description":
      "J'imagine et développe des expériences numériques sur mesure, mêlant code, créativité et exigence technique.",
    "hero.viewProjects": "Voir les Projets",
    "hero.contactMe": "Me Contacter",

    // About Section
    "about.title": "À Propos de Moi",
    "about.subtitle": "Mon parcours et mon histoire",
    "about.description1":
      "Je suis développeur full-stack, animé par le défi de transformer des idées en produits numériques concrets et performants, de la conception d'interfaces à la logique backend.",
    "about.description2":
      "Mon parcours professionnel inclut le travail en tant qu'Ingénieur Développeur spécialisé dans les technologies 3D et web chez Cobalt, où j'ai complété mon diplôme d'ingénieur informatique ESIEE. J'ai également acquis une expérience précieuse en tant qu'informaticien chez CAPMONDE pendant mon apprentissage BTS SNIR ESIEE.",
    "about.description3":
      "Travaillant actuellement en tant que développeur freelance, je suis passionné par la création d'expériences numériques innovantes qui combinent excellence technique et vision créative. J'explore constamment de nouvelles technologies et reste à jour avec les tendances de l'industrie pour livrer des solutions de pointe.",
    "about.name": "Nom",
    "about.email": "Email",
    "about.location": "Localisation",
    "about.availability": "Disponibilité",
    "about.availabilityStatus": "Ouvert aux opportunités",
    "about.downloadResume": "Télécharger le CV",
    "about.availableForWork": "Disponible pour travailler (TJM entre 350€ et 500€ selon la mission)",

    // Skills Section
    "skills.title": "Mes Compétences",
    "skills.subtitle": "Technologies avec lesquelles je travaille",

    // GitHub Section
    "github.title": "Activité GitHub",
    "github.subtitle": "Mes contributions de l'année dernière",

    // Projects Section
    "projects.title": "Projets en Vedette",
    "projects.subtitle": "Quelques-uns de mes travaux récents",
    "projects.decentraland": "Métaverse Decentraland",
    "projects.unity": "Jeux Unity & Apps Telegram",
    "projects.unreal": "Jeux Unreal Engine 5",
    "projects.telegram": "Bot de Chat IA Telegram",
    "projects.wanteed": "Application Wanteed",
    "projects.framer": "Site Vitrine Framer",

    // Experience Section
    "experience.title": "Expérience Professionnelle",
    "experience.subtitle": "Mon parcours professionnel",
    "experience.freelance.title": "Développeur Freelance",
    "experience.freelance.company": "MyHextech",
    "experience.freelance.description":
      "Travaille en tant que développeur freelance spécialisé dans le développement web, d'applications et 3D.",
    "experience.cobalt.title": "Ingénieur Développeur 3D et Web",
    "experience.cobalt.company": "Cobalt",
    "experience.cobalt.description":
      "En apprentissage pour le diplôme d'ingénieur développeur informatique à l'ESIEE, j'ai travaillé comme Ingénieur Développeur spécialisé dans les technologies 3D et web.",
    "experience.capmonde.title": "Informaticien",
    "experience.capmonde.company": "CAPMONDE",
    "experience.capmonde.description": "En apprentissage pour le BTS SNIR à l'ESIEE, j'ai travaillé comme informaticien.",

    // Contact Section
    "contact.title": "Entrer en Contact",
    "contact.subtitle": "Travaillons ensemble",
    "contact.info": "Informations de Contact",
    "contact.currentStatus": "Statut Actuel",
    "contact.statusMessage": "Disponible pour du travail freelance et des opportunités à temps plein",
    "contact.sendMessage": "Envoyer un Message",

    // Footer
    "footer.rights": "Tous droits réservés.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

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
