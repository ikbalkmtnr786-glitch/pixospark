"use client";
import { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-[var(--color-bg)]">
      <div className="container-inner">
        <div className="mb-12 text-center">
          <div className="eyebrow">Client Love</div>
          <h2 className="section-title text-[var(--color-text)]">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div className="testi-track" style={{ transform: `translateX(-${current * 100}%)` }}>
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="min-w-full bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl p-8 md:p-10 flex-shrink-0">
                  <div className="text-yellow-400 text-xl mb-5 tracking-widest">{"★".repeat(t.rating)}</div>
                  <p className="text-[var(--color-text)] text-base leading-relaxed italic mb-7">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: "linear-gradient(135deg,#2563EB,#06B6D4)" }}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-[var(--color-text)]">{t.name}</div>
                      <div className="text-[var(--color-text-muted)] text-sm">{t.role} · {t.country}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-secondary" : "w-2 bg-[var(--color-border)]"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
