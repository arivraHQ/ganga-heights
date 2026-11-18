# 2. DESIGN SYSTEM SPECIFICATION (BESPOKE ARCHITECTURAL DIRECTION)

**Brand:** Ganga Heights by Arohan Realty (Kanpur)  
**Aesthetic:** Quiet Luxury, High-Ticket Editorial Architecture, Indian Heritage Restraint  
**Status:** Governance Level 1 — Immutable Tokens

---

## 1. Color Palette Tokens
All colors are defined strictly as CSS custom variables and Tailwind utility classes. Raw hex values are banned inside JSX files.

| Token Name | Hex Code | Semantic Role | Tailwind Class |
| :--- | :--- | :--- | :--- |
| `bg` | `#EFEBE4` | Limestone Primary Canvas (Light sections) | `bg-limestone` |
| `surface` | `#E4DED4` | Secondary Surface / Elevated Architectural Card | `bg-surface` |
| `text` | `#14120F` | High-contrast Ink / Primary Typography | `text-ink` |
| `primary` | `#1B1B1A` | Charcoal Solid Elements & Primary Buttons | `bg-charcoal text-limestone` |
| `accent` | `#B08D57` | Warm Antique Brass / Active State / Rule Lines | `text-brass border-brass` |
| `deep` | `#2F3E36` | Muted Pine Dark Canvas (Dark sections: EMI, Form) | `bg-deep text-limestone` |
| `muted` | `#7D7A72` | Secondary Descriptive Copy & Architectural Grid | `text-muted border-muted/30` |

---

## 2. Typography Hierarchy & Tokens

### Font Families
- **Headings / Editorial Display:** `Newsreader` (Google Fonts, Light 300 & Regular 400 weights). Tight line-height, sophisticated editorial voice.
- **Body / Interface / Data:** `Schibsted Grotesk` (Google Fonts, Regular 400 & Medium 500). Clean, geometric, hyper-readable.

### Typographic Scale
| Level | Font Size (Desktop) | Font Size (Mobile) | Line Height | Tracking | Weight |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | `96px - 120px` | `48px` | `0.92` | `-0.03em` | Light (300) |
| **Section H2** | `56px` | `34px` | `1.05` | `-0.02em` | Light (300) |
| **H3 / Project Title**| `36px` | `26px` | `1.15` | `-0.01em` | Regular (400) |
| **H4 / Subtitle** | `24px` | `20px` | `1.30` | `0` | Medium (500) |
| **Body Primary** | `17px` | `16px` | `1.65` | `0` | Regular (400) |
| **Body Secondary**| `14px` | `13px` | `1.50` | `0.01em` | Regular (400) |
| **Micro Labels** | `11px - 12px` | `10px - 11px` | `1.20` | `0.12em` | Medium (500), UPPERCASE |

---

## 3. Structural Geometry & Shape System
- **Corner Radius:** `2px` universally (almost square, razor-sharp architectural masonry look). Zero rounded pill buttons, zero `rounded-xl` or `rounded-2xl` bubbles.
- **Lines & Borders:** `1px solid` architectural demarcation lines.
  - Light mode: `rgba(20, 18, 15, 0.12)` or `border-ink/10`
  - Dark mode (`deep` pine): `rgba(239, 235, 228, 0.15)` or `border-limestone/15`
  - Accent rules: `1px solid #B08D57` (brass)
- **Shadows:** Strictly `none`. Depth is communicated strictly via tonal contrast (Limestone on Surface, or Charcoal against Limestone) and 1px architectural hairline dividers.
- **Imagery Aspect Ratios:** Tall rectangular crops (4:5, 3:4, or 16:9 for master aerials). Generous architectural whitespace margins around photos.

---

## 4. Grid System & Section Layouts
- **12-Column Architectural Grid:** Visible 1px alignment lines running along margins.
- **Numbered Section Headers:** Every section features an asymmetric top corner index:
  - `01 / Projects`
  - `02 / Unit Explorer`
  - `03 / Architectural Plans`
  - `04 / Estate Amenities`
  - `05 / Strategic Location`
  - `06 / Investment & EMI`
  - `07 / Private Site Consultation`
  - `08 / Resident Perspectives`
  - `09 / Clarifications (FAQ)`
- **Atmospheric Alternation:**
  - Sections 1–8: Limestone Light (`#EFEBE4`)
  - Sections 9–10 (EMI & Site Visit): Muted Pine Deep Dark (`#2F3E36`)
  - Sections 11–12 (Testimonials & FAQ): Limestone Light (`#EFEBE4`)
  - Section 13 (Footer): Charcoal Deep (`#1B1B1A`)

---

## 5. Motion Orchestration & Micro-interactions
- **Custom Easing:** `cubic-bezier(0.65, 0, 0.35, 1)`
- **Standard Transition Duration:** `700ms - 900ms`
- **Headline Mask Reveal:**
  ```css
  overflow: hidden;
  /* Text starts with translateY(100%) and animates to translateY(0) */
  ```
- **Image Wipe Reveal:**
  ```css
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  /* Starts from polygon(0 100%, 100% 100%, 100% 100%, 0 100%) */
  ```
- **Interactive Hover:**
  - Card/Row Hover: Image zooms subtly from `scale: 1.0` to `scale: 1.04` over 800ms.
  - Interactive link: Brass architectural arrow (`→`) translates `+6px` horizontally.
- **Prefers-Reduced-Motion:** Instantly degrades to standard opacity fade (150ms) or static presentation.

---

## 6. Prohibited Elements (BANNED LIST)
1. NO purple, indigo, or cyan gradients.
2. NO glassmorphism, blur cards, or frosted glowing overlays.
3. NO generic fonts (Inter, Roboto, Poppins, Montserrat, Playfair Display).
4. NO circular icon badges or emoji decoration.
5. NO 3-column equal card grids or centered hero text layouts.
6. NO marketing hyperbole ("revolutionize", "elevate", "seamless", "dream home", "luxury living redefined", "world-class").
7. NO fake urgency ("Only 2 units remaining!", "Offer ending in 10 minutes").
