"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Feature {
  title: string;
  desc: string;
  icon: any;
  points?: string[];
}

interface OrganizationFeaturesGridProps {
  items: Feature[];
}

const FeatureCard = ({ title, desc, icon: Icon, points }: Feature) => {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
      <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-extrabold text-primary mb-4">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
      {points && (
        <ul className="space-y-3 mt-auto">
          {points.map((point, i) => (
            <li key={i} className="flex items-center gap-2 text-sm font-bold text-primary">
              <Check className="w-4 h-4 text-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export function OrganizationFeaturesGrid({ items }: OrganizationFeaturesGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <FeatureCard {...feature} />
        </motion.div>
      ))}
    </div>
  );
}
