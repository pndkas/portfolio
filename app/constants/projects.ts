import { SKILLS_DATA } from "./skills";

export const projects = [
  {
    id: "01",
    client: "Personal Project / 2026",
    title: "PERM-UP",
    tags: ["Javascript", "React.js", "Node.js", "Vite.JS", "Express.js", "TailwindCSS", "Framer Motion", "Axios", "Bcrypt", "JWT", "Zustand", "MySQL", "Prisma", "Postman", "Git", "GitHub"],
    links: [
      { url: "https://github.com", label: "Github" },
      { url: "https://example.com", label: "Live site" }
    ],
    image: "/project-1.png",
    wip: false,
  },
  {
    id: "02",
    client: "Group Project / 2026",
    title: "WONGNORK",
    tags: ["Javascript", "React.js", "Node.js", "Vite.JS", "Express.js", "TailwindCSS", "Framer Motion", "Socket.io", "Mapbox", "Axios", "Bcrypt", "JWT", "Zustand", "AI", "MySQL", "Prisma", "Git", "GitHub"],
    links: [
      { url: "https://github.com", label: "Github" },
    ],
    image: "/project-2.png",
    wip: false,
  },
  {
    id: "03",
    client: "Freelance Project / 2026",
    title: "AdsCenter 24: Intelligent AI Inventory & Line Automation",
    tags: ["NextJS", "Typescript", "TailwindCSS", "Framer Motion", "Prisma", "PostgreSQL", "Axios", "Bcrypt", "JWT", "Zustand", "AI & Webhook Integration", "Git", "GitHub"],
    links: [
      { url: "https://github.com", label: "Github" },
      { url: "https://example.com", label: "Live site" }
    ],
    image: "/project-1.png",
    wip: true,
  },
  {
    id: "04",
    client: "Side Project / 2024",
    title: "Portfolio Template v2",
    tags: ["Javascript", "HTML", "CSS"],
    links: [
      { url: "https://github.com", label: "Github" },
    ],
    image: "/project-2.png",
    wip: false,
  },
];

export const TECH_ICONS: Record<string, string> = SKILLS_DATA.reduce((acc, cat) => {
  cat.skills.forEach(skill => {
    acc[skill.label] = skill.icon;
  });
  return acc;
}, {} as Record<string, string>);
