"use client";

import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fetchApi } from "@/lib/api";

interface Certificate {
  _id: string;
  name: string;
  image: string;
}

export const CertificatesSection = () => {
  const { language } = useLanguage();
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCertificates = async () => {
      const data = await fetchApi("/api/certificates");
      if (data && data.length > 0) {
        setCertificates(data);
      } else {
        // Mock data if API is empty
        setCertificates([
          { _id: "1", name: "ISO 9001", image: "https://picsum.photos/seed/iso/200/200" },
          { _id: "2", name: "SASO", image: "https://picsum.photos/seed/saso/200/200" },
          { _id: "3", name: "GDPR", image: "https://picsum.photos/seed/gdpr/200/200" },
          { _id: "4", name: "TUV", image: "https://picsum.photos/seed/tuv/200/200" },
          { _id: "5", name: "CE", image: "https://picsum.photos/seed/ce/200/200" },
        ]);
      }
      setLoading(false);
    };
    loadCertificates();
  }, []);

  if (loading) return null;

  const duplicatedCertificates = [...certificates, ...certificates, ...certificates, ...certificates];

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
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          <motion.div
            animate={{
              x: ["0%", "-25%"],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
            className="flex gap-16 items-center"
            style={{ width: "fit-content" }}
          >
            {duplicatedCertificates.map((cert, idx) => (
              <motion.div
                key={`${cert._id}-${idx}`}
                className="flex-shrink-0 inline-flex flex-col items-center justify-center gap-3 px-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center transition-all duration-300">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-sm font-medium text-primary/50 hover:text-primary/80 transition-colors duration-300">
                  {cert.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
