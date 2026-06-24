import type { Metadata } from "next";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Portfolio | Pixo Spark Projects",
  description: "View Pixo Spark's portfolio — websites, SEO projects, Meta Ads campaigns, AI projects, branding, and creative designs.",
};

const projects = [
  { title: "E-commerce Website", client: "Fashion Brand", category: "Websites", gradient: "from-blue-600 to-cyan-500" },
  { title: "SEO Campaign", client: "Restaurant Chain", category: "SEO", gradient: "from-green-500 to-emerald-400" },
  { title: "Meta Ads Campaign", client: "Real Estate Developer", category: "Meta Ads", gradient: "from-orange-500 to-yellow-400" },
  { title: "AI Brand Video", client: "Tech Startup", category: "AI Projects", gradient: "from-purple-600 to-pink-500" },
  { title: "Brand Identity", client: "Fitness Studio", category: "Branding", gradient: "from-red-500 to-orange-400" },
  { title: "Social Media Pack", client: "Cafe", category: "Posters", gradient: "from-teal-500 to-cyan-400" },
  { title: "Business Website", client: "Salon", category: "Websites", gradient: "from-indigo-500 to-blue-400" },
  { title: "Instagram Growth", client: "Lifestyle Brand", category: "Social Media", gradient: "from-pink-500 to-rose-400" },
  { title: "Google Shopping Ads", client: "E-commerce Store", category: "Meta Ads", gradient: "from-amber-500 to-yellow-400" },
  { title: "AI Product Mockups", client: "Clothing Brand", category: "AI Projects", gradient: "from-violet-500 to-purple-400" },
  { title: "Logo + Brand Kit", client: "Consulting Firm", category: "Branding", gradient: "from-sky-500 to-blue-400" },
  { title: "Blog SEO Strategy", client: "Education Platform", category: "SEO", gradient: "from-lime-500 to-green-400" },
];

const categories = ["All", "Websites", "SEO", "Meta Ads", "AI Projects", "Posters", "Branding", "Social Media"];

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-0">
      <div className="container-inner mb-16">
        <div className="mb-10">
          <div className="eyebrow">Our Work</div>
          <h1 className="section-title text-[var(--color-text)] mb-3">
            Portfolio — <span className="gradient-text">Real Projects</span>
          </h1>
          <p className="text-[var(--color-text-muted)]">Real projects, real results. Replace placeholders with your actual work.</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <span key={cat} className="px-4 py-2 rounded-full text-sm font-semibold border border-[var(--color-border)] text-[var(--color-text-muted)] cursor-pointer hover:border-secondary hover:text-secondary transition-colors bg-[var(--color-card)]">
              {cat}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl overflow-hidden border border-[var(--color-border)] card-hover cursor-pointer">
              <div className={`w-full aspect-video bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
                <span className="text-white/20 font-poppins font-bold text-4xl">PS</span>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold text-sm border border-white/50 px-4 py-2 rounded-full">View Project</span>
                </div>
                <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-black/40 text-white backdrop-blur-sm">{p.category}</span>
              </div>
              <div className="p-4 bg-[var(--color-card)]">
                <h3 className="font-poppins font-bold text-sm text-[var(--color-text)] mb-0.5">{p.title}</h3>
                <p className="text-xs text-[var(--color-text-muted)]">{p.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CTASection />
    </div>
  );
}
