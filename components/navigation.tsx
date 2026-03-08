"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const solutions = [
  {
    href: "/solutions/talent-acquisition",
    label: "Talent Acquisition",
    description: "Predict performance, not just potential",
  },
  {
    href: "/solutions/performance-management",
    label: "Performance Management",
    description: "Replace opinion with objective data",
  },
  {
    href: "/solutions/learning-development",
    label: "Learning & Development",
    description: "Fund training where gaps actually exist",
  },
  {
    href: "/solutions/internal-mobility",
    label: "Internal Mobility",
    description: "Your next hire might already work for you",
  },
  {
    href: "/solutions/project-resourcing",
    label: "Project Resourcing",
    description: "Staff on capability, not availability",
  },
];

const platform = [
  {
    href: "/product-overview",
    label: "Product Overview",
    description: "One platform, every talent decision",
  },
  {
    href: "/science",
    label: "Science",
    description: "I/O psychology meets AI precision",
  },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logo.webp"
              alt="Skillvue"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span
              className={cn(
                "font-bold text-xl tracking-tight transition-colors duration-300",
                scrolled ? "text-slate-900" : "text-white"
              )}
            >
              Skillvue
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Platform dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("platform")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  scrolled
                    ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                Platform
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    openMenu === "platform" && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openMenu === "platform" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200/60 p-2 overflow-hidden"
                  >
                    {platform.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <span className="font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">
                          {item.label}
                        </span>
                        <span className="text-sm text-slate-500">
                          {item.description}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("solutions")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  scrolled
                    ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                Solutions
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    openMenu === "solutions" && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openMenu === "solutions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-200/60 p-2 overflow-hidden"
                  >
                    {solutions.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <span className="font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">
                          {item.label}
                        </span>
                        <span className="text-sm text-slate-500">
                          {item.description}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              className="brand-gradient text-white hover:opacity-90 font-semibold rounded-xl px-6 shadow-lg shadow-purple-500/20"
            >
              <Link href="/book-demo">
                Book a Demo
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {/* Platform */}
              <button
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-slate-800 font-semibold hover:bg-slate-50"
                onClick={() =>
                  setMobileExpanded(
                    mobileExpanded === "platform" ? null : "platform"
                  )
                }
              >
                Platform
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    mobileExpanded === "platform" && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {mobileExpanded === "platform" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 space-y-1 overflow-hidden"
                  >
                    {platform.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-purple-600"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Solutions */}
              <button
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-slate-800 font-semibold hover:bg-slate-50"
                onClick={() =>
                  setMobileExpanded(
                    mobileExpanded === "solutions" ? null : "solutions"
                  )
                }
              >
                Solutions
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    mobileExpanded === "solutions" && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {mobileExpanded === "solutions" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 space-y-1 overflow-hidden"
                  >
                    {solutions.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-purple-600"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="pt-3 pb-2">
                <Button
                  asChild
                  className="w-full brand-gradient text-white font-semibold rounded-xl"
                >
                  <Link href="/book-demo" onClick={() => setMobileOpen(false)}>
                    Book a Demo
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
