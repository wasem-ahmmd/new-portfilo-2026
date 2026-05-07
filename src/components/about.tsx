"use client";

import { useEffect, useRef } from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Soft brand glow background */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#4F46E5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/20 text-[#4F46E5] text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] mb-5">
            Code with{" "}
            <span className="bg-linear-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              purpose
            </span>
            ,
            <br />
            design with{" "}
            <span className="bg-linear-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              soul
            </span>
            .
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            I&apos;m a self-driven full-stack developer who blends thoughtful
            design with scalable code — turning ambitious ideas into polished
            products.
          </p>
        </div>

        {/* Bento grid — 4 cards (asymmetric) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-6 max-w-6xl mx-auto">
          {/* Card 1 — Image (smaller, premium hover) */}
          <ImageCard />

          {/* Card 2 — My Story (with terminal + CV button) */}
          <Card className="md:col-span-3 p-8 md:p-9 flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-[#4F46E5]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </span>
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gray-500">
                My Story
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
              From late-night curiosity to shipping real products.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              I started writing code out of pure curiosity — what began as
              tinkering quickly turned into an obsession with crafting
              experiences that feel right.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Today I build full-stack applications with{" "}
              <span className="font-semibold text-gray-900">React</span>,{" "}
              <span className="font-semibold text-gray-900">Next.js</span>, and{" "}
              <span className="font-semibold text-gray-900">TypeScript</span> —
              and use AI to multiply what one developer can ship.
            </p>

            {/* Mini terminal */}
            <div className="rounded-xl bg-gray-950 border border-gray-800 overflow-hidden font-mono text-[12px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] mb-6">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-900 border-b border-gray-800">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-2 text-[10px] text-gray-500 tracking-wider">
                  ~/wasim
                </span>
              </div>
              <div className="px-4 py-3 space-y-1.5 leading-relaxed">
                <div>
                  <span className="text-emerald-400">$</span>{" "}
                  <span className="text-gray-300">whoami</span>
                </div>
                <div className="text-gray-400">
                  → Wasim Ahmed —{" "}
                  <span className="text-[#A78BFA]">full-stack engineer</span>
                </div>
                <div>
                  <span className="text-emerald-400">$</span>{" "}
                  <span className="text-gray-300">status</span>
                </div>
                <div className="text-emerald-400 flex items-center gap-1.5">
                  → available for hire
                  <span className="inline-block w-1.5 h-3 bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Download CV button */}
            <a
              href="/cv.pdf"
              download
              className="group/cv mt-auto inline-flex items-center justify-center gap-2.5 bg-linear-to-br from-[#4F46E5] to-[#7C3AED] text-white font-semibold text-sm rounded-full px-6 py-3 shadow-[0_4px_14px_rgba(79,70,229,0.35)] hover:shadow-[0_8px_24px_rgba(79,70,229,0.5)] hover:scale-[1.02] transition-all duration-300"
            >
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover/cv:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              Download My CV
            </a>
          </Card>

          {/* Card 3 — Manifesto */}
          <Card className="md:col-span-3 p-7 md:p-8 min-h-[420px] flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-8 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-[#4F46E5]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 4v3m0 0v3m0-3h3m-3 0H2m13 4v8m0-8h3m-3 0h-3m6 0v8m-6-8v8m0 0h6m-12-4h6"
                  />
                </svg>
              </span>
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gray-500">
                Manifesto
              </span>
            </div>
            <div className="space-y-5 flex-1 flex flex-col justify-center">
              {[
                {
                  n: "01",
                  h: "Ship, then perfect.",
                  p: "Done is better than theoretical. Real users teach more than any plan.",
                },
                {
                  n: "02",
                  h: "Design is not decoration.",
                  p: "Every pixel earns its place. If it doesn't help the user, it disappears.",
                },
                {
                  n: "03",
                  h: "AI multiplies craft, not replaces it.",
                  p: "I use AI as a co-pilot — taste and judgment still belong to the human.",
                },
              ].map((p) => (
                <div
                  key={p.n}
                  className="group/item flex gap-4 items-start py-2 border-b border-gray-100 last:border-0"
                >
                  <span className="text-2xl md:text-3xl font-bold bg-linear-to-br from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent tabular-nums leading-none shrink-0 group-hover/item:scale-110 transition-transform duration-300 origin-left">
                    {p.n}
                  </span>
                  <div className="flex-1">
                    <div className="text-sm md:text-base font-bold text-gray-900 mb-0.5 tracking-tight">
                      {p.h}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {p.p}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Card 4 — Stack Universe (Tech Orbit) */}
          <Card className="md:col-span-2 p-7 md:p-8 flex flex-col items-center justify-center min-h-[420px] overflow-hidden">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gray-500 self-start mb-2">
              Stack Universe
            </span>
            <TechOrbit />
            <div className="text-[12px] text-gray-500 mt-4 text-center">
              <span className="font-semibold text-gray-900">10+ tools</span>{" "}
              orbiting daily
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------- Card with cursor-following gradient border glow ---------- */
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative bg-white border border-gray-200 rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-gray-300 transition-all duration-300 overflow-hidden ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx) var(--my), rgba(79, 70, 229, 0.08), transparent 60%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

/* ---------- Image Card with 3D tilt + shimmer + slide-up reveal ---------- */
function ImageCard() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y * 8}deg) rotateY(${
        x * 8
      }deg) scale3d(1.02, 1.02, 1.02)`;
    };
    const onLeave = () => {
      card.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
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
      className="md:col-span-2 group relative min-h-[420px] perspective-[900px]"
      style={{ perspective: "900px" }}
    >
      {/* Offset gradient shadow behind card */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-linear-to-br from-[#4F46E5] to-[#7C3AED] opacity-0 group-hover:opacity-90 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-500 blur-[2px]" />

      <div
        ref={cardRef}
        className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 shadow-[0_4px_14px_rgba(0,0,0,0.06)] group-hover:shadow-[0_25px_60px_rgba(79,70,229,0.35)] transition-shadow duration-500 will-change-transform"
        style={{ transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        {/* Photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/wasim.jpeg"
          alt="Wasim Ahmed"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-110"
        />

        {/* Indigo color tint at rest, fades on hover */}
        <div className="absolute inset-0 bg-[#4F46E5]/15 mix-blend-color group-hover:opacity-0 transition-opacity duration-500" />

        {/* Diagonal shimmer streak that sweeps across on hover */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-1/2 w-1/2 h-full bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-out" />
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

        {/* Top-left badge */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[9px] font-semibold tracking-[0.2em] uppercase">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          Available
        </div>

        {/* Corner crosshairs */}
        <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-white/40 rounded-tr-md" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-white/40 rounded-bl-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Bottom info — slides up on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <div className="text-[9px] font-semibold tracking-[0.25em] uppercase text-white/70 mb-1 transition-transform duration-500 group-hover:-translate-y-1">
            The Person
          </div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight transition-transform duration-500 group-hover:-translate-y-1">
            Wasim Ahmed
          </h3>
          <p className="text-xs text-white/85 leading-relaxed mt-2 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
            Full-stack developer · UI/UX engineer · AI tinkerer based in
            Karachi.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Tech Orbit — rotating logos around center ---------- */
function TechOrbit() {
  const tech = [
    { slug: "react", color: "61DAFB" },
    { slug: "typescript", color: "3178C6" },
    { slug: "nextdotjs", color: "000000" },
    { slug: "tailwindcss", color: "06B6D4" },
    { slug: "nodedotjs", color: "5FA04E" },
    { slug: "figma", color: "F24E1E" },
    { slug: "python", color: "3776AB" },
    { slug: "go", color: "00ADD8" },
  ];

  return (
    <div className="relative w-[260px] h-[260px] my-2">
      {/* Outer dashed ring */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#4F46E5]/25 orbit-rotate" />
      {/* Inner ring */}
      <div className="absolute inset-10 rounded-full border border-dashed border-[#7C3AED]/20 orbit-rotate-reverse" />

      {/* Center — 10+ Years Exp */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-[#4F46E5] to-[#7C3AED] flex flex-col items-center justify-center text-white shadow-[0_8px_24px_rgba(79,70,229,0.4)] z-10">
          <div className="text-3xl font-bold leading-none tracking-tight">
            5<span className="text-white/80">+</span>
          </div>
          <div className="text-[9px] font-semibold tracking-[0.2em] uppercase text-white/80 mt-1.5">
            Years
          </div>
        </div>
      </div>

      {/* Orbiting logos — outer ring */}
      {tech.slice(0, 5).map((t, i) => {
        const angle = (i / 5) * 360;
        return (
          <div
            key={t.slug}
            className="absolute top-1/2 left-1/2 w-0 h-0 orbit-rotate"
            style={{ animationDuration: "25s" }}
          >
            <div
              className="absolute w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center"
              style={{
                transform: `rotate(${angle}deg) translateX(125px) rotate(-${angle}deg) translate(-50%, -50%)`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                alt={t.slug}
                className="w-4 h-4"
              />
            </div>
          </div>
        );
      })}
      {/* Orbiting logos — inner ring */}
      {tech.slice(5).map((t, i) => {
        const angle = (i / 3) * 360;
        return (
          <div
            key={t.slug}
            className="absolute top-1/2 left-1/2 w-0 h-0 orbit-rotate-reverse"
            style={{ animationDuration: "18s" }}
          >
            <div
              className="absolute w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center"
              style={{
                transform: `rotate(${angle}deg) translateX(75px) rotate(-${angle}deg) translate(-50%, -50%)`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                alt={t.slug}
                className="w-3.5 h-3.5"
              />
            </div>
          </div>
        );
      })}

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes orbit-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        :global(.orbit-rotate) {
          animation: orbit 25s linear infinite;
        }
        :global(.orbit-rotate-reverse) {
          animation: orbit-reverse 18s linear infinite;
        }
      `}</style>
    </div>
  );
}
