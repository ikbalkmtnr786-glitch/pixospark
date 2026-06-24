import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-[var(--color-bg-section)]">
      <div className="container-inner">
        <div className="mb-12">
          <div className="eyebrow">What We Do</div>
          <h2 className="section-title text-[var(--color-text)] mb-3">
            Complete <span className="gradient-text">Digital Growth</span> Services
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-xl">
            Everything your brand needs to grow online — powered by AI and creative expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((service) => (
            <div key={service.id} className="relative bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 card-hover group">
              {service.featured && (
                <span className="absolute -top-3 right-4 text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "linear-gradient(135deg,#2563EB,#06B6D4)" }}>
                  Most Popular
                </span>
              )}
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="font-poppins font-bold text-base text-[var(--color-text)] mb-2">{service.title}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-tag">{tag}</span>
                ))}
              </div>
              <Link href={service.href} className="text-secondary text-sm font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
