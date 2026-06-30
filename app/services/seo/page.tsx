import type { Metadata } from "next";
import CTASection from "@/components/sections/CTA";
import { getServiceSchema, getPageFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SEO Services in Kerala & GCC",
  description: "Rank higher on Google and drive organic traffic with Pixo Spark's complete SEO services — on-page, off-page, technical, and local SEO for India & GCC businesses.",
};

const faqs = [
  {
    q: "How much does SEO cost in Kerala?",
    a: "Pixo Spark's SEO packages start from ₹5,000/month, with custom pricing based on competition and goals. We offer a free consultation to recommend the right package for your business.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "Most clients start seeing meaningful ranking improvements within 3-6 months. SEO is a long-term strategy — early wins come from technical fixes and on-page optimization, while competitive keywords take longer.",
  },
  {
    q: "What's included in your SEO service?",
    a: "Our SEO service includes keyword research, on-page optimization, technical SEO audits, content strategy, local SEO (Google Business Profile), link building, and monthly performance reports.",
  },
  {
    q: "Do you offer local SEO for Kerala businesses?",
    a: "Yes — local SEO is one of our specialties. We help businesses rank in Google Maps and local search results across Kerala, India, and the GCC region.",
  },
  {
    q: "Can you fix a website that's losing Google rankings?",
    a: "Absolutely. We start with a full technical SEO audit to identify ranking drops, then fix issues like broken links, slow page speed, duplicate content, or algorithm penalties.",
  },
];

export default function SEOPage() {
  const serviceSchema = getServiceSchema(
    "SEO Services",
    "Complete on-page, off-page, technical, and local SEO services to help businesses rank higher on Google.",
    "/services/seo"
  );
  const faqSchema = getPageFAQSchema(faqs);

  return (
    <div className="pt-28 pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-inner mb-16">
        <div className="eyebrow">SEO Services</div>
        <h1 className="section-title text-[var(--color-text)] mb-4">
          Rank Higher on Google &{" "}
          <span className="gradient-text">Drive Organic Traffic</span>
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-2xl mb-12">
          Complete SEO strategy that gets your business on Page 1 of Google. On-page, off-page, technical SEO, and local SEO for India & GCC markets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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

        <div className="max-w-3xl mb-16">
          <h2 className="font-poppins font-bold text-2xl text-[var(--color-text)] mb-4">
            Why Your Business Needs SEO in 2026
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
            Search engine optimization remains one of the highest-ROI marketing channels available to businesses today. Unlike paid ads that stop generating leads the moment you stop paying, SEO builds long-term, compounding organic traffic that keeps working for your business month after month.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
            At Pixo Spark, we combine technical expertise with AI-powered research tools to identify the exact keywords your customers are searching for — whether they're looking for services in Kerala, across India, or in the GCC region. Our approach covers every layer of SEO: the technical foundation of your website, the content that answers customer questions, and the off-page signals that build authority with Google.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            We also optimize for how people search today — including voice search and AI tools like ChatGPT and Google's AI Overviews — by structuring content with clear, factual answers and proper schema markup. This means your business shows up not just in traditional search results, but increasingly in AI-generated answers too.
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
