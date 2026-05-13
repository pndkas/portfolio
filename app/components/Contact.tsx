"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const socials = [
    { label: "EMAIL", href: "mailto:pndkas@gmail.com" },
    { label: "LINKEDIN", href: "https://linkedin.com" },
    { label: "DRIBBBLE", href: "https://dribbble.com" },
    { label: "GUMROAD", href: "https://gumroad.com" },
  ];

  return (
    <section id="contact" ref={ref} className="w-full px-5 md:px-8 py-20 md:py-32">
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", color: "#444", textTransform: "uppercase", marginBottom: "0.8rem" }}
      >
        Get in touch
      </motion.p>

      {/* Big heading — clickable mailto */}
      <motion.a
        href="mailto:pndkas@gmail.com"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          display: "block",
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: "clamp(3rem, 8vw, 5rem)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          lineHeight: 0.9,
          color: "var(--text)",
          textDecoration: "none",
          marginBottom: "4rem",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.7")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
      >
        Say hi!<br />
        Let&apos;s talk
        <svg
          style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "0.2rem" }}
          width="clamp(2rem,6vw,4.5rem)"
          height="clamp(2rem,6vw,4.5rem)"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </motion.a>

      {/* Bottom bar: email + location | social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{
          borderTop: "1px solid #1c1c1c",
          padding: "1.5rem 0 2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Left */}
        <div>
          <p style={{ fontSize: "0.82rem", color: "var(--text)", fontWeight: 500, marginBottom: "0.1rem" }}>
            pndkas@gmail.com
          </p>
          <p style={{ fontSize: "0.75rem", color: "#555" }}>Bangkok, Thailand</p>
        </div>

        {/* Right: social links */}
        <div style={{ display: "flex", gap: "2rem" }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#555",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--main)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#555")}
            >
              {s.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
