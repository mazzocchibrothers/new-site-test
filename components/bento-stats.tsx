"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { animate } from "framer-motion";
import { Shield, Zap, Globe } from "lucide-react";

function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

// Animated radial arc (SVG)
function ArcGauge({ pct, color }: { pct: number; color: string }) {
  const ref = useRef<SVGCircleElement>(null);
  const inView = useInView({ current: ref.current ? ref.current.closest("div") as HTMLElement : null }, { once: true });
  const r = 40;
  const circ = 2 * Math.PI * r;
  const [offset, setOffset] = useState(circ);

  useEffect(() => {
    if (!inView) return;
    const c = animate(circ, circ * (1 - pct / 100), {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.3,
      onUpdate: (v) => setOffset(v),
    });
    return () => c.stop();
  }, [inView, pct, circ]);

  return (
    <svg width="100" height="100" viewBox="0 0 100 100" className="rotate-[-90deg]">
      {/* Track */}
      <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
      {/* Progress */}
      <circle
        ref={ref}
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        style={{ filter: `drop-shadow(0 0 6px ${color})` }}
      />
    </svg>
  );
}

const certBadges = [
  { label: "ISO 27001", color: "#3b82f6" },
  { label: "GDPR",      color: "#8b5cf6" },
  { label: "EU AI Act", color: "#f97316" },
];

export function BentoStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full">

      {/* ── Card 1: 30% bad hire reduction (arc gauge) ── */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        whileHover={{ y: -3 }}
        className="col-span-1 glass-card rounded-2xl p-5 flex flex-col items-center justify-center text-center row-span-1 min-h-[160px]"
      >
        <div className="relative mb-2">
          <ArcGauge pct={70} color="#f97316" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-black text-white leading-none">
              <Counter to={70} suffix="%" duration={1.6} />
            </span>
          </div>
        </div>
        <p className="text-white/60 text-xs leading-tight">fewer bad hires</p>
      </motion.div>

      {/* ── Card 2: 10,000+ candidates ── */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
        whileHover={{ y: -3 }}
        className="col-span-1 glass-card rounded-2xl p-5 flex flex-col items-start justify-end min-h-[160px] relative overflow-hidden"
      >
        <motion.div
          className="absolute top-3 right-3 w-16 h-16 rounded-full bg-pink-500/20 blur-2xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <div className="text-3xl font-black gradient-text leading-none mb-1">
          <Counter to={10000} suffix="+" duration={2} />
        </div>
        <p className="text-white/60 text-xs">candidates assessed / year</p>
      </motion.div>

      {/* ── Card 3: 100+ integrations ── */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.15 }}
        whileHover={{ y: -3 }}
        className="col-span-1 glass-card rounded-2xl p-5 flex flex-col items-start justify-end min-h-[160px] relative overflow-hidden"
      >
        <motion.div
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-purple-500/30 blur-xl"
          animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
        />
        <Zap className="w-5 h-5 text-purple-400 mb-auto" />
        <div className="text-3xl font-black gradient-text leading-none mb-1">
          <Counter to={100} suffix="+" />
        </div>
        <p className="text-white/60 text-xs">native integrations</p>
      </motion.div>

      {/* ── Card 4: 18+ languages ── */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
        whileHover={{ y: -3 }}
        className="col-span-1 glass-card rounded-2xl p-5 flex flex-col items-start justify-end min-h-[160px] relative overflow-hidden"
      >
        <Globe className="w-5 h-5 text-orange-400 mb-auto" />
        <div className="text-3xl font-black gradient-text leading-none mb-1">
          <Counter to={18} suffix="+" duration={1.4} />
        </div>
        <p className="text-white/60 text-xs">languages supported</p>
      </motion.div>

      {/* ── Card 5: Certs (full width on mobile, 2 cols on md) ── */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.25 }}
        className="col-span-2 glass-card rounded-2xl p-5 flex flex-wrap items-center gap-3"
      >
        <Shield className="w-5 h-5 text-white/40 shrink-0" />
        <span className="text-white/40 text-xs font-semibold uppercase tracking-widest">
          Certified &amp; compliant
        </span>
        <div className="flex flex-wrap gap-2 ml-auto">
          {certBadges.map((badge, i) => (
            <motion.span
              key={badge.label}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.3 + i * 0.07 }}
              whileHover={{ scale: 1.1 }}
              className="text-xs font-bold px-3 py-1.5 rounded-full border"
              style={{
                borderColor: `${badge.color}40`,
                background: `${badge.color}15`,
                color: badge.color,
              }}
            >
              {badge.label}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* ── Card 6: Manifesto quote ── */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.3 }}
        className="col-span-2 relative glass-card rounded-2xl p-6 overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 brand-gradient opacity-10"
          animate={{ opacity: [0.06, 0.14, 0.06] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <p className="relative text-white/80 text-sm leading-relaxed font-medium italic">
          &ldquo;Behind every data point is a person with aspirations, potential, and a career
          story. Skillvue exists to make talent decisions that reflect the full picture.&rdquo;
        </p>
      </motion.div>
    </div>
  );
}
