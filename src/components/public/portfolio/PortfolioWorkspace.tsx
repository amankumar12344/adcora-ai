"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, Sparkles, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioProjects } from "@/lib/portfolioData";

export default function PortfolioWorkspace() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "AI Automation",
    "Creative Solutions",
    "Marketing",
    "Software Development",
    "Ecommerce",
    "Social Media Management"
  ];

  // Filter & Search Logic
  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter((project) => {
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.executiveSummary.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured Project (Always Aether CRM or the first project matching)
  const featuredProject = useMemo(() => {
    return portfolioProjects[0]; // Aether CRM AI Agent Integration
  }, []);

  return (
    <div className="space-y-24">
      {/* 1. Hero Section with Animated Gradient */}
      <section className="relative py-16 text-center space-y-6 overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-card/30 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-6">
          <div className="badge-primary inline-flex items-center gap-1.5 mx-auto">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Case Studies Directory</span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
            Engineering <span className="gradient-text">Impact & Scale</span>
          </h1>
          
          <p className="text-muted text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Deep-dives into systems engineering, custom automation pipelines, and high-performance frontend interfaces. We document challenges, solutions, and verified outcomes.
          </p>

          {/* Search bar integration */}
          <div className="max-w-md mx-auto pt-4 relative">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by tech stack, project title, or service..."
                className="input-dark pl-11 pr-4 py-3 text-sm rounded-xl focus:ring-primary/20"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Filter Navigation */}
      <section className="space-y-4">
        <span className="block text-xs font-bold text-muted uppercase tracking-wider text-center">
          Filter by Division
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto px-4" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-4 py-2.5 rounded-xl cursor-pointer transition-all ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-glow-primary border-transparent"
                  : "bg-white/5 border border-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Featured Project Section */}
      {selectedCategory === "All" && searchQuery === "" && (
        <section className="space-y-8">
          <div className="flex items-center gap-2 text-white font-bold font-display text-lg px-2">
            <Sparkles className="h-5 w-5 text-secondary" />
            <span>Featured Case Study</span>
          </div>

          <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 overflow-hidden relative group text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-glow-primary">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            {/* Image Frame */}
            <div className="lg:col-span-7 relative h-64 sm:h-[400px] rounded-2xl overflow-hidden border border-white/5 shadow-glass">
              <Image
                src={featuredProject.image}
                alt={`${featuredProject.title} Main Thumbnail`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-lg text-[0.65rem] font-bold text-white border border-white/5">
                {featuredProject.label}
              </div>
            </div>

            {/* Description Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[0.65rem] font-bold text-secondary tracking-widest uppercase block">
                  {featuredProject.category}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                  {featuredProject.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {featuredProject.executiveSummary.overview}
              </p>

              {/* Badges */}
              <div className="space-y-3 pt-2">
                <div>
                  <span className="text-[0.6rem] font-bold text-muted uppercase tracking-wider block mb-1.5">Services Delivered</span>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.services.map(s => (
                      <span key={s} className="text-[0.65rem] font-semibold text-white/90 bg-white/5 px-2 py-0.5 rounded border border-white/5">{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[0.6rem] font-bold text-muted uppercase tracking-wider block mb-1.5">Technology Stack</span>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.tech.map(t => (
                      <span key={t} className="text-[0.65rem] font-semibold text-primary/80 bg-primary/5 px-2 py-0.5 rounded border border-primary/10">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <Link
                  href={`/portfolio/${featuredProject.slug}`}
                  className="btn-primary py-3 px-6 text-xs sm:text-sm rounded-xl flex items-center gap-1.5 font-bold shadow-glow-primary w-full sm:w-auto justify-center"
                >
                  <span>Read Detailed Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Project Grid Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-2 text-white font-bold font-display text-lg">
            <Code className="h-5 w-5 text-primary" />
            <span>Case Studies Grid</span>
          </div>
          <span className="text-xs text-muted-foreground font-semibold">
            Showing {filteredProjects.length} projects
          </span>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card flex flex-col overflow-hidden p-0 border border-white/5 hover:border-white/10 group h-full"
              >
                {/* Thumbnail image with lazy loading */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden border-b border-white/5 shrink-0">
                  <Image
                    src={project.image}
                    alt={`${project.title} Thumbnail Preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-md px-2.5 py-0.5 rounded-lg text-[0.6rem] font-bold text-white border border-white/5">
                    {project.label}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-1 text-left space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[0.65rem] font-bold text-secondary uppercase tracking-widest block">
                        {project.category}
                      </span>
                      <span className="text-[0.65rem] text-primary/80 font-bold bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                        {project.duration}
                      </span>
                    </div>

                    <h4 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight line-clamp-1">
                      {project.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {project.executiveSummary.overview}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="text-[0.6rem] text-muted-foreground font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/5">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[0.6rem] text-muted font-bold px-2 py-0.5 rounded bg-white/5 border border-white/5">
                          +{project.tech.length - 3} More
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="btn-glass text-xs font-semibold py-2.5 px-4 rounded-lg flex items-center gap-1 group w-full justify-center hover:bg-white/10"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 glass-panel border border-white/5 rounded-2xl"
          >
            <p className="text-sm text-muted-foreground">No case studies found matching your query details.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
              className="mt-4 text-xs font-bold text-primary underline focus:outline-none"
            >
              Reset Search Parameters
            </button>
          </motion.div>
        )}
      </section>

      {/* 5. Portfolio CTA Section */}
      <section className="page-container pt-8">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 text-center relative overflow-hidden shadow-glow-secondary">
          <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
              Looking for Similar Outcomes?
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Connect with our solutions architects to perform a structural assessment of your operations and custom codebase templates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/contact" className="btn-secondary py-3 px-8 text-sm rounded-lg flex items-center justify-center gap-1.5 shadow-glow-secondary">
                <span>Book Diagnostic Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-glass py-3 px-8 text-sm rounded-lg flex items-center justify-center gap-1.5">
                <span>Start Project Scoping</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
