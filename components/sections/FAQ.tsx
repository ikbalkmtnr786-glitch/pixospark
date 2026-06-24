"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const half = Math.ceil(FAQS.length / 2);
  const left = FAQS.slice(0, half);
  const right = FAQS.slice(half);

  const Item = ({ faq, idx }: { faq: (typeof FAQS)[0]; idx: number }) => (
    <div className={`bg-[var(--color-card)] border rounded-2xl overflow-hidden transition-colors duration-200 ${open === idx ? "border-secondary/40" : "border-[var(--color-border)]"}`}>
      <button className="w-full flex justify-between items-center gap-4 px-5 py-4 text-left font-semibold text-sm text-[var(--color-text)]" onClick={() => setOpen(open === idx ? null : idx)}>
        {faq.q}
        <ChevronDown size={16} className={`flex-shrink-0 text-[var(--color-text-muted)] transition-transform duration-300 ${open === idx ? "rotate-180 text-secondary" : ""}`} />
      </button>
      <div className={`faq-answer ${open === idx ? "open" : ""}`}>
        <p className="px-5 pb-4 text-sm text-[var(--color-text-muted)] leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );

  return (
    <section id="faq" className="section-padding bg-[var(--color-bg)]">
      <div className="container-inner">
        <div className="text-center mb-12">
          <div className="eyebrow">FAQ</div>
          <h2 className="section-title text-[var(--color-text)]">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {left.map((faq, i) => <Item key={i} faq={faq} idx={i} />)}
          </div>
          <div className="flex flex-col gap-4">
            {right.map((faq, i) => <Item key={i + half} faq={faq} idx={i + half} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
