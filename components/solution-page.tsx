import Link from "next/link";
import { ArrowRight, ArrowLeft, TrendingDown, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggeredList } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { TiltCard } from "@/components/tilt-card";
import { AnimatedShiftRows } from "@/components/animated-shift-rows";
import { MouseParallaxOrbs } from "@/components/mouse-parallax";
import { HeroParticles } from "@/components/hero-particles";
import { type LucideIcon } from "lucide-react";
import { KpiCounter } from "@/components/kpi-counter";

interface PainCard {
  pain: string;
  context: string;
}

interface ShiftRow {
  old: string;
  new: string;
}

interface ValuePillar {
  title: string;
  description: string;
}

interface KPI {
  label: string;
  value: string;
  description?: string;
}

interface SolutionPageProps {
  badge: string;
  headline: string;
  subheadline: string;
  problemHeadline: string;
  problemStatement?: string;
  painCards: PainCard[];
  shiftHeadline: string;
  shiftRows: ShiftRow[];
  pillarsHeadline: string;
  pillars: ValuePillar[];
  kpis?: KPI[];
  ctaHeadline: string;
  icon: LucideIcon;
  color: string;
  relatedSolutions: Array<{ href: string; label: string }>;
}

export function SolutionPage({
  badge,
  headline,
  subheadline,
  problemHeadline,
  problemStatement,
  painCards,
  shiftHeadline,
  shiftRows,
  pillarsHeadline,
  pillars,
  kpis,
  ctaHeadline,
  icon: Icon,
  color,
  relatedSolutions,
}: SolutionPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg relative pt-32 pb-24 overflow-hidden">
        <MouseParallaxOrbs />
        <HeroParticles count={25} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </AnimatedSection>

          <div className="max-w-3xl">
            <AnimatedSection variant="blur">
              <Badge className="mb-6 bg-white/10 text-white border-white/20 text-sm px-4 py-1.5 rounded-full backdrop-blur-sm">
                <Icon className="w-3.5 h-3.5 mr-1.5" />
                {badge}
              </Badge>
            </AnimatedSection>

            <AnimatedSection delay={0.1} variant="blur">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                {headline}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-xl text-white/70 leading-relaxed mb-10">{subheadline}</p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Button
                asChild
                size="lg"
                className="brand-gradient text-white font-bold rounded-xl px-8 py-6 shadow-2xl shadow-purple-500/30 hover:opacity-90 transition-opacity"
              >
                <Link href="/book-demo">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12" variant="blur">
            <Badge className="mb-4 bg-red-50 text-red-700 border-red-200 text-sm px-4 py-1.5 rounded-full">
              <AlertCircle className="w-3.5 h-3.5 mr-1.5" />
              The Problem
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              {problemHeadline}
            </h2>
            {problemStatement && (
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                {problemStatement}
              </p>
            )}
          </AnimatedSection>

          <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-6" delay={0.1} blur>
            {painCards.map((card) => (
              <TiltCard
                key={card.pain}
                className="p-6 rounded-2xl border border-red-100 bg-red-50/50 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <TrendingDown className="w-4 h-4 text-red-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{card.pain}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.context}</p>
              </TiltCard>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* The Shift */}
      <section className="section-padding bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_50%,rgba(139,92,246,0.1),transparent)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-12" variant="blur">
            <Badge className="mb-4 bg-white/10 text-white border-white/20 text-sm px-4 py-1.5 rounded-full">
              The Shift
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              {shiftHeadline}
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4">
                The Old Playbook
              </div>
              <div className="text-xs font-bold text-purple-400 uppercase tracking-widest px-4">
                With Skillvue
              </div>
            </div>
            <AnimatedShiftRows rows={shiftRows} />
          </div>
        </div>
      </section>

      {/* How Skillvue Solves It */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14" variant="blur">
            <Badge
              className="mb-4 text-sm px-4 py-1.5 rounded-full border"
              style={{ background: `${color}15`, borderColor: `${color}30`, color }}
            >
              How Skillvue Solves It
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              {pillarsHeadline}
            </h2>
          </AnimatedSection>

          <StaggeredList className="grid grid-cols-1 md:grid-cols-3 gap-6" delay={0.1} blur>
            {pillars.map((pillar, i) => (
              <TiltCard
                key={pillar.title}
                className="bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center mb-5">
                  <span className="text-white font-bold">{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">{pillar.description}</p>
              </TiltCard>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* KPIs */}
      {kpis && kpis.length > 0 && (
        <section className="section-padding dark-section relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(139,92,246,0.15),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection className="text-center mb-12" variant="blur">
              <Badge className="mb-4 bg-white/10 text-white border-white/20 text-sm px-4 py-1.5 rounded-full">
                Impact & ROI
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Measurable impact on every metric that matters.
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {kpis.map((kpi, i) => (
                <KpiCounter key={kpi.label} kpi={kpi} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related solutions */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6 text-center">
              Explore related solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedSolutions.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-purple-700 hover:border-purple-200 hover:shadow-md transition-all text-sm font-medium flex items-center gap-2 card-hover"
                >
                  {s.label}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        headline={ctaHeadline}
        primaryLabel="Book a Demo"
        secondaryLabel="Explore the Platform"
        secondaryHref="/product-overview"
      />
    </>
  );
}
