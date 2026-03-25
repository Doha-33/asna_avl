"use client";

import { 
  FileText, 
  MapPin, 
  ClipboardCheck, 
  History, 
  BarChart3, 
  MessageSquare, 
  Fuel,
  Settings
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { useDemoModal } from "@/components/DemoModalContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeatureSection } from "@/components/shared/FeatureSection";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { RentalFeaturesGrid } from "@/components/sections/rental-solution/RentalFeaturesGrid";
import { RentalStepsGrid } from "@/components/sections/rental-solution/RentalStepsGrid";
import Image from "next/image";

export default function RentalSolutionPage() {
  const { language } = useLanguage();
  const { openDemoModal } = useDemoModal();
  const isAr = language === "ar";

  const content = {
    ar: {
      hero: {
        title: "قد نجاحك في التأجير من خلال التحكم الكامل في الأسطول",
        subtitle: "أدر أعمال تأجير السيارات الخاصة بك من خلال عقود رقمية سلسة وسائقين معتمدين ورؤية للمركبات في الوقت الفعلي ومجموعة من أدوات الأسطول المتقدمة - كل ذلك من فليتو.",
        ctaPrimary: "جرب النظام الآن",
        ctaSecondary: "اعرف المزيد"
      },
      intro: {
        title: "كل ما تحتاجه لإتقان عمليات الأسطول",
        desc: "تدعم فليتو شركات التأجير من خلال منصة متكاملة - تربط كل مرحلة من مراحل دورة إدارة المركبات الخاصة بك"
      },
      features: [
        {
          image: "https://picsum.photos/seed/rental-inspect/600/400",
          title: "عمليات الفحص",
          desc: "نماذج فحص المركبات الرقمية على الهاتف المحمول، والإبلاغ الفوري عن الأعطال",
          icon: ClipboardCheck
        },
        {
          image: "https://picsum.photos/seed/rental-maint/600/400",
          title: "برنامج إدارة الصيانة",
          desc: "جدولة الخدمة وأوامر العمل التنبؤية والوقائية والتفاعلية",
          icon: Settings
        },
        {
          image: "https://picsum.photos/seed/rental-track/600/400",
          title: "نظام تتبع المركبات",
          desc: "موقع المركبة في الوقت الفعلي، ومراقبة سلوك السائق، وتنبيهات فورية",
          icon: MapPin
        },
        {
          image: "https://picsum.photos/seed/rental-mgmt/600/400",
          title: "إدارة الإيجار",
          desc: "عقود رقمية، تحقق آلي من السائق، امتثال متكامل مع \"تم\" و\"تأجير\"",
          icon: FileText
        },
        {
          image: "https://picsum.photos/seed/rental-archive/600/400",
          title: "أرشيف المستندات",
          desc: "تخزين المستندات القانونية والتشغيلية، مع مسارات مراجعة كاملة",
          icon: History
        },
        {
          image: "https://picsum.photos/seed/rental-reports/600/400",
          title: "إعداد التقارير والتحليلات",
          desc: "لوحات معلومات قابلة للتنفيذ، وتقارير امتثال وتشغيلية قابلة للتصدير",
          icon: BarChart3
        },
        {
          image: "https://picsum.photos/seed/rental-chat/600/400",
          title: "المراسلة",
          desc: "اتصال آمن متعدد القنوات بين الفريق والفروع والعملاء",
          icon: MessageSquare
        },
        {
          image: "https://picsum.photos/seed/rental-fuel/600/400",
          title: "الوقود والطاقة",
          desc: "تتبع الاستهلاك المباشر، وكشف التسرب/الاحتيال، والتحكم في التكاليف",
          icon: Fuel
        }
      ],
      details: [
        {
          title: "عقود إيجار رقمية",
          desc: "إنشاء وتوقيع وأرشفة العقود الرسمية - لا ورق، وصول فوري",
          points: ["تكامل التوقيع الإلكتروني", "قوالب عقود آلية", "تخزين سحابي آمن"],
          image: "https://picsum.photos/seed/rental-contract-detail/800/600"
        },
        {
          title: "تفويض السائق",
          desc: "فحوصات \"تم\"/\"تأجير\" متكاملة، تحكم تلقائي في الأهلية",
          points: ["التحقق من صحة الرخصة في الوقت الفعلي", "تكامل API الحكومي", "تقييم الأهلية الآلي"],
          image: "https://picsum.photos/seed/rental-tga-detail/800/600",
          reverse: true
        },
        {
          title: "تخصيص الأسطول",
          desc: "احجز وخصص المركبات بذكاء، وحسّن الاستخدام",
          points: ["مطابقة المركبات بالذكاء الاصطناعي", "تتبع فوري لتوفر المركبات", "تحسين الاستخدام"],
          image: "https://picsum.photos/seed/rental-fleet-detail/800/600"
        },
        {
          title: "عمليات فحص رقمية",
          desc: "قوائم مراجعة التسليم والاستلام مع صور وتسجيل سريع للأضرار",
          points: ["نماذج فحص مهيأة للجوال", "توثيق بالصور", "الإبلاغ الفوري عن الأضرار"],
          image: "https://picsum.photos/seed/rental-inspect-detail/800/600",
          reverse: true
        },
        {
          title: "التتبع المباشر والإشعارات",
          desc: "راقب عمليات التأجير مباشرة، وأتمت تذكيرات الإرجاع.",
          points: ["تتبع GPS لحظي", "تنبيهات تلقائية لمواعيد تسليم السيارات", "تنبيهات عند تجاوز السياج الجغرافي"],
          image: "https://picsum.photos/seed/rental-track-detail/800/600"
        },
        {
          title: "الامتثال وإعداد التقارير",
          desc: "أنشئ تقارير حكومية وتأمينية ومراجعة بنقرة واحدة",
          points: ["فحوصات امتثال آلية", "إعداد التقارير في الوقت الفعلي", "تقارير جاهزة للطباعة"],
          image: "https://picsum.photos/seed/rental-report-detail/800/600",
          reverse: true
        }
      ],
      steps: {
        title: "كيف تبدأ مع فليتو",
        subtitle: "ابدأ مع حلول التأجير في 4 خطوات بسيطة",
        items: [
          { number: "1", title: "اربط أسطولك", desc: "اربط بيانات أسطولك وسائقيك مع فليتو - وأضف المركبات والسائقين والمشرفين مباشرة" },
          { number: "2", title: "مزامنة مع \"تم\" و \"تأجير\"", desc: "اسند الطلبات وتابع تنفيذها عبر لوحات تحكم مباشرة وتتبع لحظي" },
          { number: "3", title: "الكل في شاشة واحدة", desc: "تتبع أداء السائقين، استقبل تنبيهات المخالفات، وأتمت مهام سير عمل التعويضات" },
          { number: "4", title: "التحليل والاستخراج", desc: "استخدم الرسائل والإشعارات وآليات التواصل الذكي للحفاظ على تواصل الفرق وتوحيد جهودهم بوضوح" }
        ]
      },
      finalCta: {
        title: "هل أنت مستعد لتحويل عمليات التأجير الخاصة بك؟",
        cta: "جرب النظام الآن"
      }
    },
    en: {
      hero: {
        title: "Drive Your Rental Success Through Full Fleet Control",
        subtitle: "Manage your car rental business through seamless digital contracts, verified drivers, real-time vehicle visibility, and a set of advanced fleet tools - all from Fleetoo.",
        ctaPrimary: "Try the System Now",
        ctaSecondary: "Learn More"
      },
      intro: {
        title: "Everything You Need to Master Fleet Operations",
        desc: "Fleetoo supports rental companies through an integrated platform - connecting every stage of your vehicle management cycle"
      },
      features: [
        {
          image: "https://picsum.photos/seed/rental-inspect/600/400",
          title: "Inspections",
          desc: "Digital vehicle inspection forms on mobile, and instant fault reporting",
          icon: ClipboardCheck
        },
        {
          image: "https://picsum.photos/seed/rental-maint/600/400",
          title: "Maintenance Management",
          desc: "Service scheduling and predictive, preventive, and reactive work orders",
          icon: Settings
        },
        {
          image: "https://picsum.photos/seed/rental-track/600/400",
          title: "Vehicle Tracking System",
          desc: "Real-time vehicle location, driver behavior monitoring, and instant alerts",
          icon: MapPin
        },
        {
          image: "https://picsum.photos/seed/rental-mgmt/600/400",
          title: "Rental Management",
          desc: "Digital contracts, automated driver verification, integrated compliance with \"Tamm\" and \"Tajeer\"",
          icon: FileText
        },
        {
          image: "https://picsum.photos/seed/rental-archive/600/400",
          title: "Document Archive",
          desc: "Storage of legal and operational documents, with full audit trails",
          icon: History
        },
        {
          image: "https://picsum.photos/seed/rental-reports/600/400",
          title: "Reporting and Analytics",
          desc: "Actionable dashboards, and exportable compliance and operational reports",
          icon: BarChart3
        },
        {
          image: "https://picsum.photos/seed/rental-chat/600/400",
          title: "Messaging",
          desc: "Secure multi-channel communication between team, branches, and customers",
          icon: MessageSquare
        },
        {
          image: "https://picsum.photos/seed/rental-fuel/600/400",
          title: "Fuel and Energy",
          desc: "Live consumption tracking, leak/fraud detection, and cost control",
          icon: Fuel
        }
      ],
      details: [
        {
          title: "Digital Rental Contracts",
          desc: "Create, sign, and archive official contracts - no paper, instant access",
          points: ["E-signature integration", "Automated contract templates", "Secure cloud storage"],
          image: "https://picsum.photos/seed/rental-contract-detail/800/600"
        },
        {
          title: "Driver Authorization",
          desc: "Integrated \"Tamm\"/\"Tajeer\" checks, automatic eligibility control",
          points: ["Real-time license validation", "Government API integration", "Automated eligibility assessment"],
          image: "https://picsum.photos/seed/rental-tga-detail/800/600",
          reverse: true
        },
        {
          title: "Fleet Customization",
          desc: "Book and assign vehicles intelligently, and optimize utilization",
          points: ["AI vehicle matching", "Real-time vehicle availability tracking", "Utilization optimization"],
          image: "https://picsum.photos/seed/rental-fleet-detail/800/600"
        },
        {
          title: "Digital Inspections",
          desc: "Delivery and pickup checklists with photos and fast damage recording",
          points: ["Mobile-optimized inspection forms", "Photo documentation", "Instant damage reporting"],
          image: "https://picsum.photos/seed/rental-inspect-detail/800/600",
          reverse: true
        },
        {
          title: "Live Tracking & Notifications",
          desc: "Monitor rental operations directly, and automate return reminders.",
          points: ["Real-time GPS tracking", "Automatic alerts for car delivery times", "Geofence breach alerts"],
          image: "https://picsum.photos/seed/rental-track-detail/800/600"
        },
        {
          title: "Compliance and Reporting",
          desc: "Generate government, insurance, and audit reports with one click",
          points: ["Automated compliance checks", "Real-time reporting", "Print-ready reports"],
          image: "https://picsum.photos/seed/rental-report-detail/800/600",
          reverse: true
        }
      ],
      steps: {
        title: "How to Start with Fleetoo",
        subtitle: "Get started with rental solutions in 4 simple steps",
        items: [
          { number: "1", title: "Connect Your Fleet", desc: "Link your fleet and driver data with Fleetoo - add vehicles, drivers, and supervisors directly" },
          { number: "2", title: "Sync with \"Tamm\" & \"Tajeer\"", desc: "Assign orders and track execution via live dashboards and real-time tracking" },
          { number: "3", title: "All in One Screen", desc: "Track driver performance, receive violation alerts, and automate compensation workflows" },
          { number: "4", title: "Analyze and Extract", desc: "Use messaging, notifications, and smart communication mechanisms to keep teams connected and aligned" }
        ]
      },
      finalCta: {
        title: "Ready to Transform Your Rental Operations?",
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
        image="https://picsum.photos/seed/rental-hero/1200/800"
        onCtaClick={openDemoModal}
        customOverlay={
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <p className="text-xs text-white/60 mb-1">{isAr ? "إجمالي الدخل" : "Total Income"}</p>
                <div className="h-16 flex items-end gap-1">
                  {[40, 70, 45, 90, 65, 80].map((h, i) => (
                    <div key={i} className="flex-1 bg-accent rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <p className="text-xs text-white/60 mb-1">{isAr ? "تفاصيل السائق" : "Driver Details"}</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary text-[10px] font-bold">D11</div>
                  <div>
                    <p className="text-[10px] font-bold">D11L-840107</p>
                    <p className="text-[8px] text-white/60">Tesla Model X 214</p>
                  </div>
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

      <RentalFeaturesGrid features={activeContent.features} />

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-primary">{isAr ? "حوّل طريقة إدارة تأجير المركبات" : "Transform Your Vehicle Rental Management"}</h2>
          </div>
          {activeContent.details.map((detail, i) => (
            <FeatureSection 
              key={i}
              title={detail.title}
              desc={detail.desc}
              points={detail.points}
              image={detail.image}
              reverse={detail.reverse}
            />
          ))}
        </div>
      </section>

      <RentalStepsGrid 
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
