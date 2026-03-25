"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TabItem {
  title: string;
  icon: any;
}

interface TrackingTabsSectionProps {
  activeTab: "system" | "devices";
  setActiveTab: (tab: "system" | "devices") => void;
  tabs: { system: string; devices: string };
  systemTab: { title: string; items: TabItem[]; cta: string };
  devicesTab: { title: string; items: TabItem[]; cta: string };
  isAr: boolean;
  onCtaClick: () => void;
}

export function TrackingTabsSection({
  activeTab,
  setActiveTab,
  tabs,
  systemTab,
  devicesTab,
  isAr,
  onCtaClick
}: TrackingTabsSectionProps) {
  const activeContent = activeTab === "system" ? systemTab : devicesTab;

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-center mb-16">
        <div className="bg-white/5 p-1 rounded-2xl border border-white/10 flex">
          <button 
            onClick={() => setActiveTab("system")}
            className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === "system" ? "bg-accent text-primary shadow-lg" : "text-white/60 hover:text-white"}`}
          >
            {tabs.system}
          </button>
          <button 
            onClick={() => setActiveTab("devices")}
            className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === "devices" ? "bg-accent text-primary shadow-lg" : "text-white/60 hover:text-white"}`}
          >
            {tabs.devices}
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: isAr ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative"
        >
          {activeTab === "system" ? (
            <div className="relative">
              <Image 
                src="https://picsum.photos/seed/map-tracking/800/600" 
                alt="Tracking System" 
                width={800} 
                height={600} 
                className="rounded-3xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white p-4 rounded-2xl shadow-xl text-primary max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold">{isAr ? "معلومات السائق" : "Driver Info"}</span>
                </div>
                <p className="text-[10px] text-gray-500">{isAr ? "محمد عبدالله" : "Mohamed Abdullah"}</p>
                <p className="text-[10px] text-gray-500">{isAr ? "رائج نوفمبر 2025" : "Active Nov 2025"}</p>
              </div>
            </div>
          ) : (
            <div className="relative bg-white/5 rounded-3xl p-12 flex items-center justify-center border border-white/10">
              <Image 
                src="https://picsum.photos/seed/device-certified/400/400" 
                alt="Certified Device" 
                width={400} 
                height={400} 
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
        </motion.div>

        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-10 leading-tight">
            {activeContent.title}
          </h2>
          <div className="space-y-6 mb-12">
            {activeContent.items.map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-accent/30 transition-all group">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold">{item.title}</span>
              </div>
            ))}
          </div>
          <button onClick={onCtaClick} className="accent-button text-xl px-12 py-5 w-full lg:w-auto">
            {activeContent.cta}
          </button>
        </div>
      </div>
    </div>
  );
}
