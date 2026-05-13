"use client";

import { useEffect, useState } from "react";
import { motion, Transition } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

/* Snappy spring — same feel as dvdrod */
const spring: Transition = { type: "spring" as const, stiffness: 420, damping: 38, mass: 0.85 };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Mobile detection ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── Apply theme class ── */
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    root.classList.toggle("light", !isDark);
  }, [isDark]);

  /* ── Design tokens ── */
  const border = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.15)";
  const muted = isDark ? "#999" : "#444";
  const glass = isDark ? "rgba(18,18,18,0.78)" : "rgba(255,255,255,0.78)";
  const shadow = isDark
    ? "0 8px 32px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.06)"
    : "0 8px 32px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(0,0,0,0.06)";

  /* ── Shared styles ── */
  const logoStyle: React.CSSProperties = {
    fontFamily: "var(--font-syne), sans-serif",
    fontWeight: 900,
    letterSpacing: "-0.04em",
    fontSize: "clamp(0.75rem, 2.5vw, 0.9rem)",
    color: "var(--text)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    flexShrink: 0,
  };

  const linkStyle: React.CSSProperties = {
    fontSize: "0.62rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    color: muted,
    textDecoration: "none",
    padding: "0.38rem 0.7rem",
    borderRadius: "9999px",
    transition: "color 0.15s",
    whiteSpace: "nowrap",
  };

  return (
    /*
     * Outer shell: full-viewport strip, pointer-events none so clicks
     * pass through the transparent areas.
     */
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      {/*
       * The nav pill itself. `layout` makes Framer Motion interpolate
       * every CSS change (size, position, border-radius, padding) as a
       * smooth spring animation automatically.
       */}
      <motion.nav
        layout
        transition={spring as any}
        style={{
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",

          /* Scrolled: wide pill desktop, compact pill mobile */
          width: scrolled
            ? isMobile
              ? "clamp(260px, 88vw, 340px)"
              : "clamp(420px, 48vw, 660px)"
            : "100%",
          justifyContent: scrolled ? "space-between" : "flex-start",

          padding: scrolled
            ? isMobile
              ? "0.35rem 0.4rem"
              : "0.45rem 0.55rem"
            : "0.75rem clamp(0.75rem, 4vw, 2rem)",

          /* Float up when scrolled */
          marginTop: scrolled ? (isMobile ? "0.6rem" : "0.8rem") : "0",

          /* Glass pill only when scrolled */
          background: scrolled ? glass : "transparent",
          backdropFilter: scrolled ? "blur(22px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(22px) saturate(180%)" : "none",
          borderRadius: scrolled ? "9999px" : "0",
          boxShadow: scrolled ? shadow : "none",
        }}
      >
        {/* ── LOGO (animates from far left → left-side of pill) ── */}
        <motion.a
          layout
          transition={spring as any}
          href="#"
          style={{
            ...logoStyle,
            fontSize: isMobile
              ? "clamp(0.7rem, 3.5vw, 0.78rem)"
              : "clamp(0.75rem, 2.5vw, 0.9rem)",
            /* space-between handles alignment; just add inner padding when in pill */
            marginRight: scrolled ? "0" : "auto",
            padding: scrolled
              ? isMobile
                ? "0.25rem 0.65rem"
                : "0.32rem 1rem"
              : "0",
          }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          panida
        </motion.a>


        {/* ── NAV GROUP (animates from far right → right-side of pill) ── */}
        <motion.div
          layout
          transition={spring as any}
          style={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            gap: "0.5rem",
            /* space-between in parent handles alignment; auto-margin for unscrolled only */
            marginLeft: scrolled ? "0" : "auto",
          }}
        >
          {/* Nav links — desktop only */}
          <div
            className="hidden md:flex items-center"
            style={{ gap: "0" }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={linkStyle}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(l.href)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--main)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = muted)
                }
              >
                {l.label}
              </a>
            ))}
          </div>


          {/* Theme toggle button */}
          <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.9 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? "0.35rem" : "0.45rem",
              padding: isMobile ? "0.25rem 0.55rem" : "0.32rem 0.75rem",
              borderRadius: "9999px",
              border: `1px solid ${border}`,
              background: "transparent",
              fontSize: isMobile ? "0.52rem" : "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: muted,
              cursor: "pointer",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            <div style={{ position: "relative", width: 12, height: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 45 : 0, opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
                style={{ position: "absolute" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </motion.div>
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? -45 : 0, opacity: isDark ? 0 : 1, scale: isDark ? 0.5 : 1 }}
                transition={{ duration: 0.3 }}
                style={{ position: "absolute" }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              </motion.div>
            </div>
            {isDark ? "LIGHT" : "DARK"}
          </motion.button>
        </motion.div>
      </motion.nav>
    </div>
  );
}
