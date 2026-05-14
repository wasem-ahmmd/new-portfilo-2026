const ITEMS = [
  "Founder-friendly pricing",
  "Fast turnarounds",
  "Direct communication",
  "Modern stack",
];

export default function TrustStrip() {
  return (
    <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-gray-500">
      {ITEMS.map((item) => (
        <span key={item} className="inline-flex items-center gap-2">
          <CheckIcon />
          {item}
        </span>
      ))}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#D1701F]"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
