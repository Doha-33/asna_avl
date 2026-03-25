"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";

export const DashboardPreview = () => {
  const { language } = useLanguage();
  return (
    <section className="py-20 bg-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-accent/5">
          <img 
            src="https://picsum.photos/seed/fleet-dashboard/1600/900" 
            alt="ASNA AVL Dashboard" 
            className="w-full h-auto opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
          
          {/* Floating UI Elements (Simulated) */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 ltr:right-10 rtl:left-10 glass-card p-4 rounded-2xl z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold">
                {language === "ar" ? "127 مركبة نشطة" : "127 Active Vehicles"}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
