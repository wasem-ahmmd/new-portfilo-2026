type Step = {
  step: string;
  title: string;
  desc: string;
};

const PROCESS: Step[] = [
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

export default function ProcessStrip() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gray-500">
          How we&apos;ll work together
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROCESS.map((p, i) => (
          <ProcessStep key={p.step} step={p} isLast={i === PROCESS.length - 1} />
        ))}
      </div>
    </div>
  );
}

function ProcessStep({ step, isLast }: { step: Step; isLast: boolean }) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#D1701F]/30 hover:shadow-[0_10px_30px_rgba(209,112,31,0.08)] hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D1701F]">
          {step.step}
        </span>
        {!isLast && (
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
        {step.title}
      </h4>
      <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
    </div>
  );
}
