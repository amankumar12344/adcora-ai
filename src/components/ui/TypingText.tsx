"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface TypingTextProps {
  texts: string[];
  className?: string;
  speed?: number;
  pauseDuration?: number;
  cursorClassName?: string;
}

export default function TypingText({
  texts,
  className = "",
  speed = 60,
  pauseDuration = 1800,
  cursorClassName = "text-primary",
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const currentText = texts[textIndex];

    const update = () => {
      if (isPaused) {
        timeoutRef.current = setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
        return;
      }

      if (isDeleting) {
        if (displayText.length === 0) {
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }, 80);
          return;
        }
        timeoutRef.current = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, speed / 2.5);
      } else {
        if (displayText === currentText) {
          timeoutRef.current = setTimeout(() => {
            setIsPaused(true);
          }, 100);
          return;
        }
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, speed);
      }
    };

    update();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, isPaused, textIndex, texts, speed, pauseDuration]);

  return (
    <span className={className}>
      {displayText || "\u200b"}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        className={`ml-0.5 font-thin ${cursorClassName}`}
      >
        |
      </motion.span>
    </span>
  );
}
