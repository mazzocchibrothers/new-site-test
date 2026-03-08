"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const TRAIL_COUNT = 8;

export function CursorGlow() {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Main orb — high stiffness
  const orbX = useSpring(cursorX, { stiffness: 500, damping: 35 });
  const orbY = useSpring(cursorY, { stiffness: 500, damping: 35 });

  // Outer ring — lags behind
  const ringX = useSpring(cursorX, { stiffness: 120, damping: 22 });
  const ringY = useSpring(cursorY, { stiffness: 120, damping: 22 });

  // Trail points — each progressively more delayed
  const trailRefs = Array.from({ length: TRAIL_COUNT }, (_, i) => ({
    x: useSpring(cursorX, { stiffness: 80 - i * 8, damping: 20 + i * 1.5 }),
    y: useSpring(cursorY, { stiffness: 80 - i * 8, damping: 20 + i * 1.5 }),
  }));

  useEffect(() => {
    // Detect touch device
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsMobile(true);
      return;
    }
    setIsMobile(false);

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsPointer(
        !!(target.closest("a") ||
          target.closest("button") ||
          target.closest("[data-cursor-pointer]"))
      );
    };

    const onLeave = () => setIsHidden(true);
    const onEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden>
      {/* Trail dots */}
      {trailRefs.map((trail, i) => {
        const size = 6 - i * 0.5;
        const opacity = 0.35 - i * 0.04;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              x: trail.x,
              y: trail.y,
              width: Math.max(size, 1.5),
              height: Math.max(size, 1.5),
              translateX: "-50%",
              translateY: "-50%",
              background: i % 3 === 0 ? "#f97316" : i % 3 === 1 ? "#ec4899" : "#8b5cf6",
              opacity: isHidden ? 0 : opacity,
              filter: "blur(1px)",
            }}
          />
        );
      })}

      {/* Outer ring */}
      <motion.div
        className="absolute rounded-full border border-white/30"
        style={{
          x: ringX,
          y: ringY,
          width: isPointer ? 52 : 44,
          height: isPointer ? 52 : 44,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHidden ? 0 : 0.6,
          background: isPointer
            ? "rgba(139,92,246,0.08)"
            : "transparent",
          transition: "width 0.2s, height 0.2s, background 0.2s",
        }}
      />

      {/* Main orb */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: orbX,
          y: orbY,
          width: isPointer ? 10 : 18,
          height: isPointer ? 10 : 18,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHidden ? 0 : 1,
          background: "linear-gradient(135deg, #f97316, #ec4899, #8b5cf6)",
          boxShadow: isPointer
            ? "0 0 16px rgba(139,92,246,0.7)"
            : "0 0 10px rgba(236,72,153,0.5)",
          transition: "width 0.2s, height 0.2s",
        }}
      />
    </div>
  );
}
