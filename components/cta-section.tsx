"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "@/components/magnetic-button";

interface CTASectionProps {
  headline: string;
  subheadline?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  headline,
  subheadline,
  primaryLabel = "Book a Demo",
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative rounded-3xl overflow-hidden p-12 md:p-16"
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)",
              backgroundSize: "200% 200%",
            }}
            animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Pulsing glow rings */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,255,255,0.2), transparent)",
            }}
          />
          <motion.div
            className="absolute -inset-px rounded-3xl"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 80% 110%, rgba(255,255,255,0.1), transparent)",
            }}
          />

          {/* Floating blobs inside CTA */}
          <motion.div
            className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
            animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"
            animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
            >
              {headline}
            </motion.h2>

            {subheadline && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/80 text-lg mb-8 max-w-xl mx-auto"
              >
                {subheadline}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <MagneticButton>
                <Link
                  href="/book-demo"
                  className="inline-flex items-center gap-2 bg-white text-purple-700 hover:bg-white/90 font-bold text-base rounded-xl px-8 py-3.5 shadow-xl transition-all hover:shadow-2xl hover:shadow-white/20 group"
                >
                  {primaryLabel}
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </MagneticButton>

              {secondaryLabel && secondaryHref && (
                <MagneticButton>
                  <Link
                    href={secondaryHref}
                    className="inline-flex items-center gap-2 border-2 border-white/40 text-white hover:bg-white/10 font-semibold rounded-xl px-8 py-3.5 transition-all"
                  >
                    {secondaryLabel}
                  </Link>
                </MagneticButton>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
