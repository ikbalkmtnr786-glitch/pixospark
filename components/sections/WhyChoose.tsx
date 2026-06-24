import { WHY_CHOOSE } from "@/lib/constants";

export default function WhyChooseSection() {
  return (
    <section id="why" className="section-padding bg-[var(--color-bg)]">
      <div className="container-inner">
        <div className="mb-12">
          <div className="eyebrow">Why Pixo Spark</div>
          <h2 className="section-title text-[var(--color-text)]">
            The Smarter Way to <span className="gradient-text">Grow Your Brand</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {WHY_CHOOSE.map((item) => (
            <div key={item.title} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 card-hover">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-poppins font-bold text-sm text-[var(--color-text)] mb-2">{item.title}</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
