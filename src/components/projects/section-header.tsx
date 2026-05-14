import type { ReactNode } from "react";

type Variant = "primary" | "dark";

type Props = {
  badge: ReactNode;
  /** Pre-gradient text */
  titleStart: string;
  /** Gradient-colored emphasis text */
  titleAccent: string;
  /** Optional trailing text (e.g. ".") */
  titleEnd?: string;
  description: ReactNode;
  /** Style of the small badge above the title */
  variant?: Variant;
  /** Whether to render as <h2> (true) or <h3> (false). Default: true */
  asMain?: boolean;
  /** Add a small pulsing dot inside the badge */
  pulse?: boolean;
  className?: string;
};

/**
 * Reusable centered section header with a badge, gradient-accent title and
 * description. Used for both the main "Live Code Lab" header and the
 * "Selected Work" sub-header inside the Projects section.
 */
export default function SectionHeader({
  badge,
  titleStart,
  titleAccent,
  titleEnd = ".",
  description,
  variant = "primary",
  asMain = true,
  pulse = false,
  className = "",
}: Props) {
  const badgeClass =
    variant === "primary"
      ? "bg-[#D1701F]/10 border border-[#D1701F]/20 text-[#D1701F]"
      : "bg-gray-900 text-white";

  const TitleTag = asMain ? "h2" : "h3";
  const titleSize = asMain
    ? "text-4xl md:text-5xl lg:text-6xl"
    : "text-2xl md:text-3xl";
  const descSize = asMain
    ? "text-base md:text-lg text-gray-600"
    : "text-sm md:text-base text-gray-600";
  const wrapMargin = asMain ? "mb-14" : "mb-10";

  return (
    <div className={`max-w-2xl mx-auto text-center ${wrapMargin} ${className}`}>
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase mb-${asMain ? "5" : "4"} ${badgeClass}`}
      >
        {pulse ? (
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#D1701F] opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-[#D1701F]" />
          </span>
        ) : (
          <span className="w-1.5 h-1.5 rounded-full bg-[#D1701F]" />
        )}
        {badge}
      </div>

      <TitleTag
        className={`${titleSize} font-bold text-gray-900 leading-[1.05] tracking-tight mb-${asMain ? "5" : "3"}`}
      >
        {titleStart}{" "}
        <span className="bg-linear-to-r from-[#D1701F] to-[#000000] bg-clip-text text-transparent">
          {titleAccent}
        </span>
        {titleEnd}
      </TitleTag>

      <p className={`${descSize} leading-relaxed`}>{description}</p>
    </div>
  );
}
