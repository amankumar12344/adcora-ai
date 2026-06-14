"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Cpu,
  Code,
  ShoppingCart,
  Megaphone,
  Paintbrush,
  Share2,
  Zap,
  Activity,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingParticles from "@/components/ui/FloatingParticles";
import MagneticButton from "@/components/ui/MagneticButton";
import TypingText from "@/components/ui/TypingText";
import { useCountUp } from "@/hooks/useCountUp";
import { staggerContainer, staggerItem } from "@/lib/animations";

// Stat Counter subcomponent
function StatCounter({
  end,
  suffix,
  prefix,
  label,
  decimals = 0,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}) {
  const { formatted, ref } = useCountUp({ end, suffix, prefix, decimals, duration: 2200 });
  return (
    <div className="space-y-1">
      <span ref={ref} className="font-display text-2xl sm:text-3xl font-black text-white block">
        {formatted}
      </span>
      <div className="text-[0.65rem] sm:text-xs text-muted-foreground font-bold tracking-wider uppercase">
        {label}
      </div>
    </div>
  );
}

// 7 Service Nodes data with icons and real-time metadata specifications
const serviceNodes = [
  {
    name: "AI Automation",
    icon: <Bot className="h-5 w-5" />,
    color: "from-purple-500 to-indigo-600",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.3)] border-purple-500/20",
    details: { model: "Custom LLMs / RAG", latency: "42ms", reliability: "99.98%" },
  },
  {
    name: "Software Solutions",
    icon: <Code className="h-5 w-5" />,
    color: "from-emerald-500 to-teal-600",
    glow: "shadow-[0_0_20px_rgba(16,185,129,0.3)] border-emerald-500/20",
    details: { stack: "Next.js / Supabase", latency: "14ms", status: "Optimal" },
  },
  {
    name: "Ecommerce",
    icon: <ShoppingCart className="h-5 w-5" />,
    color: "from-cyan-500 to-blue-600",
    glow: "shadow-[0_0_20px_rgba(6,182,212,0.3)] border-cyan-500/20",
    details: { type: "Headless GraphQL", loadTime: "1.1s", checkoutSync: "Realtime" },
  },
  {
    name: "Marketing",
    icon: <Megaphone className="h-5 w-5" />,
    color: "from-rose-500 to-pink-600",
    glow: "shadow-[0_0_20px_rgba(244,63,94,0.3)] border-rose-500/20",
    details: { growthEngine: "Edge CRO Analytics", seoAuditing: "Automated", sync: "8ms" },
  },
  {
    name: "Creative",
    icon: <Paintbrush className="h-5 w-5" />,
    color: "from-fuchsia-500 to-purple-600",
    glow: "shadow-[0_0_20px_rgba(217,70,239,0.3)] border-fuchsia-500/20",
    details: { tokens: "Figma Variables", layoutEngine: "WebGL / Motion", styling: "Tailwind" },
  },
  {
    name: "Social Media",
    icon: <Share2 className="h-5 w-5" />,
    color: "from-sky-500 to-indigo-600",
    glow: "shadow-[0_0_20px_rgba(14,165,233,0.3)] border-sky-500/20",
    details: { syncScheduler: "Serverless Cron", engagement: "+42.5%", channelSync: "Active" },
  },
];

// Operational activity updates dataset
const liveStatusData = [
  {
    category: "AI Agent Processing",
    message: "Autonomous lead qualification module engaged for client pipeline.",
    status: "active",
    metric: "Model: GPT-4o | Latency: 42ms",
  },
  {
    category: "Workflow Executing",
    message: "Financial sync automation: transferring processed invoices to Stripe ledger.",
    status: "active",
    metric: "Batch size: 142 | Sync: 100%",
  },
  {
    category: "Data Synchronization",
    message: "Replicating postgres records across serverless node clusters.",
    status: "completed",
    metric: "Database: Supabase | Replication: 0.1ms",
  },
  {
    category: "Campaign Optimization",
    message: "Analyzing CRO benchmarks on marketing sales funnels.",
    status: "active",
    metric: "Conversion improvement: +14.2%",
  },
  {
    category: "Analytics Monitoring",
    message: "Auditing system resource thresholds and edge function times.",
    status: "optimal",
    metric: "CPU load: 12% | Edge latency: 8ms",
  },
  {
    category: "System Scaling",
    message: "Spinning up new Vercel serverless containers for high traffic peaks.",
    status: "completed",
    metric: "Instances: 14 active | Health: 100%",
  },
];

export default function Hero() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [statusIndex, setStatusIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Rotate activity card indexes every 4.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % liveStatusData.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Subtle cursor tracking parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.07;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.07;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-36 pb-20">
      {/* Premium Shifting Background Glows & Aurora Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep blue/purple mesh */}
        <motion.div
          animate={{
            scale: [1, 1.15, 0.9, 1],
            rotate: [0, 45, -45, 0],
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-primary/20 via-indigo-500/10 to-transparent blur-[120px]"
        />
        {/* Cyan/secondary aurora */}
        <motion.div
          animate={{
            scale: [1.1, 0.9, 1.15, 1.1],
            rotate: [0, -60, 60, 0],
            x: [0, -30, 40, 0],
            y: [0, 30, -40, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-secondary/20 via-cyan-500/10 to-transparent blur-[120px]"
        />
        {/* Pink/accent highlights */}
        <motion.div
          animate={{
            scale: [0.85, 1.1, 0.9, 0.85],
            x: [-10, 20, -10, -10],
            y: [30, -20, 10, 30],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[25%] w-[40%] h-[40%] rounded-full bg-accent/15 blur-[140px]"
        />
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      {/* Floating Background Particles */}
      <FloatingParticles count={15} />

      <div className="page-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Content Column */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 space-y-8 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-white/95 uppercase tracking-wider font-display"
          >
            <Bot className="h-3.5 w-3.5 text-secondary animate-pulse" />
            <span>Next-Gen Intelligent Engineering</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={staggerItem}
            className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.2rem] font-black leading-tight tracking-tight text-white min-h-[3.6em] sm:min-h-[3.6em] md:min-h-[3.6em] lg:min-h-[2.3em] xl:min-h-[2.3em] text-center lg:text-left"
          >
            Building the Future with <br />
            <span className="gradient-text inline-flex min-h-[1.25em] items-center whitespace-nowrap">
              <TypingText
                texts={["AI & Automation", "Digital Excellence", "Intelligent Systems", "Custom Software"]}
                speed={55}
                pauseDuration={2000}
              />
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={staggerItem}
            className="text-muted max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed"
          >
            AdcoraAI automates workflows, develops custom software architecture, and builds creative digital models to scale your enterprise operations.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <MagneticButton strength={0.25}>
              <Link
                href="/contact"
                className="btn-primary w-full sm:w-auto py-3 px-8 text-sm rounded-lg flex items-center justify-center gap-2 shadow-glow-primary group"
              >
                <span>Book Consultation</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <Link
                href="/portfolio"
                className="btn-outline w-full sm:w-auto py-3 px-8 text-sm rounded-lg flex items-center justify-center"
              >
                View Portfolio
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Animated Statistics */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5"
          >
            <StatCounter end={150} suffix="+" label="AI Automations Deployed" />
            <StatCounter end={99.9} suffix="%" label="System Uptime SLA" decimals={1} />
            <StatCounter end={40} suffix="%+" label="Business Cost Savings" />
          </motion.div>
        </motion.div>

        {/* 3D AI Command Center Visual Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[420px] lg:min-h-[500px]"
        >
          {/* ==================== RESPONSIVE INTERACTIVE ORBIT VISUAL ==================== */}
          <div className="relative w-[400px] h-[400px] flex items-center justify-center select-none scale-[0.75] xs:scale-[0.85] sm:scale-100 transition-transform origin-center my-2 lg:my-0 z-10">
            {/* Tilted orbit path illustrations */}
            <div className="absolute inset-0 w-full h-full rounded-full border border-white/5 pointer-events-none scale-[0.76] border-dashed animate-[spin_50s_linear_infinite]" />
            <div className="absolute inset-0 w-full h-full rounded-full border border-white/5 pointer-events-none scale-[0.62] animate-[spin_35s_linear_infinite_reverse]" />

            {/* Rotating SVG connection lines and data particle sweeps */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              style={{ x: mousePos.x * 0.4, y: mousePos.y * 0.4 }}
            >
              <svg className="w-full h-full">
                {serviceNodes.map((node, i) => {
                  const theta = (i * 2 * Math.PI) / serviceNodes.length;
                  const x = 145 * Math.cos(theta) + 200;
                  const y = 145 * Math.sin(theta) + 200;
                  return (
                    <React.Fragment key={i}>
                      {/* Connection trace */}
                      <line
                          x1="200"
                          y1="200"
                          x2={x}
                          y2={y}
                          stroke="rgba(255, 255, 255, 0.08)"
                          strokeWidth="1"
                      />
                      {/* Dash data particle flow */}
                      <path
                        d={`M 200 200 L ${x} ${y}`}
                        stroke="url(#dataLineGrad)"
                        strokeWidth="1.5"
                        strokeDasharray="6 15"
                        style={{
                          animation: "data-flow 2.2s linear infinite",
                          animationDelay: `${i * 0.3}s`,
                        }}
                      />
                    </React.Fragment>
                  );
                })}
                <defs>
                  <linearGradient id="dataLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.8" />
                    <stop offset="60%" stopColor="var(--color-secondary)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Rotating nodes container */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-full h-full z-10"
              style={{ x: mousePos.x * 0.6, y: mousePos.y * 0.6 }}
            >
              {serviceNodes.map((node, i) => {
                const theta = (i * 2 * Math.PI) / serviceNodes.length;
                const x = 145 * Math.cos(theta) + 200 - 24;
                const y = 145 * Math.sin(theta) + 200 - 24;

                return (
                  <div key={i} className="absolute" style={{ left: x, top: y }}>
                    {/* Counter-rotation to keep the node upright */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="relative"
                    >
                      {/* Hover / Click Trigger */}
                      <motion.button
                        onMouseEnter={() => setHoveredNode(i)}
                        onMouseLeave={() => setHoveredNode(null)}
                        onClick={() => setHoveredNode(hoveredNode === i ? null : i)}
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        className={`w-12 h-12 rounded-xl bg-card border border-white/10 flex items-center justify-center text-white/90 hover:text-white hover:border-white/20 transition-all duration-300 bg-gradient-to-tr ${node.glow}`}
                        aria-label={`Show ${node.name} node details`}
                      >
                        {node.icon}
                      </motion.button>

                      {/* Floating HUD-style metadata popover */}
                      <AnimatePresence>
                        {hoveredNode === i && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.92 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.92 }}
                            className="absolute bottom-14 left-1/2 -translate-x-1/2 w-48 p-3 glass-panel rounded-xl border border-white/15 shadow-glow-primary text-left select-none pointer-events-none z-50"
                          >
                            <div className="font-display font-black text-white text-xs mb-1.5 flex items-center gap-1.5 uppercase tracking-wide">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              {node.name}
                            </div>
                            <div className="space-y-1 text-[0.65rem] font-mono text-muted-foreground">
                              {Object.entries(node.details).map(([key, val]) => (
                                <div key={key} className="flex justify-between border-b border-white/5 pb-0.5">
                                  <span className="capitalize">{key}:</span>
                                  <span className="text-white font-semibold">{val}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Central Static Core Orb (stands steady, slightly offsets on parallax) */}
            <motion.div
              style={{ x: mousePos.x, y: mousePos.y }}
              transition={{ type: "spring", stiffness: 150, damping: 25 }}
              className="absolute z-20 w-24 h-24 flex items-center justify-center"
            >
              {/* Concentric pulsing energy wave */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-md animate-ping" style={{ animationDuration: "2.8s" }} />
              <div className="absolute -inset-2 rounded-full border border-dashed border-primary/25 animate-[spin_12s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-white/5 animate-[spin_20s_linear_infinite_reverse]" />

              {/* Orb body with neon radial gradient & depth shadow */}
              <div className="w-18 h-18 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent p-[2px] shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                <div className="w-full h-full rounded-full bg-[#080613]/90 flex items-center justify-center overflow-hidden relative">
                  {/* Neural-network style internal animation paths */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-80" viewBox="0 0 100 100">
                    <line x1="50" y1="22" x2="26" y2="46" stroke="rgba(139,92,246,0.4)" strokeWidth="1.2" />
                    <line x1="50" y1="22" x2="74" y2="46" stroke="rgba(14,165,233,0.4)" strokeWidth="1.2" />
                    <line x1="26" y1="46" x2="36" y2="76" stroke="rgba(217,70,239,0.4)" strokeWidth="1.2" />
                    <line x1="74" y1="46" x2="64" y2="76" stroke="rgba(168,85,247,0.4)" strokeWidth="1.2" />
                    <line x1="36" y1="76" x2="64" y2="76" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />

                    <motion.circle cx="50" cy="22" r="3.5" fill="#a855f7" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.8, repeat: Infinity }} />
                    <motion.circle cx="26" cy="46" r="3" fill="#0ea5e9" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }} />
                    <motion.circle cx="74" cy="46" r="3" fill="#ec4899" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.6, repeat: Infinity }} />
                    <motion.circle cx="36" cy="76" r="3.5" fill="#a855f7" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.1, repeat: Infinity }} />
                    <motion.circle cx="64" cy="76" r="3" fill="#ffffff" animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
                  </svg>
                  <Cpu className="h-6 w-6 text-white relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-pulse" />
                </div>
              </div>
            </motion.div>
          </div>


          {/* ==================== ELEGANT LIVE STATUS CARD ==================== */}
          <div className="w-full max-w-sm mt-8 px-2 z-20">
            <div className="text-[0.65rem] text-muted-foreground font-black uppercase tracking-wider mb-2 text-center lg:text-left flex items-center gap-1.5 justify-center lg:justify-start">
              <Activity className="h-3 w-3 text-secondary animate-pulse" />
              <span>Live Operational Updates</span>
            </div>
            <div className="relative min-h-[96px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={statusIndex}
                  initial={{ opacity: 0, y: 15, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-panel p-4 rounded-xl border border-white/10 shadow-glass flex items-start gap-3 w-full text-left"
                >
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse mt-1.5 shrink-0" />
                  <div className="space-y-1 flex-grow">
                    <div className="flex justify-between items-center">
                      <span className="text-[0.65rem] font-bold text-secondary uppercase tracking-widest font-mono">
                        {liveStatusData[statusIndex].category}
                      </span>
                      <span className="text-[0.55rem] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20 font-bold uppercase tracking-wider font-mono">
                        {liveStatusData[statusIndex].status}
                      </span>
                    </div>
                    <p className="text-xs text-white/90 leading-normal font-sans font-medium">
                      {liveStatusData[statusIndex].message}
                    </p>
                    <div className="text-[0.65rem] text-muted-foreground/80 font-semibold font-mono flex items-center gap-1.5 pt-1">
                      <Zap className="h-3 w-3 text-primary animate-pulse shrink-0" />
                      <span>{liveStatusData[statusIndex].metric}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
