import { FAQS, SITE_CONFIG } from "./constants";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pixo Spark",
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    founder: { "@type": "Person", name: "Ikbal K M" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      contactType: "customer service",
      availableLanguage: ["English", "Malayalam", "Hindi", "Arabic"],
    },
    areaServed: ["IN", "AE", "SA", "QA", "KW", "BH", "OM", "GB"],
    sameAs: [],
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ikbal K M",
    jobTitle: "Founder & Digital Marketing Strategist",
    worksFor: { "@type": "Organization", name: "Pixo Spark" },
    url: `${SITE_CONFIG.url}/about`,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pixo Spark",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: "$$",
    address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" },
    areaServed: ["IN", "AE", "SA", "QA", "KW"],
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function getServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name: name,
    description: description,
    provider: {
      "@type": "Organization",
      name: "Pixo Spark",
      url: SITE_CONFIG.url,
    },
    areaServed: ["IN", "AE", "SA", "QA", "KW", "BH", "OM"],
    url: `${SITE_CONFIG.url}${url}`,
  };
}

export function getPageFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}
