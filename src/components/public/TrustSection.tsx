"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Compass, GitMerge, CheckCircle } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TrustSection() {
  const [activeTab, setActiveTab] = useState<"process" | "qa" | "partnership">("process");

  const sections = {
    process: {
      badge: "Delivery Roadmap",
      title: "Transparent Development Process",
      desc: "Our software engineering pipeline runs on clear stages, milestone checks, and complete communication channels.",
      items: [
        { title: "Discovery & Planning", desc: "We draft scoping lists, audit existing assets, and model database architectures before code begins." },
        { title: "Clear Project Roadmaps", desc: "You receive access to interactive dashboards showing sprints, tasks, and target dates." },
        { title: "Weekly Progress Updates", desc: "We host weekly screenshare video demos, showing running code, completed cards, and test outputs." },
        { title: "Direct Communication Channels", desc: "No middle managers. You communicate directly with development leads via dedicated channels." },
        { title: "Milestone-Based Delivery", desc: "Payment scopes are strictly tied to running features delivered to private staging domains." }
      ]
    },
    qa: {
      badge: "Engineering Standards",
      title: "Quality Assurance System",
      desc: "Every system build runs through automated code diagnostics, contrast evaluations, and mobile responsiveness runs.",
      items: [
        { title: "Performance Optimization", desc: "We optimize all layouts targeting Google Lighthouse speeds with sub-second page rendering." },
        { title: "Mobile-First Development", desc: "Component blocks are tested on physical touch devices to ensure swipe gestures and taps are fluid." },
        { title: "Accessibility Standards", desc: "Strict WCAG 2.1 AA design tokens check to ensure screen readers and keyboards can navigate." },
        { title: "Security Best Practices", desc: "Isolating database tables under Row Level Security and securing inputs against vulnerability threats." },
        { title: "Cross-Browser Testing", desc: "Validating render paths across Safari, Chrome, and Firefox to resolve layout shifts." }
      ]
    },
    partnership: {
      badge: "Sustained Scaling",
      title: "Long-Term Collaboration SLAs",
      desc: "We support products post-launch, coordinating security patches, server capacity upgrades, and new feature plans.",
      items: [
        { title: "Post-Launch Support", desc: "30 days of active post-deploy bug monitoring and response coverage included in every sprint contract." },
        { title: "Ongoing Maintenance", desc: "Optional retainers for routine system checks, node dependency updates, and database indexing." },
        { title: "Feature Enhancements", desc: "Extend capabilities through structured sprint scoping to launch version integrations." },
        { title: "Scaling Support", desc: "We coordinate database migrations, database read replicas, and hosting tier shifts as traffic grows." },
        { title: "Technical Consultation", desc: "Routine check-in calls with system architects to evaluate architecture opportunities." }
      ]
    }
  };

  const current = sections[activeTab];

  return (
    <section id="trust-system" className="section-padding border-t border-white/5 bg-card/5 relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="page-container space-y-12 text-left">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <ScrollReveal direction="right" className="lg:col-span-7 space-y-4">
            <div className="badge-primary inline-flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Transparency SLA</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-none">
              Engineering Built on <span className="gradient-text">Trust & Accountability</span>
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-xl">
              We earn trust through clear quality checkmarks, direct developer correspondence, and transparent release workflows.
            </p>
          </ScrollReveal>

          {/* Dynamic Tabs list */}
          <ScrollReveal direction="left" delay={0.15} className="lg:col-span-5">
            <div className="flex flex-wrap lg:justify-end gap-2 bg-white/[0.03] border border-white/5 p-1.5 rounded-2xl w-fit">
              {(["process", "qa", "partnership"] as const).map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-glow-primary border-transparent"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {tab === "process" ? "Development Process" : tab === "qa" ? "Quality Assurance" : "Long-Term SLA"}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Content display area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6">
          
          {/* Summary column */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/5 relative overflow-hidden h-full min-h-[250px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <span className="text-[0.65rem] font-bold text-secondary tracking-widest uppercase block">{current.badge}</span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">{current.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{current.desc}</p>
            </div>

            <div className="pt-8 relative z-10 flex flex-wrap gap-4 text-xs font-bold text-white uppercase tracking-wider">
              <div className="flex items-center gap-1.5"><Compass className="h-4 w-4 text-primary" /> Transparent</div>
              <div className="flex items-center gap-1.5"><GitMerge className="h-4 w-4 text-secondary" /> Accountable</div>
            </div>
          </div>

          {/* Roadmap list column */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full"
              >
                {current.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={staggerItem}
                    whileHover={{ y: -3, borderColor: "rgba(255,255,255,0.12)" }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    className={`glass-panel p-6 rounded-2xl border border-white/5 transition-all flex flex-col justify-between gap-4 cursor-default ${
                      idx === 4 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5">
                        <motion.div
                          initial={{ scale: 0.7, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: idx * 0.07, type: "spring", stiffness: 300 }}
                          className="h-6 w-6 rounded bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-[0.65rem] font-bold shrink-0"
                        >
                          0{idx+1}
                        </motion.div>
                        <h4 className="font-display font-bold text-white text-sm sm:text-base leading-tight">{item.title}</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-8">{item.desc}</p>
                    </div>

                    <div className="flex justify-end pl-8">
                      <span className="text-[0.65rem] font-bold text-muted uppercase tracking-wider flex items-center gap-1 opacity-60">
                        SLA Verified <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
