"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useDemoModal } from "@/components/DemoModalContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Wifi,
  QrCode,
  Smartphone,
  FileSpreadsheet,
  Route,
  AlertTriangle,
  History
} from "lucide-react";

// Shared Components
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureSection } from "@/components/shared/FeatureSection";
import { FAQSection } from "@/components/shared/FAQSection";

// Section Components
import { FuelDocumentation } from "@/components/sections/fuel-management/FuelDocumentation";
import { FuelCompatibility } from "@/components/sections/fuel-management/FuelCompatibility";
import { FuelSteps } from "@/components/sections/fuel-management/FuelSteps";
import { FuelMoreThanManagement } from "@/components/sections/fuel-management/FuelMoreThanManagement";
import { FuelMap } from "@/components/sections/fuel-management/FuelMap";

export default function FuelManagementPage() {
  const { language } = useLanguage();
  const { openDemoModal } = useDemoModal();
  const isAr = language === "ar";

  const content = {
    ar: {
      hero: {
        title: "نظام إدارة الوقود للشركات شفافية تكشف استهلاكك بطاقات البنزين",
        subtitle: "تتبع موقع تعبئة البنزين وتفاصيل استخدام شريحة البنزين لكل مركبة وسائق.",
        cta: "جرب النظام الآن",
        book: "احجز عرضاً تجريبياً",
        image: "https://picsum.photos/seed/fuel-hero/800/600"
      },
      documentation: {
        title: "توثيق كل صرفية بنزين وكل تعبئة وكل تفريغ",
        description: "مراقبة كميات البنزين وفواتير محطات الوقود فقط دون ربطها مع أداء المركبات وهوية المستخدمين تجعل تحديد الهدر الفعلي وكفاءة التشغيل شبه مستحيل! لذلك نظام إدارة الوقود للأسطول يربط تلقائياً سجلات الرحلات ويسهل لك:",
        features: [
          "معرفة السائق، موقع المركبة وتوقيت عملية تعبئة الوقود",
          "اكتشاف أسباب الاستهلاك المرتفع مبكراً",
          "منع التلاعب في بطاقات البنزين عبر شروط الاستخدام والتعبئة"
        ]
      },
      compatibility: {
        title: "يعمل على جميع شرائح البنزين في المملكة",
        items: [
          { title: "بطاقات RFID", icon: Wifi },
          { title: "بطاقات QR", icon: QrCode },
          { title: "شرائح NFC", icon: Smartphone }
        ]
      },
      efficiency: {
        title: "ارفع كفاءة التشغيل حتى 30%",
        subtitle: "تتبع مشتريات الوقود وراقب كل ريال",
        description: "تمكن من إدارة الوقود عبر البطاقات أو التعبئة اليدوية واحفظ كل المعاملات في نظام فواتير يتوافق مع ZATCA تسهيلاً للمراجعة وضمان الامتثال",
        features: [
          "ادمج كل معاملات الوقود في سجل واحد",
          "تأكد من تعبئة الوقود اليدوية عبر صور الخزان قبل وبعد",
          "تتبع كل التفاصيل من موقع محطة البنزين وحتى تكلفة اللتر الواحد"
        ],
        cta: "جرب النظام الآن",
        image: "https://picsum.photos/seed/fuel-efficiency/800/600"
      },
      analysis: {
        title: "حقق تخفيض التكاليف مع تقارير التحليل",
        description: "سهّل التدقيق حول مصروفات البنزين وارفع مستوى الثقة مع ملفات شاملة لكل تعامل على مستوى الأسطول والفروع والموردين",
        features: [
          "اكتشف المركبات منخفضة الكفاءة عبر مراقبة الاستهلاك لكل كيلومتر",
          "حسن من أداء السائق مع تتبع تكاليف البنزين لكل مركبة يوماً بيوم",
          "تجنب محطات الوقود عالية التكلفة عبر تتبع أسعار كل مورد"
        ],
        cta: "جرب النظام الآن",
        image: "https://picsum.photos/seed/fuel-analysis/800/600"
      },
      customization: {
        title: "خصص بطاقات الوقود بذكاء",
        description: "تتيح لك بطاقات وقود ASNA AVL التحكم في صلاحيات الشراء ومراقبة المعاملات عن بعد، اجعل كل تزويد بالوقود آمن وضمن إطار سياسات الشركة",
        features: [
          "حدد شروط تعبئة الوقود عبر ASNA AVL لمنع المعاملات المشبوهة",
          "اربط كل بطاقة مع السائق والمركبة والرحلة وسهل على نفسك المتابعة",
          "تتبع تزويد الوقود عبر التنبيهات الفورية على جوالك من أي مكان"
        ],
        cta: "جرب النظام الآن",
        image: "https://picsum.photos/seed/fuel-cards/800/600"
      },
      steps: {
        title: "ابدأ مع نظام إدارة الوقود للأسطول في 4 خطوات فقط",
        items: [
          { step: "1", title: "إدخال شريحة البنزين", desc: "استخدام بطاقات ASNA AVL أو أي بطاقة وقود من مزود خارجي" },
          { step: "2", title: "التأكد من الصلاحيات", desc: "يراجع نظام ASNA AVL شروط التزود بالوقود مثل مستوى البنزين قبل السماح بشراءه" },
          { step: "3", title: "تتبع معاملات الوقود", desc: "ربط كمية الوقود مع هوية السائق ورقم المركبة وتتبع GPS لموقع التعبئة" },
          { step: "4", title: "إنشاء تقرير لكل مركبة", desc: "تزامن لحظي وإرسال بيانات كمية الوقود واسم المحطة وتكلفة اللتر الواحد" }
        ]
      },
      moreThanManagement: {
        title: "ليست إدارة وقود فقط .. بل تحسين وتوفير مستمر",
        items: [
          { title: "تقارير تلقائية للطباعة والمشاركة", icon: FileSpreadsheet },
          { title: "قياس كفاءة مسار كل مركبة", icon: Route },
          { title: "تنبيهات فورية لكميات الوقود أكثر من الحد المسموح", icon: AlertTriangle },
          { title: "حفظ إيصالات الوقود للمراجعات الشهرية", icon: History }
        ]
      },
      map: {
        title: "محطات وقود ASNA AVL المدعومة في السعودية"
      },
      faq: {
        title: "الأسئلة الشائعة",
        items: [
          {
            question: "ما هو نظام إدارة الوقود للأسطول؟",
            answer: "نظام إدارة الوقود للأسطول هو نظام تحكم وتتبع لحظي لاستهلاك الوقود لكل مركبة لتقليل تكاليف الوقود وتحسين المسارات. يمكنك النظام من إنشاء تقارير تحلل استخدام الوقود لمنع الهدر والسرقة."
          },
          {
            question: "هل يمكن ربط ASNA AVL مع بطاقات البنزين التي استخدمها؟",
            answer: "بالتأكيد، يدعم ASNA AVL جميع أنواع بطاقات الوقود المعتمدة في السعودية."
          },
          {
            question: "كيف يساعدني نظام ASNA AVL في تحديد سرقة الوقود أو سوء استخدامه؟",
            answer: "يتابع النظام تعاملات الوقود ويضع علامة على كل المشتريات خارج المسار أو من محطات غير معتمدة، وتصلك تنبيهات بذلك إلى جوالك."
          }
        ]
      },
      finalCta: {
        title: "راقب، تحكم، ووفّر على كل لتر",
        cta: "جرب النظام الآن"
      }
    },
    en: {
      hero: {
        title: "Fuel Management for Companies Transparency Reveals Your Gas Card Usage",
        subtitle: "Track fuel filling locations and gas chip usage details for every vehicle and driver.",
        cta: "Try the System Now",
        book: "Book a Demo",
        image: "https://picsum.photos/seed/fuel-hero/800/600"
      },
      documentation: {
        title: "Document Every Fuel Expense, Fill, and Discharge",
        description: "Monitoring fuel quantities and gas station invoices alone without linking them to vehicle performance and user identity makes identifying actual waste and operational efficiency nearly impossible! That's why our fleet fuel management system automatically links trip records and makes it easy for you to:",
        features: [
          "Know the driver, vehicle location, and timing of the refueling process",
          "Discover causes of high consumption early",
          "Prevent tampering with fuel cards through usage and filling conditions"
        ]
      },
      compatibility: {
        title: "Works on All Fuel Chips in the Kingdom",
        items: [
          { title: "RFID Cards", icon: Wifi },
          { title: "QR Cards", icon: QrCode },
          { title: "NFC Chips", icon: Smartphone }
        ]
      },
      efficiency: {
        title: "Increase Operational Efficiency by up to 30%",
        subtitle: "Track fuel purchases and monitor every riyal",
        description: "Manage fuel via cards or manual filling and save all transactions in a ZATCA-compliant invoicing system for easy auditing and guaranteed compliance.",
        features: [
          "Merge all fuel transactions into a single record",
          "Ensure manual refueling via tank photos before and after",
          "Track every detail from gas station location to cost per liter"
        ],
        cta: "Try the System Now",
        image: "https://picsum.photos/seed/fuel-efficiency/800/600"
      },
      analysis: {
        title: "Achieve Cost Reduction with Analysis Reports",
        description: "Simplify auditing of fuel expenses and raise confidence levels with comprehensive files for every transaction at the fleet, branch, and supplier levels.",
        features: [
          "Discover low-efficiency vehicles by monitoring consumption per kilometer",
          "Improve driver performance with day-to-day fuel cost tracking for each vehicle",
          "Avoid high-cost gas stations by tracking prices of each supplier"
        ],
        cta: "Try the System Now",
        image: "https://picsum.photos/seed/fuel-analysis/800/600"
      },
      customization: {
        title: "Customize Fuel Cards Intelligently",
        description: "ASNA AVL fuel cards allow you to control purchase permissions and monitor transactions remotely. Make every refueling secure and within company policy frameworks.",
        features: [
          "Set refueling conditions via ASNA AVL to prevent suspicious transactions",
          "Link each card with the driver, vehicle, and trip for easy follow-up",
          "Track refueling via instant alerts on your phone from anywhere"
        ],
        cta: "Try the System Now",
        image: "https://picsum.photos/seed/fuel-cards/800/600"
      },
      steps: {
        title: "Start with the Fleet Fuel Management System in Just 4 Steps",
        items: [
          { step: "1", title: "Insert Fuel Chip", desc: "Use ASNA AVL cards or any fuel card from an external provider" },
          { step: "2", title: "Verify Permissions", desc: "ASNA AVL system reviews refueling conditions like fuel level before allowing purchase" },
          { step: "3", title: "Track Fuel Transactions", desc: "Link fuel quantity with driver identity, vehicle number, and GPS tracking of the filling location" },
          { step: "4", title: "Create Report for Each Vehicle", desc: "Real-time synchronization and sending of fuel quantity, station name, and cost per liter data" }
        ]
      },
      moreThanManagement: {
        title: "Not Just Fuel Management .. But Continuous Improvement and Savings",
        items: [
          { title: "Automatic Reports for Printing and Sharing", icon: FileSpreadsheet },
          { title: "Measure Route Efficiency for Each Vehicle", icon: Route },
          { title: "Instant Alerts for Fuel Quantities Over the Allowed Limit", icon: AlertTriangle },
          { title: "Save Fuel Receipts for Monthly Audits", icon: History }
        ]
      },
      map: {
        title: "ASNA AVL Supported Fuel Stations in Saudi Arabia"
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "What is a fleet fuel management system?",
            answer: "A fleet fuel management system is a real-time control and tracking system for fuel consumption for each vehicle to reduce fuel costs and improve routes. The system enables you to create reports analyzing fuel use to prevent waste and theft."
          },
          {
            question: "Can ASNA AVL be linked with the fuel cards I use?",
            answer: "Certainly, ASNA AVL supports all types of approved fuel cards in Saudi Arabia."
          },
          {
            question: "How does the ASNA AVL system help me identify fuel theft or misuse?",
            answer: "The system monitors fuel transactions and flags all purchases off-route or from unapproved stations, and you receive alerts about this on your phone."
          }
        ]
      },
      finalCta: {
        title: "Monitor, Control, and Save on Every Liter",
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

      <FuelDocumentation 
        title={activeContent.documentation.title}
        description={activeContent.documentation.description}
        features={activeContent.documentation.features}
      />

      <FuelCompatibility 
        title={activeContent.compatibility.title}
        items={activeContent.compatibility.items}
      />

      <FeatureSection 
        title={activeContent.efficiency.subtitle}
        features={activeContent.efficiency.features}
        ctaText={activeContent.efficiency.cta}
        imageSrc={activeContent.efficiency.image}
        imageAlt={activeContent.efficiency.subtitle}
        onCtaClick={openDemoModal}
      />

      <FeatureSection 
        title={activeContent.analysis.title}
        features={activeContent.analysis.features}
        ctaText={activeContent.analysis.cta}
        imageSrc={activeContent.analysis.image}
        imageAlt={activeContent.analysis.title}
        reverse={true}
        onCtaClick={openDemoModal}
      />

      <FeatureSection 
        title={activeContent.customization.title}
        features={activeContent.customization.features}
        ctaText={activeContent.customization.cta}
        imageSrc={activeContent.customization.image}
        imageAlt={activeContent.customization.title}
        onCtaClick={openDemoModal}
      />

      <FuelSteps 
        title={activeContent.steps.title}
        items={activeContent.steps.items}
      />

      <FuelMoreThanManagement 
        title={activeContent.moreThanManagement.title}
        items={activeContent.moreThanManagement.items}
      />

      <FuelMap 
        title={activeContent.map.title}
        isAr={isAr}
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
