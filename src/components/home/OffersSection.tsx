"use client";

import { useLanguage } from "../LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { fetchApi, Offer } from "@/lib/api";
import { ExternalLink, Sparkles, Tag, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export const OffersSection = () => {
  const { language } = useLanguage();
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const loadOffers = async () => {
      const data = await fetchApi("/api/offers");
      if (data) {
        setOffers(data);
      }
      setLoading(false);
    };
    loadOffers();
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);
  };

  // Get visible offers (3 at a time)
  const getVisibleOffers = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % offers.length;
      visible.push(offers[index]);
    }
    return visible;
  };

  if (loading || offers.length === 0) return null;

  const visibleOffers = getVisibleOffers();

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-accent">
              {language === "ar" ? "عروض محدودة" : "Limited Offers"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
            {language === "ar" ? "عروضنا الحصرية" : "Exclusive Offers"}
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            {language === "ar" 
              ? "استفد من أفضل العروض والخصومات لإدارة أسطولك بكفاءة أعلى"
              : "Take advantage of the best offers and discounts for efficient fleet management"}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {offers.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center border border-slate-200"
              >
                <ChevronLeft size={20} className="lg:w-6 lg:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center border border-slate-200"
              >
                <ChevronRight size={20} className="lg:w-6 lg:h-6" />
              </button>
            </>
          )}

          {/* Offers Grid - Shows 3 at a time */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="wait" custom={direction}>
              {visibleOffers.map((offer, idx) => (
                <motion.div
                  key={`${offer._id}-${currentIndex}`}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
                >
                  {/* Image Container */}
                  <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                    <img 
                      src={offer.image} 
                      alt={offer.offerName} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    
                    {/* Offer Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="flex items-center gap-1.5 bg-accent text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                        <Tag size={12} />
                        <span>{language === "ar" ? "عرض خاص" : "Special Offer"}</span>
                      </div>
                    </div>

                    {/* Hover Overlay with Button */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-primary/80 backdrop-blur-sm flex items-center justify-center z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    >
                      <a 
                        href={offer.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white text-primary rounded-xl font-bold hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
                      >
                        <span>{language === "ar" ? "احصل على العرض" : "Get Offer"}</span>
                        <ExternalLink size={16} />
                      </a>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-black text-primary mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                      {offer.offerName}
                    </h3>
                    
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
                      {offer.desc}
                    </p>

                    {/* Footer with CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock size={12} />
                        <span>
                          {language === "ar" ? "عرض محدود" : "Limited time"}
                        </span>
                      </div>
                      <a 
                        href={offer.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-bold text-accent hover:text-primary transition-colors group/link"
                      >
                        <span>{language === "ar" ? "اعرف المزيد" : "Learn more"}</span>
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Indicators */}
        {offers.length > 3 && (
          <div className="flex justify-center gap-2 mt-8 md:mt-10">
            {offers.map((_, idx) => {
              // Show only relevant indicators or all if less than 7
              const isVisible = offers.length <= 7 || 
                Math.abs(idx - currentIndex) <= 2 || 
                idx === 0 || 
                idx === offers.length - 1;
              
              if (!isVisible && offers.length > 7) return null;
              
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className="group focus:outline-none"
                >
                  <div
                    className={`transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-6 h-2 bg-accent rounded-full"
                        : "w-2 h-2 bg-slate-300 rounded-full group-hover:bg-slate-400 group-hover:scale-110"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        )}

        {/* Offer Count Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 md:mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-slate-100">
            <span className="text-lg font-black text-accent">{offers.length}</span>
            <span className="text-xs text-slate-500 font-medium">
              {language === "ar" ? "عرض حصري" : "Exclusive Offers"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};