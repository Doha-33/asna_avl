"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

export default function TermsOfServicePage() {
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
              <FileText className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">
                {isAr ? "اتفاقية الاستخدام" : "Usage Agreement"}
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight"
            >
              {t("legal.terms")}
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
                <CheckCircle2 className="text-accent" />
                {isAr ? "شروط الاستخدام" : "Usage Conditions"}
              </h2>
              <p>
                {isAr 
                  ? "باستخدامك لخدمات ASNA AVL، فإنك توافق على الالتزام بالشروط والأحكام التالية. يرجى قراءتها بعناية."
                  : "By using ASNA AVL services, you agree to abide by the following terms and conditions. Please read them carefully."}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">{isAr ? "1. الخدمات المقدمة" : "1. Services Provided"}</h3>
              <p>
                {isAr
                  ? "نقدم حلولاً تقنية لإدارة الأساطيل وتتبع المركبات. قد تتغير الخدمات أو يتم تحديثها من وقت لآخر لضمان جودة الأداء."
                  : "We provide technical solutions for fleet management and vehicle tracking. Services may change or be updated from time to time to ensure performance quality."}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">{isAr ? "2. مسؤولية المستخدم" : "2. User Responsibility"}</h3>
              <ul className="list-disc ltr:pl-6 rtl:pr-6 space-y-2">
                <li>{isAr ? "توفير معلومات دقيقة وصحيحة عند التسجيل." : "Provide accurate and correct information upon registration."}</li>
                <li>{isAr ? "استخدام الخدمات بما يتوافق مع القوانين والأنظمة المحلية." : "Use services in compliance with local laws and regulations."}</li>
                <li>{isAr ? "الحفاظ على سرية معلومات الدخول الخاصة بحسابك." : "Maintain the confidentiality of your account login information."}</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">{isAr ? "3. الدفع والاشتراكات" : "3. Payment and Subscriptions"}</h3>
              <p>
                {isAr
                  ? "تخضع جميع الاشتراكات لرسوم محددة مسبقاً. يحق لASNA AVL تعديل الأسعار مع إبلاغ المستخدمين مسبقاً."
                  : "All subscriptions are subject to pre-defined fees. ASNA AVL reserves the right to adjust prices with prior notice to users."}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">{isAr ? "4. حدود المسؤولية" : "4. Limitation of Liability"}</h3>
              <p>
                {isAr
                  ? "ASNA AVL غير مسؤولة عن أي أضرار غير مباشرة أو فقدان بيانات ناتج عن سوء استخدام الخدمة."
                  : "ASNA AVL is not responsible for any indirect damages or data loss resulting from misuse of the service."}
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
