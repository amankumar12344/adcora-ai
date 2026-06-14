import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { ArrowRight, Target, Eye, ShieldAlert, Award, Star, Compass } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About AdcoraAI | Operational Excellence & AI Automation Team",
  description: "Learn about AdcoraAI's mission, core values, engineering team structure, and founder story guiding companies through AI-driven operations scaling.",
  openGraph: {
    title: "About AdcoraAI | Operational Excellence & AI Automation Team",
    description: "Learn about AdcoraAI's mission, core values, engineering team structure, and founder story guiding companies through AI-driven operations scaling.",
    type: "website",
    url: "https://adcoraai.com/about",
  },
};

export default function AboutPage() {
  const values = [
    {
      title: "Obsession with Security",
      desc: "Client databases are isolated, credential tokens are strictly bound to secure buckets, and codebases undergo routine security checks.",
      icon: <ShieldAlert className="h-5 w-5 text-primary" />,
    },
    {
      title: "System Performance First",
      desc: "We build layouts targeting FCP loads under 1.2s. Performance is never treated as a late-stage add-on.",
      icon: <Award className="h-5 w-5 text-secondary" />,
    },
    {
      title: "Operational Transparency",
      desc: "No fabricated metrics, no fake client names. We present real testing benchmark averages and verified data statistics.",
      icon: <Star className="h-5 w-5 text-accent" />,
    },
  ];

  const teamDivisions = [
    { name: "Intelligent Systems Team", desc: "Aligns custom LLM agents, builds RAG databases, and tunes prompt structures." },
    { name: "Full-Stack Development Studio", desc: "Constructs responsive web frontends, configures Next.js routing, and manages database RLS." },
    { name: "Creative & Interactive Studio", desc: "Models vector branding UI/UX libraries, wireframes interfaces, and codes WebGL micro-animations." },
    { name: "Growth & Scoping Strategy", desc: "Drafts development plans, audits existing codebases, and performs search engine indexing optimizations." },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-background text-foreground pt-36 pb-20 relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[130px] pointer-events-none" />

        {/* 1. Hero Section */}
        <section className="page-container text-center space-y-6 mb-20">
          <ScrollReveal direction="up" className="space-y-6">
            <div className="badge-primary">Agency Profile</div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Empowering the Next Era <br />
              of <span className="gradient-text">Digital Excellence</span>
            </h1>
            <p className="max-w-2xl mx-auto text-muted text-base sm:text-lg leading-relaxed">
              AdcoraAI is a team of system engineers, designers, and AI architects dedicated to building high-performance web products and operational workflow automations.
            </p>
          </ScrollReveal>
        </section>

        {/* 2. Founder Story Section */}
        <section className="page-container mb-24 border-t border-white/5 pt-20">
          <ScrollReveal direction="up">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 space-y-4 text-left">
                <div className="badge-secondary flex items-center gap-1.5 w-fit">
                  <Compass className="h-3.5 w-3.5" />
                  <span>Our Origin</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                  The Founder Story
                </h2>
              </div>
              
              <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed text-left">
                <p>
                  AdcoraAI was founded to solve a major market gap: the disconnect between cutting-edge Artificial Intelligence capabilities and stable, enterprise-grade software execution. While AI APIs exploded, many startups and companies struggled with security leaks, slow page loads, and fragile code integration.
                </p>
                <p>
                  Our mission is to guide companies through AI-driven digital transformations by building robust architectures that scale natively. We believe that custom automation, Stripe payment gateways, and Next.js frontends must be unified under strict compliance frameworks.
                </p>
                <p>
                  As we expand, our goals are centered on delivering complete transparency. We aim to help teams automate 80% of repetitive operational tasks, freeing engineers and product managers to focus on high-impact objectives.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 3. Mission & Vision */}
        <section className="page-container grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <ScrollReveal direction="up">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 text-left space-y-4 h-full">
              <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-white text-lg sm:text-xl">Our Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To deliver production-ready custom software and automated workflows that scale operational capabilities, protect database security boundaries, and guarantee outstanding speed performance.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div className="glass-panel p-8 rounded-2xl border border-white/5 text-left space-y-4 h-full">
              <div className="h-10 w-10 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-white text-lg sm:text-xl">Our Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To become the leading operational technology partner for startups and mid-market enterprises, serving as a trusted pipeline for intelligent web products.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* 4. Core Values (Why Choose Us) */}
        <section className="page-container space-y-12 mb-24">
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto space-y-4">
            <div className="badge-primary">Core Values</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">The Principles Guiding AdcoraAI</h2>
            <p className="text-sm text-muted">We construct interfaces with a strict dedication to three core operating values.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="glass-panel p-6 rounded-xl border border-white/5 text-left space-y-3 h-full">
                  <div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    {v.icon}
                  </div>
                  <h4 className="font-display font-bold text-white text-base">{v.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 5. Team Structure */}
        <section className="page-container space-y-12 mb-24 border-t border-white/5 pt-20">
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto space-y-4">
            <div className="badge-secondary">Our Structure</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Organizational Divisions</h2>
            <p className="text-sm text-muted">A collaborative network of specialized engineers, builders, and strategists.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {teamDivisions.map((div, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="glass-panel p-6 rounded-xl border border-white/5 text-left space-y-2 h-full">
                  <h4 className="font-display font-bold text-white text-sm sm:text-base">{div.name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{div.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 6. CTA Banner */}
        <section className="page-container">
          <ScrollReveal direction="up">
            <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 text-center relative overflow-hidden shadow-glow-primary">
              <div className="relative z-10 max-w-xl mx-auto space-y-6">
                <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Build With AdcoraAI
                </h2>
                <p className="text-sm text-muted leading-relaxed">
                  Connect with our systems architects to schedule a direct intake discovery call.
                </p>
                <div className="flex justify-center pt-2">
                  <Link href="/contact" className="btn-primary py-3 px-8 text-sm rounded-lg flex items-center gap-1.5 shadow-glow-primary">
                    <span>Start a Conversation</span>
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
