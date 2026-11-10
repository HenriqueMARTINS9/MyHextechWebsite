export const siteUrl = "https://www.myhextech.com"
export const personName = "Henrique MARTINS"
export const businessName = "MyHextech"
export const siteTitle = `${personName} | ${businessName} - Développeur freelance`
export const siteDescription =
  `${personName}, fondateur de ${businessName} et développeur full-stack freelance en Île-de-France. Sites web, applications, IA et 3D : projets et contact.`

export const socialProfiles = [
  "https://github.com/HenriqueMARTINS9",
  "https://www.linkedin.com/in/henrique-martins9/",
]

export const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#henrique-martins`,
      name: personName,
      givenName: "Henrique",
      familyName: "MARTINS",
      url: siteUrl,
      image: `${siteUrl}/images/henrique-portrait.jpg`,
      jobTitle: "Développeur full-stack freelance et ingénieur logiciel",
      description: siteDescription,
      email: "mailto:henrique.mar@outlook.fr",
      homeLocation: { "@type": "Place", name: "Île-de-France, France" },
      knowsLanguage: ["fr", "en"],
      knowsAbout: ["React", "Next.js", "TypeScript", "Développement web", "Applications mobiles", "Intelligence artificielle", "Unity", "Unreal Engine"],
      sameAs: socialProfiles,
      worksFor: { "@id": `${siteUrl}/#myhextech` },
      mainEntityOfPage: { "@id": `${siteUrl}/#profile` },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#myhextech`,
      name: businessName,
      description: `${businessName} est le nom commercial d'${personName}, développeur full-stack freelance en Île-de-France : développement web et mobile, solutions IA et expériences 3D.`,
      url: siteUrl,
      founder: { "@id": `${siteUrl}/#henrique-martins` },
      email: "henrique.mar@outlook.fr",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: businessName,
      alternateName: `${businessName} - ${personName}`,
      url: `${siteUrl}/`,
      inLanguage: "fr-FR",
      publisher: { "@id": `${siteUrl}/#myhextech` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: `${siteUrl}/`,
      name: siteTitle,
      description: siteDescription,
      inLanguage: "fr-FR",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#henrique-martins` },
      about: [
        { "@id": `${siteUrl}/#henrique-martins` },
        { "@id": `${siteUrl}/#myhextech` },
      ],
    },
  ],
}
