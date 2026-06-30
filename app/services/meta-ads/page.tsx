import type { Metadata } from "next";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Meta Ads Management — Facebook & Instagram Ads",
  description: "Run high-converting Facebook & Instagram ad campaigns with Pixo Spark. Strategy, creatives, targeting, and optimization — fully managed by a Meta Ads certified expert.",
};

const faqs = [
  {
    q: "How much does Meta Ads management cost in Kerala?",
    a: "Pixo Spark's Meta Ads management starts from ₹5,000/month (excluding ad spend), with pricing based on campaign complexity and number of ad sets. We offer a free consultation to recommend the right budget for your goals.",
  },
  {
    q: "How much should I spend on Facebook and Instagram ads?",
    a: "We typically recommend starting with a minimum daily budget of ₹500-₹1,000 for testing, scaling up once we identify winning audiences and creatives. Your total ad spend depends on your industry, goals, and target audience size.",
  },
  {
    q: "How soon will I see results from Meta Ads?",
    a: "Most campaigns start generating leads within 7-14 days. The first 1-2 weeks are used for audience testing and creative optimization, after which performance typically improves significantly.",
  },
  {
    q: "Do you create the ad creatives too?",
    a: "Yes — our service includes full ad creative design, including images, videos, and ad copy. We use AI-powered tools combined with proven direct-response copywriting to create ads that convert.",
  },
  {
    q: "Can you run ads for businesses in the GCC region?",
    a: "Absolutely. We manage Meta Ads campaigns for clients across India, UAE, Saudi Arabia, Qatar, Kuwait, and the wider GCC region, with localized targeting and messaging for each market.",
  },
];

export default function MetaAdsPage() {
  return (
    <div className="pt-28 pb-0">
      <div className="container-inner mb-16">
        <div className="eyebrow">Meta Ads Management</div>
        <h1 className="section-title text-[var(--color-text)] mb-4">
          Facebook & Instagram Ads That{" "}
          <span className="gradient-text">Generate Real Results</span>
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-2xl mb-12">
          Run high-converting Meta Ads campaigns that generate qualified leads and sales. From strategy to creatives to optimization — fully managed by Ikbal K M.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: "🎯", title: "Campaign Strategy", desc: "Custom audience research, funnel planning, and campaign architecture for maximum ROI." },
            { icon: "🎨", title: "Ad Creative Design", desc: "Eye-catching images, videos, and copy that stop the scroll and drive clicks." },
            { icon: "📊", title: "Optimization & Reporting", desc: "Weekly performance reports, A/B testing, and continuous campaign optimization." },
            { icon: "👥", title: "Audience Targeting", desc: "Precise targeting using custom audiences, lookalikes, and retargeting strategies." },
            { icon: "💰", title: "Budget Management", desc: "Smart budget allocation to maximize your ad spend efficiency." },
            { icon: "📱", title: "Instagram & Facebook", desc: "Full management across Feed, Stories, Reels, and all Meta ad placements." },
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
            Why Meta Ads Still Outperform Other Channels in 2026
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
            With over 3 billion monthly active users across Facebook and Instagram, Meta Ads remain one of the most powerful platforms for reaching highly specific audiences at scale. Unlike organic social media growth, which can take months to build momentum, Meta Ads deliver immediate visibility — putting your business in front of people actively interested in what you offer.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
            At Pixo Spark, we go beyond simply boosting posts. Every campaign starts with deep audience research — understanding who your ideal customer is, what stops the scroll for them, and what messaging actually drives action. We build complete funnels, from cold traffic awareness campaigns through to retargeting sequences that convert warm leads into paying customers.
          </p>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            As a Meta Ads certified specialist, Ikbal personally manages every account — no junior account managers, no outsourced media buying. Combined with AI-powered creative testing and weekly performance reporting, this hands-on approach consistently delivers a stronger return on ad spend for businesses across India and the GCC.
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
