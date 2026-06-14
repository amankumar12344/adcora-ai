"use client";

import React from "react";
import { Server, Layout, BrainCircuit, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function TechStack() {
  const stackGroups = [
    {
      title: "AI & Intelligence",
      icon: <BrainCircuit className="h-5 w-5 text-primary" />,
      items: ["OpenAI GPT Models", "PyTorch Framework", "LangChain & RAG Vectors", "Hugging Face Models"],
    },
    {
      title: "Frontend & Interface",
      icon: <Layout className="h-5 w-5 text-secondary" />,
      items: ["Next.js (App Router)", "React 19 Core", "Tailwind CSS v4", "Framer Motion Physics"],
    },
    {
      title: "Cloud & Database",
      icon: <Server className="h-5 w-5 text-success" />,
      items: ["Supabase Client", "PostgreSQL Relational DB", "Vercel Edge Network", "Docker Containers"],
    },
    {
      title: "Payments & Integrations",
      icon: <CreditCard className="h-5 w-5 text-warning" />,
      items: ["Stripe Checkout API", "Meta WhatsApp Cloud API", "Custom Webhooks Systems", "SendGrid Email Relay"],
    },
  ];

  return (
    <section className="page-container space-y-12 mb-28 border-t border-white/5 pt-24">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="badge-accent">Technology Stack</div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Our Technology Stack</h2>
        <p className="text-sm text-muted">We construct systems utilizing only modern, high-performance, and secure frameworks.</p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stackGroups.map((group, idx) => (
          <motion.div
            key={idx}
            variants={staggerItem}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass-panel p-6 rounded-xl border border-white/5 space-y-4 text-left cursor-default"
          >
            <div className="flex items-center gap-2 text-white font-bold font-display text-sm sm:text-base">
              <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                {group.icon}
              </div>
              <span>{group.title}</span>
            </div>
            
            <ul className="space-y-2.5">
              {group.items.map((item, itemIdx) => (
                <li key={itemIdx} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
