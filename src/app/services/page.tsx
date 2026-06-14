import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import FAQSection from "@/components/public/services/FAQSection";
import TechStack from "@/components/public/services/TechStack";
import Link from "next/link";
import { Bot, Paintbrush, Megaphone, Code, ShoppingCart, Share2, ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "AdcoraAI Services | Custom AI Automation & Software Solutions",
  description: "Explore our 6 core operational services divisions including AI integrations, full-stack software, creative UI/UX, and marketing.",
  openGraph: {
    title: "AdcoraAI Services | Custom AI Automation & Software Solutions",
    description: "Explore our 6 core operational services divisions including AI integrations, full-stack software, creative UI/UX, and marketing.",
    type: "website",
    url: "https://adcoraai.com/services",
  },
};

export default function ServicesPage() {
  const serviceList = [
    {
      id: "ai",
      title: "AI Automation Solutions",
      desc: "Integrate custom large language model (LLM) agents, optimize database retrievals using RAG, and automate routine support workflows to eliminate manual bottlenecks.",
      features: ["Intelligent Customer Support Agents", "Custom LLM Fine-tuning & RAG Pipelines", "Workspace Workflow Automations"],
      icon: <Bot className="h-6 w-6 text-primary" />,
      tag: "Intelligence",
    },
    {
      id: "creative",
      title: "Creative UI/UX Solutions",
      desc: "Develop intuitive layouts, map immersive interactive mockups, construct WebGL visual tokens, and implement responsive Tailwind UI design libraries.",
      features: ["Component-Driven Design Systems", "Figma Mockups & Wireframing", "Intricate Micro-animations & WebGL"],
      icon: <Paintbrush className="h-6 w-6 text-secondary" />,
      tag: "UI/UX Studio",
    },
    {
      id: "marketing",
      title: "Marketing & Growth Solutions",
      desc: "Drive conversion metrics using data-backed campaigns, search engine indexing checks, custom landing page funnels, and automated analytics syncs.",
      features: ["Technical SEO Strategy & Checks", "Conversion Rate Optimization (CRO)", "Multi-channel Campaign Automations"],
      icon: <Megaphone className="h-6 w-6 text-accent" />,
      tag: "Growth Engine",
    },
    {
      id: "software",
      title: "Custom Software Solutions",
      desc: "Code high-performance server architectures, establish secure cloud database connections on Supabase, and build robust API gateways using TypeScript.",
      features: ["Next.js Full-Stack App Engineering", "Decoupled Web API Integrations", "Supabase PostgreSQL Database Management"],
      icon: <Code className="h-6 w-6 text-success" />,
      tag: "Engineering",
    },
    {
      id: "ecommerce",
      title: "Ecommerce Platform Solutions",
      desc: "Launch high-speed storefronts utilizing headless Shopify architectures, optimize purchase processes, and build real-time inventory webhooks.",
      features: ["Headless Shopify / BigCommerce Setups", "Fast Checkouts & Cart Architectures", "Live Stock & Order Synced Webhooks"],
      icon: <ShoppingCart className="h-6 w-6 text-info" />,
      tag: "E-Commerce",
    },
    {
      id: "social",
      title: "Social Media Management",
      desc: "Automate social broadcasting calendars, track customer acquisition trends, schedule visual posts, and analyze campaign traffic logs.",
      features: ["Auto-scheduling Broadcasting Calendars", "Brand Identity Content Creation", "Acquisition Analytics & Audits"],
      icon: <Share2 className="h-6 w-6 text-primary" />,
      tag: "Broadcasting",
    },
  ];

  const processStages = [
    { num: "01", name: "Intake Discovery", detail: "Scoping requirements, auditing codebases, and drafting concrete PRDs." },
    { num: "02", name: "System Modeling", detail: "Prototyping UI wireframes and designing Postgres relational database schemas." },
    { num: "03", name: "Development Sprint", detail: "Next.js App Router implementation, Supabase sync, and AI prompt alignment." },
    { num: "04", name: "Rigid Verification", detail: "Lighthouse audit checks, keyboard focus checks, sitemaps index, and deploy." },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-background text-foreground pt-36 pb-20 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[130px] pointer-events-none" />

        {/* 1. Services Hero */}
        <section className="page-container text-center space-y-6 mb-24">
          <ScrollReveal direction="up" className="space-y-6">
            <div className="badge-primary">Capabilities Showroom</div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Solutions Designed <br />
              for <span className="gradient-text">Performance & Scale</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted text-base sm:text-lg leading-relaxed">
              We deliver enterprise-grade digital systems and AI automations custom engineered to eliminate manual friction and drive customer conversion.
            </p>
          </ScrollReveal>
        </section>

        {/* 2. Overview of all 7 Services */}
        <section className="page-container space-y-16 mb-28">
          <div className="grid grid-cols-1 gap-12">
            {serviceList.map((service) => (
              <ScrollReveal
                key={service.id}
                direction="up"
              >
                <div
                  id={service.id}
                  className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/5 flex flex-col lg:flex-row gap-8 items-start justify-between hover:border-white/10 transition-colors"
                >
                  {/* Left side */}
                  <div className="space-y-6 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shadow-glass text-primary">
                        {service.icon}
                      </div>
                      <div>
                        <span className="text-[0.65rem] font-bold text-primary tracking-widest uppercase block">
                          {service.tag}
                        </span>
                        <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Feature Bullets */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-muted">
                          <CheckCircle2 className="h-4.5 w-4.5 text-secondary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right side CTA card */}
                  <div className="w-full lg:w-80 shrink-0 py-6 px-6 bg-white/5 border border-white/5 rounded-xl space-y-4 text-left">
                    <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider">
                      Ready to implement?
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Request a diagnostic scope for {service.title}.
                    </div>
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="btn-primary w-full py-2.5 text-xs rounded-lg flex items-center justify-center gap-1.5 group"
                    >
                      <span>Configure Now</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 3. Tech Stack Section */}
        <TechStack />

        {/* 4. Process Section */}
        <section className="page-container space-y-12 mb-28 border-t border-white/5 pt-24">
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto space-y-4">
            <div className="badge-secondary">Timeline</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Our Implementation Timeline</h2>
            <p className="text-sm text-muted">How we scope, design, construct, and verify custom architectures.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processStages.map((stage, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="glass-panel p-6 rounded-xl border border-white/5 h-full">
                  <div className="font-display text-4xl font-black text-white/10 mb-4">{stage.num}</div>
                  <h3 className="font-display font-bold text-white mb-2">{stage.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{stage.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 5. FAQ Section */}
        <ScrollReveal direction="up">
          <FAQSection />
        </ScrollReveal>

        {/* 6. CTA Banner */}
        <section className="page-container pt-8">
          <ScrollReveal direction="up">
            <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 text-center relative overflow-hidden shadow-glow-primary">
              <div className="relative z-10 max-w-xl mx-auto space-y-6">
                <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Unlock Operational Efficiencies
                </h2>
                <p className="text-sm text-muted leading-relaxed">
                  Connect with our system engineers today to perform a complete diagnostic assessment of your current workflow platforms.
                </p>
                <div className="flex justify-center pt-2">
                  <Link href="/contact" className="btn-primary py-3 px-8 text-sm rounded-lg flex items-center gap-1.5 shadow-glow-primary">
                    <span>Schedule Diagnostic Session</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>

      <Footer />
    </>
  );
}
