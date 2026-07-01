import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTA";
import { getPageFAQSchema } from "@/lib/schema";
import { notFound } from "next/navigation";

const posts: Record<string, {
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
  faqs: { q: string; a: string }[];
}> = {
  "meta-ads-strategy-guide-2026": {
    title: "The Complete Meta Ads Strategy Guide for 2026",
    description: "Everything you need to run profitable Facebook and Instagram ad campaigns — audience targeting, creative testing, budget optimization, and more.",
    date: "July 1, 2026",
    category: "Meta Ads",
    readTime: "12 min",
    faqs: [
      {
        q: "How much should I spend on Meta Ads as a beginner?",
        a: "Start with 500-1000 per day for testing. This gives you enough data to identify what works before scaling.",
      },
      {
        q: "What is a good ROAS for Meta Ads?",
        a: "A ROAS of 3x or higher is generally considered good. This means for every 1 rupee spent on ads, you earn 3 rupees in revenue.",
      },
      {
        q: "How long does it take for Meta Ads to work?",
        a: "Most campaigns need 7-14 days to exit the learning phase. Budget for at least 30 days before making major changes.",
      },
    ],
    content: "Meta Ads reach over 3 billion monthly active users across Facebook and Instagram. The key to success is a 3-phase approach: Testing (Week 1-2) where you run multiple creatives to identify winners, Optimization (Week 3-4) where you kill underperformers and scale winners, and Scaling (Month 2+) where you increase budgets 20-30% every few days. Always use video over images, hook viewers in the first 3 seconds, and add captions since 80% of Facebook video is watched without sound. Build audience layers from cold to warm to hot, and avoid common mistakes like changing campaigns too early or spreading budget too thin.",
  },
  "seo-for-kerala-businesses": {
    title: "SEO for Kerala Businesses: How to Rank on Google in 2026",
    description: "A practical SEO guide for small and medium businesses in Kerala — keyword research, local SEO, Google Business Profile, and what actually moves rankings in 2026.",
    date: "June 25, 2026",
    category: "SEO",
    readTime: "10 min",
    faqs: [
      {
        q: "How long does SEO take to work for a Kerala business?",
        a: "For local Kerala businesses targeting city-specific keywords, you can start seeing improvements in 2-3 months. Competitive keywords take 4-8 months.",
      },
      {
        q: "Is Google Business Profile free for Kerala businesses?",
        a: "Yes, Google Business Profile is completely free. It is the most important free SEO tool for local businesses in Kerala.",
      },
      {
        q: "What keywords should a Kerala business target?",
        a: "Target location-specific keywords like service in Kerala, service plus city name, and service near me. These have lower competition and convert better.",
      },
    ],
    content: "SEO for Kerala businesses requires a local-first approach. Start with keyword research using Google Keyword Planner, filtering for Kerala cities like Kozhikode, Kochi, Thrissur, and Malappuram. Target long-tail keywords with location modifiers as they convert better. Every page needs a title tag under 60 characters, a meta description of 150-160 characters, one H1 heading, and minimum 500 words of content. The single most important action for local SEO is creating and fully optimizing your Google Business Profile with complete information, 10+ photos, weekly posts, and consistent review collection. Build local backlinks from JustDial, Sulekha, IndiaMART, and local business blogs. Write blog content answering questions your customers search for.",
  },
  "ai-tools-for-digital-marketing": {
    title: "10 AI Tools Every Digital Marketer Should Use in 2026",
    description: "The AI tools transforming digital marketing in 2026 — from content creation and ad creatives to SEO research and customer analytics.",
    date: "June 18, 2026",
    category: "AI Marketing",
    readTime: "8 min",
    faqs: [
      {
        q: "Which AI tool is best for writing marketing content?",
        a: "Claude by Anthropic and ChatGPT are both excellent for marketing copy, blog posts, and ad scripts. Claude produces more nuanced brand-appropriate writing while ChatGPT excels at quick ideation.",
      },
      {
        q: "Can AI tools replace a digital marketer?",
        a: "No. AI tools increase a marketer's output and effectiveness but require human strategy, brand knowledge, and judgment. The best marketers combine AI efficiency with human creativity.",
      },
      {
        q: "Are AI marketing tools expensive?",
        a: "Most AI tools offer free tiers sufficient for small businesses. Paid plans range from 10 to 50 dollars per month. The productivity gains far outweigh the cost.",
      },
    ],
    content: "AI has fundamentally changed digital marketing. The top 10 tools making the biggest impact are: Claude by Anthropic for content and strategy, ChatGPT for ideation and versatility, Midjourney for AI image generation, AdCreative.ai for ad creative generation, ElevenLabs for AI voiceovers in multiple languages including Malayalam and Arabic, Runway ML for AI video generation, Perplexity AI for research and competitor analysis, Surfer SEO for AI-powered content optimization, Canva AI for design and visual content, and Google Analytics 4 with AI Insights for understanding performance data. Start with one content tool and one visual tool before expanding your AI workflow.",
  },
};

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const faqSchema = getPageFAQSchema(post.faqs);

  return (
    <div className="pt-28 pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Person", name: "Ikbal K M" },
            publisher: { "@type": "Organization", name: "Pixo Spark" },
          }),
        }}
      />
      <div className="container-inner mb-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-[var(--color-primary)] text-sm mb-8 inline-block hover:underline">
            Back to Blog
          </Link>
          <span className="service-tag mb-4 inline-block">{post.category}</span>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-[var(--color-text)] mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)] mb-8 pb-8 border-b border-[var(--color-border)]">
            <span>Ikbal K M</span>
            <span>{post.date}</span>
            <span>{post.readTime} read</span>
          </div>
          <p className="text-[var(--color-text-muted)] leading-relaxed text-base mb-12">
            {post.content}
          </p>
          <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
            <h2 className="font-poppins font-bold text-2xl text-[var(--color-text)] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {post.faqs.map((faq) => (
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
      </div>
      <CTASection />
    </div>
  );
}
