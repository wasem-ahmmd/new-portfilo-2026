"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";

const POOLS = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  nums: "0123456789",
  syms: "!@#$%^&*-_=+",
} as const;

type Options = { upper: boolean; nums: boolean; syms: boolean };

const STRENGTH_LABELS = ["Weak", "Fair", "Good", "Strong", "Excellent"];
const STRENGTH_COLORS = [
  "bg-red-400",
  "bg-orange-400",
  "bg-yellow-400",
  "bg-emerald-400",
  "bg-emerald-500",
];

export default function PasswordTool() {
  const [length, setLength] = useState(16);
  const [opts, setOpts] = useState<Options>({
    upper: true,
    nums: true,
    syms: true,
  });
  const [pwd, setPwd] = useState("");
  const [copied, setCopied] = useState(false);
  const generated = useRef(false);

  const generate = useMemo(() => {
    return () => {
      let pool = POOLS.lower;
      if (opts.upper) pool += POOLS.upper;
      if (opts.nums) pool += POOLS.nums;
      if (opts.syms) pool += POOLS.syms;

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

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(pwd);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* clipboard not available — silent */
    }
  };

  return (
    <div className="space-y-3">
      {/* Password output + copy */}
      <div className="relative bg-white border border-gray-200 rounded-lg px-3 py-2.5 font-mono text-xs break-all pr-10">
        {pwd}
        <button
          onClick={copy}
          aria-label="Copy password"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-md bg-gray-100 hover:bg-[#D1701F] hover:text-white text-gray-600 flex items-center justify-center transition-colors"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>

      {/* Strength bar */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-semibold tracking-wide uppercase text-gray-500">
            Strength
          </span>
          <span className="text-[10px] font-bold text-gray-700">
            {STRENGTH_LABELS[strength]}
          </span>
        </div>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full ${
                i <= strength ? STRENGTH_COLORS[strength] : "bg-gray-200"
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
  children: ReactNode;
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

function CheckIcon() {
  return (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CopyIcon() {
  return (
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
  );
}
