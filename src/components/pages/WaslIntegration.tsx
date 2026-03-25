"use client";

import { 
  FileText, 
  UserCheck, 
  Scale, 
  Cpu, 
  ShieldCheck, 
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WaslHeroForm } from "@/components/sections/WaslHeroForm";
import { WaslRequirementsGrid } from "@/components/sections/WaslRequirementsGrid";
import { WaslHowWeHelp } from "@/components/sections/WaslHowWeHelp";
import { WaslFAQ } from "@/components/sections/WaslFAQ";
import { AccreditationSection } from "@/components/shared/AccreditationSection";

export default function WaslIntegrationPage() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const content = {
    ar: {
      hero: {
        title: "التسجيل في منصة وصل لإصدار كرت التشغيل للشركات",
        subtitle: "تجنّب غرامات هيئة النقل وإيقاف تشغيل المركبات، وحقّق الامتثال بأجهزة تتبع معتمدة",
        formTitle: "املأ الاستمارة التالية وسيتم التواصل معك خلال دقائق",
        form: {
          name: "الاسم الكامل",
          company: "اسم الشركة",
          email: "البريد الإلكتروني",
          phone: "رقم الهاتف",
          vehicles: "عدد المركبات في وصل",
          submit: "احصل على ربط فوري مع منصة وصل",
          disclaimer: "بإرسالك، فإنك توافق على شروط الخدمة وسياسة الخصوصية الخاصة بنا"
        }
      },
      requirements: {
        title: "متطلبات التسجيل في منصة وصل",
        subtitle: "التسجيل في منصة وصل وإصدار كرت التشغيل يتطلب مستندات ومتطلبات تقنية محددة",
        items: [
          { title: "سجل تجاري", icon: FileText },
          { title: "ترخيص مزاولة النشاط من هيئة النقل", icon: ShieldCheck },
          { title: "بيانات المركبة والسائق", icon: UserCheck },
          { title: "حساس وزن للشاحنات الثقيلة", icon: Scale },
          { title: "جهاز تتبع مع نظام تتبع معتمد من هيئة النقل", icon: Cpu }
        ]
      },
      howWeHelp: {
        title: "كيف يساعدك فليتو لتتمكن من إصدار كرت التشغيل",
        subtitle: "فليتو شركة تتبع مركبات وإدارة أسطول حاصلة على رخصة وصل. عند طلبك خدمة التسجيل في منصة وصل، ستحصل خلال أقل من 24 ساعة على:",
        items: [
          "تركيب جهاز تتبع متقدم",
          "تكامل كامل مع منصة وصل",
          "تجربة التتبع عبر نظام تتبع المركبات مع ضمان سلاسة مرور البيانات عبر منصة وصل",
          "تحقيق كافة متطلبات إصدار كرت التشغيل"
        ]
      },
      accreditation: {
        title: "فليتو معتمدة من قبل",
        logos: [
          "https://picsum.photos/seed/tga/200/100",
          "https://picsum.photos/seed/wasl/200/100",
          "https://picsum.photos/seed/tamm/200/100",
          "https://picsum.photos/seed/moi/200/100"
        ]
      },
      faq: {
        title: "الأسئلة الشائعة",
        items: [
          {
            question: "هل سأحصل على الربط مع منصة وصل خلال اليوم؟",
            answer: "نعم، يستغرق التكامل مع وصل من 6 إلى 24 ساعة"
          },
          {
            question: "هل يمكنني التسجيل في منصة وصل وإن كنت أملك جهاز تتبع؟",
            answer: "نعم، تركيب جهاز التتبع جزء من الخدمة الشاملة وليس إلزامياً إن كانت المركبة مزودة بجهاز تتبع. وإن رغبت بالترقية لجهاز أفضل، يساعدك الفريق الفني في اختيار الجهاز المناسب"
          },
          {
            question: "هل سأضمن تحقيق أهلية المركبة على منصة وصل؟",
            answer: "نعم، نُجري اختبار التتبع ونتأكد من إرسال البيانات عبر منصة وصل وتحقيق الامتثال لنظام التتبع"
          }
        ]
      }
    },
    en: {
      hero: {
        title: "Registration in WASL Platform to Issue Operating Cards for Companies",
        subtitle: "Avoid Transport General Authority fines and vehicle suspension, and achieve compliance with certified tracking devices",
        formTitle: "Fill out the following form and we will contact you within minutes",
        form: {
          name: "Full Name",
          company: "Company Name",
          email: "Email Address",
          phone: "Phone Number",
          vehicles: "Number of Vehicles in WASL",
          submit: "Get Instant Integration with WASL Platform",
          disclaimer: "By submitting, you agree to our Terms of Service and Privacy Policy"
        }
      },
      requirements: {
        title: "WASL Platform Registration Requirements",
        subtitle: "Registering in WASL and issuing an operating card requires specific documents and technical requirements",
        items: [
          { title: "Commercial Register", icon: FileText },
          { title: "Activity License from TGA", icon: ShieldCheck },
          { title: "Vehicle and Driver Data", icon: UserCheck },
          { title: "Weight Sensor for Heavy Trucks", icon: Scale },
          { title: "Tracking Device with TGA Certified System", icon: Cpu }
        ]
      },
      howWeHelp: {
        title: "How Fleetoo Helps You Issue Your Operating Card",
        subtitle: "Fleetoo is a vehicle tracking and fleet management company licensed by WASL. When you request WASL registration service, you will receive within less than 24 hours:",
        items: [
          "Advanced tracking device installation",
          "Full integration with WASL platform",
          "Tracking experience via the system with guaranteed data flow through WASL",
          "Fulfilling all operating card issuance requirements"
        ]
      },
      accreditation: {
        title: "Fleetoo is Certified By",
        logos: [
          "https://picsum.photos/seed/tga/200/100",
          "https://picsum.photos/seed/wasl/200/100",
          "https://picsum.photos/seed/tamm/200/100",
          "https://picsum.photos/seed/moi/200/100"
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "Will I get WASL integration within the same day?",
            answer: "Yes, integration with WASL takes between 6 to 24 hours"
          },
          {
            question: "Can I register in WASL even if I already own a tracking device?",
            answer: "Yes, tracking device installation is part of the comprehensive service but not mandatory if the vehicle is already equipped. If you wish to upgrade, our technical team will help you choose the right device"
          },
          {
            question: "Will I ensure vehicle eligibility on the WASL platform?",
            answer: "Yes, we conduct tracking tests and ensure data is sent through WASL to achieve compliance with the tracking system"
          }
        ]
      }
    }
  };

  const activeContent = isAr ? content.ar : content.en;

  return (
    <main className="min-h-screen bg-secondary text-white">
      <Navbar />
      
      <WaslHeroForm 
        title={activeContent.hero.title}
        subtitle={activeContent.hero.subtitle}
        formTitle={activeContent.hero.formTitle}
        form={activeContent.hero.form}
        isAr={isAr}
      />

      <WaslRequirementsGrid 
        title={activeContent.requirements.title}
        subtitle={activeContent.requirements.subtitle}
        items={activeContent.requirements.items}
      />

      <WaslHowWeHelp 
        title={activeContent.howWeHelp.title}
        subtitle={activeContent.howWeHelp.subtitle}
        items={activeContent.howWeHelp.items}
      />

      <AccreditationSection 
        title={activeContent.accreditation.title}
        logos={activeContent.accreditation.logos}
      />

      <WaslFAQ 
        title={activeContent.faq.title}
        items={activeContent.faq.items}
      />

      <Footer />
    </main>
  );
}
