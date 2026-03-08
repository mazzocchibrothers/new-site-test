"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
  itemClassName?: string;
  reverse?: boolean;
}

export function InfiniteMarquee({
  items,
  speed = 35,
  className,
  itemClassName,
  reverse = false,
}: InfiniteMarqueeProps) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items, ...items];

  return (
    <div className={cn("overflow-hidden relative", className)}>
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-12 items-center w-max"
        animate={{ x: reverse ? ["0%", "33.333%"] : ["0%", "-33.333%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={cn(
              "text-slate-400 font-semibold text-sm whitespace-nowrap hover:text-slate-600 transition-colors",
              itemClassName
            )}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Variant with dots as separators
export function DotMarquee({
  items,
  speed = 40,
  dark = false,
}: {
  items: string[];
  speed?: number;
  dark?: boolean;
}) {
  const doubled = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden relative">
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none",
          dark
            ? "bg-gradient-to-r from-[#0a0a14] to-transparent"
            : "bg-gradient-to-r from-slate-50 to-transparent"
        )}
      />
      <div
        className={cn(
          "absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none",
          dark
            ? "bg-gradient-to-l from-[#0a0a14] to-transparent"
            : "bg-gradient-to-l from-slate-50 to-transparent"
        )}
      />

      <motion.div
        className="flex gap-0 items-center w-max"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className={cn(
                "font-semibold text-sm whitespace-nowrap px-6",
                dark ? "text-white/40 hover:text-white/70" : "text-slate-400 hover:text-slate-600",
                "transition-colors"
              )}
            >
              {item}
            </span>
            <span
              className={cn(
                "text-xs",
                dark ? "text-white/20" : "text-slate-200"
              )}
            >
              ●
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
