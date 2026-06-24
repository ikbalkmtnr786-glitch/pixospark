"use client";
import { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = () => {
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1800);
  };

  return (
    <section id="contact" className="section-padding bg-[var(--color-bg-section)]">
      <div className="container-inner">
        <div className="mb-12">
          <div className="eyebrow">Let&apos;s Talk</div>
          <h2 className="section-title text-[var(--color-text)] mb-3">
            Get <span className="gradient-text">In Touch</span>
          </h2>
          <p className="text-[var(--color-text-muted)]">Ready to grow your brand? Let&apos;s have a conversation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--color-text-muted)]">Full Name *</label>
                  <input className="form-input" placeholder="Your full name" type="text" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--color-text-muted)]">Email Address *</label>
                  <input className="form-input" placeholder="your@email.com" type="email" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--color-text-muted)]">Phone / WhatsApp</label>
                <input className="form-input" placeholder="+91 or +971..." type="tel" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--color-text-muted)]">Service Needed *</label>
                  <select className="form-input">
                    <option value="">Select a service...</option>
                    <option>Meta Ads Management</option>
                    <option>SEO Services</option>
                    <option>Website Development</option>
                    <option>AI Content Creation</option>
                    <option>Full-Service Package</option>
                    <option>Free Consultation</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[var(--color-text-muted)]">Budget Range</label>
                  <select className="form-input">
                    <option value="">Select budget...</option>
                    <option>Under ₹10,000</option>
                    <option>₹10,000 – ₹50,000</option>
                    <option>₹50,000 – ₹1,50,000</option>
                    <option>₹1,50,000+</option>
                    <option>Let&apos;s discuss</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[var(--color-text-muted)]">Your Message *</label>
                <textarea className="form-input min-h-[120px] resize-y" placeholder="Tell me about your business and goals..." />
              </div>

              {status === "success" ? (
                <div className="p-4 rounded-2xl text-center font-semibold text-green-700 bg-green-50 dark:bg-green-900/20 dark:text-green-400 border border-green-200 dark:border-green-800">
                  ✓ Message sent! We&apos;ll reply within 2–4 hours.
                </div>
              ) : (
                <button onClick={handleSubmit} disabled={status === "loading"}
                  className="btn-primary justify-center w-full py-4 rounded-2xl text-base disabled:opacity-70">
                  {status === "loading" ? "Sending..." : "Send Message →"}
                </button>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {[
              { icon: "📞", label: "Phone", val: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
              { icon: "📧", label: "Email", val: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
              { icon: "💬", label: "WhatsApp", val: SITE_CONFIG.phone, href: SITE_CONFIG.whatsappUrl },
              { icon: "📍", label: "Location", val: "Kerala, India — Serving GCC & Worldwide", href: null },
              { icon: "🕐", label: "Response Time", val: "Within 2–4 hours", href: null },
            ].map((item) => (
              item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-secondary/40 hover:translate-x-1 transition-all duration-200 no-underline">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: "linear-gradient(135deg,rgba(37,99,235,0.1),rgba(6,182,212,0.1))" }}>{item.icon}</div>
                  <div><div className="text-xs font-semibold text-[var(--color-text-muted)]">{item.label}</div><div className="font-semibold text-[var(--color-text)] text-sm">{item.val}</div></div>
                </a>
              ) : (
                <div key={item.label} className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)]">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: "linear-gradient(135deg,rgba(37,99,235,0.1),rgba(6,182,212,0.1))" }}>{item.icon}</div>
                  <div><div className="text-xs font-semibold text-[var(--color-text-muted)]">{item.label}</div><div className="font-semibold text-[var(--color-text)] text-sm">{item.val}</div></div>
                </div>
              )
            ))}
            <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-3.5 rounded-2xl text-white font-bold transition-all hover:scale-[1.02] hover:shadow-lg"
              style={{ background: "#25D366" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
