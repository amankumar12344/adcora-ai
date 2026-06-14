"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/shared/Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 shadow-glass h-18"
          : "bg-transparent h-22"
      } flex items-center justify-between px-6 md:px-12`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center group focus:outline-none" aria-label="AdcoraAI Home">
        <Logo variant="full" theme="dark" className="h-9 transition-transform group-hover:scale-[1.02]" />
      </Link>

      {/* Desktop Nav Links */}
      <nav className="hidden lg:flex items-center gap-8" aria-label="Desktop Navigation">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="nav-link text-sm font-semibold tracking-wide text-foreground/80 hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Action Buttons */}
      <div className="hidden lg:flex items-center gap-4">
        <Link
          href="/client/login"
          className="text-sm font-semibold text-foreground/80 hover:text-white transition-colors px-4 py-2"
        >
          Client Login
        </Link>
        <Link
          href="/contact"
          className="btn-primary py-2 px-5 text-sm rounded-lg shadow-glow-primary flex items-center gap-1.5 group"
        >
          <span>Get Started</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden p-2 text-foreground/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
        aria-expanded={mobileMenuOpen}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Slide-Over */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-white/5 px-6 py-8 flex flex-col gap-6 lg:hidden shadow-glass"
          >
            {/* Mobile menu logo */}
            <div className="flex justify-center border-b border-white/5 pb-4">
              <Logo variant="full" theme="dark" className="h-8" />
            </div>

            <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-semibold text-foreground/80 hover:text-white transition-colors py-2 border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-4 mt-2">
              <Link
                href="/client/login"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-glass py-2.5 text-center text-sm font-semibold rounded-lg"
              >
                Client Login
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary py-2.5 text-center text-sm rounded-lg shadow-glow-primary"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
