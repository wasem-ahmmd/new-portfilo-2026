"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const PROCESS = [
  {
    step: "01",
    title: "Discover",
    desc: "We talk about your goals, audience and constraints.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Wireframes & polished UI — fast, iterative, on Figma.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Clean, typed, performant code. Deployed to production.",
  },
  {
    step: "04",
    title: "Launch",
    desc: "Ship, measure, iterate. Long-term support if you want it.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-4 md:px-8 lg:px-12 bg-white overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#D1701F]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-[#000000]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-6">
        {/* Header — Live Code Lab */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D1701F]/10 border border-[#D1701F]/20 text-[#D1701F] text-[11px] font-semibold tracking-[0.2em] uppercase mb-5">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#D1701F] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#D1701F]" />
            </span>
            Live Code Lab
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] mb-5">
            Don&apos;t take my word &mdash;{" "}
            <span className="bg-linear-to-r from-[#D1701F] to-[#000000] bg-clip-text text-transparent">
              try the code
            </span>
            .
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Small, working tools I built with React &amp; TypeScript. Each one
            runs live in your browser &mdash; click around and see for yourself.
          </p>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-16">
          <ToolCard
            number="01"
            title="Color Palette Generator"
            desc="Generates harmonious color palettes. Click any swatch to copy its hex."
            tags={["React", "HSL", "Clipboard API"]}
          >
            <ColorPaletteTool />
          </ToolCard>

          <ToolCard
            number="02"
            title="Text Analyzer"
            desc="Live word, character, sentence count and reading-time estimator."
            tags={["React", "useMemo", "Regex"]}
          >
            <TextAnalyzerTool />
          </ToolCard>

          <ToolCard
            number="03"
            title="Password Generator"
            desc="Crypto-secure passwords with adjustable length and strength meter."
            tags={["Web Crypto", "TypeScript", "UX"]}
          >
            <PasswordTool />
          </ToolCard>
        </div>

        {/* Sub-header for blank canvas */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 text-white text-[11px] font-semibold tracking-[0.2em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D1701F]" />
            Selected Work
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-3">
            A blank canvas{" "}
            <span className="bg-linear-to-r from-[#D1701F] to-[#000000] bg-clip-text text-transparent">
              waiting for you
            </span>
            .
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            I&apos;m at the start of my freelance journey &mdash; which means
            you get my full focus, my best rates, and a developer who&apos;s
            hungry to make your project shine.
          </p>
        </div>

        {/* Hero blank-canvas card — client CTA */}
        <div className="relative max-w-5xl mx-auto mb-20">
          <div
            aria-hidden
            className="absolute -inset-1 rounded-3xl bg-linear-to-br from-[#D1701F]/30 via-transparent to-[#000000]/20 blur-2xl opacity-60"
          />
          <div className="relative bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">
            {/* Decorative grid */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            {/* Decorative blob */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-linear-to-br from-[#D1701F]/20 to-[#000000]/10 blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              {/* Visual side */}
              <div className="lg:col-span-2 flex justify-center">
                <BrowserMock />
              </div>

              {/* Copy side */}
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-gray-900 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
                  <span className="relative flex w-1.5 h-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#D1701F] opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#D1701F]" />
                  </span>
                  Open for First Clients
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3 tracking-tight">
                  Be the first project in my showcase.
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  I&apos;m starting fresh, with sharp skills, modern tools and
                  the time to get your project right. Your launch could be the
                  case-study at the top of this page &mdash; with full focus,
                  founder-friendly pricing and direct communication.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact"
                    className="group relative overflow-hidden inline-flex items-center justify-center gap-2 bg-linear-to-br from-[#D1701F] to-[#000000] text-white font-semibold text-sm rounded-full px-6 py-3.5 shadow-[0_4px_14px_rgba(209,112,31,0.35)] hover:shadow-[0_8px_24px_rgba(209,112,31,0.5)] hover:scale-[1.02] transition-all duration-300"
                  >
                    <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10 flex items-center gap-2">
                      Hire me for your project
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
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
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-900 font-semibold text-sm rounded-full px-6 py-3.5 hover:border-gray-900 hover:bg-gray-50 transition-all duration-300"
                  >
                    See what I offer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process strip */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gray-500">
              How we&apos;ll work together
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS.map((p, i) => (
              <div
                key={p.step}
                className="relative bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#D1701F]/30 hover:shadow-[0_10px_30px_rgba(209,112,31,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D1701F]">
                    {p.step}
                  </span>
                  {i < PROCESS.length - 1 && (
                    <svg
                      className="w-4 h-4 text-gray-300 hidden lg:block"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1.5 tracking-tight">
                  {p.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust microcopy */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-gray-500">
          <span className="inline-flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#D1701F]"
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
            Founder-friendly pricing
          </span>
          <span className="inline-flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#D1701F]"
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
            Fast turnarounds
          </span>
          <span className="inline-flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#D1701F]"
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
            Direct communication
          </span>
          <span className="inline-flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#D1701F]"
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
            Modern stack
          </span>
        </div>
      </div>
    </section>
  );
}

/* ====================================================================
   ToolCard wrapper
   ==================================================================== */
function ToolCard({
  number,
  title,
  desc,
  tags,
  children,
}: {
  number: string;
  title: string;
  desc: string;
  tags: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(209,112,31,0.12)] hover:border-[#D1701F]/30 hover:-translate-y-1 transition-all duration-500 flex flex-col">
      {/* Header */}
      <div className="px-5 pt-5 pb-4 border-b border-gray-100">
        <div className="flex items-start justify-between mb-2">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D1701F]">
            {number}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[9px] font-bold text-emerald-700 tracking-wide uppercase">
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
            Live
          </span>
        </div>
        <h3 className="text-base font-bold text-gray-900 tracking-tight mb-1 group-hover:text-[#D1701F] transition-colors">
          {title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
      </div>

      {/* Tool */}
      <div className="flex-1 p-5 bg-gray-50/50">{children}</div>

      {/* Footer tags */}
      <div className="px-5 py-3 border-t border-gray-100 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono text-gray-500 px-1.5 py-0.5 rounded bg-gray-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ====================================================================
   Tool 1: Color Palette Generator
   ==================================================================== */
function ColorPaletteTool() {
  const [palette, setPalette] = useState<string[]>([
    "#D1701F",
    "#E89B5A",
    "#F4C99A",
    "#3D2914",
    "#1A0F08",
  ]);
  const [copied, setCopied] = useState<string | null>(null);

  const generate = () => {
    const baseHue = Math.floor(Math.random() * 360);
    const saturation = 65 + Math.floor(Math.random() * 25);
    const colors = [
      hslToHex(baseHue, saturation, 50),
      hslToHex(baseHue, saturation - 10, 65),
      hslToHex(baseHue, saturation - 20, 78),
      hslToHex((baseHue + 180) % 360, saturation - 30, 30),
      hslToHex((baseHue + 180) % 360, saturation - 30, 15),
    ];
    setPalette(colors);
    setCopied(null);
  };

  const copy = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(hex);
      setTimeout(() => setCopied(null), 1200);
    } catch {
      /* ignore */
    }
  };

  return (
    <div>
      <div className="flex rounded-xl overflow-hidden shadow-sm mb-4 h-28">
        {palette.map((c, i) => (
          <button
            key={`${c}-${i}`}
            onClick={() => copy(c)}
            className="flex-1 relative group/sw transition-all hover:flex-[1.4] focus:flex-[1.4] outline-none"
            style={{ backgroundColor: c }}
            aria-label={`Copy ${c}`}
          >
            <span className="absolute inset-x-0 bottom-1.5 text-center text-[9px] font-mono font-bold text-white drop-shadow opacity-0 group-hover/sw:opacity-100 transition-opacity">
              {copied === c ? "Copied!" : c.toUpperCase()}
            </span>
          </button>
        ))}
      </div>
      <button
        onClick={generate}
        className="w-full bg-gray-900 hover:bg-[#D1701F] text-white text-xs font-semibold rounded-lg py-2.5 transition-colors flex items-center justify-center gap-2"
      >
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
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        Generate Palette
      </button>
    </div>
  );
}

function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const color = l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

/* ====================================================================
   Tool 2: Text Analyzer
   ==================================================================== */
function TextAnalyzerTool() {
  const [text, setText] = useState(
    "Type or paste anything here to see live word, character and reading-time stats."
  );

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const chars = text.length;
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const sentences = trimmed
      ? trimmed.split(/[.!?]+/).filter(Boolean).length
      : 0;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return { chars, words, sentences, minutes };
  }, [text]);

  return (
    <div className="space-y-3">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        className="w-full text-xs font-mono px-3 py-2 bg-white border border-gray-200 rounded-lg outline-none focus:border-[#D1701F] focus:ring-2 focus:ring-[#D1701F]/15 resize-none transition"
      />
      <div className="grid grid-cols-2 gap-2">
        <Stat label="Words" value={stats.words} />
        <Stat label="Characters" value={stats.chars} />
        <Stat label="Sentences" value={stats.sentences} />
        <Stat label="Read time" value={`${stats.minutes} min`} />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg px-3 py-2">
      <div className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-0.5">
        {label}
      </div>
      <div className="text-base font-bold text-gray-900 tabular-nums">
        {value}
      </div>
    </div>
  );
}

/* ====================================================================
   Tool 3: Password Generator
   ==================================================================== */
function PasswordTool() {
  const [length, setLength] = useState(16);
  const [opts, setOpts] = useState({ upper: true, nums: true, syms: true });
  const [pwd, setPwd] = useState("");
  const [copied, setCopied] = useState(false);
  const generated = useRef(false);

  const generate = useMemo(() => {
    return () => {
      const lower = "abcdefghijklmnopqrstuvwxyz";
      const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const nums = "0123456789";
      const syms = "!@#$%^&*-_=+";
      let pool = lower;
      if (opts.upper) pool += upper;
      if (opts.nums) pool += nums;
      if (opts.syms) pool += syms;

      const arr = new Uint32Array(length);
      if (typeof window !== "undefined" && window.crypto) {
        window.crypto.getRandomValues(arr);
      } else {
        for (let i = 0; i < length; i++)
          arr[i] = Math.floor(Math.random() * 0xffffffff);
      }
      let result = "";
      for (let i = 0; i < length; i++) {
        result += pool[arr[i] % pool.length];
      }
      setPwd(result);
      setCopied(false);
    };
  }, [length, opts]);

  useEffect(() => {
    if (!generated.current) {
      generated.current = true;
      generate();
    }
  }, [generate]);

  const strength = useMemo(() => {
    let score = 0;
    if (length >= 12) score++;
    if (length >= 16) score++;
    if (opts.upper) score++;
    if (opts.nums) score++;
    if (opts.syms) score++;
    return Math.min(score, 4);
  }, [length, opts]);

  const strengthLabel = ["Weak", "Fair", "Good", "Strong", "Excellent"][strength];
  const strengthColor = [
    "bg-red-400",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-emerald-400",
    "bg-emerald-500",
  ][strength];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(pwd);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="space-y-3">
      <div className="relative bg-white border border-gray-200 rounded-lg px-3 py-2.5 font-mono text-xs break-all pr-10">
        {pwd}
        <button
          onClick={copy}
          aria-label="Copy password"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-md bg-gray-100 hover:bg-[#D1701F] hover:text-white text-gray-600 flex items-center justify-center transition-colors"
        >
          {copied ? (
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Strength bar */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-semibold tracking-wide uppercase text-gray-500">
            Strength
          </span>
          <span className="text-[10px] font-bold text-gray-700">
            {strengthLabel}
          </span>
        </div>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full ${
                i <= strength ? strengthColor : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Length slider */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-semibold tracking-wide uppercase text-gray-500">
            Length
          </span>
          <span className="text-[10px] font-bold text-gray-700 tabular-nums">
            {length}
          </span>
        </div>
        <input
          type="range"
          min={8}
          max={32}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full accent-[#D1701F]"
        />
      </div>

      {/* Toggles + regen */}
      <div className="flex items-center gap-1.5 flex-wrap">
        <Toggle
          active={opts.upper}
          onClick={() => setOpts((o) => ({ ...o, upper: !o.upper }))}
        >
          A-Z
        </Toggle>
        <Toggle
          active={opts.nums}
          onClick={() => setOpts((o) => ({ ...o, nums: !o.nums }))}
        >
          0-9
        </Toggle>
        <Toggle
          active={opts.syms}
          onClick={() => setOpts((o) => ({ ...o, syms: !o.syms }))}
        >
          !@#
        </Toggle>
        <button
          onClick={generate}
          className="ml-auto px-2.5 py-1 rounded-md bg-gray-900 hover:bg-[#D1701F] text-white text-[10px] font-bold transition-colors"
        >
          Regenerate
        </button>
      </div>
    </div>
  );
}

function Toggle({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-1 rounded-md text-[10px] font-mono font-bold transition-colors ${
        active
          ? "bg-[#D1701F] text-white"
          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );
}

/* ====================================================================
   Decorative browser mock (used in blank-canvas hero)
   ==================================================================== */
function BrowserMock() {
  return (
    <div className="relative w-full max-w-sm">
      <div className="bg-gray-900 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden border border-gray-800">
        {/* Top bar */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 bg-gray-950 border-b border-gray-800">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-700" />
          <span className="ml-3 px-2.5 py-0.5 rounded text-[9px] font-mono text-gray-500 bg-gray-800/60 truncate">
            yourproject.com
          </span>
        </div>
        {/* Content */}
        <div className="aspect-4/3 bg-linear-to-br from-gray-900 to-gray-950 p-5 flex flex-col items-center justify-center">
          {/* Plus icon */}
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-[#D1701F] blur-2xl opacity-40" />
            <div className="relative w-14 h-14 rounded-2xl bg-linear-to-br from-[#D1701F] to-[#000000] flex items-center justify-center shadow-[0_8px_24px_rgba(209,112,31,0.4)]">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
          <div className="space-y-2 w-full">
            <div className="h-2 rounded-full bg-gray-800 w-3/4 mx-auto" />
            <div className="h-2 rounded-full bg-gray-800 w-1/2 mx-auto" />
            <div className="h-2 rounded-full bg-[#D1701F]/40 w-2/3 mx-auto" />
          </div>
          <div className="mt-5 px-3 py-1.5 rounded-full bg-[#D1701F] text-white text-[10px] font-bold">
            Your Project Here
          </div>
        </div>
      </div>
      {/* Floating sparkle */}
      <div
        aria-hidden
        className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center"
      >
        <svg
          className="w-4 h-4 text-[#D1701F]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z" />
        </svg>
      </div>
    </div>
  );
}
