"use client";

import React from "react";

interface LogoProps {
  variant?: "full" | "icon";
  theme?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "full", theme = "dark", className = "h-8" }: LogoProps) {
  const textColor = theme === "dark" ? "text-white" : "text-slate-900";
  const iconGradientId = `logo-grad-${theme}`;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`} aria-label="AdcoraAI Logo">
      {/* Dynamic Inline Vector Logo Icon */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto aspect-square shrink-0 filter drop-shadow-[0_0_12px_rgba(59,130,246,0.3)]"
      >
        <defs>
          <linearGradient id={iconGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>

        {/* Outer glowing hexagonal shell */}
        <path
          d="M50 8L86 29V71L50 92L14 71V29L50 8Z"
          stroke={`url(#${iconGradientId})`}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />

        {/* Inner core node connection (Stylized A + AI node connectivity) */}
        <path
          d="M50 26L71 62H29L50 26Z"
          fill={`url(#${iconGradientId})`}
          opacity="0.2"
        />
        <path
          d="M50 26L71 62M50 26L29 62M29 62H71"
          stroke={`url(#${iconGradientId})`}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Center data node */}
        <circle cx="50" cy="50" r="10" fill={`url(#${iconGradientId})`} />
        <circle cx="50" cy="26" r="6" fill="#ffffff" />
        <circle cx="29" cy="62" r="6" fill="#ffffff" />
        <circle cx="71" cy="62" r="6" fill="#ffffff" />
      </svg>

      {/* Brand Typography */}
      {variant === "full" && (
        <span className={`font-display font-black tracking-tight text-lg sm:text-xl md:text-2xl ${textColor} flex items-center`}>
          Adcora
          <span className="bg-gradient-to-r from-[#3b82f6] to-[#ec4899] bg-clip-text text-transparent ml-0.5">
            AI
          </span>
        </span>
      )}
    </div>
  );
}
