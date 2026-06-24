import type { Metadata } from "next";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "SEO Services | Pixo Spark",
  description: "Rank higher on Google and drive organic traffic. Complete SEO services by Pixo Spark — on-page, off-page, technical SEO.",
};

export default function SEOPage() {
  return (
    <div className="pt-28 pb-0">
      <div className="container-inner mb-16">
        <div className="eyebrow">SEO Services</div>
        <h1 className="section-title text-[var(--color-text)] mb-4">
          Rank Higher on Google &{" "}
          <span className="gradient-text">Drive Organic Traffic</span>
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-2xl mb-12">
          Complete SEO strategy that gets your business on Page 1 of Google. On-page, off-page, technical SEO, and local SEO for India & GCC markets.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🔍", title: "Keyword Research", desc: "Deep keyword analysis to find high-intent, low-competition keywords that drive qualified traffic." },
            { icon: "📄", title: "On-Page SEO", desc: "Optimize titles, meta descriptions, headings, content, and internal linking for maximum rankings." },
            { icon: "🔗", title: "Link Building", desc: "Quality backlinks from relevant, authoritative websites to boost your domain authority." },
            { icon: "⚙️", title: "Technical SEO", desc: "Fix crawl errors, improve page speed, mobile optimization, and site structure." },
            { icon: "📍", title: "Local SEO", desc: "Dominate local search results and Google Maps for your city or region — India & GCC." },
            { icon: "📈", title: "Monthly Reporting", desc: "Clear, detailed monthly reports showing rankings, traffic growth, and ROI." },
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
