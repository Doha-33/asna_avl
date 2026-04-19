"use client";

import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { fetchApi } from "@/lib/api";

interface Certificate {
  _id: string;
  name: string;
  logo: string;
}

export const CertificatesSection = () => {
  const { language } = useLanguage();
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadCertificates = async () => {
      const data = await fetchApi("/api/certificateOrLicense");
      if (data && data.length > 0) {
        setCertificates(data);
      }
      setLoading(false);
    };
    loadCertificates();
  }, []);

  // Calculate total width after certificates are loaded
  useEffect(() => {
    if (contentRef.current && certificates.length > 0) {
      const updateWidth = () => {
        if (contentRef.current) {
          setMarqueeWidth(contentRef.current.scrollWidth / 3);
        }
      };
      
      updateWidth();
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, [certificates]);

  if (loading) return null;

  // Create 3 copies for seamless loop
  const duplicatedCertificates = [...certificates, ...certificates, ...certificates];
  
  // تحديد اتجاه الحركة حسب اللغة
  const isRTL = language === "ar";
  const animateDirection = marqueeWidth 
    ? (isRTL ? [0, marqueeWidth] : [0, -marqueeWidth])
    : (isRTL ? [0, "33.33%"] : [0, "-33.33%"]);

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
            {language === "ar" ? "الشهادات والتراخيص" : "Certificates & Licenses"}
          </h2>
          <p className="text-lg text-primary/60 max-w-2xl mx-auto">
            {language === "ar" 
              ? "نلتزم بأعلى معايير الجودة والاحترافية في جميع خدماتنا"
              : "We are committed to the highest standards of quality and professionalism in all our services"}
          </p>
        </motion.div>

        <div className="relative overflow-hidden py-8">
          {/* Gradient Overlays - حسب اتجاه اللغة */}
          <div className={`absolute inset-y-0 ${isRTL ? 'right-0' : 'left-0'} w-32 bg-gradient-to-${isRTL ? 'l' : 'r'} from-white via-white/80 to-transparent z-10 pointer-events-none`} />
          <div className={`absolute inset-y-0 ${isRTL ? 'left-0' : 'right-0'} w-32 bg-gradient-to-${isRTL ? 'r' : 'l'} from-white via-white/80 to-transparent z-10 pointer-events-none`} />
          
          <motion.div
            animate={{
              x: animateDirection,
            }}
            transition={{
              x: {
                duration: Math.max(30, certificates.length * 1.5), // مدة أبطأ حسب عدد الشهادات
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
            className="flex gap-8 items-center"
            style={{ 
              width: "fit-content",
              display: "flex",
              flexWrap: "nowrap"
            }}
          >
            <div 
              ref={contentRef}
              className="flex gap-8 items-center"
              style={{ flexShrink: 0 }}
            >
              {duplicatedCertificates.map((cert, idx) => (
                <motion.div
                  key={`${cert._id}-${idx}`}
                  className="flex-shrink-0 inline-flex flex-col items-center justify-center gap-3"
                  style={{ 
                    minWidth: "120px",
                    width: "auto"
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center transition-all duration-300">
                    <img
                      src={cert.logo}
                      alt={cert.name}
                      className="max-w-full max-h-full object-contain transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      style={{ display: "block" }}
                    />
                  </div>
                  <span className="text-sm font-medium text-primary/50 whitespace-nowrap hover:text-primary/80 transition-colors duration-300">
                    {cert.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};