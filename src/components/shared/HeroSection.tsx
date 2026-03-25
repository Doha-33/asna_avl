"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { Zap } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageSrc?: string;
  image?: string;
  imageAlt?: string;
  showBadge?: boolean;
  onCtaClick?: () => void;
  customOverlay?: React.ReactNode;
}

export const HeroSection = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaHref, 
  ctaPrimary,
  ctaSecondary,
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc, 
  image,
  imageAlt,
  showBadge = true,
  onCtaClick,
  customOverlay
}: HeroSectionProps) => {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const finalCtaText = ctaText || ctaPrimary;
  const finalSecondaryCtaText = secondaryCtaText || ctaSecondary;
  const finalImageSrc = imageSrc || image || "";
  const finalCtaHref = ctaHref || `/${language}/pricing`;

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,102,0.05),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: isAr ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-xl md:text-3xl font-extrabold mb-6 leading-tight text-white">
              {title}
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              {onCtaClick ? (
                <button onClick={onCtaClick} className="accent-button inline-block text-lg px-8 py-4">
                  {finalCtaText}
                </button>
              ) : (
                <Link href={finalCtaHref} className="accent-button inline-block text-lg px-8 py-4">
                  {finalCtaText}
                </Link>
              )}
              {finalSecondaryCtaText && (
                onCtaClick ? (
                  <button 
                    onClick={onCtaClick}
                    className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold transition-all text-lg"
                  >
                    {finalSecondaryCtaText}
                  </button>
                ) : (
                  <Link 
                    href={secondaryCtaLink || "#"} 
                    className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold transition-all text-lg"
                  >
                    {finalSecondaryCtaText}
                  </Link>
                )
              )}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white/5 border border-white/10 rounded-3xl p-4 backdrop-blur-sm shadow-2xl overflow-hidden">
              <Image 
                src={finalImageSrc} 
                alt={imageAlt || title} 
                width={800} 
                height={600} 
                className="rounded-2xl w-full"
                referrerPolicy="no-referrer"
              />
              {customOverlay}
              {showBadge && !customOverlay && (
                <div className="absolute -top-6 -right-6 bg-accent text-primary p-4 rounded-2xl shadow-xl font-bold animate-bounce">
                  <Zap className="w-6 h-6" />
                </div>
              )}
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
