import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogData";
import { portfolioProjects } from "@/lib/portfolioData";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://adcoraai.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/blog",
    "/contact",
    "/careers",
    "/privacy-policy",
    "/terms-conditions",
    "/cancellation-policy",
    "/refund-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic blog routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic portfolio routes
  const portfolioRoutes = portfolioProjects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...portfolioRoutes];
}
