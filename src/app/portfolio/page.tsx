import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PortfolioWorkspace from "@/components/public/portfolio/PortfolioWorkspace";

export const metadata: Metadata = {
  title: "AdcoraAI Portfolio | AI & Custom Software Case Studies",
  description: "Browse our engineering portfolio. Read case studies detailing challenge, solution, and outcome metrics for our custom AI automation and software platforms.",
  openGraph: {
    title: "AdcoraAI Portfolio | AI & Custom Software Case Studies",
    description: "Browse our engineering portfolio. Read case studies detailing challenge, solution, and outcome metrics for our custom AI automation and software platforms.",
    type: "website",
    url: "https://adcoraai.com/portfolio",
  },
};

export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "url": "https://adcoraai.com/portfolio/aether-crm-agent",
        "name": "Aether CRM AI Agent Integration"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "url": "https://adcoraai.com/portfolio/vertex-design-tokens",
        "name": "Vertex Design Tokens System"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "url": "https://adcoraai.com/portfolio/optima-growth-engine",
        "name": "Optima Growth & Conversion Engine"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "url": "https://adcoraai.com/portfolio/nova-logistics-dashboard",
        "name": "Nova Logistics Real-time Dashboard"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "url": "https://adcoraai.com/portfolio/aero-billing-gateway",
        "name": "Aero Billing & Subscription Gateway"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "url": "https://adcoraai.com/portfolio/apex-cloud-storefront",
        "name": "Apex Headless Storefront Platform"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "url": "https://adcoraai.com/portfolio/omni-social-scheduler",
        "name": "Omni Social Automations Platform"
      }
    ]
  };

  return (
    <>
      {/* Portfolio ItemList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="min-h-screen bg-background text-foreground pt-32 pb-20 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[130px] pointer-events-none" />

        {/* Dynamic Workspace */}
        <div className="page-container relative z-10">
          <PortfolioWorkspace />
        </div>
      </main>

      <Footer />
    </>
  );
}
