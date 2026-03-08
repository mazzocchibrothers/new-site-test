"use client";

import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}

export function TiltCard({ children, className }: TiltCardProps) {
  return <div className={cn(className)}>{children}</div>;
}
