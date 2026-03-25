"use client";

import { motion } from "framer-motion";

interface FinalCTAProps {
  title: string;
  ctaText: string;
  onCtaClick: () => void;
}

export function FinalCTA({ title, ctaText, onCtaClick }: FinalCTAProps) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-primary p-12 md:p-20 rounded-[48px] text-center relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent blur-[120px] rounded-full" />
          </div>
          <div className="relative z-10">
            <h2 className="text-xl md:text-3xl font-extrabold mb-10 max-w-3xl mx-auto leading-tight">
              {title}
            </h2>
            <button onClick={onCtaClick} className="accent-button text-lg px-10 py-4">
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
