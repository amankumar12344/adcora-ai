"use client";

import React from "react";
import { Sparkles, Code, Cpu, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

// Tech items duplicated for seamless infinite marquee
const technologies = [
  {
    name: "Next.js",
    desc: "App Router & SSR",
    icon: (
      <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.066 12.871l-2.616-3.48v3.48H9.366V9.129h1.084l2.616 3.48V9.129h1.084v5.742h-1.084z" />
      </svg>
    ),
  },
  {
    name: "React",
    desc: "Component Architecture",
    icon: (
      <svg className="h-5 w-5 fill-cyan-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="2" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#22d3ee" strokeWidth="1.5" fill="none" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#22d3ee" strokeWidth="1.5" fill="none" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#22d3ee" strokeWidth="1.5" fill="none" transform="rotate(150 12 12)" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    desc: "Strict Code Safety",
    icon: <span className="text-xs font-bold text-sky-400">TS</span>,
  },
  {
    name: "Tailwind CSS",
    desc: "Design Token Utility",
    icon: (
      <svg className="h-5 w-5 fill-cyan-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3v18M3 12h18M12 3L3 12l9 9 9-9-9-9z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    desc: "Postgres & Realtime",
    icon: (
      <svg className="h-5 w-5 fill-[#3ecf8e]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 12h7v8l10-10h-7V2z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    desc: "Relational Storage",
    icon: (
      <svg className="h-5 w-5 fill-sky-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2zm1 14.5h-2v-2h2v2zm0-3.5h-2V7h2v6z" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    desc: "Subscription APIs",
    icon: <span className="text-xs font-bold text-[#635bff]">S</span>,
  },
  {
    name: "OpenAI",
    desc: "LLMs & Agent Routing",
    icon: (
      <svg className="h-5 w-5 fill-emerald-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14h-2v-2h2zm0-4h-2V7h2z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    desc: "Edge CDN Hosting",
    icon: (
      <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 22h20L12 2z" />
      </svg>
    ),
  },
];

// Duplicate for seamless loop
const marqueeItems = [...technologies, ...technologies];

export default function TrustedBy() {
  return (
    <section className="py-16 border-y border-white/5 bg-card/10 relative z-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="page-container space-y-10">

        {/* Title Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center space-y-2 max-w-2xl mx-auto"
        >
          <motion.div variants={staggerItem} className="badge-primary inline-flex items-center gap-1 mx-auto scale-90">
            <Sparkles className="h-3 w-3" />
            <span>Modern Stack</span>
          </motion.div>
          <motion.h3 variants={staggerItem} className="font-display font-black text-xl sm:text-2xl text-white tracking-tight uppercase">
            Technology Ecosystem
          </motion.h3>
          <motion.p variants={staggerItem} className="text-xs sm:text-sm text-muted-foreground">
            We build enterprise solutions leveraging high-performance frameworks, serverless edge hosting, and modern databases.
          </motion.p>
        </motion.div>

        {/* Infinite Marquee */}
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07050f] to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07050f] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {marqueeItems.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.06, borderColor: "rgba(255,255,255,0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center border border-white/5 cursor-default text-center min-h-[96px] w-[110px] shrink-0 transition-colors"
              >
                <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-2 shrink-0">
                  {tech.icon}
                </div>
                <span className="font-display font-bold text-xs text-white/80 block leading-tight">
                  {tech.name}
                </span>
                <span className="text-[0.55rem] text-muted-foreground/60 font-semibold block leading-tight mt-0.5">
                  {tech.desc.split(" ")[0]}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technical standards trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 border-t border-white/5 text-xs text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-secondary" />
            <span>Secure Source Code Boundaries</span>
          </div>
          <span className="hidden sm:inline text-white/10">|</span>
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-primary" />
            <span>Decoupled API Architectures</span>
          </div>
          <span className="hidden sm:inline text-white/10">|</span>
          <div className="flex items-center gap-2">
            <Code className="h-4 w-4 text-accent" />
            <span>Strict Type Verification</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
