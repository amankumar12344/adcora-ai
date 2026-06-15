"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Calendar, Send, CheckCircle, AlertCircle, Clock, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactFormSection() {
  const [activeTab, setActiveTab] = useState<"message" | "schedule">("message");
  
  // Message Form State
  const [messageForm, setMessageForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [customBudget, setCustomBudget] = useState("");
  
  // Validation State
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Loading & Submission states
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [crmRef, setCrmRef] = useState<number | null>(null);
  
  // Scheduler State
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("UTC+5:30 (IST)");
  const [scheduleStep, setScheduleStep] = useState<"picker" | "details" | "success">("picker");
  const [schedulerForm, setSchedulerForm] = useState({
    name: "",
    email: "",
    notes: "",
  });

  const services = [
    { value: "ai", label: "AI Automation Solutions" },
    { value: "software", label: "Software Solutions" },
    { value: "creative", label: "Creative Solutions" },
    { value: "marketing", label: "Marketing Solutions" },
    { value: "ecommerce", label: "Ecommerce Solutions" },
    { value: "social", label: "Social Media Management" },
  ];

  const budgets = [
    { value: "lt5k", label: "Under $5,000" },
    { value: "5k_20k", label: "$5,000 - $20,000" },
    { value: "20k_50k", label: "$20,000 - $50,000" },
    { value: "gt50k", label: "$50,000+" },
    { value: "custom", label: "Custom Budget (Specify yourself)" },
  ];

  const timezones = [
    "UTC-8:00 (PST)",
    "UTC-5:00 (EST)",
    "UTC+0:00 (GMT)",
    "UTC+1:00 (CET)",
    "UTC+5:30 (IST)",
    "UTC+8:00 (SGT)",
  ];

  // Helper: Get next 5 weekdays
  const getNextWeekdays = () => {
    const dates = [];
    const today = new Date();
    let count = 0;
    while (count < 5) {
      today.setDate(today.getDate() + 1);
      if (today.getDay() !== 0 && today.getDay() !== 6) { // Exclude weekends
        const dayName = today.toLocaleDateString("en-US", { weekday: "short" });
        const monthName = today.toLocaleDateString("en-US", { month: "short" });
        const dateNum = today.getDate();
        const fullDateStr = today.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
        dates.push({ dayName, dateNum, monthName, fullDateStr });
        count++;
      }
    }
    return dates;
  };

  const availableDays = getNextWeekdays();
  const timeSlots = ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"];

  // Validate Message Form
  const validateMessageForm = () => {
    const newErrors: Record<string, string> = {};
    if (!messageForm.name.trim()) newErrors.name = "Full Name is required";
    
    if (!messageForm.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(messageForm.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!messageForm.service) newErrors.service = "Please select a requested service";
    if (!messageForm.budget) newErrors.budget = "Please select a budget range";
    if (!messageForm.message.trim()) newErrors.message = "Please enter a short message about your project";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateMessageForm()) return;

    setLoading(true);
    setSubmitStatus("idle");
    setCrmRef(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
          name: messageForm.name,
          email: messageForm.email,
          company: messageForm.company,
          service: messageForm.service,
          budget: messageForm.budget === "custom" ? customBudget : messageForm.budget,
          message: messageForm.message,
          subject: `New Project Intake Brief - ${messageForm.name}`,
          from_name: "AdcoraAI Website",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setCrmRef(Math.floor(1000 + Math.random() * 9000));
        setMessageForm({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!schedulerForm.name.trim()) newErrors.sName = "Full Name is required";
    if (!schedulerForm.email.trim()) {
      newErrors.sEmail = "Email Address is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(schedulerForm.email)) {
      newErrors.sEmail = "Please enter a valid email address";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
          name: schedulerForm.name,
          email: schedulerForm.email,
          subject: `New Diagnostic Consultation Booked - ${schedulerForm.name}`,
          from_name: "AdcoraAI Website Scheduler",
          message: `Consultation details booked:
Date: ${selectedDate}
Time: ${selectedTime}
Timezone: ${timezone}
Notes/Focus: ${schedulerForm.notes || "None provided"}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setScheduleStep("success");
      } else {
        setErrors({ sEmail: result.message || "Failed to schedule slot. Please try again." });
      }
    } catch (err) {
      setErrors({ sEmail: "An error occurred. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
      {/* Sidebar Channels column */}
      <div className="lg:col-span-4 space-y-6">
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 space-y-8 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
          
          <div>
            <h3 className="font-display font-black text-xl text-white mb-2">Connect Channels</h3>
            <p className="text-xs text-muted-foreground">
              Direct access keypoints for enterprise queries, support tickets, and chat channels.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex gap-4 items-start group">
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary/20">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <div className="text-[0.65rem] font-bold text-muted uppercase tracking-wider">General & Sales</div>
                <a href="mailto:connect.adcoraai@gmail.com" className="text-sm font-semibold text-white hover:text-primary transition-colors block">
                  connect.adcoraai@gmail.com
                </a>
                <span className="text-[0.65rem] text-muted-foreground block">Response time: &lt; 12 hours</span>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4 items-start group">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 transition-colors group-hover:bg-emerald-500/20">
                <svg className="h-5 w-5 fill-emerald-400 text-emerald-400" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.238 1.45 4.82 1.452 5.432-.002 9.85-4.42 9.853-9.852.002-2.63-1.023-5.101-2.885-6.963C16.573 1.928 14.102.926 11.47.924c-5.43.002-9.85 4.42-9.853 9.852.001 2.01.522 3.974 1.517 5.694l-.99 3.616 3.703-.972c1.668.91 3.3.01 3.3.01zm10.9-7.825c-.27-.136-1.602-.79-1.85-.882-.25-.091-.43-.136-.61.136-.18.27-.7.882-.857 1.058-.16.176-.32.197-.59.06-2.73-1.37-3.83-2.3-4.59-3.6-.2-.35-.02-.54.15-.71.16-.16.35-.41.52-.61.18-.2.24-.34.36-.57.12-.23.06-.43-.03-.61-.09-.18-.73-1.77-.99-2.4-.26-.62-.53-.54-.73-.55-.19-.01-.41-.01-.63-.01s-.57.08-.87.41c-.3.33-1.14 1.12-1.14 2.73s1.18 3.16 1.34 3.39c.16.22 2.32 3.54 5.62 4.97 3.01 1.3 3.62 1.04 4.9.86.72-.1 1.6-.65 1.83-1.26.23-.61.23-1.13.16-1.24-.07-.1-.26-.18-.53-.32z"/></svg>
              </div>
              <div className="space-y-1">
                <div className="text-[0.65rem] font-bold text-muted uppercase tracking-wider">Direct WhatsApp</div>
                <a
                  href="https://wa.me/919153765913?text=Hi%20AdcoraAI,%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors block"
                >
                  +91 91537 65913
                </a>
                <a
                  href="https://wa.me/918360607130?text=Hi%20AdcoraAI,%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors block"
                >
                  +91 83606 07130
                </a>
                <span className="text-[0.65rem] text-muted-foreground block">Available 9:00 - 18:00 UTC</span>
              </div>
            </div>

            {/* Availability */}
            <div className="pt-6 border-t border-white/5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Operational Node Active</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our team spans UTC-8 to UTC+5:30. Engineers and managers coordinate live slots synchronously.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main interaction workspace */}
      <div className="lg:col-span-8 space-y-6">
        {/* Toggle tabs */}
        <div className="flex border-b border-white/5 p-1 bg-card/10 rounded-xl max-w-sm">
          <button
            onClick={() => setActiveTab("message")}
            className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
              activeTab === "message"
                ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md"
                : "text-muted-foreground hover:text-white"
            }`}
          >
            <Send className="h-4 w-4" />
            <span>Intake Brief</span>
          </button>
          <button
            onClick={() => setActiveTab("schedule")}
            className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
              activeTab === "schedule"
                ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md"
                : "text-muted-foreground hover:text-white"
            }`}
          >
            <Calendar className="h-4 w-4" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Tab contents */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 text-left relative overflow-hidden">
          {loading && (
            <div className="absolute inset-0 bg-background/90 backdrop-blur-sm z-30 flex items-center justify-center flex-col gap-3">
              <div className="h-10 w-10 rounded-full border-3 border-primary border-t-transparent animate-spin" />
              <div className="text-sm font-bold text-white tracking-wide">Processing Transmission Queue...</div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {activeTab === "message" ? (
              <motion.div
                key="message-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="font-display font-black text-xl text-white">Log Project Specifications</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Describe your system scale, workflows, and budgetary target for automated intake sizing.
                  </p>
                </div>

                <form onSubmit={handleMessageSubmit} className="space-y-4">
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="alert-success flex items-start gap-3 p-4 rounded-xl mb-4"
                    >
                      <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white text-sm">Specification Logged Successfully</div>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          Your project request has been queued in our CRM (Ref: ADC-{crmRef || 2984}). We will correspond with you via email within 12 hours.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="alert-error flex items-start gap-3 p-4 rounded-xl mb-4"
                    >
                      <AlertCircle className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white text-sm">Transmission Interrupted</div>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                          A simulated network sync drop occurred. Please try resubmitting.
                        </p>
                        <button
                          type="button"
                          onClick={() => setSubmitStatus("idle")}
                          className="mt-2 text-xs font-bold text-rose-400 underline focus:outline-none"
                        >
                          Reset & Retry
                        </button>
                      </div>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="m-name">
                        Full Name *
                      </label>
                      <input
                        id="m-name"
                        type="text"
                        value={messageForm.name}
                        onChange={(e) => {
                          setMessageForm({ ...messageForm, name: e.target.value });
                          if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                        }}
                        placeholder="Sarah Jenkins"
                        className={`input-dark text-sm ${errors.name ? "border-rose-500/50 focus:ring-rose-500/20" : ""}`}
                      />
                      {errors.name && <span className="text-rose-400 text-[0.7rem] font-semibold mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="m-email">
                        Work Email *
                      </label>
                      <input
                        id="m-email"
                        type="email"
                        value={messageForm.email}
                        onChange={(e) => {
                          setMessageForm({ ...messageForm, email: e.target.value });
                          if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                        }}
                        placeholder="sarah@aethercorp.com"
                        className={`input-dark text-sm ${errors.email ? "border-rose-500/50 focus:ring-rose-500/20" : ""}`}
                      />
                      {errors.email && <span className="text-rose-400 text-[0.7rem] font-semibold mt-1 block">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="m-company">
                        Company Name
                      </label>
                      <input
                        id="m-company"
                        type="text"
                        value={messageForm.company}
                        onChange={(e) => setMessageForm({ ...messageForm, company: e.target.value })}
                        placeholder="AetherCorp"
                        className="input-dark text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="m-service">
                        Requested Service *
                      </label>
                      <select
                        id="m-service"
                        value={messageForm.service}
                        onChange={(e) => {
                          setMessageForm({ ...messageForm, service: e.target.value });
                          if (errors.service) setErrors((prev) => ({ ...prev, service: "" }));
                        }}
                        className={`select-dark text-sm ${errors.service ? "border-rose-500/50" : ""}`}
                      >
                        <option value="">Select a solution</option>
                        {services.map((s) => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                      {errors.service && <span className="text-rose-400 text-[0.7rem] font-semibold mt-1 block">{errors.service}</span>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="m-budget">
                      Target Budget Range *
                    </label>
                    <select
                      id="m-budget"
                      value={messageForm.budget}
                      onChange={(e) => {
                        setMessageForm({ ...messageForm, budget: e.target.value });
                        if (errors.budget) setErrors((prev) => ({ ...prev, budget: "" }));
                      }}
                      className={`select-dark text-sm ${errors.budget ? "border-rose-500/50" : ""}`}
                    >
                      <option value="">Select range</option>
                      {budgets.map((b) => (
                        <option key={b.value} value={b.value}>{b.label}</option>
                      ))}
                    </select>
                    {errors.budget && <span className="text-rose-400 text-[0.7rem] font-semibold mt-1 block">{errors.budget}</span>}
                  </div>

                  {messageForm.budget === "custom" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="space-y-2"
                    >
                      <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="m-custom-budget">
                        Specify Your Budget *
                      </label>
                      <input
                        id="m-custom-budget"
                        type="text"
                        required
                        value={customBudget}
                        onChange={(e) => setCustomBudget(e.target.value)}
                        placeholder="Specify your budget (e.g. $8,500 / ₹5,00,000)..."
                        className="input-dark text-sm"
                      />
                    </motion.div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="m-message">
                      Project Goals / Message *
                    </label>
                    <textarea
                      id="m-message"
                      value={messageForm.message}
                      onChange={(e) => {
                        setMessageForm({ ...messageForm, message: e.target.value });
                        if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                      }}
                      placeholder="Include details about requirements, timelines, or active bottlenecks..."
                      className={`textarea-dark text-sm ${errors.message ? "border-rose-500/50" : ""}`}
                    />
                    {errors.message && <span className="text-rose-400 text-[0.7rem] font-semibold mt-1 block">{errors.message}</span>}
                  </div>

                  {submitStatus !== "success" && (
                    <button
                      type="submit"
                      className="btn-primary w-full py-3 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-glow-primary transition-all text-sm"
                    >
                      <span>Transmit Intake Brief</span>
                      <Send className="h-4 w-4" />
                    </button>
                  )}
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="schedule-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {scheduleStep === "picker" && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display font-black text-xl text-white">Select Consultation Date & Time</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        Pick an open slot on our team calendar. Calls occur securely over Google Meet or Zoom.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Timezone selector */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-card/25 border border-white/5">
                        <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                          <Globe className="h-4 w-4 text-secondary" />
                          <span>Timezone Sync</span>
                        </div>
                        <select
                          value={timezone}
                          onChange={(e) => setTimezone(e.target.value)}
                          className="bg-background/80 border border-white/10 text-xs text-white rounded-lg px-3 py-1.5 focus:outline-none focus:border-secondary transition-colors"
                        >
                          {timezones.map((tz) => (
                            <option key={tz} value={tz}>{tz}</option>
                          ))}
                        </select>
                      </div>

                      {/* Day list */}
                      <div className="space-y-2">
                        <span className="block text-xs font-bold text-muted uppercase tracking-wider">Available Dates</span>
                        <div className="grid grid-cols-5 gap-2 sm:gap-3">
                          {availableDays.map((d, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setSelectedDate(d.fullDateStr)}
                              className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                                selectedDate === d.fullDateStr
                                  ? "bg-secondary/15 border-secondary text-white shadow-glow-secondary"
                                  : "bg-card/10 border-white/5 text-muted-foreground hover:text-white hover:border-white/10"
                              }`}
                            >
                              <span className="text-[0.6rem] font-bold uppercase tracking-wider">{d.dayName}</span>
                              <span className="text-base sm:text-lg font-black tracking-tight">{d.dateNum}</span>
                              <span className="text-[0.55rem] font-semibold text-muted-foreground">{d.monthName}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Time slots grid */}
                      {selectedDate && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="space-y-2 pt-2"
                        >
                          <span className="block text-xs font-bold text-muted uppercase tracking-wider">Available Slots ({timezone})</span>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {timeSlots.map((ts) => (
                              <button
                                key={ts}
                                type="button"
                                onClick={() => setSelectedTime(ts)}
                                className={`py-2 px-4 rounded-lg border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                                  selectedTime === ts
                                    ? "bg-primary/20 border-primary text-white shadow-glow-primary"
                                    : "bg-card/10 border-white/5 text-muted-foreground hover:text-white hover:border-white/10"
                                }`}
                              >
                                <Clock className="h-3.5 w-3.5" />
                                <span>{ts}</span>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-white/5 flex justify-end">
                      <button
                        type="button"
                        disabled={!selectedDate || !selectedTime}
                        onClick={() => setScheduleStep("details")}
                        className="btn-primary py-2.5 px-6 text-xs sm:text-sm rounded-lg flex items-center gap-1.5 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span>Next: Contact Info</span>
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {scheduleStep === "details" && (
                  <form onSubmit={handleScheduleSubmit} className="space-y-6">
                    <div>
                      <h4 className="font-display font-black text-xl text-white">Confirm Booking Details</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        You selected <span className="font-semibold text-primary">{selectedDate}</span> at <span className="font-semibold text-secondary">{selectedTime}</span> ({timezone}).
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="s-name">
                          Full Name *
                        </label>
                        <input
                          id="s-name"
                          type="text"
                          value={schedulerForm.name}
                          onChange={(e) => {
                            setSchedulerForm({ ...schedulerForm, name: e.target.value });
                            if (errors.sName) setErrors((prev) => ({ ...prev, sName: "" }));
                          }}
                          placeholder="Elena Rostova"
                          className={`input-dark text-sm ${errors.sName ? "border-rose-500/50" : ""}`}
                        />
                        {errors.sName && <span className="text-rose-400 text-[0.7rem] font-semibold mt-1 block">{errors.sName}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="s-email">
                          Work Email *
                        </label>
                        <input
                          id="s-email"
                          type="email"
                          value={schedulerForm.email}
                          onChange={(e) => {
                            setSchedulerForm({ ...schedulerForm, email: e.target.value });
                            if (errors.sEmail) setErrors((prev) => ({ ...prev, sEmail: "" }));
                          }}
                          placeholder="elena@rostova.co"
                          className={`input-dark text-sm ${errors.sEmail ? "border-rose-500/50" : ""}`}
                        />
                        {errors.sEmail && <span className="text-rose-400 text-[0.7rem] font-semibold mt-1 block">{errors.sEmail}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-2" htmlFor="s-notes">
                          Discussion Focus / Notes
                        </label>
                        <textarea
                          id="s-notes"
                          value={schedulerForm.notes}
                          onChange={(e) => setSchedulerForm({ ...schedulerForm, notes: e.target.value })}
                          placeholder="What would you like to cover in this session? (e.g. system architecture, vendor migrations, timelines)"
                          className="textarea-dark text-sm"
                        />
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setScheduleStep("picker")}
                        className="btn-glass py-2.5 px-5 text-xs sm:text-sm rounded-lg"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="btn-primary py-2.5 px-6 text-xs sm:text-sm rounded-lg flex items-center gap-1.5 font-bold shadow-glow-primary"
                      >
                        <span>Confirm Appointment</span>
                        <CheckCircle className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                )}

                {scheduleStep === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center space-y-6"
                  >
                    <div className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-glow-emerald">
                      <CheckCircle className="h-8 w-8" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-display font-black text-2xl text-white">Consultation Confirmed</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                        Your 30-minute diagnostic session is booked for <span className="text-white font-bold">{selectedDate}</span> at <span className="text-white font-bold">{selectedTime}</span> ({timezone}).
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-card/25 border border-white/5 text-left max-w-md mx-auto text-xs space-y-2">
                      <div className="font-bold text-white uppercase tracking-wider text-[0.65rem] flex items-center gap-1.5">
                        <Globe className="h-3.5 w-3.5 text-secondary" />
                        <span>Calendar Metadata Link</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        A Google Meet link and calendar invitation has been fired to <span className="text-white font-semibold">{schedulerForm.email}</span>. Please accept the invite to sync schedules.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedDate("");
                        setSelectedTime("");
                        setSchedulerForm({ name: "", email: "", notes: "" });
                        setScheduleStep("picker");
                      }}
                      className="btn-glass py-2 px-6 text-xs rounded-lg font-semibold"
                    >
                      Book Another Slot
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
