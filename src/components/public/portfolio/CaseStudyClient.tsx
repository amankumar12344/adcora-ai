"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, ArrowRight, Clock, Briefcase, 
  CheckCircle, ChevronDown, MessageSquare, Mail, Code
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, portfolioProjects } from "@/lib/portfolioData";

interface CaseStudyClientProps {
  project: Project;
}

export default function CaseStudyClient({ project }: CaseStudyClientProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">("idle");

  // Track scroll position for sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter 2 related projects
  const relatedProjects = portfolioProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email) {
      setFormStatus("loading");
      setTimeout(() => {
        setFormStatus("success");
        setForm({ name: "", email: "", msg: "" });
      }, 1500);
    }
  };

  // Visual Tech Icons Map
  const techIcons: Record<string, React.ReactNode> = {
    "Next.js": (
      <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.066 12.871l-2.616-3.48v3.48H9.366V9.129h1.084l2.616 3.48V9.129h1.084v5.742h-1.084z" />
      </svg>
    ),
    "Supabase": (
      <svg className="h-4 w-4 fill-[#3ecf8e]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 12h7v8l10-10h-7V2z" />
      </svg>
    ),
    "OpenAI GPT-4": (
      <svg className="h-4 w-4 fill-emerald-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14h-2v-2h2zm0-4h-2V7h2z" />
      </svg>
    ),
    "LangChain": (
      <svg className="h-4 w-4 fill-violet-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 18.2L5.8 17V8.8L12 5.3l6.2 3.5V17L12 20.2z" />
      </svg>
    ),
    "Tailwind CSS v4": (
      <svg className="h-4 w-4 fill-cyan-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3v18M3 12h18M12 3L3 12l9 9 9-9-9-9z" />
      </svg>
    ),
    "TypeScript": (
      <span className="text-[0.65rem] font-bold text-sky-400">TS</span>
    ),
    "Figma API": (
      <span className="text-[0.65rem] font-bold text-rose-400">FIG</span>
    )
  };

  const getTechIcon = (name: string) => {
    return techIcons[name] || <Code className="h-4 w-4 text-muted-foreground" />;
  };

  return (
    <div className="space-y-24 pb-16">
      
      {/* Back to Portfolio Link */}
      <div className="text-left">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-bold text-muted hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>BACK TO DIRECTORY</span>
        </Link>
      </div>

      {/* SECTION 1 — PROJECT HERO */}
      <section className="space-y-8 text-left">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2.5">
            <span className="badge-primary">{project.category}</span>
            <span className="badge-secondary">{project.industry}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
            {project.title}
          </h1>
          <p className="text-muted text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            {project.executiveSummary.overview}
          </p>
        </div>

        {/* Project Meta Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-card/20 border border-white/5">
          <div>
            <span className="text-[0.6rem] font-bold text-muted uppercase tracking-wider block">Duration</span>
            <span className="text-sm font-semibold text-white flex items-center gap-1.5 mt-1">
              <Clock className="h-4 w-4 text-primary" /> {project.duration}
            </span>
          </div>
          <div>
            <span className="text-[0.6rem] font-bold text-muted uppercase tracking-wider block">Client Industry</span>
            <span className="text-sm font-semibold text-white flex items-center gap-1.5 mt-1">
              <Briefcase className="h-4 w-4 text-secondary" /> {project.industry.split(" ")[0]}
            </span>
          </div>
          <div className="col-span-2">
            <span className="text-[0.6rem] font-bold text-muted uppercase tracking-wider block">Services Delivered</span>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {project.services.map((s) => (
                <span key={s} className="text-[0.65rem] font-semibold text-white/95 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width hero image optimized with next/image */}
        <div className="relative w-full h-64 sm:h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-glass">
          <Image
            src={project.image}
            alt={`${project.title} Case Study Main Illustration`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        </div>
      </section>

      {/* SECTION 2 — EXECUTIVE SUMMARY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left border-t border-white/5 pt-16">
        <div className="lg:col-span-4 space-y-4">
          <div className="badge-primary">01 / Summary</div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white">Executive Summary</h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            A high-level synthesis of objective target mapping, implementation routes, and highlights.
          </p>
        </div>
        <div className="lg:col-span-8 space-y-6">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-white text-base">Project Overview & Objectives</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {project.executiveSummary.overview} The primary target was to establish {project.executiveSummary.objective.toLowerCase()}
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">Key Performance Highlights</span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.executiveSummary.highlights.map((h, i) => (
                <li key={i} className="flex gap-2.5 text-xs text-muted">
                  <CheckCircle className="h-4.5 w-4.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE CHALLENGE */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left border-t border-white/5 pt-16">
        <div className="lg:col-span-4 space-y-4">
          <div className="badge-secondary">02 / Obstacles</div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white">The Challenge</h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Identifying operational bottlenecks and interface paintpoints.
          </p>
        </div>
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Operational Issues</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                {project.challenge.issues.map((iss, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 shrink-0 mt-2" />
                    <span>{iss}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Business Pain Points</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                {project.challenge.painPoints.map((pp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 shrink-0 mt-2" />
                    <span>{pp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/10 space-y-3">
            <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider">User Experience Problems</h4>
            <ul className="space-y-1 text-xs text-muted-foreground">
              {project.challenge.userProblems.map((up, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-rose-400 shrink-0">✕</span>
                  <span>{up}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4 — RESEARCH & STRATEGY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left border-t border-white/5 pt-16">
        <div className="lg:col-span-4 space-y-4">
          <div className="badge-primary">03 / Discovery</div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white">Research & Strategy</h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Data gathering steps, user mapping, and structural decisions.
          </p>
        </div>
        <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-muted-foreground">
          <p className="leading-relaxed">
            {project.strategy.process} We designed a structure centered on clean performance thresholds and data boundary policies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <span className="text-[0.65rem] font-bold text-primary uppercase tracking-wider block">Key Research Findings</span>
              <ul className="space-y-1 text-xs text-muted-foreground">
                {project.strategy.findings.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <span className="text-[0.65rem] font-bold text-secondary uppercase tracking-wider block">Strategic Decisions</span>
              <ul className="space-y-1 text-xs text-muted-foreground">
                {project.strategy.decisions.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — SOLUTION OVERVIEW */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left border-t border-white/5 pt-16">
        <div className="lg:col-span-4 space-y-4">
          <div className="badge-secondary">04 / Platform</div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white">Solution Overview</h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Modular layout systems, automations, and frontend iterations.
          </p>
        </div>
        <div className="lg:col-span-8 space-y-6">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {project.solutionOverview.explanation}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.solutionOverview.modules.map((m, i) => (
              <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/5 space-y-2">
                <span className="text-xs font-bold text-white block">{m.name}</span>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — DESIGN PROCESS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left border-t border-white/5 pt-16">
        <div className="lg:col-span-4 space-y-4">
          <div className="badge-primary">05 / UIUX Creative</div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white">Design Process</h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Wireframes setup, tokens synchronization, and typography scale rules.
          </p>
        </div>
        <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-muted-foreground">
          <p className="leading-relaxed">
            {project.designProcess.wireframes} {project.designProcess.mobileFirst}
          </p>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">Key Layout Decisions</span>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              {project.designProcess.decisions.map((dec, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                  <span>{dec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 7 — DEVELOPMENT PROCESS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left border-t border-white/5 pt-16">
        <div className="lg:col-span-4 space-y-4">
          <div className="badge-secondary">06 / Engineering</div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white">Development Process</h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            System pipelines, database queries, and deployment runs.
          </p>
        </div>
        <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-muted-foreground">
          <p className="leading-relaxed">
            {project.devProcess.architecture} {project.devProcess.scalability}
          </p>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">Implementation Phases</span>
            <ol className="space-y-2 text-xs text-muted-foreground">
              {project.devProcess.phases.map((ph, i) => (
                <li key={i} className="flex gap-2">
                  <span className="font-bold text-primary">0{i+1}.</span>
                  <span>{ph}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 8 — FEATURE SHOWCASE */}
      <section className="space-y-8 text-left border-t border-white/5 pt-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="badge-primary">Feature Spotlight</div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Core Interface Spotlight</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {project.featureShowcase.map((feat, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
              <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden border border-white/5 shadow-glass">
                <Image
                  src={feat.image}
                  alt={feat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="space-y-1.5 text-left">
                <h4 className="font-display font-bold text-white text-base">{feat.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9 — BEFORE VS AFTER */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left border-t border-white/5 pt-16">
        <div className="lg:col-span-4 space-y-4">
          <div className="badge-secondary">07 / Workflow Sync</div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white">Before vs After</h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Process improvements and operational workflow comparative matrices.
          </p>
        </div>
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-rose-500/5 border border-rose-500/10 space-y-2">
              <span className="text-[0.65rem] font-bold text-rose-400 uppercase tracking-wider block">Legacy Workflow</span>
              <p className="text-xs text-muted-foreground leading-relaxed">{project.beforeVsAfter.before}</p>
            </div>
            <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 space-y-2">
              <span className="text-[0.65rem] font-bold text-emerald-400 uppercase tracking-wider block">Optimized Workflow</span>
              <p className="text-xs text-muted-foreground leading-relaxed">{project.beforeVsAfter.after}</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
            <span className="text-xs font-bold text-white uppercase tracking-wider block">Process & Operational Efficiencies</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <span className="text-[0.65rem] font-bold text-primary uppercase tracking-wider block">Process Enhancements</span>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {project.beforeVsAfter.processImps.map((imp, i) => (
                    <li key={i}>• {imp}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-1.5">
                <span className="text-[0.65rem] font-bold text-secondary uppercase tracking-wider block">Operational Benefits</span>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  {project.beforeVsAfter.operationalImps.map((imp, i) => (
                    <li key={i}>• {imp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — TECHNOLOGY STACK */}
      <section className="space-y-8 text-left border-t border-white/5 pt-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="badge-primary">Infrastructure Node</div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Visual Technology Stack</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {project.tech.map((t) => (
            <div key={t} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 shadow-glass">
              {getTechIcon(t)}
              <span className="text-xs font-bold text-white tracking-wide">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 11 — OUTCOMES */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left border-t border-white/5 pt-16">
        <div className="lg:col-span-4 space-y-4">
          <div className="badge-secondary">08 / Results</div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white">Outcomes & Benefits</h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Verified qualitative, workflow, and user experience enhancements.
          </p>
        </div>
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <span className="text-[0.65rem] font-bold text-primary uppercase tracking-wider block">Workflow Improvements</span>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {project.outcomes.workflow.map((w, i) => (
                  <li key={i} className="flex gap-2"><CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" /> {w}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <span className="text-[0.65rem] font-bold text-secondary uppercase tracking-wider block">Automation Benefits</span>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {project.outcomes.automation.map((a, i) => (
                  <li key={i} className="flex gap-2"><CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0" /> {a}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <span className="text-[0.65rem] font-bold text-white uppercase tracking-wider block">Qualitative & User Experience Benefits</span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
              {project.outcomes.ux.map((u, i) => (
                <li key={i}>• {u}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TECHNICAL AUDIT & QUALITY REVIEW */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left border-t border-white/5 pt-16">
        <div className="lg:col-span-4 space-y-4">
          <div className="badge-primary">09 / Audit</div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white">Technical Audit & Quality Review</h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Verifiable quality scores and operational optimization benchmarks checked for this deployment.
          </p>
        </div>
        
        <div className="lg:col-span-8 space-y-8">
          {/* Circular Gauges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/5">
            {/* Performance Gauge */}
            <div className="flex items-center gap-4">
              <div className="relative h-18 w-18 shrink-0 flex items-center justify-center">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="32" className="stroke-white/5" strokeWidth="6" fill="transparent" />
                  <circle 
                    cx="40" 
                    cy="40" 
                    r="32" 
                    className="stroke-primary" 
                    strokeWidth="6" 
                    fill="transparent" 
                    strokeDasharray="201.06" 
                    strokeDashoffset={201.06 - (project.technicalAudit.performance / 100) * 201.06}
                    strokeLinecap="round" 
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-black text-white">
                  {project.technicalAudit.performance}%
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">Performance Score</span>
                <span className="text-[0.65rem] text-muted-foreground leading-tight block">Sub-second page rendering and edge load speeds.</span>
              </div>
            </div>

            {/* Accessibility Gauge */}
            <div className="flex items-center gap-4">
              <div className="relative h-18 w-18 shrink-0 flex items-center justify-center">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="32" className="stroke-white/5" strokeWidth="6" fill="transparent" />
                  <circle 
                    cx="40" 
                    cy="40" 
                    r="32" 
                    className="stroke-secondary" 
                    strokeWidth="6" 
                    fill="transparent" 
                    strokeDasharray="201.06" 
                    strokeDashoffset={201.06 - (project.technicalAudit.accessibility / 100) * 201.06}
                    strokeLinecap="round" 
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-black text-white">
                  {project.technicalAudit.accessibility}%
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">Accessibility Score</span>
                <span className="text-[0.65rem] text-muted-foreground leading-tight block">Full WCAG 2.1 AA keyboard and contrast checking.</span>
              </div>
            </div>
          </div>

          {/* Verification Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white/5 border border-white/5 space-y-1 text-left">
              <span className="text-[0.65rem] font-bold text-secondary uppercase tracking-widest block">Mobile Optimization</span>
              <p className="text-xs text-muted-foreground leading-relaxed">{project.technicalAudit.mobileOptimization}</p>
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/5 space-y-1 text-left">
              <span className="text-[0.65rem] font-bold text-primary uppercase tracking-widest block">SEO Readiness</span>
              <p className="text-xs text-muted-foreground leading-relaxed">{project.technicalAudit.seoReadiness}</p>
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/5 space-y-1 text-left">
              <span className="text-[0.65rem] font-bold text-emerald-400 uppercase tracking-widest block">Security Standards</span>
              <p className="text-xs text-muted-foreground leading-relaxed">{project.technicalAudit.securityStandards}</p>
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/5 space-y-1 text-left">
              <span className="text-[0.65rem] font-bold text-amber-400 uppercase tracking-widest block">Code Quality Validation</span>
              <p className="text-xs text-muted-foreground leading-relaxed">{project.technicalAudit.codeQuality}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT FEEDBACK / QA CHECKLIST SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left border-t border-white/5 pt-16">
        <div className="lg:col-span-4 space-y-4">
          <div className="badge-secondary">10 / Verification</div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white">
            {project.feedback ? "Client Feedback" : "Quality Assurance Review"}
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {project.feedback ? "Endorsements and project review logs from client groups." : "Verification checklist and quality assurance checklist standards."}
          </p>
        </div>

        <div className="lg:col-span-8">
          {project.feedback ? (
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
              <div className="flex items-center gap-2">
                {[...Array(project.feedback.clientRating)].map((_, idx) => (
                  <span key={idx} className="text-amber-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-foreground/90 font-medium italic leading-relaxed">
                &ldquo;{project.feedback.clientFeedback}&rdquo;
              </p>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                — {project.feedback.projectReview}
              </div>
            </div>
          ) : (
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-6">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">Deployment Verification & Validation Checklist</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Intake Scoping Specs Verified",
                  "Design Tokens Contrast Checked",
                  "Mobile Touch Sizing Validated",
                  "Static Build Compilation Prerendered",
                  "Secure Environment Token Isolation Active",
                  "Cross-Browser Interface Rendering Verified"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-muted">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 12 — PROJECT GALLERY */}
      <section className="space-y-8 text-left border-t border-white/5 pt-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="badge-primary">Product Showcase</div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Project Gallery</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {project.gallery.map((g, i) => (
            <div key={i} className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/5 shadow-glass group">
              <Image
                src={g}
                alt={`${project.title} Interface View ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-103"
              />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 13 — RELATED PROJECTS */}
      <section className="space-y-8 text-left border-t border-white/5 pt-16">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Related Case Studies</h3>
          <Link href="/portfolio" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
            <span>View All Works</span> <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {relatedProjects.map((p) => (
            <div key={p.slug} className="glass-card overflow-hidden border border-white/5 text-left group">
              <div className="relative h-40 w-full overflow-hidden border-b border-white/5">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <span className="text-[0.65rem] font-bold text-secondary uppercase tracking-widest">{p.category}</span>
                  <h4 className="font-display font-bold text-white text-base leading-snug line-clamp-1">{p.title}</h4>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{p.executiveSummary.overview}</p>
                <Link
                  href={`/portfolio/${p.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-white transition-colors pt-2"
                >
                  <span>Explore Case Study</span> <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 14 — FAQ */}
      <section className="space-y-8 text-left border-t border-white/5 pt-16 max-w-3xl mx-auto">
        <div className="text-center space-y-4">
          <div className="badge-primary">Q&A Session</div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Project Specific FAQs</h2>
        </div>
        <div className="space-y-4">
          {project.faqs.map((faq, idx) => (
            <div key={idx} className="glass-panel rounded-xl border border-white/5 overflow-hidden">
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-5 flex items-center justify-between gap-4 text-left focus:outline-none"
                aria-expanded={activeFaq === idx}
              >
                <span className="font-display text-sm sm:text-base font-bold text-white">{faq.q}</span>
                <ChevronDown className={`h-4.5 w-4.5 text-muted-foreground transition-transform shrink-0 ${activeFaq === idx ? "rotate-180 text-white" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {activeFaq === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 16 — FINAL CTA */}
      <section className="max-w-xl mx-auto space-y-8 border-t border-white/5 pt-20 text-left">
        <div className="text-center space-y-4">
          <div className="badge-secondary">Start Scoping</div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Configure Similar Solution</h2>
          <p className="text-sm text-muted">Submit details below to initiate a diagnostic technical check on your workflow pipelines.</p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 relative overflow-hidden shadow-glow-primary">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            {formStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1 }}
                className="alert-success text-xs font-semibold"
              >
                ✓ Request registered! A technical systems architect will contact you within 12 business hours.
              </motion.div>
            )}

            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="cta-name">Full Name</label>
              <input
                id="cta-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Elena Rostova"
                className="input-dark text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="cta-email">Email Address</label>
              <input
                id="cta-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="elena@company.com"
                className="input-dark text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="cta-msg">Specific Objectives / Notes</label>
              <textarea
                id="cta-msg"
                value={form.msg}
                onChange={(e) => setForm({ ...form, msg: e.target.value })}
                placeholder="Briefly state your automation focus or technology stack criteria..."
                className="textarea-dark text-sm"
              />
            </div>

            {formStatus !== "success" && (
              <button
                type="submit"
                disabled={formStatus === "loading"}
                className="btn-primary w-full py-3 rounded-lg flex items-center justify-center gap-2 font-bold shadow-glow-primary text-sm"
              >
                {formStatus === "loading" ? "Registering transmission..." : "Book Diagnostic Consultation"}
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </form>

          {/* Social Channels in CTA */}
          <div className="flex justify-center gap-6 pt-6 mt-6 border-t border-white/5 text-xs text-muted-foreground">
            <a href="https://wa.me/919153765913?text=Hi%20AdcoraAI" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1.5 transition-colors">
              <svg className="h-4 w-4 text-emerald-400 fill-emerald-400" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.238 1.45 4.82 1.452 5.432-.002 9.85-4.42 9.853-9.852.002-2.63-1.023-5.101-2.885-6.963C16.573 1.928 14.102.926 11.47.924c-5.43.002-9.85 4.42-9.853 9.852.001 2.01.522 3.974 1.517 5.694l-.99 3.616 3.703-.972c1.668.91 3.3.01 3.3.01zm10.9-7.825c-.27-.136-1.602-.79-1.85-.882-.25-.091-.43-.136-.61.136-.18.27-.7.882-.857 1.058-.16.176-.32.197-.59.06-2.73-1.37-3.83-2.3-4.59-3.6-.2-.35-.02-.54.15-.71.16-.16.35-.41.52-.61.18-.2.24-.34.36-.57.12-.23.06-.43-.03-.61-.09-.18-.73-1.77-.99-2.4-.26-.62-.53-.54-.73-.55-.19-.01-.41-.01-.63-.01s-.57.08-.87.41c-.3.33-1.14 1.12-1.14 2.73s1.18 3.16 1.34 3.39c.16.22 2.32 3.54 5.62 4.97 3.01 1.3 3.62 1.04 4.9.86.72-.1 1.6-.65 1.83-1.26.23-.61.23-1.13.16-1.24-.07-.1-.26-.18-.53-.32z"/></svg>
              <span>WhatsApp: +91 91537 65913</span>
            </a>
            <a href="mailto:connect.adcoraai@gmail.com" className="hover:text-white flex items-center gap-1.5 transition-colors">
              <Mail className="h-4 w-4 text-primary" /> connect.adcoraai@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 15 — STICKY CONSULTATION CTA */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-6 right-6 z-40 max-w-xl mx-auto"
          >
            <div className="glass-panel p-4 rounded-2xl border border-white/10 shadow-glow-primary flex items-center justify-between gap-4 bg-background/80 backdrop-blur-md">
              <div className="hidden sm:block text-left">
                <span className="text-[0.6rem] font-bold text-secondary uppercase tracking-widest block">Configure Solutions</span>
                <span className="text-xs font-semibold text-white truncate max-w-[200px] block">{project.title}</span>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="btn-primary py-2 px-4 text-xs rounded-xl font-bold flex-1 sm:flex-initial text-center shadow-glow-primary inline-block"
                >
                  Book consultation
                </Link>
                <Link
                  href="/contact"
                  className="btn-glass py-2 px-4 text-xs rounded-xl font-bold flex-1 sm:flex-initial text-center inline-block"
                >
                  Request Similar Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
