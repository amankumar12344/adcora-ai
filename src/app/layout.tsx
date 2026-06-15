import type { Metadata } from "next";
import "./globals.css";
import ChatbotWidget from "@/components/public/ChatbotWidget";
import Preloader from "@/components/public/Preloader";

export const metadata: Metadata = {
  title: "AdcoraAI | Building the Future with AI & Digital Excellence",
  description:
    "AdcoraAI is a premium AI automation and digital solutions agency delivering enterprise-grade custom software, marketing, and creative tech products.",
  metadataBase: new URL("https://adcoraai.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "AdcoraAI | Building the Future with AI & Digital Excellence",
    description: "AdcoraAI is a premium AI automation and digital solutions agency delivering enterprise-grade custom software, marketing, and creative tech products.",
    url: "https://adcoraai.com",
    siteName: "AdcoraAI",
    images: [
      {
        url: "https://adcoraai.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AdcoraAI - Autonomous Enterprise Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdcoraAI | Building the Future with AI & Digital Excellence",
    description: "AdcoraAI is a premium AI automation and digital solutions agency delivering enterprise-grade custom software, marketing, and creative tech products.",
    images: ["https://adcoraai.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="font-sans antialiased text-foreground bg-background min-h-screen flex flex-col">
        <Preloader />
        {children}
        <ChatbotWidget />
      </body>
    </html>
  );
}
