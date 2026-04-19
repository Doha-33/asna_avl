"use client";

import { useLanguage } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import {
  Truck,
  Fuel,
  Settings,
  BarChart3,
  ShieldCheck,
  Smartphone,
  Users,
  ArrowRight,
  Zap,
  Activity,
  Package,
  Key,
  CheckCircle2,
  TrendingUp,
  Award,
  Headphones,
  Database,
  MapPin,
  Gauge,
  Camera,
  Lock,
  Bell,
  Cloud,
  FileText,
} from "lucide-react";
import Image from "next/image";
import { CTASection } from "../home/CTASection";

// Enhanced Solution Card with better animations and hover effects
const SolutionCard = ({
  title,
  description,
  icon: Icon,
  isAr,
  categoryId,
  language,
  features,
  index,
}: {
  title: string;
  description: string;
  icon: any;
  isAr: boolean;
  categoryId?: string;
  language: string;
  features?: string[];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="group relative bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
  >
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="relative p-8">
      {/* Icon with animated background */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
        <div className="relative w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-accent/25">
          <Icon className="w-7 h-7 text-white" />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
        {description}
      </p>

      {/* Features preview */}
      {features && features.length > 0 && (
        <div className="mb-6 space-y-2">
          {features.slice(0, 3).map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-sm text-gray-500"
            >
              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      )}

      <Link
        href={
          categoryId
            ? `/${language}/products?category=${categoryId}`
            : `/${language}/products`
        }
        className="inline-flex items-center gap-2 text-accent font-semibold group/link hover:gap-3 transition-all"
      >
        {isAr ? "اعرف المزيد" : "Learn More"}
        <ArrowRight
          className={`w-4 h-4 transition-transform group-hover/link:translate-x-1 ${isAr ? "rotate-180" : ""}`}
        />
      </Link>
    </div>
  </motion.div>
);

// Stat Card Component
const StatCard = ({ value, label, icon: Icon, isAr }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm"
  >
    <div className="flex justify-center mb-4">
      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
        <Icon className="w-6 h-6 text-accent" />
      </div>
    </div>
    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
      {value}
    </div>
    <div className="text-gray-300 text-sm">{label}</div>
  </motion.div>
);

export default function SolutionsPage() {
  const { language } = useLanguage();
  const router = useRouter();
  const isAr = language === "ar";
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const content = {
    ar: {
      hero: {
        title: "حلول ذكية لإدارة الأساطيل",
        subtitle:
          "نقدم منظومة متكاملة من الحلول التقنية المتطورة لإدارة الأساطيل والعمليات اللوجستية، مصممة خصيصاً لتلبية احتياجات السوق السعودي والخليجي مع أعلى معايير الجودة والامتثال.",
        cta: "اطلب عرض تجريبي مجاني",
        stats: [
          { value: "+500", label: "عميل يثق بنا", icon: Users },
          { value: "+10K", label: "مركبة مُدارة", icon: Truck },
          { value: "24/7", label: "دعم فني", icon: Headphones },
          { value: "99.9%", label: "وقت تشغيل", icon: Activity },
        ],
      },
      solutions: [
        {
          title: "نظام تتبع المركبات المتقدم",
          description:
            "حل متكامل لتتبع المركبات في الوقت الفعلي مع تقارير متقدمة عن المسارات، السرعة، سلوك السائق، وتحليل الأداء. يدعم أكثر من 5000 مركبة في نفس الوقت.",
          icon: Truck,
          categoryId: "69b5e49b171d137285990bee",
          features: [
            "تتبع مباشر بدقة متر واحد",
            "تقارير ذكية عن سلوك السائق",
            "تنبيهات فورية للحوادث والسرعة",
            "تحليل استهلاك الوقود",
          ],
        },
        {
          title: "كاميرات المراقبة الذكية",
          description:
            "حلول مراقبة متطورة متوافقة مع معايير أرامكو والهيئة العامة للنقل، مع تقنيات الذكاء الاصطناعي لتحليل الفيديو والكشف عن المخالفات.",
          icon: Camera,
          categoryId: "69b5e4cf171d137285990bf0",
          features: [
            "توافق كامل مع معايير أرامكو",
            "كشف تلقائي للمخالفات",
            "تسجيل عالي الدقة 4K",
            "تحليل سلوك السائق بالذكاء الاصطناعي",
          ],
        },
        {
          title: "نظام إدارة الوقود الذكي",
          description:
            "تحكم كامل في استهلاك الوقود مع كشف فوري للتسريبات والسرقات، وتقارير تحليلية لتحسين الكفاءة وتقليل التكاليف بنسبة تصل إلى 30%.",
          icon: Fuel,
          categoryId: "69b5e4f5171d137285990bf2",
          features: [
            "مراقبة استهلاك الوقود لحظياً",
            "كشف تسرب الوقود والسرقة",
            "تقارير تحليل الكفاءة",
            "تكامل مع أنظمة التزود بالوقود",
          ],
        },
        {
          title: "الصيانة الوقائية الذكية",
          description:
            "نظام متطور لإدارة الصيانة يقلل وقت التوقف عن العمل بنسبة 40% من خلال جدولة الصيانة الوقائية وتتبع قطع الغيار وإشعارات الصيانة التلقائية.",
          icon: Settings,
          features: [
            "جدولة الصيانة الوقائية",
            "تتبع قطع الغيار والمخزون",
            "تنبيهات الصيانة التلقائية",
            "تحليل أعطال المركبات",
          ],
        },
        {
          title: "نظام النقل - هيئة الغذاء والدواء",
          description:
            "حل متخصص ومتوافق مع متطلبات هيئة الغذاء والدواء لنقل المواد الغذائية والأدوية، مع مراقبة درجة الحرارة والرطوبة وتتبع الشحنات لحظة بلحظة.",
          icon: Package,
          features: [
            "مراقبة درجة الحرارة والرطوبة",
            "توافق كامل مع معايير هيئة الغذاء والدواء",
            "تتبع الشحنات لحظياً",
            "تقارير الامتثال التلقائية",
          ],
        },
        {
          title: "نقل الشاحنات - نقل عادي",
          description:
            "حل متكامل لإدارة نقل الشاحنات العادية مع تتبع دقيق للمسارات وتحليل أداء السائقين وتحسين كفاءة النقل.",
          icon: Truck,
          features: [
            "تتبع الشاحنات لحظياً",
            "إدارة الأحمال والحمولات",
            "تحسين المسارات للنقل العادي",
            "تقارير أداء الأسطول",
          ],
        },
        {
          title: "نقل الشاحنات - ساطحة",
          description:
            "حل متخصص لنقل الشاحنات على سطحات (ساطحة) مع تتبع دقيق للمسافات الطويلة ومراقبة سلامة الحمولة وتوثيق عمليات النقل.",
          icon: Truck,
          features: [
            "تتبع المسافات الطويلة بدقة",
            "مراقبة سلامة الحمولة",
            "توثيق عمليات النقل",
            "تحليل كفاءة النقل بالسطحة",
          ],
        },
        {
          title: "نظام التأجير الخفي",
          description:
            "نظام متطور لإدارة عقود التأجير الخفي وتتبع المركبات المؤجرة مع ربط مباشر بمنصة تم (TAM) وتقارير أداء متقدمة.",
          icon: Key,
          features: [
            "إدارة العقود الخفية",
            "تتبع المركبات المؤجرة",
            "ربط مع منصة تم (TAM)",
            "تقارير أداء مالية متقدمة",
          ],
        },
      ],
      systems: {
        title: "منصة ASNA AVL الذكية",
        subtitle:
          "منصة متكاملة تجمع بين أحدث التقنيات والمرونة العالية للتكيف مع احتياجات عملك",
        items: [
          {
            title: "تكامل متعدد الأنظمة",
            desc: "واجهات برمجة تطبيقات (API) متطورة للربط مع أنظمة ERP، HR، والأنظمة المالية المختلفة.",
            icon: Database,
          },
          {
            title: "تطبيقات الجوال المتطورة",
            desc: "تطبيقات ذكية للسائقين والمديرين تدعم الأجهزة المختلفة وتعمل بدون اتصال إنترنت.",
            icon: Smartphone,
          },
          {
            title: "إدارة الصلاحيات المتقدمة",
            desc: "نظام متعدد المستويات لإدارة الصلاحيات مع تتبع كامل لجميع العمليات والتعديلات.",
            icon: Lock,
          },
          {
            title: "خرائط عالية الدقة",
            desc: "دعم الخرائط المحلية والعالمية مع تحديثات حركة المرور الفورية وتوجيه المسارات الذكي.",
            icon: MapPin,
          },
          {
            title: "لوحات تحكم مخصصة",
            desc: "لوحات تحكم قابلة للتخصيص تعرض المؤشرات الحيوية والتقارير الأكثر أهمية لعملك.",
            icon: BarChart3,
          },
          {
            title: "تنبيهات وإشعارات ذكية",
            desc: "نظام تنبيهات متطور عبر البريد الإلكتروني والرسائل القصيرة والإشعارات داخل التطبيق.",
            icon: Bell,
          },
          {
            title: "تقارير وتحليلات متقدمة",
            desc: "تقارير تفاعلية قابلة للتصدير بصيغ متعددة مع تحليلات تنبؤية وتوصيات ذكية.",
            icon: FileText,
          },
          {
            title: "نسخ احتياطي واستعادة بيانات",
            desc: "نظام نسخ احتياطي تلقائي على السحابة مع إمكانية استعادة البيانات بسهولة وأمان.",
            icon: Cloud,
          },
        ],
      },
      benefits: [
        {
          title: "توفير يصل إلى 30%",
          desc: "في تكاليف الوقود والصيانة من خلال التحليلات الذكية",
          icon: TrendingUp,
        },
        {
          title: "زيادة الإنتاجية",
          desc: "بنسبة 40% من خلال تحسين المسارات وإدارة الوقت",
          icon: Gauge,
        },
        {
          title: "امتثال كامل",
          desc: "للأنظمة المحلية والدولية مع تقارير فورية",
          icon: Award,
        },
        {
          title: "دعم فني على مدار الساعة",
          desc: "فريق متخصص يقدم الدعم الفوري باللغتين العربية والإنجليزية",
          icon: Headphones,
        },
      ],
    },
    en: {
      hero: {
        title: "Smart Fleet Management Solutions",
        subtitle:
          "We offer a comprehensive suite of advanced technical solutions for fleet management and logistics operations, specifically designed to meet the needs of the Saudi and Gulf markets with the highest quality and compliance standards.",
        cta: "Request Free Demo",
        stats: [
          { value: "+500", label: "Clients Trust Us", icon: Users },
          { value: "+10K", label: "Vehicles Managed", icon: Truck },
          { value: "24/7", label: "Technical Support", icon: Headphones },
          { value: "99.9%", label: "Uptime", icon: Activity },
        ],
      },
      solutions: [
        {
          title: "Advanced Vehicle Tracking",
          description:
            "Complete real-time vehicle tracking solution with advanced reporting on routes, speed, driver behavior, and performance analytics. Supports over 5,000 vehicles simultaneously.",
          icon: Truck,
          categoryId: "69b5e49b171d137285990bee",
          features: [
            "Real-time tracking with 1-meter accuracy",
            "Smart driver behavior reports",
            "Instant accident and speed alerts",
            "Fuel consumption analysis",
          ],
        },
        {
          title: "Smart Surveillance Cameras",
          description:
            "Advanced monitoring solutions compliant with Aramco and Transport Authority standards, with AI-powered video analysis and violation detection.",
          icon: Camera,
          categoryId: "69b5e4cf171d137285990bf0",
          features: [
            "Full Aramco standards compliance",
            "Automated violation detection",
            "4K high-definition recording",
            "AI-powered driver behavior analysis",
          ],
        },
        {
          title: "Intelligent Fuel Management",
          description:
            "Complete fuel consumption control with instant leak and theft detection, analytical reports to improve efficiency and reduce costs by up to 30%.",
          icon: Fuel,
          categoryId: "69b5e4f5171d137285990bf2",
          features: [
            "Real-time fuel monitoring",
            "Leak and theft detection",
            "Efficiency analysis reports",
            "Fuel station integration",
          ],
        },
        {
          title: "Smart Preventive Maintenance",
          description:
            "Advanced maintenance management system reducing downtime by 40% through preventive scheduling, spare parts tracking, and automatic maintenance alerts.",
          icon: Settings,
          features: [
            "Preventive maintenance scheduling",
            "Spare parts and inventory tracking",
            "Automatic maintenance alerts",
            "Vehicle failure analysis",
          ],
        },
        {
          title: "Transport System - SFDA",
          description:
            "Specialized solution compliant with Saudi Food and Drug Authority requirements for transporting food and medicine, with temperature and humidity monitoring and real-time shipment tracking.",
          icon: Package,
          features: [
            "Temperature and humidity monitoring",
            "Full SFDA standards compliance",
            "Real-time shipment tracking",
            "Automated compliance reports",
          ],
        },
        {
          title: "Truck Transport - Standard",
          description:
            "Integrated solution for standard truck transport management with accurate route tracking, driver performance analysis, and transport efficiency optimization.",
          icon: Truck,
          features: [
            "Real-time truck tracking",
            "Load and cargo management",
            "Route optimization for standard transport",
            "Fleet performance reports",
          ],
        },
        {
          title: "Truck Transport - Flatbed",
          description:
            "Specialized solution for flatbed truck transport with accurate long-distance tracking, cargo safety monitoring, and transport operation documentation.",
          icon: Truck,
          features: [
            "Long-distance accurate tracking",
            "Cargo safety monitoring",
            "Transport operation documentation",
            "Flatbed transport efficiency analysis",
          ],
        },
        {
          title: "Hidden Leasing System",
          description:
            "Advanced system for managing hidden leasing contracts and rented vehicle tracking with direct TAM platform integration and advanced performance reports.",
          icon: Key,
          features: [
            "Hidden contract management",
            "Rented vehicle tracking",
            "TAM platform integration",
            "Advanced financial performance reports",
          ],
        },
      ],
      systems: {
        title: "ASNA AVL Smart Platform",
        subtitle:
          "An integrated platform combining cutting-edge technology with high flexibility to adapt to your business needs",
        items: [
          {
            title: "Multi-System Integration",
            desc: "Advanced API interfaces for integration with ERP, HR, and various financial systems.",
            icon: Database,
          },
          {
            title: "Advanced Mobile Apps",
            desc: "Smart applications for drivers and managers supporting multiple devices with offline functionality.",
            icon: Smartphone,
          },
          {
            title: "Advanced Permission Management",
            desc: "Multi-level permission management system with complete tracking of all operations and modifications.",
            icon: Lock,
          },
          {
            title: "High-Precision Maps",
            desc: "Support for local and global maps with real-time traffic updates and intelligent route guidance.",
            icon: MapPin,
          },
          {
            title: "Customizable Dashboards",
            desc: "Customizable dashboards displaying the most important KPIs and reports for your business.",
            icon: BarChart3,
          },
          {
            title: "Smart Alerts & Notifications",
            desc: "Advanced alert system via email, SMS, and in-app notifications.",
            icon: Bell,
          },
          {
            title: "Advanced Reports & Analytics",
            desc: "Interactive exportable reports with predictive analytics and intelligent recommendations.",
            icon: FileText,
          },
          {
            title: "Data Backup & Recovery",
            desc: "Automatic cloud backup system with easy and secure data recovery capabilities.",
            icon: Cloud,
          },
        ],
      },
      benefits: [
        {
          title: "Up to 30% Savings",
          desc: "On fuel and maintenance costs through smart analytics",
          icon: TrendingUp,
        },
        {
          title: "40% Productivity Increase",
          desc: "Through route optimization and time management",
          icon: Gauge,
        },
        {
          title: "Full Compliance",
          desc: "With local and international regulations with instant reporting",
          icon: Award,
        },
        {
          title: "24/7 Technical Support",
          desc: "Dedicated team providing immediate support in both Arabic and English",
          icon: Headphones,
        },
      ],
    },
  };

  const activeContent = isAr ? content.ar : content.en;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Parallax Effect */}
      <section
        ref={heroRef}
        className="relative pt-32 min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/95"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 -right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="max-w-7xl mx-auto px-4 relative z-10 w-full"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
            >
              {activeContent.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              {activeContent.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => router.push(`/${language}/contact`)}
                className="px-8 py-4 bg-accent text-white rounded-2xl font-bold text-lg shadow-xl shadow-accent/30 hover:shadow-accent/50 hover:scale-105 transition-all duration-300"
              >
                {activeContent.hero.cta}
              </button>
              <button
                onClick={() => router.push(`/${language}/products`)}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                {isAr ? "استكشف الحلول" : "Explore Solutions"}
              </button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {activeContent.hero.stats.map((stat, index) => (
                <StatCard key={index} {...stat} isAr={isAr} />
              ))}
            </motion.div>
          </div>
        </motion.div>

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

      {/* Solutions Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {isAr ? "حلولنا المتكاملة" : "Our Integrated Solutions"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isAr
                ? "نقدم مجموعة متكاملة من الحلول التقنية التي تلبي جميع احتياجات إدارة الأساطيل"
                : "We offer a comprehensive suite of technical solutions that meet all fleet management needs"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activeContent.solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                {...solution}
                isAr={isAr}
                language={language}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Modern Redesign */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-primary to-gray-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating particles */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -180, -360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          />

          {/* Animated lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="gradient-line"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,200 Q300,150 600,200 T1200,200"
              stroke="url(#gradient-line)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 3, delay: 0.5 }}
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Header with Modern Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6"
            >
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-accent uppercase tracking-wider">
                {isAr ? "قيمتنا المضافة" : "Our Value Proposition"}
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {isAr ? "فوائد حلول" : "Benefits of "}
              <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
                {isAr ? "ASNA AVL" : "ASNA AVL Solutions"}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {isAr
                ? "نقدم قيمة حقيقية لعملائنا من خلال تحسين الكفاءة التشغيلية وتقليل التكاليف وزيادة العائد على الاستثمار"
                : "We deliver real value to our customers by improving operational efficiency, reducing costs, and increasing ROI"}
            </p>
          </motion.div>

          {/* Benefits Grid with Modern Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activeContent.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="group relative"
              >
                {/* Glass morphism card */}
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-500 overflow-hidden">
                  {/* Animated gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:via-accent/5 group-hover:to-transparent transition-all duration-700" />

                  {/* Icon container with modern design */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative w-20 h-20 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-accent/30">
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Decorative ring */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 border-2 border-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {benefit.desc}
                  </p>

                  {/* Progress indicator or metric */}
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.random() * 40 + 60}%` }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                        className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full"
                      />
                    </div>
                    <span className="text-accent font-semibold">
                      {index === 0 && (isAr ? "توفير يصل إلى" : "Up to")}
                      {index === 1 &&
                        (isAr ? "زيادة تصل إلى" : "Increase up to")}
                      {index === 2 && (isAr ? "ضمان بنسبة" : "Guaranteed")}
                      {index === 3 && (isAr ? "دعم على مدار" : "Support")}
                    </span>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/20 to-transparent transform rotate-45 translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Section with Enhanced Design */}
      <section className="py-24 bg-accent/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {activeContent.systems.title}
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                {activeContent.systems.subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {activeContent.systems.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/manasa.jpg"
                  alt="ASNA AVL Platform Dashboard"
                  width={800}
                  height={1000}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </main>
  );
}
