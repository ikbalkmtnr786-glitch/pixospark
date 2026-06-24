import type { Metadata } from "next";
import ServicesSection from "@/components/sections/Services";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services | Meta Ads, SEO, Website Development & AI Content",
  description: "Complete digital marketing services by Pixo Spark — Meta Ads, SEO, Website Development, AI Content Creation, Graphic Design, Branding, Social Media Marketing.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesSection />
      <CTASection />
    </div>
  );
}
