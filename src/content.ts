export interface NamePart {
  id: string;
  word: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface SkillItem {
  id: string;
  name: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  items: SkillItem[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  link: string;
  featured: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const home = {
  hero: {
    nameParts: [
      { id: "np1", word: "Ravi" },
      { id: "np2", word: "Kumar" },
      { id: "np3", word: "Loyi" },
    ] satisfies NamePart[],
    subtitle: "Full-Stack Developer · Building things for the web and mobile",
    intro:
      "I turn ideas into fast, beautiful, and reliable web experiences.",
    ctaPrimary: "View My Work",
    ctaSecondary: "Get In Touch",
  },
  about: {
    heading: "About Me",
    paragraph:
      "Hey! I'm Ravi — a full-stack developer who genuinely loves the craft. I've spent the last few years building everything from slick user interfaces to robust backend systems. I care deeply about clean code, thoughtful design, and shipping things that actually work. When I'm not coding, I'm probably exploring new frameworks or tinkering with side projects.",
    stats: [
      { id: "s1", value: "10+", label: "Years Experience" },
      { id: "s2", value: "8+", label: "Projects Built" },
      { id: "s3", value: "15+", label: "Technologies" },
    ] satisfies Stat[],
  },
  skills: {
    heading: "What I Work With",
    groups: [
      {
        id: "g1",
        label: "Frontend",
        items: [
          { id: "sk1", name: "React" }, { id: "sk0", name: "Angular" }, { id: "sk6", name: "Vue" },
          { id: "sk2", name: "TypeScript" },
          { id: "sk3", name: "Next.js" },
          { id: "sk4", name: "Tailwind CSS" },
          { id: "sk5", name: "Vite" },
        ],
      },
      {
        id: "g2",
        label: "Backend",
        items: [
          { id: "sk6", name: "Node.js" },
          { id: "sk7", name: "Express" },
          { id: "sk8", name: "PostgreSQL" },
          { id: "sk9", name: "MongoDB" },
          { id: "sk10", name: "REST APIs" },
        ],
      },
      {
        id: "g3",
        label: "Tools",
        items: [
          { id: "sk11", name: "Git" },
          { id: "sk12", name: "Docker" },
          { id: "sk13", name: "AWS" },
          { id: "sk14", name: "Figma" },
          { id: "sk15", name: "Linux" },
        ],
      },
    ] satisfies SkillGroup[],
  },
  projects: {
    heading: "Things I've Built",
    items: [
      {
        id: "p1",
        name: "Project 1",
        description:
          "A real-time collaborative code editor with live preview and multi-user sessions.",
        tags: ["React", "Node.js", "WebSockets", "MongoDB"],
        link: "#",
        featured: true,
      },
      {
        id: "p2",
        name: "Project 2",
        description:
          "Full-stack e-commerce platform with inventory management and payment integration.",
        tags: ["Next.js", "PostgreSQL", "Stripe", "TypeScript"],
        link: "#",
        featured: false,
      },
      {
        id: "p3",
        name: "Project 3",
        description:
          "A lightweight API monitoring dashboard with uptime tracking and alerting.",
        tags: ["Express", "React", "Docker", "AWS"],
        link: "#",
        featured: false,
      },
    ] satisfies Project[],
  },
  contact: {
    heading: "Let's build something together",
    subheading:
      "Got a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you soon.",
    namePlaceholder: "Your name",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "Tell me about your project...",
    submitLabel: "Send Message",
    successMessage: "Message sent! I'll get back to you soon.",
    errorMessage: "Something went wrong. Please check the form and try again.",
  },
  footer: {
    copyright: "2026 Ravi Kumar Loyi. Built with passion.",
    socials: [
      { label: "GitHub", href: "https://github.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "X", href: "https://x.com" },
    ] satisfies SocialLink[],
  },
  nav: {
    wordmark: "ravikloyi.in",
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Hire Me",
  },
};
