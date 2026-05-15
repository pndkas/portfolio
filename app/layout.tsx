import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Panida — Full-Stack Developer",
  description:
    "From crafting visual stories to engineering web solutions. Raised in Bangkok, I transitioned from a career in Video Editing, Graphic Design, and Digital Marketing to become a Full-Stack Developer—combining creative aesthetics with clean, scalable code.",
  openGraph: {
    title: "Panida — Full-Stack Developer",
    description: "Full-Stack Developer based in Bangkok, Thailand.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${syne.variable}`} data-theme="dark">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
