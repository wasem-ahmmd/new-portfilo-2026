"use client";

import { useEffect, useRef, useState } from "react";

type Tech = { slug: string; color: string; name: string };

type ServiceKey =
  | "web"
  | "ai"
  | "app"
  | "marketing"
  | "computer-training"
  | "coding-training";

type Project = {
  num: string;
  title: string;
  tagline: string;
  service: ServiceKey;
  category: string;
  year: string;
  role: string;
  description: string;
  metrics: { value: string; label: string }[];
  tech: Tech[];
  accent: string;
  href: string;
  mockType:
    | "dashboard"
    | "ecommerce"
    | "chat"
    | "mobile"
    | "ai"
    | "marketing"
    | "course"
    | "training";
  media: {
    type: "image" | "video";
    src: string; // image URL or video poster URL
    videoSrc?: string; // optional video file URL
  };
};

/* Service categories for filter tabs */
const SERVICES: {
  key: ServiceKey | "all";
  label: string;
  short: string;
  icon: string;
  accent: string;
}[] = [
  { key: "all", label: "All Work", short: "All", icon: "✨", accent: "from-gray-700 to-gray-900" },
  { key: "web", label: "Web Development", short: "Web", icon: "🌐", accent: "from-[#D1701F] to-[#000000]" },
  { key: "ai", label: "AI Tools", short: "AI", icon: "🤖", accent: "from-[#000000] to-[#D1701F]" },
  { key: "app", label: "App Development", short: "Apps", icon: "📱", accent: "from-[#D1701F] to-[#000000]" },
  { key: "marketing", label: "Digital Marketing", short: "Marketing", icon: "📈", accent: "from-[#D1701F] to-[#D1701F]" },
  { key: "computer-training", label: "Computer Training", short: "Computer", icon: "💻", accent: "from-[#000000] to-[#000000]" },
  { key: "coding-training", label: "Coding Training", short: "Coding", icon: "👨‍💻", accent: "from-[#D1701F] to-[#000000]" },
];

/* All projects across services */
const ALL_PROJECTS: Project[] = [
  // ——— WEB DEVELOPMENT ————
  {
    num: "01",
    title: "Nexus AI Dashboard",
    tagline: "Mission control for AI agents",
    service: "web",
    category: "SaaS Platform",
    year: "2025",
    role: "Full-stack + Design",
    description:
      "A production-grade dashboard to deploy, monitor, and orchestrate AI agents — with a command palette and real-time logs.",
    metrics: [
      { value: "240+", label: "Users" },
      { value: "$8K", label: "MRR" },
      { value: "99.9%", label: "Uptime" },
    ],
    tech: [
      { slug: "nextdotjs", color: "000000", name: "Next.js" },
      { slug: "typescript", color: "3178C6", name: "TS" },
      { slug: "postgresql", color: "D1701F", name: "Postgres" },
      { slug: "tailwindcss", color: "D1701F", name: "Tailwind" },
    ],
    accent: "from-[#D1701F] via-[#000000] to-[#D1701F]",
    href: "#",
    mockType: "dashboard",
    media: {
      type: "video",
      src: "https://picsum.photos/seed/nexus-ai/800/500",
      videoSrc: "https://cdn.pixabay.com/video/2023/03/15/154013-808609772_large.mp4",
    },
  },
  {
    num: "02",
    title: "Lumen Commerce",
    tagline: "Headless storefront, frictionless checkout",
    service: "web",
    category: "E-commerce",
    year: "2025",
    role: "Lead Engineer",
    description:
      "Headless storefront with one-click Stripe checkout and AI-powered product recommendations.",
    metrics: [
      { value: "+38%", label: "Conversion" },
      { value: "1.8s", label: "TTI" },
      { value: "5★", label: "Client" },
    ],
    tech: [
      { slug: "nextdotjs", color: "000000", name: "Next.js" },
      { slug: "stripe", color: "D1701F", name: "Stripe" },
      { slug: "sanity", color: "D1701F", name: "Sanity" },
    ],
    accent: "from-[#D1701F] via-[#D1701F] to-[#000000]",
    href: "#",
    mockType: "ecommerce",
    media: {
      type: "image",
      src: "https://picsum.photos/seed/lumen-shop/800/500",
    },
  },

  // ——— AI TOOLS ————————————————
  {
    num: "03",
    title: "ContentForge AI",
    tagline: "Generate brand-perfect copy in seconds",
    service: "ai",
    category: "AI Writing Tool",
    year: "2025",
    role: "AI Engineer + Design",
    description:
      "Custom GPT pipeline that turns brand guidelines into on-tone blog posts, ads, and social copy.",
    metrics: [
      { value: "50K+", label: "Words/day" },
      { value: "12×", label: "Faster" },
      { value: "85%", label: "Approval" },
    ],
    tech: [
      { slug: "openai", color: "412991", name: "OpenAI" },
      { slug: "langchain", color: "000000", name: "LangChain" },
      { slug: "nextdotjs", color: "000000", name: "Next.js" },
    ],
    accent: "from-[#000000] via-[#000000] to-[#D1701F]",
    href: "#",
    mockType: "ai",
    media: {
      type: "image",
      src: "https://picsum.photos/seed/contentforge/800/500",
    },
  },
  {
    num: "04",
    title: "SmartChat Assistant",
    tagline: "AI customer-support bot, trained on your docs",
    service: "ai",
    category: "Chatbot · RAG",
    year: "2024",
    role: "AI Engineer",
    description:
      "Drop-in chat widget with retrieval-augmented answers from your knowledge base. 24/7 zero-touch support.",
    metrics: [
      { value: "92%", label: "Resolved" },
      { value: "3s", label: "Avg. reply" },
      { value: "−40%", label: "Tickets" },
    ],
    tech: [
      { slug: "openai", color: "412991", name: "OpenAI" },
      { slug: "pinecone", color: "000000", name: "Pinecone" },
      { slug: "react", color: "D1701F", name: "React" },
    ],
    accent: "from-[#D1701F] via-[#000000] to-[#D1701F]",
    href: "#",
    mockType: "ai",
    media: {
      type: "video",
      src: "https://picsum.photos/seed/smartchat/800/500",
      videoSrc: "https://cdn.pixabay.com/video/2024/03/05/202944-919039243_large.mp4",
    },
  },

  // ——— APP DEVELOPMENT ———————————————
  {
    num: "05",
    title: "Trail Fitness",
    tagline: "Your AI fitness companion, offline-first",
    service: "app",
    category: "Mobile · React Native",
    year: "2024",
    role: "Mobile Engineer",
    description:
      "Cross-platform fitness app with offline workouts, GPS tracking, and AI coaching plans.",
    metrics: [
      { value: "4.8★", label: "App Store" },
      { value: "12K+", label: "Downloads" },
      { value: "Offline", label: "First" },
    ],
    tech: [
      { slug: "expo", color: "000020", name: "Expo" },
      { slug: "react", color: "D1701F", name: "RN" },
      { slug: "supabase", color: "D1701F", name: "Supabase" },
    ],
    accent: "from-[#D1701F] via-[#000000] to-[#D1701F]",
    href: "#",
    mockType: "mobile",
    media: {
      type: "image",
      src: "https://picsum.photos/seed/trail-fitness/800/500",
    },
  },
  {
    num: "06",
    title: "FoodieGo",
    tagline: "Hyper-local food delivery, in 20 minutes",
    service: "app",
    category: "Mobile · Marketplace",
    year: "2024",
    role: "Full Mobile Stack",
    description:
      "End-to-end food delivery app — customer, rider, and merchant flows with live order tracking.",
    metrics: [
      { value: "8K+", label: "Orders" },
      { value: "18min", label: "Avg. ETA" },
      { value: "4.7★", label: "Rating" },
    ],
    tech: [
      { slug: "flutter", color: "02569B", name: "Flutter" },
      { slug: "firebase", color: "D1701F", name: "Firebase" },
      { slug: "googlemaps", color: "000000", name: "Maps" },
    ],
    accent: "from-[#D1701F] via-[#000000] to-[#D1701F]",
    href: "#",
    mockType: "mobile",
    media: {
      type: "video",
      src: "https://picsum.photos/seed/foodiego/800/500",
      videoSrc: "https://cdn.pixabay.com/video/2023/06/14/167221-836738487_large.mp4",
    },
  },

  // ——— DIGITAL MARKETING —————————————
  {
    num: "07",
    title: "BrandLift Campaign",
    tagline: "Multi-channel growth for a fashion DTC brand",
    service: "marketing",
    category: "Paid Ads · SEO · Social",
    year: "2025",
    role: "Marketing Lead",
    description:
      "Full-funnel campaign — Meta & Google ads, SEO content, and influencer activations for a Karachi-based fashion startup.",
    metrics: [
      { value: "4.2×", label: "ROAS" },
      { value: "+185%", label: "Followers" },
      { value: "−32%", label: "CAC" },
    ],
    tech: [
      { slug: "meta", color: "0467DF", name: "Meta Ads" },
      { slug: "googleads", color: "000000", name: "Google Ads" },
      { slug: "googleanalytics", color: "D1701F", name: "GA4" },
    ],
    accent: "from-[#D1701F] via-[#D1701F] to-[#D1701F]",
    href: "#",
    mockType: "marketing",
    media: {
      type: "image",
      src: "https://picsum.photos/seed/brandlift/800/500",
    },
  },
  {
    num: "08",
    title: "Local SEO Boost",
    tagline: "From page 5 to map pack #1",
    service: "marketing",
    category: "SEO · Local Listings",
    year: "2024",
    role: "SEO Strategist",
    description:
      "Local SEO overhaul for 12 service businesses — citations, GMB optimization, and review automation.",
    metrics: [
      { value: "+420%", label: "Calls" },
      { value: "Top 3", label: "Map Pack" },
      { value: "12", label: "Clients" },
    ],
    tech: [
      { slug: "googlesearchconsole", color: "458CF5", name: "GSC" },
      { slug: "ahrefs", color: "000000", name: "Ahrefs" },
      { slug: "semrush", color: "D1701F", name: "SEMrush" },
    ],
    accent: "from-[#D1701F] via-[#D1701F] to-[#D1701F]",
    href: "#",
    mockType: "marketing",
    media: {
      type: "image",
      src: "https://picsum.photos/seed/local-seo/800/500",
    },
  },

  // ——— COMPUTER TRAINING —————————————
  {
    num: "09",
    title: "Office Mastery Bootcamp",
    tagline: "From zero to confident in 6 weeks",
    service: "computer-training",
    category: "MS Office · Productivity",
    year: "2025",
    role: "Lead Trainer",
    description:
      "Hands-on Office 365 program — Word, Excel, PowerPoint, Outlook — for working professionals and students.",
    metrics: [
      { value: "300+", label: "Graduates" },
      { value: "98%", label: "Completion" },
      { value: "4.9★", label: "Rating" },
    ],
    tech: [
      { slug: "microsoftexcel", color: "217346", name: "Excel" },
      { slug: "microsoftword", color: "000000", name: "Word" },
      { slug: "microsoftpowerpoint", color: "D1701F", name: "PPT" },
    ],
    accent: "from-[#D1701F] via-[#000000] to-[#D1701F]",
    href: "#",
    mockType: "training",
    media: {
      type: "video",
      src: "https://picsum.photos/seed/office-bootcamp/800/500",
      videoSrc: "https://cdn.pixabay.com/video/2020/03/24/34091-400893872_large.mp4",
    },
  },

  // ——— CODING TRAINING ———————————————
  {
    num: "10",
    title: "Web Dev Bootcamp",
    tagline: "Junior to job-ready in 12 weeks",
    service: "coding-training",
    category: "Full-stack · JS",
    year: "2025",
    role: "Lead Instructor",
    description:
      "Cohort-based program covering HTML, CSS, JS, React & Node — with real client projects and job-placement support.",
    metrics: [
      { value: "120+", label: "Students" },
      { value: "78%", label: "Hired" },
      { value: "5.0★", label: "Rating" },
    ],
    tech: [
      { slug: "javascript", color: "F7DF1E", name: "JS" },
      { slug: "react", color: "D1701F", name: "React" },
      { slug: "nodedotjs", color: "D1701F", name: "Node" },
      { slug: "git", color: "D1701F", name: "Git" },
    ],
    accent: "from-[#D1701F] via-[#000000] to-[#D1701F]",
    href: "#",
    mockType: "course",
    media: {
      type: "image",
      src: "https://picsum.photos/seed/web-bootcamp/800/500",
    },
  },
];

export default function Projects() {
  const [activeService, setActiveService] = useState<ServiceKey | "all">("all");
  const filtered =
    activeService === "all"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.service === activeService);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-[#f7f6f2] overflow-hidden"
    >
      {/* Hero-matched background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, #ffffff 0%, transparent 55%), radial-gradient(circle at 85% 80%, #efece4 0%, transparent 50%)",
        }}
      />
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

      <div className="container relative z-10 mx-auto px-6">
        {/* Section header — editorial */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-12 h-px bg-gray-400" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-gray-500">
              Selected Work · 2024–25
            </span>
          </div>
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <h2 className="md:col-span-8 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] tracking-tight">
              Work across{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-linear-to-r from-[#D1701F] via-[#000000] to-[#D1701F] bg-clip-text text-transparent bg-size-[200%_100%] animate-shimmer">
                  six disciplines
                </span>
                <span
                  className="absolute left-0 right-0 bottom-1 h-3 md:h-4 bg-[#D1701F]/15 z-0"
                  style={{ transform: "skewX(-8deg)" }}
                />
              </span>
              .
            </h2>
            <p className="md:col-span-4 text-base text-gray-600 leading-relaxed">
              Web, AI, apps, marketing & training — pick a category below to see
              the work that fits your need.
            </p>
          </div>

          {/* Subtle stats line — elegant, single row */}
          <div className="mt-10 flex flex-wrap items-baseline gap-x-10 gap-y-3 text-sm text-gray-500">
            <span className="flex items-baseline gap-2">
              <span className="font-mono font-bold text-gray-900 text-base tabular-nums">
                <CountUp value="30+" />
              </span>
              shipped
            </span>
            <span className="text-gray-300">·</span>
            <span className="flex items-baseline gap-2">
              <span className="font-mono font-bold text-gray-900 text-base tabular-nums">
                <CountUp value="12K+" />
              </span>
              active users
            </span>
            <span className="text-gray-300">·</span>
            <span className="flex items-baseline gap-2">
              <span className="font-mono font-bold text-gray-900 text-base tabular-nums">
                <CountUp value="4.9" />
              </span>
              avg. rating
            </span>
            <span className="text-gray-300">·</span>
            <span className="flex items-baseline gap-2">
              <span className="font-mono font-bold text-gray-900 text-base tabular-nums">
                10+
              </span>
              years
            </span>
          </div>
        </div>

        {/* === Service filter tabs === */}
        <div className="max-w-6xl mx-auto mb-10">
          <div className="flex flex-wrap gap-2 md:gap-2.5 justify-center">
            {SERVICES.map((s) => {
              const count =
                s.key === "all"
                  ? ALL_PROJECTS.length
                  : ALL_PROJECTS.filter((p) => p.service === s.key).length;
              const isActive = activeService === s.key;
              return (
                <button
                  key={s.key}
                  onClick={() => setActiveService(s.key)}
                  className={`group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    isActive
                      ? "bg-gray-900 text-white border-gray-900 shadow-[0_8px_24px_rgba(0,0,0,0.18)] scale-[1.03]"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:text-gray-900 hover:scale-[1.02]"
                  }`}
                >
                  <span className="text-base leading-none">{s.icon}</span>
                  <span className="tracking-tight">
                    <span className="hidden md:inline">{s.label}</span>
                    <span className="md:hidden">{s.short}</span>
                  </span>
                  <span
                    className={`text-[10px] font-mono tabular-nums px-1.5 py-0.5 rounded-full transition-colors ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
          {/* Active service description */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                {filtered.length}
              </span>{" "}
              {filtered.length === 1 ? "project" : "projects"}
              {activeService !== "all" && (
                <>
                  {" "}
                  in{" "}
                  <span className="font-semibold text-gray-900">
                    {SERVICES.find((s) => s.key === activeService)?.label}
                  </span>
                </>
              )}
            </p>
          </div>
        </div>

        {/* === Filtered projects grid === */}
        <div className="max-w-6xl mx-auto">
          <div
            key={activeService}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 animate-fade-in"
          >
            {filtered.map((p, i) => (
              <CompactCard key={p.num} project={p} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-gray-500">
              No projects yet in this category — check back soon.
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          :global(.animate-fade-in) {
            animation: fade-in 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          }
        `}</style>

        {/* Footer CTA */}
        <div className="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-gray-300/60">
          <p className="text-sm text-gray-600">
            <span className="font-mono font-semibold text-gray-900">30+</span>{" "}
            shipped products since 2014. Want to see the rest?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 bg-gray-900 hover:bg-black text-white font-semibold text-sm rounded-full pl-5 pr-2 py-2 shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:scale-[1.03] transition-all duration-300"
          >
            Browse the archive
            <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-gray-900 group-hover:-rotate-45 transition-transform duration-300">
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
          </a>
        </div>
      </div>
    </section>
  );
}
/* ====================================================================
   COMPACT CARD — for OTHERS grid
   ==================================================================== */
function CompactCard({ project, index }: { project: Project; index: number }) {
  void index;
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const serviceMeta =
    SERVICES.find((s) => s.key === project.service) ?? SERVICES[0];

  return (
    <div ref={wrapRef} className="relative">
      {/* Running border — bright segment travels around the card on hover */}
      <div
        aria-hidden
        className={`absolute inset-[-2px] rounded-2xl pointer-events-none transition-opacity duration-300 overflow-hidden ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="absolute inset-[-50%]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 260deg, #D1701F 310deg, #000000 350deg, transparent 360deg)",
            animation: hovered ? "border-run 2.5s linear infinite" : undefined,
          }}
        />
      </div>

      <a
        ref={cardRef}
        href={project.href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative block bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(209,112,31,0.15)] transition-shadow duration-500"
      >

      {/* === Media area === */}
      <div className="relative aspect-4/3 bg-gray-100 overflow-hidden">
        {/* Image — always visible, parallax via JS transform */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={project.media.src}
          alt={project.title}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover ${
            project.media.type === "video" && hovered ? "opacity-0" : "opacity-100"
          }`}
          style={{
            transition:
              "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s",
            willChange: "transform",
          }}
        />

        {/* Video — plays on hover, only when type=video and src provided */}
        {project.media.type === "video" && project.media.videoSrc && (
          <video
            ref={(el) => {
              videoRef.current = el;
              if (!el) return;
              if (hovered) el.play().catch(() => {});
              else {
                el.pause();
                el.currentTime = 0;
              }
            }}
            src={project.media.videoSrc}
            poster={project.media.src}
            muted
            loop
            playsInline
            preload="metadata"
            className={`absolute inset-0 w-full h-full object-cover ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transition:
                "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s",
              willChange: "transform",
            }}
          />
        )}

        {/* Subtle dark vignette at bottom for type contrast */}
        <div
          className={`absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-500 ${
            hovered ? "opacity-90" : "opacity-50"
          }`}
        />

        {/* Indigo accent corner — animates in on hover */}
        <div
          aria-hidden
          className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-linear-to-br from-[#D1701F] to-[#000000] blur-2xl transition-all duration-700 ${
            hovered ? "opacity-70 scale-100" : "opacity-0 scale-75"
          }`}
        />

        {/* Diagonal sheen sweep on hover */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute top-0 -left-1/2 w-1/2 h-full bg-linear-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] transition-transform duration-1000 ease-out ${
              hovered ? "translate-x-[400%]" : "-translate-x-full"
            }`}
          />
        </div>

        {/* Media-type badge — top left (Video / Image) */}
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white text-[9px] font-semibold tracking-[0.15em] uppercase z-10">
          {project.media.type === "video" ? (
            <>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#D1701F] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D1701F]" />
              </span>
              Video
            </>
          ) : (
            <>
              <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
              Image
            </>
          )}
        </div>

        {/* Service badge — top right */}
        <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-white/60 text-[9px] font-semibold tracking-wider text-gray-700 z-10">
          <span className="text-[10px] leading-none">{serviceMeta.icon}</span>
          {serviceMeta.short}
        </div>

        {/* Title + description — overlaid at bottom */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white transition-all duration-500 z-10 ${
            hovered ? "-translate-y-1" : "translate-y-0"
          }`}
        >
          {/* Title with chromatic shadow on hover */}
          <h3
            className="text-xl md:text-2xl font-bold tracking-tight leading-tight mb-1.5"
            style={{
              textShadow: hovered
                ? "2px 2px 0 rgba(0, 0, 0, 0.6), -2px -2px 0 rgba(6, 182, 212, 0.4), 0 2px 8px rgba(0,0,0,0.4)"
                : "0 1px 3px rgba(0,0,0,0.4)",
              transition: "text-shadow 0.5s",
            }}
          >
            {project.title}
          </h3>
          <p
            className={`text-sm text-white/90 leading-snug transition-all duration-500 overflow-hidden ${
              hovered ? "max-h-24 opacity-100" : "max-h-10 opacity-90 line-clamp-2"
            }`}
          >
            {project.description}
          </p>

          {/* Hover-only arrow */}
          <div
            className={`mt-3 inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-500 ${
              hovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
            }`}
          >
            View project
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
                d="M7 17L17 7M17 7H8M17 7v9"
              />
            </svg>
          </div>
        </div>
      </div>
      </a>

      {/* Keyframe for running border */}
      <style jsx>{`
        @keyframes border-run {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

/* ---------- Animated count-up number ---------- */
function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Extract numeric portion, keep prefix/suffix (e.g., "$120K+", "12K+", "4.9", "30+")
    const match = value.match(/^([^\d]*)([\d.]+)([^\d]*)$/);
    if (!match) return;
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const isInt = !numStr.includes(".");

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          let start: number | null = null;
          const dur = 1500;
          const step = (ts: number) => {
            if (start === null) start = ts;
            const p = Math.min((ts - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            const cur = target * eased;
            setDisplay(`${prefix}${isInt ? Math.round(cur) : cur.toFixed(1)}${suffix}`);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
