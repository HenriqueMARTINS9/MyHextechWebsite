export const siteUrl = "https://www.myhextech.com"
export const siteTitle = "MyHextech | Henrique MARTINS, développeur full-stack freelance"
export const siteDescription =
  "Henrique MARTINS, développeur freelance en Île-de-France : sites web, applications React et Next.js, solutions IA, mobile et 3D. Découvrez mes projets et contactez-moi."

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
      name: "Henrique MARTINS",
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
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#myhextech`,
      name: "MyHextech",
      url: siteUrl,
      founder: { "@id": `${siteUrl}/#henrique-martins` },
      email: "henrique.mar@outlook.fr",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "MyHextech",
      url: `${siteUrl}/`,
      inLanguage: "fr-FR",
      publisher: { "@id": `${siteUrl}/#henrique-martins` },
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
    },
  ],
}
