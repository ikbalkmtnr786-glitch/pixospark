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

**What to test:**
- 3 different headlines
- 2 different images or videos  
- 2 different audience segments (broad vs interest-based)

Keep your daily budget at ₹500-₹1,000 per ad set. Don't touch campaigns during the learning phase.

### Phase 2 — Optimization (Week 3-4)

After 2 weeks, kill underperforming ads (cost per result more than 2x your target). Double the budget on winning ads. Introduce retargeting — show different ads to people who visited your website or engaged with your content.

**Key metrics to watch:**
- CTR (Click-Through Rate): Aim for 1.5%+
- CPM (Cost per 1000 impressions): Varies by audience
- Cost per Lead: Depends on your industry — track against your LTV

### Phase 3 — Scaling (Month 2+)

Once you have proven winning ads, scale by increasing the budget 20-30% every 2-3 days (avoid sudden large increases that reset the learning phase). Introduce Lookalike Audiences based on your best customers.

## Ad Creative Best Practices

**Videos outperform images** for most objectives. A simple 15-30 second video showing your product or service in action consistently beats static images in 2026.

**Hook in the first 3 seconds.** Most users scroll past ads in under 2 seconds. Your opening frame must immediately communicate value or curiosity.

**Use captions.** Over 80% of video on Facebook is watched without sound. Always add subtitles to your video ads.

## Audience Targeting Strategy

Start broad — Meta's AI is now excellent at finding the right people within a broad audience. Over-targeting with too many interest filters often hurts performance by limiting the algorithm's ability to optimize.

**Audience layers to build:**
1. Cold audience: Broad targeting by location + age
2. Warm audience: Website visitors, video viewers, page engagers
3. Hot audience: Custom audience from your customer list

## Common Meta Ads Mistakes to Avoid

- Changing campaigns too frequently (kills the learning phase)
- Running too many ads with too little budget (spreads spend too thin)
- Using low-quality visuals (blurry images, pixelated videos)
- Sending traffic to a slow or poorly-designed landing page
- Not installing Meta Pixel before running campaigns
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
        a: "Yes — Google Business Profile (formerly Google My Business) is completely free. It's the most important free SEO tool for local businesses in Kerala, helping you appear in Google Maps and local search results.",
      },
      {
        q: "What keywords should a Kerala business target?",
        a: "Target location-specific keywords like '[service] in Kerala', '[service] Kozhikode/Kochi/Thrissur', and '[service] near me'. These have lower competition than national keywords and convert better since searchers have local intent.",
      },
    ],
    content: `
## Why SEO is Different for Kerala Businesses

SEO strategy for a business in Kerala is fundamentally different from targeting national audiences. Local search intent, Malayalam language considerations, and GCC diaspora targeting all create unique opportunities that most generic SEO guides miss.

## Step 1 — Keyword Research for Kerala Market

Start with Google's free Keyword Planner. Search for your core service and filter by location (Kerala or specific cities like Kozhikode, Kochi, Thrissur, Malappuram).

**High-opportunity keyword patterns:**
- "[service] in Kerala" — e.g., "digital marketing in Kerala"
- "[service] [city name]" — e.g., "web design Kozhikode"
- "[service] near me" — captured via Google Business Profile
- "[service] for Kerala businesses" — targets business owners

Long-tail keywords (3+ words) are easier to rank for and convert better. A bakery in Calicut should target "birthday cake delivery Calicut" before "cake Kerala".

## Step 2 — On-Page SEO Basics

Every page on your website needs:

**Title Tag:** Keep it under 60 characters. Include your main keyword and location. Example: "Digital Marketing Agency in Kerala | Pixo Spark"

**Meta Description:** 150-160 characters. Include keyword + a reason to click. Example: "Grow your business with expert Meta Ads, SEO, and web design services in Kerala. Free strategy consultation."

**H1 Heading:** One per page. Your main keyword should appear naturally here.

**Content:** Minimum 500 words per service page. Write for humans first, include keywords naturally.

## Step 3 — Google Business Profile — Most Important for Local SEO

If you do nothing else, do this: create and fully optimize your Google Business Profile.

**Complete every section:**
- Business name, category, description
- Full address (or service area if home-based)
- Phone number and website
- Business hours
- Photos (minimum 10 — inside, outside, team, work samples)
- Services list with descriptions

**Post weekly updates** — Google rewards active profiles with higher rankings.

**Get reviews consistently** — Ask every satisfied customer for a Google review. Even 10-15 genuine reviews can dramatically improve your local rankings.

## Step 4 — Local Link Building

Links from other Kerala/India websites signal to Google that you're a legitimate local business.

**Easy local links to get:**
- Kerala business directories (JustDial, Sulekha, IndiaMART)
- Local Chamber of Commerce listings
- Guest posts on Kerala business blogs
- Mentions in local online news sites

## Step 5 — Content Strategy for SEO

Write blog posts that answer questions your customers actually search for.

**Blog ideas for Kerala businesses:**
- "How to choose a [service] provider in Kerala"
- "Best [service] in [city] — what to look for"
- "How much does [service] cost in Kerala in 2026?"

These informational posts attract organic traffic and build authority on your topic.
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
        a: "No — AI tools dramatically increase a marketer's output and effectiveness, but they require human strategy, brand knowledge, and judgment to use well. The best marketers in 2026 are those who combine AI efficiency with human creativity and client understanding.",
      },
      {
        q: "Are AI marketing tools expensive?",
        a: "Most AI tools offer free tiers sufficient for small businesses. Paid plans typically range from $10-$50/month per tool. The productivity gains — hours saved on content creation, research, and creative production — far outweigh the cost for most businesses.",
      },
    ],
    content: `
## How AI is Changing Digital Marketing in 2026

The digital marketing industry has undergone a fundamental shift. Tasks that once took hours — writing ad copy, creating visuals, researching keywords, analyzing campaign data — now take minutes with AI assistance. Marketers who embrace these tools are delivering better results in less time. Those who don't are falling behind.

Here are the 10 AI tools making the biggest impact right now.

## 1. Claude (Anthropic) — Content & Strategy

**Best for:** Blog posts, ad copy, email sequences, strategy documents

Claude excels at producing high-quality, nuanced marketing content that sounds authentically human. Its ability to maintain brand voice across long documents and produce well-structured, factually grounded content makes it the top choice for serious content marketing.

## 2. ChatGPT (OpenAI) — Ideation & Versatility

**Best for:** Brainstorming, quick copy, social media captions, scripts

ChatGPT remains the most versatile AI tool available. Its broad training makes it excellent for rapid ideation, generating multiple variations of ad headlines, or writing platform-specific social content.

## 3. Midjourney — AI Image Generation

**Best for:** Ad creatives, social media visuals, product mockups

Midjourney produces photorealistic and artistic images from text prompts. For marketers, it means professional-quality visuals without expensive photo shoots. The latest versions produce images indistinguishable from photography for many use cases.

## 4. AdCreative.ai — Ad Creative Generation

**Best for:** Facebook/Instagram/Google ad creatives at scale

AdCreative.ai is purpose-built for performance marketing. It generates complete ad creatives — image + headline + copy — optimized for conversion based on millions of high-performing ads in its training data.

## 5. ElevenLabs — AI Voiceovers

**Best for:** Video ads, explainer videos, podcast content

ElevenLabs produces human-quality voice narration in dozens of languages and accents, including English, Arabic, Hindi, and Malayalam — essential for businesses targeting multilingual markets.

## 6. Runway ML — AI Video Generation

**Best for:** Product videos, ad creatives, social media content

Runway's Gen-3 model allows marketers to create and edit videos using text prompts. Generate B-roll, remove backgrounds, or create entirely AI-generated video scenes in minutes.

## 7. Perplexity AI — Research & Competitor Analysis

**Best for:** Market research, competitor analysis, trend identification

Perplexity combines AI reasoning with real-time web search, making it excellent for marketing research. Ask it to analyze competitor strategies, identify trending topics in your industry, or research customer pain points.

## 8. Surfer SEO — AI-Powered Content Optimization

**Best for:** Writing SEO-optimized content that ranks

Surfer analyzes top-ranking pages for any keyword and provides real-time guidance on content structure, keyword usage, and length. It significantly speeds up the process of creating content that ranks.

## 9. Canva AI — Design & Visual Content

**Best for:** Social media graphics, presentations, marketing materials

Canva's AI features — Magic Design, text-to-image, background removal, and brand kit — make it possible for non-designers to produce professional marketing visuals quickly and consistently.

## 10. Google Analytics 4 with AI Insights

**Best for:** Understanding what's working and why

GA4's built-in AI features automatically surface insights, predict future user behavior, and identify anomalies in your data. Setting up proper GA4 tracking with conversion goals is the foundation of any data-driven marketing strategy.

## How to Start Using AI Tools Without Getting Overwhelmed

Don't try to adopt all 10 tools at once. Start with one content tool (Claude or ChatGPT) and one visual tool (Canva AI or Midjourney). Master those before adding more to your workflow. The goal is to build a system where AI handles repetitive, time-consuming tasks while you focus on strategy and client relationships.
    `,
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts[params.slug];
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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
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
