"use client";

import React, { useState, useEffect } from "react";

export default function Preloader() {
  const [state, setState] = useState<"loading" | "fading" | "none">("loading");

  useEffect(() => {
    // Check if the preloader has already been shown in this session
    const hasBeenShown = sessionStorage.getItem("adcora-preloader-shown");

    if (hasBeenShown === "true") {
      setState("none");
      return;
    }

    // Set the flag in session storage
    sessionStorage.setItem("adcora-preloader-shown", "true");

    // Timing sequence:
    // 2.2 seconds: start the fade out animation
    const fadeTimer = setTimeout(() => {
      setState("fading");
    }, 2200);

    // 2.6 seconds: completely unmount the preloader
    const destroyTimer = setTimeout(() => {
      setState("none");
    }, 2600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(destroyTimer);
    };
  }, []);

  useEffect(() => {
    if (state !== "none") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [state]);

  if (state === "none") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#030307] flex flex-col items-center justify-center overflow-hidden transition-all duration-500 ease-in-out ${
        state === "fading" ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* Self-contained Keyframe Animations */}
      <style jsx global>{`
        /* Trace/Draw Hexagon */
        @keyframes drawHexagon {
          0% {
            stroke-dashoffset: 250;
            opacity: 0;
          }
          30% {
            opacity: 0.8;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
            filter: drop-shadow(0 0 16px rgba(59, 130, 246, 0.6));
          }
        }

        /* Trace Inner Triangle Lines */
        @keyframes drawTriangleLines {
          0% {
            stroke-dashoffset: 42;
            opacity: 0;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        /* Node Flash & Glow */
        @keyframes nodeIgnition {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
            filter: drop-shadow(0 0 12px #ffffff);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Center Core Scale-in */
        @keyframes coreReveal {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Core Infinite Pulse */
        @keyframes corePulse {
          0% {
            filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.5));
            opacity: 0.8;
          }
          100% {
            filter: drop-shadow(0 0 25px rgba(236, 72, 153, 0.9));
            opacity: 1;
          }
        }

        /* Brand Typography Reveal */
        @keyframes textReveal {
          0% {
            opacity: 0;
            filter: blur(8px);
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
            transform: translateY(0);
          }
        }

        /* Glowing background blobs */
        @keyframes ambientPulse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.15;
          }
          50% {
            transform: translate(10px, -15px) scale(1.1);
            opacity: 0.3;
          }
        }

        /* Ripple effect radiating from core */
        @keyframes rippleResonance {
          0% {
            transform: scale(0.6);
            opacity: 0.5;
            stroke-width: 2;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
            stroke-width: 0.5;
          }
        }

        /* Animation Utility Classes */
        .animate-draw-hex {
          stroke-dasharray: 250;
          stroke-dashoffset: 250;
          animation: drawHexagon 1.1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-draw-line-1 {
          stroke-dasharray: 42;
          stroke-dashoffset: 42;
          animation: drawTriangleLines 0.5s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards;
        }

        .animate-draw-line-2 {
          stroke-dasharray: 42;
          stroke-dashoffset: 42;
          animation: drawTriangleLines 0.5s cubic-bezier(0.4, 0, 0.2, 1) 1.2s forwards;
        }

        .animate-draw-line-3 {
          stroke-dasharray: 42;
          stroke-dashoffset: 42;
          animation: drawTriangleLines 0.5s cubic-bezier(0.4, 0, 0.2, 1) 1.4s forwards;
        }

        .animate-node-1 {
          transform-origin: 50px 26px;
          animation: nodeIgnition 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 1s forwards;
        }

        .animate-node-2 {
          transform-origin: 29px 62px;
          animation: nodeIgnition 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 1.2s forwards;
        }

        .animate-node-3 {
          transform-origin: 71px 62px;
          animation: nodeIgnition 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 1.4s forwards;
        }

        .animate-core {
          transform-origin: 50px 50px;
          animation: 
            coreReveal 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1.5s forwards,
            corePulse 1.5s ease-in-out 2s infinite alternate;
        }

        .animate-ripple {
          transform-origin: 50px 50px;
          animation: rippleResonance 2.2s cubic-bezier(0.1, 0.8, 0.3, 1) infinite;
        }

        .animate-brand-text {
          animation: textReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.6s forwards;
        }
      `}</style>

      {/* Cybernetic Faint Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Pulsing ambient glowing lights */}
      <div 
        className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" 
        style={{ animation: "ambientPulse 8s ease-in-out infinite alternate" }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" 
        style={{ animation: "ambientPulse 8s ease-in-out infinite alternate-reverse 3s" }}
      />

      {/* Logo & Content Center Container */}
      <div className="relative flex flex-col items-center gap-8 z-10 scale-95 md:scale-100">
        {/* Animated Vector Logo */}
        <div className="relative w-40 h-40">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="preloader-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="preloader-grad-hex" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>

            {/* Ripple Circles radiating from core (only visible after core reveal) */}
            <circle cx="50" cy="50" r="30" stroke="url(#preloader-grad)" className="animate-ripple opacity-0" style={{ animationDelay: "1.7s" }} />
            <circle cx="50" cy="50" r="30" stroke="url(#preloader-grad)" className="animate-ripple opacity-0" style={{ animationDelay: "2.8s" }} />

            {/* Outer Glowing Hexagonal Shell */}
            <path
              d="M50 8L86 29V71L50 92L14 71V29L50 8Z"
              stroke="url(#preloader-grad-hex)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-hex opacity-0"
            />

            {/* Inner Stylized 'A' Connection Lines */}
            {/* Top to Right-Bottom */}
            <path
              d="M50 26L71 62"
              stroke="url(#preloader-grad)"
              strokeWidth="4"
              strokeLinecap="round"
              className="animate-draw-line-1 opacity-0"
            />
            {/* Top to Left-Bottom */}
            <path
              d="M50 26L29 62"
              stroke="url(#preloader-grad)"
              strokeWidth="4"
              strokeLinecap="round"
              className="animate-draw-line-2 opacity-0"
            />
            {/* Left-Bottom to Right-Bottom */}
            <path
              d="M29 62H71"
              stroke="url(#preloader-grad)"
              strokeWidth="4"
              strokeLinecap="round"
              className="animate-draw-line-3 opacity-0"
            />

            {/* Center Data Node Core */}
            <circle cx="50" cy="50" r="10" fill="url(#preloader-grad)" className="animate-core opacity-0" />

            {/* Outer White Node Circles */}
            {/* Top Node */}
            <circle cx="50" cy="26" r="5" fill="#ffffff" className="animate-node-1 opacity-0" />
            {/* Left Bottom Node */}
            <circle cx="29" cy="62" r="5" fill="#ffffff" className="animate-node-2 opacity-0" />
            {/* Right Bottom Node */}
            <circle cx="71" cy="62" r="5" fill="#ffffff" className="animate-node-3 opacity-0" />
          </svg>
        </div>

        {/* Brand Typography */}
        <div className="animate-brand-text opacity-0 flex items-center justify-center gap-1.5 mt-2">
          <span className="font-display font-black tracking-wider text-2xl md:text-3xl text-white">
            Adcora
          </span>
          <span className="font-display font-black tracking-wider text-2xl md:text-3xl bg-gradient-to-r from-[#3b82f6] to-[#ec4899] bg-clip-text text-transparent">
            AI
          </span>
        </div>
      </div>
    </div>
  );
}
