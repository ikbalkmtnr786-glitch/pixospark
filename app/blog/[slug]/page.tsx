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
        a: "Start with ₹500-₹1,000 per day for testing. This gives you enough data to identify what works before scaling. Avoid spending large budgets before you've validated your audience and creative.",
      },
      {
        q: "What is a good ROAS for Meta Ads?",
        a: "A ROAS (Return on Ad Spend) of 3x or higher is generally considered good for most businesses. This means for every ₹1 spent on ads, you earn ₹3 in revenue. However, target ROAS varies by industry and margins.",
      },
      {
        q: "How long does it take for Meta Ads to work?",
        a: "Most campaigns need 7-14 days to exit the learning phase. Budget for at least 30 days before making major changes — early data is often misleading while the algorithm is still optimizing.",
      },
    ],
    content: `
## Why Meta Ads Are Still the Most Powerful Paid Channel in 2026

Facebook and Instagram together reach over 3 billion monthly active users, making Meta's advertising platform unmatched for precise audience targeting at scale. Despite the rise of TikTok and YouTube ads, Meta Ads continue to deliver the best cost-per-lead for most businesses in India and the GCC region.

## The 3-Phase Meta Ads Strategy

### Phase 1 — Testing (Week 1-2)

The goal of your first two weeks is NOT to generate profit. It's to gather data. Run 3-5 different ad creatives to a broad audience and let Meta's algorithm identify who responds.

Keep your daily budget at ₹500-₹1,000 per ad set. Don't touch campaigns during the learning phase.

### Phase 2 — Optimization (Week 3-4)

After 2 weeks, kill underperforming ads. Double the budget on winning ads. Introduce retargeting — show different ads to people who visited your website or engaged with your content.

Key metrics to watch: CTR aim for 1.5%+, track Cost per Lead against your LTV.

### Phase 3 — Scaling (Month 2+)

Once you have proven winning ads, scale by increasing the budget 20-30% every 2-3 days. Introduce Lookalike Audiences based on your best customers.

## Ad Creative Best Practices

Videos outperform images for most objectives. A simple 15-30 second video showing your product or service in action consistently beats static images in 2026.

Hook in the first 3 seconds. Most users scroll past ads in under 2 seconds. Your opening frame must immediately communicate value or curiosity.

Use captions. Over 80% of video on Facebook is watched without sound. Always add subtitles to your video ads.

## Audience Targeting Strategy

Start broad — Meta's AI is now excellent at finding the right people within a broad audience. Over-targeting with too many interest filters often hurts performance.

Audience layers to build: Cold audience (broad targeting by location + age), Warm audience (website visitors, video viewers), Hot audience (custom audience from your customer list).

## Common Meta Ads Mistakes to Avoid

Changing campaigns too frequently kills the learning phase. Running too many ads with too little budget spreads spend too thin. Using low-quality visuals, sending traffic to a slow landing page, and not installing Meta Pixel before running campaigns are all common mistakes to avoid.
    `,
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
        a: "For local Kerala businesses targeting city-specific keywords, you can start seeing improvements in 2-3 months. For competitive keywords like 'digital marketing Kerala', expect 4-8 months of consistent work.",
      },
      {
        q: "Is Google Business Profile free for Kerala businesses?",
        a: "Yes — Google Business Profile is completely free. It's the most important free SEO tool for local businesses in Kerala, helping you appear in Google Maps and local search results.",
      },
      {
        q: "What keywords should a Kerala business target?",
        a: "Target location-specific keywords like '[service] in Kerala', '[service] Kozhikode/Kochi/Thrissur', and '[service] near me'. These have lower competition than national keywords and convert better.",
      },
    ],
    content: `
## Why SEO is Different for Kerala Businesses

SEO strategy for a business in Kerala is fundamentally different from targeting national audiences. Local search intent, Malayalam language considerations, and GCC diaspora targeting all create unique opportunities that most generic SEO guides miss.

## Step 1 — Keyword Research for Kerala Market

Start with Google's free Keyword Planner. Search for your core service and filter by location (Kerala or specific cities like Kozhikode, Kochi, Thrissur, Malappuram).

High-opportunity keyword patterns: "[service] in Kerala", "[service] [city name]", "[service] near me", "[service] for Kerala businesses".

Long-tail keywords (3+ words) are easier to rank for and convert better. A bakery in Calicut should target "birthday cake delivery Calicut" before "cake Kerala".

## Step 2 — On-Page SEO Basics

Every page on your website needs a Title Tag under 60 characters with your main keyword and location. Meta Description of 150-160 characters with keyword and a reason to click. One H1 heading per page with your main keyword. Minimum 500 words of content per service page.

## Step 3 — Google Business Profile

If you do nothing else, do this: create and fully optimize your Google Business Profile. Complete every section including business name, category, description, address, phone, website, hours, and photos (minimum 10). Post weekly updates and get reviews consistently.

## Step 4 — Local Link Building

Get listed on Kerala business directories (JustDial, Sulekha, IndiaMART), local Chamber of Commerce, and write guest posts on Kerala business blogs.

## Step 5 — Content Strategy for SEO

Write blog posts answering questions your customers search for. Ideas: "How to choose a [service] provider in Kerala", "Best [service] in [city]", "How much does [service] cost in Kerala in 2026?"
    `,
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
        a: "Claude (by Anthropic) and ChatGPT are both excellent for marketing copy, blog posts, and ad scripts. Claude tends to produce more nuanced, brand-appropriate writing, while ChatGPT excels at quick ideation and structured content.",
      },
      {
        q: "Can AI tools replace a digital marketer?",
        a: "No — AI tools dramatically increase a marketer's output and effectiveness, but they require human strategy, brand knowledge, and judgment to use well. The best marketers in 2026 combine AI efficiency with human creativity.",
      },
      {
        q: "Are AI marketing tools expensive?",
        a: "Most AI tools offer free tiers sufficient for small businesses. Paid plans typically range from $10-$50/month per tool. The productivity gains far outweigh the cost for most businesses.",
      },
    ],
    content: `
## How AI is Changing Digital Marketing in 2026

Tasks that once took hours — writing ad copy, creating visuals, researching keywords, analyzing campaign data — now take minutes with AI assistance. Marketers who embrace these tools are delivering better results in less time.

## 1. Claude (Anthropic) — Content and Strategy

Best for blog posts, ad copy, email sequences, and strategy documents. Claude excels at producing high-quality, nuanced marketing content that sounds authentically human.

## 2. ChatGPT (OpenAI) — Ideation and Versatility

Best for brainstorming, quick copy, social media captions, and scripts. ChatGPT remains the most versatile AI tool for rapid ideation and generating multiple variations of ad headlines.

## 3. Midjourney — AI Image Generation

Best for ad creatives, social media visuals, and product mockups. Midjourney produces photorealistic images from text prompts — professional-quality visuals without expensive photo shoots.

## 4. AdCreative.ai — Ad Creative Generation

Purpose-built for performance marketing. Generates complete ad creatives optimized for conversion based on millions of high-performing ads in its training data.

## 5. ElevenLabs — AI Voiceovers

Produces human-quality voice narration in dozens of languages including English, Arabic, Hindi, and Malayalam — essential for businesses targeting multilingual markets.

## 6. Runway ML — AI Video Generation

Allows marketers to create and edit videos using text prompts. Generate B-roll, remove backgrounds, or create entirely AI-generated video scenes in minutes.

## 7. Perplexity AI — Research and Competitor Analysis

Combines AI reasoning with real-time web search, making it excellent for market research, competitor analysis, and identifying trending topics in your industry.

## 8. Surfer SEO — AI-Powered Content Optimization

Analyzes top-ranking pages for any keyword and provides real-time guidance on content structure, keyword usage, and length to help your content rank.

## 9. Canva AI — Design and Visual Content

Magic Design, text-to-image, background removal, and brand kit features make it possible for non-designers to produce professional marketing visuals quickly.

## 10. Google Analytics 4 with AI Insights

GA4's built-in AI features automatically surface insights, predict future user behavior, and identify anomalies in your data — the foundation of any data-driven marketing strategy.

## How to Start Without Getting Overwhelmed

Start with one content tool (Claude or ChatGPT) and one visual tool (Canva AI or Midjourney). Master those before adding more to your workflow.
    `,
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
            ← Back to Blog
          </Link>

          <span className="service-tag mb-4 inline-block">{post.category}</span>

          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-[var(--color-text)] mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)] mb-8 pb-8 border-b border-[var(--color-border)]">
            <span>✍️ Ikbal K M</span>
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime} read</span>
          </div>

          <div className="prose-content text-[var(--color-text-muted)] leading-relaxed space-y-4">
            {post.content.trim().split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h2 key={i} className="font-poppins font-bold text-xl text-[var(--color-text)] mt-10 mb-4">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={i} className="font-poppins font-semibold text-lg text-[var(--color-text)] mt-8 mb-3">{line.replace('### ', '')}</h3>;
              }
              if (line.startsWith('**') && line.endsWith('**')) {
                return <p key={i} className="font-semibold text-[var(--color-text)]">{line.replace(/\*\*/g, '')}</p>;
              }
              if (line.startsWith('- ')) {
                return <li key={i} className="ml-4 list-disc">{line.replace('- ', '')}</li>;
              }
              if (line.trim() === '') return null;
              return <p key={i}>{line}</p>;
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
            <h2 className="font-poppins font-bold text-2xl text-[var(--color-text)] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {post.faqs.map((faq) => (
                <div key={faq.q} className="border-b border-[var(--color-border)] pb-6">
                  <h3 className="font-poppins font-semibold text-base text-[var(--color-text)] mb-2">
                    {faq.q}
                  </h3>
