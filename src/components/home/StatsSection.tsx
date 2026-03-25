"use client";

import { LayoutDashboard, Truck, Smartphone, ArrowLeft } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export const StatsSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 bg-white text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-6">
          {language === "ar" 
            ? <>انضم إلى +18,000 جهاز في السعودية عبر أكثر من <br /> 4,500 عميل يثقون بنا</>
            : <>Join +18,000 devices in Saudi Arabia with over <br /> 4,500 clients who trust us</>}
        </h2>
        <p className="text-lg text-primary/60 mb-16">
          {language === "ar" 
            ? "باستخدام نظام إدارة أسطول المركبات المخصص لقطاعات النقل المختلفة"
            : "Using a fleet management system dedicated to different transport sectors"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: language === "ar" ? "لأصحاب الفروع المتعددة" : "For Multi-branch Owners", 
              desc: language === "ar" ? "تبسيط إدارة الفروع بنظام تحكم مركزي" : "Simplify branch management with a central control system", 
              icon: <LayoutDashboard size={32} /> 
            },
            { 
              title: language === "ar" ? "لشركات تأجير السيارات" : "For Car Rental Companies", 
              desc: language === "ar" ? "من التتبع وحتى إدارة عقود التأجير" : "From tracking to rental contract management", 
              icon: <Truck size={32} /> 
            },
            { 
              title: language === "ar" ? "لقطاع توصيل 3PL" : "For 3PL Delivery Sector", 
              desc: language === "ar" ? "ثقة كاملة عن وقت التسليم المتوقع" : "Full confidence in expected delivery time", 
              icon: <Smartphone size={32} /> 
            },
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[32px] bg-primary/5 border border-primary/10 text-start group hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
              <div className="w-20 h-20 rounded-3xl bg-primary text-white flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-lg shadow-primary/20">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="opacity-70 mb-8 leading-relaxed">{item.desc}</p>
              <div className="flex items-center gap-2 font-bold text-accent group-hover:text-accent transition-colors">
                <ArrowLeft className="w-5 h-5 rtl-flip" />
                <span>{language === "ar" ? "اعرف المزيد" : "Learn More"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
