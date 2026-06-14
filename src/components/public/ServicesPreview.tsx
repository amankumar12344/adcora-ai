"use client";

import React from "react";
import Link from "next/link";
import { Bot, Paintbrush, Megaphone, Code, ShoppingCart, Share2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    title: "AI Automation Solutions",
    desc: "Integrate intelligent LLM agents, automate routine customer operations, and build RAG custom databases.",
    icon: <Bot className="h-6 w-6 text-primary" />,
    borderHover: "hover:border-primary/40",
    glowColor: "rgba(139,92,246,0.08)",
    iconBg: "bg-primary/10",
  },
  {
    title: "Creative Solutions",
    desc: "Immersive UI/UX product designs, wireframing, WebGL components, and premium responsive design systems.",
    icon: <Paintbrush className="h-6 w-6 text-secondary" />,
    borderHover: "hover:border-secondary/40",
    glowColor: "rgba(14,165,233,0.08)",
    iconBg: "bg-secondary/10",
  },
  {
    title: "Marketing Solutions",
    desc: "Data-driven growth strategies, SEO audit checklists, structured campaign operations, and high-conversion funnels.",
    icon: <Megaphone className="h-6 w-6 text-accent" />,
    borderHover: "hover:border-accent/40",
    glowColor: "rgba(167,92,246,0.08)",
    iconBg: "bg-accent/10",
  },
  {
    title: "Software Solutions",
    desc: "Full-stack application engineering, cloud database setups, API bridges, and high-performance server logic.",
    icon: <Code className="h-6 w-6 text-success" />,
    borderHover: "hover:border-success/40",
    glowColor: "rgba(16,185,129,0.08)",
    iconBg: "bg-success/10",
  },
  {
    title: "Ecommerce Solutions",
    desc: "Premium online storefront delivery, optimized checkouts, inventory synchronization webhooks, and analytics sync.",
    icon: <ShoppingCart className="h-6 w-6 text-info" />,
    borderHover: "hover:border-info/40",
    glowColor: "rgba(99,102,241,0.08)",
    iconBg: "bg-info/10",
  },
  {
    title: "Social Media Management",
    desc: "Automated content scheduling calendars, graphic brand designs, audience tracking, and campaign performance reviews.",
    icon: <Share2 className="h-6 w-6 text-primary" />,
    borderHover: "hover:border-primary/40",
    glowColor: "rgba(139,92,246,0.08)",
    iconBg: "bg-primary/10",
  },
];

export default function ServicesPreview() {
  return (
    <section id="services" className="section-padding relative z-10">
      <div className="page-container space-y-12">

        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto space-y-4">
          <div className="badge-primary">Services Catalogue</div>
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white">
            Core Technology Divisions
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            From intelligence integrations to product launches, we provide the complete digital pipeline required to scale your business.
          </p>
        </ScrollReveal>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{
                y: -6,
                scale: 1.01,
                boxShadow: `0 20px 40px -10px ${service.glowColor}, 0 0 0 1px rgba(255,255,255,0.08)`,
              }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={`glass-card flex flex-col justify-between border border-white/5 ${service.borderHover} transition-colors duration-300 cursor-default`}
            >
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className={`h-12 w-12 rounded-xl ${service.iconBg} border border-white/10 flex items-center justify-center shadow-glass`}
                >
                  {service.icon}
                </motion.div>
                <h3 className="font-display text-lg font-bold text-white">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5">
                <Link
                  href="/services"
                  className="text-xs font-semibold text-white/90 hover:text-white flex items-center gap-1 group w-fit"
                >
                  <span>Explore Features</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
