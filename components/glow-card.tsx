"use client";

import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  return <div className={cn(className)}>{children}</div>;
}
