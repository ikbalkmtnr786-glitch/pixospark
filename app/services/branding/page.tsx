import type { Metadata } from "next";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Branding | Pixo Spark",
  description: "Complete brand identity design — logo, color palette, typography, and brand guidelines by Pixo Spark.",
};

export default function BrandingPage() {
  return (
    <div className="pt-28 pb-0">
      <div className="container-inner mb-16">
        <div className="eyebrow">Branding</div>
        <h1 className="section-title text-[var(--color-text)] mb-4">
          Build a Brand That People{" "}
          <span className="gradient-text">Remember & Trust</span>
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-2xl mb-12">
          Complete brand identity design that makes your business look professional, memorable, and trustworthy — from logo to full brand guidelines.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "✨", title: "Logo Design", desc: "Unique, professional logos that capture your brand personality and work across all media." },
            { icon: "🎨", title: "Color Palette", desc: "Strategic color selection that evokes the right emotions and sets you apart from competitors." },
            { icon: "🔤", title: "Typography", desc: "Font selection and hierarchy that makes your brand communications clear and distinctive." },
            { icon: "📖", title: "Brand Guidelines", desc: "Comprehensive brand guide ensuring consistency across all touchpoints and team members." },
            { icon: "🖼️", title: "Visual Identity", desc: "Business cards, letterheads, and branded templates for professional communications." },
            { icon: "🌐", title: "Digital Branding", desc: "Social media profile designs, cover images, and digital brand assets for online presence." },
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
