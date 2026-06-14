"use client";

import React from "react";

interface DiagramProps {
  type: "architecture" | "search" | "availability" | "booking" | "gds-ndc" | "flight-pipeline" | "car-rental-engine" | "oauth-token-flow" | "ticketing-queue";
}

export default function BlogDiagram({ type }: DiagramProps) {
  if (type === "architecture") {
    return (
      <div className="w-full bg-[#0d0a1b]/60 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center space-y-4 my-8 overflow-x-auto">
        <span className="text-[10px] bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 font-bold uppercase tracking-wider">
          Viator API Integration Architecture
        </span>
        <svg className="w-full min-w-[500px] max-w-[650px] h-60 text-white font-sans text-xs" viewBox="0 0 650 240" fill="none">
          <defs>
            <linearGradient id="boxGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(139,92,246,0.15)" />
              <stop offset="100%" stopColor="rgba(14,165,233,0.05)" />
            </linearGradient>
            <linearGradient id="gateGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(14,165,233,0.2)" />
              <stop offset="100%" stopColor="rgba(29,78,216,0.05)" />
            </linearGradient>
          </defs>

          <path d="M120 70h130M120 170h130M390 120h130" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="4 6" />
          <path d="M250 120c0-25-10-50-30-50" stroke="rgba(14,165,233,0.2)" strokeWidth="1.5" />
          <path d="M250 120c0 25-10 50-30 50" stroke="rgba(14,165,233,0.2)" strokeWidth="1.5" />

          <rect x="20" y="40" width="100" height="60" rx="10" fill="url(#boxGrad)" stroke="rgba(255,255,255,0.08)" />
          <text x="70" y="68" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="10">Web / App</text>
          <text x="70" y="82" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">B2C Travelers</text>

          <rect x="20" y="140" width="100" height="60" rx="10" fill="url(#boxGrad)" stroke="rgba(255,255,255,0.08)" />
          <text x="70" y="168" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="10">Agent Portal</text>
          <text x="70" y="182" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9">B2B Agencies</text>

          <rect x="250" y="70" width="140" height="100" rx="12" fill="url(#gateGrad)" stroke="rgba(14,165,233,0.3)" />
          <text x="320" y="98" textAnchor="middle" fill="#22d3ee" fontWeight="black" fontSize="11">AdcoraAI Middleware</text>
          <text x="320" y="118" textAnchor="middle" fill="#a78bfa" fontSize="9">Redis Cache Layer</text>
          <text x="320" y="132" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Rate-Limit Routing & logging</text>
          <text x="320" y="146" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Merchant Checkout API</text>

          <rect x="520" y="90" width="110" height="60" rx="10" fill="url(#boxGrad)" stroke="rgba(255,255,255,0.08)" />
          <text x="575" y="118" textAnchor="middle" fill="#34d399" fontWeight="bold" fontSize="11">Viator Partner API</text>
          <text x="575" y="132" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">TripAdvisor Network</text>
        </svg>
      </div>
    );
  }

  if (type === "search") {
    return (
      <div className="w-full bg-[#0d0a1b]/60 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center space-y-4 my-8 overflow-x-auto">
        <span className="text-[10px] bg-secondary/10 text-secondary px-3 py-1 rounded-full border border-secondary/20 font-bold uppercase tracking-wider">
          Search Discovery Caching Flow
        </span>
        <svg className="w-full min-w-[500px] max-w-[650px] h-60 text-white font-sans text-xs" viewBox="0 0 650 220" fill="none">
          <defs>
            <linearGradient id="boxG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(14,165,233,0.15)" />
              <stop offset="100%" stopColor="rgba(139,92,246,0.05)" />
            </linearGradient>
          </defs>

          <path d="M120 110h80M300 110h80M480 110h60" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="3 5" />
          <path d="M250 140v40h150v-40" stroke="rgba(239,68,68,0.2)" strokeWidth="1.5" fill="none" />

          <rect x="20" y="80" width="100" height="60" rx="10" fill="url(#boxG)" stroke="rgba(255,255,255,0.08)" />
          <text x="70" y="108" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="10">User Query</text>
          <text x="70" y="122" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">"Dubai Safari"</text>

          <rect x="200" y="80" width="100" height="60" rx="10" fill="url(#boxG)" stroke="rgba(255,255,255,0.08)" />
          <text x="250" y="105" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="10">Cache Check</text>
          <text x="250" y="118" textAnchor="middle" fill="#34d399" fontSize="8">HIT &rarr; Return Cache</text>
          <text x="250" y="130" textAnchor="middle" fill="#ef4444" fontSize="8">MISS &rarr; Query GDS</text>

          <rect x="380" y="80" width="100" height="60" rx="10" fill="url(#boxG)" stroke="rgba(255,255,255,0.08)" />
          <text x="430" y="108" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="10">Viator API Search</text>
          <text x="430" y="122" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Fetch Live products</text>

          <rect x="540" y="80" width="100" height="60" rx="10" fill="url(#boxG)" stroke="rgba(255,255,255,0.08)" />
          <text x="590" y="108" textAnchor="middle" fill="#34d399" fontWeight="bold" fontSize="10">Update Cache</text>
          <text x="590" y="122" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">TTL: 15 Mins</text>
        </svg>
      </div>
    );
  }

  if (type === "availability") {
    return (
      <div className="w-full bg-[#0d0a1b]/60 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center space-y-4 my-8 overflow-x-auto">
        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 font-bold uppercase tracking-wider">
          Real-Time Availability Validation Sequence
        </span>
        <svg className="w-full min-w-[500px] max-w-[650px] h-60 text-white font-sans text-xs" viewBox="0 0 650 240" fill="none">
          <path d="M100 60v140M300 60v140M500 60v140" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 3" />
          
          <text x="100" y="50" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="10">User Frontend</text>
          <text x="300" y="50" textAnchor="middle" fill="#22d3ee" fontWeight="bold" fontSize="10">Middleware API</text>
          <text x="500" y="50" textAnchor="middle" fill="#34d399" fontWeight="bold" fontSize="10">Viator Engine</text>

          <path d="M100 90h190" stroke="#a78bfa" strokeWidth="1.5" />
          <text x="200" y="85" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">1. Load Details / Check Date</text>

          <path d="M300 120h190" stroke="#22d3ee" strokeWidth="1.5" />
          <text x="400" y="115" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">2. Check Live Availability</text>

          <path d="M500 150H310" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="400" y="145" textAnchor="middle" fill="#34d399" fontSize="8">3. Return Status (Available/Full)</text>

          <path d="M300 180H110" stroke="#a78bfa" strokeWidth="1.5" />
          <text x="200" y="175" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">4. Enable "Book" or Show "Sold Out"</text>
        </svg>
      </div>
    );
  }

  if (type === "booking") {
    return (
      <div className="w-full bg-[#0d0a1b]/60 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center space-y-4 my-8 overflow-x-auto">
        <span className="text-[10px] bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 font-bold uppercase tracking-wider">
          Merchant Booking & Confirmation Flow
        </span>
        <svg className="w-full min-w-[500px] max-w-[650px] h-60 text-white font-sans text-xs" viewBox="0 0 650 240" fill="none">
          <defs>
            <linearGradient id="bookG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(167,139,250,0.15)" />
              <stop offset="100%" stopColor="rgba(14,165,233,0.05)" />
            </linearGradient>
          </defs>

          <path d="M90 100h70M240 100h60M380 100h60M520 100h60" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="3 3" />

          <rect x="10" y="70" width="80" height="60" rx="8" fill="url(#bookG)" stroke="rgba(255,255,255,0.08)" />
          <text x="50" y="95" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="9">1. Details</text>
          <text x="50" y="108" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Traveler Info</text>

          <rect x="160" y="70" width="80" height="60" rx="8" fill="url(#bookG)" stroke="rgba(255,255,255,0.08)" />
          <text x="200" y="95" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="9">2. Pre-Check</text>
          <text x="200" y="108" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Availability API</text>

          <rect x="300" y="70" width="80" height="60" rx="8" fill="url(#bookG)" stroke="rgba(255,255,255,0.08)" />
          <text x="340" y="95" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="9">3. Payment</text>
          <text x="340" y="108" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Stripe/Telr</text>

          <rect x="440" y="70" width="80" height="60" rx="8" fill="url(#bookG)" stroke="rgba(255,255,255,0.08)" />
          <text x="480" y="95" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="9">4. Submit</text>
          <text x="480" y="108" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Viator API</text>

          <rect x="560" y="70" width="80" height="60" rx="8" fill="url(#bookG)" stroke="rgba(255,255,255,0.08)" />
          <text x="600" y="95" textAnchor="middle" fill="#34d399" fontWeight="bold" fontSize="9">5. Confirm</text>
          <text x="600" y="108" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Save PNR</text>
        </svg>
      </div>
    );
  }

  if (type === "gds-ndc") {
    return (
      <div className="w-full bg-[#0d0a1b]/60 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center space-y-4 my-8 overflow-x-auto">
        <span className="text-[10px] bg-rose-500/10 text-rose-400 px-3 py-1 rounded-full border border-rose-500/20 font-bold uppercase tracking-wider">
          Traditional GDS vs Direct NDC Channel Flow
        </span>
        <svg className="w-full min-w-[500px] max-w-[650px] h-64 text-white font-sans text-xs" viewBox="0 0 650 250" fill="none">
          <defs>
            <linearGradient id="gdsGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(239,68,68,0.1)" />
              <stop offset="100%" stopColor="rgba(239,68,68,0.02)" />
            </linearGradient>
            <linearGradient id="ndcGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(52,211,153,0.15)" />
              <stop offset="100%" stopColor="rgba(14,165,233,0.05)" />
            </linearGradient>
          </defs>

          <path d="M120 70h120M340 70h120" stroke="rgba(239,68,68,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="20" y="30" fill="rgba(255,255,255,0.4)" fontSize="8" fontWeight="bold">LEGACY GDS PATH</text>
          
          <rect x="20" y="45" width="100" height="50" rx="8" fill="url(#gdsGrad)" stroke="rgba(239,68,68,0.2)" />
          <text x="70" y="70" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="10">OTA Engine</text>
          <text x="70" y="82" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">XML Requests</text>

          <rect x="240" y="45" width="100" height="50" rx="8" fill="url(#gdsGrad)" stroke="rgba(239,68,68,0.2)" />
          <text x="290" y="70" textAnchor="middle" fill="#ef4444" fontWeight="bold" fontSize="10">Amadeus/Sabre</text>
          <text x="290" y="82" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">GDS Aggregation</text>

          <rect x="460" y="45" width="120" height="50" rx="8" fill="url(#gdsGrad)" stroke="rgba(239,68,68,0.2)" />
          <text x="520" y="70" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="10">Airline System</text>
          <text x="520" y="82" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">EDIFACT Standard Fares</text>

          <path d="M120 180h340" stroke="rgba(52,211,153,0.3)" strokeWidth="2" />
          <text x="20" y="140" fill="rgba(52,211,153,0.6)" fontSize="8" fontWeight="bold">DIRECT NDC PATH</text>

          <rect x="20" y="155" width="100" height="50" rx="8" fill="url(#ndcGrad)" stroke="rgba(52,211,153,0.2)" />
          <text x="70" y="180" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="10">OTA Engine</text>
          <text x="70" y="192" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">JSON / REST</text>

          <rect x="460" y="155" width="120" height="50" rx="8" fill="url(#ndcGrad)" stroke="rgba(52,211,153,0.3)" />
          <text x="520" y="180" textAnchor="middle" fill="#34d399" fontWeight="bold" fontSize="10">Airline Offer Engine</text>
          <text x="520" y="192" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Dynamic Rich Offers</text>
        </svg>
      </div>
    );
  }

  if (type === "flight-pipeline") {
    return (
      <div className="w-full bg-[#0d0a1b]/60 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center space-y-4 my-8 overflow-x-auto">
        <span className="text-[10px] bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 font-bold uppercase tracking-wider">
          Flight Booking Pipeline Orchestration
        </span>
        <svg className="w-full min-w-[500px] max-w-[650px] h-60 text-white font-sans text-xs" viewBox="0 0 650 220" fill="none">
          <defs>
            <linearGradient id="flightG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(14,165,233,0.15)" />
              <stop offset="100%" stopColor="rgba(167,139,250,0.05)" />
            </linearGradient>
          </defs>

          <path d="M110 110h80M290 110h80M470 110h60" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="3 3" />

          <rect x="10" y="80" width="100" height="60" rx="10" fill="url(#flightG)" stroke="rgba(255,255,255,0.08)" />
          <text x="60" y="108" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="10">Search API</text>
          <text x="60" y="122" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Flight Offers</text>

          <rect x="190" y="80" width="100" height="60" rx="10" fill="url(#flightG)" stroke="rgba(255,255,255,0.08)" />
          <text x="240" y="108" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="10">Validate Price</text>
          <text x="240" y="122" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Verify Seat Lock</text>

          <rect x="370" y="80" width="100" height="60" rx="10" fill="url(#flightG)" stroke="rgba(255,255,255,0.08)" />
          <text x="420" y="108" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="10">Create PNR</text>
          <text x="420" y="122" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Generate Locator</text>

          <rect x="530" y="80" width="110" height="60" rx="10" fill="url(#flightG)" stroke="rgba(255,255,255,0.08)" />
          <text x="585" y="108" textAnchor="middle" fill="#34d399" fontWeight="bold" fontSize="10">Issue Ticket</text>
          <text x="585" y="122" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Queue Sync</text>
        </svg>
      </div>
    );
  }

  if (type === "car-rental-engine") {
    return (
      <div className="w-full bg-[#0d0a1b]/60 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center space-y-4 my-8 overflow-x-auto">
        <span className="text-[10px] bg-secondary/10 text-secondary px-3 py-1 rounded-full border border-secondary/20 font-bold uppercase tracking-wider">
          Car Rental Aggregator Engine Architecture
        </span>
        <svg className="w-full min-w-[500px] max-w-[650px] h-60 text-white font-sans text-xs" viewBox="0 0 650 240" fill="none">
          <defs>
            <linearGradient id="carGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(14,165,233,0.15)" />
              <stop offset="100%" stopColor="rgba(139,92,246,0.05)" />
            </linearGradient>
          </defs>

          <path d="M120 120h100M320 120h100M420 120L510 60M420 120l90 60M420 120h90" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="3 3" />

          <rect x="20" y="90" width="100" height="60" rx="10" fill="url(#carGrad)" stroke="rgba(255,255,255,0.08)" />
          <text x="70" y="118" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="10">User Request</text>
          <text x="70" y="132" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">"LAX Airport Pick"</text>

          <rect x="220" y="90" width="100" height="60" rx="10" fill="url(#carGrad)" stroke="rgba(255,255,255,0.08)" />
          <text x="270" y="118" textAnchor="middle" fill="#22d3ee" fontWeight="bold" fontSize="10">API Middleware</text>
          <text x="270" y="132" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Parallell Broker</text>

          <rect x="510" y="30" width="110" height="40" rx="8" fill="url(#carGrad)" stroke="rgba(255,255,255,0.08)" />
          <text x="565" y="55" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="9">Cartrawler API</text>

          <rect x="510" y="100" width="110" height="40" rx="8" fill="url(#carGrad)" stroke="rgba(255,255,255,0.08)" />
          <text x="565" y="125" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="9">Rentalcars API</text>

          <rect x="510" y="170" width="110" height="40" rx="8" fill="url(#carGrad)" stroke="rgba(255,255,255,0.08)" />
          <text x="565" y="195" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="9">Hertz Direct API</text>
        </svg>
      </div>
    );
  }

  if (type === "oauth-token-flow") {
    return (
      <div className="w-full bg-[#0d0a1b]/60 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center space-y-4 my-8 overflow-x-auto">
        <span className="text-[10px] bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 font-bold uppercase tracking-wider">
          GDS OAuth2 Session Token Caching Flow
        </span>
        <svg className="w-full min-w-[500px] max-w-[650px] h-60 text-white font-sans text-xs" viewBox="0 0 650 240" fill="none">
          <defs>
            <linearGradient id="oauthG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(167,139,250,0.15)" />
              <stop offset="100%" stopColor="rgba(14,165,233,0.05)" />
            </linearGradient>
          </defs>

          <path d="M120 120h90M310 120h90M400 90V50h110M400 150v40h110" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="3 3" />

          <rect x="20" y="90" width="100" height="60" rx="10" fill="url(#oauthG)" stroke="rgba(255,255,255,0.08)" />
          <text x="70" y="118" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="10">API Request</text>
          <text x="70" y="132" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">GDS Query Call</text>

          <rect x="210" y="90" width="100" height="60" rx="10" fill="url(#oauthG)" stroke="rgba(255,255,255,0.08)" />
          <text x="260" y="115" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="10">Redis Check</text>
          <text x="260" y="128" textAnchor="middle" fill="#34d399" fontSize="8">Valid &rarr; Use Token</text>
          <text x="260" y="140" textAnchor="middle" fill="#ef4444" fontSize="8">Expired &rarr; Re-Auth</text>

          <rect x="510" y="20" width="120" height="50" rx="8" fill="url(#oauthG)" stroke="rgba(255,255,255,0.08)" />
          <text x="570" y="45" textAnchor="middle" fill="#34d399" fontWeight="bold" fontSize="9">Use Cached Token</text>
          <text x="570" y="57" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Instant API Call</text>

          <rect x="510" y="170" width="120" height="50" rx="8" fill="url(#oauthG)" stroke="rgba(255,255,255,0.08)" />
          <text x="570" y="195" textAnchor="middle" fill="#ef4444" fontWeight="bold" fontSize="9">Amadeus Auth Server</text>
          <text x="570" y="207" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Fetch & Cache Token</text>
        </svg>
      </div>
    );
  }

  if (type === "ticketing-queue") {
    return (
      <div className="w-full bg-[#0d0a1b]/60 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center space-y-4 my-8 overflow-x-auto">
        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 font-bold uppercase tracking-wider">
          GDS Ticketing Queue & Webhook Synchronization
        </span>
        <svg className="w-full min-w-[500px] max-w-[650px] h-60 text-white font-sans text-xs" viewBox="0 0 650 240" fill="none">
          <defs>
            <linearGradient id="tickG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(52,211,153,0.15)" />
              <stop offset="100%" stopColor="rgba(14,165,233,0.05)" />
            </linearGradient>
          </defs>

          <path d="M90 100h70M240 100h60M380 100h60M520 100h60" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="3 3" />

          <rect x="10" y="70" width="80" height="60" rx="8" fill="url(#tickG)" stroke="rgba(255,255,255,0.08)" />
          <text x="50" y="95" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="9">1. Stripe Pay</text>
          <text x="50" y="108" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Webhook Confirmed</text>

          <rect x="160" y="70" width="80" height="60" rx="8" fill="url(#tickG)" stroke="rgba(255,255,255,0.08)" />
          <text x="200" y="95" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="9">2. Queue Route</text>
          <text x="200" y="108" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Amadeus Ticketing</text>

          <rect x="300" y="70" width="80" height="60" rx="8" fill="url(#tickG)" stroke="rgba(255,255,255,0.08)" />
          <text x="340" y="95" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="9">3. PNR Update</text>
          <text x="340" y="108" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Ticket Generated</text>

          <rect x="440" y="70" width="80" height="60" rx="8" fill="url(#tickG)" stroke="rgba(255,255,255,0.08)" />
          <text x="480" y="95" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="9">4. Dispatch</text>
          <text x="480" y="108" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">E-ticket Send</text>

          <rect x="560" y="70" width="80" height="60" rx="8" fill="url(#tickG)" stroke="rgba(255,255,255,0.08)" />
          <text x="600" y="95" textAnchor="middle" fill="#34d399" fontWeight="bold" fontSize="9">5. Notify</text>
          <text x="600" y="108" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="8">Email & SMS Live</text>
        </svg>
      </div>
    );
  }

  return null;
}
