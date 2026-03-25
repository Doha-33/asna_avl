"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Capability {
  title: string;
  desc: string;
  icon: any;
  features: string[];
  colorClass: string;
}

interface CommunicationCapabilitiesGridProps {
  items: Capability[];
}

const CapabilityCard = ({ title, desc, icon: Icon, features, colorClass }: Capability) => (
  <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all ${colorClass}`}>
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
    <div className="space-y-3">
      {features.map((f, i) => (
        <div key={i} className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
          <span className="text-gray-600 text-xs">{f}</span>
        </div>
      ))}
    </div>
  </div>
);

export function CommunicationCapabilitiesGrid({ items }: CommunicationCapabilitiesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <CapabilityCard {...item} />
        </motion.div>
      ))}
    </div>
  );
}
