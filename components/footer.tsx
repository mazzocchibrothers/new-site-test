import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const solutions = [
  { href: "/solutions/talent-acquisition", label: "Talent Acquisition" },
  { href: "/solutions/performance-management", label: "Performance Management" },
  { href: "/solutions/learning-development", label: "Learning & Development" },
  { href: "/solutions/internal-mobility", label: "Internal Mobility" },
  { href: "/solutions/project-resourcing", label: "Project Resourcing" },
];

const platform = [
  { href: "/product-overview", label: "Product Overview" },
  { href: "/science", label: "Science & Methodology" },
];

const company = [
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const certifications = [
  { label: "ISO 27001", color: "bg-blue-100 text-blue-700" },
  { label: "GDPR", color: "bg-purple-100 text-purple-700" },
  { label: "EU AI Act", color: "bg-orange-100 text-orange-700" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.webp"
                alt="Skillvue"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="font-bold text-xl text-white tracking-tight">
                Skillvue
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              The AI-powered talent intelligence platform that makes every people
              decision objective, predictive, and defensible.
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert.label}
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${cert.color}`}
                >
                  {cert.label}
                </span>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Platform</h3>
            <ul className="space-y-3">
              {platform.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Skillvue. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-slate-300 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
