"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useDemoModal } from "@/components/DemoModalContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  BarChart3, 
  LayoutDashboard,
  FileText,
  Bell,
  Lock,
  Users,
  Database,
  ShieldCheck
} from "lucide-react";

// Shared Components
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureSection } from "@/components/shared/FeatureSection";
import { FAQSection } from "@/components/shared/FAQSection";

// Section Components
import { CapabilitiesGrid } from "@/components/sections/fleet-analytics/CapabilitiesGrid";
import { SecurityGrid } from "@/components/sections/fleet-analytics/SecurityGrid";

export default function FleetAnalyticsPage() {
  const { language } = useLanguage();
  const { openDemoModal } = useDemoModal();
  const isAr = language === "ar";

  const content = {
    ar: {
      hero: {
        title: "اكتشف تحليلات عملية لأسطولك مع بيانات فورية",
        subtitle: "راقب، حسّن، واحمِ كل مركبة في أسطولك - بشكل فوري وذكي.",
        cta: "جرب النظام الآن",
        image: "https://picsum.photos/seed/analytics-hero/800/600"
      },
      capabilities: {
        title: "القدرات الأساسية",
        description: "تمنح وحدة التحليلات وإعداد التقارير في ASNA AVL لمشغلي الأساطيل ومديري التأجير وفرق الخدمات اللوجستية رؤية كاملة لكل التفاصيل التشغيلية. حوّل البيانات الأولية من التتبع والصيانة والوقود والتأجير والفحص إلى رؤى ذات مغزى وقابلة للتنفيذ، وكل ذلك يمكن الوصول إليه من لوحة تحكم حديثة واحدة.",
        items: [
          { title: "لوحات تحكم تفاعلية", desc: "شاهد فوراً مؤشرات الأداء، وإحصائيات الاستخدام، والتكاليف، وحوادث السلامة، ومستويات الامتثال كل ذلك في مكان واحد.", icon: LayoutDashboard },
          { title: "تقارير قابلة للتخصيص", desc: "أنشئ وجدول واستخرج تقارير مخصصة لاحتياجاتك التشغيلية - الصيانة، التتبع، المصروفات، استهلاك الوقود، نشاط التأجير، الفحوصات، والمزيد.", icon: FileText },
          { title: "تصوير البيانات", desc: "مخططات ديناميكية (خطية، أعمدة، مؤشرات KPI، خرائط) تمنحك فهماً واضحاً وسريعاً.", icon: BarChart3 },
          { title: "تنبيهات ومراقبة في الوقت الفعلي", desc: "حدد العتبات واستقبل إشعارات فورية حول الأحداث الهامة - تجاوزات التكاليف، والخدمة المتأخرة، والمعاملات المشبوهة، وسلوك السائق الخطير.", icon: Bell },
          { title: "الأمان وتكامل البيانات", desc: "جميع التحليلات والتقارير محمية بتشفير على مستوى المؤسسات لتحقيق أقصى درجات الأمان.", icon: ShieldCheck }
        ]
      },
      dashboards: {
        title: "لوحات تحكم تفاعلية",
        features: [
          "شاهد فوراً مؤشرات الأداء، وإحصائيات الاستخدام، والتكاليف، وحوادث السلامة، ومستويات الامتثال كل ذلك في مكان واحد",
          "تعمّق في التفاصيل حسب المركبات، أو السائقين، أو الفروع، أو الفترات الزمنية"
        ],
        cta: "جرب النظام الآن",
        image: "https://picsum.photos/seed/dashboards/800/600"
      },
      customReports: {
        title: "تقارير قابلة للتخصيص",
        features: [
          "أنشئ وجدول واستخرج تقارير مخصصة لاحتياجاتك التشغيلية — الصيانة، التتبع، المصروفات، استهلاك الوقود، نشاط التأجير، الفحوصات، والمزيد",
          "شارك التقارير بأمان مع فرق المالية أو الامتثال أو الفرق التنفيذية"
        ],
        cta: "جرب النظام الآن",
        image: "https://picsum.photos/seed/reports/800/600"
      },
      visualization: {
        title: "تصوير البيانات",
        features: [
          "مخططات ديناميكية (خطية، أعمدة، مؤشرات KPI، خرائط) تمنحك فهماً واضحاً وسريعاً",
          "تصوّر الاتجاهات، واكتشف الانحرافات، وقارن الأداء عبر الأصول أو المواقع"
        ],
        cta: "جرب النظام الآن",
        image: "https://picsum.photos/seed/visualization/800/600"
      },
      alerts: {
        title: "تنبيهات ومراقبة في الوقت الفعلي",
        features: [
          "حدد العتبات واستقبل إشعارات فورية حول الأحداث الهامة - تجاوزات التكاليف، والخدمة المتأخرة، والمعاملات المشبوهة، وسلوك السائق الخطير"
        ],
        cta: "جرب النظام الآن",
        image: "https://picsum.photos/seed/alerts/800/600"
      },
      security: {
        title: "الأمان وتكامل البيانات",
        items: [
          { title: "تشفير 256 بت", desc: "جميع التحليلات والتقارير محمية بتشفير على مستوى المؤسسات لتحقيق أقصى درجات الأمان", icon: Lock },
          { title: "وصول مخصص حسب الدور", desc: "تحكم في الوصول إلى البيانات للمسؤولين والمديرين وفرق المالية والامتثال بأذونات دقيقة", icon: Users },
          { title: "نسخ احتياطي مستمر", desc: "نسخ احتياطي مستمر للبيانات وإمكانيات تصدير آمنة لعمليات المراجعة الخارجية والامتثال", icon: Database }
        ]
      },
      faq: {
        title: "الأسئلة الشائعة",
        items: [
          {
            question: "هل يمكنني تخصيص قوالب التقارير لتلبية احتياجاتي؟",
            answer: "نعم، كل نوع تقرير قابل للتكوين - من حيث المحتوى والجدولة. أنشئ قوالب مخصصة تتوافق مع متطلباتك التشغيلية المحددة وعلامتك التجارية."
          },
          {
            question: "هل جميع منتجات الأسطول مدمجة في لوحة معلومات إعداد التقارير؟",
            answer: "بالتأكيد - توحد تحليلات ASNA AVL التتبع والتأجير والوقود والصيانة وعمليات الفحص في لوحة تحكم شاملة واحدة لرؤية تشغيلية كاملة."
          },
          {
            question: "هل البيانات قابلة للتصدير لعمليات المراجعة ومراجعة الأعمال؟",
            answer: "نعم، تصدير بنقرة واحدة إلى PDF أو Excel أو التنسيقات التنظيمية. تحافظ جميع الصادرات على سلامة البيانات وتتضمن مسارات مراجعة لمتطلبات الامتثال."
          }
        ]
      },
      finalCta: {
        title: "هل أنت مستعد لإدارة الأسطول بوضوح وتحكم؟",
        cta: "جرب النظام الآن"
      }
    },
    en: {
      hero: {
        title: "Discover Actionable Analytics for Your Fleet with Real-time Data",
        subtitle: "Monitor, improve, and protect every vehicle in your fleet - instantly and intelligently.",
        cta: "Try the System Now",
        image: "https://picsum.photos/seed/analytics-hero/800/600"
      },
      capabilities: {
        title: "Core Capabilities",
        description: "ASNA AVL's analytics and reporting module gives fleet operators, rental managers, and logistics teams full visibility into every operational detail. Transform raw data from tracking, maintenance, fuel, rental, and inspections into meaningful, actionable insights, all accessible from a single modern dashboard.",
        items: [
          { title: "Interactive Dashboards", desc: "Instantly see performance indicators, usage statistics, costs, safety incidents, and compliance levels all in one place.", icon: LayoutDashboard },
          { title: "Customizable Reports", desc: "Create, schedule, and export reports tailored to your operational needs - maintenance, tracking, expenses, fuel consumption, rental activity, inspections, and more.", icon: FileText },
          { title: "Data Visualization", desc: "Dynamic charts (line, bar, KPI indicators, maps) give you a clear and quick understanding.", icon: BarChart3 },
          { title: "Real-time Alerts & Monitoring", desc: "Set thresholds and receive instant notifications about critical events - cost overruns, overdue service, suspicious transactions, and dangerous driver behavior.", icon: Bell },
          { title: "Security & Data Integrity", desc: "All analytics and reports are protected by enterprise-level encryption for maximum security.", icon: ShieldCheck }
        ]
      },
      dashboards: {
        title: "Interactive Dashboards",
        features: [
          "Instantly see performance indicators, usage statistics, costs, safety incidents, and compliance levels all in one place",
          "Drill down into details by vehicles, drivers, branches, or time periods"
        ],
        cta: "Try the System Now",
        image: "https://picsum.photos/seed/dashboards/800/600"
      },
      customReports: {
        title: "Customizable Reports",
        features: [
          "Create, schedule, and export reports tailored to your operational needs — maintenance, tracking, expenses, fuel consumption, rental activity, inspections, and more",
          "Share reports securely with finance, compliance, or executive teams"
        ],
        cta: "Try the System Now",
        image: "https://picsum.photos/seed/reports/800/600"
      },
      visualization: {
        title: "Data Visualization",
        features: [
          "Dynamic charts (line, bar, KPI indicators, maps) give you a clear and quick understanding",
          "Visualize trends, discover anomalies, and compare performance across assets or locations"
        ],
        cta: "Try the System Now",
        image: "https://picsum.photos/seed/visualization/800/600"
      },
      alerts: {
        title: "Real-time Alerts & Monitoring",
        features: [
          "Set thresholds and receive instant notifications about critical events - cost overruns, overdue service, suspicious transactions, and dangerous driver behavior"
        ],
        cta: "Try the System Now",
        image: "https://picsum.photos/seed/alerts/800/600"
      },
      security: {
        title: "Security & Data Integrity",
        items: [
          { title: "256-bit Encryption", desc: "All analytics and reports are protected by enterprise-level encryption for maximum security", icon: Lock },
          { title: "Role-Based Access", desc: "Control data access for admins, managers, finance, and compliance teams with granular permissions", icon: Users },
          { title: "Continuous Backup", desc: "Ongoing data backup and secure export capabilities for external audits and compliance", icon: Database }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "Can I customize report templates to meet my needs?",
            answer: "Yes, every report type is configurable - in terms of content and scheduling. Create custom templates that align with your specific operational requirements and branding."
          },
          {
            question: "Are all fleet products integrated into the reporting dashboard?",
            answer: "Certainly - ASNA AVL analytics unify tracking, rental, fuel, maintenance, and inspections into a single comprehensive dashboard for full operational visibility."
          },
          {
            question: "Is data exportable for audits and business reviews?",
            answer: "Yes, one-click export to PDF, Excel, or regulatory formats. All exports maintain data integrity and include audit trails for compliance requirements."
          }
        ]
      },
      finalCta: {
        title: "Ready to Manage Your Fleet with Clarity and Control?",
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
        imageSrc={activeContent.hero.image}
        imageAlt={activeContent.hero.title}
      />

      <CapabilitiesGrid 
        title={activeContent.capabilities.title}
        description={activeContent.capabilities.description}
        items={activeContent.capabilities.items}
      />

      <FeatureSection 
        title={activeContent.dashboards.title}
        features={activeContent.dashboards.features}
        ctaText={activeContent.dashboards.cta}
        imageSrc={activeContent.dashboards.image}
        imageAlt={activeContent.dashboards.title}
        onCtaClick={openDemoModal}
      />

      <FeatureSection 
        title={activeContent.customReports.title}
        features={activeContent.customReports.features}
        ctaText={activeContent.customReports.cta}
        imageSrc={activeContent.customReports.image}
        imageAlt={activeContent.customReports.title}
        reverse={true}
        onCtaClick={openDemoModal}
      />

      <FeatureSection 
        title={activeContent.visualization.title}
        features={activeContent.visualization.features}
        ctaText={activeContent.visualization.cta}
        imageSrc={activeContent.visualization.image}
        imageAlt={activeContent.visualization.title}
        onCtaClick={openDemoModal}
      />

      <FeatureSection 
        title={activeContent.alerts.title}
        features={activeContent.alerts.features}
        ctaText={activeContent.alerts.cta}
        imageSrc={activeContent.alerts.image}
        imageAlt={activeContent.alerts.title}
        reverse={true}
        onCtaClick={openDemoModal}
      />

      <SecurityGrid 
        title={activeContent.security.title}
        items={activeContent.security.items}
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
              <button onClick={openDemoModal} className="accent-button text-lg px-12 py-5">
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
