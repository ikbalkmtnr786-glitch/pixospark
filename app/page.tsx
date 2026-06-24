import type { Metadata } from "next";
import HeroSection from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import AboutSection from "@/components/sections/About";
import ServicesSection from "@/components/sections/Services";
import WhyChooseSection from "@/components/sections/WhyChoose";
import CaseStudiesSection from "@/components/sections/CaseStudies";
import AILabSection from "@/components/sections/AILab";
import TestimonialsSection from "@/components/sections/Testimonials";
import ROICalculator from "@/components/sections/ROICalculator";
import FAQSection from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/Contact";
import CTASection from "@/components/sections/CTA";
import { getFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pixo Spark | AI-Powered Digital Marketing | Meta Ads, SEO & Website Development",
  description:
    "Pixo Spark by Ikbal K M — AI-powered digital marketing services including Meta Ads management, SEO, website development, and AI content creation. Serving businesses worldwide and GCC. Book free strategy call.",
  alternates: { canonical: "https://pixospark.com" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }}
      />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <CaseStudiesSection />
      <AILabSection />
      <TestimonialsSection />
      <ROICalculator />
      <FAQSection />
      <ContactSection />
      <CTASection />
    </>
  );
}
