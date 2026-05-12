"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ROLES = ["Full-Stack Dev", "UI/UX", "React", "Problem Solver"];

type SkillItem = {
  name: string;
  slug?: string;
  color?: string;
  emoji?: string;
};

const SKILLS: SkillItem[] = [
  // Dev stack
  { name: "Next.js", slug: "nextdotjs", color: "000000" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "React", slug: "react", color: "D1701F" },
  { name: "Node.js", slug: "nodedotjs", color: "D1701F" },
  { name: "TailwindCSS", slug: "tailwindcss", color: "D1701F" },
  { name: "Figma", slug: "figma", color: "F24E1E" },
  { name: "Go", slug: "go", color: "00ADD8" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "React Native", slug: "react", color: "D1701F" },
  { name: "Expo", slug: "expo", color: "000020" },
  // AI / Services
  { name: "AI Marketing", emoji: "🤖" },
  { name: "AI Image Generation", emoji: "🎨" },
  { name: "AI Video Generation", emoji: "🎬" },
  { name: "AI Call Agent", emoji: "📞" },
  { name: "AI Computer Agent", emoji: "🧠" },
  { name: "AI Influencer", emoji: "⭐" },
  { name: "Business Growth with AI", emoji: "📈" },
  // Marketing
  { name: "Digital Marketing", emoji: "📱" },
  { name: "SEO", emoji: "🔍" },
  { name: "SMS Marketing", emoji: "💬" },
  { name: "Email Marketing", emoji: "✉️" },
  // Teaching
  { name: "Coding Teacher", emoji: "👨‍🏫" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Mouse-tracked spotlight
  useEffect(() => {
    const section = sectionRef.current;
    const spotlight = spotlightRef.current;
    if (!section || !spotlight) return;
    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlight.style.background = `radial-gradient(circle 400px at ${x}px ${y}px, rgba(209, 112, 31, 0.08), transparent 70%)`;
    };
    section.addEventListener("mousemove", onMove);
    return () => section.removeEventListener("mousemove", onMove);
  }, []);

  // Typewriter effect cycling through ROLES
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          70,
        );
      } else {
        timeout = setTimeout(() => setPhase("pause"), 1400);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), 200);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length - 1)),
          35,
        );
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIndex]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center bg-[#f7f6f2] pt-24 pb-20 overflow-hidden"
    >
      {/* Mouse-tracked spotlight */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none transition-[background] duration-200"
      />
      {/* === Background === */}
      {/* Soft warm gradient base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, #ffffff 0%, transparent 55%), radial-gradient(circle at 85% 80%, #efece4 0%, transparent 50%)",
        }}
      />
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#bdbab2 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      {/* === Content === */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* ---------- LEFT: Text ---------- */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status pill */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D1701F]/10 border border-[#D1701F]/20 text-[#D1701F] text-[11px] font-semibold mb-6 shadow-sm hero-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#D1701F] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D1701F]" />
              </span>
              <span className="tracking-wider">AVAILABLE FOR NEW PROJECTS</span>
            </div>

            {/* Heading */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold mb-5 text-gray-900 tracking-tight leading-[1.05] hero-fade-in"
              style={{ animationDelay: "0.25s" }}
            >
              Crafting{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-linear-to-r from-[#D1701F] via-[#000000] to-[#D1701F] bg-clip-text text-transparent bg-size-[200%_100%] animate-shimmer">
                  digital products
                </span>
                <span
                  className="absolute left-0 right-0 bottom-1 h-3 md:h-4 bg-[#D1701F]/15 z-0"
                  style={{ transform: "skewX(-8deg)" }}
                />
              </span>
              .
            </h1>

            {/* Sub line + typewriter role */}
            <p
              className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 hero-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              I&apos;m{" "}
              <span className="font-semibold text-gray-900">Waseem Ahmed</span>{" "}
             {" "}
              <span className="font-semibold bg-linear-to-r from-[#D1701F] to-[#000000] bg-clip-text text-transparent ">
                {" "}
                Founder of Eznah AI & Dev{" "}
              </span>  — A{" "}
              <span className="font-mono font-semibold text-[#D1701F] inline-flex items-center">
                <span className="text-[#D1701F]/50">{"<"}</span>
                {displayed || "\u00A0"}
                <span className="inline-block w-[2px] h-4 md:h-5 bg-[#D1701F] align-middle mx-0.5 animate-pulse" />
                <span className="text-[#D1701F]/50">{"/>"}</span>
              </span>{" "}
              turning ideas into clean, modern experiences.
            </p>

            {/* CTA — Download CV */}
            <div
              className="flex justify-center lg:justify-start mb-10 hero-fade-in"
              style={{ animationDelay: "0.55s" }}
            >
              <a
                href="/wasim-ahmed-cv.pdf"
                download
                className="group inline-flex items-center gap-2.5 bg-gray-900 hover:bg-black text-white font-semibold text-sm px-6 h-12 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:scale-[1.03] transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
                Download My CV
              </a>
            </div>
          </div>

          {/* ---------- RIGHT: Image card ---------- */}
          <div
            className="lg:col-span-5 flex justify-center lg:justify-end hero-fade-in"
            style={{ animationDelay: "0.35s" }}
          >
            <ProfileImage />
          </div>
        </div>

        {/* === Skills marquee — full-width scrolling bar === */}
        <div
          className="mt-14 lg:mt-16 hero-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-500 mb-5 flex items-center gap-3 justify-center">
            <span className="w-8 h-px bg-gray-300" />
            What I Do
            <span className="w-8 h-px bg-gray-300" />
          </p>
          <SkillsMarquee />
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group hidden md:flex"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-1.5">
          <span className="w-1 h-2 rounded-full bg-current animate-scroll-dot" />
        </div>
      </Link>

      {/* Animations */}
      <style jsx>{`
        @keyframes hero-fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        :global(.hero-fade-in) {
          opacity: 0;
          animation: hero-fade-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes scroll-dot {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          80% {
            transform: translateY(10px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 0;
          }
        }
        :global(.animate-scroll-dot) {
          animation: scroll-dot 1.8s ease-in-out infinite;
        }
        @keyframes float-badge {
          0%,
          100% {
            transform: translateY(0) rotate(var(--rot, 0deg));
          }
          50% {
            transform: translateY(-14px) rotate(var(--rot, 0deg));
          }
        }
        :global(.float-badge) {
          animation: float-badge 6s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        :global(.animate-shimmer) {
          animation: shimmer 4s linear infinite;
        }
        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }
        :global(.animate-glow-pulse) {
          animation: glow-pulse 4s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        :global(.animate-spin-slow) {
          animation: spin-slow 6s linear infinite;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }
        @keyframes marquee-reverse {
          from {
            transform: translateX(-33.333%);
          }
          to {
            transform: translateX(0);
          }
        }
        :global(.marquee-track) {
          animation: marquee 35s linear infinite;
          width: max-content;
        }
        :global(.marquee-track-reverse) {
          animation: marquee-reverse 40s linear infinite;
          width: max-content;
        }
        :global(.marquee-track:hover),
        :global(.marquee-track-reverse:hover) {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

/* ---------- Subcomponents ---------- */

function ProfileImage() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt on mouse move
  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotY = x * 12;
      const rotX = -y * 12;
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
    };
    const onLeave = () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="group relative w-[260px] sm:w-[300px] md:w-[340px] lg:w-full lg:max-w-[380px] aspect-square"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Indigo glow halo — intensifies on hover */}
      <div className="absolute inset-0 rounded-full bg-[#D1701F]/30 blur-3xl animate-glow-pulse -z-20 group-hover:bg-[#D1701F]/50 transition-colors duration-700" />

      {/* Background offset square — indigo gradient, reveals on tilt */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-linear-to-br from-[#D1701F] to-[#000000] opacity-90 -z-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500" />

      {/* Main image card with 3D tilt */}
      <div
        ref={cardRef}
        className="relative w-full h-full rounded-3xl overflow-hidden bg-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-gray-200 transition-transform duration-200 ease-out will-change-transform"
      >
        {/* Replace this src with your own photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/wasim.jpeg"
          alt="Wasim Ahmed — Full-Stack Developer"
          className="w-full h-full object-cover grayscale contrast-[1.05] transition-all duration-900 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105"
        />
        {/* Subtle inner light reflection */}
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/0 to-white/10 pointer-events-none" />
      </div>

      {/* Floating experience card — bottom right */}
      <div
        className="absolute -bottom-4 -right-4 sm:-right-6 bg-white border border-gray-200 rounded-2xl px-3 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center gap-2.5 float-badge"
        style={{ animationDelay: "1.4s" }}
      >
        <div className="w-9 h-9 rounded-xl bg-gray-900 flex items-center justify-center text-white">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div className="leading-tight">
          <div className="text-sm font-bold text-gray-900">Fast Delivery</div>
          <div className="text-[10px] text-gray-500 font-medium">
            On time, every time
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillPill({ skill }: { skill: SkillItem }) {
  return (
    <div className="group flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full whitespace-nowrap shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-[#D1701F] hover:shadow-[0_4px_14px_rgba(209,112,31,0.18)] hover:-translate-y-0.5 transition-all duration-300">
      {skill.slug ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
          alt={skill.name}
          className="w-4 h-4"
          loading="lazy"
        />
      ) : (
        <span className="text-base leading-none">{skill.emoji}</span>
      )}
      <span className="text-xs font-semibold text-gray-700 group-hover:text-[#D1701F] transition-colors">
        {skill.name}
      </span>
    </div>
  );
}

function SkillsMarquee() {
  // Split into two rows for visual balance + opposite directions
  const half = Math.ceil(SKILLS.length / 2);
  const row1 = SKILLS.slice(0, half);
  const row2 = SKILLS.slice(half);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      {/* Row 1 — scroll left */}
      <div className="flex gap-3 marquee-track py-2">
        {[...row1, ...row1, ...row1].map((s, i) => (
          <SkillPill key={`r1-${i}`} skill={s} />
        ))}
      </div>
      {/* Row 2 — scroll right */}
      <div className="flex gap-3 marquee-track-reverse py-2 mt-2">
        {[...row2, ...row2, ...row2].map((s, i) => (
          <SkillPill key={`r2-${i}`} skill={s} />
        ))}
      </div>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  // Parse leading number for count-up animation
  const match = number.match(/^(\d+)(.*)$/);
  const targetNum = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : number;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!targetNum) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setCount(Math.round(targetNum * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [targetNum]);

  return (
    <div className="text-center lg:text-left">
      <div className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight tabular-nums">
        {count}
        <span className="text-[#D1701F]">{suffix}</span>
      </div>
      <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mt-1">
        {label}
      </div>
    </div>
  );
}
