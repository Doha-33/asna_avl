"use client";

import { useLanguage } from "../LanguageContext";
import Link from "next/link";
import { Smartphone, Apple, Play, ArrowRight, Star, Download } from "lucide-react";
import { motion } from "framer-motion";

export const AppDownloadSection = () => {
  const { language } = useLanguage();

  return (
    <section className="relative py-20 md:py-24 bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/5 to-transparent rounded-full blur-[150px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-start"
          >
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <span className="text-xs text-white/80 font-medium">4.9/5</span>
              <span className="text-xs text-white/60">(1,200+ {language === "ar" ? "تقييم" : "reviews"})</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight text-white">
              {language === "ar" 
                ? "حمل الآن تطبيق ASNA AVL واستمتع بكل المميزات" 
                : "Download ASNA AVL App Now and Enjoy All Features"}
            </h2>
            
            <p className="text-base md:text-lg text-white/70 mb-8 max-w-xl leading-relaxed">
              {language === "ar"
                ? "تابع أسطولك من أي مكان وفي أي وقت. تطبيقنا يوفر لك كل الأدوات التي تحتاجها لإدارة مركباتك بكفاءة عالية من جوالك."
                : "Track your fleet from anywhere, anytime. Our app provides all the tools you need to manage your vehicles efficiently from your phone."}
            </p>
            
            {/* Feature List */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <span>{language === "ar" ? "تتبع لحظي للمركبات" : "Real-time vehicle tracking"}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <span>{language === "ar" ? "تقارير وتحليلات متقدمة" : "Advanced reports & analytics"}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <span>{language === "ar" ? "إشعارات فورية" : "Instant notifications"}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <span>{language === "ar" ? "واجهة سهلة الاستخدام" : "User-friendly interface"}</span>
              </div>
            </div>
            
            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-white text-primary px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 group"
              >
                <Apple size={24} className="md:w-7 md:h-7" />
                <div className="text-start">
                  <div className="text-[10px] uppercase tracking-wider text-slate-500">Download on the</div>
                  <div className="text-base md:text-lg leading-none font-black">App Store</div>
                </div>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 group"
              >
                <Play size={24} className="md:w-7 md:h-7" />
                <div className="text-start">
                  <div className="text-[10px] uppercase tracking-wider text-white/60">Get it on</div>
                  <div className="text-base md:text-lg leading-none font-black">Google Play</div>
                </div>
              </motion.button>
            </div>

            {/* QR Code */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Download size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-white/60">
                  {language === "ar" ? "امسح الكود لتحميل التطبيق" : "Scan QR code to download"}
                </p>
                <p className="text-xs text-white/40 mt-1">
                  {language === "ar" ? "متوفر على iOS و Android" : "Available on iOS and Android"}
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Content - App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-10 bg-accent/20 blur-[80px] rounded-full animate-pulse" />
            
            {/* App Mockup with Shadow */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Decorative Ring */}
                <div className="absolute -inset-4 rounded-[48px] bg-gradient-to-r from-accent/30 to-accent/10 blur-xl" />
                
                <img 
                  src="/app.jpg" 
                  alt="App Mockup" 
                  className="relative w-full max-w-[320px] md:max-w-[360px] lg:max-w-[400px] h-auto rounded-[40px] shadow-2xl border-4 border-white/20"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-accent rounded-full p-2 shadow-lg animate-bounce">
                  <Smartphone size={20} className="text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-2 shadow-lg animate-pulse">
                  <Download size={20} className="text-accent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};