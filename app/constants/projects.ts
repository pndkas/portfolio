import { SKILLS_DATA } from "./skills";

export const projects = [
  {
    id: "01",
    client: "Personal Project / 2026",
    title: "PERM-UP",
    tags: ["Javascript", "React.js", "Node.js", "Vite.JS", "Express.js", "TailwindCSS", "Framer Motion", "Axios", "Bcrypt", "JWT", "Zustand", "MySQL", "Prisma", "Postman", "Git", "GitHub"],
    links: [
      { url: "https://github.com/pndkas/F-PERM-UP", label: "Github" },
    ],
    image: "",
    wip: false,
  },
  {
    id: "02",
    client: "Group Project / 2026",
    title: "WONGNORK",
    tags: ["Javascript", "React.js", "Node.js", "Vite.JS", "Express.js", "TailwindCSS", "Framer Motion", "Socket.io", "Mapbox", "Axios", "Bcrypt", "JWT", "Zustand", "AI", "MySQL", "Prisma", "Git", "GitHub"],
    links: [
      { url: "https://github.com/piyapathongron-art/wongnork_frontend", label: "Github" },
      { url: "https://wongnork-frontend.vercel.app/", label: "Live site" }
    ],
    image: [
      "/wongnork/wn1.png",
      "/wongnork/wn2.png",
      "/wongnork/wn3.png",
      "/wongnork/wn4.png",
    ],
    wip: false,
  },
  {
    id: "03",
    client: "Freelance Project / 2026",
    title: "AC24: Intelligent AI Inventory & Line Automation",
    tags: ["NextJS", "Typescript", "TailwindCSS", "Framer Motion", "Prisma", "PostgreSQL", "Axios", "Bcrypt", "JWT", "Zustand", "AI & Webhook Integration", "Git", "GitHub"],
    links: [
      { url: "https://github.com", label: "Github" },
    ],
    image: "",
    wip: true,
  },
  {
    id: "04",
    client: "Side Project / 2024",
    title: "-",
    tags: ["Javascript", "HTML", "CSS"],
    links: [
      { url: "https://github.com", label: "Github" },
    ],
    image: "",
    wip: false,
  },
];

export const TECH_ICONS: Record<string, string> = SKILLS_DATA.reduce((acc, cat) => {
  cat.skills.forEach(skill => {
    acc[skill.label] = skill.icon;
  });
  return acc;
}, {} as Record<string, string>);
