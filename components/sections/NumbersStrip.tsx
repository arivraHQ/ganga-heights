"use client";

import React, { useEffect, useRef, useState } from "react";
import { SITE_DATA } from "@/content/site";
import { useInView } from "framer-motion";

interface CounterProps {
  end: number;
  decimals?: number;
  duration?: number;
}

const AnimatedNumber: React.FC<CounterProps> = ({ end, decimals = 0, duration = 1400 }) => {
  const [count, setCount] = useState(end > 10 ? Math.floor(end * 0.7) : 0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  useEffect(() => {
    // Start animation once mounted or in view
    let startTime: number | null = null;
    let animationFrameId: number;

    const startVal = end > 10 ? Math.floor(end * 0.7) : 0;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(startVal + easedProgress * (end - startVal));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
    </span>
  );
};

export const NumbersStrip: React.FC = () => {
  return (
    <section className="bg-surface border-b border-ink/10 py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Architectural Section Index Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs tracking-widest text-brass">
            01 / PORTFOLIO METRICS
          </span>
          <span className="h-px w-8 bg-ink/15" />
          <span className="text-[10px] uppercase font-sans font-medium tracking-label text-muted">
            DELIVERED PEDIGREE • KANPUR URBAN REGION
          </span>
        </div>

        {/* 4 Metric Columns with 1px Architectural Dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-ink/10">
          {SITE_DATA.metrics.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between ${
                idx !== 0 ? "lg:pl-8" : ""
              } ${idx !== SITE_DATA.metrics.length - 1 ? "lg:pr-8" : ""} pb-6 lg:pb-0 border-b lg:border-b-0 border-ink/10 last:border-b-0`}
            >
              <div>
                <div className="flex items-baseline text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-ink tracking-tight mb-2">
                  <AnimatedNumber
                    end={item.value}
                    decimals={item.value % 1 !== 0 ? 1 : 0}
                  />
                  <span className="text-brass ml-1 font-sans text-2xl sm:text-3xl font-normal">
                    {item.suffix}
                  </span>
                </div>
                <h3 className="font-sans font-medium text-xs uppercase tracking-label text-ink mb-1">
                  {item.label}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
