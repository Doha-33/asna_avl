"use client";

import { LucideIcon } from "lucide-react";

interface RequirementItem {
  title: string;
  icon: LucideIcon;
}

interface WaslRequirementsGridProps {
  title: string;
  subtitle: string;
  items: RequirementItem[];
}

const RequirementCard = ({ title, icon: Icon }: RequirementItem) => (
  <div className="bg-primary p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center gap-4 hover:bg-primary/80 transition-all group">
    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all">
      <Icon className="w-6 h-6" />
    </div>
    <span className="text-white font-bold text-sm md:text-base">{title}</span>
  </div>
);

export function WaslRequirementsGrid({ title, subtitle, items }: WaslRequirementsGridProps) {
  return (
    <section className="py-24 bg-white text-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">{title}</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((req, i) => (
            <RequirementCard key={i} {...req} />
          ))}
        </div>
      </div>
    </section>
  );
}
