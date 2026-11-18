"use client";

import React from "react";
import { SITE_DATA } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-limestone border-b border-ink/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="09 / RESIDENT PERSPECTIVES"
          tag="COMMISSIONED HOMEOWNER INTERVIEWS"
          title="Lives Rooted in Kanpur."
          subtitle="Reflections from resident surgeons, industrialists, and jurists who chose Arohan Realty for structural honesty, verified documentation, and serene privacy."
        />

        {/* Stacked Editorial Layout (NOT Generic 3-Equal Cards) */}
        <div className="space-y-12 md:space-y-16 mt-16 max-w-5xl mx-auto">
          {SITE_DATA.testimonials.map((story, idx) => (
            <article
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start border-b border-ink/15 pb-12 md:pb-16 last:border-b-0 last:pb-0"
            >
              {/* Resident Meta Column */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-brass">
                    0{idx + 1}
                  </span>
                  <span className="h-px w-6 bg-brass" />
                  <span className="text-[10px] uppercase font-mono text-muted tracking-label">
                    {story.year}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal leading-snug">
                  {story.name}
                </h3>
                <p className="text-xs uppercase font-sans font-medium tracking-label text-brass-dark">
                  {story.profession}
                </p>

                <div className="pt-2">
                  <span className="inline-block text-[11px] font-mono text-muted bg-surface/60 px-2.5 py-1 border border-ink/10 rounded-[2px]">
                    {story.unit}
                  </span>
                </div>
              </div>

              {/* Editorial Quote Body */}
              <div className="lg:col-span-8 space-y-4">
                <Quote className="w-8 h-8 text-brass/40 stroke-[1.5]" />
                <blockquote className="font-serif italic text-xl sm:text-2xl text-ink leading-relaxed">
                  &ldquo;{story.comment}&rdquo;
                </blockquote>

                <div className="pt-3 border-t border-ink/10 flex items-center justify-between text-xs font-mono text-muted">
                  <span>FOCUS: {story.aspect.toUpperCase()}</span>
                  <span className="text-brass">VERIFIED RESIDENT</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
