import type { ReactNode } from "react";

type Props = {
  number: string;
  title: string;
  desc: string;
  tags: string[];
  children: ReactNode;
};

/**
 * Wrapper for an interactive "Live Code Lab" tool. Provides the consistent
 * card chrome (header, live badge, body, tags footer) so individual tool
 * implementations only need to focus on their interactive content.
 */
export default function ToolCard({ number, title, desc, tags, children }: Props) {
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
