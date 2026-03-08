"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, CheckCircle2, Users, Brain, Zap, Shield,
  TrendingUp, Target, BookOpen, GitMerge, Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, BlurReveal, AnimatedCounter, StaggeredList, SpringNumber, AnimatedLine } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { MouseParallaxOrbs } from "@/components/mouse-parallax";
import { HeroParticles } from "@/components/hero-particles";
import { TiltCard } from "@/components/tilt-card";
import { MagneticButton } from "@/components/magnetic-button";
import { DotMarquee } from "@/components/infinite-marquee";
import { GlowCard } from "@/components/glow-card";
import { NeuralNetwork } from "@/components/neural-network";
import { CyclingText } from "@/components/cycling-text";
import { BentoStats } from "@/components/bento-stats";
import { TalentCounter } from "@/components/talent-counter";

const stats = [
  { value: 30, suffix: "%", label: "Reduction in bad hire rate" },
  { value: 10000, suffix: "+", label: "Candidates assessed / year" },
  { value: 100, suffix: "+", label: "Native integrations" },
  { value: 50, suffix: "+", label: "Languages supported" },
];

const solutions = [
  {
    icon: Target,
    title: "Talent Acquisition",
    description: "Replace gut-feel interviews with AI-powered assessments that predict on-the-job performance. Same scientific rigor from 10 to 10,000 candidates.",
    href: "/solutions/talent-acquisition",
    color: "from-orange-500 to-pink-500",
    glow: "rgba(249,115,22,0.3)",
  },
  {
    icon: TrendingUp,
    title: "Performance Management",
    description: "Add an objective layer to performance cycles. Reduce bias, improve calibration, give every manager a data-backed starting point.",
    href: "/solutions/performance-management",
    color: "from-pink-500 to-purple-500",
    glow: "rgba(236,72,153,0.3)",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    description: "Know exactly where skill gaps are at individual, team, and org level. Fund programs based on evidence, measure progress precisely.",
    href: "/solutions/learning-development",
    color: "from-purple-500 to-blue-500",
    glow: "rgba(139,92,246,0.3)",
  },
  {
    icon: GitMerge,
    title: "Internal Mobility",
    description: "See who is ready for a new role today, who can be developed in 6 months, and where critical knowledge is concentrated.",
    href: "/solutions/internal-mobility",
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(59,130,246,0.3)",
  },
];

const howItWorks = [
  { step: "01", title: "Information Gathering", description: "We learn your organisation: competency frameworks, HR processes, systems, documentation." },
  { step: "02", title: "Jobs-People-Skills Mapping", description: "We map your organisational landscape into a dynamic skill taxonomy with AI-powered market insights." },
  { step: "03", title: "Assessment Generation", description: "AI creates assessments skill by skill — deeply contextualised to your roles and competency framework." },
  { step: "04", title: "Assessment Delivery", description: "We meet people where they are: web app, WhatsApp, MS Teams, Slack — audio, video, written, MCQs." },
  { step: "05", title: "Evaluation & Scoring", description: "AI agents recommend scores rooted in science. Humans keep full control over every final decision." },
  { step: "06", title: "Reporting & Insights", description: "Ready-to-use analytics for immediate action, plus native integrations with your ATS, HRIS, LMS, and PMS." },
];

const dimensions = [
  { name: "Suitability", subtitle: "Person-job fit", description: "Objective eligibility screening — qualifications, availability, baseline requirements." },
  { name: "Soft Skills", subtitle: "Behavioural competencies", description: "Communication, collaboration, problem-solving, leadership. Observable through action." },
  { name: "Hard Skills", subtitle: "Technical proficiency", description: "Domain-specific knowledge measured against defined proficiency levels." },
  { name: "Potential", subtitle: "Capacity to grow", description: "Learning agility, cognitive flexibility, and adaptive capacity for roles that do not yet exist." },
  { name: "Traits", subtitle: "Behavioural patterns", description: "Personality and work-style dimensions that predict engagement, retention, and role fit." },
];

const integrations = [
  "Workday", "SAP SuccessFactors", "Oracle HCM", "Greenhouse",
  "SmartRecruiters", "Cornerstone", "Docebo", "BambooHR", "ADP", "Sage",
  "Workday", "SAP SuccessFactors", "Oracle HCM", "Greenhouse",
];

export function HomePageClient() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────── */}
      <section ref={heroRef} className="hero-bg relative min-h-screen flex items-center pt-20 overflow-hidden">

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full relative z-10"
        >
          {/* ── Two-column hero layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">

            {/* LEFT — Copy */}
            <div className="flex flex-col justify-center">
              <AnimatedSection variant="blur">
                <motion.div whileHover={{ scale: 1.04 }} className="inline-block mb-6">
                  <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/15 text-sm px-4 py-1.5 rounded-full backdrop-blur-sm">
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="inline-block mr-1.5"
                    >
                      <Zap className="w-3.5 h-3.5" />
                    </motion.span>
                    AI-Powered Talent Intelligence
                  </Badge>
                </motion.div>
              </AnimatedSection>

              {/* Headline with cycling word */}
              <div className="mb-6">
                <AnimatedSection delay={0.05} variant="blur">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                    Stop gambling on
                    <br />
                    <span className="gradient-text-animated block mt-1">
                      <CyclingText
                        words={[
                          "hiring decisions.",
                          "performance reviews.",
                          "succession planning.",
                          "talent mobility.",
                          "people decisions.",
                        ]}
                        interval={2800}
                        className="gradient-text-animated"
                      />
                    </span>
                  </h1>
                </AnimatedSection>
              </div>

              <AnimatedSection delay={0.3} variant="blur">
                <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-lg">
                  Skillvue replaces guesswork with science at scale. AI-powered assessments
                  customised to your roles — making every talent decision{" "}
                  <span className="text-white font-medium">defensible.</span>
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.45}>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <MagneticButton>
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        asChild
                        size="lg"
                        className="brand-gradient text-white font-bold text-base rounded-xl px-8 py-5 shadow-2xl shadow-purple-500/30 hover:opacity-90 glow-pulse"
                      >
                        <Link href="/book-demo">
                          Book a Demo
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.4, repeat: Infinity }}
                          >
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </motion.span>
                        </Link>
                      </Button>
                    </motion.div>
                  </MagneticButton>
                  <MagneticButton>
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white rounded-xl px-8 py-5"
                      >
                        <Link href="/product-overview">See How It Works</Link>
                      </Button>
                    </motion.div>
                  </MagneticButton>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.55}>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {["ISO 27001 certified", "100+ integrations", "50+ languages"].map((p, i) => (
                    <motion.div
                      key={p}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.65 + i * 0.08 }}
                      className="flex items-center gap-2 text-white/50 text-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      {p}
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT — Neural Network visualization */}
            <AnimatedSection delay={0.2} className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.15 }}
                className="relative w-full aspect-square max-w-[520px] mx-auto"
              >
                {/* Outer glow ring */}
                <motion.div
                  className="absolute inset-[-5%] rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
                  }}
                  animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Panel backdrop */}
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(139,92,246,0.08), rgba(0,0,0,0.3))",
                    border: "1px solid rgba(139,92,246,0.2)",
                    backdropFilter: "blur(4px)",
                  }}
                />

                {/* Neural network SVG */}
                <div className="absolute inset-4">
                  <NeuralNetwork />
                </div>

                {/* Corner label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-white/30 text-xs font-mono uppercase tracking-widest">
                    Skill Intelligence Map
                  </span>
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-green-400"
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </AnimatedSection>
          </div>

        </motion.div>
      </section>

      {/* ─── BENTO STATS ────────────────────────────────────── */}
      <section className="dark-section py-16 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BentoStats />
        </div>
      </section>

      {/* ─── SOLUTIONS ──────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16" variant="blur">
            <Badge className="mb-4 bg-purple-50 text-purple-700 border-purple-200 text-sm px-4 py-1.5 rounded-full">
              Platform
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
              From screening to succession —
              <br />
              <span className="gradient-text">every talent decision, connected.</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Most organisations run hiring, performance, L&D, and mobility on disconnected
              tools. Skillvue connects them through one skills language so every decision compounds.
            </p>
          </AnimatedSection>

          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 gap-6" delay={0.1} blur>
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <TiltCard key={solution.title} intensity={6} className="rounded-2xl">
                  <GlowCard
                    glowColor={solution.glow}
                    className="gradient-border-animated p-8 rounded-2xl border border-slate-200 bg-white hover:border-transparent transition-all duration-300 h-full"
                  >
                    <motion.div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${solution.color} mb-5 shadow-lg`}
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed mb-4">
                      {solution.description}
                    </p>
                    <Link
                      href={solution.href}
                      className="flex items-center gap-1 text-purple-600 font-semibold text-sm hover:gap-3 transition-all group"
                    >
                      Explore {solution.title}
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </Link>
                  </GlowCard>
                </TiltCard>
              );
            })}
          </StaggeredList>
        </div>
      </section>

      {/* ─── HOW IT WORKS ───────────────────────────────────── */}
      <section className="section-padding dark-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(139,92,246,0.08),transparent)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16" variant="blur">
            <Badge className="mb-4 bg-white/10 text-white border-white/20 text-sm px-4 py-1.5 rounded-full">
              How It Works
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
              From your context to{" "}
              <span className="gradient-text">actionable intelligence</span>
              <br />in six steps.
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Skillvue does not ask you to change how you work. We start by learning your
              organisation and deliver insights where your teams already operate.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <GlowCard className="glass-card rounded-2xl p-6 h-full">
                  <div className="text-5xl font-black gradient-text mb-4 leading-none">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FIVE DIMENSIONS ────────────────────────────────── */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16" variant="blur">
            <Badge className="mb-4 bg-orange-50 text-orange-700 border-orange-200 text-sm px-4 py-1.5 rounded-full">
              Assessment Framework
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
              Five dimensions for{" "}
              <span className="gradient-text">objective evaluations.</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Every person evaluated through a structured, science-backed framework —
              whether they are a candidate or a 20-year veteran.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {dimensions.map((dim, i) => (
              <motion.div
                key={dim.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.35, delay: i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <TiltCard className="bg-white rounded-2xl p-6 border border-slate-200 h-full hover:shadow-lg hover:border-purple-200 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{dim.name}</h3>
                  <p className="text-sm text-purple-600 font-medium mb-3">{dim.subtitle}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{dim.description}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PEOPLE AT CENTRE ───────────────────────────────── */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" variant="blur">
              <Badge className="mb-4 bg-pink-50 text-pink-700 border-pink-200 text-sm px-4 py-1.5 rounded-full">
                <Users className="w-3.5 h-3.5 mr-1.5" />
                People-First
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                Technology that{" "}
                <span className="gradient-text">sees people</span>
                , not just data points.
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                Behind every data point is a person with aspirations, potential, and a career
                story. Skillvue exists to make sure talent decisions reflect the full picture
                — not just who was available, visible, or known.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                By replacing gut feel with objective science, we help organisations recognise
                talent that might otherwise be overlooked — and give every individual a fair
                opportunity to demonstrate what they can truly do.
              </p>
              <ul className="space-y-4">
                {[
                  "Structured assessments reduce bias across every evaluation",
                  "Explainable scores mean every candidate knows how they are assessed",
                  "Multilingual support ensures no one is disadvantaged by language",
                  "Human-in-the-loop: AI recommends, people decide",
                ].map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.45 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                      <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    </motion.div>
                    <span className="text-slate-700">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right" variant="blur">
              <div className="relative">
                <motion.div
                  className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {/* Animated background blobs */}
                  <motion.div
                    className="absolute top-0 right-0 w-48 h-48 brand-gradient rounded-full blur-3xl opacity-20"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-10"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  />

                  <div className="relative space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <Brain className="w-5 h-5 text-white" />
                      </motion.div>
                      <span className="text-white font-semibold">Candidate Experience</span>

                      {/* Live indicator */}
                      <div className="ml-auto flex items-center gap-1.5">
                        <motion.div
                          className="w-2 h-2 rounded-full bg-green-400"
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-green-400 text-xs font-medium">Live</span>
                      </div>
                    </div>

                    {[
                      { label: "Assessment Duration", value: "5-30 min" },
                      { label: "Format", value: "Audio, Video, Written" },
                      { label: "Access", value: "Web App & WhatsApp" },
                      { label: "Languages", value: "50+ languages" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                        className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
                      >
                        <span className="text-white/60 text-sm">{item.label}</span>
                        <span className="text-white font-semibold text-sm">{item.value}</span>
                      </motion.div>
                    ))}

                    <div className="pt-2">
                      <motion.div
                        className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/30 rounded-xl p-4"
                        animate={{ borderColor: ["rgba(139,92,246,0.3)", "rgba(236,72,153,0.4)", "rgba(139,92,246,0.3)"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <p className="text-white/80 text-sm leading-relaxed">
                          Fast, frictionless, and designed to meet people where they are
                          — branded, mobile-first, and truly multilingual.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating metric badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 float-animation">
                  <div className="text-2xl font-black gradient-text">85%+</div>
                  <div className="text-xs text-slate-500 font-medium">Hiring success</div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 float-animation-delay">
                  <div className="text-2xl font-black gradient-text">&lt;15%</div>
                  <div className="text-xs text-slate-500 font-medium">Bad hire rate</div>
                </div>

                <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 float-animation-slow">
                  <div className="text-xl font-black gradient-text">50+</div>
                  <div className="text-xs text-slate-500 font-medium">Languages</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── SCIENCE TEASER ─────────────────────────────────── */}
      <section className="section-padding brand-gradient-subtle border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" variant="blur">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Brain, title: "I/O Psychology", desc: "Decades of research on human performance at work.", color: "text-purple-600", bg: "bg-purple-50" },
                  { icon: Target, title: "Psychometrics", desc: "The gold standard for accurate, reliable measurement.", color: "text-pink-600", bg: "bg-pink-50" },
                  { icon: Zap, title: "AI at Scale", desc: "Machine learning that extends rigor without sacrificing accuracy.", color: "text-orange-600", bg: "bg-orange-50" },
                  { icon: Shield, title: "Responsible AI", desc: "Transparent scoring. Human oversight. EU AI Act compliant.", color: "text-blue-600", bg: "bg-blue-50" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <TiltCard key={item.title} intensity={8}>
                      <motion.div
                        className="bg-white rounded-2xl p-5 border border-slate-200 hover:shadow-lg transition-shadow h-full"
                        whileHover={{ y: -3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className={`inline-flex p-2 ${item.bg} rounded-lg mb-3`}
                          whileHover={{ scale: 1.15, rotate: 8 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Icon className={`w-5 h-5 ${item.color}`} />
                        </motion.div>
                        <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                      </motion.div>
                    </TiltCard>
                  );
                })}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" variant="blur">
              <Badge className="mb-4 bg-purple-50 text-purple-700 border-purple-200 text-sm px-4 py-1.5 rounded-full">
                Science & Methodology
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                Science you can stake{" "}
                <span className="gradient-text">talent decisions on.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                Measuring people is hard. Accuracy and reliability are not optional. Skillvue is
                built on I/O psychology and psychometrics — ensuring every data point holds up
                to scrutiny.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Our proprietary dataset of 100K+ validated answers and 100+ subject-matter
                experts means every assessment is empirically validated, not just theoretically sound.
              </p>
              <MagneticButton>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button asChild size="lg" className="brand-gradient text-white font-bold rounded-xl px-8">
                    <Link href="/science">
                      Explore Our Science
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </MagneticButton>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── ENTERPRISE TRUST ───────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12" variant="blur">
            <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200 text-sm px-4 py-1.5 rounded-full">
              <Shield className="w-3.5 h-3.5 mr-1.5" />
              Enterprise Ready
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Built for the most demanding environments.
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              From GDPR to the EU AI Act, from ISO 27001 to SOC 2 — Skillvue fits your
              enterprise without compromise.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Layers, title: "Fully Customisable", description: "Every component adapts to your processes, your leadership model, your workflows." },
              { icon: Shield, title: "Security First", description: "ISO 27001 and SOC 2 certified. Data protection embedded from day one, not bolted on." },
              { icon: CheckCircle2, title: "Regulatory Compliance", description: "From GDPR to the EU AI Act, built for the most demanding environments." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "50px" }}
                  transition={{ delay: i * 0.08, duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <TiltCard className="p-6 rounded-2xl border border-slate-200 bg-white h-full hover:border-purple-200 hover:shadow-lg transition-colors duration-300">
                    <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>

          {/* Certification badges */}
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-5">
              {[
                { label: "EU AI Act", color: "border-orange-200 bg-orange-50 text-orange-700" },
                { label: "ISO 27001", color: "border-blue-200 bg-blue-50 text-blue-700" },
                { label: "GDPR", color: "border-purple-200 bg-purple-50 text-purple-700" },
              ].map((cert, i) => (
                <motion.div
                  key={cert.label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className={`px-6 py-3 rounded-xl border-2 font-bold text-sm ${cert.color} cursor-default`}
                >
                  {cert.label}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── INTEGRATIONS MARQUEE ───────────────────────────── */}
      <section className="py-16 bg-slate-50 border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <AnimatedSection>
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
              100+ native integrations — if it has an API, we connect
            </p>
          </AnimatedSection>
        </div>
        <DotMarquee items={integrations} speed={40} />
        <div className="mt-4">
          <DotMarquee items={[...integrations].reverse()} speed={50} />
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────── */}
      <CTASection
        headline="Ready to make every talent decision objective?"
        subheadline="Join enterprise teams across Europe replacing gut feel with science at scale."
        primaryLabel="Book a Demo"
        secondaryLabel="Explore the Platform"
        secondaryHref="/product-overview"
      />
    </>
  );
}
