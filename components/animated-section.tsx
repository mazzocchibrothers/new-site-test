"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring, useMotionValue, animate } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationVariant = "fade" | "blur" | "scale" | "slide";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  variant?: AnimationVariant;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  variant = "fade",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  const getInitial = () => {
    const base = { opacity: 0 };
    if (variant === "blur" || variant === "scale") return { ...base, y: 16 };
    return {
      ...base,
      y: direction === "up" ? 20 : 0,
      x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
    };
  };

  const getVisible = () => ({ opacity: 1, y: 0, x: 0 });

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? getVisible() : getInitial()}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Word-by-word blur reveal
interface BlurRevealProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function BlurReveal({
  text,
  className,
  delay = 0,
  wordDelay = 0.065,
  as: Tag = "p",
}: BlurRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "50px" });
  const words = text.split(" ");

  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.p;

  return (
    <MotionTag ref={ref as React.RefObject<HTMLParagraphElement>} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{
            duration: 0.3,
            delay: delay + i * wordDelay,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="inline-block"
          style={{ marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}

// Spring-physics number counter with easing
interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2.2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const motionValue = { val: 0 };
    const controls = animate(motionValue.val, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // spring-like easing
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

// Enhanced staggered grid with blur variant
interface StaggeredListProps {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  delay?: number;
  blur?: boolean;
}

export function StaggeredList({
  children,
  className,
  itemClassName,
  delay = 0,
  blur = false,
}: StaggeredListProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{
            duration: 0.35,
            delay: delay + i * 0.07,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className={itemClassName}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

// Fade-in line (e.g. connecting steps)
export function AnimatedLine({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scaleY: 0, opacity: 0 }}
      animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
      style={{ originY: 0 }}
      transition={{ duration: 1.2, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    />
  );
}

// Number pop badge for stats
export function SpringNumber({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);
  const [popped, setPopped] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    setPopped(true);
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={popped ? { scale: 1, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      {display.toLocaleString()}
      {suffix}
    </motion.span>
  );
}
