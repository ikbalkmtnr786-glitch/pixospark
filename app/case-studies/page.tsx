import type { Metadata } from "next";
import CaseStudiesSection from "@/components/sections/CaseStudies";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Case Studies | Real Digital Marketing Results",
  description: "Real case studies from Pixo Spark — Meta Ads lead generation, SEO growth, website conversions, and social media success stories.",
};

export default function CaseStudiesPage() {
  return (
    <div className="pt-20">
      <CaseStudiesSection />
      <CTASection />
    </div>
  );
}
