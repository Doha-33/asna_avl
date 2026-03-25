"use client";

import { BarChart3, Wrench, Fuel, ShieldCheck } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import Link from "next/link";

export const FeatureBento = () => {
  const { language } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-primary">
            {language === "ar" ? "كل ما تحتاجه في منصة ذكية واحدة لإدارة الأسطول" : "Everything you need in one smart fleet management platform"}
          </h2>
          <p className="text-lg text-primary/70">
            {language === "ar" 
              ? "تابع بيانات أسطولك لحظة بلحظة، وحسّن أداءه بسهولة، واستخدم التحليلات التي تساعدك على تحقيق أهدافك وتنمية عملك بثقة"
              : "Track your fleet data moment by moment, improve its performance easily, and use analytics that help you achieve your goals and grow your business with confidence"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Big Card */}
          <div className="md:col-span-8 bg-primary rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 shadow-xl">
            <div className="flex-1">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <BarChart3 className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {language === "ar" ? "امتلك رؤية أوضح للأداء اليومي" : "Have a clearer vision of daily performance"}
              </h3>
              <p className="text-white/70 mb-8">
                {language === "ar" 
                  ? "لا مزيد من التقارير المشتتة والأوراق اللانهائية. بدلاً من جداول البيانات صعبة التفسير، والتضارب بين الأداء لكل مركبة وسائق، ASNA AVL ينظمها لك."
                  : "No more scattered reports and endless papers. Instead of hard-to-interpret spreadsheets and conflicts between performance for each vehicle and driver, ASNA AVL organizes it for you."}
              </p>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-center gap-3">
                  <ShieldCheck className="text-accent w-5 h-5" />
                  <span>{language === "ar" ? "نظام تتبع المركبات" : "Vehicle Tracking System"}</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="text-accent w-5 h-5" />
                  <span>{language === "ar" ? "تقارير الأسطول" : "Fleet Reports"}</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <img src="https://picsum.photos/seed/chart/500/400" className="rounded-2xl border border-white/10 shadow-lg" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* Small Card */}
          <div className="md:col-span-4 bg-primary rounded-3xl p-10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <Wrench className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {language === "ar" ? "نظم جداول الصيانة أول بأول" : "Organize maintenance schedules regularly"}
              </h3>
              <p className="text-white/70 mb-6">
                {language === "ar" 
                  ? "فحص مركبة مستمر وصيانة يومية. قبل توقف المركبة وتأخر الشحنات تجنب الأعطال عبر حساسات IoT."
                  : "Continuous vehicle inspection and daily maintenance. Avoid breakdowns via IoT sensors before the vehicle stops and shipments are delayed."}
              </p>
            </div>
            <Link 
              href={`/${language}/solutions`}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center border border-white/20"
            >
              {language === "ar" ? "اعرف المزيد" : "Learn More"}
            </Link>
          </div>

          {/* Another Small Card */}
          <div className="md:col-span-4 bg-primary rounded-3xl p-10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <Fuel className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {language === "ar" ? "فسّر المصروفات المجهولة" : "Explain unknown expenses"}
              </h3>
              <p className="text-white/70 mb-6">
                {language === "ar" 
                  ? "مراقبة يومية لكل ريال. تخيل كم تخسر وأنت تجهل أسباب صرفية البنزين والدخول في تكاليف تشغيل متزايدة."
                  : "Daily monitoring of every riyal. Imagine how much you lose while ignoring the reasons for gasoline consumption and entering increasing operating costs."}
              </p>
            </div>
            <Link 
              href={`/${language}/solutions`}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center border border-white/20"
            >
              {language === "ar" ? "اعرف المزيد" : "Learn More"}
            </Link>
          </div>

          {/* Another Big Card */}
          <div className="md:col-span-8 bg-primary rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 shadow-xl">
             <div className="flex-1">
              <img src="https://picsum.photos/seed/compliance/500/400" className="rounded-2xl border border-white/10 shadow-lg" referrerPolicy="no-referrer" />
            </div>
            <div className="flex-1">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <ShieldCheck className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {language === "ar" ? "امتثال 100% للمراجعات الدورية لهيئة النقل" : "100% compliance with periodic reviews of the Transport Authority"}
              </h3>
              <p className="text-white/70 mb-8">
                {language === "ar" 
                  ? "كل بياناتك التشغيلية وشهادات التأمينات وملفات التراخيص مربوطة داخل ASNA AVL عبر التكامل المباشر مع الأنظمة المحلية."
                  : "All your operational data, insurance certificates, and license files are linked within ASNA AVL via direct integration with local systems."}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-xl text-center font-bold text-white">TGA</div>
                <div className="bg-white/10 p-4 rounded-xl text-center font-bold text-white">Tamm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};