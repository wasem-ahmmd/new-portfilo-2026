import BrowserMock from "./browser-mock";

/**
 * Hero "blank canvas" card — primary client CTA inside the Projects section.
 * Combines a decorative browser mock with a pitch + dual CTAs.
 */
export default function BlankCanvasCard() {
  return (
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
              I&apos;m starting fresh, with sharp skills, modern tools and the
              time to get your project right. Your launch could be the
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
  );
}
