import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { SolutionPage } from "@/components/solution-page";

export const metadata: Metadata = {
  title: "Learning & Development — Fund Training Where Gaps Actually Exist",
  description:
    "Skillvue gives L&D leaders objective, measurable data on where the real skill gaps are — so every training investment is targeted, measurable, and aligned to business impact.",
};

export default function LearningDevelopmentPage() {
  return (
    <SolutionPage
      badge="Learning & Development"
      headline="Stop funding generic training. Start focusing on the real skill gaps."
      subheadline="Skillvue gives L&D leaders objective, measurable data on where the real skill gaps are, at individual, team, and organisational level — so every training investment is targeted, measurable, and aligned to business impact."
      problemHeadline="Why L&D investment so rarely delivers measurable ROI"
      painCards={[
        {
          pain: "Near-zero visibility on actual capabilities",
          context:
            "People data lives in separate silos. Nobody connects the dots across the organisation to know what skills actually exist.",
        },
        {
          pain: "Programmes picked on gut feel",
          context:
            "Training budgets deployed based on manager requests and vendor catalogues, not evidence of where gaps actually exist.",
        },
        {
          pain: "ROI is a question nobody can answer",
          context:
            "We trained X people — but what was the business impact? Without before-and-after skill data, there is no answer.",
        },
      ]}
      shiftHeadline="From gut feel to skill intelligence in L&D"
      shiftRows={[
        {
          old: "People data in separate silos",
          new: "Skills measured objectively and benchmarked across the entire organisation",
        },
        {
          old: "Programmes picked on gut feel, not evidence",
          new: "Budget allocated where gaps are widest and business impact is highest",
        },
        {
          old: "Near-zero visibility on what people can and cannot do",
          new: "Training shaped around concrete examples of where skills fall short and how",
        },
        {
          old: "ROI is a question nobody can answer",
          new: "Skill-gap trend lines show what is working and what needs to be reviewed or cut",
        },
        {
          old: "When the business pivots, L&D is always catching up",
          new: "Content personalised at scale — the platform knows what each person needs next",
        },
      ]}
      pillarsHeadline="Precise, data-driven L&D that proves its own value"
      pillars={[
        {
          title: "Precise Skill Gap Analysis",
          description:
            "Objective identification of improvement areas at both individual and aggregate level. Know exactly what to invest in, not where to guess.",
        },
        {
          title: "Data-Driven Learning Design",
          description:
            "Programmes built on real, measured needs — not standard catalogues. Every learning investment tied to a validated gap.",
        },
        {
          title: "Measurable ROI",
          description:
            "Pre and post assessment comparison. Objective tracking of progress and concrete impact on performance — finally answer the ROI question.",
        },
      ]}
      kpis={[
        {
          label: "Faster initiative execution",
          value: "6-9mo",
          description: "Initiatives delivered faster with targeted skill investment",
        },
        {
          label: "Training budget precision",
          value: "3x",
          description: "More targeted allocation vs. generic programme spend",
        },
        {
          label: "Hiring success from internal talent",
          value: "85%+",
          description: "When L&D data feeds internal mobility decisions",
        },
      ]}
      ctaHeadline="Ready to prove L&D impact with data?"
      icon={BookOpen}
      color="#8b5cf6"
      relatedSolutions={[
        { href: "/solutions/performance-management", label: "Performance Management" },
        { href: "/solutions/internal-mobility", label: "Internal Mobility" },
        { href: "/solutions/talent-acquisition", label: "Talent Acquisition" },
        { href: "/product-overview", label: "Platform Overview" },
        { href: "/science", label: "Our Science" },
      ]}
    />
  );
}
