export default function AboutSection() {
  const skills = ["Meta Ads","SEO Strategy","Website Development","AI Content","Graphic Design","Video Editing","Social Media","Brand Identity","Google Business"];
  return (
    <section id="about" className="section-padding bg-[var(--color-bg)]">
      <div className="container-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            <div className="w-full aspect-[4/5] rounded-3xl flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(135deg,#0F172A 0%,#1e3a6e 50%,#0F172A 100%)" }}>
              <div className="text-center">
                <div className="font-poppins font-extrabold gradient-text mb-2" style={{ fontSize: "6rem" }}>IK</div>
                <div className="text-white/40 text-sm font-medium">Ikbal K M · Founder</div>
              </div>
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
              {[["🏆","50+","Projects"],["🌍","30+","Clients"],["⚡","3+","Years Exp"]].map(([icon,num,label]) => (
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
