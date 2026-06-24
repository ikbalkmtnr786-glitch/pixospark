import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Pixo Spark",
  description: "Terms and Conditions for Pixo Spark digital marketing services.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-poppins font-extrabold text-4xl text-[var(--color-text)] mb-3">Terms &amp; Conditions</h1>
        <p className="text-[var(--color-text-muted)] mb-10">Last updated: January 2025</p>
        {[
          { title: "Acceptance of Terms", body: "By engaging Pixo Spark services, you agree to these Terms and Conditions. If you do not agree, please do not use our services." },
          { title: "Services", body: "Pixo Spark provides digital marketing services including Meta Ads management, SEO, website development, AI content creation, and related services as agreed upon in individual service agreements." },
          { title: "Payment Terms", body: "Payment is due as specified in your service agreement. We accept bank transfers, UPI, and international payment methods. Late payments may result in service suspension." },
          { title: "Refund Policy", body: "Refunds are evaluated on a case-by-case basis. Setup fees and work already completed are non-refundable. Monthly retainer fees are refundable on a pro-rata basis with 15 days notice." },
          { title: "Intellectual Property", body: "Upon full payment, clients own the deliverables created specifically for them. Pixo Spark retains rights to general methodologies, tools, and pre-existing intellectual property." },
          { title: "Limitation of Liability", body: "Pixo Spark shall not be liable for indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid for the specific service in question." },
          { title: "Governing Law", body: "These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Kerala, India." },
          { title: "Contact", body: "For questions about these terms, contact us at pixospark@gmail.com or +91 9061124162." },
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
