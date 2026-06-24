import type { Metadata } from "next";

const siteUrl = "https://pixospark.com";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pixo Spark | AI-Powered Digital Marketing | Meta Ads, SEO & Website Development",
    template: "%s | Pixo Spark",
  },
  description:
    "Pixo Spark by Ikbal K M — AI-powered digital marketing services including Meta Ads management, SEO, website development, and AI content creation. Serving businesses worldwide and GCC. Book a free strategy call.",
  keywords: [
    "digital marketing agency",
    "meta ads management",
    "SEO services",
    "website development",
    "AI content creation",
    "digital marketing Kerala",
    "GCC digital marketing",
    "Ikbal KM",
    "Pixo Spark",
    "Facebook ads India",
    "Instagram ads UAE",
  ],
  authors: [{ name: "Ikbal K M", url: siteUrl }],
  creator: "Ikbal K M",
  publisher: "Pixo Spark",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Pixo Spark",
    title: "Pixo Spark | AI-Powered Digital Marketing Agency",
    description:
      "Helping brands worldwide generate leads, increase sales and scale through Meta Ads, SEO, Websites, AI Content Creation and Creative Marketing.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Pixo Spark — AI-Powered Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixo Spark | AI-Powered Digital Marketing Agency",
    description:
      "Helping brands worldwide grow through Meta Ads, SEO, Websites & AI Content Creation.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: { canonical: siteUrl },
};
