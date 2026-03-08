"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ShiftRow {
  old: string;
  new: string;
}

export function AnimatedShiftRows({ rows }: { rows: ShiftRow[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="space-y-3">
      {rows.map((row, i) => (
        <div key={i} className="grid grid-cols-2 gap-4">
          {/* Old — staggered from left with strikethrough line drawing */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: i * 0.12,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="glass-card rounded-xl p-4 relative overflow-hidden group"
          >
            <p className="text-slate-400 text-sm leading-relaxed relative">
              {row.old}
              {/* Animated strikethrough */}
              <motion.span
                className="absolute left-0 top-1/2 h-[1.5px] bg-red-400/60 block"
                initial={{ width: "0%" }}
                animate={isInView ? { width: "100%" } : { width: "0%" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12 + 0.35,
                  ease: "easeInOut",
                }}
              />
            </p>
          </motion.div>

          {/* New — staggered from right with glow pulse */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: i * 0.12 + 0.15,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 rounded-xl bg-purple-500/20 blur-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: [0, 0.6, 0], scale: [0.8, 1.05, 1] } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.12 + 0.3,
                ease: "easeOut",
              }}
            />
            <div className="relative bg-purple-600/10 border border-purple-500/20 rounded-xl p-4">
              <motion.p
                className="text-white text-sm leading-relaxed font-medium"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.12 + 0.25, duration: 0.4 }}
              >
                {row.new}
              </motion.p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
