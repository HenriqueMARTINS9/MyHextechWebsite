"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { TopHeader } from "@/components/top-header"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { GitHubContributions } from "@/components/github-contributions"
import { useLanguage } from "@/contexts/language-context"
import { SectionSubHeading } from "@/components/section-sub-heading"
import useMobile from "@/hooks/use-mobile"

export default function Portfolio() {
  const isMobile = useMobile()
  const { t, language } = useLanguage()

  // Smooth scroll functions
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/CV-HenriqueMARTINS-MyHextech-072025.pdf"
    link.download = "CV-HenriqueMARTINS-MyHextech-072025.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Project descriptions in both languages
  const projectDescriptions = {
    en: {
      decentralandMetaverse:
        "Development of metaverse experiences and mini-games on the Decentraland platform with immersive 3D environments.",
      unityGames: "3D and 2D game development on Unity with WebGL deployment and Telegram App integration.",
      unrealEngine:
        "Immersive games and universes built with Unreal Engine 5, featuring AWS GameLift and PixelStreaming technology.",
      telegramBot:
        "AI-powered Telegram chat bot with API account connection and comprehensive user usage tracking system.",
      wanteedApp:
        "Complete mobile application and website redesign with UI/UX optimization, user logic modification for free and premium users, and iOS/Android store deployment.",
      framerShowcase:
        "Modern showcase website built with Framer for a Telegram Game project, featuring responsive design and smooth animations.",
      websites:
        "Websites for NFT projects, featuring user account creation, personal dashboards, collection display, and dynamic interactions tailored to each project.",
      entrave:
        "Platform exploring future probabilities, offering analyses and perspectives on various subjects with a modern and intuitive interface.",
      virtualsomm:
        "Virtual sommelier application for restaurants, democratizing access to wine expertise by providing interactive recommendations and wine discovery experiences.",
      simvia:
        "Frontend development for Simvia, EDF Group's subsidiary specialized in open-source software for industrial engineering calculation and simulation, focusing on modern and user-friendly interface design.",
    },
    fr: {
      decentralandMetaverse:
        "Développement d'expériences métaverse et de mini-jeux sur la plateforme Decentraland avec des environnements 3D immersifs.",
      unityGames:
        "Développement de jeux 3D et 2D sur Unity avec déploiement WebGL et intégration d'applications Telegram.",
      unrealEngine:
        "Jeux et univers immersifs construits avec Unreal Engine 5, utilisant AWS GameLift et la technologie PixelStreaming.",
      telegramBot:
        "Bot de chat IA Telegram avec connexion de compte API et système complet de suivi d'utilisation utilisateur.",
      wanteedApp:
        "Refonte complète d'application mobile et site web avec optimisation UI/UX, modification de logique utilisateur gratuit et premium, et déploiement sur les stores iOS/Android.",
      framerShowcase:
        "Site vitrine moderne construit avec Framer pour un projet de jeu Telegram, avec design responsive et animations fluides.",
      websites:
        "Sites web pour projets NFT, avec création de compte utilisateur, espace personnel, affichage des collections et interactions dynamiques selon le projet.",
      entrave:
        "Plateforme explorant les probabilités du futur, offrant des analyses et des perspectives sur divers sujets avec une interface moderne et intuitive.",
      virtualsomm:
        "Application de sommellerie virtuelle pour restaurants, démocratisant l'accès à l'expertise en vins en proposant des recommandations interactives et des expériences de découverte.",
      simvia:
        "Développement frontend pour Simvia, filiale du groupe EDF spécialisée dans l'édition de logiciels open source pour le calcul et la simulation en ingénierie industrielle, avec un focus sur le design d'interface moderne et conviviale.",
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <TopHeader />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">{t("hero.subtitle")}</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">{t("hero.greeting")}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">
                Henrique MARTINS
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">{t("hero.description")}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-cyan-500 border-0"
                onClick={() => scrollToSection("projects")}
              >
                <span className="relative z-10 flex items-center">
                  {t("hero.viewProjects")}{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
                onClick={() => scrollToSection("contact")}
              >
                <span className="text-blue-400">{t("hero.contactMe")}</span>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/HenriqueMARTINS9" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/henrique-martins9/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:henrique.mar@outlook.fr">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          {!isMobile && (
            <div className="flex justify-center">
              <CreativeHero />
            </div>
          )}
        </div>

        <div className="hidden md:absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title={t("about.title")} subtitle={t("about.subtitle")} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/images/henrique-portrait.jpg"
                  alt="Henrique MARTINS"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">{t("about.availableForWork")}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  {language === "en"
                    ? "I'm a Full-Stack Developer and Software Engineer specialized in creating modern web applications, immersive 3D experiences, and innovative digital solutions. My work spans from responsive websites and web applications (React, Next.js, TypeScript) to complex 3D projects (Unity, Unreal Engine), covering diverse industries from enterprise solutions (Simvia - EDF Group) to innovative platforms (Entrave, Virtualsomm) and gaming experiences."
                    : "Je suis Développeur Full-Stack et Ingénieur Logiciel spécialisé dans la création d'applications web modernes, d'expériences 3D immersives et de solutions numériques innovantes. Mon travail s'étend des sites web et applications web responsives (React, Next.js, TypeScript) aux projets 3D complexes (Unity, Unreal Engine), couvrant des domaines variés allant des solutions d'entreprise (Simvia - Groupe EDF) aux plateformes innovantes (Entrave, Virtualsomm) et expériences de jeu."}
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  {language === "en"
                    ? "My professional journey includes working as a Developer Engineer focusing on 3D and web technologies at FR INVEST, where I completed my ESIEE computer engineering diploma. I've also gained valuable experience as a computer scientist at CAPMONDE during my ESIEE BTS SNIR Apprenticeship."
                    : "Mon parcours professionnel inclut le travail en tant qu'Ingénieur Développeur spécialisé dans les technologies 3D et web chez FR INVEST, où j'ai complété mon diplôme d'ingénieur informatique ESIEE. J'ai également acquis une expérience précieuse en tant qu'informaticien chez CAPMONDE pendant mon apprentissage BTS SNIR ESIEE."}
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  {language === "en"
                    ? "Currently working as a freelance developer under MyHextech, I'm passionate about creating innovative digital experiences that combine technical excellence with creative vision. I'm always exploring new technologies and staying current with industry trends to deliver cutting-edge solutions."
                    : "Travaillant actuellement en tant que développeur freelance sous MyHextech, je suis passionné par la création d'expériences numériques innovantes qui combinent excellence technique et vision créative. J'explore constamment de nouvelles technologies et reste à jour avec les tendances de l'industrie pour livrer des solutions de pointe."}
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">{t("about.name")}</div>
                    <div className="font-medium">Henrique MARTINS</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">{t("about.email")}</div>
                    <div className="font-medium break-all">henrique.mar@outlook.fr</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">{t("about.location")}</div>
                    <div className="font-medium">Eure et Loir, France</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">{t("about.availability")}</div>
                    <div className="font-medium text-green-500">{t("about.availabilityStatus")}</div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="/CV-HenriqueMARTINS-MyHextech-072025.pdf"
                    download="CV-HenriqueMARTINS-MyHextech-072025.pdf"
                    className="inline-flex items-center bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded text-sm font-medium"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {t("about.downloadResume")}
                  </a>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title={t("skills.title")} subtitle={t("skills.subtitle")} />

          <div className="grid gap-12 mt-16">
            {/* Frontend & UI */}
            <div className="space-y-6">
              <SectionSubHeading title="Frontend & UI" />
              <div className="grid justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <SkillBadge name="HTML/CSS" level={95} />
                <SkillBadge name="JavaScript" level={90} />
                <SkillBadge name="TypeScript" level={85} />
                <SkillBadge name="React" level={90} />
                <SkillBadge name="Angular" level={75} />
                <SkillBadge name="Vue" level={80} />
                <SkillBadge name="Tailwind CSS" level={85} />
                <SkillBadge name="Framer" level={95} />
                <SkillBadge name="WordPress" level={90} />
                <SkillBadge name="WebFlow" level={80} />
                <SkillBadge name="Flutter" level={70} />
              </div>
            </div>

            {/* Backend, DevOps & Cloud */}
            <div className="space-y-6">
              <SectionSubHeading title="Backend, DevOps & Cloud" />
              <div className="grid justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <SkillBadge name="Node.js" level={70} />
                <SkillBadge name="Laravel" level={70} />
                <SkillBadge name="Django" level={75} />
                <SkillBadge name="Symfony" level={70} />
                <SkillBadge name="FastAPI" level={80} />
                <SkillBadge name="MongoDB" level={75} />
                <SkillBadge name="PostgreSQL" level={75} />
                <SkillBadge name="MySQL" level={75} />
                <SkillBadge name="Redis" level={70} />
                <SkillBadge name="Firebase" level={80} />
                <SkillBadge name="AWS" level={65} />
                <SkillBadge name="Vercel" level={80} />
                <SkillBadge name="Docker" level={70} />
                <SkillBadge name="GCP" level={75} />
                <SkillBadge name="Git" level={80} />
                <SkillBadge name="CI/CD" level={60} />
              </div>
            </div>

            {/* Game Development */}
            <div className="space-y-6">
              <SectionSubHeading title="Game Development" />
              <div className="grid justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <SkillBadge name="Unity" level={70} />
                <SkillBadge name="Unreal Engine" level={70} />
              </div>
            </div>

            {/* Mobile & Deployment */}
            <div className="space-y-6">
              <SectionSubHeading title="Mobile & Deployment" />
              <div className="grid justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <SkillBadge name="iOS Deployment" level={95} />
                <SkillBadge name="Android Deployment" level={95} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section id="github" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title={t("github.title")} subtitle={t("github.subtitle")} />

          <div className="mt-16 max-w-6xl mx-auto">
            <GitHubContributions username="HenriqueMARTINS9" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title={t("projects.title")} subtitle={t("projects.subtitle")} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title={language === "en" ? "Virtualsomm" : "Virtualsomm"}
              description={projectDescriptions[language].virtualsomm}
              tags={["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX"]}
              image="/images/VirtualSomm.svg"
              demoUrl="https://restaurant.virtualsomm.ch/"
              date="2026"
            />
            <ProjectCard
              title={language === "en" ? "Simvia - EDF Group" : "Simvia - Groupe EDF"}
              description={projectDescriptions[language].simvia}
              tags={["React", "Next.js", "TypeScript", "Tailwind CSS", "Frontend", "UI/UX"]}
              image="/images/simvia-logo.f8594fbe.svg"
              demoUrl="https://simvia.tech/"
              date="2025"
            />
            <ProjectCard
              title={language === "en" ? "Entrave" : "Entrave"}
              description={projectDescriptions[language].entrave}
              tags={["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX"]}
              image="/images/logo-entrave.png"
              demoUrl="https://entrave.com/"
              date="2025"
            />
            <ProjectCard
              title={language === "en" ? "Wanteed App & Website" : "Application Wanteed & Site Web"}
              description={projectDescriptions[language].wanteedApp}
              tags={["FlutterFlow", "Webflow", "UI/UX", "Figma", "iOS", "Android", "Firebase"]}
              image="/images/wanteed-logo.png"
              demoUrl="https://wanteed.io"
              date="2025"
            />
            <ProjectCard
              title={language === "en" ? "Telegram AI Chat Bot" : "Bot de Chat IA Telegram"}
              description={projectDescriptions[language].telegramBot}
              tags={["Telegram API", "AI", "Node.js", "API Integration", "Python", "Docker", "Redis"]}
              image="/images/telegram-logo-circle.png"
              demoUrl="https://example.com"
              date="2025"
            />
            <ProjectCard
              title={language === "en" ? "Immersive Store Unreal Engine 5" : "Magasin Immersif Unreal Engine 5"}
              description={projectDescriptions[language].unrealEngine}
              tags={["Unreal Engine 5", "AWS GameLift", "PixelStreaming", "C++", "AWS S3"]}
              image="/images/unreal-engine-logo-white.png"
              demoUrl="https://example.com"
              date="2023-2024"
            />
            <ProjectCard
              title={language === "en" ? "Unity Runner Game" : "Jeu Unity Runner"}
              description={projectDescriptions[language].unityGames}
              tags={["Unity", "C#", "WebGL", "2D/3D", "Firebase", "GCP"]}
              image="/images/unity-logo.png"
              demoUrl="https://cobalt-runner-v1.vercel.app/"
              date="2023"
            />
            <ProjectCard
              title={language === "en" ? "Websites" : "Sites Web"}
              description={projectDescriptions[language].websites}
              tags={["React", "Vue", "Angular", "AWS S3", "Node.JS", "TailwinCSS", "Vercel", "Metamask"]}
              image="/images/CobaltLogo.svg"
              demoUrl="https://cobalt.shop/"
              date="2021-2024"
            />
            <ProjectCard
              title={language === "en" ? "Decentraland Metaverse" : "Métaverse Decentraland"}
              description={projectDescriptions[language].decentralandMetaverse}
              tags={["Decentraland", "3D", "Metaverse", "WebGL", "TypeScript"]}
              image="/images/decentraland-scene.png"
              demoUrl="https://decentraland.org"
              date="2021-2023"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title={t("experience.title")} subtitle={t("experience.subtitle")} />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title={t("contact.title")} subtitle={t("contact.subtitle")} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">{t("contact.info")}</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 min-w-[3rem] min-h-[3rem] rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">{t("about.email")}</div>
                    <div className="font-medium">henrique.mar@outlook.fr</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 min-w-[3rem] min-h-[3rem] rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>                    <div className="font-medium">linkedin.com/in/henrique-martins9</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 min-w-[3rem] min-h-[3rem] rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium break-all">github.com/HenriqueMARTINS9</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">{t("contact.currentStatus")}</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 min-w-[0.8rem] min-h-[0.8rem] rounded-full bg-green-500 animate-pulse"></div>
                  <span>{t("contact.statusMessage")}</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">My</span>
              <span className="text-white">Hextech</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Henrique MARTINS. {t("footer.rights")}
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/HenriqueMARTINS9" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/henrique-martins9/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:henrique.mar@outlook.fr">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
