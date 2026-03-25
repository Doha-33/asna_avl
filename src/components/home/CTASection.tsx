"use client";

import { useLanguage } from "../LanguageContext";
import { useDemoModal } from "../DemoModalContext";
import { Clock, ArrowRight, Sparkles, CheckCircle2, Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const CTASection = () => {
  const { language } = useLanguage();
  const { openDemoModal } = useDemoModal();

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-primary/5 rounded-full blur-[70px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl border border-slate-100 overflow-hidden"
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative p-6 md:p-8 lg:p-10">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Icon Section */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse" />
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-accent to-accent/80 text-white flex items-center justify-center shadow-lg">
                    <Clock size={28} className="md:w-8 md:h-8" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center md:text-start">
                <h3 className="text-lg md:text-xl font-black text-primary mb-2">
                  {language === "ar" 
                    ? "اكتشف كيف يمكن لمنصتنا أن تحدث تحولاً في عمليات أسطولك" 
                    : "Discover how our platform can transform your fleet operations"}
                </h3>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
                  <div className="flex items-center gap-1 text-accent font-bold text-sm">
                    <Clock size={14} />
                    <span>30 {language === "ar" ? "دقيقة" : "minutes"}</span>
                  </div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full hidden md:block" />
                  <div className="flex items-center gap-1 text-emerald-500 text-sm">
                    <CheckCircle2 size={14} />
                    <span>{language === "ar" ? "عرض مجاني" : "Free demo"}</span>
                  </div>
                  <div className="w-1 h-1 bg-slate-300 rounded-full hidden md:block" />
                  <div className="flex items-center gap-1 text-slate-500 text-sm">
                    <Calendar size={14} />
                    <span>{language === "ar" ? "احجز الآن" : "Book now"}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 max-w-2xl">
                  {language === "ar"
                    ? "احجز عرضاً توضيحياً مجانياً اليوم وشاهد بنفسك كيف يمكن ل ASNA AVL أن توفر لك الوقت والمال."
                    : "Book a free demo today and see for yourself how ASNA AVL can save you time and money."}
                </p>
              </div>

              {/* Button Section */}
              <div className="flex-shrink-0">
                <button 
                  onClick={openDemoModal}
                  className="group relative px-6 md:px-8 py-3 md:py-3.5 bg-accent text-white font-bold rounded-xl hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center gap-2 overflow-hidden"
                >
                  <Sparkles size={18} className="relative z-10" />
                  <span className="relative z-10 text-sm md:text-base">
                    {language === "ar" ? "جرب النظام الآن" : "Try the System Now"}
                  </span>
                  <ChevronRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform rtl-flip" />
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none" />
        </motion.div>
      </div>

      {/* Optional: Trust Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-center">
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <CheckCircle2 size={12} className="text-emerald-500" />
            <span>{language === "ar" ? "دعم فني 24/7" : "24/7 Support"}</span>
          </div>
          <div className="w-1 h-1 bg-slate-300 rounded-full" />
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <CheckCircle2 size={12} className="text-emerald-500" />
            <span>{language === "ar" ? "ضمان استعادة المبلغ" : "Money-back guarantee"}</span>
          </div>
          <div className="w-1 h-1 bg-slate-300 rounded-full" />
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <CheckCircle2 size={12} className="text-emerald-500" />
            <span>{language === "ar" ? "تخصيص كامل" : "Full customization"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};