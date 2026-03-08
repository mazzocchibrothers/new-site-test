"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface CyclingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function CyclingText({ words, interval = 2600, className }: CyclingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  // Measure the longest word to set a stable min-width
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", position: "relative" }}
    >
      {/* Invisible spacer to hold the width of the longest word */}
      <span aria-hidden style={{ visibility: "hidden", pointerEvents: "none" }}>
        {longest}
      </span>

      {/* Animated word — absolutely positioned over spacer */}
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className={className}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0,  opacity: 1 }}
          exit={{   y: -20, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          style={{
            position: "absolute",
            left: 0,
            whiteSpace: "nowrap",
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
