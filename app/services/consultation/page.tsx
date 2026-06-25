import type { Metadata } from "next";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Marketing Consultation | Pixo Spark",
  description: "1-on-1 strategy sessions to audit your marketing, identify growth opportunities, and create a clear action plan.",
};

export default function ConsultationPage() {
  return (
    <div className="pt-28 pb-0">
      <div className="container-inner mb-16">
        <div className="eyebrow">Marketing Consultation</div>
        <h1 className="section-title text-[var(--color-text)] mb-4">
          Get a Clear Strategy to{" "}
          <span className="gradient-text">Grow Your Business</span>
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-2xl mb-12">
          1-on-1 strategy sessions with Ikbal K M to audit your current marketing, identify growth opportunities, and create a clear, actionable plan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🔍", title: "Marketing Audit", desc: "Complete review of your current marketing — ads, SEO, social media, website, and content." },
            { icon: "🎯", title: "Growth Strategy", desc: "Custom growth roadmap with clear priorities, timelines, and expected results for your business." },
            { icon: "💰", title: "Budget Planning", desc: "Smart allocation of your marketing budget across channels for maximum ROI." },
            { icon: "📊", title: "Competitor Analysis", desc: "Deep dive into what your competitors are doing and how to outperform them." },
            { icon: "🤝", title: "1-on-1 Sessions", desc: "Direct access to Ikbal K M via video call, WhatsApp, or in-person for personalized advice." },
            { icon: "📋", title: "Action Plan", desc: "Detailed written action plan you can implement immediately or hand to your team." },
          ].map((item) => (
            <div key={item.title} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 card-hover">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-poppins font-bold text-base text-[var(--color-text)] mb-2">{item.title}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <CTASection />
    </div>
  );
}
