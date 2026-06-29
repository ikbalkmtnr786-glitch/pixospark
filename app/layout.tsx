import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { baseMetadata } from "@/lib/metadata";
import { getOrganizationSchema, getPersonSchema, getLocalBusinessSchema } from "@/lib/schema";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/widgets/WhatsAppButton";
import ScrollProgress from "@/components/widgets/ScrollProgress";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('pixospark-theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';var t=s||p;if(t==='dark')document.documentElement.classList.add('dark');})();`,
          }}
        />

        {/* ✅ GTM Script — HEAD-ൽ വേണം */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MXS9JRQ9');`,
          }}
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getPersonSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-inter`}>

        {/* ✅ GTM noscript — BODY top-ൽ വേണം */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MXS9JRQ9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
