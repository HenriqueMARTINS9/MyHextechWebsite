// Shared with project cards so featured skills reflect the work displayed on the site.
export const projectTechnologies = {
  miaParis: ["CRM", "My Claw", "AI Agents", "Email Automation", "Workflow Automation", "Supabase"],
  textileSnap: ["Computer Vision", "AI", "Fabric Recognition", "Inventory Management", "Mobile App", "Supabase"],
  pointJaponVoyage: ["Web Design", "Responsive", "UI/UX", "SEO", "Branding", "Supabase"],
  wearevents: ["React", "Vite", "TypeScript", "Supabase", "S3", "Edge Functions", "SEO"],
  virtualsomm: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX"],
  simvia: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Frontend", "UI/UX"],
  entrave: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX"],
  wanteedApp: ["React", "React Native", "FlutterFlow", "Webflow", "UI/UX", "Figma", "iOS", "Android", "Firebase"],
  telegramBot: ["Telegram API", "AI", "Node.js", "API Integration", "Python", "Docker", "Redis"],
  unrealEngine: ["Unreal Engine 5", "AWS GameLift", "PixelStreaming", "C++", "AWS S3"],
  unityGames: ["Unity", "C#", "WebGL", "2D/3D", "Firebase", "GCP"],
  websites: ["React", "Vue", "Angular", "AWS S3", "Node.js", "Tailwind CSS", "Vercel", "Metamask"],
  decentralandMetaverse: ["Decentraland", "3D", "Metaverse", "WebGL", "TypeScript"],
}

function normalizeTechnology(name: string) {
  const normalized = name.toLowerCase()
  return normalized === "s3" || normalized.startsWith("aws ") ? "aws" : normalized
}

export function getProjectCount(technology: string) {
  const normalized = normalizeTechnology(technology)
  return Object.values(projectTechnologies).filter((tags) =>
    tags.some((tag) => normalizeTechnology(tag) === normalized),
  ).length
}

export function isFeaturedTechnology(technology: string) {
  return getProjectCount(technology) >= 2
}
