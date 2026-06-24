import type { Metadata } from "next";
import AboutSection from "@/components/sections/About";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Ikbal K M | Founder of Pixo Spark",
  description: "Meet Ikbal K M — founder of Pixo Spark, AI-powered digital marketing expert specializing in Meta Ads, SEO, Website Development and AI Content Creation.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
      <CTASection />
    </div>
  );
}
