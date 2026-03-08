# Skillvue Corporate Website — CLAUDE.md

## Project Overview
Corporate website for Skillvue, an AI-powered talent intelligence platform targeting the UK enterprise market. Built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Tech Stack
- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 + custom CSS in `app/globals.css`
- **UI Components**: shadcn/ui (`components/ui/`)
- **Animations**: Framer Motion (client components only)
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Deploy**: Vercel

## Run Locally
```bash
cd skillvue-site
npm run dev
```
Visit http://localhost:3000

## Project Structure
```
skillvue-site/
├── app/
│   ├── layout.tsx          # Root layout with Navigation + Footer
│   ├── globals.css         # Global styles, custom CSS classes
│   ├── page.tsx            # Homepage
│   ├── product-overview/   # Platform overview page
│   ├── science/            # Science & methodology page
│   ├── book-demo/          # Demo request page (form)
│   └── solutions/
│       ├── talent-acquisition/
│       ├── performance-management/
│       ├── learning-development/
│       ├── internal-mobility/
│       └── project-resourcing/
├── components/
│   ├── ui/                 # shadcn/ui components (do not edit manually)
│   ├── navigation.tsx      # Sticky nav with dropdown menus (client)
│   ├── footer.tsx          # Site footer (server)
│   ├── animated-section.tsx # Animation wrappers: AnimatedSection, AnimatedCounter, StaggeredList (client)
│   ├── cta-section.tsx     # Reusable CTA banner (server)
│   └── solution-page.tsx   # Reusable template for all 5 solution pages (server)
├── lib/
│   └── utils.ts            # cn() utility
└── public/
    └── logo.webp           # Skillvue logo
```

## Key Design Decisions

### Brand Colors
The brand gradient is **orange → pink → purple**, matching the logo:
- Orange: `#f97316`
- Pink: `#ec4899`
- Purple: `#8b5cf6`

Use these CSS classes:
- `.gradient-text` — static gradient text
- `.gradient-text-animated` — animated shimmer gradient text
- `.brand-gradient` — background gradient (orange→pink→purple)
- `.brand-gradient-subtle` — very light tinted background
- `.hero-bg` — dark hero section background with radial gradients
- `.dark-section` — dark section with subtle purple radial gradient
- `.glass-card` — frosted glass card for dark backgrounds

### Architecture: Server vs Client Components
- **Server components** (default): All page files, footer, CTA section, solution page template
- **Client components** (`"use client"`): navigation.tsx, animated-section.tsx
- Never add `"use client"` to page files — use AnimatedSection wrappers for animations in pages

### Adding a New Solution Page
1. Create `app/solutions/[slug]/page.tsx`
2. Import `SolutionPage` from `@/components/solution-page`
3. Pass all required props (see existing pages for reference)
4. Add to navigation dropdowns in `components/navigation.tsx`

### Adding shadcn Components
```bash
cd skillvue-site
npx shadcn@latest add [component-name] --yes
```

## Content Source
Content sourced from two PDF files in the parent directory:
- `Skillvue English Solution Pages - Feb 2026.pdf` — 5 solution pages content
- `Skillvue English Product Pages - Feb 2026.pdf` — Platform overview + Science page content

## SEO
- All pages export `metadata` from Next.js
- Default metadata in `app/layout.tsx`
- Page-specific metadata overrides in each page file
- Server components render full HTML for crawlers

## Deployment (Vercel)
The site is ready to deploy on Vercel:
1. Push to GitHub
2. Import repo in Vercel
3. Root directory: `skillvue-site`
4. Framework preset: Next.js (auto-detected)
5. No environment variables required

## Key User Preferences
- People-first messaging is core to the brand ("people are the centre of our business")
- UK English spelling throughout (behaviour, organisation, labour, centre, etc.)
- No dashboard screenshots in hero sections — use conceptual/illustrative content
- Pain before solution — every solution page starts with the problem
- Science is the differentiator — thread it through all pages
- Enterprise trust signals on every page
