import type { Metadata } from "next";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Meta Ads Management | Pixo Spark",
  description: "High-converting Facebook & Instagram ad campaigns by Pixo Spark.",
};

export default function MetaAdsPage() {
  return (
    <div className="pt-28 pb-0">
      <div className="container-inner mb-16">
        <div className="eyebrow">Meta Ads Management</div>
        <h1 className="section-title text-[var(--color-text)] mb-4">
          Facebook & Instagram Ads That{" "}
          <span className="gradient-text">Generate Real Results</span>
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-2xl mb-12">
          Run high-converting Meta Ads campaigns that generate qualified leads and sales. From strategy to creatives to optimization — fully managed by Ikbal K M.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🎯", title: "Campaign Strategy", desc: "Custom audience research, funnel planning, and campaign architecture for maximum ROI." },
            { icon: "🎨", title: "Ad Creative Design", desc: "Eye-catching images, videos, and copy that stop the scroll and drive clicks." },
            { icon: "📊", title: "Optimization & Reporting", desc: "Weekly performance reports, A/B testing, and continuous campaign optimization." },
            { icon: "👥", title: "Audience Targeting", desc: "Precise targeting using custom audiences, lookalikes, and retargeting strategies." },
            { icon: "💰", title: "Budget Management", desc: "Smart budget allocation to maximize your ad spend efficiency." },
            { icon: "📱", title: "Instagram & Facebook", desc: "Full management across Feed, Stories, Reels, and all Meta ad placements." },
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
