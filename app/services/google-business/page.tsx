import type { Metadata } from "next";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Google Business Profile Optimization | Pixo Spark",
  description: "Dominate local search and Google Maps. Google Business Profile optimization for India & GCC businesses by Pixo Spark.",
};

export default function GoogleBusinessPage() {
  return (
    <div className="pt-28 pb-0">
      <div className="container-inner mb-16">
        <div className="eyebrow">Google Business Profile</div>
        <h1 className="section-title text-[var(--color-text)] mb-4">
          Dominate Local Search &{" "}
          <span className="gradient-text">Google Maps</span>
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-2xl mb-12">
          Get your business in the top 3 Google Maps results for local searches. Essential for restaurants, salons, clinics, and service businesses across India and GCC.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "📍", title: "Profile Optimization", desc: "Complete GBP setup with optimized business info, categories, and attributes for maximum visibility." },
            { icon: "🖼️", title: "Photo & Video Upload", desc: "Professional photos and videos that showcase your business and attract more customers." },
            { icon: "⭐", title: "Review Management", desc: "Strategy to get more 5-star reviews and respond professionally to all customer feedback." },
            { icon: "📝", title: "Google Posts", desc: "Regular posts about offers, events, and updates to keep your profile active and engaging." },
            { icon: "📊", title: "Insights & Reporting", desc: "Monthly reports on profile views, search queries, and customer actions from your GBP." },
            { icon: "🌍", title: "Local SEO Integration", desc: "Combine GBP optimization with local SEO for maximum visibility in your area." },
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
