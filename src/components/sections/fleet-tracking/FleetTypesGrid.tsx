"use client";

import { motion } from "framer-motion";
import { Truck, Car, Bike, Bus } from "lucide-react";

interface FleetTypesGridProps {
  title: string;
  items: Array<{
    title: string;
    desc?: string;
    icon: any;
  }>;
}

export const FleetTypesGrid = ({ title, items }: FleetTypesGridProps) => {
  return (
    <section className="py-24 bg-white text-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-primary">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-gray-50 p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all text-secondary"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-4">{item.title}</h3>
              {item.desc && <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
