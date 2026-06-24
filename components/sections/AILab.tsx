import { AI_LAB } from "@/lib/constants";

export default function AILabSection() {
  return (
    <section id="ai-lab" className="section-padding" style={{ background: "linear-gradient(135deg,#060D1F,#0F172A,#060D1F)" }}>
      <div className="container-inner">
        <div className="mb-12">
          <div className="eyebrow" style={{ color: "#06B6D4" }}>AI Creative Lab</div>
          <h2 className="section-title mb-3" style={{ color: "#F1F5F9" }}>
            Next-Gen Creative <span className="gradient-text">Production with AI</span>
          </h2>
          <p style={{ color: "#94A3B8" }} className="max-w-xl">
            We harness the latest AI tools to create marketing assets that cost 10x more at traditional agencies.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AI_LAB.map((item) => (
            <div key={item.title} className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-poppins font-bold text-base mb-2" style={{ color: "#F1F5F9" }}>{item.title}</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#94A3B8" }}>{item.desc}</p>
              <p className="text-xs" style={{ color: "#64748B" }}>🛠 {item.tools}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
