"use client";

import React, { useState, useId } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Calculator } from "lucide-react";

export const EmiCalculator: React.FC = () => {
  const [propertyPriceLakhs, setPropertyPriceLakhs] = useState<number>(85); // Rs. 85 Lakh default (3 BHK)
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20); // 20% down
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5% annual
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 years

  const priceId = useId();
  const downPaymentId = useId();
  const rateId = useId();
  const tenureId = useId();

  // Calculations
  const totalPrice = propertyPriceLakhs * 100000;
  const downPaymentAmount = totalPrice * (downPaymentPercent / 100);
  const loanPrincipal = totalPrice - downPaymentAmount;

  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  // EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const emi =
    monthlyRate === 0
      ? loanPrincipal / totalMonths
      : (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalPayment = emi * totalMonths;
  const totalInterest = Math.max(0, totalPayment - loanPrincipal);

  const principalRatio = totalPayment > 0 ? (loanPrincipal / totalPayment) * 100 : 50;
  const interestRatio = 100 - principalRatio;

  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(Math.round(val));
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-deep text-limestone border-b border-limestone/15 relative overflow-hidden">
      {/* Background Architectural Grid Lines in Pine Canvas */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,rgba(239,235,228,0.08)_1px,transparent_1px)] bg-[size:calc((100%-2px)/12)_100%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="07 / FINANCIAL TRANSPARENCY"
          tag="MORTGAGE & CASH FLOW MODELING"
          title="Predictable Capital Allocation."
          subtitle="Simulate monthly repayments tailored to SBI, HDFC, and ICICI Bank prime lending rates with zero hidden developer margins."
          dark
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mt-12">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-deep-dark/60 border border-limestone/15 p-6 sm:p-8 rounded-[2px] space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-limestone/10 text-xs font-mono text-brass">
              <Calculator className="w-4 h-4 stroke-[1.5]" />
              <span className="uppercase tracking-wider">Loan Amortization Parameters</span>
            </div>

            {/* Slider 1: Property Value */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <label htmlFor={priceId} className="text-xs uppercase font-sans font-medium tracking-label text-limestone/75">
                  Property Investment
                </label>
                <span className="font-serif text-xl sm:text-2xl text-limestone">
                  {formatINR(totalPrice)}
                </span>
              </div>
              <input
                id={priceId}
                type="range"
                min={20}
                max={250}
                step={2}
                value={propertyPriceLakhs}
                onChange={(e) => setPropertyPriceLakhs(Number(e.target.value))}
                className="w-full accent-brass cursor-pointer"
                aria-label="Property Investment Value"
              />
              <div className="flex justify-between text-[10px] font-mono text-limestone/50">
                <span>Rs. 20 Lakh</span>
                <span>Rs. 2.50 Cr</span>
              </div>
            </div>

            {/* Slider 2: Down Payment */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <label htmlFor={downPaymentId} className="text-xs uppercase font-sans font-medium tracking-label text-limestone/75">
                  Down Payment ({downPaymentPercent}%)
                </label>
                <span className="font-mono text-sm sm:text-base text-brass">
                  {formatINR(downPaymentAmount)}
                </span>
              </div>
              <input
                id={downPaymentId}
                type="range"
                min={10}
                max={50}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-brass cursor-pointer"
                aria-label="Down Payment Percentage"
              />
              <div className="flex justify-between text-[10px] font-mono text-limestone/50">
                <span>10% (Minimum)</span>
                <span>50%</span>
              </div>
            </div>

            {/* Controls Row: Rate & Tenure */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Interest Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <label htmlFor={rateId} className="text-xs uppercase font-sans font-medium tracking-label text-limestone/75">
                    Annual Interest Rate
                  </label>
                  <span className="font-mono text-sm sm:text-base text-limestone">
                    {interestRate}%
                  </span>
                </div>
                <input
                  id={rateId}
                  type="range"
                  min={7.5}
                  max={12.0}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-brass cursor-pointer"
                  aria-label="Annual Interest Rate"
                />
                <div className="flex justify-between text-[10px] font-mono text-limestone/50">
                  <span>7.5% (Prime)</span>
                  <span>12.0%</span>
                </div>
              </div>

              {/* Tenure Years */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <label htmlFor={tenureId} className="text-xs uppercase font-sans font-medium tracking-label text-limestone/75">
                    Loan Horizon
                  </label>
                  <span className="font-mono text-sm sm:text-base text-limestone">
                    {tenureYears} Years
                  </span>
                </div>
                <input
                  id={tenureId}
                  type="range"
                  min={5}
                  max={30}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-brass cursor-pointer"
                  aria-label="Loan Tenure in Years"
                />
                <div className="flex justify-between text-[10px] font-mono text-limestone/50">
                  <span>5 Yrs</span>
                  <span>30 Yrs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Result & Chart Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Master Monthly Installment Highlight */}
            <div className="bg-deep-dark p-6 sm:p-8 border border-limestone/20 rounded-[2px] text-center space-y-2">
              <span className="text-[11px] uppercase font-sans font-medium tracking-label text-brass block">
                Estimated Monthly Outflow
              </span>
              <div className="text-4xl sm:text-5xl font-serif text-limestone font-light tracking-tight py-2">
                {formatINR(emi)}
                <span className="text-xs font-mono text-limestone/60 block mt-1">/ month</span>
              </div>
              <p className="text-xs font-sans text-limestone/70 pt-2 border-t border-limestone/10">
                Principal borrowed: <strong className="text-limestone">{formatINR(loanPrincipal)}</strong>
              </p>
            </div>

            {/* Simple Clean Architectural Donut Ratio Chart */}
            <div className="bg-deep-dark/60 p-6 border border-limestone/15 rounded-[2px] flex items-center justify-between gap-6">
              {/* SVG Donut */}
              <div className="relative w-24 h-24 shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  {/* Background Circle (Interest) */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    fill="none"
                    stroke="#B08D57"
                    strokeWidth="3.5"
                    strokeOpacity="0.4"
                  />
                  {/* Foreground Circle (Principal) */}
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    fill="none"
                    stroke="#EFEBE4"
                    strokeWidth="3.5"
                    strokeDasharray={`${principalRatio} ${100 - principalRatio}`}
                    strokeDashoffset="0"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-brass font-bold">
                  {Math.round(principalRatio)}%
                </div>
              </div>

              {/* Chart Legend & Totals */}
              <div className="space-y-3 flex-1 text-xs">
                <div className="flex items-center justify-between border-b border-limestone/10 pb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-limestone rounded-[1px] inline-block" />
                    <span className="text-limestone/80">Principal Sum:</span>
                  </div>
                  <span className="font-mono text-limestone">{formatINR(loanPrincipal)}</span>
                </div>

                <div className="flex items-center justify-between border-b border-limestone/10 pb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-brass/70 rounded-[1px] inline-block" />
                    <span className="text-limestone/80">Total Interest:</span>
                  </div>
                  <span className="font-mono text-brass">{formatINR(totalInterest)}</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-limestone/60">Gross Horizon Total:</span>
                  <span className="font-serif text-sm text-limestone">{formatINR(totalPayment)}</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] font-mono text-limestone/50 leading-relaxed">
              *Preliminary estimations based on reducing balance formula. Subject to individual bank credit assessment and statutory stamp duties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
