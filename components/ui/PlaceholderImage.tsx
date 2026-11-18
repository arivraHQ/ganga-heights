"use client";

import React, { useState } from "react";
import Image from "next/image";

interface PlaceholderImageProps {
  src?: string;
  brief: string;
  aspect?: "tall" | "wide" | "square" | "hero";
  className?: string;
  label?: string;
  dark?: boolean;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  src,
  brief,
  aspect = "tall",
  className = "",
  label,
  dark = false,
}) => {
  const [imageError, setImageError] = useState(false);

  const aspectClasses = {
    tall: "aspect-[3/4]",
    wide: "aspect-[16/10]",
    square: "aspect-square",
    hero: "aspect-[16/9] md:aspect-[21/9]",
  };

  const hasPhoto = Boolean(src && !imageError);

  const bgClasses = dark
    ? "bg-deep-dark border-limestone/15"
    : "bg-surface border-ink/10";

  return (
    <div
      className={`group relative overflow-hidden border ${bgClasses} ${aspectClasses[aspect]} ${className}`}
      aria-label={`Architectural visualization: ${brief}`}
    >
      {/* Real Image Render when provided */}
      {hasPhoto ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={src!}
            alt={brief}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-[1.04]"
            onError={() => setImageError(true)}
            unoptimized
          />
          {/* Subtle Limestone/Atmospheric Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20 pointer-events-none" />
        </div>
      ) : (
        /* Tone-matched architectural stone grid placeholder */
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#B08D57_1px,transparent_1px)] [background-size:16px_16px]" />
      )}

      {/* Architectural Hairline Crosshairs in Corners */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-brass/70 z-20 pointer-events-none" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-brass/70 z-20 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-brass/70 z-20 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-brass/70 z-20 pointer-events-none" />

      {/* Content Container Overlay with Adaptive Contrast */}
      <div
        className={`relative h-full flex flex-col justify-between p-4 sm:p-6 z-10 ${
          hasPhoto ? "text-white" : dark ? "text-limestone" : "text-ink"
        }`}
      >
        <div className="flex items-center justify-between">
          <span
            className={`text-[10px] uppercase font-mono tracking-label font-medium px-2 py-0.5 border ${
              hasPhoto
                ? "bg-charcoal/80 text-brass border-brass/40"
                : "bg-surface text-brass border-brass/30"
            }`}
          >
            {hasPhoto ? "Architectural Photography" : "Render Specification"}
          </span>
          {label && (
            <span
              className={`text-[11px] font-sans font-medium px-2 py-0.5 border ${
                hasPhoto
                  ? "bg-charcoal/80 border-white/20 text-white"
                  : "bg-surface border-ink/15 text-ink"
              }`}
            >
              {label}
            </span>
          )}
        </div>

        {/* Photography Brief Plaque */}
        <div
          className={`mt-auto max-w-sm p-3 border ${
            hasPhoto
              ? "bg-charcoal/85 border-white/10 text-limestone"
              : "bg-limestone/90 border-ink/10 text-ink"
          }`}
        >
          <div className="w-6 h-px bg-brass mb-2" />
          <p className="font-serif italic text-xs leading-relaxed line-clamp-2">
            &ldquo;{brief}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
};
