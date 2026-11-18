"use client";

import React, { useState, useMemo } from "react";
import { SITE_DATA, Unit } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight, Compass, Layers, Maximize2 } from "lucide-react";

interface ListingExplorerProps {
  initialProjectType?: string;
  initialBhk?: string;
  initialBudget?: string;
}

export const ListingExplorer: React.FC<ListingExplorerProps> = ({
  initialBhk = "all",
}) => {
  const [selectedBhk, setSelectedBhk] = useState(initialBhk);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [maxBudgetLakhs, setMaxBudgetLakhs] = useState<number>(220); // up to 2.2 Cr

  const bhkOptions = [
    { label: "All Typologies", value: "all" },
    { label: "2 BHK", value: "2 BHK" },
    { label: "3 BHK", value: "3 BHK" },
    { label: "4 BHK Villa", value: "4 BHK Villa" },
    { label: "Plots", value: "Plot" },
  ];

  const statusOptions = [
    { label: "All Status", value: "all" },
    { label: "Available Only", value: "Available" },
    { label: "Reserved", value: "Reserved" },
  ];

  const filteredUnits = useMemo(() => {
    return SITE_DATA.units.filter((unit) => {
      // BHK check
      if (selectedBhk !== "all") {
        if (!unit.bhk.includes(selectedBhk)) return false;
      }
      // Status check
      if (selectedStatus !== "all" && unit.status !== selectedStatus) {
        return false;
      }
      // Budget check
      if (unit.priceNumericLakhs > maxBudgetLakhs) {
        return false;
      }
      return true;
    });
  }, [selectedBhk, selectedStatus, maxBudgetLakhs]);

  const formatBudgetDisplay = (lakhs: number) => {
    if (lakhs >= 100) {
      return `Rs. ${(lakhs / 100).toFixed(2)} Cr`;
    }
    return `Rs. ${lakhs} Lakh`;
  };

  return (
    <section id="explorer" className="py-20 md:py-28 bg-surface/60 border-b border-ink/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03 / INVENTORY"
          tag="REAL-TIME RESIDENCE EXPLORER"
          title="Curated Unit Portfolio."
          subtitle="Explore distinct floor plates across Ganga Heights, Arohan Villas, and Arohan Plots with verified carpet dimensions and directional orientation."
        />

        {/* Filter Controls Suite */}
        <div className="bg-limestone border border-ink/15 p-5 md:p-6 rounded-[2px] mb-12 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* BHK Filter Chips */}
            <div>
              <span className="block text-[10px] font-sans font-medium uppercase tracking-label text-muted mb-2">
                Filter by Configuration
              </span>
              <div className="flex flex-wrap gap-2">
                {bhkOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setSelectedBhk(opt.value)}
                    className={`text-xs uppercase tracking-label font-sans font-medium px-3.5 py-2 rounded-[2px] border transition-colors cursor-pointer ${
                      selectedBhk === opt.value
                        ? "bg-charcoal text-limestone border-charcoal"
                        : "bg-surface/50 text-ink/80 border-ink/15 hover:border-ink/40"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filter Chips */}
            <div>
              <span className="block text-[10px] font-sans font-medium uppercase tracking-label text-muted mb-2">
                Availability Status
              </span>
              <div className="flex flex-wrap gap-2">
                {statusOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setSelectedStatus(opt.value)}
                    className={`text-xs uppercase tracking-label font-sans font-medium px-3.5 py-2 rounded-[2px] border transition-colors cursor-pointer ${
                      selectedStatus === opt.value
                        ? "bg-charcoal text-limestone border-charcoal"
                        : "bg-surface/50 text-ink/80 border-ink/15 hover:border-ink/40"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Budget Range Slider */}
          <div className="pt-4 border-t border-ink/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-sans font-medium uppercase tracking-label text-muted">
                Maximum Budget Limit:
              </span>
              <span className="font-serif text-lg font-normal text-brass-dark">
                {formatBudgetDisplay(maxBudgetLakhs)}
              </span>
            </div>

            <div className="flex items-center gap-4 flex-1 max-w-md">
              <span className="text-[10px] font-mono text-muted">Rs. 20L</span>
              <input
                type="range"
                min={20}
                max={220}
                step={5}
                value={maxBudgetLakhs}
                onChange={(e) => setMaxBudgetLakhs(Number(e.target.value))}
                className="w-full accent-brass cursor-pointer"
                aria-label="Max Budget Range Slider"
              />
              <span className="text-[10px] font-mono text-muted">Rs. 2.2Cr</span>
            </div>

            <div className="text-right text-xs font-mono text-muted">
              Displaying <strong className="text-ink">{filteredUnits.length}</strong> of 8 residences
            </div>
          </div>
        </div>

        {/* Mixed-Size Unit Grid (Architectural 12-Column Responsive Stagger) */}
        {filteredUnits.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-ink/20 bg-limestone/50">
            <p className="font-serif text-xl text-ink">No residences match this budget and configuration.</p>
            <p className="text-xs font-mono text-muted mt-2">Adjust your filters or contact the Arohan concierge desk for custom inventory.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {filteredUnits.map((unit, idx) => {
              // Asymmetric grid spans: 0 and 4 are wide (col-span-8), others are col-span-4 or col-span-6
              const isWide = idx === 0 || idx === 3 || idx === 4;
              const gridSpan = isWide ? "lg:col-span-8" : "lg:col-span-4";

              return (
                <div
                  key={unit.id}
                  className={`bg-limestone border border-ink/15 p-6 rounded-[2px] flex flex-col justify-between group hover:border-brass/70 transition-all duration-300 relative ${gridSpan}`}
                >
                  {/* Top Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-3 border-b border-ink/10 pb-2">
                      <span className="font-mono text-xs text-brass tracking-wider">
                        {unit.code}
                      </span>
                      <span
                        className={`text-[9px] uppercase font-mono tracking-label px-2 py-0.5 border rounded-[2px] ${
                          unit.status === "Available"
                            ? "bg-deep/10 text-deep border-deep/30"
                            : "bg-muted/10 text-muted border-muted/30"
                        }`}
                      >
                        {unit.status}
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[10px] uppercase font-sans font-medium tracking-label text-muted">
                        {unit.project}
                      </span>
                      <h4 className="font-serif text-2xl md:text-3xl text-ink mt-0.5 leading-snug">
                        {unit.bhk}
                      </h4>
                    </div>

                    {/* Architectural Spec Matrix */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4 py-3 bg-surface/40 px-3 border border-ink/10 text-xs">
                      <div className="space-y-0.5">
                        <span className="flex items-center gap-1 text-[10px] font-mono text-muted uppercase">
                          <Maximize2 className="w-3 h-3 text-brass" /> Area
                        </span>
                        <span className="font-mono text-ink font-medium">
                          {unit.carpetAreaSqFt} sq ft <span className="text-[10px] text-muted">(carpet)</span>
                        </span>
                      </div>

                      <div className="space-y-0.5">
                        <span className="flex items-center gap-1 text-[10px] font-mono text-muted uppercase">
                          <Layers className="w-3 h-3 text-brass" /> Elevation
                        </span>
                        <span className="font-mono text-ink font-medium">
                          {unit.floor}
                        </span>
                      </div>

                      <div className="space-y-0.5 col-span-2 sm:col-span-1">
                        <span className="flex items-center gap-1 text-[10px] font-mono text-muted uppercase">
                          <Compass className="w-3 h-3 text-brass" /> Orientation
                        </span>
                        <span className="font-mono text-ink font-medium truncate block">
                          {unit.facing}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Price & Enquiry Action */}
                  <div className="pt-4 border-t border-ink/10 flex items-center justify-between gap-4 mt-auto">
                    <div>
                      <span className="text-[10px] uppercase font-sans font-medium tracking-label text-muted block">
                        Base Investment
                      </span>
                      <span className="font-serif text-xl sm:text-2xl text-ink font-normal">
                        {unit.price}
                      </span>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-label font-sans font-medium px-3.5 py-2 bg-surface hover:bg-charcoal text-ink hover:text-limestone border border-ink/15 hover:border-charcoal transition-colors rounded-[2px]"
                    >
                      <span>Inquire Unit</span>
                      <ArrowUpRight className="w-3 h-3 text-brass stroke-[1.5]" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
