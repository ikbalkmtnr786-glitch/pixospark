import type { Metadata } from "next";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Graphic Design | Pixo Spark",
  description: "Eye-catching social media posts, banners, posters and brand visuals by Pixo Spark.",
};

export default function GraphicDesignPage() {
  return (
    <div className="pt-28 pb-0">
      <div className="container-inner mb-16">
        <div className="eyebrow">Graphic Design</div>
        <h1 className="section-title text-[var(--color-text)] mb-4">
          Designs That Make Your Brand{" "}
          <span className="gradient-text">Stand Out</span>
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-2xl mb-12">
          Professional graphic design for social media, ads, and brand visuals that capture attention and communicate your message clearly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "📱", title: "Social Media Posts", desc: "Scroll-stopping Instagram, Facebook, and LinkedIn posts designed for maximum engagement." },
            { icon: "🎯", title: "Ad Creatives", desc: "High-converting banner ads and promotional graphics for digital campaigns." },
            { icon: "🖼️", title: "Posters & Flyers", desc: "Eye-catching print and digital posters for events, promotions, and announcements." },
            { icon: "📧", title: "Email Templates", desc: "Professional email headers and newsletter designs that get opened and clicked." },
            { icon: "🎨", title: "Brand Visuals", desc: "Consistent visual content that reinforces your brand identity across all platforms." },
            { icon: "⚡", title: "Fast Delivery", desc: "Quick turnaround on all design projects — most delivered within 24-48 hours." },
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
