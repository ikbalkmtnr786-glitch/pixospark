import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="relative py-28 px-4 text-center overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A,#1e3a6e,#0F172A)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full opacity-10 blur-[80px] bg-secondary top-0 left-1/2 -translate-x-1/2" />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-poppins font-extrabold mb-4 leading-tight" style={{ fontSize: "clamp(1.75rem,4vw,3rem)", color: "#F1F5F9" }}>
          Ready to Grow Your Brand?
        </h2>
        <p className="mb-8 leading-relaxed" style={{ color: "#94A3B8" }}>
          Book a free 30-minute strategy call. No commitment. Just a conversation about your business goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
            Book Free Strategy Call
          </a>
          <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-base border transition-all duration-200" style={{ borderColor: "rgba(255,255,255,0.2)", color: "#F1F5F9" }}>
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
