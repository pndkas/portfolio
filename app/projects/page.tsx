"use client";

import { motion, Variants } from "framer-motion";
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";
import { ProjectCard } from "../components/Project";
import { projects, TECH_ICONS } from "../constants/projects";





export default function ProjectsPage() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main className="w-full px-5 md:px-8 py-24 md:py-32 min-h-screen bg-[var(--bg)]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: "3rem" }}
        >
          <h1 style={{ fontFamily: "var(--font-syne), sans-serif", fontSize: "clamp(3.5rem, 8vw, 6rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 0.9, color: "var(--text)" }}>
            All Projects
          </h1>
          <p style={{ marginTop: "1rem", fontSize: "1rem", color: "var(--muted)", maxWidth: "500px" }}>
            A complete archive of things I've built, ranging from web applications to experiments.
          </p>
        </motion.div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid var(--border-sub)", marginBottom: "2rem" }} />

        {/* Project cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} delayOffset={0.2} />
          ))}
        </div>
      </main>
    </>
  );
}
