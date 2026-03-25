"use client";

import { motion } from "framer-motion";
import { Lock, Database, Puzzle, ShieldCheck } from "lucide-react";

interface SecurityItem {
  title: string;
  desc: string;
  icon: any;
}

interface CommunicationSecuritySectionProps {
  title: string;
  items: SecurityItem[];
  isAr: boolean;
}

export function CommunicationSecuritySection({ title, items, isAr }: CommunicationSecuritySectionProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: isAr ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12">{title}</h2>
        <div className="space-y-8">
          {items.map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary shrink-0">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur-md p-8 rounded-[40px] border border-white/10"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <Lock className="w-5 h-5 text-green-500" />
              </div>
              <span className="font-bold">{isAr ? "تشفير من طرف إلى طرف" : "End-to-End Encryption"}</span>
            </div>
            <span className="text-xs bg-green-500/20 text-green-500 px-3 py-1 rounded-full">{isAr ? "نشط" : "Active"}</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Database className="w-5 h-5 text-blue-500" />
              </div>
              <span className="font-bold">{isAr ? "أرشيف الرسائل" : "Message Archive"}</span>
            </div>
            <span className="text-xs bg-blue-500/20 text-blue-500 px-3 py-1 rounded-full">{isAr ? "ممتثل" : "Compliant"}</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Puzzle className="w-5 h-5 text-purple-500" />
              </div>
              <span className="font-bold">{isAr ? "تكامل الوحدات" : "Module Integration"}</span>
            </div>
            <span className="text-xs bg-purple-500/20 text-purple-500 px-3 py-1 rounded-full">{isAr ? "5 وحدات" : "5 Modules"}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
