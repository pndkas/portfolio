"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    id: "01",
    client: "NeoTaste / 2025 – 2026",
    title: "Turning free trial users into\nloyal members",
    tags: ["RETENTION", "GAMIFICATION"],
    stats: [
      { value: "+22%", label: "Trial-to-paid\nconversion uplift" },
      { value: "~48%", label: "Quest completion rate" },
    ],
    image: "/project-1.png",
    wip: false,
  },
  {
    id: "02",
    client: "NeoTaste / 2025 – 2026",
    title: "Finding the right incentive to\ndouble referral volume",
    tags: ["GROWTH", "A/B TESTING"],
    stats: [
      { value: "+148%", label: "Total referral\nvolume growth" },
      { value: "5.2%", label: "Final referral rate\n(was 2.1%)" },
    ],
    image: "/project-2.png",
    wip: true,
  },
];

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
        <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", color: "#444", textTransform: "uppercase", marginBottom: "0.6rem" }}>
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
                    <span key={tag} style={{
                      padding: "0.2rem 0.65rem", borderRadius: "9999px",
                      border: "1px solid var(--border)", fontSize: "0.6rem",
                      fontWeight: 700, letterSpacing: "0.08em", color: "var(--muted)",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", gap: "2rem", marginTop: "1.5rem" }}>
                {p.stats.map((s) => (
                  <div key={s.value}>
                    <div style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, color: "var(--text)", lineHeight: 1.1 }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: "0.68rem", color: "var(--muted)", marginTop: "0.3rem", whiteSpace: "pre-line", lineHeight: 1.4 }}>
                      {s.label}
                    </div>
                  </div>
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
          borderTop: "1px solid var(--border-sub)",
        }}
      >
        <div>
          <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.2rem" }}>
            Looking for more?
          </p>
          <p style={{ fontSize: "0.78rem", color: "var(--muted)" }}>
            More work is available as a PDF, including a conversion project and a retention feature.
          </p>
        </div>
        <a
          href="#"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            padding: "0.5rem 1.1rem", borderRadius: "9999px",
            border: "1px solid var(--border)", fontSize: "0.7rem",
            fontWeight: 700, letterSpacing: "0.08em", color: "var(--text)",
            textDecoration: "none", whiteSpace: "nowrap",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--muted)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)")}
        >
          VIEW PDF
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
