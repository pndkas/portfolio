"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lock } from "lucide-react";
import { SKILLS_DATA } from "../constants/skills";
import SectionHeader from "./ui/SectionHeader";

const experience = [
  { company: "Freelance", role: "Video Editor/ Graphic Design/ Digital Marketing", period: "JUL 2021 - DEC 2025" },
  { company: "Miss lense", role: "Video Editor/ Graphic Design", period: "2021" },
  { company: "Give Me Five", role: "Video Editor/ Graphic Design", period: "2021" },
  { company: "Ds Organizing", role: "Video Editor/ Graphic Design", period: "2020-2021" },
  { company: "Keaes Academics", role: "Video Editor/ Graphic Design", period: "2019-2020" },
];


export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="w-full px-5 md:px-8 py-16 md:py-24">
      {/* Section header */}
      <SectionHeader subtitle="My Story" title="About" inView={inView} />

      {/* Divider */}
      <div style={{ borderTop: "1px solid var(--border-sub)", marginBottom: "1.5rem" }} />

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
            <strong style={{ fontWeight: 700 }}>My approach to design is inherently data-driven and results-oriented.</strong>
            I blend user experience with marketing technicalities to bridge the gap between business goals and user engagement.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--text)", marginBottom: "1.5rem" }}>
            I specialize in crafting high-converting digital touchpoints, from interactive LINE Rich Menus to targeted digital assets. My design decisions are never based on guesswork—I integrate Facebook Pixel and data tracking to deeply understand conversion behavior, ensuring every visual element serves a measurable purpose.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--text)", marginBottom: "1.5rem" }}>
            I own the end-to-end execution of growth design. This includes managing Facebook Ads, setting up automated Messenger workflows to streamline user interactions, and collaborating directly with clients to translate their core requirements into high-performing technical setups.
          </p>

          <a
            href="#"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.55rem 1.2rem", borderRadius: "9999px",
              border: "1px solid var(--border)", fontSize: "0.72rem",
              fontWeight: 700, letterSpacing: "0.08em", color: "var(--text)",
              textDecoration: "none", transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
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

          {/* Skills */}
          <div>
            <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", color: "var(--muted)", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Skills
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
              {SKILLS_DATA.map((cat) => (
                <div key={cat.category}>
                  <p style={{ fontSize: "0.65rem", fontWeight: 600, color: "var(--muted)", marginBottom: "0.75rem", opacity: 0.8 }}>
                    {cat.category}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                    {cat.skills.map((s) => (
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
                          if (window.matchMedia("(hover: none)").matches) return;
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
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
