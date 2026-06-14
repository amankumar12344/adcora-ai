"use client";

import React, { useState } from "react";
import { Search, Compass, Terminal, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { viewportOnce } from "@/lib/animations";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    title: "Discovery & Scoping",
    desc: "We analyze your administrative bottlenecks, run diagnostic scopes, audit existing codebases, and draft full Product Requirement Documents (PRDs).",
    icon: <Search className="h-6 w-6" />,
    tag: "Phase 01",
    color: "primary",
    accentClass: "text-primary",
    bgClass: "bg-primary/10",
    borderClass: "border-primary/30",
    glowClass: "shadow-glow-primary",
  },
  {
    title: "Strategy & Modeling",
    desc: "Our architects prototype UI/UX flows, map relational PostgreSQL databases, design API schemas, and formulate strict security guidelines.",
    icon: <Compass className="h-6 w-6" />,
    tag: "Phase 02",
    color: "secondary",
    accentClass: "text-secondary",
    bgClass: "bg-secondary/10",
    borderClass: "border-secondary/30",
    glowClass: "shadow-glow-secondary",
  },
  {
    title: "Development & Tuning",
    desc: "We implement fast Next.js App Router architectures, hook up Supabase real-time clients, inject custom Tailwind styling, and align AI LLMs.",
    icon: <Terminal className="h-6 w-6" />,
    tag: "Phase 03",
    color: "accent",
    accentClass: "text-accent",
    bgClass: "bg-accent/10",
    borderClass: "border-accent/30",
    glowClass: "",
  },
  {
    title: "Launch & Optimization",
    desc: "We run end-to-end unit checks, verify 90+ Lighthouse performance scores, audit WCAG accessibility tags, configure domain records, and go live.",
    icon: <Rocket className="h-6 w-6" />,
    tag: "Phase 04",
    color: "success",
    accentClass: "text-success",
    bgClass: "bg-success/10",
    borderClass: "border-success/30",
    glowClass: "",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="section-padding border-t border-white/5 relative z-10">
      <div className="page-container space-y-12">

        {/* Header */}
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto space-y-4">
          <div className="badge-secondary">Engineering Process</div>
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white">
            How We Deliver Digital Value
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Our systematic approach bridges conceptual product designs with enterprise-ready operational systems.
          </p>
        </ScrollReveal>

        {/* Timeline Row (Desktop only) */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative mb-8">
          {/* Connector Line running behind the grid cells */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[12.5%] right-[12.5%] h-[2px] bg-white/5 z-0 overflow-hidden rounded-full">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              style={{ originX: 0 }}
              className="h-full w-full bg-gradient-to-r from-primary/60 via-secondary/60 to-success/60 rounded-full"
            />
          </div>
          {/* Node Circles */}
          {steps.map((step, i) => (
            <div key={i} className="flex justify-center relative z-10">
              <button
                onClick={() => setActiveStep(i)}
                className={`h-10 w-10 rounded-xl flex items-center justify-center shadow-glass transition-all duration-300 ${
                  activeStep === i
                    ? `bg-gradient-to-tr from-primary to-secondary text-white scale-110 shadow-glow-primary`
                    : `${step.bgClass} ${step.accentClass} hover:border-white/20 border border-white/5`
                }`}
                aria-label={`Select ${step.title}`}
              >
                {step.icon}
              </button>
            </div>
          ))}
        </div>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveStep(i)}
              whileHover={{ y: -4 }}
              className={`glass-panel p-6 rounded-xl border z-10 cursor-pointer transition-all duration-300 ${
                activeStep === i
                  ? `${step.borderClass} ${step.glowClass} bg-white/[0.03]`
                  : "border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                {/* Step Circle Indicator */}
                <motion.div
                  animate={activeStep === i ? { scale: [1, 1.12, 1] } : { scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`h-10 w-10 rounded-xl flex items-center justify-center shadow-glass transition-all duration-300 lg:hidden ${
                    activeStep === i
                      ? `bg-gradient-to-tr from-primary to-secondary text-white`
                      : `${step.bgClass} ${step.accentClass}`
                  }`}
                >
                  {step.icon}
                </motion.div>
                <span className="text-[0.65rem] font-bold tracking-wider uppercase text-muted ml-auto lg:ml-0">
                  {step.tag}
                </span>
              </div>

              <div className="space-y-2 text-left">
                <h3 className="font-display font-bold text-white text-base sm:text-lg">
                  {step.title}
                </h3>

                <AnimatePresence mode="wait">
                  {activeStep === i ? (
                    <motion.p
                      key="expanded"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs sm:text-sm text-muted-foreground leading-relaxed"
                    >
                      {step.desc}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2"
                    >
                      {step.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Active indicator dot */}
              {activeStep === i && (
                <motion.div
                  layoutId="activeProcessDot"
                  className={`mt-4 h-1 w-8 rounded-full ${step.bgClass}`}
                />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
