"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomScrollbar() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrollHeight(document.documentElement.scrollHeight);
      setClientHeight(document.documentElement.clientHeight);
      
      // Make scrollbar visible when scrolling
      setIsVisible(true);
      
      // Auto-hide after 1.5 seconds of inactivity
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
      
      fadeTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 1500);
    };

    // Initialize dimensions on mount
    handleScroll();
    
    // Add scroll and resize listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  // Don't show scrollbar if content doesn't overflow the screen
  if (scrollHeight <= clientHeight) return null;

  const scrollPercentage = scrollY / (scrollHeight - clientHeight);
  
  // Calculate thumb height proportional to viewport
  const thumbHeight = Math.max((clientHeight / scrollHeight) * clientHeight, 40); // min 40px
  
  // 8px padding top and bottom
  const maxTop = clientHeight - thumbHeight - 16; 
  const thumbTop = 8 + scrollPercentage * maxTop;

  return (
    <div className="fixed right-1 top-0 bottom-0 w-1.5 z-[9999] pointer-events-none flex items-center">
      {/* Scrollbar Track background */}
      <div 
        className={`absolute right-0 w-full h-[98%] rounded-full bg-white/[0.02] border border-white/[0.01] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Scrollbar Thumb */}
      <div
        className={`absolute right-0 w-full rounded-full bg-gradient-to-b from-primary to-secondary shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-opacity duration-300 ${
          isVisible ? "opacity-80" : "opacity-0"
        }`}
        style={{
          top: `${thumbTop}px`,
          height: `${thumbHeight}px`,
        }}
      />
    </div>
  );
}
