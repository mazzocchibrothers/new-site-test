"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Slot-machine digit column
function DigitReel({ digit }: { digit: number }) {
  return (
    <span className="inline-block overflow-hidden h-[1em] relative" style={{ verticalAlign: "bottom" }}>
      <motion.span
        className="flex flex-col items-center"
        animate={{ y: `-${digit * 10}%` }}
        transition={{ type: "spring", stiffness: 180, damping: 22 }}
        style={{ lineHeight: 1 }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="block" style={{ height: "1em" }}>
            {i}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

function SlotNumber({ value }: { value: number }) {
  const str = value.toLocaleString("en-GB").split("");
  return (
    <span className="font-black tabular-nums">
      {str.map((ch, i) =>
        /\d/.test(ch) ? (
          <DigitReel key={i} digit={parseInt(ch)} />
        ) : (
          <span key={i}>{ch}</span>
        )
      )}
    </span>
  );
}

export function TalentCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  // Seed: ~2.4 million assessments, incrementing ~3/second
  const BASE = 2_412_847;
  const [count, setCount] = useState(BASE);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 5 + 1));
    }, 800);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div ref={ref} className="text-center py-20 px-4 relative overflow-hidden dark-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(139,92,246,0.12),transparent)]" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <p className="text-white/40 text-sm font-semibold uppercase tracking-widest mb-4">
          Talent decisions powered by Skillvue
        </p>
        <div className="text-5xl md:text-7xl gradient-text mb-3">
          <SlotNumber value={count} />
        </div>
        <p className="text-white/40 text-sm">and counting — live</p>

        {/* Pulse dot */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <motion.div
            className="w-2 h-2 rounded-full bg-green-400"
            animate={{ opacity: [1, 0.2, 1], scale: [1, 1.5, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <span className="text-green-400 text-xs font-semibold">Live</span>
        </div>
      </motion.div>
    </div>
  );
}
