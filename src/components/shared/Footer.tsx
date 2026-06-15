"use client";

import React from "react";
import Link from "next/link";
import { Mail, Heart, MapPin } from "lucide-react";
import Logo from "@/components/shared/Logo";

export default function Footer() {

  return (
    <footer className="bg-card/40 border-t border-white/5 pt-20 pb-8 relative z-10 overflow-hidden">
      {/* Footer Grid */}
      <div className="page-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Info Column */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center group focus:outline-none">
            <Logo variant="full" theme="dark" className="h-8 transition-transform group-hover:scale-[1.02]" />
          </Link>
          <p className="text-sm text-muted leading-relaxed">
            Building the Future with AI & Digital Excellence. Empowering enterprise brands and startups through automation and engineering.
          </p>

        </div>

        {/* Site Menu Links */}
        <div className="space-y-6">
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Site Menu</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="text-muted hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-muted hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="text-muted hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/portfolio" className="text-muted hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link href="/blog" className="text-muted hover:text-white transition-colors">Blogs</Link></li>
            <li><Link href="/careers" className="text-muted hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="text-muted hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Legal & Policies Links */}
        <div className="space-y-6">
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Legal & Policies</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/privacy-policy" className="text-muted hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions" className="text-muted hover:text-white transition-colors">Terms and Conditions</Link></li>
            <li><Link href="/cancellation-policy" className="text-muted hover:text-white transition-colors">Cancellation Policy</Link></li>
            <li><Link href="/refund-policy" className="text-muted hover:text-white transition-colors">Refund Policy</Link></li>
          </ul>
        </div>

        {/* Contact Us Column */}
        <div className="space-y-6">
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact Us</h4>
          <div className="space-y-4 text-sm text-muted">
            {/* Address */}
            <div className="flex items-start gap-3 group">
              <MapPin className="h-4.5 w-4.5 text-primary shrink-0 transition-colors group-hover:text-white mt-0.5" />
              <address className="not-italic leading-relaxed">
                Murugeshpalya, Nanja Reddy Colony,<br />
                Jeevan Bima Nagar, Bengaluru,<br />
                Karnataka 560017
              </address>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 group">
              <Mail className="h-4.5 w-4.5 text-primary shrink-0 transition-colors group-hover:text-white" />
              <a href="mailto:connect.adcoraai@gmail.com" className="hover:text-white transition-colors">
                connect.adcoraai@gmail.com
              </a>
            </div>
            
            {/* WhatsApp / Phone */}
            <div className="flex items-center gap-3 group">
              <svg className="h-4.5 w-4.5 text-emerald-400 fill-emerald-400 shrink-0 transition-colors group-hover:fill-white group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.238 1.45 4.82 1.452 5.432-.002 9.85-4.42 9.853-9.852.002-2.63-1.023-5.101-2.885-6.963C16.573 1.928 14.102.926 11.47.924c-5.43.002-9.85 4.42-9.853 9.852.001 2.01.522 3.974 1.517 5.694l-.99 3.616 3.703-.972c1.668.91 3.3.01 3.3.01zm10.9-7.825c-.27-.136-1.602-.79-1.85-.882-.25-.091-.43-.136-.61.136-.18.27-.7.882-.857 1.058-.16.176-.32.197-.59.06-2.73-1.37-3.83-2.3-4.59-3.6-.2-.35-.02-.54.15-.71.16-.16.35-.41.52-.61.18-.2.24-.34.36-.57.12-.23.06-.43-.03-.61-.09-.18-.73-1.77-.99-2.4-.26-.62-.53-.54-.73-.55-.19-.01-.41-.01-.63-.01s-.57.08-.87.41c-.3.33-1.14 1.12-1.14 2.73s1.18 3.16 1.34 3.39c.16.22 2.32 3.54 5.62 4.97 3.01 1.3 3.62 1.04 4.9.86.72-.1 1.6-.65 1.83-1.26.23-.61.23-1.13.16-1.24-.07-.1-.26-.18-.53-.32z" />
              </svg>
              <a href="https://wa.me/919153765913?text=Hi%20AdcoraAI" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                +91 91537 65913
              </a>
              <span className="text-muted">/</span>
              <a href="tel:+918360607130" className="hover:text-white transition-colors">
                +91 83606 07130
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="pt-2">
            <span className="text-[0.65rem] font-bold text-muted uppercase tracking-wider block mb-3">Connect Socially</span>
            <div className="flex gap-4 text-muted">
              <a href="https://www.facebook.com/share/18qmjx8Hhs/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://x.com/adcoraai" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="X (Twitter)">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.instagram.com/adcoraai?utm_source=qr&igsh=a2JibTk4cmpsbnd0" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/adcora-ai-498645416" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/5 pt-8">
        <div className="page-container flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>
            © {new Date().getFullYear()} AdcoraAI. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Built with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> by AdcoraAI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
