import type { Metadata } from "next";
import ContactSection from "@/components/sections/Contact";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Contact Pixo Spark | Book Free Strategy Call",
  description: "Get in touch with Ikbal K M at Pixo Spark. Book a free 30-minute strategy call. Phone: +91 9061124162. Email: pixospark@gmail.com",
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-20">
        <ContactSection />
        <CTASection />
      </div>
    </>
  );
}
