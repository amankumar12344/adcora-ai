"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TextRotatorProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export default function TextRotator({
  texts,
  interval = 3000,
  className = "",
}: TextRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (texts.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span 
      className="relative block w-full h-[1.2em] overflow-hidden"
      style={{ contain: "layout paint" }}
    >
      <AnimatePresence>
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className={`absolute inset-x-0 mx-auto text-center lg:text-left lg:left-0 lg:right-auto lg:mx-0 whitespace-nowrap font-black inline-block ${className}`}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
