# Ganga Heights by Arohan Realty — Kanpur

> Architectural, trustworthy, quietly luxurious portfolio website crafted for Arohan Realty, Kanpur.  
> Designed and engineered with bespoke architectural discipline, strict anti-AI-slop design intelligence, and zero generic templates.

---

## 1. Project Overview
- **Client:** Arohan Realty (Civil Lines, Kanpur, Uttar Pradesh)
- **Flagship Project:** Ganga Heights (2 & 3 BHK riverfront residences, ongoing)
- **Portfolio Projects:**
  - Ganga Heights (2 & 3 BHK Apartments, Ongoing, Rs. 62 Lakh onwards)
  - Arohan Villas (4 BHK Courtyard Villas, Ready to Move, Rs. 1.85 Cr onwards)
  - Arohan Plots (Freehold Demarcated Plots, Rs. 18 – 45 Lakh)
- **Primary Goals:** Lead capture for private site consultations, WhatsApp concierge engagement, and institutional credibility (UP RERA registration `UPRERAAGT12894 / PRJ-KAN-2023-8821`).
- **Tech Stack:** Next.js (App Router), React 18, Tailwind CSS, Framer Motion, TypeScript, Playwright.

---

## 2. Bespoke Design System (Tokens)

All design decisions strictly follow the architectural system defined in `governance/2_DESIGN_SYSTEM.md`:

### Palette Tokens
- **Canvas / Light Sections:** `#EFEBE4` (`limestone`)
- **Surface:** `#E4DED4` (`surface`)
- **Ink / Primary Text:** `#14120F` (`ink`)
- **Charcoal / Primary CTA:** `#1B1B1A` (`charcoal`)
- **Accent:** `#B08D57` (`brass`)
- **Dark Pine Section (EMI Calculator):** `#2F3E36` (`deep`)
- **Muted Text:** `#7D7A72` (`muted`)

### Typography
- **Headings & Display:** `Newsreader` (Google Fonts, Light weight, tight leading `0.92`, serif).
- **Body & Data:** `Schibsted Grotesk` (Google Fonts, geometric sans, hyper-readable).
- **Labels:** Small uppercase labels with `0.12em` letter-spacing.

### Architectural Restraint & Bans
- **Radius:** Strictly `2px` universally (masonry precision; zero pill buttons or bubbly cards).
- **Dividers:** 1px hairlines and visible 12-column architectural alignment grid.
- **Shadows:** Strictly `none`.
- **Banned:** Zero purple/blue SaaS gradients, zero glassmorphism, zero floating blobs, zero emoji, zero 3-equal cards, and zero marketing buzzwords (*"revolutionize"*, *"elevate"*, *"seamless"*, *"dream home"*, *"luxury living redefined"*, *"world-class"*).

---

## 3. The 13 Architecture Sections

1. **Navbar:** Transparent over hero with smooth transition to solid limestone upon scroll, wordmark left, quick jump links, and charcoal "Book Site Visit" CTA.
2. **Hero:** Masked rising headlines (*"Homes designed around the way you live."*), UP RERA plaque, full-bleed architectural visual slot, and cantilevered floating search bar linking directly to inventory.
3. **Numbers Strip:** Count-up metrics (3 projects, 480+ families, 12 years heritage, 2.4M sq ft delivered).
4. **Projects:** Large alternating full-width image/text rows with status tags, configuration, pricing, and specs.
5. **Listing Explorer:** Filter chips (BHK, status), interactive budget range slider, and mixed-size 12-column unit grid with area, floor, facing, and base price.
6. **Floor Plans:** Tabbed blueprint viewer (2 BHK, 3 BHK, 4 BHK Villa) with vector SVG schematics, carpet dimensions, and brochure download trigger.
7. **Amenities:** Two-column sticky layout synchronizing the active left list item with high-resolution architectural photography on the right.
8. **Location:** Stylised vector cartography map of Kanpur showing the Ganga Barrage corridor, major arterials, and transit distances.
9. **EMI Calculator (Dark Pine Section):** Real-time financial loan amortization engine with property price, down payment, interest rate, and tenure sliders, monthly outflow display, and SVG donut ratio chart.
10. **Site Visit Form:** Private appointment scheduler with name, phone, project, and date inputs, client validation, honeypot bot trap, `/api/lead` backend, and direct WhatsApp concierge button.
11. **Testimonials:** Stacked editorial homeowner interviews with unit, handover year, and verified resident notes.
12. **FAQ:** 6 real Kanpur builder questions addressing UP RERA, milestone payment plans, bank approvals, possession timelines, maintenance, and registry stamp duty.
13. **Footer:** Oversized signature CTA (*"Come see it in person."*), full corporate address in Civil Lines, operating hours, phone, WhatsApp, and legal UP RERA disclosures.

---

## 4. How to Configure `N8N_WEBHOOK_URL`

The lead capture form routes to `/api/lead`, which automatically forwards inquiries to your CRM or n8n workflow.

1. Create a local environment file:
   ```bash
   cp .env.example .env.local
   ```
2. Open `.env.local` and set your webhook endpoint:
   ```ini
   N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/lead-reception
   ```
3. When `N8N_WEBHOOK_URL` is set, `/api/lead` dispatches a JSON payload:
   ```json
   {
     "name": "Dr. Rajesh Khanna",
     "phone": "9876543210",
     "project": "Ganga Heights",
     "preferredDate": "2026-12-05",
     "source": "Ganga Heights Web Portal",
     "timestamp": "2026-11-18T08:35:00.000Z"
   }
   ```
4. If `N8N_WEBHOOK_URL` is omitted (development mode), the route handler gracefully logs the payload to the server console and returns a valid confirmation reference ID.

---

## 5. Security & Bot Prevention (Honeypot)
The form includes a hidden honeypot field `website_source_verification`:
- Invisible to human users via CSS and `aria-hidden="true"`.
- If automated bots populate this field, the server quietly drops the request, returning an HTTP 200 without executing the webhook or database mutation.

---

## 6. Development & Verification Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run full production build
npm run build

# Run Playwright QA suite and capture 375px/1440px screenshots
node scripts/qa_audit_all_sections.js
```
