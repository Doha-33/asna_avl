"use client";

import { motion } from "framer-motion";
import { RotateCcw, RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

export default function RefundPolicyPage() {
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
              <RotateCcw className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">
                {isAr ? "سياسة الاسترجاع" : "Refund Policy"}
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight"
            >
              {t("legal.refund")}
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
                <RefreshCw className="text-accent" />
                {isAr ? "سياسة الاسترجاع والاستبدال" : "Refund & Exchange Policy"}
              </h2>
              <p>
                {isAr 
                  ? "نحن في ASNA AVL نهدف إلى رضا عملائنا التام. توضح هذه السياسة شروط استرجاع المبالغ أو استبدال الأجهزة."
                  : "At ASNA AVL, we aim for complete customer satisfaction. This policy explains the conditions for refunds or device exchanges."}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">{isAr ? "1. استبدال الأجهزة" : "1. Device Exchange"}</h3>
              <p>
                {isAr
                  ? "يتم استبدال الأجهزة في حالة وجود عيب مصنعي خلال فترة الضمان المحددة في العقد."
                  : "Devices are exchanged in case of a manufacturing defect within the warranty period specified in the contract."}
              </p>
              <ul className="list-disc ltr:pl-6 rtl:pr-6 space-y-2">
                <li>{isAr ? "يجب أن يكون الجهاز في حالته الأصلية." : "The device must be in its original condition."}</li>
                <li>{isAr ? "يجب تقديم إثبات الشراء أو العقد." : "Proof of purchase or contract must be provided."}</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">{isAr ? "2. استرجاع المبالغ" : "2. Refunds"}</h3>
              <p>
                {isAr
                  ? "يمكن طلب استرجاع المبالغ المدفوعة للاشتراكات السنوية في حال عدم تفعيل الخدمة خلال 14 يوماً من تاريخ الشراء."
                  : "Refunds for annual subscriptions can be requested if the service is not activated within 14 days from the date of purchase."}
              </p>
              <p>
                {isAr
                  ? "لا يتم استرجاع مبالغ التركيب أو الخدمات التي تم تقديمها بالفعل."
                  : "Installation fees or services already provided are non-refundable."}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">{isAr ? "3. الإجراءات" : "3. Procedures"}</h3>
              <p>
                {isAr
                  ? "لتقديم طلب استرجاع أو استبدال، يرجى التواصل مع فريق الدعم الفني عبر البريد الإلكتروني أو رقم الهاتف الموحد."
                  : "To submit a refund or exchange request, please contact the technical support team via email or the unified phone number."}
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
