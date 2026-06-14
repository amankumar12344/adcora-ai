"use client";

import React, { useRef, useState, useCallback, ReactNode } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useSpring(0, { stiffness: 350, damping: 30 });
  const y = useSpring(0, { stiffness: 350, damping: 30 });

  const rotateX = useTransform(y, [-20, 20], [5, -5]);
  const rotateY = useTransform(x, [-20, 20], [-5, 5]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      x.set(dx);
      y.set(dy);
    },
    [x, y, strength]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x, y, rotateX, rotateY }}
      className={`relative inline-flex ${className}`}
    >
      <motion.div
        animate={isHovered ? { scale: 1.04 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
