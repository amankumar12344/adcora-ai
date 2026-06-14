import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import CaseStudyClient from "@/components/public/portfolio/CaseStudyClient";
import { portfolioProjects } from "@/lib/portfolioData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static routes for the build prerender
export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamic page metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: "Project Not Found | AdcoraAI",
    };
  }

  return {
    title: `${project.title} | Case Study Deep-Dive`,
    description: `Read the detailed technical case study for ${project.title}. Challenge: ${project.challenge.issues[0]}...`,
    openGraph: {
      title: `${project.title} | Case Study Deep-Dive`,
      description: `Read the detailed technical case study for ${project.title}. Challenge: ${project.challenge.issues[0]}...`,
      type: "article",
      url: `https://adcoraai.com/portfolio/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background text-foreground pt-32 pb-20 relative overflow-hidden">
        {/* Background glow overlay */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[130px] pointer-events-none" />

        {/* Dynamic Case Study Client */}
        <div className="page-container relative z-10">
          <CaseStudyClient project={project} />
        </div>
      </main>

      <Footer />
    </>
  );
}
