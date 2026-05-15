"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  inView?: boolean;
}

export default function SectionHeader({ subtitle, title, inView = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: "2rem" }}
    >
      <p style={{ 
        fontSize: "0.65rem", 
        fontWeight: 700, 
        letterSpacing: "0.14em", 
        color: "var(--muted)", 
        textTransform: "uppercase", 
        marginBottom: "0.6rem" 
      }}>
        {subtitle}
      </p>
      <h2 style={{ 
        fontFamily: "var(--font-syne), sans-serif", 
        fontSize: "clamp(3rem, 8vw, 5rem)", 
        fontWeight: 900, 
        letterSpacing: "-0.03em", 
        lineHeight: 0.9, 
        color: "var(--text)" 
      }}>
        {title}
      </h2>
    </motion.div>
  );
}
