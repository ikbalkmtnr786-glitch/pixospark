"use client";
// TrustBar
export default function TrustBar() {
  const items = [
    "Meta Certified Partner","Google Analytics Certified","SEO Specialist",
    "AI Content Expert","Website Developer","50+ Projects Delivered",
    "GCC Specialist","Available Worldwide","Creative Design Expert",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-[var(--color-border)] bg-[var(--color-bg-section)] py-4 overflow-hidden">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-2 whitespace-nowrap text-[var(--color-text-muted)] text-sm font-semibold">
            <span className="text-accent">●</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}
