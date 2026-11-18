"use client";

import React from "react";
import { SITE_DATA, Project } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Projects: React.FC = () => {
  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "Ongoing":
        return "bg-brass/10 text-brass-dark border-brass/30";
      case "Ready to Move":
        return "bg-deep/10 text-deep border-deep/30";
      case "Plots Open":
        return "bg-charcoal/10 text-charcoal border-charcoal/30";
      default:
        return "bg-surface text-ink border-ink/10";
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-limestone border-b border-ink/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="02 / DEVELOPMENTS"
          tag="FLAGSHIP RESIDENTIAL PORTFOLIO"
          title="Three Distinct Living Typologies."
          subtitle="From high-rise riverfront residences to secluded courtyard pavilions and freehold estate parcels in Kanpur's premier growth corridors."
        />

        {/* Three Large Alternating Image/Text Rows (NOT CARDS) */}
        <div className="space-y-20 md:space-y-28 mt-16">
          {SITE_DATA.projects.map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center border-b border-ink/10 pb-16 md:pb-24 last:border-b-0 last:pb-0"
              >
                {/* Visual Column */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative group">
                    <PlaceholderImage
                      src={project.image}
                      brief={project.imageBrief}
                      aspect="wide"
                      label={project.location}
                      className="border border-ink/15 shadow-none"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span
                        className={`text-[10px] uppercase font-mono tracking-label font-medium px-2.5 py-1 border rounded-[2px] ${getStatusBadge(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Narrative & Details Column */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-brass">
                        0{idx + 1}
                      </span>
                      <span className="h-px w-6 bg-brass" />
                      <span className="text-[11px] font-sans font-medium uppercase tracking-label text-muted">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-ink leading-tight tracking-tight">
                      {project.name}
                    </h3>
                    <p className="font-serif italic text-base sm:text-lg text-ink/75">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-sans border-l-2 border-brass/50 pl-4">
                    {project.description}
                  </p>

                  {/* Highlights Spec List */}
                  <div className="space-y-2 pt-2 border-t border-ink/10">
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2.5 text-xs text-ink/80 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brass stroke-[1.5] shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specifications & CTA Bar */}
                  <div className="pt-4 border-t border-ink/10 flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <span className="block text-[10px] uppercase font-sans font-medium tracking-label text-muted">
                        Pricing Structure
                      </span>
                      <span className="font-serif text-xl sm:text-2xl font-normal text-ink">
                        {project.priceFrom}
                      </span>
                      <span className="block text-xs font-mono text-brass">
                        {project.configuration}
                      </span>
                    </div>

                    <a
                      href="#explorer"
                      className="group inline-flex items-center gap-2 text-xs uppercase tracking-label font-sans font-medium px-4 py-2.5 bg-surface hover:bg-charcoal text-ink hover:text-limestone border border-ink/20 hover:border-charcoal transition-all duration-300 rounded-[2px]"
                    >
                      <span>View details</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[1.5] text-brass group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
