"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useDemoModal } from "@/components/DemoModalContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Lock,
  Users,
  Link2
} from "lucide-react";

// Shared Components
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureSection } from "@/components/shared/FeatureSection";
import { FAQSection } from "@/components/shared/FAQSection";

// Section Components
import { InspectionsSecurityGrid } from "@/components/sections/inspections/InspectionsSecurityGrid";

export default function InspectionsPage() {
  const { language } = useLanguage();
  const { openDemoModal } = useDemoModal();
  const isAr = language === "ar";

  const content = {
    ar: {
      hero: {
        title: "عمليات فحص أذكى أساطيل أكثر أماناً",
        subtitle: "رقمنة عمليات فحص المركبات وفحوصات الصيانة مع ASNA AVL - زيادة وقت التشغيل والامتثال والثقة التشغيلية إلى أقصى حد.",
        cta: "جرب النظام الآن",
        book: "احجز عرضاً تجريبياً",
        image: "https://picsum.photos/seed/inspections-hero/800/600"
      },
      capabilities: {
        title: "القدرات الأساسية",
        description: "تحوّل لك وحدة الفحص من ASNA AVL الفحوصات الروتينية والحاسمة للأسطول إلى عمليات رقمية وأكثر كفاءة. لتحصل على نماذج مخصصة، وتسجيل فوري للبيانات، وربط مباشر لنتائج الفحص بمهام الصيانة والامتثال العملية بدون أوراق، وبدون أعطال فائتة، وبدون تأخيرات في الاستجابة.",
      },
      forms: {
        title: "نماذج فحص رقمية قابلة للتخصيص",
        features: [
          "خصّص النماذج حسب نوع المركبة، أو احتياجات القطاع، أو سيناريو التشغيل",
          "أضف أو أزل أو عدّل نقاط الفحص في ثوانٍ",
          "أرفق الصور والملاحظات والتقييمات للحصول على رؤى شاملة"
        ],
        cta: "جرب النظام الآن",
        image: "https://picsum.photos/seed/forms/800/600"
      },
      access: {
        title: "الوصول الفوري عبر الجوال وسطح المكتب",
        features: [
          "ينجز الفنيون الفحوصات في الموقع باستخدام الهواتف أو الأجهزة اللوحية.",
          "تتم مزامنة النماذج فورًا مع لوحة تحكم ASNA AVL السحابية",
          "وضع غير متصل للمواقع البعيدة مع مزامنة تلقائية عند إعادة الاتصال"
        ],
        cta: "جرب النظام الآن",
        image: "https://picsum.photos/seed/mobile-access/800/600"
      },
      linking: {
        title: "ربط ذكي للمشكلات",
        features: [
          "تؤدي بيانات الفحص تلقائيًا إلى تشغيل مهام سير عمل الصيانة إذا تم العثور على أعطال",
          "ربط المشكلات مباشرة بتقارير السائق ورموز الأعطال (مثل OBD) وسجل الخدمة",
          "إشعار سريع للفرق الفنية لاتخاذ إجراءات عاجلة"
        ],
        cta: "جرب النظام الآن",
        image: "https://picsum.photos/seed/smart-linking/800/600"
      },
      security: {
        title: "الأمان والتكامل",
        items: [
          { title: "أمن البيانات", desc: "تشفير البيانات أثناء تخزينها ونقلها", icon: Lock },
          { title: "وصول مخصص حسب الدور", desc: "وصول مخصص للفنيين، والمديرين، والمدققين", icon: Users },
          { title: "تكامل سلس", desc: "يتكامل مع وحدات الصيانة والوقود والتتبع", icon: Link2 }
        ]
      },
      faq: {
        title: "الأسئلة الشائعة",
        items: [
          {
            question: "هل يمكنني تخصيص نماذج الفحص لأنواع مختلفة من المركبات؟",
            answer: "نعم، تسهل ASNA AVL تخصيص قوائم الفحص بالكامل لتناسب احتياجاتك."
          },
          {
            question: "ما الأجهزة المدعومة لإجراء الفحوصات؟",
            answer: "يمكن إجراء الفحوصات على أي جوال أو جهاز لوحي أو كمبيوتر يدعم الوصول عبر المتصفح."
          },
          {
            question: "هل ستكون بيانات الفحوصات الخاصة بي آمنة ومتاحة للتدقيق؟",
            answer: "بالتأكيد - جميع سجلات الفحوصات محفوظة بشكل آمن ومتاحة للاستخراج أو المراجعة في أي وقت."
          }
        ]
      },
      finalCta: {
        title: "هل أنت مستعد لنقل عمليات فحص أسطولك إلى العصر الرقمي؟",
        cta: "جرب النظام الآن"
      }
    },
    en: {
      hero: {
        title: "Smarter Inspections, Safer Fleets",
        subtitle: "Digitize vehicle inspections and maintenance checks with ASNA AVL - maximize uptime, compliance, and operational confidence.",
        cta: "Try the System Now",
        book: "Book a Demo",
        image: "https://picsum.photos/seed/inspections-hero/800/600"
      },
      capabilities: {
        title: "Core Capabilities",
        description: "ASNA AVL's inspection module transforms routine and critical fleet inspections into digital and more efficient processes. Get customized forms, instant data recording, and direct linking of inspection results to maintenance tasks and practical compliance without papers, missed breakdowns, or response delays.",
      },
      forms: {
        title: "Customizable Digital Inspection Forms",
        features: [
          "Customize forms by vehicle type, industry needs, or operating scenario",
          "Add, remove, or edit inspection points in seconds",
          "Attach photos, notes, and ratings for comprehensive insights"
        ],
        cta: "Try the System Now",
        image: "https://picsum.photos/seed/forms/800/600"
      },
      access: {
        title: "Instant Access via Mobile and Desktop",
        features: [
          "Technicians complete inspections on-site using phones or tablets.",
          "Forms are synced instantly with the ASNA AVL cloud dashboard",
          "Offline mode for remote locations with automatic sync when reconnected"
        ],
        cta: "Try the System Now",
        image: "https://picsum.photos/seed/mobile-access/800/600"
      },
      linking: {
        title: "Smart Issue Linking",
        features: [
          "Inspection data automatically triggers maintenance workflows if faults are found",
          "Link issues directly to driver reports, fault codes (like OBD), and service history",
          "Quick notification to technical teams for urgent action"
        ],
        cta: "Try the System Now",
        image: "https://picsum.photos/seed/smart-linking/800/600"
      },
      security: {
        title: "Security & Integration",
        items: [
          { title: "Data Security", desc: "Encrypt data during storage and transfer", icon: Lock },
          { title: "Role-Based Access", desc: "Customized access for technicians, managers, and auditors", icon: Users },
          { title: "Seamless Integration", desc: "Integrates with maintenance, fuel, and tracking modules", icon: Link2 }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "Can I customize inspection forms for different vehicle types?",
            answer: "Yes, ASNA AVL makes it easy to fully customize inspection checklists to suit your needs."
          },
          {
            question: "What devices are supported for inspections?",
            answer: "Inspections can be performed on any mobile, tablet, or computer that supports browser access."
          },
          {
            question: "Will my inspection data be secure and available for auditing?",
            answer: "Absolutely - all inspection records are kept securely and available for extraction or review at any time."
          }
        ]
      },
      finalCta: {
        title: "Ready to take your fleet inspection operations into the digital age?",
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

      <section className="py-24 bg-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">{activeContent.capabilities.title}</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            {activeContent.capabilities.description}
          </p>
        </div>
      </section>

      <FeatureSection 
        title={activeContent.forms.title}
        features={activeContent.forms.features}
        ctaText={activeContent.forms.cta}
        imageSrc={activeContent.forms.image}
        imageAlt={activeContent.forms.title}
        onCtaClick={openDemoModal}
      />

      <FeatureSection 
        title={activeContent.access.title}
        features={activeContent.access.features}
        ctaText={activeContent.access.cta}
        imageSrc={activeContent.access.image}
        imageAlt={activeContent.access.title}
        reverse={true}
        onCtaClick={openDemoModal}
      />

      <FeatureSection 
        title={activeContent.linking.title}
        features={activeContent.linking.features}
        ctaText={activeContent.linking.cta}
        imageSrc={activeContent.linking.image}
        imageAlt={activeContent.linking.title}
        onCtaClick={openDemoModal}
      />

      <InspectionsSecurityGrid 
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
