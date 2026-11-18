"use client";

import React, { useState } from "react";
import { SITE_DATA } from "@/content/site";
import { Search, ShieldCheck, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  onSearchFilter?: (filters: { projectType: string; bhk: string; budget: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearchFilter }) => {
  const [projectType, setProjectType] = useState("all");
  const [bhk, setBhk] = useState("all");
  const [budget, setBudget] = useState("all");
  const [imageError, setImageError] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchFilter) {
      onSearchFilter({ projectType, bhk, budget });
    }
    const explorerEl = document.getElementById("explorer");
    if (explorerEl) {
      explorerEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const architecturalEase = [0.65, 0, 0.35, 1];

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-ink/10 overflow-hidden bg-limestone">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 architectural-grid-lines pointer-events-none opacity-60" />

      {/* Top Meta Strip / RERA Plaque */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-2 flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-3">
        <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono tracking-widest text-muted">
          <span className="w-2 h-2 rounded-[2px] bg-brass inline-block" />
          <span>GANGA CORRIDOR • CIVIL LINES EXT. • KANPUR</span>
        </div>

        {/* RERA Architectural Plaque */}
        <div className="flex items-center gap-2 px-2.5 py-1 bg-surface border border-ink/10 rounded-[2px] text-[10px] sm:text-xs font-mono text-ink/80">
          <ShieldCheck className="w-3.5 h-3.5 text-brass stroke-[1.5] shrink-0" />
          <span>UP RERA: {SITE_DATA.brand.reraNumber}</span>
        </div>
      </div>

      {/* Main Headline & Architectural Narrative */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-8 sm:mb-12">
          <div className="lg:col-span-8">
            {/* Masked Rising Headline */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, ease: architecturalEase }}
                className="text-[44px] sm:text-7xl md:text-8xl lg:text-[100px] font-serif font-light text-ink leading-[0.92] tracking-tight"
              >
                Homes designed
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.1, ease: architecturalEase }}
                className="text-[44px] sm:text-7xl md:text-8xl lg:text-[100px] font-serif font-light text-ink leading-[0.92] tracking-tight"
              >
                around the way
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.2, ease: architecturalEase }}
                className="text-[44px] sm:text-7xl md:text-8xl lg:text-[100px] font-serif font-light text-ink leading-[0.92] tracking-tight italic"
              >
                you live.
              </motion.h1>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-3 pb-2">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: architecturalEase }}
              className="text-base sm:text-lg leading-relaxed text-ink/80 border-l border-brass pl-4"
            >
              Quiet luxury apartments and courtyard villas positioned above the sacred river plains of Kanpur. Built with authentic limestone masonry and structural restraint.
            </motion.p>
            <div className="text-xs font-mono tracking-label uppercase text-brass pl-4">
              Arohan Realty Desk • +91 90000 00000
            </div>
          </div>
        </div>

        {/* Master Architectural Visual Slot */}
        <div className="relative">
          <motion.div
            initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.9, delay: 0.25, ease: architecturalEase }}
            className="relative aspect-[16/10] sm:aspect-[21/9] w-full bg-surface border border-ink/10 overflow-hidden group shadow-none"
          >
            {/* Real Unsplash architectural photo */}
            {!imageError && (
              <div className="absolute inset-0 z-0">
                <Image
                  src={SITE_DATA.brand.heroImage}
                  alt="Limestone architectural residential tower at golden hour"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-[1.03]"
                  onError={() => setImageError(true)}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent pointer-events-none" />
              </div>
            )}

            {/* Architectural Grid Texture Fallback */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-8 z-10 text-white">
              <div className="flex justify-between items-start">
                <span className="text-[10px] sm:text-xs font-mono tracking-label text-brass uppercase bg-charcoal/80 px-2.5 py-1 border border-brass/30">
                  Site Elevation • Ganga Corridor Vista
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-limestone/80 bg-charcoal/80 px-2.5 py-1 border border-white/10">
                  Orientation: North-East 14°
                </span>
              </div>

              <div className="max-w-xl bg-charcoal/85 p-4 sm:p-5 border border-white/10 my-auto">
                <span className="text-[10px] font-mono uppercase tracking-label text-brass block mb-1">
                  Architectural Photography Brief
                </span>
                <p className="font-serif italic text-xs sm:text-sm md:text-base text-limestone leading-relaxed">
                  &ldquo;Monolithic limestone residential tower at golden hour, low angle looking up, dramatic clean sky, deep balcony recesses, no people, authentic north Indian contemporary brick and stone texture.&rdquo;
                </p>
              </div>

              <div className="flex justify-between items-center text-[10px] sm:text-[11px] font-mono text-limestone/70 border-t border-white/10 pt-2">
                <span>GANGA HEIGHTS • TOWER 01 & 02</span>
                <span className="hidden sm:inline">NATURAL LIGHT HARVESTING • 100% VASTU COMPLIANT</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Architectural Search Bar — Cantilevered Over Bottom Edge */}
          <div className="relative -mt-6 sm:-mt-10 z-20 max-w-5xl mx-auto px-2 sm:px-4">
            <form
              onSubmit={handleSearch}
              className="bg-limestone border border-ink/20 p-2 sm:p-3 rounded-[2px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 items-center"
              style={{ boxShadow: "none" }}
            >
              {/* Filter 1: Project Type */}
              <div className="flex flex-col px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-ink/10 bg-surface/50">
                <label htmlFor="project-type" className="text-[9px] uppercase font-sans font-medium tracking-label text-muted mb-0.5">
                  Development
                </label>
                <select
                  id="project-type"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="bg-transparent font-serif text-sm sm:text-base text-ink focus:outline-none cursor-pointer"
                >
                  <option value="all">All Kanpur Projects</option>
                  <option value="Apartments">Ganga Heights (Apartments)</option>
                  <option value="Villas">Arohan Villas (Courtyards)</option>
                  <option value="Plots">Arohan Plots (Land)</option>
                </select>
              </div>

              {/* Filter 2: BHK Configuration */}
              <div className="flex flex-col px-3 py-1.5 border-b sm:border-b-0 lg:border-r border-ink/10 bg-surface/50">
                <label htmlFor="bhk-select" className="text-[9px] uppercase font-sans font-medium tracking-label text-muted mb-0.5">
                  Configuration
                </label>
                <select
                  id="bhk-select"
                  value={bhk}
                  onChange={(e) => setBhk(e.target.value)}
                  className="bg-transparent font-serif text-sm sm:text-base text-ink focus:outline-none cursor-pointer"
                >
                  <option value="all">All Configurations</option>
                  <option value="2 BHK">2 BHK Sanctuary</option>
                  <option value="3 BHK">3 BHK River View</option>
                  <option value="4 BHK Villa">4 BHK Courtyard Villa</option>
                  <option value="Plot">Freehold Plots</option>
                </select>
              </div>

              {/* Filter 3: Budget Range */}
              <div className="flex flex-col px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-ink/10 bg-surface/50">
                <label htmlFor="budget-select" className="text-[9px] uppercase font-sans font-medium tracking-label text-muted mb-0.5">
                  Investment Scale
                </label>
                <select
                  id="budget-select"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="bg-transparent font-serif text-sm sm:text-base text-ink focus:outline-none cursor-pointer"
                >
                  <option value="all">Any Price Range</option>
                  <option value="under-70">Under Rs. 70 Lakh</option>
                  <option value="70-150">Rs. 70 Lakh – 1.5 Cr</option>
                  <option value="above-150">Above Rs. 1.5 Cr</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="p-0.5">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-charcoal text-limestone hover:bg-brass transition-colors duration-300 text-xs uppercase tracking-label font-sans font-medium py-3 px-4 rounded-[2px] border border-charcoal hover:border-brass group cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5 stroke-[1.5]" />
                  <span>Explore Residences</span>
                  <ArrowDown className="w-3.5 h-3.5 stroke-[1.5] group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
