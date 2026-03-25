"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { fetchSettings, Settings } from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";

export const WhatsAppButton = () => {
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    const loadSettings = async () => {
      const data = await fetchSettings();
      if (data) setSettings(data);
    };
    loadSettings();
  }, []);

  if (!settings?.whatsapp) return null;

  const whatsappUrl = `https://wa.me/${settings.whatsapp.replace(/\+/g, "")}`;

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
        <MessageCircle size={32} className="fill-current" />
        
        {/* Tooltip */}
        <div className="absolute ltr:right-full rtl:left-full mx-4 px-4 py-2 bg-white text-primary text-sm font-bold rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          WhatsApp Us
        </div>

        {/* Pulse Effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </motion.a>
    </div>
  );
};
