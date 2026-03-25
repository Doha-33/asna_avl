"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Database } from "lucide-react";

interface SecurityItem {
  title: string;
  desc: string;
  icon: any;
}

interface OrganizationSecuritySectionProps {
  title: string;
  items: SecurityItem[];
  isAr: boolean;
}

export function OrganizationSecuritySection({ title, items, isAr }: OrganizationSecuritySectionProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: isAr ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-12">{title}</h2>
        <div className="space-y-8">
          {items.map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="bg-primary rounded-[40px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4">
             <span className="bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full">{isAr ? "درجة المؤسسات" : "Enterprise Grade"}</span>
           </div>
           <div className="space-y-6">
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <ShieldCheck className="text-accent w-5 h-5" />
                   <span className="font-bold">{isAr ? "تشفير SSL" : "SSL Encryption"}</span>
                 </div>
                 <span className="text-accent text-xs font-bold">{isAr ? "نشط" : "Active"}</span>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <Users className="text-accent w-5 h-5" />
                   <span className="font-bold">{isAr ? "إدارة الأدوار" : "Role Management"}</span>
                 </div>
                 <span className="text-white/60 text-xs">{isAr ? "247 مستخدماً" : "247 Users"}</span>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <Database className="text-accent w-5 h-5" />
                   <span className="font-bold">{isAr ? "نسخ احتياطي للبيانات" : "Data Backup"}</span>
                 </div>
                 <span className="text-white/60 text-xs">{isAr ? "قبل 24 ساعة" : "24h ago"}</span>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
