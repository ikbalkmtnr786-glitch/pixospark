export const SITE_CONFIG = {
  name: "Pixo Spark",
  founder: "Ikbal K M",
  tagline: "AI-Powered Digital Marketing That Helps Businesses Grow Faster",
  description:
    "Helping brands worldwide generate leads, increase sales and scale through Meta Ads, SEO, Websites, AI Content Creation and Creative Marketing.",
  url: "https://pixospark.com",
  phone: "+91 9061124162",
  email: "pixospark@gmail.com",
  whatsapp: "919061124162",
  location: "Kerala, India",
  whatsappUrl:
    "https://wa.me/919061124162?text=Hi%20Pixo%20Spark!%20I%20want%20to%20grow%20my%20business.",
};

export const STATS = [
  { value: 4, suffix: "+", label: "Years of Learning" },
  { value: 10, suffix: "+", label: "Services Offered" },
  { value: 48, suffix: "hr", label: "Onboarding Time" },
  { value: 100, suffix: "%", label: "Personal Attention" },
];

export const SERVICES = [
  {
    id: "meta-ads",
    icon: "🎯",
    title: "Meta Ads Management",
    description:
      "Run high-converting Facebook & Instagram campaigns that generate real leads and sales. From strategy to creatives to optimization — fully managed.",
    tags: ["Facebook Ads", "Instagram Ads", "Lead Gen"],
    href: "/services/meta-ads",
    featured: true,
  },
  {
    id: "seo",
    icon: "🔍",
    title: "SEO Services",
    description:
      "Rank higher on Google and drive organic traffic that converts. Complete on-page, off-page, and technical SEO with monthly reporting.",
    tags: ["On-Page SEO", "Link Building", "Local SEO"],
    href: "/services/seo",
    featured: true,
  },
  {
    id: "web-dev",
    icon: "💻",
    title: "Website Development",
    description:
      "Custom websites that look premium, load fast, and convert visitors into customers. Built with Next.js, WordPress, or your preferred platform.",
    tags: ["Next.js", "WordPress", "E-commerce"],
    href: "/services/website-development",
    featured: false,
  },
  {
    id: "ai-video",
    icon: "🎬",
    title: "AI Video Creation",
    description:
      "Professional AI-generated videos for ads, social media, and branding — faster and more affordable than traditional production.",
    tags: ["AI Videos", "Ad Creatives", "Social Media"],
    href: "/services/ai-content",
    featured: false,
  },
  {
    id: "ai-content",
    icon: "✍️",
    title: "AI Content Creation",
    description:
      "Strategic content powered by AI — blogs, captions, scripts, email sequences, and ad copy that engages and converts.",
    tags: ["Blog Writing", "Ad Copy", "Captions"],
    href: "/services/ai-content",
    featured: false,
  },
  {
    id: "design",
    icon: "🎨",
    title: "Graphic Design",
    description:
      "Eye-catching social media posts, banners, posters, and brand visuals that make your brand stand out in crowded feeds.",
    tags: ["Social Posts", "Banners", "Posters"],
    href: "/services/graphic-design",
    featured: false,
  },
  {
    id: "branding",
    icon: "⭐",
    title: "Branding",
    description:
      "Complete brand identity — logo, color palette, typography, brand guidelines, and visual language that builds recognition.",
    tags: ["Logo Design", "Brand Identity", "Guidelines"],
    href: "/services/branding",
    featured: false,
  },
  {
    id: "gbp",
    icon: "📍",
    title: "Google Business Profile",
    description:
      "Optimize your GBP to appear in local searches and Google Maps — essential for local and GCC businesses.",
    tags: ["Local SEO", "GMB", "Google Maps"],
    href: "/services/google-business",
    featured: false,
  },
  {
    id: "social",
    icon: "📱",
    title: "Social Media Marketing",
    description:
      "Grow your social presence with consistent, engaging content strategies across Instagram, Facebook, LinkedIn, and more.",
    tags: ["Instagram", "Facebook", "LinkedIn"],
    href: "/services/social-media",
    featured: false,
  },
  {
    id: "consultation",
    icon: "💬",
    title: "Marketing Consultation",
    description:
      "1-on-1 strategy sessions to audit your current marketing, identify growth opportunities, and create a clear action plan.",
    tags: ["Strategy", "Audit", "Growth Plan"],
    href: "/services/consultation",
    featured: false,
  },
];

export const WHY_CHOOSE = [
  {
    icon: "⚡",
    title: "AI-Powered Workflow",
    desc: "Cutting-edge AI tools deliver faster results, better creatives, and smarter strategy than traditional agencies.",
  },
  {
    icon: "🎯",
    title: "Results-Driven Approach",
    desc: "Every campaign is built around measurable KPIs — leads, sales, traffic, and ROI. No vanity metrics.",
  },
  {
    icon: "🚀",
    title: "Fast Turnaround",
    desc: "Quick delivery without compromising quality. Most projects start within 48 hours of onboarding.",
  },
  {
    icon: "💬",
    title: "Transparent Communication",
    desc: "Weekly updates, live dashboards, and always-available WhatsApp support — always in the loop.",
  },
  {
    icon: "💰",
    title: "Affordable Premium Quality",
    desc: "Agency-level quality at freelancer-friendly pricing — perfect for startups and small businesses.",
  },
  {
    icon: "🌍",
    title: "Global Client Support",
    desc: "Serving India, UAE, Saudi Arabia, Qatar, Kuwait, and worldwide — fully remote.",
  },
  {
    icon: "🤝",
    title: "Personal Attention",
    desc: "Work directly with Ikbal — no account managers, no middlemen. Just founder-level expertise.",
  },
];

export const CASE_STUDIES = [
  {
    id: "meta-ads-strategy",
    category: "Meta Ads",
    title: "Sample Strategy — Real Estate Lead Generation",
    description:
      "How we would approach a real estate client: custom audience targeting, creative testing, and funnel optimization to maximize qualified leads at minimum cost.",
    metrics: [
      { value: "7–14", label: "Days to first results" },
      { value: "A/B", label: "Creative testing" },
      { value: "Full", label: "Funnel setup" },
      { value: "Weekly", label: "Reporting" },
    ],
  },
  {
    id: "seo-strategy",
    category: "SEO Services",
    title: "Sample Strategy — Local Business SEO",
    description:
      "A structured SEO approach: keyword research, on-page optimization, Google Business Profile setup, and local link building to rank in top 3 local results.",
    metrics: [
      { value: "Month 1", label: "Technical audit" },
      { value: "Month 2", label: "On-page fixes" },
      { value: "Month 3", label: "Link building" },
      { value: "Month 4+", label: "Rankings growth" },
    ],
  },
  {
    id: "website-strategy",
    category: "Website Development",
    title: "Sample Strategy — High-Converting Business Website",
    description:
      "Our website build process: discovery, wireframe, design, development, and launch — optimized for speed, mobile, and conversions from day one.",
    metrics: [
      { value: "2–4", label: "Weeks to launch" },
      { value: "95+", label: "Target PageSpeed" },
      { value: "Mobile", label: "First design" },
      { value: "SEO", label: "Ready on launch" },
    ],
  },
  {
    id: "social-strategy",
    category: "Social Media",
    title: "Sample Strategy — Brand Growth on Instagram",
    description:
      "Content calendar, reel strategy, hashtag research, and consistent posting to build an engaged audience and convert followers into customers.",
    metrics: [
      { value: "30", label: "Posts/month" },
      { value: "Daily", label: "Story updates" },
      { value: "Weekly", label: "Reels" },
      { value: "Monthly", label: "Analytics report" },
    ],
  },
];
  
  

export const TESTIMONIALS =  [
  {
    id: "1",
    name: "You Could Be First",
    role: "Early Client",
    country: "India / GCC",
    initials: "?",
    rating: 5,
    text: "We're just getting started and actively taking on our first clients. Be an early partner — get founder-level attention, priority service, and introductory pricing. Your success story could be featured right here.",
  },
];

export const FAQS = [
  {
    q: "What services does Pixo Spark offer?",
    a: "Meta Ads Management, SEO Services, Website Development, AI Content Creation, AI Video Production, Graphic Design, Branding, Google Business Profile Optimization, Social Media Marketing, and Marketing Consultation.",
  },
  {
    q: "How much do your services cost?",
    a: "Flexible packages starting from ₹5,000/month. Custom pricing for comprehensive campaigns. Contact us for a free consultation and quote.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes! We work with clients across India, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, UK, and worldwide — fully remote via WhatsApp, email, and video calls.",
  },
  {
    q: "How long does it take to see results?",
    a: "Meta Ads: 7–14 days. SEO: 3–6 months for significant rankings. Websites: 2–4 weeks. AI content: 24–48 hours after project start.",
  },
  {
    q: "What makes Pixo Spark different from other agencies?",
    a: "You work directly with Ikbal K M — the founder — not account managers. AI-powered workflows deliver faster results at better prices, and every strategy is custom-built for your specific business.",
  },
  {
    q: "Do you offer packages or one-time services?",
    a: "Both! Monthly retainer packages for ongoing services and one-time project pricing for websites, brand identity, and specific campaigns.",
  },
  {
    q: "Can you help my local business rank on Google Maps?",
    a: "Absolutely. Google Business Profile optimization is a specialty. We help local businesses appear in the top 3 Google Maps results for relevant searches.",
  },
  {
    q: "Will I get reports and updates on my campaigns?",
    a: "Yes — regular performance reports (weekly or monthly), access to live dashboards, and direct WhatsApp communication with updates.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes — we can redesign and improve any existing website for better design, speed, and conversions, or build a completely new one from scratch.",
  },
  {
    q: "How do I get started with Pixo Spark?",
    a: "Click 'Book Free Strategy Call' or WhatsApp us at +91 9061124162. We'll schedule a free 30-minute consultation — no commitment needed.",
  },
];

export const AI_LAB = [
  { icon: "🎬", title: "AI Video Creation", desc: "Professional product videos, explainer content, and ad creatives in hours — not weeks.", tools: "Sora, Runway, Pika" },
  { icon: "🖼️", title: "AI Image Generation", desc: "Photorealistic product photos and lifestyle imagery without expensive photo shoots.", tools: "Midjourney, DALL·E, Firefly" },
  { icon: "📦", title: "AI Product Mockups", desc: "See your products in professional settings instantly — perfect for e-commerce launches.", tools: "E-commerce, Catalog, Ads" },
  { icon: "🎙️", title: "AI Voiceovers", desc: "Professional voice narration in English, Arabic, Hindi, and Malayalam.", tools: "ElevenLabs, Murf AI" },
  { icon: "✍️", title: "AI Ad Creatives", desc: "High-converting ad copy and visual combinations tested for your specific audience.", tools: "AdCreative.ai, Claude, GPT-4o" },
  { icon: "🎨", title: "AI Marketing Assets", desc: "Complete sets of social templates, email headers, and banners — all brand-consistent.", tools: "Canva AI, Adobe Firefly" },
];
