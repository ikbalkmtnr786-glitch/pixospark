import type { Metadata } from "next";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Social Media Marketing | Pixo Spark",
  description: "Grow your social media presence with consistent, engaging content strategies across Instagram, Facebook, LinkedIn and more.",
};

export default function SocialMediaPage() {
  return (
    <div className="pt-28 pb-0">
      <div className="container-inner mb-16">
        <div className="eyebrow">Social Media Marketing</div>
        <h1 className="section-title text-[var(--color-text)] mb-4">
          Grow Your Social Media &{" "}
          <span className="gradient-text">Build a Loyal Community</span>
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-2xl mb-12">
          Strategic social media management that grows your followers, increases engagement, and converts your audience into paying customers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "📱", title: "Content Strategy", desc: "Custom content calendar and strategy tailored to your brand, audience, and business goals." },
            { icon: "🎨", title: "Content Creation", desc: "Professional graphics, captions, reels scripts, and stories designed for maximum engagement." },
            { icon: "📈", title: "Growth Strategy", desc: "Proven tactics to grow your followers organically with the right target audience." },
            { icon: "💬", title: "Community Management", desc: "Respond to comments and messages promptly to build relationships with your audience." },
            { icon: "📊", title: "Analytics & Reporting", desc: "Monthly performance reports tracking followers, reach, engagement, and conversions." },
            { icon: "🚀", title: "Paid Promotion", desc: "Boost top-performing posts and run targeted campaigns to accelerate growth." },
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
