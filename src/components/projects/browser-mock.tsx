/**
 * Decorative browser-window mockup used inside the blank-canvas hero card.
 * Pure visual — no interactive behaviour.
 */
export default function BrowserMock() {
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
