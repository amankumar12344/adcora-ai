"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the average timeline for an AI Automation integration?",
      a: "For scoped chatbot systems and workflow integrations, average deployment is 2-4 weeks. Enterprise-scale LLM training and custom RAG model tuning timelines vary from 6-12 weeks depending on metadata volume.",
    },
    {
      q: "Do you support legacy database systems or on-premise servers?",
      a: "Yes. While we default to Supabase PostgreSQL, we build custom API gateways and RPC middleware to query legacy databases including MSSQL, Oracle, and MongoDB.",
    },
    {
      q: "How do you handle compliance and secure client files?",
      a: "We implement strict Row-Level Security (RLS) policies on Supabase. Uploaded sensitive materials (like resumes) are routed into private storage buckets, accessible only via authenticated admin pre-signed tokens.",
    },
    {
      q: "What payment structures can be configured in your custom software integrations?",
      a: "We fully integrate Stripe, supporting recurring subscription cycles, metered usage-based billing, discount vouchers, and automated checkout webhooks.",
    },
    {
      q: "Can we manually take over active AI Chatbot conversations?",
      a: "Yes. The Admin Dashboard features a manual takeover trigger. Toggling it temporarily pauses the AI model and routes messages to staff.",
    },
  ];

  return (
    <section className="page-container space-y-12 mb-28 border-t border-white/5 pt-24">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="badge-primary">Support FAQ</div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
        <p className="text-sm text-muted">Answers to common onboarding technical questions regarding our software integrations.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-xl border border-white/5 overflow-hidden transition-colors"
          >
            <button
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
              aria-expanded={activeIndex === idx}
            >
              <div className="flex items-center gap-3 text-white font-semibold text-sm sm:text-base">
                <HelpCircle className="h-5 w-5 text-secondary shrink-0" />
                <span>{faq.q}</span>
              </div>
              <ChevronDown
                className={`h-4 w-4 text-muted-foreground transition-transform duration-200 shrink-0 ${
                  activeIndex === idx ? "rotate-180 text-white" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === idx && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 pt-1 border-t border-white/5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
