"use client";

import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fetchApi, Client } from "@/lib/api";

export const ClientsSection = () => {
  const { language } = useLanguage();
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadClients = async () => {
      const data = await fetchApi("/api/clients");
      if (data && data.length > 0) {
        setClients(data);
      } else {
        // Mock data if API is empty
        setClients([
          { _id: "1", clientName: "Client 1", logo: "https://picsum.photos/seed/client1/200/200" },
          { _id: "2", clientName: "Client 2", logo: "https://picsum.photos/seed/client2/200/200" },
          { _id: "3", clientName: "Client 3", logo: "https://picsum.photos/seed/client3/200/200" },
          { _id: "4", clientName: "Client 4", logo: "https://picsum.photos/seed/client4/200/200" },
          { _id: "5", clientName: "Client 5", logo: "https://picsum.photos/seed/client5/200/200" },
        ]);
      }
      setLoading(false);
    };
    loadClients();
  }, []);

  if (loading) return null;

  // Duplicate clients multiple times for seamless infinite scroll without gaps
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-secondary/30 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
            {language === "ar" ? "عملائنا" : "Our Clients"}
          </h2>
          <p className="text-lg text-primary/60 max-w-2xl mx-auto">
            {language === "ar" 
              ? "نفخر بثقة عملائنا الذين يختارون أسناافل لحلول النقل الذكية"
              : "Proud to be trusted by industry leaders who choose ASNA AVL for their smart logistics solutions"}
          </p>
        </motion.div>

        {/* Logo Marquee - Seamless Infinite Scroll */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          <motion.div
            animate={{
              x: ["0%", "-25%"],
            }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
            className="flex gap-16 items-center"
            style={{ width: "fit-content" }}
          >
            {duplicatedClients.map((client, idx) => (
              <motion.div
                key={`${client._id}-${idx}`}
                className="flex-shrink-0 inline-flex flex-col items-center justify-center gap-3 px-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center transition-all duration-300">
                  <img
                    src={client.logo}
                    alt={client.clientName}
                    className="max-w-full max-h-full object-contain transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-sm font-medium text-primary/50 hover:text-primary/80 transition-colors duration-300">
                  {client.clientName}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Optional: Show client count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white rounded-full shadow-md">
            <span className="text-2xl font-black text-accent">{clients.length}+</span>
            <span className="text-sm text-primary/60">
              {language === "ar" ? "عميل يثقون بنا" : "Clients Trust Us"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};