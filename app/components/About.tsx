"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lock } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useMemo } from "react";

const experience = [
  { company: "NeoTaste", role: "Product Designer", period: "2025 - Now" },
  { company: "Zattoo", role: "Product Designer", period: "2023 - 2025" },
  { company: "Gymondo", role: "Senior UI/UX Designer", period: "2019 - 2022" },
  { company: "VASS × CaixaBank", role: "UI/UX Designer", period: "2017 - 2019" },
  { company: "SEAT", role: "UI/UX Designer", period: "2016" },
  { company: "Lafosca - Mobile Jazz", role: "Junior UI Designer", period: "2015 - 2016" },
];

const awards = [
  { title: "Best Mobile Banking App, Western Europe", org: "Global Finance", date: "Sep 2018" },
  { title: "Best Mobile Tech Project", org: "The Banker Tech Project Awards", date: "Oct 2018" },
  { title: "Best Project - Innovative Touchpoints & Connected Services", org: "BAI Global Innovation Awards", date: "Oct 2018" },
  { title: "Silver - Digital New Service or Application", org: "London Design Awards", date: "Nov 2018" },
];

const SKILLS_LIST = [
  { label: "Javascript", icon: "devicon-javascript-plain colored" },
  { label: "Typescript", icon: "devicon-typescript-plain colored" },
  { label: "HTML", icon: "devicon-html5-plain colored" },
  { label: "CSS", icon: "devicon-css3-plain colored" },
  { label: "Node.js", icon: "devicon-nodejs-plain colored" },
  { label: "Express.js", icon: "devicon-express-original" },
  { label: "React.js", icon: "devicon-react-original colored" },
  { label: "NextJS", icon: "devicon-nextjs-plain" },
  { label: "Nest.js", icon: "devicon-nestjs-plain colored" },
  { label: "Vue.js", icon: "devicon-vuejs-plain colored" },
  { label: "TailwindCSS", icon: "devicon-tailwindcss-original colored" },
  { label: "Zustand", icon: "devicon-react-original colored" },
  { label: "Socket.io", icon: "devicon-socketio-original" },
  { label: "JWT", icon: "devicon-ssh-plain" }, // JWT doesn't have an icon in devicon, using generic security
  { label: "Bcrypt", icon: "lock" }, // We'll handle Lucide separately
  { label: "Git", icon: "devicon-git-plain colored" },
  { label: "GitHub", icon: "devicon-github-original" },
  { label: "Postman", icon: "devicon-postman-plain colored" },
  { label: "Axios", icon: "devicon-azuresqldatabase-plain" }, // Axios generic
  { label: "Docker", icon: "devicon-docker-plain colored" },
  { label: "MySQL", icon: "devicon-mysql-plain colored" },
  { label: "Prisma", icon: "devicon-prisma-original" },
  { label: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { label: "Figma", icon: "devicon-figma-plain colored" },
  { label: "Canva", icon: "devicon-canva-original colored" },
  { label: "Premiere Pro", icon: "devicon-premierepro-plain colored" },
  { label: "Photoshop", icon: "devicon-photoshop-plain colored" },
  { label: "Illustrator", icon: "devicon-illustrator-plain colored" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="w-full px-5 md:px-8 py-16 md:py-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: "4rem" }}
      >
        <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", color: "var(--muted)", textTransform: "uppercase", marginBottom: "0.6rem" }}>
          My Story
        </p>
        <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "clamp(3rem, 8vw, 5rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 0.9, color: "var(--text)" }}>
          About
        </h2>
      </motion.div>

      {/* Two-column body */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start"
      >
        {/* Left: bio + CV button */}
        <div>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--text)", marginBottom: "1.5rem" }}>
            <strong style={{ fontWeight: 700 }}>Years of experience in product design,</strong>
            working from Bangkok agencies to global startups. I&apos;ve designed for fintech,
            fitness platforms, a streaming service and a food tech app with over 2 million users.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--text)", marginBottom: "1.5rem" }}>
            <strong style={{ fontWeight: 700 }}>My process is research-first.</strong>
            I want to understand why users behave the way they do before I open Figma.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--text)", marginBottom: "1.5rem" }}>
            <strong style={{ fontWeight: 700 }}>I own the full design scope,</strong>
            from early research to shipped components. I like working in teams where decisions
            get debated properly, not just handed down.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--text)", marginBottom: "2rem" }}>
            Since 2018, I&apos;ve served on the
            <span style={{ color: "#4ade80", fontWeight: 600 }}>Awwwards Young Jury</span>,
            which keeps me honest about craft quality across the industry.
          </p>

          <a
            href="#"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.55rem 1.2rem", borderRadius: "9999px",
              border: "1px solid var(--border)", fontSize: "0.72rem",
              fontWeight: 700, letterSpacing: "0.08em", color: "var(--text)",
              textDecoration: "none", transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--muted)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)")}
          >
            VIEW CV
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>

        {/* Right: experience + awards + skills */}
        <div>
          {/* Experience */}
          <div style={{ marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", color: "var(--muted)", textTransform: "uppercase", marginBottom: "1rem" }}>
              Experience
            </p>
            {experience.map((e, i) => (
              <div
                key={i}
                style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "baseline", padding: "0.65rem 0",
                  borderBottom: "1px solid var(--border-sub)",
                  gap: "1rem",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text)", lineHeight: 1.3 }}>{e.company}</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--muted)" }}>{e.role}</div>
                </div>
                <span style={{ fontSize: "0.68rem", color: "var(--muted)", whiteSpace: "nowrap" }}>{e.period}</span>
              </div>
            ))}
          </div>

          {/* Awards */}
          <div style={{ marginBottom: "2rem" }}>
            <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", color: "var(--muted)", textTransform: "uppercase", marginBottom: "1rem" }}>
              Awards
            </p>
            {awards.map((a, i) => (
              <div
                key={i}
                style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "baseline", padding: "0.65rem 0",
                  borderBottom: "1px solid var(--border-sub)",
                  gap: "1rem",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text)", lineHeight: 1.3 }}>{a.title}</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--muted)" }}>{a.org}</div>
                </div>
                <span style={{ fontSize: "0.68rem", color: "var(--muted)", whiteSpace: "nowrap" }}>{a.date}</span>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", color: "var(--muted)", textTransform: "uppercase", marginBottom: "1rem" }}>
              Skills
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {SKILLS_LIST.map((s) => (
                <span
                  key={s.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.4rem 0.9rem",
                    borderRadius: "9999px",
                    border: "1px solid var(--border)",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    color: "var(--muted)",
                    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "default",
                    background: "rgba(255, 255, 255, 0.02)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.borderColor = "var(--main)";
                    (e.currentTarget as HTMLSpanElement).style.color = "var(--text)";
                    (e.currentTarget as HTMLSpanElement).style.transform = "translateY(-1px)";
                    (e.currentTarget as HTMLSpanElement).style.background = "rgba(168, 85, 247, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLSpanElement).style.color = "var(--muted)";
                    (e.currentTarget as HTMLSpanElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLSpanElement).style.background = "rgba(255, 255, 255, 0.02)";
                  }}
                >
                  {s.icon === "lock" ? (
                    <Lock size={13} style={{ flexShrink: 0 }} />
                  ) : (
                    <i className={s.icon} style={{ fontSize: "0.9rem", opacity: 0.9 }}></i>
                  )}
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
