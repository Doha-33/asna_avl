"use client";

import { motion } from "framer-motion";

interface CapabilityItem {
  title: string;
  desc: string;
  icon: any;
}

interface CapabilitiesGridProps {
  title: string;
  description: string;
  items: CapabilityItem[];
}

export const CapabilitiesGrid = ({ title, description, items }: CapabilitiesGridProps) => (
  <section className="py-24 bg-white text-secondary">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-primary">{title}</h2>
        <p className="text-base text-gray-600 leading-relaxed max-w-5xl mx-auto">
          {description}
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {items.slice(0, 3).map((item, i) => (
          <CapabilityCard key={i} {...item} />
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
        {items.slice(3).map((item, i) => (
          <CapabilityCard key={i} {...item} />
        ))}
      </div>
    </div>
  </section>
);

const CapabilityCard = ({ title, desc, icon: Icon }: CapabilityItem) => (
  <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-lg font-bold text-primary mb-4">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);
