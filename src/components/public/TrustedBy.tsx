"use client";

import React from "react";
import { Sparkles, Code, Cpu, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

// Integration partners list with custom brands included
const integrations = [
  {
    name: "AWS",
    desc: "Cloud Systems",
    icon: (
      <div className="flex flex-col items-center">
        <span className="text-[11px] font-black text-amber-500 font-sans tracking-tighter">aws</span>
        <svg className="h-1.5 w-6 text-amber-500 -mt-0.5" viewBox="0 0 24 8" fill="currentColor">
          <path d="M0 0c6 4 18 4 24 0-4 4-20 4-24 0z" />
        </svg>
      </div>
    ),
  },
  {
    name: "Google Cloud",
    desc: "Cloud Compute",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
      </svg>
    ),
  },
  {
    name: "Sabre",
    desc: "GDS Systems",
    icon: <span className="text-xs font-black text-[#E31937] italic font-sans tracking-tight">Sabre</span>,
  },
  {
    name: "Amadeus",
    desc: "Travel API",
    icon: <span className="text-[10px] font-bold text-[#005A9C] font-mono tracking-wider">aMAdEUS</span>,
  },
  {
    name: "OpenAI",
    desc: "Cognitive Models",
    icon: (
      <svg className="h-5 w-5 fill-emerald-400" viewBox="0 0 24 24">
        <path d="M21.7 11.2a4.8 4.8 0 0 0-.8-3.4 5 5 0 0 0-3-2c-.4-.1-.9-.1-1.3-.1a5 5 0 0 0-4.3 2.5 5 5 0 0 0-4.3-2.5 4.8 4.8 0 0 0-2.1.5c-.3.2-.6.4-.8.7a4.9 4.9 0 0 0-.9 4.3 5 5 0 0 0-2.5 4.3 4.8 4.8 0 0 0 .5 2.1 4.9 4.9 0 0 0 5 3c.3 0 .7 0 1-.1a5 5 0 0 0 4.3-2.5 5 5 0 0 0 4.3 2.5 4.8 4.8 0 0 0 2.1-.5c.3-.2.6-.4.8-.7a4.9 4.9 0 0 0 .9-4.3 5 5 0 0 0 2.5-4.3c0-.8-.2-1.5-.5-2.1zM12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
      </svg>
    ),
  },
  {
    name: "Shopify",
    desc: "Headless Commerce",
    icon: (
      <svg className="h-5 w-5 fill-emerald-500" viewBox="0 0 24 24">
        <path d="M19 6.5h-3v-1A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5v1H5c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-11c0-1.1-.9-2-2-2zM9.5 5.5c0-.8.7-1.5 1.5-1.5h3c.8 0 1.5.7 1.5 1.5v1h-6v-1z" />
      </svg>
    ),
  },
  {
    name: "Travelport",
    desc: "GDS Platform",
    icon: <span className="text-[10px] font-bold text-sky-400 font-sans tracking-wide">Travelport</span>,
  },
  {
    name: "Stripe",
    desc: "Payment Engine",
    icon: <span className="text-xs font-black text-[#635bff] font-sans italic tracking-tighter">stripe</span>,
  },
  {
    name: "Meena Bazar",
    desc: "Fashion Retail",
    icon: <span className="text-[10px] font-extrabold text-[#D4AF37] font-serif tracking-widest uppercase">Meena Bazar</span>,
  },
  {
    name: "Skinovate",
    desc: "Derma Cosmetics",
    icon: <span className="text-[10px] font-black text-rose-400 font-sans tracking-tight uppercase">skinovate</span>,
  },
  {
    name: "Mitchell USA",
    desc: "Skincare TM",
    icon: <span className="text-[9px] font-extrabold text-blue-400 font-mono tracking-tighter uppercase">Mitchell USA</span>,
  },
];

// Duplicate for seamless loop marquee
const marqueeItems = [...integrations, ...integrations];

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
            <span>Integrations</span>
          </motion.div>
          <motion.h3 variants={staggerItem} className="font-display font-black text-xl sm:text-2xl text-white tracking-tight uppercase">
            Integrated With Industry Leaders
          </motion.h3>
          <motion.p variants={staggerItem} className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Our solutions work seamlessly with globally trusted platforms like AWS, Google Cloud, Sabre, and Amadeus — ensuring performance, scalability, and interoperability.
          </motion.p>
        </motion.div>

        {/* Infinite Marquee */}
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07050f] to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07050f] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex gap-4 w-max">
            {marqueeItems.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.06, borderColor: "rgba(255,255,255,0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center border border-white/5 cursor-default text-center min-h-[96px] w-[130px] shrink-0 transition-colors"
              >
                <div className="h-8 w-16 bg-white/5 border border-white/5 flex items-center justify-center mb-2 shrink-0 rounded-lg">
                  {tech.icon}
                </div>
                <span className="font-display font-bold text-xs text-white/80 block leading-tight">
                  {tech.name}
                </span>
                <span className="text-[0.55rem] text-muted-foreground/60 font-semibold block leading-tight mt-0.5">
                  {tech.desc}
                </span>
              </motion.div>
            ))}
          </div>
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
            <span>Seamless API Connectivity</span>
          </div>
          <span className="hidden sm:inline text-white/10">|</span>
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-primary" />
            <span>High-Performance Webhooks</span>
          </div>
          <span className="hidden sm:inline text-white/10">|</span>
          <div className="flex items-center gap-2">
            <Code className="h-4 w-4 text-accent" />
            <span>Enterprise-Grade SLA</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
