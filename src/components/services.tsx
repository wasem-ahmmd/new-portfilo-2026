"use client";

import { useEffect, useRef, useState } from "react";

type TechSkill = {
  name: string;
  level: number;
  color: string;
};

type Service = {
  title: string;
  description: string;
  proficiency: number;
  icon: React.ReactNode;
  tech: TechSkill[];
};

const SERVICES: Service[] = [
  {
    title: "Full-Stack Development",
    description:
      "End-to-end web applications with React, Next.js, Node.js and modern databases.",
    proficiency: 95,
    tech: [
      { name: "React", level: 95, color: "#D1701F" },
      { name: "Next.js", level: 92, color: "#000000" },
      { name: "Node.js", level: 88, color: "#D1701F" },
      { name: "TypeScript", level: 90, color: "#000000" },
    ],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "UI / UX Design",
    description:
      "Clean, modern interfaces designed with user experience and accessibility in mind.",
    proficiency: 88,
    tech: [
      { name: "Figma", level: 90, color: "#D1701F" },
      { name: "TailwindCSS", level: 95, color: "#000000" },
      { name: "shadcn/ui", level: 85, color: "#D1701F" },
      { name: "Framer Motion", level: 78, color: "#000000" },
    ],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: "Responsive Web Design",
    description:
      "Pixel-perfect, mobile-first interfaces that look great on any device or screen.",
    proficiency: 92,
    tech: [
      { name: "HTML5", level: 95, color: "#D1701F" },
      { name: "CSS3", level: 92, color: "#000000" },
      { name: "TailwindCSS", level: 95, color: "#D1701F" },
      { name: "Bootstrap", level: 80, color: "#000000" },
    ],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "AI Integration",
    description:
      "Integrating LLMs, AI agents and automation into real-world products and workflows.",
    proficiency: 80,
    tech: [
      { name: "OpenAI API", level: 88, color: "#D1701F" },
      { name: "LangChain", level: 75, color: "#000000" },
      { name: "Vector DBs", level: 72, color: "#D1701F" },
      { name: "Prompt Engineering", level: 85, color: "#000000" },
    ],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "API Development",
    description:
      "RESTful & GraphQL APIs, authentication, third-party integrations and clean architecture.",
    proficiency: 90,
    tech: [
      { name: "REST APIs", level: 92, color: "#D1701F" },
      { name: "GraphQL", level: 78, color: "#000000" },
      { name: "Express", level: 88, color: "#D1701F" },
      { name: "PostgreSQL", level: 82, color: "#000000" },
    ],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Performance Optimization",
    description:
      "Lightning-fast page loads, code-splitting, image optimization and Core Web Vitals wins.",
    proficiency: 85,
    tech: [
      { name: "Core Web Vitals", level: 88, color: "#D1701F" },
      { name: "Lighthouse", level: 90, color: "#000000" },
      { name: "Code Splitting", level: 85, color: "#D1701F" },
      { name: "Caching", level: 80, color: "#000000" },
    ],
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 px-4 md:px-8 lg:px-12 bg-white overflow-hidden"
    >
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#D1701F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-[#000000]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D1701F]/10 border border-[#D1701F]/20 text-[#D1701F] text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D1701F]" />
            Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] mb-5">
            What I{" "}
            <span className="bg-linear-to-r from-[#D1701F] to-[#000000] bg-clip-text text-transparent">
              specialize
            </span>{" "}
            in.
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            From idea to launch &mdash; a focused toolkit of services I&apos;ve
            sharpened over years of shipping real products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          let start: number | null = null;
          const dur = 1400;
          const target = service.proficiency;
          const step = (ts: number) => {
            if (start === null) start = ts;
            const p = Math.min((ts - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setProgress(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [service.proficiency]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white border border-gray-200 rounded-2xl p-6 md:p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(209,112,31,0.15)] hover:-translate-y-1 hover:border-[#D1701F]/30 transition-all duration-500 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-linear-to-br from-[#D1701F]/10 to-[#000000]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />

      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-[#D1701F]/10 flex items-center justify-center mb-5 group-hover:bg-linear-to-br group-hover:from-[#D1701F] group-hover:to-[#000000] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_4px_14px_rgba(209,112,31,0)] group-hover:shadow-[0_8px_20px_rgba(209,112,31,0.35)]">
          <div className="w-6 h-6 text-[#D1701F] group-hover:text-white transition-colors duration-300">
            {service.icon}
          </div>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 tracking-tight group-hover:text-[#D1701F] transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed mb-5">
          {service.description}
        </p>

        <div className="relative min-h-[148px]">
          <div
            className={`absolute inset-0 transition-all duration-400 ${
              hovered
                ? "opacity-0 -translate-y-2 pointer-events-none"
                : "opacity-100 translate-y-0"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-500">
                Proficiency
              </span>
              <span className="text-xs font-bold text-gray-900 tabular-nums">
                {progress}%
              </span>
            </div>
            <div className="relative h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-linear-to-r from-[#D1701F] to-[#000000]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-4 flex items-center gap-2 text-[11px] text-gray-500">
              <svg className="w-3.5 h-3.5 text-[#D1701F]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Hover to see tech breakdown
            </div>
          </div>

          <div
            className={`absolute inset-0 transition-all duration-400 ${
              hovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <span className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">
              Tech Stack
            </span>
            <div className="space-y-2.5">
              {service.tech.map((t, i) => (
                <TechBar
                  key={t.name}
                  skill={t}
                  show={hovered && inView}
                  delay={i * 80}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechBar({
  skill,
  show,
  delay,
}: {
  skill: TechSkill;
  show: boolean;
  delay: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-700">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: skill.color }}
          />
          {skill.name}
        </span>
        <span className="text-[10px] font-bold text-gray-500 tabular-nums">
          {skill.level}%
        </span>
      </div>
      <div className="relative h-1 w-full rounded-full bg-gray-100 overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full rounded-full transition-[width] duration-700 ease-out"
          style={{
            width: show ? `${skill.level}%` : "0%",
            backgroundColor: skill.color,
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
