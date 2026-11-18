"use client";

import React from "react";
import { SITE_DATA } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MapPin, Navigation, Clock } from "lucide-react";

export const LocationMap: React.FC = () => {
  return (
    <section id="location" className="py-20 md:py-28 bg-limestone border-b border-ink/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06 / STRATEGIC GEOGRAPHY"
          tag="CONNECTIVITY & SURROUNDINGS"
          title="Commanding the Ganga Barrage Corridor."
          subtitle="Positioned along the high-elevation river bypass with immediate arterial access to Civil Lines, Mall Road, and premier academic institutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-12">
          {/* Stylised Architectural SVG Map Container */}
          <div className="lg:col-span-7 bg-surface/60 border border-ink/15 p-6 rounded-[2px] relative overflow-hidden flex flex-col justify-between min-h-[420px] sm:min-h-[500px]">
            {/* Top Map Header */}
            <div className="flex items-center justify-between z-20 pb-3 border-b border-ink/10">
              <div className="flex items-center gap-2 text-xs font-mono text-ink">
                <Navigation className="w-3.5 h-3.5 text-brass" />
                <span className="font-semibold uppercase tracking-wider">Kanpur Metropolitan Schematics</span>
              </div>
              <span className="text-[10px] font-mono text-muted">26°28&apos;N 80°20&apos;E</span>
            </div>

            {/* Stylised Architectural Vector Cartography */}
            <div className="relative my-auto py-6">
              <svg viewBox="0 0 600 420" className="w-full h-auto text-ink fill-none stroke-ink" strokeWidth="1.2">
                {/* Ganga River Flow (Soft Brass/Limestone Contour) */}
                <path
                  d="M -20,120 C 140,80 240,160 380,110 C 480,75 560,130 640,90"
                  stroke="#B08D57"
                  strokeWidth="28"
                  strokeOpacity="0.25"
                  strokeLinecap="round"
                />
                <path
                  d="M -20,120 C 140,80 240,160 380,110 C 480,75 560,130 640,90"
                  stroke="#B08D57"
                  strokeWidth="2"
                  strokeOpacity="0.7"
                />
                <text x="440" y="85" className="fill-brass text-[10px] font-mono font-bold tracking-widest" stroke="none">
                  RIVER GANGA
                </text>

                {/* Primary Arterial Road 1: Ganga Barrage Bypass */}
                <path d="M 0,200 L 600,180" stroke="#14120F" strokeWidth="2.5" strokeOpacity="0.8" />
                <text x="20" y="192" className="fill-muted text-[9px] font-mono" stroke="none">
                  GANGA BARRAGE CORRIDOR (60M)
                </text>

                {/* Arterial Road 2: VIP Road to Civil Lines */}
                <path d="M 120,420 L 260,190" stroke="#14120F" strokeWidth="2" strokeOpacity="0.6" />
                <text x="130" y="380" className="fill-muted text-[9px] font-mono" stroke="none">
                  VIP ROAD TO CIVIL LINES
                </text>

                {/* Arterial Road 3: Mall Road Axis */}
                <path d="M 320,420 L 460,185" stroke="#14120F" strokeWidth="2" strokeOpacity="0.6" />
                <text x="350" y="390" className="fill-muted text-[9px] font-mono" stroke="none">
                  MALL ROAD CONNECTOR
                </text>

                {/* Grid Hairlines for Architectural Cartography */}
                <line x1="100" y1="0" x2="100" y2="420" stroke="#14120F" strokeOpacity="0.08" strokeDasharray="3 3" />
                <line x1="300" y1="0" x2="300" y2="420" stroke="#14120F" strokeOpacity="0.08" strokeDasharray="3 3" />
                <line x1="500" y1="0" x2="500" y2="420" stroke="#14120F" strokeOpacity="0.08" strokeDasharray="3 3" />
                <line x1="0" y1="280" x2="600" y2="280" stroke="#14120F" strokeOpacity="0.08" strokeDasharray="3 3" />

                {/* Landmark Pins */}
                {/* 1. Ganga Heights (Main Project Hub) */}
                <g className="cursor-pointer">
                  <circle cx="270" cy="175" r="14" fill="#B08D57" fillOpacity="0.3" stroke="#B08D57" strokeWidth="1.5" />
                  <rect x="264" y="169" width="12" height="12" fill="#1B1B1A" stroke="#B08D57" strokeWidth="1" />
                  <text x="290" y="174" className="fill-ink text-[12px] font-serif font-bold" stroke="none">
                    GANGA HEIGHTS (SITE)
                  </text>
                  <text x="290" y="188" className="fill-brass text-[9px] font-mono" stroke="none">
                    AROHAN REALTY FLAGSHIP
                  </text>
                </g>

                {/* 2. Arohan Villas */}
                <g>
                  <rect x="190" y="270" width="8" height="8" fill="#B08D57" />
                  <text x="140" y="260" className="fill-ink text-[10px] font-sans font-medium" stroke="none">
                    Arohan Villas (Civil Lines)
                  </text>
                </g>

                {/* 3. Regency Hospital */}
                <g>
                  <circle cx="160" cy="320" r="4" fill="#14120F" />
                  <text x="70" y="335" className="fill-muted text-[10px] font-mono" stroke="none">
                    Regency Hospital (2.1 km)
                  </text>
                </g>

                {/* 4. DPS School */}
                <g>
                  <circle cx="340" cy="220" r="4" fill="#14120F" />
                  <text x="350" y="224" className="fill-muted text-[10px] font-mono" stroke="none">
                    DPS & St. Aloysius (1.5 km)
                  </text>
                </g>

                {/* 5. Mall Road Commercial */}
                <g>
                  <circle cx="430" cy="290" r="5" fill="#14120F" />
                  <text x="445" y="295" className="fill-ink text-[10px] font-sans font-medium" stroke="none">
                    Mall Road Hub (4.2 km)
                  </text>
                </g>

                {/* 6. Kanpur Central Railway */}
                <g>
                  <circle cx="480" cy="370" r="6" fill="#1B1B1A" />
                  <text x="430" y="405" className="fill-ink text-[11px] font-serif" stroke="none">
                    Kanpur Central Stn (6.0 km)
                  </text>
                </g>

                {/* North Compass Arrow */}
                <g transform="translate(540, 40)">
                  <circle cx="0" cy="0" r="16" stroke="#B08D57" strokeWidth="1" />
                  <line x1="0" y1="12" x2="0" y2="-12" stroke="#B08D57" strokeWidth="1.5" />
                  <polygon points="0,-16 -4,-8 4,-8" fill="#B08D57" stroke="none" />
                  <text x="-4" y="-20" className="fill-brass text-[10px] font-mono font-bold" stroke="none">N</text>
                </g>
              </svg>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-ink/10 text-[10px] font-mono text-muted">
              <span>SCALE: ARTERIAL TRANSIT RADIUS</span>
              <span>NO MOTOR HIGHWAY CONGESTION</span>
            </div>
          </div>

          {/* Distance List Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-brass">
                TRANSIT & INFRASTRUCTURE COMMUTE
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-ink">
                Minutes to Vital Landmarks.
              </h3>
            </div>

            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {SITE_DATA.locationDistances.map((item, idx) => (
                <div key={idx} className="py-4 flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-mono text-brass tracking-wider block">
                      {item.category}
                    </span>
                    <h4 className="font-sans text-sm sm:text-base font-medium text-ink">
                      {item.name}
                    </h4>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-serif text-lg text-ink font-normal">
                      {item.distance}
                    </div>
                    <div className="flex items-center justify-end gap-1 text-[11px] font-mono text-muted">
                      <Clock className="w-3 h-3 text-brass" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Site Visit Transit Note */}
            <div className="p-4 bg-surface/50 border border-ink/10 rounded-[2px]">
              <span className="text-[11px] font-sans font-medium uppercase tracking-label text-ink block mb-1">
                Concierge Site Chauffeur Available
              </span>
              <p className="text-xs text-muted leading-relaxed font-sans">
                Arohan Realty provides complimentary site transit vehicles departing daily from Civil Lines for registered consultations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
