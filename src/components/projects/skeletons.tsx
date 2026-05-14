/**
 * Skeleton placeholders for the Projects section.
 * Shown while their corresponding lazy-loaded component chunks are still
 * being downloaded — visible on slow networks. Layout dimensions roughly
 * mirror the real components to avoid jarring layout shifts.
 */

const pulse = "animate-pulse bg-gray-200/80";

/* ---------- Section header ---------- */
export function SectionHeaderSkeleton({ asMain = true }: { asMain?: boolean }) {
  const wrapMargin = asMain ? "mb-14" : "mb-10";
  const titleH = asMain ? "h-12 md:h-16" : "h-8 md:h-10";
  return (
    <div className={`max-w-2xl mx-auto text-center ${wrapMargin}`}>
      <div
        className={`inline-block ${pulse} rounded-full h-6 w-36 mb-${asMain ? "5" : "4"}`}
      />
      <div className={`${pulse} rounded-lg ${titleH} w-5/6 mx-auto mb-4`} />
      <div className={`${pulse} rounded h-3 w-11/12 mx-auto mb-2`} />
      <div className={`${pulse} rounded h-3 w-3/4 mx-auto`} />
    </div>
  );
}

/* ---------- Tool card ---------- */
export function ToolCardSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col">
      <div className="px-5 pt-5 pb-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <div className={`${pulse} h-3 w-8 rounded`} />
          <div className={`${pulse} h-4 w-12 rounded-full`} />
        </div>
        <div className={`${pulse} h-4 w-2/3 rounded mb-2`} />
        <div className={`${pulse} h-3 w-full rounded mb-1`} />
        <div className={`${pulse} h-3 w-4/5 rounded`} />
      </div>
      <div className="flex-1 p-5 bg-gray-50/50 space-y-3">
        <div className={`${pulse} h-28 w-full rounded-xl`} />
        <div className={`${pulse} h-9 w-full rounded-lg`} />
      </div>
      <div className="px-5 py-3 border-t border-gray-100 flex gap-1.5">
        <div className={`${pulse} h-3 w-12 rounded`} />
        <div className={`${pulse} h-3 w-16 rounded`} />
        <div className={`${pulse} h-3 w-14 rounded`} />
      </div>
    </div>
  );
}

export function ToolsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-16">
      <ToolCardSkeleton />
      <ToolCardSkeleton />
      <ToolCardSkeleton />
    </div>
  );
}

/* ---------- Blank canvas hero ---------- */
export function BlankCanvasSkeleton() {
  return (
    <div className="relative max-w-5xl mx-auto mb-20">
      <div className="relative bg-white border border-gray-200 rounded-3xl p-8 md:p-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <div className={`${pulse} w-full max-w-sm aspect-4/3 rounded-2xl`} />
          </div>
          <div className="lg:col-span-3 space-y-4">
            <div className={`${pulse} h-5 w-44 rounded-full`} />
            <div className={`${pulse} h-8 md:h-10 w-3/4 rounded-lg`} />
            <div className="space-y-2">
              <div className={`${pulse} h-3 w-full rounded`} />
              <div className={`${pulse} h-3 w-11/12 rounded`} />
              <div className={`${pulse} h-3 w-4/5 rounded`} />
            </div>
            <div className="flex gap-3 pt-2">
              <div className={`${pulse} h-12 w-48 rounded-full`} />
              <div className={`${pulse} h-12 w-36 rounded-full`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Process strip ---------- */
export function ProcessStripSkeleton() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <div className={`${pulse} h-3 w-48 rounded mx-auto`} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl p-5 space-y-3"
          >
            <div className={`${pulse} h-3 w-8 rounded`} />
            <div className={`${pulse} h-4 w-2/3 rounded`} />
            <div className={`${pulse} h-3 w-full rounded`} />
            <div className={`${pulse} h-3 w-4/5 rounded`} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Trust strip ---------- */
export function TrustStripSkeleton() {
  return (
    <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className={`${pulse} h-4 w-36 rounded`} />
      ))}
    </div>
  );
}

/* ---------- GitHub CTA ---------- */
export function GithubCtaSkeleton() {
  return (
    <div className="mt-16 flex flex-col items-center text-center">
      <div className={`${pulse} h-3 w-72 rounded mb-5`} />
      <div className={`${pulse} h-14 w-72 rounded-full`} />
    </div>
  );
}
