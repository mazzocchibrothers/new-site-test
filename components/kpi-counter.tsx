"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";

interface KPI {
  label: string;
  value: string;
  description?: string;
}

export function KpiCounter({ kpi, index }: { kpi: KPI; index: number }) {
  return (
    <AnimatedSection delay={index * 0.12} variant="scale">
      <motion.div
        className="glass-card rounded-2xl p-6 text-center"
        whileHover={{ scale: 1.05, y: -4 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="text-4xl font-black gradient-text mb-2"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 16, delay: index * 0.12 + 0.2 }}
        >
          {kpi.value}
        </motion.div>
        <div className="text-white font-semibold mb-1">{kpi.label}</div>
        {kpi.description && (
          <div className="text-white/50 text-sm">{kpi.description}</div>
        )}
      </motion.div>
    </AnimatedSection>
  );
}
