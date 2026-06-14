import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/public/Hero";
import TrustedBy from "@/components/public/TrustedBy";
import ServicesPreview from "@/components/public/ServicesPreview";
import Process from "@/components/public/Process";
import WhyChooseUs from "@/components/public/WhyChooseUs";
import PortfolioPreview from "@/components/public/PortfolioPreview";
import TrustSection from "@/components/public/TrustSection";
import CTASection from "@/components/public/CTASection";
import ContactPreview from "@/components/public/ContactPreview";
import Footer from "@/components/shared/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AdcoraAI",
    "url": "https://adcoraai.com",
    "logo": "https://adcoraai.com/og-image.png",
    "description": "AdcoraAI is a premium AI automation and digital solutions agency delivering custom software, marketing, and creative tech products.",
    "sameAs": [
      "https://www.facebook.com/share/18qmjx8Hhs/",
      "https://x.com/adcoraai",
      "https://www.instagram.com/adcoraai",
      "https://www.linkedin.com/in/adcora-ai-498645416"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-91537-65913",
      "email": "connect.adcoraai@gmail.com",
      "contactType": "customer service"
    }
  };

  return (
    <>
      {/* Organization Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      
      {/* Homepage Sections */}
      <div className="relative overflow-x-hidden">
        <Hero />
        <TrustedBy />
        <ServicesPreview />
        <Process />
        <WhyChooseUs />
        <TrustSection />
        <PortfolioPreview />
        <CTASection />
        <ContactPreview />
      </div>

      <Footer />
    </>
  );
}
