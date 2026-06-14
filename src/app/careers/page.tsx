import { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import CareersWorkspace from "@/components/public/careers/CareersWorkspace";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Careers | AdcoraAI",
  description: "Join AdcoraAI and help shape the future of enterprise AI solutions, automation workflows, and custom software systems.",
  openGraph: {
    title: "Careers | AdcoraAI",
    description: "Join AdcoraAI and help shape the future of enterprise AI solutions, automation workflows, and custom software systems.",
    type: "website",
    url: "https://adcoraai.com/careers",
  },
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-background text-foreground px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />

        {/* Hero Area */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-6 mb-20 relative z-10">
          <div className="badge-primary">Careers</div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            Build the Future of <br className="hidden sm:inline" />
            <span className="gradient-text">Autonomous Enterprise</span>
          </h1>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            We are looking for elite software designers, AI automation architects, and product leads to build premium, production-grade solutions.
          </p>
        </ScrollReveal>

        {/* Workspace Component containing the benefits, hiring process, open roles, and form */}
        <div className="relative z-10">
          <CareersWorkspace />
        </div>
      </main>
      <Footer />
    </>
  );
}
