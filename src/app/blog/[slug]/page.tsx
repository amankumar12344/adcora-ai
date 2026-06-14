import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, Share2, HelpCircle, BookOpen, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { blogPosts } from "@/lib/blogData";
import ScrollIndicator from "@/components/public/blog/ScrollIndicator";
import BlogDiagram from "@/components/public/blog/BlogDiagrams";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static parameters for static site generation (SSG)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic metadata generation for SEO tags
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | AdcoraAI",
    };
  }

  return {
    title: `${post.title} | AdcoraAI Insights`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | AdcoraAI Insights`,
      description: post.excerpt,
      type: "article",
      url: `https://adcoraai.com/blog/${post.slug}`,
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Parse headers to construct Table of Contents
  const headers = post.sections
    .filter((sec) => sec.type === "header")
    .map((sec, idx) => ({
      text: sec.content || "",
      id: `sec-${idx}`,
    }));

  // Filter recent related articles
  const recentPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <ScrollIndicator />

      <main className="min-h-screen bg-background text-foreground pt-32 pb-20 relative overflow-hidden">
        {/* Background glow overlay */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[130px] pointer-events-none" />

        <div className="page-container relative z-10">
          
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold text-muted hover:text-white transition-colors uppercase tracking-wider group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Articles</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Main Article Content */}
            <article className="lg:col-span-8 space-y-6">
              
              {/* Meta Header */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4 items-center text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                  <span className="text-secondary font-bold">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                  {post.title}
                </h1>

                <div className="flex items-center gap-3 pt-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                    <User className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">{post.author}</span>
                    <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Travel Tech Architect</span>
                  </div>
                </div>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-b border-white/5 pb-6">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-white/[0.02] border border-white/5 rounded-lg text-[10px] font-bold text-muted-foreground uppercase tracking-wide">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Cover Image */}
              <div className="w-full h-64 sm:h-96 rounded-2xl overflow-hidden border border-white/5 bg-[#0f0a1d] my-4">
                <img
                  src={`/images/blog/${post.slug}.png`}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Body Rendering Engine */}
              <div className="space-y-6 pt-4">
                {post.sections.map((section, idx) => {
                  if (section.type === "header") {
                    return (
                      <h2
                        key={idx}
                        id={`sec-${post.sections.slice(0, idx).filter((s) => s.type === "header").length}`}
                        className="font-display text-2xl sm:text-3xl font-black text-white pt-8 pb-3 border-b border-white/5 scroll-mt-24"
                      >
                        {section.content}
                      </h2>
                    );
                  }

                  if (section.type === "subheader") {
                    return (
                      <h3
                        key={idx}
                        className="font-display text-lg sm:text-xl font-bold text-white pt-6 pb-2 scroll-mt-24"
                      >
                        {section.content}
                      </h3>
                    );
                  }

                  if (section.type === "paragraph") {
                    return (
                      <p key={idx} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    );
                  }

                  if (section.type === "list") {
                    return (
                      <ul key={idx} className="list-disc pl-6 space-y-2 text-sm sm:text-base text-muted-foreground my-4">
                        {section.items?.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    );
                  }

                  if (section.type === "alert") {
                    return (
                      <div key={idx} className="alert-info my-6 p-4 rounded-xl flex items-start gap-3 border border-info/20 bg-info/5 text-info">
                        <HelpCircle className="h-5 w-5 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm font-semibold">{section.content}</p>
                      </div>
                    );
                  }

                  if (section.type === "table") {
                    return (
                      <div key={idx} className="overflow-x-auto my-6 border border-white/5 rounded-xl">
                        <table className="w-full text-left border-collapse text-xs sm:text-sm">
                          <thead>
                            <tr className="bg-white/[0.02] border-b border-white/5">
                              {section.headers?.map((header, i) => (
                                <th key={i} className="p-4 font-bold text-white uppercase tracking-wider text-[10px]">{header}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.rows?.map((row, i) => (
                              <tr key={i} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                                {row.map((cell, j) => (
                                  <td key={j} className="p-4 text-muted-foreground leading-normal font-medium">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }

                  if (section.type === "diagram") {
                    return <BlogDiagram key={idx} type={section.diagramType!} />;
                  }

                  return null;
                })}
              </div>

              {/* Bottom SLA Consultation CTA */}
              <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                <div className="space-y-4 relative z-10 text-left">
                  <span className="text-[10px] font-extrabold text-secondary tracking-widest uppercase block">DEVELOPMENT AGENCY PARTNER</span>
                  <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                    How AdcoraAI Can Help You Build This
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-xl">
                    At AdcoraAI, we specialize in travel technology development — from API integrations and booking engine architecture to full-stack travel portal development for OTAs, DMCs, and travel startups. Our team handles the end-to-end engineering so you can focus on growing your business.
                  </p>
                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="btn-primary py-2.5 px-5 text-xs rounded-lg shadow-glow-primary flex items-center gap-1.5 group"
                    >
                      <span>Book Free Consultation</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <a
                      href="mailto:hello@adcoraai.com"
                      className="btn-glass py-2.5 px-5 text-xs rounded-lg flex items-center gap-1.5"
                    >
                      <span>hello@adcoraai.com</span>
                    </a>
                  </div>
                </div>
              </div>

            </article>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
              
              {/* Table of Contents */}
              {headers.length > 0 && (
                <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4 text-left">
                  <h4 className="font-display text-xs font-black uppercase tracking-widest text-white border-b border-white/5 pb-2">
                    Table of Contents
                  </h4>
                  <nav className="flex flex-col gap-2.5 text-xs font-semibold">
                    {headers.map((h, index) => (
                      <a
                        key={h.id}
                        href={`#sec-${index}`}
                        className="text-muted hover:text-white transition-colors flex items-start gap-2 leading-tight"
                      >
                        <span className="text-secondary font-mono">0{index + 1}.</span>
                        <span>{h.text}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Related Posts */}
              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4 text-left">
                <h4 className="font-display text-xs font-black uppercase tracking-widest text-white border-b border-white/5 pb-2">
                  Recent Insights
                </h4>
                <div className="space-y-4">
                  {recentPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="block space-y-1 group"
                    >
                      <span className="text-[10px] text-secondary font-bold uppercase tracking-wider block">
                        {p.category}
                      </span>
                      <span className="font-display font-bold text-white text-xs leading-snug block group-hover:text-primary transition-colors line-clamp-2">
                        {p.title}
                      </span>
                      <span className="text-[9px] text-muted-foreground block">{p.date}</span>
                    </Link>
                  ))}
                </div>
              </div>

            </aside>

          </div>

          {/* Related Articles Footer Grid */}
          <div className="pt-16 border-t border-white/5 mt-16 space-y-8 text-left">
            <h3 className="font-display text-2xl font-black text-white tracking-tight">
              Explore More Technical Case Studies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="glass-card flex flex-col justify-between border border-white/5 hover:border-primary/20 transition-all duration-300 p-0 overflow-hidden group cursor-pointer"
                  >
                    <div className="h-32 relative overflow-hidden bg-[#0f0a1d]">
                      <img
                        src={`/images/blog/${relatedPost.slug}.png`}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 space-y-2 flex-grow flex flex-col justify-between">
                      <div className="space-y-1">
                        <span className="text-[9px] text-secondary font-bold uppercase tracking-wider block">
                          {relatedPost.category}
                        </span>
                        <h4 className="font-display font-bold text-white text-xs leading-snug group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                      </div>
                      <div className="text-[9px] text-muted-foreground pt-2 border-t border-white/5 flex justify-between items-center">
                        <span>{relatedPost.date}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
