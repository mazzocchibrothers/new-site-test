import type { Metadata } from "next";
import { CheckCircle2, Users, Brain, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Book a Demo — See Skillvue Live",
  description:
    "See Skillvue live with your specific use case. Book a personalised demo with our team.",
};

const benefits = [
  "See the platform live with your specific use case",
  "Get a walkthrough of your relevant solution module",
  "Understand how Skillvue integrates with your existing stack",
  "Receive a personalised ROI estimate for your organisation",
];

export default function BookDemoPage() {
  return (
    <>
      <section className="hero-bg relative pt-32 pb-24 min-h-screen flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <AnimatedSection direction="left">
              <Badge className="mb-6 bg-white/10 text-white border-white/20 text-sm px-4 py-1.5 rounded-full">
                <Zap className="w-3.5 h-3.5 mr-1.5" />
                Book a Demo
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
                See Skillvue live with your{" "}
                <span className="gradient-text-animated">specific use case.</span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-10">
                30 minutes. No sales pitch. Just a focused walkthrough of how Skillvue
                addresses your specific talent challenge — with real scenarios from your
                industry.
              </p>

              <ul className="space-y-4 mb-10">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-white/80">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Users, label: "People-first approach" },
                  { icon: Brain, label: "Science-backed platform" },
                  { icon: Zap, label: "Live in weeks, not months" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="glass-card rounded-xl p-4 text-center">
                      <Icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                      <p className="text-white/70 text-xs">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>

            {/* Right — form placeholder */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Request your demo</h2>
                <p className="text-slate-500 text-sm mb-6">
                  Fill in your details and we will be in touch within one business day.
                </p>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-1.5">
                        First name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all"
                        placeholder="Sarah"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-1.5">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all"
                        placeholder="Johnson"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1.5">
                      Work email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all"
                      placeholder="sarah@company.com"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1.5">
                      Company name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all"
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1.5">
                      Your role
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all bg-white">
                      <option value="">Select your role</option>
                      <option>CHRO / HR Director</option>
                      <option>Head of Talent Acquisition</option>
                      <option>Head of L&D</option>
                      <option>Head of HR Technology</option>
                      <option>CEO / Founder</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1.5">
                      Primary use case
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 transition-all bg-white">
                      <option value="">Select a use case</option>
                      <option>Talent Acquisition</option>
                      <option>Performance Management</option>
                      <option>Learning & Development</option>
                      <option>Internal Mobility & Succession</option>
                      <option>Project Resourcing</option>
                      <option>Multiple use cases</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl brand-gradient text-white font-bold text-base hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20"
                  >
                    Request Demo
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    By submitting, you agree to our{" "}
                    <a href="/privacy" className="text-purple-600 hover:underline">
                      Privacy Policy
                    </a>
                    . We will never share your information.
                  </p>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
