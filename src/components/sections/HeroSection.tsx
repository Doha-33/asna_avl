"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  bookText?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
  isAr?: boolean;
  language?: string;
  reverse?: boolean;
}

export function HeroSection({ 
  title, 
  subtitle, 
  ctaText, 
  bookText, 
  onCtaClick, 
  imageSrc, 
  isAr, 
  reverse 
}: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/30 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
          <div className="text-center lg:text-start">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-4xl font-extrabold leading-tight mb-6"
            >
              {title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-white/80 mb-10 leading-relaxed"
            >
              {subtitle}
            </motion.p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {ctaText && (
                <button onClick={onCtaClick} className="accent-button px-8 py-4 text-lg">
                  {ctaText}
                </button>
              )}
              {bookText && (
                <button onClick={onCtaClick} className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-bold transition-all text-lg border border-white/10">
                  {bookText}
                </button>
              )}
            </div>
          </div>
          {imageSrc && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white/5 border border-white/10 rounded-3xl p-4 backdrop-blur-sm shadow-2xl">
                <Image 
                  src={imageSrc} 
                  alt={title} 
                  width={800} 
                  height={600} 
                  className="rounded-2xl w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
