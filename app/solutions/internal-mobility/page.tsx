import type { Metadata } from "next";
import { GitMerge } from "lucide-react";
import { SolutionPage } from "@/components/solution-page";

export const metadata: Metadata = {
  title: "Internal Mobility & Succession — Unlock the Talent You Already Have",
  description:
    "Skillvue maps skills and potential across your entire workforce — making internal talent visible, succession decisions data-driven, and mobility paths transparent.",
};

export default function InternalMobilityPage() {
  return (
    <SolutionPage
      badge="Internal Mobility & Succession"
      headline="Your next best hire might already work for you."
      subheadline="Skillvue maps skills and potential across your entire workforce, making internal talent visible, succession decisions data-driven, and mobility paths transparent."
      problemHeadline="The hidden talent crisis in your organisation"
      painCards={[
        {
          pain: "High potentials are invisible",
          context:
            "How many are already in the organisation but hidden — and at risk of leaving before you even act?",
        },
        {
          pain: "Succession pipelines are fiction",
          context:
            "60% of critical roles have zero or one ready successor. The next leadership crisis is already building.",
        },
        {
          pain: "Mobility is political, not meritocratic",
          context:
            "Internal moves happen only when someone asks or when it is already too late — based on proximity and politics, not verified competencies.",
        },
      ]}
      shiftHeadline="From talent guesswork to full workforce visibility"
      shiftRows={[
        {
          old: "Promotion decisions driven by manager opinion and visibility",
          new: "Objective, updated view of skills and potential across the entire organisation",
        },
        {
          old: "Horizontal moves only when someone asks or it is too late",
          new: "Internal moves matched on verified competencies, not politics or proximity",
        },
        {
          old: "M&A integrations turn into talent guesswork at scale",
          new: "Restructurings grounded in data: who has the skills, who needs development, where are the gaps",
        },
        {
          old: "Critical knowledge walks out with retiring employees",
          new: "Succession risk visible in real time — including knowledge concentration and retirement exposure",
        },
        {
          old: "Endless calibration rounds with no time for decisions",
          new: "Less time on process, more time on decisions — with the ability to track whether they worked",
        },
      ]}
      pillarsHeadline="End-to-end talent visibility, succession planning, and internal fills"
      pillars={[
        {
          title: "End-to-End Talent Visibility",
          description:
            "Continuous mapping of skills and potential to match capabilities with needs. Reduce turnover and replacement costs by seeing your full talent picture.",
        },
        {
          title: "Data-Driven Succession Planning",
          description:
            "Faster coverage of critical roles. Know who is ready now, who is ready in 6 months, and where gaps exist — before a crisis forces your hand.",
        },
        {
          title: "Faster Internal Fills",
          description:
            "Stronger engagement and retention through transparent, data-backed decisions that value existing talent. Cut external search costs by filling roles from within.",
        },
      ]}
      ctaHeadline="Ready to unlock the talent you already have?"
      icon={GitMerge}
      color="#3b82f6"
      relatedSolutions={[
        { href: "/solutions/talent-acquisition", label: "Talent Acquisition" },
        { href: "/solutions/performance-management", label: "Performance Management" },
        { href: "/solutions/learning-development", label: "Learning & Development" },
        { href: "/product-overview", label: "Platform Overview" },
        { href: "/science", label: "Our Science" },
      ]}
    />
  );
}
