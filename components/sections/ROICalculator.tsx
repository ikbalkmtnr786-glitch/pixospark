"use client";
import { useState } from "react";
import Link from "next/link";

function fmt(n: number) {
  if (n >= 100000) return "₹" + (n / 100000).toFixed(1) + "L";
  return "₹" + n.toLocaleString("en-IN");
}

export default function ROICalculator() {
  const [rev, setRev] = useState(100000);
  const [spend, setSpend] = useState(20000);

  const leadIncrease = Math.min(Math.round((spend / rev) * 1800), 350);
  const revenueGrowth = Math.round(rev * (leadIncrease / 100) * 0.3);
  const roas = Math.max(2.5, parseFloat(((spend * 3.5) / spend).toFixed(1)));
  const trafficGrowth = Math.min(Math.round(leadIncrease * 0.8), 280);

  return (
    <section id="roi" className="section-padding bg-[var(--color-bg-section)]">
      <div className="container-inner">
        <div className="text-center mb-10">
          <div className="eyebrow">ROI Calculator</div>
          <h2 className="section-title text-[var(--color-text)] mb-3">
            Calculate Your <span className="gradient-text">Potential Returns</span>
          </h2>
          <p className="text-[var(--color-text-muted)]">See how much revenue you could generate with strategic digital marketing.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="flex justify-between text-sm font-semibold text-[var(--color-text-muted)] mb-2">
                <span>Monthly Revenue</span><span className="text-secondary">{fmt(rev)}</span>
              </div>
              <input type="range" min={10000} max={5000000} step={10000} value={rev} onChange={(e) => setRev(+e.target.value)} className="w-full accent-secondary" />
            </div>
            <div>
              <div className="flex justify-between text-sm font-semibold text-[var(--color-text-muted)] mb-2">
                <span>Monthly Ad Spend</span><span className="text-secondary">{fmt(spend)}</span>
              </div>
              <input type="range" min={5000} max={500000} step={5000} value={spend} onChange={(e) => setSpend(+e.target.value)} className="w-full accent-secondary" />
            </div>
          </div>
          <div className="border-t border-[var(--color-border)] pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { val: leadIncrease + "%", label: "Lead Increase" },
              { val: fmt(revenueGrowth), label: "Revenue Growth" },
              { val: roas + "x", label: "Expected ROAS" },
              { val: trafficGrowth + "%", label: "Traffic Growth" },
            ].map((m) => (
              <div key={m.label} className="text-center">
                <div className="font-poppins font-extrabold text-2xl gradient-text">{m.val}</div>
                <div className="text-xs text-[var(--color-text-muted)] mt-1">{m.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact" className="btn-primary justify-center w-full sm:w-auto">
              Get Your Personalized Growth Plan →
            </Link>
            <p className="text-xs text-[var(--color-text-muted)] mt-3">Estimated projections based on industry benchmarks. Actual results vary.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
