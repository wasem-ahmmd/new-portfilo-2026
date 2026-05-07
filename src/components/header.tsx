"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-2xl shadow-[0_2px_30px_rgba(0,0,0,0.08)] border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo — monogram + wordmark */}
          <Link href="#home" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 rounded-xl bg-linear-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center shadow-[0_4px_14px_rgba(79,70,229,0.35)] group-hover:shadow-[0_6px_22px_rgba(79,70,229,0.5)] group-hover:scale-105 transition-all duration-300 overflow-hidden">
              {/* subtle inner highlight */}
              <span className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/20 to-transparent" />
              <span className="relative text-white font-bold text-lg leading-none tracking-tight">
                W
              </span>
              {/* accent dot */}
              <span className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-white/80" />
            </div>
            <div className="flex flex-col leading-none gap-1">
              <span className="text-[15px] font-bold text-gray-900 tracking-tight">
                Wasim<span className="text-[#4F46E5]">.</span>
              </span>
              <span className="text-[9px] font-semibold text-gray-500 tracking-[0.25em] uppercase">
                Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - pill style */}
          <div className="hidden md:flex items-center gap-0.5 bg-white/70 backdrop-blur-xl border border-gray-200 rounded-full px-2 py-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-[#4F46E5]"
                      : "text-gray-600 hover:text-[#4F46E5]"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-[#4F46E5]/10 rounded-full z-0"></span>
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button — Hire Me */}
          <Link href="#contact" className="hidden md:block group">
            <button className="relative overflow-hidden bg-linear-to-br from-[#4F46E5] to-[#7C3AED] text-white font-semibold text-sm rounded-full pl-5 pr-2 py-2 flex items-center gap-3 shadow-[0_4px_14px_rgba(79,70,229,0.35)] hover:shadow-[0_8px_24px_rgba(79,70,229,0.5)] hover:scale-[1.03] transition-all duration-300">
              {/* Shimmer overlay */}
              <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10">Hire Me</span>
              <span className="relative z-10 w-7 h-7 rounded-full bg-white/95 flex items-center justify-center text-[#4F46E5] group-hover:-rotate-45 transition-transform duration-300">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/80 backdrop-blur-xl border border-gray-200 text-gray-700 hover:text-gray-900 hover:border-gray-400 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div className="bg-white/90 backdrop-blur-2xl rounded-2xl border border-gray-200 p-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)] space-y-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#4F46E5]/10 text-[#4F46E5]"
                      : "text-gray-600 hover:bg-[#4F46E5]/10 hover:text-[#4F46E5] hover:translate-x-1"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="#contact" onClick={() => setIsMobileOpen(false)}>
              <Button className="w-full bg-linear-to-br from-[#4F46E5] to-[#7C3AED] hover:opacity-95 text-white font-semibold rounded-xl mt-2 shadow-[0_4px_14px_rgba(79,70,229,0.35)] hover:scale-[1.02] transition-all duration-300">
                Hire Me
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
