"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  xRange: number;
  yRange: number;
}

export default function FloatingParticles({ count = 12, className = "" }: FloatingParticlesProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const colors = [
    "rgba(139,92,246,0.4)",
    "rgba(14,165,233,0.4)",
    "rgba(167,92,246,0.25)",
    "rgba(14,165,233,0.2)",
  ];

  // Use a seeded deterministic approach via useMemo so SSR and client match
  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      // Use index-based pseudo-random values for determinism
      const seed = (i + 1) * 7919; // prime multiplier
      const pseudo = (n: number) => Math.abs(Math.sin(seed * n)) ;
      return {
        id: i,
        x: pseudo(1) * 100,
        y: pseudo(2) * 100,
        size: pseudo(3) * 3 + 1.5,
        color: colors[Math.floor(pseudo(4) * colors.length)],
        duration: pseudo(5) * 8 + 6,
        delay: pseudo(6) * 4,
        xRange: (pseudo(7) - 0.5) * 60,
        yRange: (pseudo(8) - 0.5) * 60,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  if (!mounted) return null;

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            filter: "blur(0.5px)",
          }}
          animate={{
            x: [0, p.xRange, -p.xRange * 0.5, 0],
            y: [0, p.yRange, -p.yRange * 0.5, 0],
            opacity: [0.3, 0.8, 0.5, 0.3],
            scale: [1, 1.5, 0.8, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
