import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const footerLinks = {
  Services: [
    { label: "Meta Ads Management", href: "/services/meta-ads" },
    { label: "SEO Services", href: "/services/seo" },
    { label: "Website Development", href: "/services/website-development" },
    { label: "AI Content Creation", href: "/services/ai-content" },
    { label: "Graphic Design", href: "/services" },
    { label: "Branding", href: "/services" },
  ],
  Company: [
    { label: "About Ikbal K M", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
};

const socials = [
  { label: "Instagram", icon: "📷", href: "https://instagram.com/pixospar" },
  { label: "Facebook", icon: "📘", href: "https://facebook.com/pixospark" },
  { label: "LinkedIn", icon: "💼", href: "https://linkedin.com/in/ikbal-km-digital-marketing-executive" },
  { label: "WhatsApp", icon: "💬", href: SITE_CONFIG.whatsappUrl },
];

export default function Footer() {
  return (
    <footer className="bg-[#060D1F] border-t border-[#1E293B]">
      <div className="container-inner py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-poppins font-extrabold text-xl text-white mb-3">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-extrabold text-sm" style={{ background: "linear-gradient(135deg,#2563EB,#06B6D4)" }}>P</span>
              Pixo Spark
            </Link>
            <p className="text-[#64748B] text-sm leading-relaxed mb-5 max-w-xs">
              AI-Powered Digital Marketing helping businesses worldwide generate leads, increase sales and build strong online brands.
            </p>
            <div className="flex gap-3 flex-wrap">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-sm bg-white/5 border border-white/8 text-[#94A3B8] hover:bg-blue-900/30 hover:text-blue-300 hover:border-blue-800 transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-poppins font-bold text-sm text-white mb-4">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[#64748B] text-sm hover:text-blue-400 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact quick info */}
        <div className="border-t border-[#1E293B] pt-8 mb-8">
          <div className="flex flex-wrap gap-6">
            <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 text-sm text-[#64748B] hover:text-blue-400 transition-colors">
              📞 {SITE_CONFIG.phone}
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 text-sm text-[#64748B] hover:text-blue-400 transition-colors">
              📧 {SITE_CONFIG.email}
            </a>
            <span className="flex items-center gap-2 text-sm text-[#64748B]">
              📍 {SITE_CONFIG.location} — Serving GCC &amp; Worldwide
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E293B] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#475569] text-xs">
            © {new Date().getFullYear()} Pixo Spark. All rights reserved. Built with ❤️ by Ikbal K M
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-[#475569] text-xs hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[#475569] text-xs hover:text-blue-400 transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="text-[#475569] text-xs hover:text-blue-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
