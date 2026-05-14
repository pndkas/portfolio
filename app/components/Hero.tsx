"use client";

import { motion, Variants } from "framer-motion";

const TICKER_ITEMS = [
  "PRODUCT STRATEGY",
  "GOOD VIBES",
  "SYSTEMS THINKING",
  "DESIGN SYSTEMS",
  "0→1 PRODUCT WORK",
  "PRODUCT STRATEGY",
  "GOOD VIBES",
  "SYSTEMS THINKING",
  "DESIGN SYSTEMS",
  "0→1 PRODUCT WORK",
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes pulse-green {
          0%,100% { opacity:1; box-shadow: 0 0 0 0 rgba(74,222,128,0.5); }
          50%      { opacity:0.7; box-shadow: 0 0 0 4px rgba(74,222,128,0); }
        }
        @keyframes scroll-bar {
          0%   { transform: scaleY(0) translateY(0); transform-origin: top; }
          50%  { transform: scaleY(1) translateY(0); transform-origin: top; }
          51%  { transform: scaleY(1) translateY(0); transform-origin: bottom; }
          100% { transform: scaleY(0) translateY(0); transform-origin: bottom; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>


      {/* ── Hero section ── */}
      <section
        id="hero"
        className="w-full relative flex flex-col justify-end min-h-screen px-5 md:px-8 pb-10"
      >
        {/* ── SCROLL indicator (Absolute inside Hero) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          style={{
            position: "absolute",
            right: "1.75rem",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.6rem",
            zIndex: 50,
          }}
        >
          {/* Animated line (Purple) */}
          <div style={{ width: 1, height: 56, background: "rgba(168, 85, 247, 0.15)", position: "relative", overflow: "hidden" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "var(--main)",
                animation: "scroll-bar 2.2s ease-in-out infinite",
                transformOrigin: "top",
              }}
            />
          </div>
          {/* Vertical text */}
          <span
            style={{
              fontSize: "0.55rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "var(--muted)",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{ display: "flex", flexDirection: "column", gap: "0" }}
        >
          {/* Role label */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "0.6rem",
            }}
          >
            Full-Stack Developer
          </motion.p>

          {/* Giant name */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "clamp(3.5rem, 12vw, 9rem)",
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: "2.5rem",
            }}
          >
            Panida<br />
            Khoei-<br />
            arsa
          </motion.h1>

          {/* Bottom row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-start md:items-end flex-wrap gap-6"
          >
            {/* Bio text */}
            <p style={{ maxWidth: "560px", fontSize: "0.92rem", color: "var(--muted)", lineHeight: 1.7 }}>
              “Highly motivated Fullstack Developer with a background in creative design and digital marketing. A self-driven learner with a goal-oriented mindset, dedicated to mastering new technologies and libraries to deliver high-quality user experiences. Proven ability to handle challenges and committed to continuous self-improvement in every project.”
            </p>

            {/* Right badges */}
            <div className="flex flex-col items-start md:items-end gap-[0.55rem]">
              {/* Available for work */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  padding: "0.45rem 1.1rem",
                  borderRadius: "9999px",
                  border: "1px solid var(--border)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "var(--text2)",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "100%",
                    background: "#00ff15",
                    flexShrink: 0,
                    animation: "pulse-green 2s ease-in-out infinite",
                  }}
                />
                Available for work
              </div>

              {/* Location */}
              <div
                style={{
                  padding: "0.45rem 1.1rem",
                  borderRadius: "9999px",
                  border: "1px solid var(--border)",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "var(--muted)",
                  textTransform: "uppercase",
                }}
              >
                Bangkok, Thailand
              </div>

              {/* Award/Extra */}
              <div
                style={{
                  padding: "0.45rem 1.1rem",
                  borderRadius: "9999px",
                  border: "1px solid var(--border)",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "var(--muted)",
                  textTransform: "uppercase",
                }}
              >
                Awwwards Young Jury
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Marquee ticker ── */}
      < div
        style={{
          overflow: "hidden",
          borderTop: "1px solid var(--border-sub)",
          borderBottom: "1px solid var(--border-sub)",
          padding: "0.85rem 0",
          background: "var(--bg)",
        }
        }
      >
        <div
          style={{
            display: "flex",
            gap: "0",
            width: "max-content",
            animation: "marquee 22s linear infinite",
          }}
        >
          {TICKER_ITEMS.map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "var(--cursor)",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                padding: "0 2.5rem",
              }}
            >
              {item}
              <span style={{ marginLeft: "2.5rem", color: "var(--cursor)" }}>•</span>
            </span>
          ))}
        </div>
      </div >
    </>
  );
}
