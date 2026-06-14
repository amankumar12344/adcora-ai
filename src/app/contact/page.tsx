import { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ContactFormSection from "@/components/public/contact/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact & Booking | AdcoraAI",
  description: "Schedule a 30-minute diagnostic session with AdcoraAI or submit a project intake brief to outline your software engineering and AI workflow requirements.",
  openGraph: {
    title: "Contact & Booking | AdcoraAI",
    description: "Schedule a 30-minute diagnostic session with AdcoraAI or submit a project intake brief to outline your software engineering and AI workflow requirements.",
    type: "website",
    url: "https://adcoraai.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-background text-foreground px-6 md:px-12 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />

        {/* Hero Area */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 relative z-10">
          <div className="badge-primary">Consultation & Contact</div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            Initiate Your <br className="hidden sm:inline" />
            <span className="gradient-text">Project Architecture</span>
          </h1>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Choose to outline your goals with our secure intake brief, or schedule a diagnostic call directly with our engineering team.
          </p>
        </div>

        {/* Form workspace */}
        <div className="relative z-10">
          <ContactFormSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
