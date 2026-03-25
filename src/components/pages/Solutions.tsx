"use client";

import { useLanguage } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Truck, 
  Fuel, 
  Settings, 
  BarChart3, 
  ShieldCheck, 
  Smartphone, 
  ClipboardCheck, 
  Users, 
  ArrowRight,
  Globe,
  Zap,
  Activity,
  Package,
  Key
} from "lucide-react";
import Image from "next/image";

const SolutionCard = ({ 
  title, 
  description, 
  icon: Icon, 
  isAr,
  categoryId,
  language
}: { 
  title: string; 
  description: string; 
  icon: any; 
  isAr: boolean;
  categoryId?: string;
  language: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
  >
    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
    <Link 
      href={categoryId ? `/${language}/products?category=${categoryId}` : `/${language}/products`}
      className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all"
    >
      {isAr ? "اعرف المزيد" : "Learn More"}
      <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
    </Link>
  </motion.div>
);

export default function SolutionsPage() {
  const { language } = useLanguage();
  const router = useRouter();
  const isAr = language === "ar";

  const content = {
    ar: {
      hero: {
        title: "الحلول والأنظمة المتكاملة",
        subtitle: "نقدم مجموعة شاملة من الحلول التقنية لإدارة الأساطيل والعمليات اللوجستية، مصممة خصيصاً لتلبية احتياجات السوق السعودي والخليجي.",
        cta: "ابدأ الآن"
      },
      solutions: [
        {
          title: "نظام تتبع المركبات",
          description: "تتبع لحظي لموقع وحالة كل مركبة في أسطولك مع تقارير مفصلة عن المسارات والسرعة وسلوك السائق.",
          icon: Truck,
          categoryId: "69b5e49b171d137285990bee"
        },
        {
          title: "كاميرات ارمكو",
          description: "حلول المراقبة المتقدمة المتوافقة مع معايير أرامكو لضمان أعلى مستويات الأمان والالتزام.",
          icon: ShieldCheck,
          categoryId: "69b5e4cf171d137285990bf0"
        },
        {
          title: "فلاش كام",
          description: "أنظمة كاميرات ذكية لتسجيل الرحلات ومراقبة الطريق لتعزيز سلامة السائقين وحماية الأصول.",
          icon: Zap,
          categoryId: "69b5e4f5171d137285990bf2"
        },
        {
          title: "إدارة الوقود",
          description: "راقب استهلاك الوقود بدقة، واكتشف حالات السرقة أو التسريب، وحسن كفاءة استهلاك الوقود عبر أسطولك.",
          icon: Fuel
        },
        {
          title: "إدارة الصيانة",
          description: "جدولة الصيانة الوقائية، وتتبع قطع الغيار، وتقليل وقت التوقف المفاجئ للمركبات.",
          icon: Settings
        },
        {
          title: "لوجستيات الطرف الثالث (3PL)",
          description: "حلول متكاملة لشركات التوصيل والخدمات اللوجستية لإدارة الشحنات والمناديب بكفاءة عالية.",
          icon: Package
        },
        {
          title: "إدارة تأجير السيارات",
          description: "نظام متكامل لإدارة عقود التأجير، وتتبع السيارات، والربط مع منصة تم (TAM).",
          icon: Key
        },
        {
          title: "منصة وصل (WASL)",
          description: "ربط مباشر ومعتمد مع منصة وصل للهيئة العامة للنقل لضمان الامتثال للأنظمة والقوانين.",
          icon: ShieldCheck
        }
      ],
      systems: {
        title: "أنظمة ASNA AVL الذكية",
        subtitle: "تتميز أنظمتنا بالمرونة والقدرة على التكامل مع مختلف بيئات العمل",
        items: [
          {
            title: "تكامل ERP",
            desc: "القدرة على الربط مع أنظمة إدارة الموارد البشرية والمالية المختلفة.",
            icon: Zap
          },
          {
            title: "تطبيق الجوال",
            desc: "تطبيقات مخصصة للسائقين والمديرين لمتابعة العمليات من أي مكان.",
            icon: Smartphone
          },
          {
            title: "إدارة المستخدمين",
            desc: "نظام متطور لإدارة الصلاحيات والأدوار لمختلف مستويات الإدارة.",
            icon: Users
          },
          {
            title: "تغطية عالمية",
            desc: "دعم كامل للخرائط العالمية والمحلية مع دقة عالية في تحديد المواقع.",
            icon: Globe
          }
        ]
      }
    },
    en: {
      hero: {
        title: "Integrated Solutions and Systems",
        subtitle: "We offer a comprehensive suite of technical solutions for fleet management and logistics operations, specifically designed to meet the needs of the Saudi and Gulf markets.",
        cta: "Start Now"
      },
      solutions: [
        {
          title: "Fleet Tracking System",
          description: "Real-time tracking of the location and status of every vehicle in your fleet with detailed reports on routes, speed, and driver behavior.",
          icon: Truck,
          categoryId: "69b5e49b171d137285990bee"
        },
        {
          title: "Aramco Cameras",
          description: "Advanced monitoring solutions compliant with Aramco standards to ensure the highest levels of security and commitment.",
          icon: ShieldCheck,
          categoryId: "69b5e4cf171d137285990bf0"
        },
        {
          title: "Flash Cam",
          description: "Smart camera systems for trip recording and road monitoring to enhance driver safety and protect assets.",
          icon: Zap,
          categoryId: "69b5e4f5171d137285990bf2"
        },
        {
          title: "Fuel Management",
          description: "Monitor fuel consumption accurately, detect theft or leaks, and improve fuel efficiency across your fleet.",
          icon: Fuel
        },
        {
          title: "Maintenance Management",
          description: "Schedule preventive maintenance, track spare parts, and reduce sudden vehicle downtime.",
          icon: Settings
        },
        {
          title: "Third-Party Logistics (3PL)",
          description: "Integrated solutions for delivery and logistics companies to manage shipments and couriers with high efficiency.",
          icon: Package
        },
        {
          title: "Car Rental Management",
          description: "An integrated system for managing rental contracts, tracking cars, and linking with the TAM platform.",
          icon: Key
        },
        {
          title: "WASL Platform Integration",
          description: "Direct and certified integration with the Transport General Authority's WASL platform to ensure compliance with regulations.",
          icon: ShieldCheck
        }
      ],
      systems: {
        title: "ASNA AVL Smart Systems",
        subtitle: "Our systems are characterized by flexibility and the ability to integrate with various work environments",
        items: [
          {
            title: "ERP Integration",
            desc: "Ability to link with various human resources and financial management systems.",
            icon: Zap
          },
          {
            title: "Mobile App",
            desc: "Dedicated apps for drivers and managers to follow operations from anywhere.",
            icon: Smartphone
          },
          {
            title: "User Management",
            desc: "An advanced system for managing permissions and roles for different management levels.",
            icon: Users
          },
          {
            title: "Global Coverage",
            desc: "Full support for global and local maps with high accuracy in positioning.",
            icon: Globe
          }
        ]
      }
    }
  };

  const activeContent = isAr ? content.ar : content.en;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-secondary">
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
              <Activity className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">
                {isAr ? "حلولنا المتكاملة" : "Our Integrated Solutions"}
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight"
            >
              {activeContent.hero.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-10 leading-relaxed"
            >
              {activeContent.hero.subtitle}
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => router.push(`/${language}/pricing`)}
              className="px-8 py-4 bg-accent text-white rounded-2xl font-bold text-lg shadow-xl shadow-accent/20 hover:bg-accent/90 transition-all hover:scale-105"
            >
              {activeContent.hero.cta}
            </motion.button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activeContent.solutions.map((solution, index) => (
              <SolutionCard 
                key={index}
                {...solution}
                isAr={isAr}
                language={language}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Systems Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                {activeContent.systems.title}
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                {activeContent.systems.subtitle}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {activeContent.systems.items.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 text-accent">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/systems/800/1000" 
                  alt="Systems" 
                  width={800} 
                  height={1000}
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isAr ? "لماذا تختار حلول ASNA AVL؟" : "Why Choose ASNA AVL Solutions?"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isAr 
                ? "نحن نجمع بين الخبرة المحلية والتقنيات العالمية لتقديم أفضل تجربة لإدارة الأساطيل."
                : "We combine local expertise with global technologies to provide the best fleet management experience."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: isAr ? "دعم فني محلي" : "Local Technical Support",
                desc: isAr ? "فريق دعم متخصص متواجد دائماً لمساعدتك باللغتين العربية والإنجليزية." : "A dedicated support team always available to help you in both Arabic and English.",
                icon: Users
              },
              {
                title: isAr ? "امتثال كامل" : "Full Compliance",
                desc: isAr ? "أنظمتنا متوافقة تماماً مع متطلبات الهيئة العامة للنقل ومنصة وصل." : "Our systems are fully compliant with the requirements of the Transport General Authority and the WASL platform.",
                icon: ShieldCheck
              },
              {
                title: isAr ? "تقنيات متطورة" : "Advanced Technologies",
                desc: isAr ? "نستخدم أحدث تقنيات الـ IoT والذكاء الاصطناعي لتحليل البيانات." : "We use the latest IoT and AI technologies to analyze data.",
                icon: Zap
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            {isAr ? "جاهز لتحويل إدارة أسطولك؟" : "Ready to Transform Your Fleet Management?"}
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {isAr 
              ? "انضم إلى آلاف الشركات التي تعتمد على ASNA AVL لتحسين كفاءتها التشغيلية." 
              : "Join thousands of companies that rely on ASNA AVL to improve their operational efficiency."}
          </p>
          <button 
            onClick={() => router.push(`/${language}/pricing`)}
            className="px-10 py-4 bg-white text-secondary rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105"
          >
            {isAr ? "اطلب عرض سعر الآن" : "Request a Quote Now"}
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
