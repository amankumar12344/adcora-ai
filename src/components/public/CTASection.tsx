"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { viewportOnce } from "@/lib/animations";

export default function CTASection() {
  return (
    <section className="section-padding relative z-10 overflow-hidden">
      {/* Decorative gradient overlay */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-primary/10 blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[100px] pointer-events-none"
      />

      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="relative glass-panel p-8 md:p-16 rounded-3xl border border-white/10 text-center overflow-hidden"
        >
          {/* Animated grid background */}
          <motion.div
            animate={{ opacity: [0.02, 0.05, 0.02] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
          />

          {/* Pulsing glow ring around the panel */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(139,92,246,0.0)",
                "0 0 60px 20px rgba(139,92,246,0.08)",
                "0 0 0 0 rgba(139,92,246,0.0)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-3xl pointer-events-none"
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-secondary uppercase tracking-widest font-display"
            >
              <Sparkles className="h-3 w-3 animate-spin" style={{ animationDuration: "3s" }} />
              <span>Diagnostic Consultation</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight"
            >
              Ready to Automate & <br />
              <span className="gradient-text">Scale Your Operations?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm sm:text-base text-muted max-w-lg mx-auto leading-relaxed"
            >
              Schedule a diagnostic engineering session with our technical team today to audit your current system bottlenecks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-4 flex justify-center"
            >
              <MagneticButton strength={0.3}>
                <Link
                  href="/contact"
                  className="btn-primary py-3.5 px-8 text-sm rounded-lg flex items-center justify-center gap-2 shadow-glow-primary group relative overflow-hidden"
                >
                  {/* Button shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <span className="relative">Book Free Consultation</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 relative" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
