"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

// Deterministic pseudo-random to avoid hydration mismatch
function seededRandom(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export function HeroParticles({ count = 40 }: { count?: number }) {
  const particles: Particle[] = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: seededRandom(i * 3) * 100,
        y: seededRandom(i * 3 + 1) * 100,
        size: seededRandom(i * 3 + 2) * 3 + 1,
        delay: seededRandom(i * 5) * 8,
        duration: seededRandom(i * 5 + 1) * 12 + 10,
        opacity: seededRandom(i * 5 + 2) * 0.4 + 0.1,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `rgba(${p.id % 3 === 0 ? "249,115,22" : p.id % 3 === 1 ? "236,72,153" : "139,92,246"}, ${p.opacity})`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [p.opacity * 0.3, p.opacity, p.opacity * 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            delay: p.delay,
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Larger glowing dots */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full blur-sm"
          style={{
            left: `${seededRandom(i * 7 + 100) * 90 + 5}%`,
            top: `${seededRandom(i * 7 + 101) * 80 + 10}%`,
            width: 6,
            height: 6,
            background:
              i % 3 === 0 ? "#f97316" : i % 3 === 1 ? "#ec4899" : "#8b5cf6",
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            delay: i * 1.5,
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
