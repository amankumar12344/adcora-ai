"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { blogPosts } from "@/lib/blogData";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function BlogListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const list = new Set(blogPosts.map((post) => post.category));
    return ["All", ...Array.from(list)];
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background text-foreground pt-32 pb-20 relative overflow-hidden">
        {/* Background glow overlays */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[140px] pointer-events-none" />

        <div className="page-container relative z-10 space-y-12">
          
          {/* Hero Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="badge-primary inline-flex items-center gap-1 mx-auto">
              <Sparkles className="h-3 w-3" />
              <span>Insights Journal</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Knowledge & <span className="gradient-text">Engineering</span>
            </h1>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Read our deep-dive technical case studies, comparisons, and integration guides on APIs, travel systems, and modern scaling architectures.
            </p>
          </div>

          {/* Filters & Search Toolbar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-y border-white/5 py-6">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-glow-primary border-transparent"
                      : "bg-white/[0.02] border border-white/5 text-muted-foreground hover:text-white hover:border-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search case studies & tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-dark w-full pl-10 pr-4 py-2.5 text-xs rounded-xl"
              />
            </div>
          </div>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.slug}
                  variants={staggerItem}
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="glass-card flex flex-col justify-between border border-white/5 hover:border-primary/20 transition-colors duration-300 p-0 overflow-hidden cursor-pointer"
                >
                  <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                    {/* Visual Card Top Cover */}
                    <div className="h-48 relative overflow-hidden border-b border-white/5 bg-[#0f0a1d]">
                      <img
                        src={`/images/blog/${post.slug}.png`}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                          <span className="text-secondary font-bold">{post.category}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h2 className="font-display text-lg font-black text-white group-hover:text-primary transition-colors leading-snug">
                          {post.title}
                        </h2>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-1.5 text-[10px] text-muted font-bold uppercase tracking-wider">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{post.date}</span>
                        </div>
                        <span className="text-xs font-bold text-white flex items-center gap-1 hover:text-white/80 transition-colors">
                          <span>Read Article</span>
                          <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 space-y-4">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto opacity-30 animate-pulse" />
              <p className="text-sm text-muted-foreground">No articles match your search or filter options.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="btn-glass py-2 px-4 text-xs rounded-lg mt-2"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
