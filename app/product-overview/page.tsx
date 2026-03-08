import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Target, TrendingUp, BookOpen, GitMerge, Zap, Shield, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggeredList } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Product Overview — One Platform, Every Talent Decision",
  description:
    "Skillvue is the AI-powered talent intelligence platform that turns static HR processes into predictive, objective insights. Assess skills, predict potential, and make every people decision defensible.",
};

const solutions = [
  {
    icon: Target,
    title: "Talent Acquisition",
    description:
      "Replace gut-feel interviews with AI-powered assessments that predict on-the-job performance. Scalable from 10 to 10,000 candidates — same scientific rigor at every level.",
    href: "/solutions/talent-acquisition",
    color: "from-orange-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Performance Management",
    description:
      "Add an objective layer to performance cycles. Structured competency assessments reduce bias, improve calibration, and give managers a starting point grounded in data.",
    href: "/solutions/performance-management",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    description:
      "Know exactly where the skill gaps are at individual, team, and organisation level. Fund programmes based on evidence, measure progress with before-and-after precision.",
    href: "/solutions/learning-development",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: GitMerge,
    title: "Internal Mobility & Succession",
    description:
      "See who is ready for a new role today, who can be developed in 6 months, and where critical knowledge is concentrated. Move from guesswork to certainty.",
    href: "/solutions/internal-mobility",
    color: "from-blue-500 to-cyan-500",
  },
];

const steps = [
  {
    step: "01",
    title: "Information Gathering",
    description: "We learn your organisation: competency frameworks, HR processes, systems, documentation.",
    capability: "Context, process, and data ingestion",
  },
  {
    step: "02",
    title: "Jobs-People-Skills Mapping",
    description: "We digest your organisational landscape into a dynamic skill taxonomy.",
    capability: "Skill taxonomy generation, talent demand-supply mapping, market & AI impact view",
  },
  {
    step: "03",
    title: "Assessment Generation",
    description: "We create assessments skill by skill — deeply contextualised to your roles and framework.",
    capability: "AI-generated items, expert validation, continuous adaptation",
  },
  {
    step: "04",
    title: "Assessment Delivery",
    description: "We meet people where they are, through the channels where adoption is highest.",
    capability: "Web apps, WhatsApp, MS Teams, Slack — audio, video, written, MCQs",
  },
  {
    step: "05",
    title: "Evaluation & Scoring",
    description: "AI agents recommend scores rooted in science. Humans keep control over the final decision.",
    capability: "Scoring explainability, human-in-the-loop review",
  },
  {
    step: "06",
    title: "Reporting & Insights",
    description: "Ready-to-use analytics for immediate consumption; integrations with core HR for full potential.",
    capability: "Skillvue reporting platform + native integrations (ATS, LMS, HRIS, PMS)",
  },
];

const dimensions = [
  {
    name: "Suitability",
    subtitle: "Person-job fit",
    description: "Evaluates objective eligibility: qualifications, availability, logistics, baseline requirements.",
  },
  {
    name: "Soft Skills",
    subtitle: "Behavioural competencies",
    description: "Communication, collaboration, problem-solving, leadership. Observable through action, rooted in stable behavioural patterns.",
  },
  {
    name: "Hard Skills",
    subtitle: "Technical proficiency",
    description: "Domain-specific knowledge measured against defined proficiency levels, grounded in structured knowledge taxonomies.",
  },
  {
    name: "Potential",
    subtitle: "Capacity to grow",
    description: "Learning agility, cognitive flexibility, and adaptive capacity for roles that do not yet exist.",
  },
  {
    name: "Traits",
    subtitle: "Behavioural patterns",
    description: "Personality and work-style dimensions that predict engagement, retention, and role fit.",
  },
];

const integrations = [
  { category: "ATS", tools: "Oracle, SAP SuccessFactors, Workday, Greenhouse, SmartRecruiters, BambooHR + 100 more" },
  { category: "LMS/LXP", tools: "Cornerstone, Docebo, SAP Learning" },
  { category: "PMS", tools: "SAP, Workday, Oracle HCM" },
  { category: "HRIS/HCM", tools: "Workday, SAP SuccessFactors, ADP, Sage" },
];

export default function ProductOverviewPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-orange-600/8 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <AnimatedSection>
              <Badge className="mb-6 bg-white/10 text-white border-white/20 text-sm px-4 py-1.5 rounded-full backdrop-blur-sm">
                <Zap className="w-3.5 h-3.5 mr-1.5" />
                Platform Overview
              </Badge>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                One platform.{" "}
                <span className="gradient-text-animated">Every talent decision.</span>{" "}
                Objective data.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-xl text-white/70 leading-relaxed mb-10">
                Skillvue is the AI-powered talent intelligence platform that turns static HR
                processes into predictive, objective insights. Assess skills, predict potential,
                and make every people decision defensible.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="brand-gradient text-white font-bold rounded-xl px-8 py-6"
                >
                  <Link href="/book-demo">
                    Book a Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white rounded-xl px-8 py-5"
                >
                  <Link href="/science">See the Science</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Solutions — one skills layer, four talent moments */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-purple-50 text-purple-700 border-purple-200 text-sm px-4 py-1.5 rounded-full">
              Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              One skills layer.{" "}
              <span className="gradient-text">Four talent moments.</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Skillvue connects hiring, performance, learning, and mobility through a single shared
              skill taxonomy — so every decision you make today improves every decision you make tomorrow.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {solutions.map((solution, i) => {
              const Icon = solution.icon;
              return (
                <AnimatedSection key={solution.title} delay={i * 0.08}>
                  <Link
                    href={solution.href}
                    className="group flex items-start gap-6 p-6 rounded-2xl border border-slate-200 hover:border-purple-200 bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`shrink-0 inline-flex p-3 rounded-xl bg-gradient-to-br ${solution.color} shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                          {solution.title}
                        </h3>
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest hidden sm:inline">
                          Module {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed">{solution.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-purple-500 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works — vertical timeline */}
      <section className="section-padding dark-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(139,92,246,0.08),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 text-white border-white/20 text-sm px-4 py-1.5 rounded-full">
              Implementation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Up and running in{" "}
              <span className="gradient-text">six structured steps.</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              No rip-and-replace. No disruption. Skillvue learns your organisation first —
              then delivers intelligence exactly where your teams already work.
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <AnimatedSection key={step.step} delay={i * 0.07}>
                  <div className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Node */}
                    <div className="shrink-0 w-11 h-11 rounded-full brand-gradient flex items-center justify-center text-white font-bold text-sm z-10 shadow-lg shadow-purple-500/30">
                      {step.step}
                    </div>
                    {/* Card */}
                    <div className="flex-1 glass-card rounded-2xl p-5 md:max-w-[calc(50%-2.5rem)]">
                      <h3 className="text-white font-bold mb-1">{step.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-2">{step.description}</p>
                      <p className="text-purple-400 text-xs font-medium">{step.capability}</p>
                    </div>
                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we assess — expanded rows */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <Badge className="mb-4 bg-orange-50 text-orange-700 border-orange-200 text-sm px-4 py-1.5 rounded-full">
              Assessment Framework
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              What Skillvue actually measures.
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Not a proxy. Not a personality type. Five concrete, defensible dimensions —
              each designed by I/O psychologists, each scored by AI, each explainable to the person being assessed.
            </p>
          </AnimatedSection>

          <div className="space-y-3">
            {dimensions.map((dim, i) => {
              const widths = ["w-[55%]", "w-[72%]", "w-[68%]", "w-[80%]", "w-[60%]"];
              const colors = ["bg-orange-400", "bg-pink-400", "bg-purple-400", "bg-blue-400", "bg-cyan-400"];
              return (
                <AnimatedSection key={dim.name} delay={i * 0.07}>
                  <div className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-purple-200 hover:shadow-md transition-all">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl font-black text-slate-200 leading-none w-8 shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3 mb-1">
                          <h3 className="font-bold text-slate-900">{dim.name}</h3>
                          <span className="text-sm text-purple-600 font-medium">{dim.subtitle}</span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed mb-3">{dim.description}</p>
                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full ${widths[i]} ${colors[i]} rounded-full opacity-70`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200 text-sm px-4 py-1.5 rounded-full">
              Integrations
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Giving life to your core HR systems.
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Skillvue layers objective talent data into your existing stack, turning them from
              process gatekeepers into decision engines. No rip-and-replace — just smarter systems.
            </p>
          </AnimatedSection>

          <StaggeredList className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto" delay={0.1}>
            {integrations.map((int) => (
              <div key={int.category} className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-900 mb-2">{int.category}</h3>
                <p className="text-slate-500 text-sm">{int.tools}</p>
              </div>
            ))}
          </StaggeredList>

          <AnimatedSection className="text-center mt-8">
            <p className="text-slate-400 font-semibold text-sm">
              100+ native integrations. If it has an API, we connect.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Enterprise trust */}
      <section className="section-padding bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200 text-sm px-4 py-1.5 rounded-full">
              <Shield className="w-3.5 h-3.5 mr-1.5" />
              Enterprise Trust
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Built enterprise ready.
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              We are opinionated about science, flexible about everything else. From deep
              customisability to the most demanding regulatory environments — Skillvue is built
              to fit your enterprise without compromise.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: Layers,
                title: "Customisability",
                description: "Every component adapts to your processes, your leadership model, your workflows. We deploy on your terms, not ours.",
              },
              {
                icon: Shield,
                title: "Security",
                description: "ISO 27001 and SOC 2 certified. Data protection is embedded in our architecture from day one.",
              },
              {
                icon: CheckCircle2,
                title: "Compliance",
                description: "From GDPR to the EU AI Act, we build for the most demanding regulatory environments so you do not have to worry about what is next.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow h-full">
                    <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4">
              {["EU AI Act", "ISO 27001", "GDPR"].map((cert) => (
                <div key={cert} className="px-6 py-3 rounded-xl border-2 border-slate-200 bg-white font-bold text-sm text-slate-700">
                  {cert}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        headline="Ready to make every talent decision objective?"
        subheadline="See Skillvue live with your specific use case."
        primaryLabel="Book a Demo"
        secondaryLabel="Explore Our Science"
        secondaryHref="/science"
      />
    </>
  );
}
