"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const categories = [
  { id: "all", label: "All Work" },
  { id: "ai", label: "AI & Automation" },
  { id: "software", label: "Software Solutions" },
  { id: "creative", label: "Creative Design" },
];

const projects = [
  {
    title: "Aether CRM AI Agent",
    category: "ai",
    desc: "Autonomously handles support tickets, schedules client intake calendars, and updates sales leads.",
    metric: "120 hrs/mo saved",
    link: "/portfolio",
    glowColor: "rgba(139,92,246,0.12)",
  },
  {
    title: "Nova Logistics Dashboard",
    category: "software",
    desc: "High-frequency tracking portal integrating Supabase real-time clients and leaflet vector mappings.",
    metric: "99.99% Sync SLA",
    link: "/portfolio",
    glowColor: "rgba(14,165,233,0.12)",
  },
  {
    title: "Vertex Design Tokens System",
    category: "creative",
    desc: "Decoupled component architecture designed for a global SaaS brand to unify UI tokens across web portals.",
    metric: "40% dev speedup",
    link: "/portfolio",
    glowColor: "rgba(167,92,246,0.12)",
  },
  {
    title: "Apex Cloud Storefront",
    category: "software",
    desc: "Fast Shopify-decoupled Next.js checkout platform utilizing edge sitemap indexes and Stripe API webhooks.",
    metric: "2.4x checkout speed",
    link: "/portfolio",
    glowColor: "rgba(16,185,129,0.12)",
  },
];

export default function PortfolioPreview() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="section-padding border-t border-white/5 relative z-10">
      <div className="page-container space-y-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <ScrollReveal direction="up" className="text-left space-y-4 max-w-xl">
            <div className="badge-primary">Case Studies</div>
            <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white">
              Delivering Business Impact
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              We focus on metrics that matter. Explore our projects sorted by technology division.
            </p>
          </ScrollReveal>

          {/* Filtering Tabs */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Portfolio Category Filter">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  role="tab"
                  aria-selected={filter === cat.id}
                  onClick={() => setFilter(cat.id)}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer transition-all ${
                    filter === cat.id
                      ? "bg-gradient-to-tr from-primary to-secondary text-white shadow-glow-primary"
                      : "bg-white/5 text-muted-foreground hover:bg-white/10"
                  }`}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Dynamic Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3 }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: `0 24px 48px -12px ${project.glowColor}, 0 0 0 1px rgba(255,255,255,0.08)`,
                }}
                className="glass-card flex flex-col justify-between border border-white/5 hover:border-white/12 text-left transition-colors duration-300 cursor-default"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="badge-secondary">
                      {project.category === "ai" ? "AI & Auto" : project.category === "software" ? "Software" : "Creative"}
                    </span>
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-xs text-primary font-bold tracking-wide uppercase px-2.5 py-1 rounded bg-primary/10 border border-primary/20"
                    >
                      {project.metric}
                    </motion.span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={project.link}
                    className="text-xs font-semibold text-white/95 hover:text-white flex items-center gap-1 group"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-block"
          >
            <Link href="/portfolio" className="btn-outline">
              View All Projects
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
