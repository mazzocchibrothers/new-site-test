"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function MouseParallaxOrbs() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springX = useSpring(rawX, { stiffness: 40, damping: 25 });
  const springY = useSpring(rawY, { stiffness: 40, damping: 25 });

  // Pre-compute derived motion values for each orb
  const orb2X = useTransform(springX, (v) => v * -0.65);
  const orb2Y = useTransform(springY, (v) => v * -0.65);
  const orb3X = useTransform(springX, (v) => v * 0.35);
  const orb3Y = useTransform(springY, (v) => v * -0.35);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      rawX.set((e.clientX / innerWidth - 0.5) * 80);
      rawY.set((e.clientY / innerHeight - 0.5) * 80);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  return (
    <>
      <motion.div
        className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full bg-purple-600/12 blur-3xl pointer-events-none"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-pink-600/10 blur-3xl pointer-events-none"
        style={{ x: orb2X, y: orb2Y }}
      />
      <motion.div
        className="absolute top-1/2 left-0 w-[350px] h-[350px] rounded-full bg-orange-600/8 blur-3xl pointer-events-none"
        style={{ x: orb3X, y: orb3Y }}
      />
    </>
  );
}
