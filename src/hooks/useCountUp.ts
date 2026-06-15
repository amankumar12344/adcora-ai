"use client";

import { useState, useEffect, useRef } from "react";

interface UseCountUpOptions {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

export function useCountUp({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  suffix = "",
  prefix = "",
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setHasStarted(true);
            observer?.disconnect();
          }
        },
        { threshold: 0, rootMargin: "0px 0px -5% 0px" }
      );
      observer.observe(el);
    } else {
      setHasStarted(true);
    }

    // Fallback: If visible on screen or missed by the observer, start after 800ms
    const fallback = setTimeout(() => {
      setHasStarted(true);
      observer?.disconnect();
    }, 800);

    return () => {
      observer?.disconnect();
      clearTimeout(fallback);
    };
  }, [start]);

  useEffect(() => {
    if (!hasStarted) return;

    let animationFrameId: number;
    const startTime = performance.now();
    const range = end - start;

    const easeOutQuad = (t: number) => t * (2 - t);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const current = start + range * easedProgress;

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [hasStarted, end, start, duration]);

  const formatted = `${prefix}${count.toFixed(decimals)}${suffix}`;

  return { count, formatted, ref: elementRef };
}
