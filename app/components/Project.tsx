"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./ui/SectionHeader";

import { projects, TECH_ICONS } from "../constants/projects";

export default function Project() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} className="w-full px-5 md:px-8 py-16 md:py-24">
      {/* Section header */}
      <SectionHeader subtitle="Selected Project" title="Project" inView={inView} />

      {/* Divider */}
      <div style={{ borderTop: "1px solid var(--border-sub)", marginBottom: "1.5rem" }} />

      {/* Project cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {projects.slice(0, 3).map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} animate={inView ? "show" : "hidden"} />
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
