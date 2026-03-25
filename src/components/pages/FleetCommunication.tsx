import { useLanguage } from "@/components/LanguageContext";
import { useDemoModal } from "@/components/DemoModalContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { CommunicationCapabilitiesGrid } from "@/components/sections/CommunicationCapabilitiesGrid";
import { CommunicationSecuritySection } from "@/components/sections/CommunicationSecuritySection";
import { CommunicationFAQ } from "@/components/sections/CommunicationFAQ";
import { 
  MessageSquare, 
  Bell, 
  Users, 
  Workflow,
  ShieldCheck,
  Lock,
  Puzzle
} from "lucide-react";

export default function FleetCommunicationPage() {
  const { language } = useLanguage();
  const { openDemoModal } = useDemoModal();
  const isAr = language === "ar";

  const content = {
    ar: {
      hero: {
        title: "اتصال فوري وموثوق لأسطولك",
        subtitle: "نسّق وأبلغ وتجاوب — منصة المراسلة من ASNA AVL تربط بين الفرق والسائقين والعملاء في الوقت الفعلي.",
        cta: "جرب النظام الآن",
        book: "احجز عرضاً تجريبياً",
      },
      overview: {
        title: "حوّل اتصالات الأسطول",
        description: "تعمل وحدة المراسلة في ASNA AVL على تغيير طريقة إدارة الاتصالات التشغيلية. تواصل فوراً مع السائقين والمديرين والفنيين والعملاء من خلال منصة موحدة وآمنة تعمل عبر الرسائل القصيرة وواتساب والبريد الإلكتروني والتنبيهات داخل التطبيق. لا مزيد من المكالمات الفائتة أو الإشعارات المتأخرة أو ارتباك الرسائل — فقط اتصالات في الوقت المناسب وقابلة للتتبع وقابلة للتنفيذ."
      },
      capabilities: {
        title: "القدرات الأساسية",
        items: [
          { 
            title: "مراسلة متعددة القنوات", 
            desc: "أرسل واستقبل الرسائل عبر الرسائل القصيرة أو واتساب أو البريد الإلكتروني أو تطبيق ASNA AVL - كل ذلك من لوحة تحكم واحدة.", 
            icon: MessageSquare,
            colorClass: "bg-blue-50 text-blue-600",
            features: ["تواصل مع السائقين والفرق على الفور، أينما كانوا."]
          },
          { 
            title: "التنبيهات المؤتمتة والمشغّلة تلقائيًا", 
            desc: "قم بإعداد إشعارات تلقائية للأحداث الهامة: تغييرات المسار، والحوادث، وأعطال المركبات، والصيانة المجدولة، أو مراحل العقد.", 
            icon: Bell,
            colorClass: "bg-purple-50 text-purple-600",
            features: ["حدد من يتلقى أي تنبيهات بناءً على الأدوار أو المسارات أو تعيينات الأصول."]
          },
          { 
            title: "اتصال قائم على الأدوار", 
            desc: "استهدف الرسائل للأفراد أو الفرق أو الفروع أو المجموعات المخصصة.", 
            icon: Users,
            colorClass: "bg-green-50 text-green-600",
            features: ["تصفية المحادثات حسب المستخدم أو المركبة أو المشروع أو حالة الوظيفة للتتبع السريع."]
          },
          { 
            title: "مهام سير العمل التشغيلية المدعومة", 
            desc: "شارك التعليمات أو التأكيدات أو الإجراءات العاجلة المرتبطة بالرحلات أو الوظائف أو عمليات الفحص أو متطلبات الامتثال.", 
            icon: Workflow,
            colorClass: "bg-orange-50 text-orange-600",
            features: ["مراسلة ثنائية الاتجاه: تأكيد الاستلام، والحصول على ردود، والموافقة على الإجراءات، أو تحميل أدلة بالصور."]
          }
        ]
      },
      security: {
        title: "الأمان والتكامل",
        items: [
          { title: "تشفير البيانات أثناء تخزينها ونقلها", desc: "يضمن الأمان على مستوى المؤسسات بقاء جميع الاتصالات محمية وممتثلة.", icon: Lock },
          { title: "ضوابط الوصول القائمة على الأدوار", desc: "لوحات تحكم رسائل آمنة بأذونات دقيقة لأدوار المستخدمين المختلفة.", icon: ShieldCheck },
          { title: "متكامل مع وحدات ASNA AVL الأساسية", desc: "يعمل بسلاسة مع أنظمة التتبع والصيانة والتأجير والفحص.", icon: Puzzle }
        ]
      },
      faq: {
        title: "الأسئلة الشائعة",
        items: [
          {
            question: "هل يمكنني إرسال رسائل إلى السائقين حتى لو لم يكونوا يستخدمون التطبيق؟",
            answer: "نعم، تدعم المراسلة في ASNA AVL الرسائل القصيرة وواتساب للسائقين الذين لم يسجلوا الدخول إلى التطبيق."
          },
          {
            question: "هل يتم تخزين اتصالاتي بشكل آمن؟",
            answer: "يتم تشفير جميع الرسائل وأرشفتها بشكل آمن ويمكن تصديرها للامتثال أو المراجعة."
          },
          {
            question: "هل يمكنني أتمتة التنبيهات بناءً على أحداث الأسطول؟",
            answer: "بالتأكيد - قم بتشغيل الرسائل للصيانة والأعطال والتغييرات والوصول والمزيد."
          }
        ]
      },
      finalCta: {
        title: "هل أنت مستعد لاتصالات أسطول فورية وموثوقة؟",
        cta: "جرب النظام الآن"
      }
    },
    en: {
      hero: {
        title: "Instant and Reliable Communication for Your Fleet",
        subtitle: "Coordinate, report, and respond — ASNA AVL's messaging platform connects teams, drivers, and customers in real-time.",
        cta: "Try the System Now",
        book: "Book a Demo",
      },
      overview: {
        title: "Transform Fleet Communications",
        description: "ASNA AVL's messaging module changes the way operational communications are managed. Instantly connect with drivers, managers, technicians, and customers through a unified and secure platform working via SMS, WhatsApp, Email, and in-app alerts. No more missed calls, delayed notifications, or message confusion — just timely, traceable, and actionable communications."
      },
      capabilities: {
        title: "Core Capabilities",
        items: [
          { 
            title: "Multi-channel Messaging", 
            desc: "Send and receive messages via SMS, WhatsApp, Email, or the ASNA AVL app - all from a single dashboard.", 
            icon: MessageSquare,
            colorClass: "bg-blue-50 text-blue-600",
            features: ["Connect with drivers and teams instantly, wherever they are."]
          },
          { 
            title: "Automated & Auto-triggered Alerts", 
            desc: "Set up automatic notifications for critical events: route changes, accidents, vehicle breakdowns, scheduled maintenance, or contract stages.", 
            icon: Bell,
            colorClass: "bg-purple-50 text-purple-600",
            features: ["Define who receives which alerts based on roles, routes, or asset assignments."]
          },
          { 
            title: "Role-Based Communication", 
            desc: "Target messages to individuals, teams, branches, or custom groups.", 
            icon: Users,
            colorClass: "bg-green-50 text-green-600",
            features: ["Filter conversations by user, vehicle, project, or job status for quick tracking."]
          },
          { 
            title: "Supported Operational Workflows", 
            desc: "Share instructions, confirmations, or urgent actions linked to trips, jobs, inspections, or compliance requirements.", 
            icon: Workflow,
            colorClass: "bg-orange-50 text-orange-600",
            features: ["Two-way messaging: confirm receipt, get responses, approve actions, or upload photo evidence."]
          }
        ]
      },
      security: {
        title: "Security & Integration",
        items: [
          { title: "Data Encryption at Rest and in Transit", desc: "Enterprise-level security ensures all communications remain protected and compliant.", icon: Lock },
          { title: "Role-Based Access Controls", desc: "Secure messaging dashboards with granular permissions for different user roles.", icon: ShieldCheck },
          { title: "Integrated with Core ASNA AVL Modules", desc: "Works seamlessly with tracking, maintenance, rental, and inspection systems.", icon: Puzzle }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "Can I send messages to drivers even if they don't use the app?",
            answer: "Yes, ASNA AVL messaging supports SMS and WhatsApp for drivers who haven't logged into the app."
          },
          {
            question: "Is my communication stored securely?",
            answer: "All messages are encrypted and archived securely and can be exported for compliance or review."
          },
          {
            question: "Can I automate alerts based on fleet events?",
            answer: "Certainly - trigger messages for maintenance, breakdowns, changes, arrivals, and more."
          }
        ]
      },
      finalCta: {
        title: "Ready for Instant and Reliable Fleet Communications?",
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
        bookText={activeContent.hero.book}
        onCtaClick={openDemoModal}
        imageSrc="https://picsum.photos/seed/communication-hero/800/600"
        isAr={isAr}
        language={language}
      />

      <section className="py-24 bg-white text-secondary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionHeader
            title={activeContent.overview.title}
            description={activeContent.overview.description}
            centered
            dark
          />
        </div>
      </section>

      <section className="py-24 bg-gray-50 text-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title={activeContent.capabilities.title}
            centered
            dark
          />
          <CommunicationCapabilitiesGrid items={activeContent.capabilities.items} />
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <CommunicationSecuritySection 
            title={activeContent.security.title}
            items={activeContent.security.items}
            isAr={isAr}
          />
        </div>
      </section>

      <section className="py-24 bg-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeader
            title={activeContent.faq.title}
            centered
          />
          <CommunicationFAQ items={activeContent.faq.items} />
        </div>
      </section>

      <FinalCTA
        title={activeContent.finalCta.title}
        ctaText={activeContent.finalCta.cta}
        onCtaClick={openDemoModal}
      />

      <Footer />
    </main>
  );
}
