import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { PageEntrance } from "@/components/page-entrance";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Skillvue — AI-Powered Talent Intelligence Platform",
    template: "%s | Skillvue",
  },
  description:
    "Skillvue is the AI-powered talent intelligence platform that turns static HR processes into predictive, objective insights. Assess skills, predict potential, and make every people decision defensible.",
  keywords: [
    "talent intelligence",
    "AI assessments",
    "skills assessment",
    "talent acquisition",
    "performance management",
    "HR technology",
    "workforce analytics",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Skillvue",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="antialiased">
        <PageEntrance />
        <ScrollProgress />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
