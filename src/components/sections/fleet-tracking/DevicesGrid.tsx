"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface DevicesGridProps {
  title: string;
  items: Array<{
    title: string;
    tags: string[];
    features: string[];
    image: string;
  }>;
  language?: string;
}

export const DevicesGrid = ({ title, items, language }: DevicesGridProps) => {
  const isAr = language === "ar";
  
  return (
    <section className="py-24 bg-white text-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-primary">{title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 rounded-[32px] border border-gray-100 overflow-hidden hover:border-accent/50 transition-all group"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="bg-accent/90 text-primary text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-lg font-bold mb-6 text-primary">{item.title}</h3>
                <ul className="space-y-3">
                  {item.features.map((feature, k) => (
                    <li key={k} className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
