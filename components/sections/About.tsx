export default function AboutSection() {
  const skills = ["Meta Ads","SEO Strategy","Website Development","AI Content","Graphic Design","Video Editing","Social Media","Brand Identity","Google Business"];
  const stats: [string, string, string][] = [
    ["🏆","4+","Years Learning"],
    ["🌍","10+","Services Offered"],
    ["⚡","100%","Personal Attention"]
  ];
  return (
    <section id="about" className="section-padding bg-[var(--color-bg)]">
      <div className="container-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="/pixo_spark_office.png"
                alt="Pixo Spark Office"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.style.background = "linear-gradient(135deg,#0F172A 0%,#1e3a6e 50%,#0F172A 100%)";
                    parent.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%">
                      <div style="font-family:Poppins,sans-serif;font-weight:800;font-size:6rem;background:linear-gradient(135deg,#2563EB,#06B6D4);-webkit-background-clip:text;-webkit-text-fill-color:transparent">IK</div>
                      <div style="color:rgba(255,255,255,0.4);font-size:0.875rem">Ikbal K M · Founder</div>
                    </div>`;
                  }
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="eyebrow">Meet the Founder</div>
            <h2 className="section-title text-[var(--color-text)] mb-4">
              Digital Marketing Expert &amp;{" "}
              <span className="gradient-text">AI Creative Strategist</span>
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
              I&apos;m Ikbal K M, founder of Pixo Spark — an AI-powered digital marketing brand helping businesses worldwide grow faster. Based in Kerala, India, I work with startups, local businesses, e-commerce brands, and entrepreneurs across India and the GCC region.
            </p>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
              With expertise in Meta Ads, SEO, Website Development, AI Content Creation, and Creative Design, I bring a full-stack marketing approach — combining data-driven strategy with creative execution.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((s) => (
                <span key={s} className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] bg-[var(--color-bg-section)]">{s}</span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map(([icon, num, label]) => (
                <div key={label} className="text-center p-4 rounded-2xl bg-[var(--color-bg-section)] border border-[var(--color-border)]">
                  <div className="text-2xl mb-1">{icon}</div>
                  <div className="font-poppins font-extrabold text-xl gradient-text">{num}</div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
