import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | AdcoraAI",
  description: "Read the privacy policy of AdcoraAI to understand how we collect, store, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground pt-36 pb-20 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[130px] pointer-events-none" />

        <div className="page-container max-w-4xl space-y-8 relative z-10 text-left">
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block">COMPLIANCE</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-muted-foreground">Last Updated: September 20, 2025</p>
          </div>

          <div className="prose prose-invert max-w-none text-sm sm:text-base text-muted-foreground leading-relaxed space-y-6 pt-6 border-t border-white/5">
            <p>
              At AdcoraAI, we are committed to protecting your privacy. This Privacy Policy outlines the types of personal information we collect, how we use it, and the measures we take to safeguard it. This policy applies to our website and all related services.
            </p>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">1. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            
            <h3 className="text-white font-display font-semibold text-base sm:text-lg mt-2">Information You Provide</h3>
            <p>
              When you interact with our services, you may provide details such as your name, email address, phone number, company name, and any other information you voluntarily submit.
            </p>

            <h3 className="text-white font-display font-semibold text-base sm:text-lg mt-2">Information Collected Automatically</h3>
            <p>
              We may automatically gather information such as your IP address, browser type, device operating system, referring URLs, and how you interact with our website and services.
            </p>

            <h3 className="text-white font-display font-semibold text-base sm:text-lg mt-2">Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar technologies to enhance your experience—such as remembering login credentials and preferences. You can manage or disable cookies through your browser settings, though some features may be limited if cookies are disabled.
            </p>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">2. How We Use Your Information</h2>
            <p>The information we collect is used to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deliver, operate, and improve our services</li>
              <li>Customize and enhance your user experience</li>
              <li>Communicate marketing materials (only with your consent)</li>
              <li>Respond to support requests and inquiries</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Detect and prevent fraudulent or malicious activity</li>
            </ul>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">3. Sharing Your Information</h2>
            <p>
              We may share your data with trusted third-party service providers who assist us in delivering our services. These providers are bound by strict confidentiality agreements. We do not share your information with other third parties without your explicit consent, unless required by law.
            </p>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">4. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, please note that no method of data transmission or storage over the internet is completely secure.
            </p>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct any inaccurate or incomplete information</li>
              <li>Delete your data upon request</li>
              <li>Restrict or object to the processing of your data</li>
              <li>Receive your data in a portable format</li>
            </ul>
            <p>To exercise any of these rights, please contact us using the details provided below.</p>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">6. Payments & Financial Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All online transactions are processed securely via RBI-compliant payment gateways.</li>
              <li>We do not store sensitive financial data (e.g., full credit card numbers, CVV).</li>
              <li>Refunds, if applicable, are processed in line with our Cancellation & Refund Policy.</li>
            </ul>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">7. Policy Updates</h2>
            <p>
              We may revise this Privacy Policy periodically. Any updates will be posted on our website, and the revised date will be noted below.
            </p>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">8. Contact Information</h2>
            <p>
              For questions, concerns, or requests regarding this policy, please contact us at:{" "}
              <a href="mailto:connect.adcoraai@gmail.com" className="text-primary hover:underline transition-all">
                connect.adcoraai@gmail.com
              </a>.
            </p>

            <h2 className="text-white font-display font-bold text-lg sm:text-xl pt-4">9. Legal Compliance</h2>
            <p>
              This policy is intended to comply with the Information Technology Act, 2000 and other applicable Indian laws. In the event of any inconsistency, the provisions of Indian law will take precedence.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
