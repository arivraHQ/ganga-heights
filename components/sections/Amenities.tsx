"use client";

import React, { useState } from "react";
import { SITE_DATA } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { motion, AnimatePresence } from "framer-motion";

export const Amenities: React.FC = () => {
  const [activeAmenityIndex, setActiveAmenityIndex] = useState(0);
  const activeAmenity = SITE_DATA.amenities[activeAmenityIndex];

  return (
    <section id="amenities" className="py-20 md:py-28 bg-surface/40 border-b border-ink/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05 / ESTATE INFRASTRUCTURE"
          tag="COMMUNAL ARCHITECTURE & WELLNESS"
          title="Sanctuary Spaces & Vital Utilities."
          subtitle="Designed with stone masonry, native greenery, and heavy-duty redundant infrastructure for lifelong endurance."
        />

        {/* Two-Column Sticky Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-12">
          {/* Left Column: Interactive List of 6 Amenities */}
          <div className="lg:col-span-6 space-y-4">
            {SITE_DATA.amenities.map((item, idx) => {
              const isActive = activeAmenityIndex === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveAmenityIndex(idx)}
                  className={`p-6 border transition-all duration-300 rounded-[2px] cursor-pointer ${
                    isActive
                      ? "bg-limestone border-brass shadow-none translate-x-1"
                      : "bg-limestone/50 border-ink/10 hover:border-ink/30 hover:bg-limestone"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-brass tracking-wider">
                      {item.number} / {item.category.toUpperCase()}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-[2px] transition-colors ${
                        isActive ? "bg-brass" : "bg-ink/20"
                      }`}
                    />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-ink leading-tight">
                    {item.title}
                  </h3>

                  <p className="font-sans text-sm text-ink/80 leading-relaxed mt-2">
                    {item.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-ink/10 text-[11px] font-mono text-muted flex items-center justify-between">
                    <span>{item.spec}</span>
                    <span className="text-brass font-medium uppercase text-[10px]">
                      {isActive ? "VIEWING ACTIVE" : "CLICK TO VIEW"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Large Image Container */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="relative border border-ink/15 bg-limestone p-2 rounded-[2px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAmenity.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                >
                  <PlaceholderImage
                    src={activeAmenity.image}
                    brief={activeAmenity.imageBrief}
                    aspect="tall"
                    label={`${activeAmenity.number} • ${activeAmenity.title}`}
                    className="w-full h-auto"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bottom Sticky Caption Meta */}
              <div className="p-4 bg-limestone border-t border-ink/10 flex items-center justify-between text-xs font-mono text-muted">
                <span>AMENITY SPECIFICATION #{activeAmenity.number}</span>
                <span className="text-ink">AUTHENTIC STONE & CEDAR DETAIL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
