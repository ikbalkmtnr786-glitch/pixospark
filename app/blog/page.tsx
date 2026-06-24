import type { Metadata } from "next";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Blog | Digital Marketing Insights by Pixo Spark",
  description: "Digital marketing tips, Meta Ads strategies, SEO guides, AI marketing insights, and more from Ikbal K M at Pixo Spark.",
};

const posts = [
  { title: "How AI is Revolutionizing Digital Marketing in 2025", category: "AI Marketing", time: "8 min", date: "Jan 15, 2025" },
  { title: "The Ultimate Meta Ads Strategy Guide for 2025", category: "Meta Ads", time: "12 min", date: "Jan 10, 2025" },
  { title: "Local SEO for GCC Businesses: Dominate Google Maps", category: "SEO", time: "10 min", date: "Jan 5, 2025" },
  { title: "How to Build a High-Converting Landing Page in 2025", category: "Website Dev", time: "7 min", date: "Dec 28, 2024" },
  { title: "Instagram Algorithm 2025: Grow Faster", category: "Social Media", time: "9 min", date: "Dec 20, 2024" },
  { title: "Google Business Profile Optimization: Complete Guide", category: "Google Business", time: "11 min", date: "Dec 15, 2024" },
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
          <p className="text-[var(--color-text-muted)]">Tips, strategies, and insights to help your business grow online.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 card-hover cursor-pointer">
              <span className="service-tag mb-3 inline-block">{post.category}</span>
              <h2 className="font-poppins font-bold text-base text-[var(--color-text)] mb-3 leading-snug">{post.title}</h2>
              <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
                <span>📅 {post.date}</span>
                <span>⏱ {post.time} read</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <CTASection />
    </div>
  );
}
