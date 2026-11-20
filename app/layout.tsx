import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mayur Lamka — Full Stack Developer Portfolio",
  description:
    "Portfolio of Mayur Lamka, Full Stack Developer specializing in React, Node.js, Express, MySQL, MongoDB, and Docker. Explore projects, DSA achievements, GitHub and LinkedIn links.",
  keywords: [
    "Mayur Lamka",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Express.js",
    "MySQL",
    "MongoDB",
    "Docker",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Mayur Lamka", url: "https://github.com/MayurLamka" }],
  openGraph: {
    title: "Mayur Lamka — Full Stack Developer Portfolio",
    description:
      "I design and build user-centered digital experiences that are simple, smart, and impactful.",
    type: "website",
    url: "https://github.com/MayurLamka",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0c0806] text-neutral-100 min-h-screen selection:bg-orange-500/30 selection:text-orange-200">
        {children}
      </body>
    </html>
  );
}
