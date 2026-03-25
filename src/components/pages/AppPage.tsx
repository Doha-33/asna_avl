"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Smartphone, 
  Apple, 
  Play, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  PlayCircle,
  Download
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import Link from "next/link";

export default function AppPage({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isAr = lang === "ar";

  const content = {
    ar: {
      hero: {
        title: "تطبيق ASNA AVL لإدارة الأسطول",
        subtitle: "تحكم كامل في أسطولك من راحة يدك. تتبع، راقب، وأدر عملياتك في أي وقت ومن أي مكان.",
        cta: "حمل التطبيق الآن",
      },
      partners: {
        title: "الشركات التي تثق بنا",
      },
      howTo: {
        title: "كيف تستخدم التطبيق؟",
        subtitle: "شاهد الفيديوهات التعليمية لتتعرف على كيفية الاستفادة القصوى من تطبيق ASNA AVL",
        tutorials: [
          { title: "كيفية تسجيل الدخول", duration: "1:30" },
          { title: "تتبع المركبات لحظياً", duration: "2:15" },
          { title: "إصدار تقارير الأداء", duration: "3:00" },
        ]
      },
      features: {
        title: "ما هو تطبيق ASNA AVL؟",
        description: "تطبيق متكامل يوفر لك رؤية شاملة لأسطولك، مع تنبيهات فورية وتقارير مفصلة تساعدك على اتخاذ قرارات ذكية.",
        items: [
          "تتبع الموقع الجغرافي لحظة بلحظة",
          "تنبيهات السرعة وتجاوز النطاق الجغرافي",
          "مراقبة استهلاك الوقود وسلوك السائق",
          "إدارة الصيانة الدورية والتنبيهات",
        ]
      },
      experience: {
        title: "تجربة مستخدم استثنائية",
        description: "صممنا التطبيق ليكون بسيطاً وقوياً في نفس الوقت. واجهة مستخدم بديهية تمنحك الوصول السريع لكل ما تحتاجه.",
        points: [
          "واجهة مستخدم عصرية وسهلة",
          "دعم كامل للغة العربية والإنجليزية",
          "تنبيهات ذكية مخصصة",
          "تقارير بصرية تفاعلية"
        ]
      },
      cta: {
        title: "ابدأ الآن",
        subtitle: "حمل التطبيق وسجل دخولك لتبدأ في تحسين كفاءة أسطولك اليوم.",
        steps: [
          "حمل التطبيق من المتجر",
          "سجل دخولك ببيانات حسابك",
          "ابدأ في تتبع أسطولك فوراً",
        ]
      }
    },
    en: {
      hero: {
        title: "ASNA AVL Fleet Management App",
        subtitle: "Full control of your fleet from the palm of your hand. Track, monitor, and manage your operations anytime, anywhere.",
        cta: "Download App Now",
      },
      partners: {
        title: "Companies That Trust Us",
      },
      howTo: {
        title: "How to Use the App?",
        subtitle: "Watch tutorial videos to learn how to get the most out of the ASNA AVL app",
        tutorials: [
          { title: "How to Login", duration: "1:30" },
          { title: "Real-time Vehicle Tracking", duration: "2:15" },
          { title: "Generating Performance Reports", duration: "3:00" },
        ]
      },
      features: {
        title: "What is ASNA AVL App?",
        description: "An integrated app that provides a comprehensive view of your fleet, with instant alerts and detailed reports to help you make smart decisions.",
        items: [
          "Real-time geographic location tracking",
          "Speed and geofence alerts",
          "Fuel consumption and driver behavior monitoring",
          "Maintenance management and alerts",
        ]
      },
      experience: {
        title: "Exceptional User Experience",
        description: "We designed the app to be simple yet powerful. An intuitive UI gives you quick access to everything you need.",
        points: [
          "Modern and easy-to-use UI",
          "Full Arabic and English support",
          "Customized smart alerts",
          "Interactive visual reports"
        ]
      },
      cta: {
        title: "Get Started Now",
        subtitle: "Download the app and log in to start improving your fleet efficiency today.",
        steps: [
          "Download the app from the store",
          "Log in with your account details",
          "Start tracking your fleet immediately",
        ]
      }
    }
  };

  const activeContent = isAr ? content.ar : content.en;

  return (
    <main className="min-h-screen bg-slate-50 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[100px]" 
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-start"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-indigo-200 text-sm font-bold mb-8 backdrop-blur-md"
              >
                <Smartphone size={16} />
                <span>{isAr ? "متاح الآن على iOS و Android" : "Now available on iOS & Android"}</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
                {activeContent.hero.title}
              </h1>
              <p className="text-lg md:text-2xl text-indigo-100/80 mb-12 max-w-xl leading-relaxed">
                {activeContent.hero.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-6">
                <button className="px-10 py-5 rounded-2xl bg-white text-indigo-900 font-black text-lg hover:bg-indigo-50 transition-all shadow-xl shadow-indigo-950/20 hover:scale-105 active:scale-95">
                  {activeContent.hero.cta}
                </button>
                <div className="flex gap-4">
                  <motion.button 
                    whileHover={{ y: -5 }}
                    className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all"
                  >
                    <Apple className="w-7 h-7" />
                  </motion.button>
                  <motion.button 
                    whileHover={{ y: -5 }}
                    className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all"
                  >
                    <Play className="w-7 h-7" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-[320px] md:max-w-[420px]">
                <div className="absolute -inset-10 bg-indigo-500/30 blur-[100px] rounded-full animate-pulse" />
                <img 
                  src="https://picsum.photos/seed/app-hero-v2/800/1600" 
                  alt="App Mockup" 
                  className="relative z-10 w-full h-auto rounded-[3.5rem] shadow-2xl border-[12px] border-white/10"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Stats Card */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -right-12 top-1/4 z-20 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/50 hidden md:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                      <Zap size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Live Tracking</div>
                      <div className="text-lg font-black text-slate-900">Active Now</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-slate-400 font-bold mb-12 uppercase tracking-[0.2em] text-xs">
            {activeContent.partners.title}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {[1, 2, 3, 4, 5].map((i) => (
              <img 
                key={i}
                src={`https://picsum.photos/seed/logo-v2-${i}/160/80`} 
                alt={`Partner ${i}`} 
                className="h-8 md:h-10 object-contain"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className={`relative ${isAr ? "lg:order-2" : ""}`}>
              <div className="absolute -inset-10 bg-indigo-500/5 blur-[80px] rounded-full" />
              <div className="relative p-8 bg-slate-50 rounded-[3rem] border border-slate-100">
                <img 
                  src="https://picsum.photos/seed/app-features-v2/1000/800" 
                  alt="App Features" 
                  className="w-full h-auto rounded-2xl shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="text-start">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                {activeContent.features.title}
              </h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                {activeContent.features.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {activeContent.features.items.map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: isAr ? -10 : 10 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-600/20">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="text-slate-700 font-bold leading-tight">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: isAr ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full" />
                <img 
                  src="https://picsum.photos/seed/app-exp-v2/800/600" 
                  alt="App Experience" 
                  className="relative z-10 rounded-[2.5rem] shadow-2xl border-4 border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isAr ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 text-start"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                {activeContent.experience.title}
              </h2>
              <p className="text-xl text-indigo-100/70 mb-12 leading-relaxed">
                {activeContent.experience.description}
              </p>
              
              <div className="space-y-6">
                {activeContent.experience.points.map((point, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-lg font-bold text-indigo-50">{point}</span>
                  </div>
                ))}
              </div>

              <button className="mt-12 inline-flex items-center gap-3 text-indigo-400 font-black text-lg hover:text-indigo-300 transition-all group">
                <span>{isAr ? "اكتشف المزيد عن واجهة المستخدم" : "Discover more about UI"}</span>
                <ArrowRight size={24} className={`${isAr ? "rotate-180" : ""} group-hover:translate-x-2 transition-transform`} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works / Tutorials */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
              {activeContent.howTo.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {activeContent.howTo.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {activeContent.howTo.tutorials.map((tutorial, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -15 }}
                className="bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 group"
              >
                <div className="relative aspect-video bg-slate-200">
                  <img 
                    src={`https://picsum.photos/seed/tutorial-v2-${idx}/800/500`} 
                    alt={tutorial.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-indigo-900/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center text-indigo-600 shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                      <PlayCircle size={48} fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 text-indigo-600 text-xs font-black px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                    {tutorial.duration}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{tutorial.title}</h3>
                  <button className="text-indigo-600 font-bold flex items-center gap-2 group/btn">
                    {isAr ? "تعلم المزيد" : "Learn More"}
                    <ArrowRight className={`w-5 h-5 transition-transform ${isAr ? "rotate-180 group-hover/btn:-translate-x-2" : "group-hover/btn:translate-x-2"}`} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started / Download Section */}
      <section className="py-32 bg-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-violet-900 to-indigo-950" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
              {activeContent.cta.title}
            </h2>
            <p className="text-xl md:text-2xl text-indigo-100/70 max-w-3xl mx-auto mb-16 leading-relaxed">
              {activeContent.cta.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="#" 
                className="w-full sm:w-auto flex items-center gap-4 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-xl hover:bg-indigo-50 transition-all shadow-xl shadow-white/10 group"
              >
                <Apple size={32} fill="currentColor" />
                <div className="text-start leading-tight">
                  <div className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Download on the</div>
                  <div className="text-xl">App Store</div>
                </div>
              </Link>
              
              <Link 
                href="#" 
                className="w-full sm:w-auto flex items-center gap-4 bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 border border-indigo-400/30 group"
              >
                <Play size={32} fill="currentColor" />
                <div className="text-start leading-tight">
                  <div className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Get it on</div>
                  <div className="text-xl">Google Play</div>
                </div>
              </Link>
            </div>
            
            <div className="mt-20 pt-20 border-t border-white/10 flex flex-wrap justify-center gap-12 text-indigo-200/50 font-bold uppercase tracking-widest text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} />
                <span>Secure & Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={20} />
                <span>Free to Download</span>
              </div>
              <div className="flex items-center gap-2">
                <PlayCircle size={20} />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
