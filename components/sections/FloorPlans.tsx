"use client";

import React, { useState } from "react";
import { SITE_DATA } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Download, Check, FileText } from "lucide-react";

export const FloorPlans: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const currentPlan = SITE_DATA.floorPlans[activeTab];

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="plans" className="py-20 md:py-28 bg-limestone border-b border-ink/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="04 / ARCHITECTURAL SCHEMATICS"
          tag="FLOOR PLAN BLUEPRINTS"
          title="Structural Precision & Cross-Ventilation."
          subtitle="Every residence features private foyer acoustic separation, maximum natural sun angle capture, and dedicated utility balconies."
        />

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 border-b border-ink/10 pb-4 mb-10">
          {SITE_DATA.floorPlans.map((plan, idx) => (
            <button
              key={plan.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 text-xs uppercase tracking-label font-sans font-medium transition-all rounded-[2px] border cursor-pointer ${
                activeTab === idx
                  ? "bg-charcoal text-limestone border-charcoal"
                  : "bg-surface/50 text-ink/70 border-ink/15 hover:border-ink/40"
              }`}
            >
              {plan.bhk}
            </button>
          ))}
        </div>

        {/* Plan Display Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-surface/40 p-6 sm:p-10 border border-ink/15 rounded-[2px]">
          {/* Architectural SVG Plan Drawing */}
          <div className="lg:col-span-7 bg-limestone border border-ink/15 p-6 rounded-[2px] relative overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
            {/* Architectural Blueprint Grid Pattern */}
            <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,#B08D57_1px,transparent_1px),linear-gradient(to_bottom,#B08D57_1px,transparent_1px)] bg-[size:20px_20px]" />

            {/* Corner Crosshairs */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-brass" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-brass" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-brass" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-brass" />

            {/* SVG Blueprints according to typology */}
            {currentPlan.svgType === "2bhk" && (
              <svg viewBox="0 0 500 400" className="w-full h-auto max-w-lg text-ink z-10 stroke-ink fill-none" strokeWidth="1.5">
                {/* Outer Wall Boundary */}
                <rect x="40" y="40" width="420" height="320" strokeWidth="2.5" stroke="#14120F" />
                {/* Master Bedroom */}
                <rect x="40" y="40" width="220" height="170" strokeWidth="1.5" strokeDasharray="none" />
                <text x="100" y="125" className="fill-ink text-[12px] font-sans font-medium" stroke="none">MASTER BEDROOM</text>
                <text x="110" y="145" className="fill-muted text-[10px] font-mono" stroke="none">14&apos;0&quot; × 12&apos;0&quot;</text>
                {/* Bedroom 2 */}
                <rect x="40" y="210" width="220" height="150" strokeWidth="1.5" />
                <text x="110" y="280" className="fill-ink text-[12px] font-sans font-medium" stroke="none">BEDROOM 02</text>
                <text x="115" y="300" className="fill-muted text-[10px] font-mono" stroke="none">12&apos;0&quot; × 11&apos;0&quot;</text>
                {/* Living / Dining Pavilion */}
                <rect x="260" y="40" width="200" height="230" strokeWidth="1.5" />
                <text x="300" y="145" className="fill-ink text-[12px] font-sans font-medium" stroke="none">LIVING & DINING</text>
                <text x="320" y="165" className="fill-muted text-[10px] font-mono" stroke="none">18&apos;6&quot; × 14&apos;0&quot;</text>
                {/* Kitchen */}
                <rect x="260" y="270" width="130" height="90" strokeWidth="1.5" />
                <text x="290" y="320" className="fill-ink text-[11px] font-sans font-medium" stroke="none">KITCHEN</text>
                {/* Balcony Deck */}
                <rect x="390" y="270" width="70" height="90" stroke="#B08D57" strokeDasharray="3 3" />
                <text x="400" y="315" className="fill-brass text-[9px] font-mono" stroke="none">DECK</text>
                {/* North Indicator */}
                <circle cx="430" cy="70" r="14" stroke="#B08D57" strokeWidth="1" />
                <line x1="430" y1="84" x2="430" y2="56" stroke="#B08D57" strokeWidth="1.5" />
                <text x="427" y="53" className="fill-brass text-[10px] font-mono font-bold" stroke="none">N</text>
              </svg>
            )}

            {currentPlan.svgType === "3bhk" && (
              <svg viewBox="0 0 500 400" className="w-full h-auto max-w-lg text-ink z-10 stroke-ink fill-none" strokeWidth="1.5">
                <rect x="30" y="30" width="440" height="340" strokeWidth="2.5" stroke="#14120F" />
                <rect x="30" y="30" width="180" height="160" />
                <text x="70" y="110" className="fill-ink text-[12px] font-sans font-medium" stroke="none">MASTER SUITE</text>
                <text x="80" y="130" className="fill-muted text-[10px] font-mono" stroke="none">16&apos;0&quot; × 13&apos;6&quot;</text>
                
                <rect x="30" y="190" width="180" height="180" />
                <text x="80" y="275" className="fill-ink text-[12px] font-sans font-medium" stroke="none">BEDROOM 02</text>
                <text x="85" y="295" className="fill-muted text-[10px] font-mono" stroke="none">13&apos;0&quot; × 12&apos;0&quot;</text>

                <rect x="210" y="30" width="260" height="200" />
                <text x="270" y="125" className="fill-ink text-[13px] font-sans font-medium" stroke="none">GRAND RIVER SALON</text>
                <text x="310" y="145" className="fill-muted text-[10px] font-mono" stroke="none">22&apos;0&quot; × 16&apos;0&quot;</text>

                <rect x="210" y="230" width="140" height="140" />
                <text x="245" y="300" className="fill-ink text-[11px] font-sans font-medium" stroke="none">BEDROOM 03</text>
                
                <rect x="350" y="230" width="120" height="80" />
                <text x="380" y="275" className="fill-ink text-[11px] font-sans font-medium" stroke="none">KITCHEN</text>

                <rect x="350" y="310" width="120" height="60" stroke="#B08D57" strokeDasharray="3 3" />
                <text x="375" y="345" className="fill-brass text-[9px] font-mono" stroke="none">RIVER BALCONY</text>

                <circle cx="440" cy="65" r="14" stroke="#B08D57" strokeWidth="1" />
                <line x1="440" y1="79" x2="440" y2="51" stroke="#B08D57" strokeWidth="1.5" />
                <text x="437" y="48" className="fill-brass text-[10px] font-mono font-bold" stroke="none">N</text>
              </svg>
            )}

            {currentPlan.svgType === "4bhk" && (
              <svg viewBox="0 0 500 400" className="w-full h-auto max-w-lg text-ink z-10 stroke-ink fill-none" strokeWidth="1.5">
                <rect x="30" y="30" width="440" height="340" strokeWidth="2.5" stroke="#14120F" />
                {/* Central Open-to-sky Atrium */}
                <rect x="190" y="130" width="120" height="120" stroke="#B08D57" strokeWidth="2" strokeDasharray="4 2" />
                <text x="210" y="195" className="fill-brass text-[10px] font-mono font-bold" stroke="none">COURTYARD</text>

                <rect x="30" y="30" width="160" height="160" />
                <text x="65" y="110" className="fill-ink text-[12px] font-sans font-medium" stroke="none">MASTER SUITE</text>

                <rect x="30" y="190" width="160" height="180" />
                <text x="65" y="280" className="fill-ink text-[12px] font-sans font-medium" stroke="none">SENIOR SUITE</text>

                <rect x="310" y="30" width="160" height="160" />
                <text x="345" y="110" className="fill-ink text-[12px] font-sans font-medium" stroke="none">FORMAL SALON</text>

                <rect x="310" y="190" width="160" height="180" />
                <text x="340" y="280" className="fill-ink text-[12px] font-sans font-medium" stroke="none">KITCHEN & SERVICE</text>

                <circle cx="440" cy="65" r="14" stroke="#B08D57" strokeWidth="1" />
                <line x1="440" y1="79" x2="440" y2="51" stroke="#B08D57" strokeWidth="1.5" />
                <text x="437" y="48" className="fill-brass text-[10px] font-mono font-bold" stroke="none">N</text>
              </svg>
            )}

            <div className="absolute bottom-4 left-6 text-[10px] font-mono text-muted uppercase">
              Scale 1:100 Architectural Metric • True North Aligned
            </div>
          </div>

          {/* Details & Specs Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono text-brass">
                SCHEMATIC SPECIFICATION
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-ink mt-1">
                {currentPlan.title}
              </h3>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-ink/10">
              <div>
                <span className="text-[10px] uppercase font-sans font-medium tracking-label text-muted block">
                  Carpet Area (RERA)
                </span>
                <span className="font-serif text-2xl text-ink font-normal">
                  {currentPlan.carpetArea}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-sans font-medium tracking-label text-muted block">
                  Super Built-up
                </span>
                <span className="font-serif text-2xl text-ink font-normal">
                  {currentPlan.superArea}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-sans font-medium tracking-label text-muted block">
                  Outdoor Decks
                </span>
                <span className="font-mono text-sm text-ink/90">
                  {currentPlan.balconies}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-sans font-medium tracking-label text-muted block">
                  Solar Orientation
                </span>
                <span className="font-mono text-sm text-ink/90">
                  {currentPlan.facing}
                </span>
              </div>
            </div>

            {/* Architectural Features */}
            <div className="space-y-2.5">
              <span className="text-[11px] uppercase font-sans font-medium tracking-label text-muted block">
                Key Spatial Attributes:
              </span>
              {currentPlan.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-xs text-ink/80 font-sans">
                  <span className="w-1.5 h-1.5 rounded-[2px] bg-brass mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-4">
              <button
                type="button"
                onClick={handleDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-charcoal text-limestone hover:bg-brass transition-colors duration-300 text-xs uppercase tracking-label font-sans font-medium px-6 py-3.5 rounded-[2px] border border-charcoal hover:border-brass cursor-pointer"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-limestone" />
                    <span>Brochure Specifications Queued</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-brass" />
                    <span>Download Architectural Brochure</span>
                  </>
                )}
              </button>
              <span className="block text-[10px] font-mono text-muted mt-2">
                Includes structural reinforcement schedule and MEP specifications (PDF 4.2 MB)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
