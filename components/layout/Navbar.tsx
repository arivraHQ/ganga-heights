"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_DATA } from "@/content/site";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Unit Explorer", href: "#explorer" },
    { name: "Floor Plans", href: "#plans" },
    { name: "Amenities", href: "#amenities" },
    { name: "Location", href: "#location" },
    { name: "Calculator", href: "#calculator" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-limestone/95 backdrop-blur-none border-b border-ink/10 py-3 shadow-none"
            : "bg-transparent py-5 border-b border-ink/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Wordmark Left */}
            <Link href="/" className="group flex items-center gap-3 focus:outline-none">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[2px] border border-brass/50 overflow-hidden shrink-0 bg-charcoal">
                <Image
                  src="/images/arohan-emblem.png"
                  alt="Ganga Heights by Arohan Realty emblem"
                  width={40}
                  height={40}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-serif text-xl sm:text-2xl tracking-tight text-ink font-normal leading-none group-hover:text-brass transition-colors duration-300">
                  {SITE_DATA.brand.name}
                </span>
                <span className="text-[9px] uppercase tracking-label font-sans font-medium text-muted mt-1">
                  by Arohan Realty • Kanpur
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-label font-sans text-ink/80 hover:text-brass transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-brass hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-charcoal text-limestone hover:bg-brass transition-colors duration-300 text-xs uppercase tracking-label font-sans font-medium px-4 py-2.5 rounded-[2px] border border-charcoal hover:border-brass focus:outline-none focus-visible:ring-1 focus-visible:ring-brass"
              >
                <span>Book Site Visit</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
              </a>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-ink hover:text-brass focus:outline-none"
                aria-label="Toggle Navigation Menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 stroke-[1.5]" />
                ) : (
                  <Menu className="w-6 h-6 stroke-[1.5]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-limestone pt-24 px-6 flex flex-col justify-between pb-8 lg:hidden border-b border-ink/10">
          <nav className="flex flex-col space-y-5" aria-label="Mobile Navigation">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-baseline justify-between border-b border-ink/10 pb-3"
              >
                <span className="font-serif text-2xl text-ink">
                  {link.name}
                </span>
                <span className="text-xs font-mono text-brass">
                  0{idx + 1}
                </span>
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-ink/10 space-y-3">
            <div className="text-[11px] font-mono text-muted uppercase tracking-label">
              RERA Reg: {SITE_DATA.brand.reraNumber}
            </div>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-charcoal text-limestone text-xs uppercase tracking-label font-sans py-3 rounded-[2px]"
            >
              Book Site Consultation
            </a>
          </div>
        </div>
      )}
    </>
  );
};
