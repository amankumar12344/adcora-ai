"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const directionVariants = {
  up:    { hidden: { opacity: 0, y: 30 },  visible: { opacity: 1, y: 0  } },
  down:  { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0  } },
  left:  { hidden: { opacity: 0, x: 40 },  visible: { opacity: 1, x: 0  } },
  right: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0  } },
  none:  { hidden: { opacity: 0 },         visible: { opacity: 1        } },
};

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const variants = directionVariants[direction];

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={once ? viewportOnce : { once: false, margin: "-80px" }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
