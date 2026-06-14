"use client";

import React, { useState } from "react";
import { MapPin, DollarSign, Upload, Send, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export default function CareersWorkspace() {
  const [activeJobIdx, setActiveJobIdx] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    resume: "",
    coverLetter: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const perks = [
    { title: "Distributed & Remote Work", desc: "We support asynchronous operations, letting you build from any location." },
    { title: "Learning & Research Budgets", desc: "Get $3k/year to attend tech conferences, buy books, or enroll in AI audits." },
    { title: "Cutting-edge Systems Hardware", desc: "We fully equip your setup with custom M-series MacBooks or Giga-GPU systems." },
    { title: "Health & Care Coverage", desc: "Full premium dental, vision, and mental health assistance packages." },
  ];

  const jobs = [
    {
      title: "Senior AI Automation Engineer",
      dept: "Intelligence Systems",
      loc: "Remote (Global)",
      sal: "$130k - $160k",
      type: "Full-Time",
      desc: "Architect LLM workflow pipelines, optimize RAG indices for multi-carrier database syncs, and align agent frameworks.",
      reqs: ["4+ years production experience with Python/TypeScript", "Deep understanding of LangChain, vector DBs (pgvector, Pinecone)", "Proven experience building and scaling API servers"],
    },
    {
      title: "Full-Stack Next.js Developer",
      dept: "Software Engineering",
      loc: "Hybrid (Delhi NCR)",
      sal: "$100k - $130k",
      type: "Full-Time",
      desc: "Implement fast, responsive frontends in Next.js (App Router), manage Supabase PostgreSQL database schemas, and coordinate payments webhooks.",
      reqs: ["3+ years coding full-stack React / Next.js", "Mastery of Tailwind CSS v4, dynamic styling, and Framer Motion", "Solid SQL/Postgres relational database optimization"],
    },
    {
      title: "Lead UI/UX Product Strategist",
      dept: "Creative Studio",
      loc: "Remote (Global)",
      sal: "$90k - $120k",
      type: "Full-Time",
      desc: "Design UI/UX component libraries in Figma, model interactive mockups, and help translate complex operational specs into clean user workflows.",
      reqs: ["4+ years designing premium SaaS products", "Deep knowledge of accessibility (WCAG AA), layouts, and tokens", "Familiarity with React component structures is a major plus"],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.position) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setForm({ name: "", email: "", position: "", resume: "", coverLetter: "" });
      }, 1500);
    }
  };

  return (
    <div className="space-y-28">
      
      {/* 1. Benefits Grid */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="badge-primary">Benefits & Culture</div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Why Work with AdcoraAI</h2>
          <p className="text-sm text-muted">We build a culture of high operational freedom, strict quality focus, and technology growth.</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {perks.map((p, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-panel p-6 rounded-xl border border-white/5 text-left space-y-2 cursor-default"
            >
              <h4 className="font-display font-bold text-white text-base">{p.title}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 2. Hiring Process */}
      <section className="space-y-12 border-t border-white/5 pt-20">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="badge-secondary">Hiring Pipeline</div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Our 4-Stage Interview Process</h2>
          <p className="text-sm text-muted font-sans">We value transparent feedback and engineering execution. No whiteboard trivia.</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { num: "01", name: "PRD Intake Scoping", detail: "A 30-min conversation with our lead strategist to scope your background and values." },
            { num: "02", name: "Technical Challenge", detail: "A practical build home task (fully paid if completed) recreating a small API bridge." },
            { num: "03", name: "System Design", detail: "A live collaborative session to map Postgres RLS rules and Next.js structures." },
            { num: "04", name: "Offer & Align", detail: "Finalizing agreement, gear specifications, and scheduling your onboarding cycle." },
          ].map((stage, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-panel p-6 rounded-xl border border-white/5 text-left cursor-default"
            >
              <div className="font-display text-3xl font-black text-secondary/30 mb-3">{stage.num}</div>
              <h3 className="font-display font-bold text-white text-sm sm:text-base mb-1">{stage.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{stage.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Open Positions Accordion */}
      <section id="positions" className="space-y-12 border-t border-white/5 pt-20">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="badge-primary">Open Roles</div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Current Opportunities</h2>
          <p className="text-sm text-muted">Join our global team. Apply directly using the secure intake form below.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {jobs.map((job, idx) => (
            <div key={idx} className="glass-panel rounded-xl border border-white/5 overflow-hidden text-left">
              <motion.button
                onClick={() => setActiveJobIdx(activeJobIdx === idx ? null : idx)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 focus:outline-none text-left cursor-pointer"
                aria-expanded={activeJobIdx === idx}
              >
                <div className="space-y-1">
                  <span className="text-[0.65rem] font-bold text-secondary tracking-widest uppercase block">
                    {job.dept}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white">{job.title}</h3>
                </div>
                
                <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {job.loc}</span>
                  <span className="flex items-center gap-1"><DollarSign className="h-3.5 w-3.5" /> {job.sal}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeJobIdx === idx ? "rotate-180 text-white" : ""}`} />
                </div>
              </motion.button>

              <AnimatePresence initial={false}>
                {activeJobIdx === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-5 pt-1 border-t border-white/5 space-y-4 text-xs sm:text-sm">
                      <p className="text-muted-foreground leading-relaxed">{job.desc}</p>
                      
                      <div className="space-y-2">
                        <span className="font-bold text-white block">Key Requirements:</span>
                        <ul className="space-y-1 text-muted-foreground">
                          {job.reqs.map((req, rIdx) => (
                            <li key={rIdx} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 bg-secondary rounded-full" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <motion.button
                          onClick={() => {
                            setForm((prev) => ({ ...prev, position: job.title }));
                            const element = document.getElementById("apply-form");
                            element?.scrollIntoView({ behavior: "smooth" });
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-primary py-2 px-4 text-xs rounded-lg cursor-pointer"
                        >
                          Apply for this role
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Application Form */}
      <section id="apply-form" className="max-w-xl mx-auto space-y-8 border-t border-white/5 pt-20">
        <div className="text-center space-y-4">
          <div className="badge-secondary">Job Application</div>
          <h2 className="font-display text-2xl font-bold text-white">Direct Application Intake</h2>
          <p className="text-sm text-muted">Submit your application details below. We verify files securely.</p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 text-left relative overflow-hidden">
          {loading && (
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-20 flex items-center justify-center flex-col gap-3">
              <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
              <div className="text-xs font-semibold text-white">Uploading Resume & Submitting...</div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Elena Rostova"
                className="input-dark text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="elena@company.com"
                className="input-dark text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="position">
                Target Role
              </label>
              <select
                id="position"
                required
                value={form.position}
                onChange={(e) => setForm({ ...form, position: e.target.value })}
                className="select-dark text-sm"
              >
                <option value="">Select an open position</option>
                <option value="Senior AI Automation Engineer">Senior AI Automation Engineer</option>
                <option value="Full-Stack Next.js Developer">Full-Stack Next.js Developer</option>
                <option value="Lead UI/UX Product Strategist">Lead UI/UX Product Strategist</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="resume">
                Resume/CV PDF Link (Secure Sync)
              </label>
              <div className="relative">
                <input
                  id="resume"
                  type="text"
                  required
                  value={form.resume}
                  onChange={(e) => setForm({ ...form, resume: e.target.value })}
                  placeholder="https://drive.google.com/... or pdf url"
                  className="input-dark text-sm pl-10"
                />
                <Upload className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="cover">
                Brief Introduction / Cover Note
              </label>
              <textarea
                id="cover"
                value={form.coverLetter}
                onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
                placeholder="Tell us briefly why you want to build the future with AdcoraAI..."
                className="textarea-dark text-sm"
              />
            </div>

            {success ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="alert-success font-semibold"
              >
                ✓ Application submitted! Our recruiting team will review your CV and respond within 3 business days.
              </motion.div>
            ) : (
              <motion.button
                type="submit"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="btn-primary w-full py-3 rounded-lg flex items-center justify-center gap-2 font-semibold shadow-glow-primary cursor-pointer"
              >
                <span>Submit Job Application</span>
                <Send className="h-4 w-4" />
              </motion.button>
            )}

          </form>
        </div>
      </section>

    </div>
  );
}
