"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface RealtimeDataSectionProps {
  title: string;
  items: Array<{
    title: string;
    icon: any;
  }>;
  image: string;
}

export const RealtimeDataSection = ({ title, items, image }: RealtimeDataSectionProps) => {
  return (
    <section className="py-24 bg-white text-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-primary leading-tight">{title}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {items.map((item, i) => (
                <div key={i} className="flex flex-col gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-accent/30 transition-all group">
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-primary">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <Image 
                src={image} 
                alt={title} 
                width={800} 
                height={600} 
                className="rounded-[40px] shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
