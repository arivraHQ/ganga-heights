"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_DATA } from "@/content/site";
import { ArrowUpRight, ShieldCheck, Phone, MessageSquare, MapPin, Clock } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-limestone border-t border-limestone/15 pt-20 pb-12 relative overflow-hidden">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,rgba(239,235,228,0.1)_1px,transparent_1px)] bg-[size:calc((100%-2px)/12)_100%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Oversized Signature Architectural CTA */}
        <div className="border-b border-limestone/15 pb-16 md:pb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-brass tracking-widest">
              11 / CONCLUSION
            </span>
            <span className="h-px w-8 bg-limestone/20" />
            <span className="text-[10px] uppercase font-sans font-medium tracking-label text-limestone/60">
              INVITATION TO EXPERIENCE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-limestone tracking-tight leading-[0.95]">
                Come see it <span className="italic text-brass">in person.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-limestone/75 max-w-xl font-sans leading-relaxed">
                Step onto the riverfront slab, examine limestone masonry samples, and inspect municipal approval documents over tea at our site gallery.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-brass hover:bg-brass-light text-charcoal font-sans text-xs uppercase tracking-label font-medium px-6 py-4 rounded-[2px] transition-colors"
              >
                <span>Reserve Site Inspection</span>
                <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
              </a>

              <a
                href={SITE_DATA.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-limestone/10 hover:bg-limestone/20 text-limestone border border-limestone/20 font-sans text-xs uppercase tracking-label font-medium px-6 py-3.5 rounded-[2px] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-brass stroke-[1.5]" />
                <span>WhatsApp: {SITE_DATA.brand.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Directory Grid */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-limestone/15">
          {/* Brand & Address */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[2px] border border-brass/50 overflow-hidden shrink-0 bg-charcoal">
                <Image
                  src="/images/arohan-emblem.png"
                  alt="Ganga Heights by Arohan Realty emblem"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-2xl text-limestone block leading-none">
                  {SITE_DATA.brand.name}
                </span>
                <span className="block text-[10px] uppercase font-mono tracking-label text-brass mt-1">
                  by {SITE_DATA.brand.developer} • Kanpur
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs font-sans text-limestone/70 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                <span>{SITE_DATA.brand.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                <span>{SITE_DATA.brand.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brass shrink-0" />
                <span className="font-mono text-limestone">{SITE_DATA.brand.phoneDisplay}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase font-mono tracking-label text-brass block">
              PORTFOLIO DIRECTORY
            </span>
            <ul className="space-y-2 text-xs font-sans text-limestone/75">
              <li>
                <a href="#projects" className="hover:text-brass transition-colors">
                  Ganga Heights (2 & 3 BHK Apartments)
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brass transition-colors">
                  Arohan Villas (4 BHK Luxury Villas)
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brass transition-colors">
                  Arohan Plots (Freehold Land)
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-brass transition-colors">
                  Architectural Blueprints & Schematics
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-brass transition-colors">
                  Financial Amortization Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* RERA Regulatory Compliance */}
          <div className="lg:col-span-5 space-y-3 bg-limestone/5 p-5 border border-limestone/10 rounded-[2px]">
            <div className="flex items-center gap-2 text-xs font-mono text-brass">
              <ShieldCheck className="w-4 h-4 stroke-[1.5]" />
              <span className="uppercase tracking-label">Statutory RERA Certification</span>
            </div>
            <p className="text-xs text-limestone/80 leading-relaxed font-sans">
              Ganga Heights is fully registered with Uttar Pradesh Real Estate Regulatory Authority under registration number <strong className="text-limestone font-mono">{SITE_DATA.brand.reraNumber}</strong>.
            </p>
            <p className="text-[11px] text-limestone/60 font-sans leading-relaxed">
              All representations, floor plans, and amenities detailed herein are subject to final municipal clearances. Prospective buyers are advised to inspect official UP RERA filings and verified title registers at our site office.
            </p>
          </div>
        </div>

        {/* Bottom Micro Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-limestone/50">
          <div>
            © {new Date().getFullYear()} Arohan Realty Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>UP RERA: {SITE_DATA.brand.reraNumber}</span>
            <span>CIVIL LINES • KANPUR</span>
          </div>
        </div>

        {/* Portfolio & Showcase Disclaimer + Arivra Design Labs Attribution */}
        <div className="mt-8 pt-6 border-t border-limestone/15 text-center space-y-3">
          <p className="text-[11px] font-sans text-limestone/65 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-brass">Notice &amp; Disclaimer:</strong> This website is an interactive concept application engineered solely for portfolio demonstration and showcase purposes. Ganga Heights and Arohan Realty are fictional entities. All contact details, telephone numbers, UP RERA registration strings, floor plan prices, and resident testimonials are simulated dummy data. Please do not contact these numbers for real property inquiries or site visits.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-[2px] bg-limestone/5 border border-brass/35 text-xs font-sans text-limestone">
            <span className="font-mono font-semibold tracking-wider uppercase text-[10px] text-brass">
              ARIVRA Demo
            </span>
            <span className="text-limestone/40">•</span>
            <span className="text-limestone/80">
              A product by{" "}
              <a
                href="https://arivra.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-limestone hover:text-brass underline underline-offset-4 transition-colors"
              >
                Arivra Design Labs
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
