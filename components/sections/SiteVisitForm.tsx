"use client";

import React, { useState } from "react";
import { SITE_DATA } from "@/content/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";

export const SiteVisitForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    project: "Ganga Heights",
    preferredDate: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successInfo, setSuccessInfo] = useState<{ message: string; leadId?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Basic client validation
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.replace(/[^0-9]/g, "").length < 10) {
      setErrorMessage("Please enter a valid 10-digit Indian phone number.");
      return;
    }
    if (!formData.preferredDate) {
      setErrorMessage("Please select your preferred visit date.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Unable to submit enquiry. Please try again.");
      } else {
        setStatus("success");
        setSuccessInfo(data);
        setFormData({
          name: "",
          phone: "",
          project: "Ganga Heights",
          preferredDate: "",
          honeypot: "",
        });
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection or use WhatsApp directly.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface/50 border-b border-ink/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="08 / PRIVATE APPOINTMENT"
          tag="SITE CONSULTATION & CHAUFFEUR"
          title="Schedule an In-Person Inspection."
          subtitle="Experience the natural riverfront acoustics, examine limestone masonry finishes, and review verified land title deeds with our senior development partners."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-12">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-limestone border border-ink/15 p-6 sm:p-10 rounded-[2px]">
            {status === "success" && successInfo ? (
              <div className="py-8 space-y-4 text-center">
                <CheckCircle2 className="w-12 h-12 text-brass mx-auto stroke-[1.5]" />
                <h3 className="font-serif text-3xl text-ink">
                  Appointment Confirmed.
                </h3>
                <p className="font-sans text-sm text-ink/80 max-w-md mx-auto leading-relaxed">
                  {successInfo.message}
                </p>
                {successInfo.leadId && (
                  <div className="inline-block px-4 py-1.5 bg-surface border border-ink/10 text-xs font-mono text-brass">
                    Reference ID: {successInfo.leadId}
                  </div>
                )}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="text-xs uppercase tracking-label font-sans font-medium px-5 py-2.5 bg-charcoal text-limestone rounded-[2px]"
                  >
                    Schedule Another Consultation
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2 rounded-[2px]">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Honeypot field (hidden from real users) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website_source_verification">Leave blank</label>
                  <input
                    type="text"
                    id="website_source_verification"
                    tabIndex={-1}
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    autoComplete="off"
                  />
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="lead-name" className="text-xs uppercase font-sans font-medium tracking-label text-ink">
                    Full Legal Name <span className="text-brass">*</span>
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Khanna"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-surface/40 border border-ink/20 px-4 py-3 rounded-[2px] font-sans text-sm text-ink placeholder:text-muted focus:outline-none focus:border-brass"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="lead-phone" className="text-xs uppercase font-sans font-medium tracking-label text-ink">
                    Contact Telephone <span className="text-brass">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 border border-r-0 border-ink/20 bg-surface text-xs font-mono text-muted">
                      +91
                    </span>
                    <input
                      id="lead-phone"
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-surface/40 border border-ink/20 px-4 py-3 rounded-[2px] font-sans text-sm text-ink placeholder:text-muted focus:outline-none focus:border-brass"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-muted">
                    Direct SMS confirmation will be dispatched upon receipt.
                  </span>
                </div>

                {/* Project Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="lead-project" className="text-xs uppercase font-sans font-medium tracking-label text-ink">
                      Selected Development <span className="text-brass">*</span>
                    </label>
                    <select
                      id="lead-project"
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full bg-surface/40 border border-ink/20 px-3 py-3 rounded-[2px] font-sans text-sm text-ink focus:outline-none focus:border-brass cursor-pointer"
                    >
                      <option value="Ganga Heights">Ganga Heights (2 & 3 BHK)</option>
                      <option value="Arohan Villas">Arohan Villas (4 BHK Villa)</option>
                      <option value="Arohan Plots">Arohan Plots (Freehold Land)</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label htmlFor="lead-date" className="text-xs uppercase font-sans font-medium tracking-label text-ink">
                      Preferred Date <span className="text-brass">*</span>
                    </label>
                    <input
                      id="lead-date"
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-surface/40 border border-ink/20 px-3 py-2.5 rounded-[2px] font-sans text-sm text-ink focus:outline-none focus:border-brass"
                    />
                  </div>
                </div>

                {/* Submit & Secondary WhatsApp Button */}
                <div className="pt-4 space-y-3">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 bg-charcoal text-limestone hover:bg-brass transition-colors duration-300 text-xs uppercase tracking-label font-sans font-medium py-4 px-6 rounded-[2px] border border-charcoal hover:border-brass cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5 stroke-[1.5]" />
                    <span>{status === "submitting" ? "Reserving Consultation..." : "Reserve Site Appointment"}</span>
                  </button>

                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-ink/10" />
                    <span className="flex-shrink mx-4 text-[10px] font-mono uppercase tracking-widest text-muted">Or Connect Instantly</span>
                    <div className="flex-grow border-t border-ink/10" />
                  </div>

                  <a
                    href={SITE_DATA.brand.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] border border-[#25D366]/40 text-xs uppercase tracking-label font-sans font-medium py-3.5 px-6 rounded-[2px] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 stroke-[1.5]" />
                    <span>Direct WhatsApp Concierge (+91 90000 00000)</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Info Column: Site Office & Trust Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-limestone border border-ink/15 rounded-[2px] space-y-4">
              <span className="text-[11px] font-mono text-brass uppercase tracking-wider block">
                SITE HEADQUARTERS & HOURS
              </span>
              <div>
                <h4 className="font-serif text-2xl text-ink">
                  Arohan Experience Gallery
                </h4>
                <p className="font-sans text-xs text-muted mt-1 leading-relaxed">
                  {SITE_DATA.brand.address}
                </p>
              </div>

              <div className="pt-3 border-t border-ink/10 text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted">Consultation Hours:</span>
                  <span className="font-mono text-ink">{SITE_DATA.brand.hours}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Helpline Desk:</span>
                  <span className="font-mono text-ink">{SITE_DATA.brand.phoneDisplay}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Statutory UP RERA:</span>
                  <span className="font-mono text-brass">{SITE_DATA.brand.reraNumber}</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-surface border border-ink/10 rounded-[2px] space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-label text-brass block">
                Statutory Buyer Protection
              </span>
              <p className="text-xs text-ink/80 leading-relaxed font-sans">
                Every consultation includes a physical inspection of certified structural test cubes, soil bearing reports by IIT Kanpur civil consultants, and verified title clearance deeds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
