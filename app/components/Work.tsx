"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const projects = [
  {
    id: "01",
    client: "Personal Project / 2026",
    title: "E-Commerce Platform Redesign",
    tags: ["React.js", "NextJS", "TailwindCSS", "Zustand"],
    links: [
      { url: "https://github.com", label: "Github" },
      { url: "https://example.com", label: "Live site" }
    ],
    image: "/project-1.png",
    wip: false,
  },
  {
    id: "02",
    client: "Freelance / 2025",
    title: "Real-time Chat Application",
    tags: ["Typescript", "Node.js", "Socket.io", "React.js"],
    links: [
      { url: "https://github.com", label: "Github" },
    ],
    image: "/project-2.png",
    wip: true,
  },

];

const TECH_ICONS: Record<string, string> = {
  "Javascript": "devicon-javascript-plain colored",
  "Typescript": "devicon-typescript-plain colored",
  "React.js": "devicon-react-original colored",
  "NextJS": "devicon-nextjs-plain",
  "TailwindCSS": "devicon-tailwindcss-original colored",
  "Zustand": "devicon-react-original colored",
  "Node.js": "devicon-nodejs-plain colored",
  "Socket.io": "devicon-socketio-original",
};

const cardFade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} className="w-full px-5 md:px-8 py-16 md:py-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: "2rem" }}
      >
        <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", color: "var(--muted)", textTransform: "uppercase", marginBottom: "0.6rem" }}>
          Selected Projects
        </p>
        <h2 style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "clamp(3rem, 8vw, 5rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 0.9, color: "var(--text)" }}>
          Work
        </h2>
      </motion.div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid var(--border-sub)", marginBottom: "1.5rem" }} />

      {/* Project cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            variants={cardFade}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            transition={{ delay: i * 0.15 }}
            className="flex flex-col md:grid md:grid-cols-2"
            style={{
              gap: "0",
              background: "var(--surface)",
              border: "1px solid var(--border-sub)",
              borderRadius: "0.75rem",
              overflow: "hidden",
            }}
          >
            {/* Left: text (bottom on mobile) */}
            <div className="order-2 md:order-1 flex flex-col justify-between p-6 md:p-8" style={{ minHeight: "300px" }}>
              {/* Top */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "var(--muted)" }}>{p.id}</span>
                  {p.wip && (
                    <span style={{
                      display: "inline-flex", alignItems: "center", gap: "0.4rem",
                      padding: "0.2rem 0.7rem", borderRadius: "9999px", border: "1px solid #c88a00",
                      fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.08em", color: "#c88a00",
                    }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#c88a00" }} />
                      WORK IN PROGRESS
                    </span>
                  )}
                </div>

                <p style={{ fontSize: "0.68rem", color: "var(--muted)", marginBottom: "0.5rem" }}>{p.client}</p>

                <h3 style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
                  fontWeight: 700,
                  lineHeight: 1.25,
                  color: "var(--text)",
                  marginBottom: "0.9rem",
                  whiteSpace: "pre-line",
                }}>
                  {p.title}
                </h3>

                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  {p.tags.map((tag) => (
                    <span key={tag}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "0.3rem",
                        padding: "0.25rem 0.7rem", borderRadius: "9999px",
                        border: "1px solid var(--border)", fontSize: "0.62rem",
                        fontWeight: 700, letterSpacing: "0.05em", color: "var(--muted)",
                        background: "rgba(255,255,255,0.02)",
                        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                      onMouseEnter={(e) => {
                        if (window.matchMedia("(hover: none)").matches) return;
                        const span = e.currentTarget as HTMLSpanElement;
                        span.style.borderColor = "var(--main)";
                        span.style.color = "var(--text)";
                        span.style.transform = "translateY(-2px)";
                        span.style.background = "rgba(168, 85, 247, 0.05)";
                        const icon = span.querySelector('i');
                        if (icon) icon.style.filter = "grayscale(0)";
                      }}
                      onMouseLeave={(e) => {
                        const span = e.currentTarget as HTMLSpanElement;
                        span.style.borderColor = "var(--border)";
                        span.style.color = "var(--muted)";
                        span.style.transform = "translateY(0)";
                        span.style.background = "rgba(255,255,255,0.02)";
                        const icon = span.querySelector('i');
                        if (icon) icon.style.filter = "grayscale(1)";
                      }}
                    >
                      {TECH_ICONS[tag] && (
                        <i className={`${TECH_ICONS[tag]} text-[0.75rem]`} style={{ filter: "grayscale(1)", transition: "filter 0.2s" }}></i>
                      )}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
                {p.links?.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "0.4rem",
                      padding: "0.6rem 1.2rem", borderRadius: "9999px",
                      background: "var(--surface)",
                      border: "1px solid",
                      borderColor: "var(--text)",
                      color: "var(--text)",
                      fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em",
                      textDecoration: "none",
                      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onMouseEnter={(e) => {
                      if (window.matchMedia("(hover: none)").matches) return;
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--main)";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(168, 85, 247, 0.05)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--text)";
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLAnchorElement).style.background = "var(--surface)";
                    }}
                  >
                    {link.label}
                    {link.label === "Github" && (
                      <i className="devicon-github-original" style={{ fontSize: "0.85rem" }}></i>
                    )}
                    {link.label === "Live site" && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: image (top on mobile) */}
            <div className="order-1 md:order-2 relative w-full h-[300px] md:h-auto overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Arrow */}
              <div style={{
                position: "absolute", bottom: "1rem", right: "1rem",
                width: 32, height: 32, borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)",
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* "Looking for more?" footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center flex-wrap gap-4"
        style={{
          marginTop: "1.5rem",
          padding: "1.25rem 1.5rem",
          borderBottom: "1px solid var(--border-sub)",
        }}
      >
        <div>
          <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.2rem" }}>
            Looking for more?
          </p>
          <p style={{ fontSize: "0.78rem", color: "var(--muted)" }}>
            More project is available here, including a conversion project and a retention feature.
          </p>
        </div>
        <a
          href="/projects"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            padding: "0.5rem 1.1rem", borderRadius: "9999px",
            border: "1px solid var(--border)", fontSize: "0.7rem",
            fontWeight: 700, letterSpacing: "0.08em", color: "var(--text)",
            textDecoration: "none", whiteSpace: "nowrap",
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          onMouseEnter={(e) => {
            if (window.matchMedia("(hover: none)").matches) return;
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--main)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(168, 85, 247, 0.05)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
          }}
        >
          MORE PROJECT
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
