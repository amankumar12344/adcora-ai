"use client";

import React from "react";
import { Shield, Zap, RefreshCw, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import ScrollReveal from "@/components/ui/ScrollReveal";

const cards = [
  {
    title: "Enterprise Security Built-In",
    desc: "We enforce strict Row-Level Security (RLS) policies on PostgreSQL, sanitize data models against SQL injection, and route user media uploads via secure, pre-signed tokens.",
    icon: Shield,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    borderHover: "hover:border-primary/30",
    direction: "right" as const,
  },
  {
    title: "Engineered for 90+ Vitals",
    desc: "Our products target Lighthouse scores above 90. By compiling via Next.js App Router and lazy loading images dynamically, we minimize page load times to under 1.2s.",
    icon: Zap,
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    borderHover: "hover:border-secondary/30",
    direction: "left" as const,
  },
  {
    title: "Omnichannel Integrations",
    desc: "Bridge website user interactions directly to WhatsApp API webhooks, sync subscription billing templates dynamically with Stripe, and connect operational streams to Slack/Discord.",
    icon: RefreshCw,
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    borderHover: "hover:border-accent/30",
    direction: "right" as const,
  },
  {
    title: "Scalable Architecture",
    desc: "We design codebases using decoupled component patterns, clean folder architectures, and robust TypeScript declarations to ensure your codebase easily scales for future features.",
    icon: Layers,
    iconColor: "text-success",
    iconBg: "bg-success/10",
    borderHover: "hover:border-success/30",
    direction: "left" as const,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding border-t border-white/5 bg-card/5 relative z-10">
      <div className="page-container space-y-12">

        {/* Header */}
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto space-y-4">
          <div className="badge-accent">Why Choose Us</div>
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white">
            Designed for Performance & Scale
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            We bypass generic boilerplates. Our systems are custom engineered to handle high-frequency workflows, payments, and integrations.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {cards.map((card, i) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`glass-panel p-8 rounded-xl flex gap-6 items-start border border-white/5 ${card.borderHover} transition-colors duration-300 cursor-default group`}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className={`h-12 w-12 rounded-xl ${card.iconBg} border border-white/10 flex items-center justify-center shrink-0 shadow-glass`}
                >
                  <IconComponent className={`h-6 w-6 ${card.iconColor}`} />
                </motion.div>
                <div className="space-y-2 text-left">
                  <h3 className="font-display font-bold text-white text-lg group-hover:text-white/95 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
