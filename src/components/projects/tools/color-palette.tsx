"use client";

import { useState } from "react";

const INITIAL_PALETTE = ["#D1701F", "#E89B5A", "#F4C99A", "#3D2914", "#1A0F08"];

export default function ColorPaletteTool() {
  const [palette, setPalette] = useState<string[]>(INITIAL_PALETTE);
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
      /* clipboard not available — silent */
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
