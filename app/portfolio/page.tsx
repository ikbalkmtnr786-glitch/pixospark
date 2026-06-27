"use client";
import { useState } from "react";
import CTASection from "@/components/sections/CTA";

const categories = [
  {
    id: "brand",
    label: "Brand Awareness",
    icon: "🚀",
    desc: "Pixo Spark brand posts & campaigns",
    color: "from-blue-600 to-cyan-500",
    projects: [
      { title: "Growing Brands Post", client: "Pixo Spark", image: "/post1.jpg" },
      { title: "Creative Design 1", client: "Pixo Spark", image: "/post6.png" },
      { title: "Creative Design 2", client: "Pixo Spark", image: "/post7.png" },
      { title: "Creative Design 3", client: "Pixo Spark", image: "/post8.png" },
    ],
  },
  {
    id: "branding",
    label: "Branding & Logo",
    icon: "✨",
    desc: "Logo design & brand identity work",
    color: "from-purple-600 to-pink-500",
    projects: [
      { title: "Pixo Spark Logo Design", client: "Pixo Spark", image: "/pixospark-logo.png" },
      { title: "Pixo Spark Brand Identity", client: "Pixo Spark", image: "/pixo%20new.jpg" },
      { title: "Creative Design 4", client: "Pixo Spark", image: "/post9.png" },
      { title: "Creative Design 5", client: "Pixo Spark", image: "/post10.png" },
    ],
  },
  {
    id: "client",
    label: "Client Work",
    icon: "🎯",
    desc: "Posters & designs for clients",
    color: "from-orange-500 to-yellow-400",
    projects: [
      { title: "TET Skills Course Ad", client: "The TET Skills", image: "/post2.jpg" },
      { title: "TET Skills Offer Poster", client: "The TET Skills", image: "/post3.jpg" },
      { title: "Prime Business Awards Poster", client: "BGS 2026", image: "/post4.jpg" },
      { title: "Ynes Digital Solutions", client: "Ynes", image: "/post5.jpg" },
      { title: "Creative Design 6", client: "Client", image: "/post13.png" },
      { title: "Creative Design 7", client: "Client", image: "/post14.png" },
    ],
  },
  {
    id: "ads",
    label: "Meta Ads",
    icon: "📊",
    desc: "Facebook & Instagram ad creatives",
    color: "from-green-500 to-emerald-400",
    projects: [
      { title: "TET Skills Lead Gen Ad", client: "The TET Skills", image: "/post2.jpg" },
      { title: "Coconut Oil Product Ad", client: "Pixo Spark", image: "/post15.png" },
    ],
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<{ images: { title: string; client: string; image: string }[]; index: number } | null>(null);

  const activeData = categories.find((c) => c.id === activeCategory);

  const openLightbox = (projects: typeof categories[0]["projects"], index: number) => {
    setLightbox({ images: projects, index });
  };

  const closeLightbox = () => setLightbox(null);

  const nextImage = () => {
    if (!lightbox) return;
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.images.length });
  };

  const prevImage = () => {
    if (!lightbox) return;
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length });
  };

  return (
    <div className="pt-28 pb-0">
      <div className="container-inner mb-16">
        <div className="mb-12 text-center">
          <div className="eyebrow">Our Work</div>
          <h1 className="section-title text-[var(--color-text)] mb-3">
            Portfolio — <span className="gradient-text">Real Creative Work</span>
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
            Every design crafted with purpose. Explore our work by category.
          </p>
        </div>

        {!activeCategory && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className="group text-left rounded-3xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-card)] card-hover p-0">
                <div className={`w-full aspect-video bg-gradient-to-br ${cat.color} relative overflow-hidden`}>
                  <div className="grid grid-cols-2 gap-1 p-2 h-full">
                    {cat.projects.slice(0, 4).map((p, i) => (
                      <div key={i} className="rounded-lg overflow-hidden bg-black/20">
                        <img src={p.image} alt={p.title}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="font-poppins font-bold text-base text-[var(--color-text)]">{cat.label}</h3>
                  </div>
                  <p className="text-xs text-[var(--color-text-muted)] mb-3">{cat.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-secondary">{cat.projects.length} projects</span>
                    <span className="text-xs font-semibold text-secondary group-hover:translate-x-1 transition-transform inline-block">View All →</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {activeCategory && activeData && (
          <div>
            <button onClick={() => setActiveCategory(null)}
              className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text-muted)] hover:text-secondary transition-colors mb-8">
              ← Back to Categories
            </button>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">{activeData.icon}</span>
              <div>
                <h2 className="font-poppins font-bold text-2xl text-[var(--color-text)]">{activeData.label}</h2>
                <p className="text-[var(--color-text-muted)] text-sm">{activeData.desc}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {activeData.projects.map((p, i) => (
                <button key={i} onClick={() => openLightbox(activeData.projects, i)}
                  className="group text-left rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-card)] card-hover">
                  <div className="w-full aspect-square relative overflow-hidden">
                    <img src={p.image} alt={p.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => {
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent) parent.style.background = "linear-gradient(135deg,#2563EB,#06B6D4)";
                        (e.target as HTMLImageElement).style.display = "none";
                      }} />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold text-sm border border-white/60 px-5 py-2.5 rounded-full">🔍 View Full</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-poppins font-bold text-sm text-[var(--color-text)] mb-0.5">{p.title}</h3>
                    <p className="text-xs text-[var(--color-text-muted)]">{p.client}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeLightbox} className="absolute -top-12 right-0 text-white/70 hover:text-white text-2xl font-bold">✕</button>
            <div className="rounded-2xl overflow-hidden">
              <img src={lightbox.images[lightbox.index].image} alt={lightbox.images[lightbox.index].title}
                style={{ width: "100%", maxHeight: "75vh", objectFit: "contain" }} />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white font-bold text-lg">{lightbox.images[lightbox.index].title}</h3>
              <p className="text-white/60 text-sm">{lightbox.images[lightbox.index].client}</p>
              <p className="text-white/40 text-xs mt-1">{lightbox.index + 1} / {lightbox.images.length}</p>
            </div>
            {lightbox.images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-xl">‹</button>
                <button onClick={nextImage} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-xl">›</button>
              </>
            )}
          </div>
        </div>
      )}
      <CTASection />
    </div>
  );
}
