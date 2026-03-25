"use client";

import { motion } from "framer-motion";

interface UpgradeSectionProps {
  title: string;
  options: Array<{
    title: string;
    subtitle: string;
    features: string[];
    cta: string;
    color: string;
  }>;
  openDemoModal: () => void;
}

export const UpgradeSection = ({ title, options, openDemoModal }: UpgradeSectionProps) => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">{title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {options.map((option, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${option.color} p-12 rounded-[48px] relative overflow-hidden border border-white/10 flex flex-col`}
            >
              <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent blur-[80px] rounded-full" />
              </div>
              <div className="relative z-10 flex-grow">
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-white/70 mb-8">{option.subtitle}</p>
                <ul className="space-y-4 mb-10">
                  {option.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative z-10">
                <button 
                  onClick={openDemoModal} 
                  className="w-full bg-white text-primary hover:bg-accent hover:text-primary font-bold py-4 rounded-2xl transition-all"
                >
                  {option.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
