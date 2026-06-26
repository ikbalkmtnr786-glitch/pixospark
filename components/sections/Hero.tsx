"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { SITE_CONFIG, STATS } from "@/lib/constants";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        let start = 0;
        const step = () => {
          start += Math.ceil(value / 40);
          if (start >= value) { el.textContent = value + suffix; return; }
          el.textContent = start + suffix;
          requestAnimationFrame(step);
        };
        step();
        observer.disconnect();
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-[var(--color-bg-section)]">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[80px] bg-secondary -top-24 -right-24" />
        <div className="absolute w-[300px] h-[300px] rounded-full opacity-10 blur-[60px] bg-accent bottom-0 -left-12" />
      </div>

      <div className="container-inner relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-semibold text-secondary mb-6" style={{ background: "rgba(37,99,235,0.08)", borderColor: "rgba(37,99,235,0.2)" }}>
              <span className="w-2 h-2 rounded-full bg-accent animate-[badgePulse_2s_ease-in-out_infinite]" />
              AI-Powered Digital Marketing
            </div>

            <h1 className="font-poppins font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)" }}>
              Digital Marketing That Helps Businesses{" "}
              <span className="gradient-text">Grow Faster</span>
            </h1>

            <p className="text-[var(--color-text-muted)] text-base leading-relaxed mb-8 max-w-lg">
              {SITE_CONFIG.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link href="/contact" className="btn-primary">
                <span>📞</span> Book Free Strategy Call <ArrowRight size={16} />
              </Link>
              <Link href="/portfolio" className="btn-outline">
                <Play size={14} /> View Portfolio
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-[var(--color-text-muted)]">
              {["No contracts", "Free consultation", "ROI-Focused Strategy"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="text-green-500 font-bold">✓</span> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Office Image Card */}
          <div className="relative">
            {/* Floating badges */}
            <div className="absolute -top-4 right-4 z-10 flex items-center gap-2 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl px-4 py-2.5 shadow-xl text-sm font-semibold animate-[float_3s_ease-in-out_infinite]">
              🏆 4+ Years Experience
            </div>
            <div className="absolute bottom-20 -left-4 z-10 flex items-center gap-2 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl px-4 py-2.5 shadow-xl text-sm font-semibold animate-[float_3s_ease-in-out_infinite_1.5s]">
              ✅ Meta Ads Certified
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl overflow-hidden shadow-glass">
              <img
                src="/pixo_spark_2.png"
                alt="Pixo Spark - AI Powered Digital Marketing"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="p-5">
                <h2 className="font-poppins font-bold text-lg text-[var(--color-text)] mb-0.5">Ikbal K M</h2>
                <p className="text-[var(--color-text-muted)] text-sm mb-3">Founder &amp; Digital Growth Strategist</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-green-500 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-[badgePulse_2s_ease-in-out_infinite]" />
                  Available for new projects
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Meta Ads", "SEO", "AI Content", "Web Dev"].map((tag) => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full border" style={{ background: "rgba(37,99,235,0.08)", borderColor: "rgba(37,99,235,0.2)", color: "#2563EB" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-poppins font-extrabold text-4xl gradient-text mb-1">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[var(--color-text-muted)] text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
