export default function Footer() {
  return (
    <footer
      className="w-full px-5 md:px-8 py-6 md:py-8"
      style={{
        borderTop: "1px solid var(--border-sub)"
      }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.72rem", color: "var(--muted)" }}>
          © 2026 Panida Khoei-arsa · Full-Stack Developer
        </p>
      </div>
    </footer>
  );
}
