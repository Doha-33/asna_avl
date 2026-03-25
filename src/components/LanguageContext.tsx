"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    "nav.products": "المنتجات",
    "nav.products.tracking": "نظام تتبع المركبات",
    "nav.products.inspection": "عمليات الفحص",
    "nav.products.fuel": "نظام إدارة الوقود",
    "nav.products.maintenance": "برنامج إدارة الصيانة",
    "nav.devices": "الأجهزة",
    "nav.solutions": "الحلول والأنظمة",
    "nav.pricing": "التسعير",
    "nav.resources": "الموارد",
    "nav.company": "الشركة",
    "nav.demo": "احجز عرضاً تجريبياً",
    "nav.blogs":"المدونات",
    "nav.app":"التطبيق",
    "hero.title": "نظام إدارة الأسطول و تتبع المركبات الذي يتابع الأعطال و الصيانة",
    "hero.subtitle": "انتقل من تتبع المركبات فقط إلى شفافية تسهل قراراتك. ساعات عمل السائقين واستخدام كل مركبة في سجلات محفوظة توصلك إلى جوالك.",
    "hero.cta.start": "جرب النظام الآن",
    "hero.cta.more": "اعرف المزيد",
    "hero.stat.vehicles": "توسع حتى 18,000 جهاز",
    "hero.stat.no_tech": "أكثر من 4,500 عميل",
    "hero.stat.erp": "تكامل ERP",
    "footer.rights": "جميع الحقوق محفوظة لشركة ASNA AVL",
    "pricing.step1.title": "كم عدد المركبات أو الأصول التي لديك؟",
    "pricing.step1.subtitle": "يساعدنا هذا في تصميم حل ASNA AVL المثالي لحجم عملياتك وتقديم توصيات تسعير دقيقة",
    "pricing.step2.title": "ما الحلول التي تهتم بها؟",
    "pricing.step2.subtitle": "اختر الوحدات التي تتوافق مع احتياجات إدارة أسطولك.",
    "pricing.step3.title": "ما نوع المركبات في أسطولك؟",
    "pricing.step3.subtitle": "يساعدنا هذا في اختيار الأجهزة والبرامج المتوافقة مع نوع مركباتك.",
    "pricing.step4.title": "دعنا نتعرف عليك",
    "pricing.step4.subtitle": "ساعدنا في إعداد العرض التجريبي وعرض الأسعار المثاليين المصممين خصيصاً لاحتياجات إدارة أسطولك وأهداف عملك",
    "pricing.next": "متابعة",
    "pricing.back": "رجوع",
    "pricing.home": "العودة للرئيسية",
    "pricing.submit": "إرسال الطلب",
    "legal.privacy": "سياسة الخصوصية",
    "legal.terms": "شروط الخدمة",
    "legal.refund": "الإسترجاع والاستبدال",
    "form.name": "الاسم الكامل",
    "form.company": "اسم الشركة",
    "form.email": "البريد الإلكتروني للعمل",
    "form.city": "المدينة",
    "form.phone": "رقم الهاتف",
    "form.source": "كيف سمعت عنا؟",
  },
  en: {
    "nav.products": "Products",
    "nav.products.tracking": "Vehicle Tracking System",
    "nav.products.inspection": "Inspection Operations",
    "nav.products.fuel": "Fuel Management",
    "nav.products.maintenance": "Maintenance Management",
    "nav.devices": "Devices",
    "nav.solutions": "Solutions & Systems",
    "nav.pricing": "Pricing",
    "nav.resources": "Resources",
    "nav.company": "Company",
    "nav.demo": "Book a Demo",
    "nav.blogs":"Blogs",
    "nav.app":"App",
    "hero.title": "Fleet Management & Vehicle Tracking System That Tracks Faults & Maintenance",
    "hero.subtitle": "Move from just tracking vehicles to transparency that facilitates your decisions. Driver working hours and usage of each vehicle in saved records delivered to your mobile.",
    "hero.cta.start": "Try the System Now",
    "hero.cta.more": "Learn More",
    "hero.stat.vehicles": "Scale up to 18,000 devices",
    "hero.stat.no_tech": "Over 4,500 clients",
    "hero.stat.erp": "ERP Integration",
    "footer.rights": "All rights reserved to ASNA AVL",
    "pricing.step1.title": "How many vehicles or assets do you have?",
    "pricing.step1.subtitle": "This helps us design the perfect ASNA AVL solution for your operation size and provide accurate pricing recommendations",
    "pricing.step2.title": "What solutions are you interested in?",
    "pricing.step2.subtitle": "Choose the modules that match your fleet management needs.",
    "pricing.step3.title": "What type of vehicles are in your fleet?",
    "pricing.step3.subtitle": "This helps us choose the hardware and software compatible with your vehicle types.",
    "pricing.step4.title": "Let us get to know you",
    "pricing.step4.subtitle": "Help us prepare the perfect demo and pricing quote tailored specifically to your fleet management needs and business goals",
    "pricing.next": "Continue",
    "pricing.back": "Back",
    "pricing.home": "Back to Home",
    "pricing.submit": "Submit Request",
    "legal.privacy": "Privacy Policy",
    "legal.terms": "Terms of Service",
    "legal.refund": "Refund & Exchange Policy",
    "form.name": "Full Name",
    "form.company": "Company Name",
    "form.email": "Work Email",
    "form.city": "City",
    "form.phone": "Phone Number",
    "form.source": "How did you hear about us?",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, initialLang }: { children: React.ReactNode, initialLang?: Language }) {
  const [language, setLanguageState] = useState<Language>(initialLang || "ar");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    
    // Handle URL change
    const segments = pathname.split("/");
    // segments[0] is empty, segments[1] is the locale
    segments[1] = lang;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations["ar"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
