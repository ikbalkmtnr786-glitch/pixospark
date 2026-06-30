import type { Metadata } from "next";
import CTASection from "@/components/sections/CTA";
import { getServiceSchema, getPageFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Content Creation — Blogs, Captions & Ad Copy",
  description: "Strategic content powered by AI — blogs, social media captions, video scripts, email sequences, and ad copy that engages and converts, reviewed by our human creative team.",
};

const faqs = [
  {
    q: "How much does AI content creation cost?",
    a: "Pixo Spark's AI content packages start from ₹5,000/month, covering blog posts, social captions, and ad copy. Pricing depends on content volume and complexity — we offer a free consultation to scope the right package for your needs.",
  },
  {
    q: "Is AI-generated content as good as content written by a human?",
    a: "Our process combines AI speed with human quality control — every piece of content is reviewed and refined by our creative team for brand voice, accuracy, and engagement before it's delivered, so you get the best of both.",
  },
  {
    q: "Will AI content rank on Google?",
    a: "Yes. We follow Google's helpful content guidelines, focusing on genuinely useful, well-researched content with proper structure and SEO optimization — not generic AI text. Quality and originality are prioritized over speed alone.",
  },
  {
    q: "How fast can you deliver content?",
    a: "Most content pieces — blog posts, captions, or ad copy — are delivered within 24-48 hours of project start, thanks to our AI-assisted workflow combined with human review.",
  },
  {
    q: "What types of content do you create?",
    a: "We create blog posts, social media captions, video scripts (Reels, YouTube, TikTok), email sequences, ad copy for Meta and Google Ads, and website content — all tailored to your brand voice and goals.",
  },
];

export default function AIContentPage() {
  const serviceSchema = getServiceSchema(
    "AI Content Creation",
    "AI-powered content creation including blog posts, social media captions, video scripts, email sequences, and ad copy, reviewed and refined by a human creative team.",
    "/services/ai-content"
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
        <div className="eyebrow">AI Content Creation</div>
        <h1 className="section-title text-[var(--color-text)] mb-4">
          AI-Powered Content That{" "}
          <span className="gradient-text">Engages & Converts</span>
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-2xl mb-12">
          High-quality blogs, social media captions, ad copy, email sequences, and video scripts — produced faster and more affordably using AI, reviewed by our human creative team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "✍️", title: "Blog Writing", desc: "SEO-optimized blog posts that rank on Google and establish your brand as an authority." },
            { icon: "📱", title: "Social Media Captions", desc: "Engaging captions for Instagram, Facebook, and LinkedIn that drive likes, comments, and shares." },
            { icon: "🎬", title: "Video Scripts", desc: "Compelling scripts for YouTube, Reels, TikTok, and ad videos that keep viewers watching." },
            { icon: "📧", title: "Email Sequences", desc: "Automated email campaigns that nurture leads and convert subscribers into customers." },
            { icon: "🎯", title: "Ad Copywriting", desc: "High-converting headlines and body copy for Meta Ads, Google Ads, and landing pages." },
            { icon: "🤖", title: "AI + Human Quality", desc: "All AI content is reviewed and refined by our team for brand voice, accuracy, and quality." },
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
            Why AI-Powered Content Gives You an Edge in 2026
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
            Content consistency is one of the biggest challenges businesses face — blogs go unwritten, social media goes quiet, and email lists stop being nurtured simply because content creation is time-consuming. AI-powered workflows solve this by dramatically speeding up the research, drafting, and ideation process, without sacrificing quality.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
            At Pixo Spark, we use AI as a force multiplier, not a replacement for strategy. Every piece of content starts with a clear understanding of your brand voice, target audience, and goals. AI tools handle the heavy lifting of drafting and variation testing, while our team refines tone, accuracy, and persuasive structure — ensuring the final content sounds authentically like your brand, not generic AI output.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            This approach also future-proofs your content for how people search today. We structure blog posts and articles with clear, factual answers that perform well not just on Google, but in AI-generated answers from tools like ChatGPT and Gemini — helping your business get discovered through both traditional and AI-powered search.
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
