import type { Metadata } from "next";
import CTASection from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Portfolio | Pixo Spark Projects",
  description: "View Pixo Spark portfolio — graphic design, social media posts, branding, Meta Ads campaigns and more.",
};

const projects = [
  { title: "Pixo Spark Brand Post", client: "Pixo Spark", category: "Social Media", image: "/post1.jpg" },
  { title: "TET Skills Course Ad", client: "The TET Skills", category: "Meta Ads", image: "/post2.jpg" },
  { title: "TET Skills Poster", client: "The TET Skills", category: "Posters", image: "/post3.jpg" },
  { title: "Prime Business Awards", client: "BGS 2026", category: "Posters", image: "/post4.jpg" },
  { title: "Ynes Digital Solutions", client: "Ynes", category: "Posters", image: "/post5.jpg" },
  { title: "Pixo Spark Football Ad", client: "Pixo Spark", category: "Social Media", image: "/pix.jpg" },
  { title: "Digital Marketing Poster", client: "Pixo Spark", category: "Posters", image: "/story.jpg" },
  { title: "Pixo Spark Logo Design", client: "Pixo Spark", category: "Branding", image: "/pixo new.jpg" },
  { title: "Creative Design 1", client: "Pixo Spark", category: "Posters", image: "/post6.png" },
  { title: "Creative Design 2", client: "Pixo Spark", category: "Posters", image: "/post7.png" },
  { title: "Creative Design 3", client: "Pixo Spark", category: "Posters", image: "/post8.png" },
  { title: "Creative Design 4", client: "Pixo Spark", category: "Posters", image: "/post9.png" },
  { title: "Creative Design 5", client: "Pixo Spark", category: "Posters", image: "/post10.png" },
  { title: "Creative Design 6", client: "Pixo Spark", category: "Posters", image: "/post13.png" },
  { title: "Creative Design 7", client: "Pixo Spark", category: "Posters", image: "/post14.png" },
  { title: "Creative Design 8", client: "Pixo Spark", category: "Posters", image: "/post15.png" },
  { title: "Creative Design 9", client: "Pixo Spark", category: "Posters", image: "/post16.png" },
];

const categories = ["All", "Posters", "Social Media", "Branding", "Meta Ads"];

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-0">
      <div className="container-inner mb-16">
        <div className="mb-10">
          <div className="eyebrow">Our Work</div>
          <h1 className="section-title text-[var(--color-text)] mb-3">
            Portfolio — <span className="gradient-text">Real Projects</span>
          </h1>
          <p className="text-[var(--color-text-muted)]">
            Real creative work delivered for real clients. Every design crafted with purpose.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <span key={cat} className="px-4 py-2 rounded-full text-sm font-semibold border border-[var(--color-border)] text-[var(--color-text-muted)] bg-[var(--color-card)] cursor-pointer hover:border-secondary hover:text-secondary transition-colors">
              {cat}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-card)] card-hover cursor-pointer">
              <div className="w-full aspect-square overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold text-sm border border-white/50 px-4 py-2 rounded-full">
                    View Project
                  </span>
                </div>
                <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white" style={{ background: "rgba(37,99,235,0.8)" }}>
                  {p.category}
                </span>
              </div>
              <div className="p-4">
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
