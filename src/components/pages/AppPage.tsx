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
  Package
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
        title: "تطبيق ASNA AVL",
        subtitle: "إدارة أسطولك",
        description: "حل متكامل لإدارة المركبات والعمليات اللوجستية من هاتفك الذكي. تتبع، تحكم، وحلل أداء أسطولك في أي وقت ومن أي مكان.",
        cta: "حمل التطبيق مجاناً",
        badge: "تقييم 4.9",
      },
      stats: [
        { value: "500+", label: "شركة تثق بنا", icon: Users },
        { value: "10K+", label: "مركبة مُدارة", icon: Truck },
        { value: "99.9%", label: "وقت تشغيل", icon: Zap },
        { value: "24/7", label: "دعم فني", icon: Headphones },
      ],
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
          title: "حمل التطبيق",
          description: "حمل التطبيق من متجر التطبيقات على هاتفك",
          icon: Download,
        },
        {
          title: "سجل الدخول",
          description: "سجل دخولك باستخدام بيانات حسابك",
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
          content: "تطبيق رائع ساعدنا في توفير أكثر من 30% من تكاليف الوقود",
          rating: 5,
        },
        {
          name: "فاطمة الزهراني",
          role: "مدير عمليات",
          content: "أفضل استثمار قمنا به لتحسين كفاءة الأسطول",
          rating: 5,
        },
      ],
      cta: {
        title: "ابدأ الآن",
        subtitle: "حمل التطبيق واستمتع بتجربة إدارة أسطول متطورة",
        button: "حمل التطبيق مجاناً",
      },
      footer: {
        copyright: "© 2024 ASNA AVL. جميع الحقوق محفوظة",
      }
    },
    en: {
      hero: {
        title: "ASNA AVL App",
        subtitle: "Fleet Management",
        description: "Complete fleet and logistics management solution on your smartphone. Track, control, and analyze your fleet performance anytime, anywhere.",
        cta: "Download Free App",
        badge: "Rating 4.9",
      },
      stats: [
        { value: "500+", label: "Trusted Companies", icon: Users },
        { value: "10K+", label: "Managed Vehicles", icon: Truck },
        { value: "99.9%", label: "Uptime", icon: Zap },
        { value: "24/7", label: "Support", icon: Headphones },
      ],
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
          title: "Download App",
          description: "Download the app from your device's app store",
          icon: Download,
        },
        {
          title: "Sign In",
          description: "Sign in using your account credentials",
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
          content: "Great app that helped us save over 30% on fuel costs",
          rating: 5,
        },
        {
          name: "Fatima Al Zahrani",
          role: "Operations Manager",
          content: "Best investment we made to improve fleet efficiency",
          rating: 5,
        },
      ],
      cta: {
        title: "Get Started Now",
        subtitle: "Download the app and experience advanced fleet management",
        button: "Download Free App",
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

      {/* Hero Section - InstaPay Style */}
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
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{activeContent.hero.badge}</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1]">
                {activeContent.hero.title}
                <span className="block text-accent">{activeContent.hero.subtitle}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
                {activeContent.hero.description}
              </p>

              {/* Download Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-6 py-3 bg-white text-primary rounded-2xl font-bold hover:shadow-xl transition-all"
                >
                  <Apple className="w-6 h-6" />
                  <div className="text-start">
                    <div className="text-xs opacity-70">Download on the</div>
                    <div className="text-sm">App Store</div>
                  </div>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all"
                >
                  <Play className="w-6 h-6" />
                  <div className="text-start">
                    <div className="text-xs opacity-70">Get it on</div>
                    <div className="text-sm">Google Play</div>
                  </div>
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

            {/* Right Content - App Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-10 -left-10 z-20 bg-white/90 backdrop-blur-xl rounded-2xl p-3 shadow-xl hidden lg:block"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Truck className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Active Vehicles</div>
                      <div className="text-lg font-black">24</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-10 -right-10 z-20 bg-white/90 backdrop-blur-xl rounded-2xl p-3 shadow-xl hidden lg:block"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Fuel className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Fuel Saved</div>
                      <div className="text-lg font-black">-30%</div>
                    </div>
                  </div>
                </motion.div>

                {/* Phone Mockup */}
                <div className="relative w-[280px] md:w-[320px]">
                  <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full" />
                  <div className="relative bg-white rounded-[3rem] p-3 shadow-2xl">
                    <div className="relative aspect-[9/19] rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                      <img 
                        src="https://picsum.photos/seed/app-mockup/400/800" 
                        alt="App Screenshot" 
                        className="w-full h-full object-cover opacity-90"
                        referrerPolicy="no-referrer"
                      />
                      {/* App UI Elements */}
                      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/50 to-transparent">
                        <div className="flex items-center justify-between">
                          <div className="w-8 h-8 rounded-full bg-accent" />
                          <div className="text-white text-xs font-bold">Dashboard</div>
                          <Bell className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-white text-xs">Vehicle #1234</div>
                              <div className="text-white text-sm font-bold">Toyota Camry</div>
                            </div>
                            <MapPin className="w-5 h-5 text-accent" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-ping" />
          </div>
        </motion.div>
      </section>

      {/* Features Section - InstaPay Style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">
              {isAr ? "مميزات التطبيق" : "App Features"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {isAr 
                ? "كل ما تحتاجه لإدارة أسطولك في تطبيق واحد"
                : "Everything you need to manage your fleet in one app"}
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
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-10 h-10 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">
              {isAr ? "كيف يعمل التطبيق؟" : "How It Works?"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {isAr 
                ? "ثلاث خطوات بسيطة لبدء إدارة أسطولك"
                : "Three simple steps to start managing your fleet"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeContent.howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg border-2 border-accent/20">
                      <Icon className="w-10 h-10 text-accent" />
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30">
                        <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-accent/50" />
                      </div>
                    )}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-gray-500">{step.description}</p>
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

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">
              {isAr ? "ماذا يقول عملاؤنا" : "What Our Clients Say"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeContent.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - InstaPay Style */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
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
                className="flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <Download className="w-5 h-5" />
                {activeContent.cta.button}
              </motion.button>
              <Link href={`/${lang}/contact`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  {isAr ? "طلب عرض توضيحي" : "Request Demo"}
                </motion.button>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>{isAr ? "بياناتك آمنة" : "Your data is secure"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4" />
                <span>{isAr ? "تحديثات مستمرة" : "Continuous updates"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4" />
                <span>{isAr ? "دعم فني 24/7" : "24/7 Support"}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}