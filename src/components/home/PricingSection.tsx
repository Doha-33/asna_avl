"use client";

import { useLanguage } from "../LanguageContext";
import { CheckCircle2, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { fetchApi, Portfolio } from "@/lib/api";

export const PricingSection = () => {
  const { language } = useLanguage();
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadPortfolios = async () => {
      const data = await fetchApi("/api/portfolio");
      if (data) {
        setPortfolios(data);
      }
      setLoading(false);
    };
    loadPortfolios();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolios.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolios.length) % portfolios.length);
  };

  const getVisibleCards = () => {
    if (portfolios.length === 0) return [];
    if (portfolios.length === 1) return [portfolios[0]];
    
    const prevIndex = (currentIndex - 1 + portfolios.length) % portfolios.length;
    const nextIndex = (currentIndex + 1) % portfolios.length;
    
    return [
      portfolios[prevIndex],
      portfolios[currentIndex],
      portfolios[nextIndex]
    ];
  };

  if (loading || portfolios.length === 0) return null;

  const visibleCards = getVisibleCards();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    style={{
        backgroundImage: "url('/download (1).jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-4">
            {language === "ar" ? "تعاقداتنا" : "Our Contracts"}
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            {language === "ar" 
              ? "نفخر بثقة عملائنا وشراكاتنا الاستراتيجية"
              : "Proud of our clients' trust and strategic partnerships"}
          </p>
        </div>

        <div className="relative flex justify-center items-center min-h-[400px]">
          {/* Navigation Buttons */}
          {portfolios.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 lg:left-0 z-20 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center border border-slate-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 lg:right-0 z-20 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center border border-slate-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Cards Container */}
          <div className="flex items-center justify-center gap-4 md:gap-6" ref={containerRef}>
            {visibleCards.map((item, idx) => {
              const isCenter = idx === 1;
              const isLeft = idx === 0;
              const isRight = idx === 2;
              
              return (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.5,
                    scale: isCenter ? 1 : 0.85,
                    x: isLeft ? -20 : (isRight ? 20 : 0),
                    zIndex: isCenter ? 10 : 5
                  }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`relative transition-all duration-500 cursor-pointer ${
                    isCenter ? 'z-10' : 'z-5'
                  }`}
                  onClick={() => {
                    if (!isCenter && portfolios.length > 1) {
                      if (isLeft) prevSlide();
                      if (isRight) nextSlide();
                    }
                  }}
                >
                  <div className={`
                    w-[320px] md:w-[360px] bg-white rounded-3xl border-2 flex flex-col relative transition-all duration-500
                    ${isCenter 
                      ? 'border-accent/30 shadow-2xl shadow-accent/20 scale-100' 
                      : 'border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:scale-105'
                    }
                  `}>
                    {/* Logo Container */}
                    <div className="flex justify-center pt-8 pb-4">
                      <div className={`
                        w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300
                        ${isCenter ? 'bg-gradient-to-br from-accent/10 to-accent/5' : 'bg-slate-50'}
                      `}>
                        <img 
                          src={item.logo} 
                          alt={item.companyName} 
                          className="h-12 w-12 object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center px-6">
                      <h3 className={`
                        text-xl font-black mb-2 transition-colors duration-300 line-clamp-1
                        ${isCenter ? 'text-accent' : 'text-slate-800'}
                      `}>
                        {item.companyName}
                      </h3>
                      <div className="flex items-center justify-center gap-1.5 text-slate-400 text-sm mb-4">
                        <Calendar size={14} />
                        <span className="font-medium">
                          {new Date(item.contractDate).toLocaleDateString(language === "ar" ? "ar-EG" : "en-US")}
                        </span>
                      </div>

                      {/* Description - Limited to 2 lines */}
                      <p className="text-xs text-slate-500 leading-relaxed text-center line-clamp-2 mb-4 min-h-[40px]">
                        {item.desc}
                      </p>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="mt-auto p-6 pt-0">
                      <div className={`
                        flex items-center justify-center gap-1.5 font-bold py-2 px-3 rounded-full text-xs
                        ${isCenter 
                          ? 'bg-emerald-50 text-emerald-500' 
                          : 'bg-slate-50 text-slate-400'
                        }
                      `}>
                        <CheckCircle2 size={14} />
                        <span>{language === "ar" ? "تعاقد نشط" : "Active Contract"}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};