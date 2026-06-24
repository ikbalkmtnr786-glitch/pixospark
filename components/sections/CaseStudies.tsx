import { CASE_STUDIES } from "@/lib/constants";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="section-padding bg-[var(--color-bg-section)]">
      <div className="container-inner">
        <div className="mb-12">
          <div className="eyebrow">Case Studies</div>
          <h2 className="section-title text-[var(--color-text)] mb-3">
            Real Results for <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="text-[var(--color-text-muted)]">Numbers don&apos;t lie. Here&apos;s what we&apos;ve achieved for our clients.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs) => (
            <div key={cs.id} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl p-7 card-hover">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">{cs.category}</span>
              <h3 className="font-poppins font-bold text-lg text-[var(--color-text)] mb-2">{cs.title}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">{cs.description}</p>
              <div className="grid grid-cols-2 gap-3">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="bg-[var(--color-bg-section)] rounded-2xl p-4">
                    <div className="font-poppins font-extrabold text-xl gradient-text">{m.value}</div>
                    <div className="text-xs text-[var(--color-text-muted)] mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
