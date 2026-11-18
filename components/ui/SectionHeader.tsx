import React from "react";

interface SectionHeaderProps {
  number: string;
  tag: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: "left" | "center" | "split";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  tag,
  title,
  subtitle,
  dark = false,
  align = "split",
  className = "",
}) => {
  const numberClass = dark ? "text-brass-light" : "text-brass";
  const tagClass = dark ? "text-limestone/80" : "text-muted";
  const titleClass = dark ? "text-limestone" : "text-ink";
  const subtitleClass = dark ? "text-limestone/80" : "text-muted";
  const lineClass = dark ? "bg-limestone/20" : "bg-ink/15";

  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {/* Top Numbered Architectural Marker */}
      <div className="flex items-center gap-3 mb-4">
        <span className={`font-mono text-xs tracking-widest ${numberClass}`}>
          {number}
        </span>
        <span className={`h-px w-8 ${lineClass}`} />
        <span className={`text-[11px] font-sans font-medium uppercase tracking-label ${tagClass}`}>
          {tag}
        </span>
      </div>

      {align === "split" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <h2 className={`text-3xl md:text-5xl lg:text-[56px] font-serif leading-[1.05] tracking-tight ${titleClass}`}>
              {title}
            </h2>
          </div>
          {subtitle && (
            <div className="lg:col-span-4 pb-1">
              <p className={`text-base md:text-lg leading-relaxed ${subtitleClass}`}>
                {subtitle}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="max-w-3xl">
          <h2 className={`text-3xl md:text-5xl lg:text-[56px] font-serif leading-[1.05] tracking-tight ${titleClass}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-4 text-base md:text-lg leading-relaxed ${subtitleClass}`}>
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
