"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { NumbersStrip } from "@/components/sections/NumbersStrip";
import { Projects } from "@/components/sections/Projects";
import { ListingExplorer } from "@/components/sections/ListingExplorer";
import { FloorPlans } from "@/components/sections/FloorPlans";
import { Amenities } from "@/components/sections/Amenities";
import { LocationMap } from "@/components/sections/LocationMap";
import { EmiCalculator } from "@/components/sections/EmiCalculator";
import { SiteVisitForm } from "@/components/sections/SiteVisitForm";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const [heroFilter, setHeroFilter] = useState<{
    projectType: string;
    bhk: string;
    budget: string;
  }>({
    projectType: "all",
    bhk: "all",
    budget: "all",
  });

  return (
    <div className="min-h-screen bg-limestone text-ink selection:bg-brass/20 selection:text-ink">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero
        onSearchFilter={(filters) => {
          setHeroFilter(filters);
        }}
      />

      {/* 3. Numbers Strip (Count-up Metrics) */}
      <NumbersStrip />

      {/* 4. Projects (Alternating Image/Text Rows) */}
      <Projects />

      {/* 5. Listing Explorer (Filter Chips + Budget Slider + Mixed Unit Grid) */}
      <ListingExplorer
        initialProjectType={heroFilter.projectType}
        initialBhk={heroFilter.bhk}
        initialBudget={heroFilter.budget}
      />

      {/* 6. Floor Plans (Interactive Tabs + Clean SVG Schematics) */}
      <FloorPlans />

      {/* 7. Amenities (Two-Column Sticky Interactive Sync) */}
      <Amenities />

      {/* 8. Location (Stylised Cartography SVG + Transit Distances) */}
      <LocationMap />

      {/* 9. EMI Calculator (Muted Pine Dark Section + Working Financial Model) */}
      <EmiCalculator />

      {/* 10. Site Visit Form (Honeypot + /api/lead + WhatsApp Direct) */}
      <SiteVisitForm />

      {/* 11. Testimonials (Stacked Homeowner Editorial Stories) */}
      <Testimonials />

      {/* 12. FAQ (6 Kanpur Real Estate Compliance Inquiries) */}
      <Faq />

      {/* 13. Footer (Oversized Signature CTA + Address + UP RERA) */}
      <Footer />
    </div>
  );
}
