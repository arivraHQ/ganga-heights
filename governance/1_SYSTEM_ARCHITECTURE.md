# 1. SYSTEM ARCHITECTURE & ENGINEERING BLUEPRINT

**Project:** Ganga Heights by Arohan Realty (Kanpur)  
**Lead:** Principal Full-Stack Architect & Product Designer  
**Status:** Phase 0 Mandate — Governance Specification

---

## 1. Core Technology Stack
- **Framework:** Next.js 14+ / 15 (App Router, React 18/19, Server Components by default)
- **Styling:** Tailwind CSS (Strict custom token configuration, zero arbitrary utility slop)
- **Animation & Transitions:** Framer Motion (custom architectural cubic-bezier curves, hardware-accelerated transforms, strict `prefers-reduced-motion` compliance)
- **Typography Integration:** `next/font/google` loading `Newsreader` (serif headings) and `Schibsted_Grotesk` (body sans) with zero layout shift (FOUT/FOIT eliminated)
- **Icons & Graphics:** Bespoke inline SVGs and Lucide-React architectural line icons (strictly 1.25px stroke, no emoji, no icons-in-circles)
- **Type Safety:** TypeScript (Strict mode enabled, zero `any` policy)

---

## 2. Directory Structure
```
c:/Users/Lenovo/OneDrive/Desktop/SAMPLE/Real-state/
├── .agents/
│   ├── rules/
│   │   └── brand-rules.md
│   └── PROJECT_MEMORY.md
├── governance/
│   ├── 1_SYSTEM_ARCHITECTURE.md
│   ├── 2_DESIGN_SYSTEM.md
│   ├── 3_DATA_CONTRACTS.md
│   ├── 4_QA_PLAYBOOK.md
│   └── 5_DEPLOYMENT_RUNBOOK.md
├── content/
│   └── site.ts                  # Single source of truth for all copy, units, data
├── components/
│   ├── ui/                      # Atoms: Button, Input, Modal, Badge, ArchitecturalDivider
│   ├── layout/                  # Navbar, Footer, SectionWrapper, GridLines
│   └── sections/                # 13 Dedicated, bespoke section components
│       ├── Hero.tsx
│       ├── NumbersStrip.tsx
│       ├── Projects.tsx
│       ├── ListingExplorer.tsx
│       ├── FloorPlans.tsx
│       ├── Amenities.tsx
│       ├── LocationMap.tsx
│       ├── EmiCalculator.tsx
│       ├── SiteVisitForm.tsx
│       ├── Testimonials.tsx
│       └── Faq.tsx
├── app/
│   ├── layout.tsx               # Root layout, font definitions, global metadata
│   ├── page.tsx                 # Main architectural landing page assembly
│   ├── globals.css              # CSS custom properties, base reset, gridlines
│   └── api/
│       └── lead/
│           └── route.ts         # Server-side lead handler with honeypot & N8N webhook
├── public/
│   ├── images/                  # Structured image slots with tone-matched placeholders
│   └── plans/                   # Architectural SVG floor plan blueprints
├── tailwind.config.ts           # Token mapping
├── tsconfig.json
└── package.json
```

---

## 3. State Management & Data Flow Architecture
1. **Zero Global State Bloat:** No Redux or heavy store. Local state handled via React `useState`/`useReducer`.
2. **Search-to-Listing Deep Linking:** Floating Hero search bar triggers smooth scroll navigation and applies filter state (project type, BHK, budget) directly to the `ListingExplorer` component via URL parameters or state dispatch.
3. **Sticky Interactive Amenities:** Two-column sticky scroll controller synchronizing the active left list item with the corresponding high-resolution right architectural rendering.
4. **Interactive SVG Floor Plans:** Tabbed vector display allowing instant switching between 2 BHK, 3 BHK, and 4 BHK layouts with instantaneous carpet area updates.
5. **Interactive EMI Engine:** Pure client-side mathematical loan amortization formula recalculating monthly installment, principal vs. interest breakdown, and rendering an SVG progress arc.

---

## 4. API & Backend Integration Contract
- **Endpoint:** `POST /api/lead`
- **Security & Anti-Spam:**
  - Hidden honeypot field (`website_source_verification`). If populated, returns immediate mock 200 without sending payload (bot deflection).
  - Validation: Indian phone format (`+91` or 10-digit regex), valid name length, required project enum, valid ISO date string.
- **Webhook Integration:**
  - Evaluates `process.env.N8N_WEBHOOK_URL`.
  - If configured, asynchronously dispatches JSON payload with timeout (5000ms).
  - If unconfigured (development mode), logs payload safely and returns success.
- **WhatsApp Direct Fallback:**
  - Form offers instant click-through to WhatsApp Business API pre-filling lead details (`https://wa.me/919000000000?text=...`).

---

## 5. Mobile-First & Responsive Strategy
- Breakpoint tier:
  - Mobile: `375px - 767px` (1-column architectural stacking, horizontal touch carousels with visible scroll indicators)
  - Tablet: `768px - 1023px` (Adaptive 6-column grid)
  - Desktop: `1024px - 1440px+` (Rigid 12-column architectural grid with visible 1px line separators)
