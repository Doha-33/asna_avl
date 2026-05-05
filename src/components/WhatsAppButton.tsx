"use client";

import { useState, useEffect } from "react";
import { fetchSettings, Settings } from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const data = await fetchSettings();
        console.log("Settings data:", data);
        if (data) {
          setSettings(data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error loading settings:", err);
        setError(true);
      }
    };
    loadSettings();
  }, []);

  // رقم تجريبي للاختبار (يمكنك استخدام رقم وهمي)
  const whatsappNumber = settings?.whatsapp || "966564924011"; // رقم تجريبي
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`;

  // إظهار الزر دائماً للاختبار (يمكنك إزالة الشرط بعد التأكد)
  // if (!settings?.whatsapp) return null;

  return (
    <div className="fixed bottom-8 ltr:right-8 rtl:left-8 z-[100]">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all relative group"
      >
        <FaWhatsapp size={32} className="fill-current" />
        
        {/* Tooltip */}
        <div className="absolute ltr:right-full rtl:left-full mx-4 px-4 py-2 bg-white text-primary text-sm font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          {error ? "رقم واتساب غير متوفر" : "WhatsApp Us"}
        </div>

        {/* Pulse Effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </motion.a>
    </div>
  );
};