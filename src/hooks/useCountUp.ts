"use client";

import { useState, useEffect, useCallback } from "react";

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
  const [node, setNode] = useState<HTMLSpanElement | null>(null);

  // Use a callback ref to ensure we get the DOM node as soon as it mounts/hydrates.
  const ref = useCallback((element: HTMLSpanElement | null) => {
    if (element !== null) {
      setNode(element);
    }
  }, []);

  useEffect(() => {
    if (hasStarted) return;
    if (!node) return;

    // rootMargin: "0px 0px -10% 0px" gives a comfortable trigger zone.
    // threshold: 0 means fire as soon as even 1 pixel is visible (important
    // when the element starts with a CSS transform/opacity from Framer Motion).
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);

    // Fallback: if the element is already on screen (e.g., Hero stats visible on
    // page load) but IntersectionObserver missed it due to Framer Motion's
    // initial opacity/transform state, force-start the animation after 1.5s.
    const fallback = setTimeout(() => {
      setHasStarted(true);
      observer.disconnect();
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [node, hasStarted]);

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

      setCount(parseFloat(current.toFixed(decimals)));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    // Cancel animation frame on cleanup to prevent concurrent animation loops or memory leaks.
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [hasStarted, end, start, duration, decimals]);

  const formatted = `${prefix}${count.toFixed(decimals)}${suffix}`;

  return { count, formatted, ref };
}
