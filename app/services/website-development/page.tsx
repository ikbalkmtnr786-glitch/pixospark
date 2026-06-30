import type { Metadata } from "next";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Website Development — Next.js, WordPress & Shopify",
  description: "Custom websites that look premium, load in under 2 seconds, and convert visitors into customers. Built with Next.js, WordPress, or Shopify for businesses in India & GCC.",
};

const faqs = [
  {
    q: "How much does a website cost in Kerala?",
    a: "Pixo Spark's website packages range from ₹8,000 for a basic 5-page site to ₹60,000+ for a premium business website with advanced SEO. E-commerce sites start from ₹45,000. We offer a free consultation to recommend the right package.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most business websites are completed in 2-4 weeks, depending on the number of pages and content readiness. Simple websites can be delivered faster, while e-commerce and custom-feature sites may take longer.",
  },
  {
    q: "Which platform is best — Next.js, WordPress, or Shopify?",
    a: "Next.js is best for performance-focused business sites with custom design needs. WordPress suits clients who want to easily edit content themselves. Shopify is the top choice for e-commerce stores. We recommend the right platform based on your goals during the discovery call.",
  },
  {
    q: "Will my website be optimized for Google from the start?",
    a: "Yes — every website we build includes proper SEO foundations: clean URL structure, meta tags, schema markup, fast loading speed, and mobile optimization, so you're ready to rank from launch day.",
  },
  {
    q: "Can I update the website myself after it's built?",
    a: "Absolutely. We set up an easy-to-use content management system and provide a training walkthrough, so you can update text, images, and basic content without needing to know how to code.",
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <div className="pt-28 pb-0">
      <div className="container-inner mb-16">
        <div className="eyebrow">Website Development</div>
        <h1 className="section-title text-[var(--color-text)] mb-4">
          Premium Websites That{" "}
          <span className="gradient-text">Convert Visitors Into Customers</span>
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-2xl mb-12">
          Custom websites that look stunning, load in under 2 seconds, and are built to generate leads and sales. Next.js, WordPress, or Shopify — your choice.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "⚡", title: "Lightning Fast", desc: "PageSpeed 95+ scores. Optimized for Core Web Vitals — fast loading on all devices." },
            { icon: "📱", title: "Mobile First", desc: "100% responsive design that looks perfect on phones, tablets, and desktops." },
            { icon: "🎨", title: "Premium Design", desc: "Modern, professional designs inspired by top brands — Apple, Stripe, Linear aesthetic." },
            { icon: "🔍", title: "SEO Ready", desc: "Built with proper HTML structure, schema markup, and technical SEO from day one." },
            { icon: "🛒", title: "E-commerce", desc: "Shopify and WooCommerce stores with payment integration and inventory management." },
            { icon: "🔧", title: "Easy to Manage", desc: "Simple CMS so you can update content yourself without touching any code." },
          ].map((item) => (
            <div key={item.title} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 card-hover">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-poppins font-bold text-base text-[var(--color-text)] mb-2">{item.title}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-poppins font-bold text-2xl text-[var(--color-text)] mb-4">
            Why Your Business Needs a Premium Website in 2026
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
            Your website is often the first impression a potential customer has of your business — and it forms in under 3 seconds. A slow, outdated, or poorly designed site doesn't just look unprofessional; it actively loses you customers before they even read what you offer. Studies consistently show that visitors abandon sites that take longer than 3 seconds to load.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
            At Pixo Spark, every website is built with conversion in mind, not just aesthetics. We design around clear calls-to-action, fast loading speeds, and mobile-first layouts, since the majority of visitors in India and the GCC browse on their phones. Whether you need a Next.js site for maximum performance, a WordPress site for easy self-management, or a Shopify store for e-commerce, we build on the platform that fits your goals.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            We also build with SEO and AI search visibility baked in from day one — proper schema markup, clean code structure, and fast Core Web Vitals scores — so your new website isn't just beautiful, it's discoverable on Google and increasingly cited by AI tools like ChatGPT and Gemini.
          </p>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-poppins font-bold text-2xl text-[var(--color-text)] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-[var(--color-border)] pb-6">
                <h3 className="font-poppins font-semibold text-base text-[var(--color-text)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
}
