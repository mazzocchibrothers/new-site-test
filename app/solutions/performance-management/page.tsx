import type { Metadata } from "next";
import { TrendingUp } from "lucide-react";
import { SolutionPage } from "@/components/solution-page";

export const metadata: Metadata = {
  title: "Performance Management — Replace Opinion with Objective Data",
  description:
    "Skillvue integrates objective skill assessments into your performance cycles — reducing bias, improving calibration, and giving every manager a data-backed starting point.",
};

export default function PerformanceManagementPage() {
  return (
    <SolutionPage
      badge="Performance Management"
      headline="If results are measured by KPIs, why are competencies still measured by opinions?"
      subheadline="Skillvue integrates objective skill assessments into your performance cycles — reducing bias, improving calibration, and giving every manager a data-backed starting point before they write a single review."
      problemHeadline="The blind spots in your performance decisions"
      painCards={[
        {
          pain: "Manager subjectivity drives everything",
          context:
            "Criteria exist, but evaluations are filtered through each manager's lens — biased by recency, visibility, and personal dynamics.",
        },
        {
          pain: "Evaluations are not comparable",
          context:
            "Team A in London uses different standards than Team B in Milan. No way to benchmark or calibrate across the organisation.",
        },
        {
          pain: "Negative KPIs do not equal individual failure",
          context:
            "How do you tell whether a poor result reflects individual performance or management quality? Without objective competency data, you cannot.",
        },
      ]}
      shiftHeadline="From subjective reviews to objective-subjective linkage"
      shiftRows={[
        {
          old: "Reviews driven by manager opinion and recency bias",
          new: "Reviews informed by objective skill data as a calibration starting point",
        },
        {
          old: "No way to benchmark performance across geographies",
          new: "Consistent competency scores enable true cross-team and cross-market calibration",
        },
        {
          old: "Calibration sessions dominated by loudest voices",
          new: "Data-backed conversations grounded in evidence, not anecdote",
        },
        {
          old: "Poor performers identified too late or not at all",
          new: "Skill gaps visible in real time — enabling early intervention before they become expensive problems",
        },
      ]}
      pillarsHeadline="Objective insight at every stage of your performance cycle"
      pillars={[
        {
          title: "Bias Reduction",
          description:
            "Structured competency assessments provide an objective layer that counteracts recency bias, halo effects, and proximity bias — making every review fairer.",
        },
        {
          title: "Calibration at Scale",
          description:
            "Consistent scores across teams, geographies, and business units. HR and senior leaders can finally benchmark performance with confidence.",
        },
        {
          title: "Individual Development Paths",
          description:
            "Skill gap data at individual level feeds directly into personalised development plans — connecting performance management to L&D investment.",
        },
      ]}
      ctaHeadline="Ready to make performance reviews objective?"
      icon={TrendingUp}
      color="#ec4899"
      relatedSolutions={[
        { href: "/solutions/talent-acquisition", label: "Talent Acquisition" },
        { href: "/solutions/learning-development", label: "Learning & Development" },
        { href: "/solutions/internal-mobility", label: "Internal Mobility" },
        { href: "/product-overview", label: "Platform Overview" },
        { href: "/science", label: "Our Science" },
      ]}
    />
  );
}
