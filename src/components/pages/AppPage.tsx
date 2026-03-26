"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
  Download,
  MapPin,
  Fuel,
  Gauge,
  Bell,
  BarChart3,
  Clock,
  Star,
  Users,
  Award,
  Lock,
  Cloud,
  Wifi,
  Camera,
  TrendingUp,
  DollarSign,
  Headphones,
  Settings,
  Truck,
  Package,
  User
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import Link from "next/link";
import { useRef, useState } from "react";

export default function AppPage({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isAr = lang === "ar";
  const heroRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const content = {
    ar: {
      hero: {
        title: "نظام ASNA AVL",
        subtitle: "إدارة أسطولك المتكاملة",
        description: "حل متكامل لإدارة المركبات والعمليات اللوجستية من أي جهاز. تتبع، تحكم، وحلل أداء أسطولك عبر الويب أو الجوال.",
        cta: "ابدأ الآن مجاناً",
        badge: "النظام الأكثر تطوراً",
      },
      stats: [
        { value: "500+", label: "شركة تثق بنا", icon: Users },
        { value: "10K+", label: "مركبة مُدارة", icon: Truck },
        { value: "99.9%", label: "وقت تشغيل", icon: Zap },
        { value: "24/7", label: "دعم فني", icon: Headphones },
      ],
      systemShowcase: {
        title: "لوحة تحكم ذكية",
        subtitle: "تحكم كامل من متصفحك",
        description: "واجهة مستخدم متطورة تعمل على أجهزة الكمبيوتر المحمول والمكتبي، توفر لك رؤية شاملة لكل تحركات أسطولك مع تقارير تحليلية دقيقة.",
        features: [
          "خرائط تفاعلية عالية الدقة",
          "تقارير تحليلية مفصلة",
          "إدارة السائقين والمهام",
          "تنبيهات الصيانة الدورية"
        ]
      },
      features: [
        {
          title: "تتبع لحظي",
          description: "تحديثات فورية لموقع المركبات بدقة عالية مع خرائط متعددة",
          icon: MapPin,
        },
        {
          title: "مراقبة الوقود",
          description: "تحليل استهلاك الوقود وكشف التسرب والسرقة",
          icon: Fuel,
        },
        {
          title: "تحليل الأداء",
          description: "تقارير ذكية عن سلوك السائق وكفاءة المركبات",
          icon: Gauge,
        },
        {
          title: "تنبيهات ذكية",
          description: "إشعارات فورية للسرعة، الصيانة، وتجاوز النطاق",
          icon: Bell,
        },
      ],
      security: {
        title: "أمان وحماية",
        description: "بياناتك محمية بأعلى معايير الأمان",
        items: ["تشفير 256-bit", "نسخ احتياطي سحابي", "صلاحيات متعددة المستويات"],
      },
      howItWorks: [
        {
          title: "سجل حسابك",
          description: "تواصل معنا لفتح حسابك في النظام",
          icon: User,
        },
        {
          title: "سجل الدخول",
          description: "سجل دخولك من أي متصفح أو عبر التطبيق",
          icon: Smartphone,
        },
        {
          title: "ابدأ التتبع",
          description: "تابع أسطولك وحلل الأداء فوراً",
          icon: MapPin,
        },
      ],
      testimonials: [
        {
          name: "أحمد السالم",
          role: "مدير أسطول",
          content: "نظام رائع ساعدنا في توفير أكثر من 30% من تكاليف الوقود وتحسين كفاءة السائقين.",
          rating: 5,
        },
        {
          name: "فاطمة الزهراني",
          role: "مدير عمليات",
          content: "أفضل استثمار قمنا به لتحسين كفاءة الأسطول. لوحة التحكم سهلة الاستخدام وشاملة.",
          rating: 5,
        },
      ],
      cta: {
        title: "ابدأ الآن",
        subtitle: "انضم إلى مئات الشركات التي تدير أساطيلها بذكاء مع ASNA AVL",
        button: "جرب النظام مجاناً",
      },
      footer: {
        copyright: "© 2024 ASNA AVL. جميع الحقوق محفوظة",
      }
    },
    en: {
      hero: {
        title: "ASNA AVL System",
        subtitle: "Integrated Fleet Management",
        description: "A complete vehicle and logistics management solution from any device. Track, control, and analyze your fleet performance via web or mobile.",
        cta: "Start Now for Free",
        badge: "Most Advanced System",
      },
      stats: [
        { value: "500+", label: "Trusted Companies", icon: Users },
        { value: "10K+", label: "Managed Vehicles", icon: Truck },
        { value: "99.9%", label: "Uptime", icon: Zap },
        { value: "24/7", label: "Support", icon: Headphones },
      ],
      systemShowcase: {
        title: "Smart Dashboard",
        subtitle: "Full Control from Your Browser",
        description: "Advanced user interface for laptops and desktops, providing a comprehensive view of all fleet movements with accurate analytical reports.",
        features: [
          "High-precision interactive maps",
          "Detailed analytical reports",
          "Driver and task management",
          "Periodic maintenance alerts"
        ]
      },
      features: [
        {
          title: "Real-time Tracking",
          description: "Instant vehicle location updates with high accuracy and multiple map options",
          icon: MapPin,
        },
        {
          title: "Fuel Monitoring",
          description: "Fuel consumption analysis with leak and theft detection",
          icon: Fuel,
        },
        {
          title: "Performance Analytics",
          description: "Smart reports on driver behavior and vehicle efficiency",
          icon: Gauge,
        },
        {
          title: "Smart Alerts",
          description: "Instant notifications for speed, maintenance, and geofence breaches",
          icon: Bell,
        },
      ],
      security: {
        title: "Security & Protection",
        description: "Your data is protected with highest security standards",
        items: ["256-bit Encryption", "Cloud Backup", "Multi-level Permissions"],
      },
      howItWorks: [
        {
          title: "Register Account",
          description: "Contact us to open your system account",
          icon: User,
        },
        {
          title: "Sign In",
          description: "Sign in from any browser or via the app",
          icon: Smartphone,
        },
        {
          title: "Start Tracking",
          description: "Track your fleet and analyze performance instantly",
          icon: MapPin,
        },
      ],
      testimonials: [
        {
          name: "Ahmed Al Salem",
          role: "Fleet Manager",
          content: "Great system that helped us save over 30% on fuel costs and improve driver efficiency.",
          rating: 5,
        },
        {
          name: "Fatima Al Zahrani",
          role: "Operations Manager",
          content: "Best investment we made to improve fleet efficiency. The dashboard is user-friendly and comprehensive.",
          rating: 5,
        },
      ],
      cta: {
        title: "Get Started Now",
        subtitle: "Join hundreds of companies managing their fleets smartly with ASNA AVL",
        button: "Try System for Free",
      },
      footer: {
        copyright: "© 2024 ASNA AVL. All rights reserved",
      }
    }
  };

  const activeContent = isAr ? content.ar : content.en;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - System Showcase */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-primary/95 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
              >
                <Award className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{activeContent.hero.badge}</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1]">
                {activeContent.hero.title}
                <span className="block text-accent">{activeContent.hero.subtitle}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
                {activeContent.hero.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-2xl font-bold hover:shadow-xl transition-all"
                >
                  <Zap className="w-6 h-6" />
                  <span>{activeContent.hero.cta}</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all"
                >
                  <PlayCircle className="w-6 h-6" />
                  <span>{isAr ? "مشاهدة فيديو" : "Watch Video"}</span>
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                {activeContent.stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center md:text-start">
                      <div className="text-2xl md:text-3xl font-black text-accent">{stat.value}</div>
                      <div className="text-sm text-white/60">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Content - Laptop Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-2xl">
                {/* Laptop Frame */}
                <div className="relative bg-gray-800 rounded-t-3xl p-4 shadow-2xl border-x-8 border-t-8 border-gray-700">
                  <div className="aspect-[16/10] bg-white rounded-lg overflow-hidden relative">
                    <img 
                      src="https://picsum.photos/seed/dashboard/1200/800" 
                      alt="System Dashboard" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* UI Overlay */}
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                      <div className="w-32 h-8 bg-white/20 backdrop-blur-md rounded-lg" />
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-accent" />
                        <div className="w-8 h-8 rounded-full bg-white/20" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="h-4 bg-gray-800 rounded-b-xl w-[110%] -ml-[5%] shadow-xl" />
                <div className="h-2 bg-gray-900 rounded-b-3xl w-[40%] mx-auto shadow-inner" />

                {/* Floating Mobile App */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-10 -right-10 w-32 md:w-48 bg-white rounded-3xl p-2 shadow-2xl border-4 border-gray-100 hidden md:block"
                >
                  <div className="aspect-[9/19] rounded-2xl overflow-hidden bg-gray-900">
                    <img 
                      src="https://picsum.photos/seed/mobile-app/400/800" 
                      alt="Mobile App" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* System Dashboard Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                <BarChart3 className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-bold uppercase tracking-wider">
                  {activeContent.systemShowcase.subtitle}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">
                {activeContent.systemShowcase.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {activeContent.systemShowcase.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeContent.systemShowcase.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-primary font-bold text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-10 bg-accent/5 rounded-full blur-3xl" />
                <img 
                  src="https://picsum.photos/seed/laptop-usage/800/600" 
                  alt="Laptop Usage" 
                  className="relative rounded-3xl shadow-2xl border-8 border-white"
                  referrerPolicy="no-referrer"
                />
                {/* Floating Stat Card */}
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-medium">Efficiency Increase</div>
                      <div className="text-2xl font-black text-primary">+45%</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">
              {isAr ? "مميزات النظام المتكاملة" : "Integrated System Features"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {isAr 
                ? "كل ما تحتاجه لإدارة أسطولك في منصة واحدة متطورة"
                : "Everything you need to manage your fleet in one advanced platform"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activeContent.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-bold uppercase tracking-wider">
                  {isAr ? "أمان تام" : "Security"}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">
                {activeContent.security.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {activeContent.security.description}
              </p>
              <div className="space-y-4">
                {activeContent.security.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" />
                <img 
                  src="https://picsum.photos/seed/security/400/500" 
                  alt="Security" 
                  className="relative rounded-2xl shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              {activeContent.cta.title}
            </h2>
            <p className="text-xl text-white/80 mb-10">
              {activeContent.cta.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-10 py-5 bg-accent text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <Zap className="w-5 h-5" />
                {activeContent.cta.button}
              </motion.button>
              <Link href={`/${lang}/contact`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  {isAr ? "تواصل معنا" : "Contact Us"}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}