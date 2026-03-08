import type { Metadata } from "next";
import { Target } from "lucide-react";
import { SolutionPage } from "@/components/solution-page";

export const metadata: Metadata = {
  title: "Talent Acquisition — Stop Gambling on Hiring",
  description:
    "Skillvue replaces guesswork with science at scale. AI-powered assessments surface top candidates, cut early turnover, and make every hiring decision defensible.",
};

export default function TalentAcquisitionPage() {
  return (
    <SolutionPage
      badge="Talent Acquisition"
      headline="Stop gambling on hiring. Start predicting who will perform."
      subheadline="Skillvue replaces guesswork with science at scale. AI-powered assessments customised to your roles and leadership model surface top candidates, cut early turnover, and make every hiring decision defensible."
      problemHeadline="The blind spots in your hiring decisions"
      problemStatement="How do you really know who will perform before the interview? How do you make screening predictive and comparable at scale? How do you cut early turnover and mismatch from day one?"
      painCards={[
        {
          pain: "30–40% of hires fail within 18 months",
          context:
            "Costing 3–4x salary each time — before you count the opportunity cost of a vacant role.",
        },
        {
          pain: "Screening does not scale",
          context:
            "Manual CV review degrades quality as volume increases. Different countries, different standards, no comparability.",
        },
        {
          pain: "Interviews predict nothing",
          context:
            "Unstructured interviews have among the lowest predictive validity of any selection method, yet they drive most hiring decisions.",
        },
      ]}
      shiftHeadline="From CV screening to skill intelligence"
      shiftRows={[
        {
          old: "CV screening + gut feeling",
          new: "AI-powered skill assessments from the top of the funnel",
        },
        {
          old: "Unstructured interviews with no comparability",
          new: "Structured, psychometrically validated evaluations across every candidate",
        },
        {
          old: "Quality degrades as volume increases",
          new: "Same scientific rigor whether you assess 10 or 10,000 candidates",
        },
        {
          old: "Hiring decisions made on who felt right",
          new: "Hiring decisions backed by objective scores, evidence, and explainable recommendations",
        },
        {
          old: "Early turnover as a cost of doing business",
          new: "Predictive matching that reduces mismatch from day one",
        },
      ]}
      pillarsHeadline="Skillvue adds value at every step of the hiring funnel"
      pillars={[
        {
          title: "Pre-Screening (Top of Funnel)",
          description:
            "Short assessments on suitability and killer skills via web app or WhatsApp. Reduce manual effort, accelerate pre-selection, filter for objective eligibility before deeper assessment.",
        },
        {
          title: "Screening (Mid Funnel)",
          description:
            "Assessments on soft skills, hard skills, potential, and traits. Standardised evaluation that removes bias and produces comparable, predictive shortlists.",
        },
        {
          title: "In-Depth (Late Funnel)",
          description:
            "Deep assessments on potential, traits, and skills for professional+ roles. Cross-job insights, detailed candidate profiles, and in-person interview support packages.",
        },
      ]}
      kpis={[
        {
          label: "Bad hire rate",
          value: "<15%",
          description: "Down from 30–40% industry average",
        },
        {
          label: "Early turnover (0–18 months)",
          value: "<10%",
          description: "Down from 20–30% without objective screening",
        },
        {
          label: "Hiring success rate",
          value: "85%+",
          description: "Across all role levels and geographies",
        },
      ]}
      ctaHeadline="Ready to hire with confidence?"
      icon={Target}
      color="#f97316"
      relatedSolutions={[
        { href: "/solutions/performance-management", label: "Performance Management" },
        { href: "/solutions/internal-mobility", label: "Internal Mobility" },
        { href: "/solutions/learning-development", label: "Learning & Development" },
        { href: "/product-overview", label: "Platform Overview" },
        { href: "/science", label: "Our Science" },
      ]}
    />
  );
}
