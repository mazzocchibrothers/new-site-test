import type { Metadata } from "next";
import { HomePageClient } from "@/components/home-page-client";

export const metadata: Metadata = {
  title: "Skillvue — AI-Powered Talent Intelligence Platform",
  description:
    "Stop gambling on people decisions. Skillvue replaces guesswork with science at scale — AI-powered assessments that make every hire, review, and promotion defensible.",
};

export default function HomePage() {
  return <HomePageClient />;
}
