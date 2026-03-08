import type { Metadata } from "next";
import { Layers } from "lucide-react";
import { SolutionPage } from "@/components/solution-page";

export const metadata: Metadata = {
  title: "Project Resourcing — Staff on Verified Capability, Not Availability",
  description:
    "Skillvue gives project leaders and resourcing teams an objective view of who has the skills to deliver — replacing who is free with who is fit.",
};

export default function ProjectResourcingPage() {
  return (
    <SolutionPage
      badge="Project Resourcing"
      headline="Staff projects based on verified capability, not availability."
      subheadline="Skillvue gives project leaders and resourcing teams an objective view of who has the skills to deliver — replacing who is free with who is fit. Reduce delivery risk, improve team composition, and stop staffing in the dark."
      problemHeadline="Why projects underperform despite good intentions"
      painCards={[
        {
          pain: "Staffing by availability, not capability",
          context:
            "Project teams assembled based on who is free, not who has the right skills. Result: delivery delays, rework, and frustration.",
        },
        {
          pain: "No visibility on real skills across the organisation",
          context:
            "Managers rely on memory, reputation, and who they know — not verified competency data. Top performers are over-deployed; hidden talent stays invisible.",
        },
        {
          pain: "Performance variance is unexplained",
          context:
            "Team A delivers on time. Team B does not. Same tools, same size. The difference is people quality — but without objective data, you cannot diagnose it.",
        },
      ]}
      shiftHeadline="From availability-based staffing to skills-matched resourcing"
      shiftRows={[
        {
          old: "Teams assembled based on who is free",
          new: "Teams assembled based on verified skill data — right skills, right project, right time",
        },
        {
          old: "Managers rely on memory and reputation",
          new: "A live skills inventory searchable by skill, proficiency, and availability",
        },
        {
          old: "Delivery risk discovered mid-project",
          new: "Skill gaps identified before kickoff — enabling early upskilling or reassignment",
        },
        {
          old: "Top performers chronically over-deployed",
          new: "Balanced deployment across verified competencies — protecting your best people",
        },
      ]}
      pillarsHeadline="Skills-matched staffing that reduces delivery risk"
      pillars={[
        {
          title: "Skills-Matched Staffing",
          description:
            "Assemble project teams based on verified skill data. Match people to assignments based on what they can actually do — not who raised their hand.",
        },
        {
          title: "Real-Time Capability Visibility",
          description:
            "A live skills inventory across your entire workforce. Search by skill, proficiency level, and availability. Find the right person in minutes, not days.",
        },
        {
          title: "Delivery Risk Reduction",
          description:
            "Before a project kicks off, see whether the team has the skills to deliver. Identify gaps early, upskill or reassign before they become expensive problems.",
        },
      ]}
      ctaHeadline="Ready to staff projects with confidence?"
      icon={Layers}
      color="#06b6d4"
      relatedSolutions={[
        { href: "/solutions/talent-acquisition", label: "Talent Acquisition" },
        { href: "/solutions/internal-mobility", label: "Internal Mobility" },
        { href: "/solutions/learning-development", label: "Learning & Development" },
        { href: "/product-overview", label: "Platform Overview" },
        { href: "/science", label: "Our Science" },
      ]}
    />
  );
}
