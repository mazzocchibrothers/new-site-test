import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Target, Shield, Zap, Eye, Users, RefreshCw, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggeredList } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Science — Talent Intelligence Built on I/O Psychology & Psychometrics",
  description:
    "Measuring people is hard. Skillvue is built on I/O psychology and psychometrics, ensuring every data point holds up to scrutiny and drives real decisions with confidence.",
};

const team = [
  {
    name: "Dr. Tony Lee, Ph.D.",
    role: "Head of AI & Science",
    bio: "Holder of double Ph.D. degrees and computational psychologist with hands-on technical experience in Machine Learning and AI-driven assessments. At Skillvue, he leads the AI & Science team, innovating, validating and implementing new skills assessment models based on the latest technologies.",
    initials: "TL",
    color: "from-orange-500 to-pink-500",
  },
  {
    name: "Dr. Serena Dolfi, Ph.D.",
    role: "People Scientist",
    bio: "Expert in industrial-organisational psychology and assessment design. Bridges academic rigour and real-world HR application — ensuring every assessment construct is grounded in peer-reviewed research and validated against real performance outcomes.",
    initials: "SD",
    color: "from-pink-500 to-purple-500",
  },
  {
    name: "Jatin Babbar",
    role: "Senior Machine Learning Engineer",
    bio: "Specialist in NLP and large language models applied to assessment scoring. Builds the AI systems that turn open-ended candidate responses into reliable, explainable, psychometrically defensible scores.",
    initials: "JB",
    color: "from-purple-500 to-blue-500",
  },
  {
    name: "Wamiq Raza",
    role: "Machine Learning Engineer",
    bio: "Focused on model accuracy, fairness, and continuous evaluation. Ensures Skillvue assessment models remain reliable and unbiased across diverse populations, languages, and role types.",
    initials: "WR",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Luca Sbrollini",
    role: "People Scientist",
    bio: "Applies psychometric methodology to item design, scale development, and assessment validation. Works directly with clients to contextualise frameworks and ensure content validity across industries.",
    initials: "LS",
    color: "from-cyan-500 to-teal-500",
  },
];

const lifecycle = [
  {
    step: 1,
    title: "Define Constructs",
    description: "Identify what to measure, grounded in I/O psychology research and the client's competency model.",
  },
  {
    step: 2,
    title: "Design Assessment Items",
    description: "AI generates deeply contextualised items; format, scale, and scoring model selected based on psychometric best practice.",
  },
  {
    step: 3,
    title: "Expert Validation",
    description: "Human-in-the-loop validation by subject-matter experts and psychometricians. Calibration against proprietary benchmark data.",
  },
  {
    step: 4,
    title: "Pilot and Refine",
    description: "Items tested with real participants, analysed for reliability, discrimination, and fairness. Bias evaluation across demographics.",
  },
  {
    step: 5,
    title: "Deploy at Scale",
    description: "Assessments delivered via web, WhatsApp, Teams, Slack — in 18+ languages with consistent measurement quality.",
  },
  {
    step: 6,
    title: "Score with Explainability",
    description: "Every response scored with transparent evidence: answer, justification, and behavioural anchor. AI recommends; humans decide.",
  },
  {
    step: 7,
    title: "Monitor and Evolve",
    description: "Continuous item analysis, reliability tracking, and construct stability monitoring as populations and roles change over time.",
  },
];

const responsibleAI = [
  {
    icon: Eye,
    title: "Transparent Scoring",
    description: "Every score comes with an explanation: what was measured, how it was scored, and what evidence supports it.",
  },
  {
    icon: Users,
    title: "Human Oversight",
    description: "AI recommends; humans decide. HR teams can edit, override, and make the final call on every assessment.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Monitoring",
    description: "Drift checks, stability reviews, and scoring audits detect changes before they affect results.",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Built from the ground up for GDPR, EU AI Act, ISO 27001, and SOC 2. Auditable by design.",
  },
];

const faqs = [
  {
    q: "How does Skillvue ensure assessment validity?",
    a: "Every assessment goes through a rigorous lifecycle: construct definition grounded in I/O psychology, AI-generated items, expert validation, pilot testing with real participants, and continuous monitoring post-deployment. Our proprietary dataset of 100K+ validated answers ensures empirical grounding beyond theoretical design.",
  },
  {
    q: "What role does AI play in assessment design and scoring?",
    a: "AI scales the scientific rigor we would otherwise apply manually. It generates contextualised assessment items informed by psychometric principles, and scores responses using trained models that map to behavioural anchors. Every AI-generated score includes a rationale — humans retain full authority to review and override.",
  },
  {
    q: "How does Skillvue handle bias in assessments?",
    a: "Bias is evaluated at both the item level and the population level. During pilot phases, items are analysed across demographic groups. Post-deployment, we continuously monitor for differential item functioning and score drift. Our human-in-the-loop design means no AI decision is final without human review.",
  },
  {
    q: "What languages are supported?",
    a: "Skillvue supports 18+ languages with consistent measurement quality. Our multilingual models are validated per language, not just translated — ensuring scoring accuracy is maintained across all markets.",
  },
  {
    q: "How does Skillvue comply with the EU AI Act?",
    a: "Skillvue is classified as a high-risk AI system under the EU AI Act. We comply fully: transparent scoring, human oversight, complete auditability, regular bias evaluations, and data governance embedded in our architecture from day one.",
  },
  {
    q: "Can assessments be customised to our competency framework?",
    a: "Yes — this is a core differentiator. Skillvue starts by ingesting your competency framework, role definitions, and organisational context. Assessments are then generated and validated to reflect your specific language, standards, and expectations — not generic templates.",
  },
];

export default function SciencePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <AnimatedSection>
              <Badge className="mb-6 bg-white/10 text-white border-white/20 text-sm px-4 py-1.5 rounded-full backdrop-blur-sm">
                <Brain className="w-3.5 h-3.5 mr-1.5" />
                Science & Methodology
              </Badge>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                Science you can stake{" "}
                <span className="gradient-text-animated">talent decisions on.</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-xl text-white/70 leading-relaxed mb-10">
                Measuring people is hard. To make talent decisions you can trust, accuracy and
                reliability are not optional. Skillvue is built on I/O psychology and
                psychometrics, ensuring every data point holds up to scrutiny.
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
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Two Pillars */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <Badge className="mb-4 bg-purple-50 text-purple-700 border-purple-200 text-sm px-4 py-1.5 rounded-full">
              Scientific Foundation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Two disciplines, one standard of rigor.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection direction="left">
              <div className="p-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-purple-50 to-white h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">I/O Psychology</h3>
                <p className="text-purple-700 font-medium text-sm mb-4">Defining what to measure and why it matters</p>
                <p className="text-slate-600 leading-relaxed">
                  I/O psychology grounds our platform in decades of research on human performance
                  at work, ensuring we map the right skills, select the right constructs, and use
                  the right mix of assessment types for each talent decision.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="p-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-orange-50 to-white h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Psychometrics</h3>
                <p className="text-orange-700 font-medium text-sm mb-4">Defining how to measure it right</p>
                <p className="text-slate-600 leading-relaxed">
                  Psychometrics governs the design of every assessment we build: which format,
                  which scale, which scoring model. The goal is simple: maximise accuracy, minimise
                  noise, and make sure results mean what they claim to mean.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Science Team */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <Badge className="mb-4 bg-pink-50 text-pink-700 border-pink-200 text-sm px-4 py-1.5 rounded-full">
              <Users className="w-3.5 h-3.5 mr-1.5" />
              The Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              The people behind the science.
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Science needs human faces, not just abstract claims. Meet the team that makes
              every assessment defensible.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-purple-200 transition-all duration-300 h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-4 text-white font-bold text-lg`}>
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-0.5">{member.name}</h3>
                  <p className="text-purple-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}

            {/* External collaborators */}
            <AnimatedSection delay={0.35}>
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-200 flex flex-col justify-center text-center h-full">
                <div className="text-4xl font-black gradient-text mb-2">50+</div>
                <p className="text-slate-700 font-semibold mb-1">External Collaborators</p>
                <p className="text-slate-500 text-sm">
                  From the academic, HR consulting, and corporate world — validating our methodology
                  across industries and geographies.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Methodology Lifecycle */}
      <section className="section-padding dark-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(139,92,246,0.08),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-14">
            <Badge className="mb-4 bg-white/10 text-white border-white/20 text-sm px-4 py-1.5 rounded-full">
              Methodology
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              A rigorous, end-to-end assessment lifecycle.
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Our proprietary dataset of 100K+ answers and 100+ SMEs ensures every assessment
              is not just theoretically sound — but empirically validated.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {lifecycle.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.07}>
                <div className="glass-card rounded-2xl p-5 flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AI + Science */}
      <section className="section-padding brand-gradient-subtle border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <Badge className="mb-4 bg-orange-50 text-orange-700 border-orange-200 text-sm px-4 py-1.5 rounded-full">
              AI & Science
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              AI scales the rigor.{" "}
              <span className="gradient-text">Science guarantees the accuracy.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Better Evidence",
                description: "AI unlocks richer, more direct evidence of skill through realistic scenarios, interactive tasks, and multiple response modalities that reflect how work is actually done.",
                color: "text-orange-600",
                bg: "bg-orange-50",
              },
              {
                icon: Target,
                title: "Rigor at Scale",
                description: "We embed assessment science into the product so rigor scales with the system. Clear constructs, evidence-centered design, and governed scoring prevent AI from introducing noise.",
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                icon: RefreshCw,
                title: "Continuous Evolution",
                description: "Because skills and roles evolve quickly, measurement must evolve with them. Continuous monitoring and scientist-led iteration keep signals accurate and defensible.",
                color: "text-pink-600",
                bg: "bg-pink-50",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title}>
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow h-full">
                    <div className={`inline-flex p-3 ${item.bg} rounded-xl mb-4`}>
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Responsible AI */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <Badge className="mb-4 bg-green-50 text-green-700 border-green-200 text-sm px-4 py-1.5 rounded-full">
              <Shield className="w-3.5 h-3.5 mr-1.5" />
              Responsible AI
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Responsible AI built for high-stakes talent decisions.
            </h2>
          </AnimatedSection>

          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto" delay={0.1}>
            {responsibleAI.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </StaggeredList>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Frequently asked questions.
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 0.06}>
                <div className="bg-white rounded-2xl p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm pl-7">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Science-backed talent intelligence. See it in action."
        subheadline="Book a live demo with your specific use case and competency framework."
        primaryLabel="Book a Demo"
        secondaryLabel="Explore the Platform"
        secondaryHref="/product-overview"
      />
    </>
  );
}
