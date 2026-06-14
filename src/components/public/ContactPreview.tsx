"use client";

import React, { useState } from "react";
import { MessageSquare, Mail, Calendar, Send } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactPreview() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email) {
      setSubmitted(true);
      setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" });
    }
  };

  return (
    <section id="contact-preview" className="section-padding border-t border-white/5 bg-card/5 relative z-10">
      <div className="page-container space-y-12">
        
        {/* Header */}
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto space-y-4">
          <div className="badge-primary">Get in Touch</div>
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white">
            Initiate Your Project Scopes
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Send us a message or schedule a direct channel call to discuss how our software solutions align with your objectives.
          </p>
        </ScrollReveal>

        {/* Form & Info Dual Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Card Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 space-y-8 text-left">
              <h3 className="font-display font-black text-lg text-white">Contact Channels</h3>
              
              <div className="space-y-6">
                {/* Channel: Email */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex gap-4 items-start p-3 rounded-xl hover:bg-white/[0.02] transition-all cursor-default"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[0.65rem] font-bold text-muted uppercase tracking-wider">General & Sales Queries</div>
                    <a href="mailto:connect.adcoraai@gmail.com" className="text-sm font-semibold text-white hover:underline">
                      connect.adcoraai@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Channel: WhatsApp */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex gap-4 items-start p-3 rounded-xl hover:bg-white/[0.02] transition-all cursor-default"
                >
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <svg className="h-5 w-5 fill-emerald-400 text-emerald-400" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.238 1.45 4.82 1.452 5.432-.002 9.85-4.42 9.853-9.852.002-2.63-1.023-5.101-2.885-6.963C16.573 1.928 14.102.926 11.47.924c-5.43.002-9.85 4.42-9.853 9.852.001 2.01.522 3.974 1.517 5.694l-.99 3.616 3.703-.972c1.668.91 3.3.01 3.3.01zm10.9-7.825c-.27-.136-1.602-.79-1.85-.882-.25-.091-.43-.136-.61.136-.18.27-.7.882-.857 1.058-.16.176-.32.197-.59.06-2.73-1.37-3.83-2.3-4.59-3.6-.2-.35-.02-.54.15-.71.16-.16.35-.41.52-.61.18-.2.24-.34.36-.57.12-.23.06-.43-.03-.61-.09-.18-.73-1.77-.99-2.4-.26-.62-.53-.54-.73-.55-.19-.01-.41-.01-.63-.01s-.57.08-.87.41c-.3.33-1.14 1.12-1.14 2.73s1.18 3.16 1.34 3.39c.16.22 2.32 3.54 5.62 4.97 3.01 1.3 3.62 1.04 4.9.86.72-.1 1.6-.65 1.83-1.26.23-.61.23-1.13.16-1.24-.07-.1-.26-.18-.53-.32z"/></svg>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[0.65rem] font-bold text-muted uppercase tracking-wider">Direct Message (WhatsApp)</div>
                    <a
                      href="https://wa.me/919153765913?text=Hi%20AdcoraAI,%20I'd%20like%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-emerald-400 hover:underline flex items-center gap-1.5"
                    >
                      <span>+91 91537 65913</span>
                    </a>
                  </div>
                </motion.div>

                {/* Channel: Booking */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex gap-4 items-start p-3 rounded-xl hover:bg-white/[0.02] transition-all cursor-default"
                >
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[0.65rem] font-bold text-muted uppercase tracking-wider">Diagnostic Consultation</div>
                    <a href="/contact" className="text-sm font-semibold text-secondary hover:underline">
                      Schedule 30-min slot
                    </a>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Sarah Jenkins"
                      className="input-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="email">
                      Work Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="sarah@company.com"
                      className="input-dark"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="company">
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="AetherCorp"
                      className="input-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="service">
                      Requested Service
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="select-dark"
                    >
                      <option value="">Select a solution</option>
                      <option value="ai">AI Automation Solutions</option>
                      <option value="software">Software Solutions</option>
                      <option value="creative">Creative Solutions</option>
                      <option value="marketing">Marketing Solutions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="budget">
                    Target Budget Range
                  </label>
                  <select
                    id="budget"
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="select-dark"
                  >
                    <option value="">Select budget range</option>
                    <option value="lt5k">Under $5,000</option>
                    <option value="5k_20k">$5,000 - $20,000</option>
                    <option value="20k_50k">$20,000 - $50,000</option>
                    <option value="gt50k">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="message">
                    Project Goals / Message
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Briefly describe your objectives or automation needs..."
                    className="textarea-dark"
                  />
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="alert-success font-semibold"
                  >
                    ✓ Thank you! Your intake details have been logged. A representative will contact you within 24 hours.
                  </motion.div>
                ) : (
                  <motion.button
                    type="submit"
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="btn-primary w-full py-3 rounded-lg flex items-center justify-center gap-2 font-semibold shadow-glow-primary cursor-pointer"
                  >
                    <span>Send Intake Message</span>
                    <Send className="h-4 w-4" />
                  </motion.button>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
