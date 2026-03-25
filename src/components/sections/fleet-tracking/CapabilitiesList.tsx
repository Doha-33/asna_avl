"use client";

import { FeatureSection } from "@/components/shared/FeatureSection";
import { SectionHeader } from "@/components/shared/SectionHeader";

interface CapabilitiesListProps {
  title?: string;
  subtitle?: string;
  items: Array<{
    title: string;
    description?: string;
    features: string[];
    cta: string;
    image: string;
  }>;
  openDemoModal: () => void;
}

export const CapabilitiesList = ({ title, subtitle, items, openDemoModal }: CapabilitiesListProps) => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        {(title || subtitle) && (
          <SectionHeader title={title || ""} subtitle={subtitle} />
        )}
        <div className="space-y-0">
          {items.map((item, i) => (
            <FeatureSection
              key={i}
              title={item.title}
              description={item.description}
              features={item.features}
              ctaText={item.cta}
              imageSrc={item.image}
              imageAlt={item.title}
              reverse={i % 2 !== 0}
              onCtaClick={openDemoModal}
              className="py-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
