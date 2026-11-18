# 5. DEPLOYMENT & PRODUCTION RUNBOOK

**Project:** Ganga Heights by Arohan Realty (Kanpur)  
**Target:** Production-Grade Next.js Portfolio Piece  
**Status:** Governance Specification

---

## 1. Environment Variables Configuration
Create a `.env.example` in the project root:

```ini
# Production Webhook for CRM / Lead Processing (Optional, defaults to graceful console log)
N8N_WEBHOOK_URL=

# Public Canonical Site URL (for SEO OpenGraph and JSON-LD generation)
NEXT_PUBLIC_SITE_URL=https://gangaheights.arohanrealty.com
```

---

## 2. SEO & Structured Data (JSON-LD) Specification
To establish authoritative local search trust in Kanpur, embed the following Schema.org payload in `app/layout.tsx`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": "https://gangaheights.arohanrealty.com/#organization",
      "name": "Arohan Realty",
      "url": "https://gangaheights.arohanrealty.com",
      "logo": "https://gangaheights.arohanrealty.com/brand/arohan-mark.svg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "VIP Road, Civil Lines",
        "addressLocality": "Kanpur",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "208001",
        "addressCountry": "IN"
      },
      "telephone": "+919000000000",
      "openingHours": "Mo-Su 09:30-18:30"
    },
    {
      "@type": "ApartmentComplex",
      "@id": "https://gangaheights.arohanrealty.com/#project-ganga-heights",
      "name": "Ganga Heights",
      "description": "Quiet luxury 2 and 3 BHK residential apartments along the Ganga corridor in Kanpur.",
      "containedInPlace": {
        "@type": "Place",
        "name": "Kanpur, Uttar Pradesh"
      },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Limestone Clubhouse", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "EV Fast Charging Bays", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "100% Uninterrupted Power Backup", "value": true }
      ]
    }
  ]
}
```

---

## 3. Build & Production Verification Commands
```bash
# 1. Type Check & Strict Linting
npm run lint

# 2. Production Compilation
npm run build

# 3. Headless Performance & Accessibility Audit
npx playwright test --workers=2
```

---

## 4. Launch Gate Checklist
- [ ] Next.js production build completes with 0 warnings and 0 errors.
- [ ] No `any` types present in TypeScript code.
- [ ] `.env.example` committed; real secrets excluded via `.gitignore`.
- [ ] All 13 sections present and fully responsive across 375px and 1440px viewports.
- [ ] Lighthouse score: Performance ≥ 90, Accessibility ≥ 90.
- [ ] RERA registration numbers clearly legible in Navbar, Hero, and Footer.
- [ ] Zero Git push commands executed (as per client directive).
