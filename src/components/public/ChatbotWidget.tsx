"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, PhoneCall, Calendar, HelpCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  type?: "text" | "options" | "calendar";
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text: "Hi! Welcome to AdcoraAI. How can we help you build the future today?",
      type: "options",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const triggerAIResponse = async (userText: string, updatedMessages: Message[]) => {
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages.slice(-5), // Send last 5 messages for context
        }),
      });

      if (!response.ok) {
        throw new Error("API call failed");
      }

      const data = await response.json();
      if (data.error || !data.reply) {
        throw new Error(data.error || "No response received");
      }

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          sender: "ai",
          text: data.reply,
        },
      ]);
    } catch (err) {
      // Fallback to local keyword-based categories if API is not configured or fails
      setIsTyping(false);
      
      const txt = userText.toLowerCase();
      
      // Smart categories definition
      const categories = [
        {
          intent: "greetings",
          keywords: ["hi", "hello", "hey", "greetings", "hola", "how are you", "who are you", "yo", "supp"],
          response: "Hello! I'm the AdcoraAI digital assistant. I can guide you through our AI automations, custom software engineering, e-commerce builds, tech stacks, or book a quick diagnostic session. What are you looking to build today?"
        },
        {
          intent: "ai",
          keywords: ["ai", "automation", "agent", "bot", "llm", "rag", "workflow", "automate", "chatgpt", "openai"],
          response: "Our AI & Automation division builds custom LLM agents, connects enterprise tools with serverless workflows, and designs RAG (Retrieval-Augmented Generation) databases. This reduces manual operations by up to 80% and automates customer support and lead pipelines."
        },
        {
          intent: "software",
          keywords: ["software", "website", "web", "app", "custom development", "application", "front", "back", "fullstack", "development", "code"],
          response: "We engineer bespoke full-stack applications using React, Next.js, and Node.js. From robust backend database layers to highly performance-tuned frontend portals, we build clean, secure systems tailored to scale."
        },
        {
          intent: "ecommerce",
          keywords: ["ecommerce", "e-commerce", "store", "shopify", "shop", "checkout", "cart", "sales", "stripe"],
          response: "Our Ecommerce Solutions focus on headless storefronts, GraphQL APIs, lightning-fast pages, and multi-channel synchronization. We sync inventory, checkouts, and customer databases in real-time."
        },
        {
          intent: "creative",
          keywords: ["creative", "design", "brand", "ui", "ux", "figma", "logo", "styling", "layout", "graphics"],
          response: "We design pixel-perfect, premium user experiences and robust Figma design systems. Using custom animation tokens and WebGL animations, we create engaging digital assets that elevate your brand presence."
        },
        {
          intent: "marketing",
          keywords: ["marketing", "seo", "ads", "growth", "traffic", "conversion", "analytics", "cro"],
          response: "We deploy automated SEO auditing engines and edge CRO (Conversion Rate Optimization) setups. We leverage data-driven lead capture flows and conversion tracking to accelerate your sales pipelines."
        },
        {
          intent: "social",
          keywords: ["social", "media", "instagram", "linkedin", "twitter", "post", "scheduling", "syndication"],
          response: "We build serverless social cron schedules and automated publishing tools. We help client brands maintain an active multi-channel presence with unified content syndication."
        },
        {
          intent: "pricing",
          keywords: ["price", "pricing", "cost", "charge", "estimate", "free", "quote", "how much", "rate", "fee"],
          response: "Every enterprise solution is customized. We offer scoping consultations where we audit your current stack and provide a blueprint alongside a fixed-price estimate. Feel free to use the 'Book Appointment' option or chat with us on WhatsApp!"
        },
        {
          intent: "tech",
          keywords: ["tech", "stack", "nextjs", "supabase", "react", "tailwind", "typescript", "database", "postgres", "node", "coding"],
          response: "Our standard production stack consists of Next.js (App Router), TypeScript, TailwindCSS, Framer Motion for graphics, and Supabase / PostgreSQL for database layers. This guarantees optimal SEO, speed, and scaling capability."
        },
        {
          intent: "portfolio",
          keywords: ["portfolio", "work", "projects", "case studies", "done", "experience", "client", "sample"],
          response: "You can view our case studies in the 'Portfolio' section of our site. Some highlights include Aether CRM Agent (Next.js/Supabase CRM), Apex Headless Storefront (GraphQL Ecommerce), and Optima Marketing Dashboard (analytics synchronization)."
        },
        {
          intent: "contact",
          keywords: ["contact", "appointment", "call", "meet", "schedule", "email", "phone", "book", "whatsapp"],
          response: "You can schedule a calendar slot right here in this chat by selecting the 'Book Appointment' button, or reach our engineers directly on WhatsApp using the button below for a fast response."
        },
        {
          intent: "careers",
          keywords: ["career", "careers", "job", "jobs", "hiring", "apply", "work at", "internship", "position"],
          response: "We are always looking for talented developers, AI prompt engineers, and creative designers! Head over to our 'Careers' page to see open roles and apply directly."
        }
      ];

      let bestMatch = null;
      let highestScore = 0;

      for (const cat of categories) {
        let score = 0;
        for (const kw of cat.keywords) {
          if (txt.includes(kw)) {
            score++;
          }
        }
        if (score > highestScore) {
          highestScore = score;
          bestMatch = cat;
        }
      }

      let replyText = "I appreciate that. Our specialists can help you deploy this. Would you like to chat with an engineer on WhatsApp for instant feedback?";

      if (bestMatch && highestScore > 0) {
        replyText = bestMatch.response;
      } else {
        if (txt.includes("service") || txt.includes("division") || txt.includes("what you do")) {
          replyText = "We provide AI Automation, Custom Software, Creative UI/UX Design, E-commerce, and Marketing Solutions. Which one aligns with your goals?";
        } else if (txt.includes("help") || txt.includes("support")) {
          replyText = "I can answer questions about our services, tech stack, pricing, and portfolio. You can also book an appointment here or chat with us on WhatsApp!";
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          sender: "ai",
          text: replyText,
        },
      ]);
    }
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = inputText;
    setInputText("");
    const newMsg: Message = {
      id: String(Date.now()),
      sender: "user",
      text: userMsg,
    };
    const updatedMessages = [...messages, newMsg];
    setMessages(updatedMessages);

    triggerAIResponse(userMsg, updatedMessages);
  };

  const handleOptionClick = (option: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        sender: "user",
        text: option,
      },
    ]);

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const aiMsg: Message = { id: String(Date.now()), sender: "ai", text: "" };

      if (option === "Recommend Services") {
        aiMsg.text = "Tell me about your product. Are you seeking operational AI automation, custom full-stack software, or brand design systems?";
      } else if (option === "Book Appointment") {
        aiMsg.text = "Sure! Select a convenient time slot from our next available calendar bookings:";
        aiMsg.type = "calendar";
      } else if (option === "Ask Questions") {
        aiMsg.text = "Ask me anything about AdcoraAI credentials, technology stacks, compliance, or previous case studies.";
      } else if (option === "Collect Lead") {
        aiMsg.text = "Excellent! Please type your work email address, and our systems will log your operational requirements automatically.";
      }

      setMessages((prev) => [...prev, aiMsg]);
    }, 800);
  };

  const handleCalendarSelect = (slot: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        sender: "user",
        text: `Schedule: ${slot}`,
      },
      {
        id: String(Date.now() + 1),
        sender: "ai",
        text: `Perfect! Time slot ${slot} has been reserved. Please enter your email to finalize the calendar invite.`,
      },
    ]);
  };

  return (
    <div className="relative">
      
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-button-float shadow-glow-primary focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Open AI Assistant"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Chat window panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="chat-window border border-white/10 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary to-secondary flex items-center justify-between shadow-glass">
              <div className="flex items-center gap-2.5">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <Bot className="h-5 w-5 text-white" />
                <span className="font-display font-bold text-sm text-white">AdcoraAI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white focus:outline-none"
                aria-label="Close Chat"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Conversation Feed */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 flex flex-col bg-card/20">
              {messages.map((msg) => (
                <div key={msg.id} className="flex flex-col gap-1.5">
                  <div className={msg.sender === "user" ? "chat-bubble-user" : "chat-bubble-ai"}>
                    {msg.text}
                  </div>
                  
                  {/* Options buttons preview */}
                  {msg.sender === "ai" && msg.type === "options" && (
                    <div className="flex flex-col gap-2 mt-2 w-fit">
                      <button
                        onClick={() => handleOptionClick("Recommend Services")}
                        className="btn-glass py-1.5 px-3 text-xs text-left rounded-lg flex items-center gap-1.5"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-secondary" />
                        <span>Recommend Services</span>
                      </button>
                      <button
                        onClick={() => handleOptionClick("Book Appointment")}
                        className="btn-glass py-1.5 px-3 text-xs text-left rounded-lg flex items-center gap-1.5"
                      >
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        <span>Book Appointment</span>
                      </button>
                      <button
                        onClick={() => handleOptionClick("Ask Questions")}
                        className="btn-glass py-1.5 px-3 text-xs text-left rounded-lg flex items-center gap-1.5"
                      >
                        <HelpCircle className="h-3.5 w-3.5 text-accent" />
                        <span>Ask Questions</span>
                      </button>
                    </div>
                  )}

                  {/* Calendar booking mock slots */}
                  {msg.sender === "ai" && msg.type === "calendar" && (
                    <div className="grid grid-cols-2 gap-2 mt-2 max-w-[280px]">
                      {["Mon 10:00 AM", "Mon 02:00 PM", "Tue 11:30 AM", "Wed 04:00 PM"].map((slot) => (
                        <button
                          key={slot}
                          onClick={() => handleCalendarSelect(slot)}
                          className="btn-glass py-2 text-center text-[0.7rem] font-bold rounded-lg border border-white/5 hover:border-primary/40 transition-colors"
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="chat-bubble-ai py-3 px-4 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="h-1.5 w-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="h-1.5 w-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              )}
              
              <div ref={chatEndRef} />
            </div>

            {/* WhatsApp handoff & message input */}
            <div className="p-3 bg-white/5 border-t border-white/5 flex flex-col gap-2 relative z-10">
              <div className="flex flex-col gap-1.5 w-full">
                <a
                  href="https://wa.me/919153765913?text=Hi%20AdcoraAI,%20I'm%20chatting%20with%20your%20site%20bot%20and%20would%20like%20to%20discuss%20project%20scopes."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-500 transition-colors text-white text-center rounded-lg text-[10px] font-semibold flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <svg className="h-3 w-3 fill-white" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.238 1.45 4.82 1.452 5.432-.002 9.85-4.42 9.853-9.852.002-2.63-1.023-5.101-2.885-6.963C16.573 1.928 14.102.926 11.47.924c-5.43.002-9.85 4.42-9.853 9.852.001 2.01.522 3.974 1.517 5.694l-.99 3.616 3.703-.972c1.668.91 3.3.01 3.3.01zm10.9-7.825c-.27-.136-1.602-.79-1.85-.882-.25-.091-.43-.136-.61.136-.18.27-.7.882-.857 1.058-.16.176-.32.197-.59.06-2.73-1.37-3.83-2.3-4.59-3.6-.2-.35-.02-.54.15-.71.16-.16.35-.41.52-.61.18-.2.24-.34.36-.57.12-.23.06-.43-.03-.61-.09-.18-.73-1.77-.99-2.4-.26-.62-.53-.54-.73-.55-.19-.01-.41-.01-.63-.01s-.57.08-.87.41c-.3.33-1.14 1.12-1.14 2.73s1.18 3.16 1.34 3.39c.16.22 2.32 3.54 5.62 4.97 3.01 1.3 3.62 1.04 4.9.86.72-.1 1.6-.65 1.83-1.26.23-.61.23-1.13.16-1.24-.07-.1-.26-.18-.53-.32z"/></svg>
                  <span>WhatsApp 1: +91 91537 65913</span>
                </a>
                <a
                  href="https://wa.me/918360607130?text=Hi%20AdcoraAI,%20I'm%20chatting%20with%20your%20site%20bot%20and%20would%20like%20to%20discuss%20project%20scopes."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-500 transition-colors text-white text-center rounded-lg text-[10px] font-semibold flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <svg className="h-3 w-3 fill-white" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.238 1.45 4.82 1.452 5.432-.002 9.85-4.42 9.853-9.852.002-2.63-1.023-5.101-2.885-6.963C16.573 1.928 14.102.926 11.47.924c-5.43.002-9.85 4.42-9.853 9.852.001 2.01.522 3.974 1.517 5.694l-.99 3.616 3.703-.972c1.668.91 3.3.01 3.3.01zm10.9-7.825c-.27-.136-1.602-.79-1.85-.882-.25-.091-.43-.136-.61.136-.18.27-.7.882-.857 1.058-.16.176-.32.197-.59.06-2.73-1.37-3.83-2.3-4.59-3.6-.2-.35-.02-.54.15-.71.16-.16.35-.41.52-.61.18-.2.24-.34.36-.57.12-.23.06-.43-.03-.61-.09-.18-.73-1.77-.99-2.4-.26-.62-.53-.54-.73-.55-.19-.01-.41-.01-.63-.01s-.57.08-.87.41c-.3.33-1.14 1.12-1.14 2.73s1.18 3.16 1.34 3.39c.16.22 2.32 3.54 5.62 4.97 3.01 1.3 3.62 1.04 4.9.86.72-.1 1.6-.65 1.83-1.26.23-.61.23-1.13.16-1.24-.07-.1-.26-.18-.53-.32z"/></svg>
                  <span>WhatsApp 2: +91 83606 07130</span>
                </a>
              </div>

              <form onSubmit={handleSend} className="chat-input p-0 border-none">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Write message..."
                  className="input-dark py-2 px-3 text-xs"
                />
                <button type="submit" className="btn-primary py-2 px-4 text-xs rounded-lg">
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
