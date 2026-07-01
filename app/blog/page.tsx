import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Digital Marketing Blog — Tips, SEO & Meta Ads Guides",
  description: "Digital marketing tips, Meta Ads strategies, SEO guides, AI marketing insights, and website development advice from Ikbal K M at Pixo Spark — serving Kerala, India & GCC.",
};

const posts = [
  {
    slug: "meta-ads-strategy-guide-2026",
    title: "The Complete Meta Ads Strategy Guide for 2026",
    excerpt: "Everything you need to run profitable Facebook and Instagram ad campaigns — from audience targeting to creative testing and budget optimization.",
    category: "Meta Ads",
    time: "12 min",
    date: "Jul 1, 2026",
  },
  {
    slug: "seo-for-kerala-businesses",
    title: "SEO for Kerala Businesses: How to Rank on Google in 2026",
    excerpt: "A practical SEO guide for small and medium businesses in Kerala — covering keyword research, local SEO, and Google Business Profile optimization.",
    category: "SEO",
    time: "10 min",
    date: "Jun 25, 2026",
  },
  {
    slug: "ai-tools-for-digital-marketing",
    title: "10 AI Tools Every Digital Marketer Should Use in 2026",
    excerpt: "From content creation to ad creative generation and analytics — the AI tools that are transforming how marketers work and deliver results.",
    category: "AI Marketing",
    time: "8 min",
    date: "Jun 18, 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-28 pb-0">
      <div className="container-inner mb-16">
        <div className="mb-12">
          <div className="eyebrow">Insights</div>
          <h1 className="section-title text-[var(--color-text)] mb-3">
            Marketing <span className="gradient-text">Knowledge Hub</span>
          </h1>
          <p className="text-[var(--color-text-muted)]">
            Tips, strategies, and insights to help your business grow online — from Ikbal K M at Pixo Spark.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <article className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 card-hover cursor-pointer h-full">
                <span className="service-tag mb-3 inline-block">{post.category}</span>
                <h2 className="font-poppins font-bold text-base text-[var(--color-text)] mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
                  <span>📅 {post.date}</span>
                  <span>⏱ {post.time} read</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
      <CTASection />
    </div>
  );
}
