"use client";

import Image from "next/image";
import { FeatureItem } from "./FeatureItem";

interface FeatureSectionProps {
  title: string;
  description?: string;
  desc?: string;
  features?: string[];
  points?: string[];
  ctaText?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  className?: string;
}

export const FeatureSection = ({
  title,
  description,
  desc,
  features,
  points,
  ctaText,
  onCtaClick,
  imageSrc,
  image,
  imageAlt,
  reverse = false,
  className = ""
}: FeatureSectionProps) => {
  const finalDescription = description || desc;
  const finalFeatures = features || points || [];
  const finalImageSrc = imageSrc || image || "";
  
  return (
    <section className={`py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
          <div className={`${reverse ? "lg:order-2" : "lg:order-1"}`}>
            <div className="relative">
              <Image 
                src={finalImageSrc} 
                alt={imageAlt || title} 
                width={600} 
                height={600} 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent rounded-3xl" />
            </div>
          </div>
          <div className={`${reverse ? "lg:order-1" : "lg:order-2"}`}>
            <h2 className="text-base md:text-xl font-bold mb-6">{title}</h2>
            {finalDescription && <p className="text-gray-400 mb-8 text-sm md:text-base leading-relaxed">{finalDescription}</p>}
            <div className="space-y-4 mb-10">
              {finalFeatures.map((f, i) => (
                <FeatureItem key={i} text={f} />
              ))}
            </div>
            {onCtaClick && ctaText && (
              <button onClick={onCtaClick} className="accent-button inline-block">
                {ctaText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
