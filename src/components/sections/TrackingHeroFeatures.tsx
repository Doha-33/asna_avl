"use client";

import { motion } from "framer-motion";

interface Feature {
  title: string;
  desc: string;
  icon: any;
}

interface TrackingHeroFeaturesProps {
  items: Feature[];
}

const FeatureBox = ({ title, desc, icon: Icon }: Feature) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-all group">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
    <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
  </div>
);

export function TrackingHeroFeatures({ items }: TrackingHeroFeaturesProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
        >
          <FeatureBox {...f} />
        </motion.div>
      ))}
    </div>
  );
}
