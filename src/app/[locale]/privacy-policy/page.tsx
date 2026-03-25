"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

export default function PrivacyPolicyPage() {
  const { language, t } = useLanguage();
  const isAr = language === "ar";

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6"
            >
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">
                {isAr ? "حماية البيانات" : "Data Protection"}
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight"
            >
              {t("legal.privacy")}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none text-gray-600 space-y-8"
          >
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Lock className="text-accent" />
                {isAr ? "مقدمة" : "Introduction"}
              </h2>
              <p>
                {isAr 
                  ? "نحن في ASNA AVL نلتزم بحماية خصوصيتك وبياناتك. توضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك عند استخدام خدماتنا."
                  : "At ASNA AVL, we are committed to protecting your privacy and data. This policy explains how we collect, use, and protect your information when using our services."}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">{isAr ? "1. المعلومات التي نجمعها" : "1. Information We Collect"}</h3>
              <p>
                {isAr
                  ? "نجمع المعلومات التي تقدمها لنا مباشرة عند التسجيل أو طلب عرض سعر، بما في ذلك الاسم، اسم الشركة، البريد الإلكتروني، ورقم الهاتف."
                  : "We collect information you provide directly to us when registering or requesting a quote, including name, company name, email, and phone number."}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">{isAr ? "2. كيف نستخدم معلوماتك" : "2. How We Use Your Information"}</h3>
              <ul className="list-disc ltr:pl-6 rtl:pr-6 space-y-2">
                <li>{isAr ? "تقديم وتحسين خدماتنا لإدارة الأساطيل." : "Provide and improve our fleet management services."}</li>
                <li>{isAr ? "التواصل معك بخصوص طلباتك وتحديثات النظام." : "Communicate with you regarding your requests and system updates."}</li>
                <li>{isAr ? "ضمان الامتثال للأنظمة والقوانين المحلية (مثل منصة وصل)." : "Ensure compliance with local regulations (e.g., WASL platform)."}</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">{isAr ? "3. حماية البيانات" : "3. Data Security"}</h3>
              <p>
                {isAr
                  ? "نستخدم إجراءات أمنية تقنية وإدارية متطورة لحماية بياناتك من الوصول غير المصرح به أو الفقدان."
                  : "We use advanced technical and administrative security measures to protect your data from unauthorized access or loss."}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">{isAr ? "4. حقوقك" : "4. Your Rights"}</h3>
              <p>
                {isAr
                  ? "لك الحق في الوصول إلى بياناتك الشخصية وتصحيحها أو طلب حذفها في أي وقت من خلال التواصل معنا."
                  : "You have the right to access, correct, or request the deletion of your personal data at any time by contacting us."}
              </p>
            </div>

            <div className="pt-12 border-t border-gray-100">
              <p className="text-sm text-gray-400">
                {isAr 
                  ? "آخر تحديث: مارس 2026" 
                  : "Last Updated: March 2026"}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
