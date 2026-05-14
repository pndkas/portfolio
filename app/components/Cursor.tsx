"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf = 0;

    const CLICKABLE = "a, button, [role='button'], input, select, textarea, label, [tabindex]";

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
      }

      // Swap: show pointer hand and hide dot/ring on clickable elements
      const target = e.target as Element;
      const isClickable = !!target?.closest(CLICKABLE);

      document.body.style.cursor = isClickable ? "pointer" : "none";

      const opacity = isClickable ? "0" : "1";
      if (dotRef.current) dotRef.current.style.opacity = opacity;
      if (ringRef.current) ringRef.current.style.opacity = isClickable ? "0" : "0.3";
    };

    const loop = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.style.cursor = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed", top: 0, left: 0,
          width: 6, height: 6, borderRadius: "50%",
          background: "var(--cursor)",
          pointerEvents: "none", zIndex: 9999,
          willChange: "transform",
          transition: "opacity 0.15s ease",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed", top: 0, left: 0,
          width: 32, height: 32, borderRadius: "50%",
          border: "1px solid var(--cursor)",
          opacity: 0.3,
          pointerEvents: "none", zIndex: 9998,
          willChange: "transform",
          transition: "opacity 0.15s ease",
        }}
      />
    </>
  );
}
