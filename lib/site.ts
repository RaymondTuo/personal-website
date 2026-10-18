// TODO(raymond): swap `url` for your real domain once you have one. It drives
// canonical URLs, the sitemap, and Open Graph tags.
export const site = {
  url: "https://raymondtuo.com",
  name: "Raymond Tuo",
  nameZh: "庹榕",
  role: "Marketing & Decision Analytics",
  location: "Pittsburgh, PA",
  tagline:
    "I make the number trustworthy — and the story impossible to ignore.",
  description:
    "Raymond Tuo builds churn models, causal measurement, and budget optimizers for marketing teams. MSBA candidate at Carnegie Mellon Tepper.",
  email: "rtuo@tepper.cmu.edu",
  linkedin: "https://www.linkedin.com/in/raymond-tuo-b69431168/",
  github: "https://github.com/RaymondTuo",
  resume: "/raymond-tuo-resume.pdf",
} as const;

export const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#toolkit", label: "Toolkit" },
  { href: "/#contact", label: "Contact" },
] as const;
