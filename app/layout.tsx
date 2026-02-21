import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Namma Growth | Bangalore's #1 AI Marketing & Automation Agency",
  description: "Scale your Bangalore business with AI-powered marketing. WhatsApp automation, performance marketing & SEO. Trusted by 100+ startups.",
  keywords: ["AI Marketing Bangalore", "Digital Marketing Agency Bangalore", "WhatsApp Automation India", "SEO Services Bangalore"],
  openGraph: {
    title: "Namma Growth - Scale Faster with AI",
    description: "Bangalore's premium AI marketing and automation agency.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
