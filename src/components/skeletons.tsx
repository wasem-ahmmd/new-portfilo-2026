/**
 * Page-level section skeletons. Shown while the corresponding lazy-loaded
 * section chunk is being downloaded — visible on slow networks. Layout
 * dimensions roughly mirror the real sections to avoid layout shifts.
 */

const pulse = "animate-pulse bg-gray-200/80";

/* ---------- Hero ---------- */
export function HeroSkeleton() {
  return (
    <section className="relative min-h-screen flex items-center px-4 md:px-8 lg:px-12 py-24 bg-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className={`${pulse} h-6 w-40 rounded-full`} />
          <div className="space-y-3">
            <div className={`${pulse} h-12 md:h-16 w-11/12 rounded-lg`} />
            <div className={`${pulse} h-12 md:h-16 w-3/4 rounded-lg`} />
          </div>
          <div className="space-y-2">
            <div className={`${pulse} h-3 w-full rounded`} />
            <div className={`${pulse} h-3 w-5/6 rounded`} />
            <div className={`${pulse} h-3 w-4/6 rounded`} />
          </div>
          <div className="flex gap-3 pt-3">
            <div className={`${pulse} h-12 w-44 rounded-full`} />
            <div className={`${pulse} h-12 w-36 rounded-full`} />
          </div>
          <div className="flex gap-2 pt-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className={`${pulse} h-7 w-20 rounded-full`} />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className={`${pulse} w-72 h-72 md:w-96 md:h-96 rounded-3xl`} />
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
export function AboutSkeleton() {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 lg:px-12 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14 space-y-4">
          <div className={`${pulse} h-6 w-32 rounded-full mx-auto`} />
          <div className={`${pulse} h-10 md:h-14 w-3/4 rounded-lg mx-auto`} />
          <div className={`${pulse} h-3 w-2/3 rounded mx-auto`} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className={`${pulse} h-3 w-full rounded`} />
            <div className={`${pulse} h-3 w-11/12 rounded`} />
            <div className={`${pulse} h-3 w-10/12 rounded`} />
            <div className={`${pulse} h-3 w-9/12 rounded`} />
            <div className={`${pulse} h-3 w-11/12 rounded`} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl p-5 space-y-2"
              >
                <div className={`${pulse} h-8 w-8 rounded-lg`} />
                <div className={`${pulse} h-4 w-2/3 rounded`} />
                <div className={`${pulse} h-3 w-full rounded`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
export function ServicesSkeleton() {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 lg:px-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-14 space-y-4">
          <div className={`${pulse} h-6 w-32 rounded-full mx-auto`} />
          <div className={`${pulse} h-10 md:h-14 w-3/4 rounded-lg mx-auto`} />
          <div className={`${pulse} h-3 w-5/6 rounded mx-auto`} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4"
            >
              <div className={`${pulse} h-12 w-12 rounded-xl`} />
              <div className={`${pulse} h-5 w-2/3 rounded`} />
              <div className="space-y-2">
                <div className={`${pulse} h-3 w-full rounded`} />
                <div className={`${pulse} h-3 w-11/12 rounded`} />
                <div className={`${pulse} h-3 w-3/4 rounded`} />
              </div>
              <div className="flex gap-1.5 pt-2">
                <div className={`${pulse} h-5 w-14 rounded-full`} />
                <div className={`${pulse} h-5 w-16 rounded-full`} />
                <div className={`${pulse} h-5 w-12 rounded-full`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects (section-level) ---------- */
export function ProjectsSectionSkeleton() {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 lg:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-2xl mx-auto text-center mb-14 space-y-4">
          <div className={`${pulse} h-6 w-36 rounded-full mx-auto`} />
          <div className={`${pulse} h-12 md:h-16 w-3/4 rounded-lg mx-auto`} />
          <div className={`${pulse} h-3 w-5/6 rounded mx-auto`} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-5 space-y-3"
            >
              <div className={`${pulse} h-4 w-2/3 rounded`} />
              <div className={`${pulse} h-3 w-full rounded`} />
              <div className={`${pulse} h-28 w-full rounded-xl`} />
              <div className={`${pulse} h-9 w-full rounded-lg`} />
            </div>
          ))}
        </div>
        <div className="border border-gray-200 rounded-3xl p-8 md:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-2">
              <div className={`${pulse} aspect-4/3 w-full rounded-2xl`} />
            </div>
            <div className="lg:col-span-3 space-y-4">
              <div className={`${pulse} h-5 w-44 rounded-full`} />
              <div className={`${pulse} h-8 w-3/4 rounded-lg`} />
              <div className={`${pulse} h-3 w-full rounded`} />
              <div className={`${pulse} h-3 w-4/5 rounded`} />
              <div className="flex gap-3 pt-2">
                <div className={`${pulse} h-12 w-48 rounded-full`} />
                <div className={`${pulse} h-12 w-36 rounded-full`} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-5 space-y-3"
            >
              <div className={`${pulse} h-3 w-8 rounded`} />
              <div className={`${pulse} h-4 w-2/3 rounded`} />
              <div className={`${pulse} h-3 w-full rounded`} />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-16">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`${pulse} h-4 w-36 rounded`} />
          ))}
        </div>
        <div className="flex flex-col items-center text-center">
          <div className={`${pulse} h-3 w-72 rounded mb-5`} />
          <div className={`${pulse} h-14 w-72 rounded-full`} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
export function ContactSkeleton() {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 lg:px-12 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14 space-y-4">
          <div className={`${pulse} h-6 w-32 rounded-full mx-auto`} />
          <div className={`${pulse} h-10 md:h-14 w-3/4 rounded-lg mx-auto`} />
          <div className={`${pulse} h-3 w-2/3 rounded mx-auto`} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-4 border border-gray-200 rounded-2xl p-5"
              >
                <div className={`${pulse} h-12 w-12 rounded-xl shrink-0`} />
                <div className="flex-1 space-y-2">
                  <div className={`${pulse} h-3 w-1/3 rounded`} />
                  <div className={`${pulse} h-4 w-2/3 rounded`} />
                </div>
              </div>
            ))}
          </div>
          <div className="border border-gray-200 rounded-2xl p-6 space-y-4">
            <div className={`${pulse} h-12 w-full rounded-lg`} />
            <div className={`${pulse} h-12 w-full rounded-lg`} />
            <div className={`${pulse} h-12 w-full rounded-lg`} />
            <div className={`${pulse} h-32 w-full rounded-lg`} />
            <div className={`${pulse} h-12 w-40 rounded-full`} />
          </div>
        </div>
      </div>
    </section>
  );
}
