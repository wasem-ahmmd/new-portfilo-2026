"use client";

import { useMemo, useState } from "react";

const READING_WPM = 200;
const INITIAL_TEXT =
  "Type or paste anything here to see live word, character and reading-time stats.";

export default function TextAnalyzerTool() {
  const [text, setText] = useState(INITIAL_TEXT);

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const chars = text.length;
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const sentences = trimmed
      ? trimmed.split(/[.!?]+/).filter(Boolean).length
      : 0;
    const minutes = Math.max(1, Math.ceil(words / READING_WPM));
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
