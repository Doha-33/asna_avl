"use client";

import { ShieldCheck } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export const DevicesSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 light-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-primary">
            {language === "ar" ? "أجهزة تتبع السيارات من ASNA AVL" : "Vehicle Tracking Devices from ASNA AVL"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: language === "ar" ? "جي بي اس للسيارة S21L" : "GPS for Car S21L", 
              tags: language === "ar" ? ["بدون فني", "صغير", "المركبات الخفيفة"] : ["No Technician", "Small", "Light Vehicles"], 
              img: "https://picsum.photos/seed/gps1/400/300" 
            },
            { 
              name: language === "ar" ? "جهاز تتبع بخاصية المغناطيس" : "Magnetic Tracking Device", 
              tags: language === "ar" ? ["تتبع الأصول", "لاسلكي", "مغناطيس"] : ["Asset Tracking", "Wireless", "Magnet"], 
              img: "https://picsum.photos/seed/gps2/400/300" 
            },
            { 
              name: language === "ar" ? "جهاز تعقب المركبات تيلتونيكا" : "Teltonika Vehicle Tracker", 
              tags: language === "ar" ? ["سيارات", "دراجات نارية", "أسطول التوصيل"] : ["Cars", "Motorcycles", "Delivery Fleet"], 
              img: "https://picsum.photos/seed/gps3/400/300" 
            },
          ].map((device, i) => (
            <div key={i} className="light-card overflow-hidden !p-0 group">
              <div className="h-64 bg-slate-50 flex items-center justify-center p-8 group-hover:bg-white transition-colors duration-500">
                <img src={device.img} className="max-h-full object-contain shadow-sm rounded-lg" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {device.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-bold px-3 py-1 rounded-full bg-accent/10 text-accent">{tag}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-primary">{device.name}</h3>
                <ul className="space-y-3 mb-8 text-primary/70">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                    <span className="font-medium">{language === "ar" ? "تركيب سهل وسريع" : "Quick and easy installation"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                    <span className="font-medium">{language === "ar" ? "دقة عالية في التتبع" : "High tracking accuracy"}</span>
                  </li>
                </ul>
                <button className="outline-button w-full text-primary border-primary/20 hover:bg-primary hover:text-white">
                  {language === "ar" ? "تفاصيل الجهاز" : "Device Details"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
