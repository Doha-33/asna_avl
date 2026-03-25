"use client";

import { 
  BarChart3, 
  MapPin, 
  Fuel, 
  MessageSquare, 
  Trophy, 
  Truck,
  ShieldCheck,
  Users,
  PieChart,
  AlertCircle
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { useDemoModal } from "@/components/DemoModalContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { ThreePLSolutionsGrid } from "@/components/sections/three-pl/ThreePLSolutionsGrid";
import { ThreePLCapabilitiesGrid } from "@/components/sections/three-pl/ThreePLCapabilitiesGrid";
import { ThreePLStepsGrid } from "@/components/sections/three-pl/ThreePLStepsGrid";

export default function ThreePLDeliveryPage() {
  const { language } = useLanguage();
  const { openDemoModal } = useDemoModal();
  const isAr = language === "ar";

  const content = {
    ar: {
      hero: {
        title: "سلّم أسرع، اعمل بذكاء، كافئ بعدل",
        subtitle: "تحكم رقمي شامل لمشغلي توصيل الأغذية والبقالة - رؤية للأسطول في الوقت الفعلي، وإدارة آلية للسائقين، وامتثال متكامل - كل ذلك في مكان واحد.",
        ctaPrimary: "جرب النظام الآن",
        ctaSecondary: "اعرف المزيد"
      },
      intro: {
        label: "دعم توصيل الأطراف الثالثة اللوجستية",
        title: "حل متكامل للوجستيات الطرف الثالث في قطاع التوصيل",
        desc: "تم تصميم حل لوجستيات الطرف الثالث خصيصًا لقطاع توصيل الأغذية والبقالة. سواء كنت تدير أسطولك الخاص أو شبكة من السائقين، ستحصل على إدارة تشغيلية سلسة، وتتبع مباشر للأداء، وضمان الامتثال، وأتمتة مالية - لتجعل أعمالك اللوجستية أكثر موثوقية، وقابلة للتوسع، وملائمة للسائقين."
      },
      solutions: [
        {
          image: "https://picsum.photos/seed/fuel-3pl/600/400",
          title: "مراقبة الوقود والصيانة",
          desc: "تنبيهات آلية لإعادة التزود بالوقود والفحوصات الوقائية - لتبقى أصول التوصيل جاهزة في كل الأوقات",
          icon: Fuel
        },
        {
          image: "https://picsum.photos/seed/driver-3pl/600/400",
          title: "إدارة أداء السائق",
          desc: "تتبع آلي لمؤشرات التوصيل والتقييمات، وحالة التسليم في الوقت المحدد، وسلوكيات السلامة",
          icon: Trophy
        },
        {
          image: "https://picsum.photos/seed/map-3pl/600/400",
          title: "نظام تتبع المركبات",
          desc: "خرائط لحظية وتحسين المسار للمركبات وسائقي التوصيل - تقليل التأخير وتفادي فوات عمليات التسليم",
          icon: MapPin
        },
        {
          image: "https://picsum.photos/seed/tamm-3pl/600/400",
          title: "تكامل مع منصة \"تم\"",
          desc: "تنبيهات فورية بالمخالفات من منصة تم، اطلاع على الغرامات، وأتمتة التواصل، وربط المخالفات مباشرة بسجلات السائقين وكشوفات الرواتب",
          icon: ShieldCheck
        },
        {
          image: "https://picsum.photos/seed/chat-3pl/600/400",
          title: "المراسلة داخل التطبيق",
          desc: "تواصل ذكي مع السائقين والمشرفين وفرق الدعم عبر قنوات متعددة، لإرسال التعليمات والتحديثات أو إشعارات المخالفات التلقائية",
          icon: MessageSquare
        },
        {
          image: "https://picsum.photos/seed/reports-3pl/600/400",
          title: "إعداد التقارير والتحليلات",
          desc: "لوحات تقارير متقدمة توفر تحليلات فورية، ومؤشرات أداء، وتنبؤًا للامتثال - لتمكينك من اتخاذ قرارات مبنية على البيانات",
          icon: BarChart3
        }
      ],
      capabilities: {
        title: "إمكانيات الحل الرئيسية",
        subtitle: "ميزات متقدمة صُممت خصيصًا لعمليات لوجستيات الطرف الثالث (3PL) في التوصيل",
        items: [
          {
            title: "إدارة توصيل محسنة",
            desc: "تعيين وتتبع الطلبات مركزيًا لتقليل أوقات الانتظار وتحسين المسارات بشكل فوري. يبقي السياج الجغرافي والتحديثات اللحظية المشرفين والعملاء على اطلاع في كل مرحلة",
            icon: Truck
          },
          {
            title: "خصومات آلية للمخالفات",
            desc: "يوفر التكامل المباشر مع \"تم\" تفاصيل المخالفات في الوقت الفعلي. تُحسب الخصومات تلقائيًا وتُضاف مباشرة إلى تعويضات السائقين. شفافية كاملة مع سجلات تفصيلية لكل المخالفات",
            icon: AlertCircle
          },
          {
            title: "نظام أداء ومكافأة السائق",
            desc: "تصنف لوحات المعلومات في الوقت الفعلي السائقين حسب أوقات التسليم والتقييمات والامتثال للسلامة. قم بإعداد قواعد مخصصة للمكافآت والحوافز والعقوبات - كافئ أفضل المؤدين لديك على الفور",
            icon: Trophy,
            highlight: true
          }
        ]
      },
      audit: {
        title: "الرقابة المالية وقابلية المراجعة",
        desc: "ملخصات دفع آلية، تتضمن جميع المكافآت والخصومات والتسويات. تقارير كشوف المرتبات والامتثال التي يمكن تنزيلها ومشاركتها مع فريق المالية والموارد البشرية",
        cta: "احجز عرضًا تجريبيًا مجانيًا"
      },
      steps: {
        title: "كيف تبدأ مع فليتو",
        subtitle: "ابدأ مع حل فليتو للوجستيات الطرف الثالث بخمس خطوات بسيطة",
        items: [
          { number: "1", title: "اربط أسطولك", desc: "اربط بيانات أسطولك وسائقيك مع فليتو - وأضف المركبات والسائقين والمشرفين مباشرة" },
          { number: "2", title: "أسند عمليات التوصيل", desc: "اسند الطلبات وتابع تنفيذها عبر لوحات تحكم مباشرة وتتبع لحظي" },
          { number: "3", title: "تتبع الأداء", desc: "تتبع أداء السائقين، استقبل تنبيهات المخالفات، وأتمت مهام سير عمل التعويضات" },
          { number: "4", title: "ابق على اتصال", desc: "استخدم الرسائل والإشعارات وآليات التواصل الذكي للحفاظ على تواصل الفرق وتوحيد جهودهم بوضوح" },
          { number: "5", title: "استخرج وحلل", desc: "استخرج بيانات الأداء وكشوف الرواتب والامتثال للمراجعات الداخلية أو التنظيمية" }
        ]
      },
      finalCta: {
        title: "هل أنت مستعد لعمليات توصيل أسرع وامتثال موثوق ومكافآت أذكى؟",
        cta: "جرب النظام الآن"
      }
    },
    en: {
      hero: {
        title: "Deliver Faster, Work Smarter, Reward Fairly",
        subtitle: "Comprehensive digital control for food and grocery delivery operators - real-time fleet visibility, automated driver management, and full compliance - all in one place.",
        ctaPrimary: "Try the System Now",
        ctaSecondary: "Learn More"
      },
      intro: {
        label: "3PL Delivery Support",
        title: "Integrated 3PL Solution for the Delivery Sector",
        desc: "Our 3PL solution is designed specifically for the food and grocery delivery sector. Whether you manage your own fleet or a network of drivers, you'll get seamless operational management, real-time performance tracking, compliance guarantee, and financial automation - making your logistics more reliable, scalable, and driver-friendly."
      },
      solutions: [
        {
          image: "https://picsum.photos/seed/fuel-3pl/600/400",
          title: "Fuel and Maintenance Monitoring",
          desc: "Automated alerts for refueling and preventive checks - to keep delivery assets ready at all times",
          icon: Fuel
        },
        {
          image: "https://picsum.photos/seed/driver-3pl/600/400",
          title: "Driver Performance Management",
          desc: "Automated tracking of delivery metrics, ratings, on-time delivery status, and safety behaviors",
          icon: Trophy
        },
        {
          image: "https://picsum.photos/seed/map-3pl/600/400",
          title: "Vehicle Tracking System",
          desc: "Real-time maps and route optimization for vehicles and delivery riders - reducing delays and avoiding missed deliveries",
          icon: MapPin
        },
        {
          image: "https://picsum.photos/seed/tamm-3pl/600/400",
          title: "Integration with \"Tamm\"",
          desc: "Instant violation alerts from Tamm, view fines, automate communication, and link violations directly to driver records and payroll",
          icon: ShieldCheck
        },
        {
          image: "https://picsum.photos/seed/chat-3pl/600/400",
          title: "In-app Messaging",
          desc: "Smart communication with drivers, supervisors, and support teams via multiple channels, to send instructions, updates, or automatic violation notices",
          icon: MessageSquare
        },
        {
          image: "https://picsum.photos/seed/reports-3pl/600/400",
          title: "Reporting and Analytics",
          desc: "Advanced report dashboards providing real-time analytics, performance indicators, and compliance forecasting - enabling data-driven decisions",
          icon: BarChart3
        }
      ],
      capabilities: {
        title: "Key Solution Capabilities",
        subtitle: "Advanced features specifically designed for 3PL delivery operations",
        items: [
          {
            title: "Enhanced Delivery Management",
            desc: "Assign and track orders centrally to reduce wait times and optimize routes in real-time. Geofencing and instant updates keep supervisors and customers informed at every stage",
            icon: Truck
          },
          {
            title: "Automated Violation Deductions",
            desc: "Direct integration with \"Tamm\" provides real-time violation details. Deductions are automatically calculated and added directly to driver compensation. Full transparency with detailed records for all violations",
            icon: AlertCircle
          },
          {
            title: "Driver Performance & Reward System",
            desc: "Real-time dashboards rank drivers by delivery times, ratings, and safety compliance. Set custom rules for rewards, incentives, and penalties - reward your top performers instantly",
            icon: Trophy,
            highlight: true
          }
        ]
      },
      audit: {
        title: "Financial Control and Auditability",
        desc: "Automated payment summaries, including all rewards, deductions, and settlements. Payroll and compliance reports that can be downloaded and shared with finance and HR teams",
        cta: "Book a Free Demo"
      },
      steps: {
        title: "How to Start with Fleetoo",
        subtitle: "Get started with Fleetoo's 3PL solution in five simple steps",
        items: [
          { number: "1", title: "Connect Your Fleet", desc: "Link your fleet and driver data with Fleetoo - add vehicles, drivers, and supervisors directly" },
          { number: "2", title: "Assign Delivery Operations", desc: "Assign orders and track execution via live dashboards and real-time tracking" },
          { number: "3", title: "Track Performance", desc: "Track driver performance, receive violation alerts, and automate compensation workflows" },
          { number: "4", title: "Stay Connected", desc: "Use messaging, notifications, and smart communication mechanisms to keep teams connected and aligned" },
          { number: "5", title: "Extract and Analyze", desc: "Extract performance data, payroll, and compliance for internal or regulatory reviews" }
        ]
      },
      finalCta: {
        title: "Ready for Faster Delivery Operations, Reliable Compliance, and Smarter Rewards?",
        cta: "Try the System Now"
      }
    }
  };

  const activeContent = isAr ? content.ar : content.en;

  return (
    <main className="min-h-screen bg-secondary text-white">
      <Navbar />
      
      <HeroSection 
        title={activeContent.hero.title}
        subtitle={activeContent.hero.subtitle}
        ctaPrimary={activeContent.hero.ctaPrimary}
        ctaSecondary={activeContent.hero.ctaSecondary}
        image="https://picsum.photos/seed/3pl-hero/1200/800"
        onCtaClick={openDemoModal}
        customOverlay={
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 w-full">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">{isAr ? "تفاصيل السائق" : "Driver Details"}</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold">D11L-840107</p>
                  <p className="text-xs text-white/60">TVS Model X 214</p>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <SectionHeader 
        title={activeContent.intro.title}
        subtitle={activeContent.intro.desc}
        theme="light"
      />

      <ThreePLSolutionsGrid solutions={activeContent.solutions} />

      <ThreePLCapabilitiesGrid 
        title={activeContent.capabilities.title}
        subtitle={activeContent.capabilities.subtitle}
        items={activeContent.capabilities.items}
      />

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gray-50 rounded-[48px] p-12 md:p-20 text-center border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8">
              <PieChart className="w-8 h-8" />
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary mb-6">{activeContent.audit.title}</h2>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-3xl mx-auto">
              {activeContent.audit.desc}
            </p>
            <button onClick={openDemoModal} className="bg-primary text-white px-12 py-5 rounded-2xl font-bold hover:bg-primary/90 transition-all">
              {activeContent.audit.cta}
            </button>
          </div>
        </div>
      </section>

      <ThreePLStepsGrid 
        title={activeContent.steps.title}
        subtitle={activeContent.steps.subtitle}
        items={activeContent.steps.items}
      />

      <FinalCTA 
        title={activeContent.finalCta.title}
        ctaText={activeContent.finalCta.cta}
        onCtaClick={openDemoModal}
      />

      <Footer />
    </main>
  );
}
