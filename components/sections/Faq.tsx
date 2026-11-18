"use client";

import React, { useState } from "react";
import { SITE_DATA } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Plus, Minus } from "lucide-react";

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-surface/40 border-b border-ink/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="10 / STATUTORY CLARIFICATIONS"
          tag="FREQUENT INQUIRIES & COMPLIANCE"
          title="Direct Legal & Contractual Answers."
          subtitle="Everything you need to know regarding UP RERA escrow compliance, milestone-linked payments, registry fees, and post-possession maintenance in Kanpur."
        />

        {/* 6 Questions in Clean Architectural Accordion */}
        <div className="max-w-4xl mx-auto divide-y divide-ink/10 border-y border-ink/10 mt-12">
          {SITE_DATA.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-brass uppercase tracking-wider block">
                      0{idx + 1} • {faq.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-ink group-hover:text-brass-dark transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  <span className="p-2 bg-limestone border border-ink/15 rounded-[2px] text-ink group-hover:border-brass transition-colors shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[1.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[1.5]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pt-3 text-sm sm:text-base text-ink/80 leading-relaxed font-sans border-l-2 border-brass/50 pl-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
