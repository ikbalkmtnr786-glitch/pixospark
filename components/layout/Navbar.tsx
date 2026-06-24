"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const navLinks = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Meta Ads Management", href: "/services/meta-ads" },
      { label: "SEO Services", href: "/services/seo" },
      { label: "Website Development", href: "/services/website-development" },
      { label: "AI Content Creation", href: "/services/ai-content" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("pixospark-theme");
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(stored === "dark" || (!stored && preferred));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = dark ? "light" : "dark";
    setDark(!dark);
    localStorage.setItem("pixospark-theme", newTheme);
    document.documentElement.classList.toggle("dark", !dark);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#080D1A]/95 backdrop-blur-lg border-b border-[var(--color-border)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-inner flex items-center justify-between h-[68px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-poppins font-extrabold text-xl text-[var(--color-text)]">
          <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-extrabold text-sm" style={{ background: "linear-gradient(135deg,#2563EB,#06B6D4)" }}>P</span>
          Pixo Spark
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.label} className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <button className="flex items-center gap-1 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors">
                  {link.label} <ChevronDown size={14} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl shadow-xl p-2">
                    {link.dropdown.map((d) => (
                      <Link key={d.href} href={d.href} className="block px-4 py-2.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] hover:bg-[var(--color-bg-section)] rounded-xl transition-colors">
                        {d.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <Link href={link.href} className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors">
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--color-border)] text-[var(--color-text-muted)] hover:bg-[var(--color-bg-section)] transition-colors">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link href="/contact" className="hidden sm:inline-flex btn-primary text-sm px-5 py-2.5">
            Book Free Call
          </Link>
          <button className="lg:hidden w-9 h-9 flex items-center justify-center text-[var(--color-text)]" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--color-bg)] border-t border-[var(--color-border)] px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-base font-semibold text-[var(--color-text)] py-2 border-b border-[var(--color-border)]" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary justify-center mt-2" onClick={() => setMobileOpen(false)}>
            Book Free Strategy Call
          </Link>
          <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-white text-sm" style={{ background: "#25D366" }}>
            💬 WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
}
