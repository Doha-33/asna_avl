"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useDemoModal } from "@/components/DemoModalContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Calendar,
  Zap,
  Clock,
  AlertCircle,
  Settings,
  ClipboardList,
  Users,
  Box,
  History,
  BarChart3
} from "lucide-react";

// Shared Components
import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FAQSection } from "@/components/shared/FAQSection";

// Section Components
import { MaintenanceTypesGrid } from "@/components/sections/maintenance-management/MaintenanceTypesGrid";
import { MaintenanceCapabilitiesGrid } from "@/components/sections/maintenance-management/MaintenanceCapabilitiesGrid";

export default function MaintenanceManagementPage() {
  const { language } = useLanguage();
  const { openDemoModal } = useDemoModal();
  const isAr = language === "ar";

  const content = {
    ar: {
      hero: {
        title: "تنبأ، امنع، نفذ: صيانة الأسطول الذكية",
        subtitle: "حوّل صيانة المركبات من إصلاحات متأخرة إلى كفاءة ذكية قائمة على البيانات. حافظ على أسطولك في حالة تشغيلية مع وقت توقف أقل وتكاليف أقل.",
        cta: "جرب النظام الآن",
        book: "احجز عرضاً تجريبياً",
        image: "https://picsum.photos/seed/maintenance-hero/800/600"
      },
      overview: {
        title: "نظرة عامة على المنتج",
        description: "تضمن وحدة الصيانة في ASNA AVL حصول كل مركبة في أسطولك على الرعاية المناسبة في الوقت المناسب. أتمتة الجدولة وتقليل الأعطال وتقليل تكاليف التشغيل باستخدام نظام يجمع بين القواعد الذكية والبيانات الحية والرؤية الكاملة - مخصص بالكامل للامتثال للسوق السعودي."
      },
      maintenanceTypes: {
        title: "أنواع الصيانة المدعومة",
        types: [
          {
            title: "الصيانة الوقائية",
            icon: Calendar,
            colorClass: "bg-green-50 text-green-600",
            features: [
              "جدولة آلية بناءً على الأميال أو ساعات المحرك أو فترات زمنية مخصصة",
              "عناصر الخدمة العادية: تغيير الزيت، واستبدال المرشحات، وفحوصات السلامة",
              "تذكيرات إشعار بالخدمة القادمة، مع تصعيد للمهام المتأخرة",
              "تقليل الأعطال غير المتوقعة وزيادة وقت تشغيل المركبة إلى أقصى حد"
            ]
          },
          {
            title: "الصيانة التنبؤية",
            icon: Zap,
            colorClass: "bg-purple-50 text-purple-600",
            features: [
              "مراقبة في الوقت الفعلي لرموز التشخيص (OBD) وبيانات المستشعرات ومدخلات السائق",
              "تنبؤات مدفوعة بالذكاء الاصطناعي بالأعطال المحتملة بناءً على أنماط الاستخدام التاريخية والحية",
              "تنبيهات مبكرة للأعطال قبل أن تصبح حرجة، مما يتيح التدخل المخطط له",
              "انخفاض يصل إلى 40% في حوادث الأعطال مع استراتيجيات تنبؤية"
            ]
          },
          {
            title: "الصيانة المجدولة/القائمة على التقويم",
            icon: Clock,
            colorClass: "bg-blue-50 text-blue-600",
            features: [
              "إنشاء جداول متكررة بناءً على فترات زمنية (شهرية، ربع سنوية، سنوية)",
              "تتبع الامتثال للفحوصات القانونية (عمليات التفتيش التنظيمية، والشهادات)",
              "تذكيرات متكاملة ومزامنة تقويم لضمان عدم تفويت المواعيد النهائية أبداً"
            ]
          },
          {
            title: "الصيانة التصحيحية/التفاعلية",
            icon: AlertCircle,
            colorClass: "bg-red-50 text-red-600",
            features: [
              "إنشاء فوري لأوامر عمل رقمية للأعطال المكتشفة وبلاغاتها",
              "ربط مباشر بين الفحوصات وتقارير السائقين وسجلات الحوادث مع خطط عمل الصيانة",
              "إسناد المهام إلى الفنيين مع متابعة لحظية لحالة التنفيذ وتأكيد الإنجاز"
            ]
          }
        ]
      },
      capabilities: {
        title: "القدرات الأساسية",
        items: [
          { title: "خطط صيانة قابلة للتخصيص", desc: "خصص إجراءات الصيانة حسب نوع المركبة أو الاستخدام أو متطلبات العمل", icon: Settings },
          { title: "أوامر العمل الرقمية", desc: "إنشاء وتعيين وتتبع مهام الإصلاح والخدمة بسلاسة", icon: ClipboardList },
          { title: "إدارة الفنيين", desc: "إسناد العمل بناءً على التوافر والخبرة، ومراقبة التقدم في الوقت الفعلي", icon: Users },
          { title: "تتبع قطع الغيار والمستلزمات", desc: "إدارة مخزون قطع الغيار والمستلزمات، وربط الاستهلاك بأوامر العمل", icon: Box },
          { title: "أرشيف سجل الصيانة", desc: "سجل رقمي كامل لكل عملية إصلاح أو صيانة قابل للبحث الفوري والاستخراج", icon: History },
          { title: "تحليل التكاليف وإعداد التقارير", desc: "تتبع النفقات واكتشاف أوجه القصور ومقارنة الأداء بالتحليلات التفاعلية", icon: BarChart3 }
        ]
      },
      faq: {
        title: "الأسئلة الشائعة",
        items: [
          {
            question: "هل تدعم ASNA AVL سير عمل الصيانة الحالي الخاص بي؟",
            answer: "نعم - خطط قابلة للتخصيص تناسب أي عملية، وتتكيف أوامر العمل الرقمية مع المتطلبات المحددة لفريقك والإجراءات الحالية."
          },
          {
            question: "كيف تعمل الصيانة التنبؤية؟",
            answer: "تستخدم ASNA AVL بيانات OBD الحية والذكاء الاصطناعي للتنبؤ بالأعطال المحتملة بناءً على أنماط الاستخدام والظروف البيئية وسجلات الصيانة التاريخية."
          },
          {
            question: "هل يمكنني تتبع أداء قطع الغيار والفنيين؟",
            answer: "بالتأكيد - مع تحليلات على مستوى الأسطول ولوحات معلومات فنية توفر رؤى مفصلة حول الأداء والكفاءة واستخدام الموارد."
          }
        ]
      },
      finalCta: {
        title: "هل أنت مستعد لأسطول أكثر ذكاءً وأماناً؟",
        cta: "جرب النظام الآن"
      }
    },
    en: {
      hero: {
        title: "Predict, Prevent, Perform: Smart Fleet Maintenance",
        subtitle: "Transform vehicle maintenance from late repairs to data-driven smart efficiency. Keep your fleet in operational condition with less downtime and lower costs.",
        cta: "Try the System Now",
        book: "Book a Demo",
        image: "https://picsum.photos/seed/maintenance-hero/800/600"
      },
      overview: {
        title: "Product Overview",
        description: "ASNA AVL's maintenance module ensures every vehicle in your fleet receives the right care at the right time. Automate scheduling, reduce breakdowns, and lower operating costs with a system that combines smart rules, live data, and full visibility - fully customized for Saudi market compliance."
      },
      maintenanceTypes: {
        title: "Supported Maintenance Types",
        types: [
          {
            title: "Preventive Maintenance",
            icon: Calendar,
            colorClass: "bg-green-50 text-green-600",
            features: [
              "Automated scheduling based on mileage, engine hours, or custom time intervals",
              "Standard service items: oil changes, filter replacements, and safety checks",
              "Upcoming service notification reminders, with escalation for overdue tasks",
              "Reduce unexpected breakdowns and maximize vehicle uptime"
            ]
          },
          {
            title: "Predictive Maintenance",
            icon: Zap,
            colorClass: "bg-purple-50 text-purple-600",
            features: [
              "Real-time monitoring of diagnostic codes (OBD), sensor data, and driver inputs",
              "AI-driven predictions of potential failures based on historical and live usage patterns",
              "Early failure alerts before they become critical, enabling planned intervention",
              "Up to 40% reduction in breakdown incidents with predictive strategies"
            ]
          },
          {
            title: "Scheduled/Calendar-Based",
            icon: Clock,
            colorClass: "bg-blue-50 text-blue-600",
            features: [
              "Create recurring schedules based on time intervals (monthly, quarterly, annually)",
              "Track compliance for legal checks (regulatory inspections, certifications)",
              "Integrated reminders and calendar sync to ensure deadlines are never missed"
            ]
          },
          {
            title: "Corrective/Reactive Maintenance",
            icon: AlertCircle,
            colorClass: "bg-red-50 text-red-600",
            features: [
              "Instant creation of digital work orders for detected failures and reports",
              "Direct link between inspections, driver reports, and accident logs with maintenance action plans",
              "Assign tasks to technicians with real-time execution status tracking and completion confirmation"
            ]
          }
        ]
      },
      capabilities: {
        title: "Core Capabilities",
        items: [
          { title: "Customizable Maintenance Plans", desc: "Tailor maintenance procedures by vehicle type, usage, or business requirements", icon: Settings },
          { title: "Digital Work Orders", desc: "Create, assign, and track repair and service tasks seamlessly", icon: ClipboardList },
          { title: "Technician Management", desc: "Assign work based on availability and expertise, and monitor progress in real-time", icon: Users },
          { title: "Parts & Supplies Tracking", desc: "Manage inventory of parts and supplies, and link consumption to work orders", icon: Box },
          { title: "Maintenance History Archive", desc: "Complete digital record of every repair or maintenance operation, instantly searchable and exportable", icon: History },
          { title: "Cost Analysis & Reporting", desc: "Track expenses, discover inefficiencies, and compare performance with interactive analytics", icon: BarChart3 }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "Does ASNA AVL support my current maintenance workflow?",
            answer: "Yes - customizable plans fit any process, and digital work orders adapt to your team's specific requirements and existing procedures."
          },
          {
            question: "How does predictive maintenance work?",
            answer: "ASNA AVL uses live OBD data and AI to predict potential failures based on usage patterns, environmental conditions, and historical maintenance records."
          },
          {
            question: "Can I track the performance of parts and technicians?",
            answer: "Certainly - with fleet-level analytics and technician dashboards providing detailed insights into performance, efficiency, and resource usage."
          }
        ]
      },
      finalCta: {
        title: "Ready for a Smarter, Safer Fleet?",
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
        ctaText={activeContent.hero.cta}
        secondaryCtaText={activeContent.hero.book}
        secondaryCtaLink={`/${language}/pricing`}
        imageSrc={activeContent.hero.image}
        imageAlt={activeContent.hero.title}
      />

      <section className="py-24 bg-white text-secondary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionHeader title={activeContent.overview.title} />
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mt-8">
            {activeContent.overview.description}
          </p>
        </div>
      </section>

      <MaintenanceTypesGrid 
        title={activeContent.maintenanceTypes.title}
        types={activeContent.maintenanceTypes.types}
      />

      <MaintenanceCapabilitiesGrid 
        title={activeContent.capabilities.title}
        items={activeContent.capabilities.items}
      />

      <FAQSection 
        title={activeContent.faq.title}
        items={activeContent.faq.items}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-primary p-12 md:p-20 rounded-[48px] text-center relative overflow-hidden border border-white/10">
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent blur-[120px] rounded-full" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-10 max-w-3xl mx-auto leading-tight">
                {activeContent.finalCta.title}
              </h2>
              <button onClick={openDemoModal} className="accent-button text-xl px-12 py-5">
                {activeContent.finalCta.cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
