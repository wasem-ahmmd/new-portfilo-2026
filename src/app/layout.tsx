import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wasim Ahmed — Full-Stack Developer",
  description:
    "Full-Stack Developer crafting clean, scalable, and delightful web experiences with React, Next.js, and TypeScript. Available for new projects.",
  keywords: [
    "Wasim Ahmed",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Frontend Engineer",
  ],
  authors: [{ name: "Wasim Ahmed" }],
  openGraph: {
    title: "Wasim Ahmed — Full-Stack Developer",
    description:
      "Building digital products that people love. React · Next.js · TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
