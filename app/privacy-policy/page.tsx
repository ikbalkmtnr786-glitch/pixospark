import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pixo Spark",
  description: "Privacy Policy for Pixo Spark — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-poppins font-extrabold text-4xl text-[var(--color-text)] mb-3">Privacy Policy</h1>
        <p className="text-[var(--color-text-muted)] mb-10">Last updated: January 2025</p>
        {[
          { title: "Information We Collect", body: "We collect information you provide directly to us, such as your name, email address, phone number, and business details when you fill out our contact form, book a consultation, or engage our services." },
          { title: "How We Use Your Information", body: "We use the information we collect to provide, maintain, and improve our services; send you marketing communications (with your consent); respond to your inquiries; and comply with legal obligations." },
          { title: "Data Storage and Security", body: "Your data is stored securely on servers protected by industry-standard encryption. We retain your data only for as long as necessary to provide our services or as required by law." },
          { title: "Your Rights", body: "You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time by contacting us at pixospark@gmail.com." },
          { title: "Cookies", body: "We use cookies to improve your browsing experience on our website. You can control cookies through your browser settings. Some cookies are necessary for the website to function properly." },
          { title: "Third-Party Services", body: "We may share your information with trusted third-party service providers who assist us in operating our website and delivering our services, subject to confidentiality agreements." },
          { title: "Contact Us", body: "If you have questions about this Privacy Policy, please contact us at pixospark@gmail.com or call +91 9061124162." },
        ].map((section) => (
          <div key={section.title} className="mb-8">
            <h2 className="font-poppins font-bold text-xl text-[var(--color-text)] mb-3">{section.title}</h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed">{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
