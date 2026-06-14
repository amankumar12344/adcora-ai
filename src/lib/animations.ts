// Shared Framer Motion animation variants for AdcoraAI
// Use these across all components for consistency

import { Variants } from "framer-motion";

// ─── Fade & Slide Variants ──────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Stagger Container ──────────────────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Hover Effects ──────────────────────────────────────────────────────────

export const hoverLift = {
  whileHover: { y: -5, scale: 1.02 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

// ─── Spring Config ──────────────────────────────────────────────────────────

export const springConfig = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};

export const softSpring = {
  type: "spring" as const,
  stiffness: 200,
  damping: 25,
};

// ─── Page Transition ────────────────────────────────────────────────────────

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

// ─── Viewport Config ────────────────────────────────────────────────────────

export const viewportOnce = { once: true, margin: "-80px" };
export const viewportRepeat = { once: false, margin: "-80px" };
