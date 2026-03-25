"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useDemoModal } from "@/components/DemoModalContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Zap, 
  ShieldCheck, 
  Box, 
  Cpu, 
  Truck,
  Building2,
  Car
} from "lucide-react";

// Shared Components
import { HeroSection } from "@/components/shared/HeroSection";
import { AccreditationSection } from "@/components/shared/AccreditationSection";
import { FeatureSection } from "@/components/shared/FeatureSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FAQSection } from "@/components/shared/FAQSection";

// Section Components
import { DevicesGrid } from "@/components/sections/fleet-tracking/DevicesGrid";
import { FleetTypesGrid } from "@/components/sections/fleet-tracking/FleetTypesGrid";
import { CapabilitiesList } from "@/components/sections/fleet-tracking/CapabilitiesList";
import { RealtimeDataSection } from "@/components/sections/fleet-tracking/RealtimeDataSection";
import { UpgradeSection } from "@/components/sections/fleet-tracking/UpgradeSection";

export default function FleetTrackingPage() {
  const { language } = useLanguage();
  const { openDemoModal } = useDemoModal();
  const isAr = language === "ar";

  const content = {
    ar: {
      hero: {
        title: "نظام تتبع المركبات يجمع سجلات الرحلات ويوثق أي استخدام للمركبة",
        subtitle: "تتبع الموقع لحظة بلحظة ليكون كل سائق في أمان كل مسار فعال، وكل مركبة موثوقة",
        cta: "احجز عرضاً تجريبياً",
        image: "https://picsum.photos/seed/map/800/600"
      },
      accreditation: {
        title: "معتمد من قبل",
      },
      safety: {
        title: "لتحقيق خطط السلامة وتأمين المركبات",
        description: "امتلك البيانات التي تجعل إدارتك قيادية تساهم في تدريب السائقين وحثهم على تجنب السرعة الزائدة، أو الفرامل المفاجئة",
        features: [
          "لكل سائق مسار يحتوي على وقت ونقطة حدوث أي مخالفة",
          "معلومات السائق من منصة تم : التفويض، المخالفات والحوادث",
          "تفاصيل رخصة السائق مع تنبيه بوقت انتهائها",
          "التنبيه بأي عطل وربطه بسجل المركبة والسائق"
        ],
        cta: "جرب النظام الآن",
        image: "https://picsum.photos/seed/safety/600/600"
      },
      noGuessing: {
        title: "لن تحتاج لتخمين أسباب مخالفات كل مركبة",
        desc: "في ادارة أكثر من 5 مركبات لا يمكنك حفظ مسار كل سيارة، ومتابعة سرعة كل سائق، و منع حدوث أي مخالفات أو قيادة متهورة، خاصة تحت ضغط العمل. نظام تتبع المركبات من ASNA AVL يصمم ملف شامل لكل رحلة يحتوي على سرعة السائق وبياناته، حالة تشغيل المركبة، وأي تجاوز أو مخالفة بالتكامل مع منصة 'تم'. تطمن في أي وقت بدون تفكير"
      },
      devices: {
        title: "أجهزة تتبع السيارات المتوفرة والمدعومة",
        items: [
          {
            title: "جهاز تتبع السيارات k30",
            tags: ["تتبع السيارات", "اسطول التأجير"],
            features: ["4 قياسات لسلوك السائق", "تركيب سهل عبر منفذ OBD-II", "تتبع فوري بدون انقطاع"],
            image: "https://picsum.photos/seed/k30/400/400"
          },
          {
            title: "gps للسيارات R12L",
            tags: ["تتبع الاسطول", "حماية وأمان"],
            features: ["10 تنبيهات أمنية", "تحكم عن بعد في امداد الوقود", "يعمل في درجات حرارة +70 درجة مئوية"],
            image: "https://picsum.photos/seed/r12l/400/400"
          },
          {
            title: "جهاز تعقب المركبات تيلتونيكا",
            tags: ["اسطول التوصيل", "دراجات نارية", "سيارات"],
            features: ["حجم صغير للاخفاء من التلاعب", "تركيب أقل من ساعة", "مراقبة سلوك السائق وتسجيله"],
            image: "https://picsum.photos/seed/teltonika/400/400"
          }
        ]
      },
      efficiency: {
        title: "لرفع كفاءة التشغيل بأقل تكلفة",
        description: "من مجرد تتبع الموقع إلى تتبع أداء كل مركبة وتوصيل كل شحنة.",
        features: [
          "وزع العمل على السائقين والفنيين بدون خسارة انتاجية",
          "تتبع عمل/توقف كل مركبة",
          "مدة الخمول والمسافة المقطوعة",
          "نسبة الوقود قبل وبعد كل رحلة"
        ],
        cta: "جرب النظام الآن",
        image: "https://picsum.photos/seed/efficiency/600/600"
      },
      fleetTypes: {
        title: "نظام تتبع المركبات من ASNA AVL لخدمة كل أنواع الأساطيل",
        items: [
          { title: "تتبع مركبات خدمات التوصيل", icon: Truck },
          { title: "تتبع سيارات التأجير", icon: Car },
          { title: "تتبع مركبات الشركات ذات الفروع", icon: Building2 }
        ]
      },
      capabilities: {
        title: "القدرات الأساسية",
        subtitle: "رؤية كاملة للأسطول مع ميزات المراقبة والتحكم الذكية المصممة للعمليات الحديثة",
        items: [
          {
            title: "سجل رحلات سابقة محفوظ",
            description: "انتقل من الادارة الدقيقة إلى الوضوح والثقة مع سهولة تحقيق التزام كل سائق ومركبة بالمسار",
            features: [
              "إمكانية تحديد منطقة جغرافية لكل مركبة",
              "تتبع دخول/خروج كل مركبة من السياج الجغرافي",
              "تنبيه بأي استخدام غير مصرح للمركبات المتوقفة"
            ],
            cta: "جرب النظام الآن",
            image: "https://picsum.photos/seed/geofence/800/600"
          }
        ]
      },
      realtime: {
        title: "نظام تتبع المركبات GPS يجدد بيانات التتبع كل ثانية",
        items: [
          { title: "تحكم كامل في المركبات عن بعد", icon: Zap },
          { title: "تكامل API مباشر مع منصة \"تم\"", icon: ShieldCheck },
          { title: "متوافق مع كل أجهزة تتبع المركبات في السعودية", icon: Box },
          { title: "لكل مركبة بيانات تتبع GPS وأجهزة IoT", icon: Cpu }
        ],
        image: "https://picsum.photos/seed/realtime/800/600"
      },
      upgrade: {
        title: "قم بترقية نظام تتبع مركبات أسطولك",
        options: [
          {
            title: "تمتلك أجهزة تتبع السيارات؟",
            subtitle: "طور ادارة اسطولك",
            features: ["تحكم عن بعد في المركبة", "تنبيهات الأعطال", "سجل مخالفات السائق", "وقت توقف المركبة", "نسبة الوقود المستهلكة", "دعم فني مخصص"],
            cta: "جرب النظام الآن",
            color: "bg-primary"
          },
          {
            title: "تحتاج أجهزة تتبع؟",
            subtitle: "حل متكامل يشمل نظام التتبع مع الاجهزة",
            features: ["دعم الفريق الفني في اختيار الجهاز", "تركيب جهاز التتبع", "المساعدة في إختيار جهاز التتبع", "التسجيل في منصة وصل", "الحصول على نظام التتبع"],
            cta: "إحصل على عرض السعر",
            color: "bg-secondary"
          }
        ]
      },
      faq: {
        title: "الأسئلة الشائعة",
        items: [
          {
            question: "هل يمكن دمج أجهزة تتبع المركبات الخاصة بأسطولك مع نظام تتبع ASNA AVL؟",
            answer: "نعم، يدعم نظام تتبع ASNA AVL جميع الأجهزة المعتمدة في السعودية."
          },
          {
            question: "هل بياناتي في أمان؟",
            answer: "يستخدم ASNA AVL خاصية التشفير بين الطرفين (end-to-end encrypted)، مع قدرتك على ضبط صلاحية وصول كل فرد من فريق العمل."
          },
          {
            question: "كيف يساعدك نظام تتبع ASNA AVL في حماية المركبات من السرقة؟",
            answer: "عبر خاصية ايقاف تشغيل المركبة عن بعد."
          },
          {
            question: "ماهو نظام تتبع المركبات GPS في السيارة؟",
            answer: "هو نظام مراقبة مكان السيارة أو المركبة، وسرعتها، وأي حركة لها باستخدام جهاز تتبع يجمع هذه البيانات عبر استقبال إشارات الأقمار الصناعية بتقنية GPS وتحويلها إلى معلومات واضحة عبر أنظمة التتبع مثل ASNA AVL."
          }
        ]
      }
    },
    en: {
      hero: {
        title: "Fleet Tracking System Collects Trip Logs and Documents Any Vehicle Use",
        subtitle: "Real-time location tracking to ensure every driver is safe, every route is efficient, and every vehicle is reliable",
        cta: "Book a Demo",
        image: "https://picsum.photos/seed/map/800/600"
      },
      accreditation: {
        title: "Accredited By",
      },
      safety: {
        title: "Achieve Safety Plans and Vehicle Insurance",
        description: "Own the data that makes your management leadership contribute to training drivers and urging them to avoid excessive speed or sudden braking",
        features: [
          "Each driver has a path containing the time and point of occurrence of any violation",
          "Driver information from Tamm platform: authorization, violations and accidents",
          "Driver's license details with an alert at its expiration time",
          "Alert for any malfunction and link it to the vehicle and driver record"
        ],
        cta: "Try the System Now",
        image: "https://picsum.photos/seed/safety/600/600"
      },
      noGuessing: {
        title: "No need to guess the reasons for each vehicle's violations",
        desc: "In managing more than 5 vehicles, you cannot save the path of every car, monitor the speed of every driver, and prevent any violations or reckless driving, especially under work pressure. ASNA AVL's vehicle tracking system designs a comprehensive file for each trip containing the driver's speed and data, the vehicle's operating status, and any violation in integration with the 'Tamm' platform. Rest assured at any time without thinking."
      },
      devices: {
        title: "Available and Supported Car Tracking Devices",
        items: [
          {
            title: "k30 Car Tracking Device",
            tags: ["Car Tracking", "Rental Fleet"],
            features: ["4 driver behavior measurements", "Easy installation via OBD-II port", "Uninterrupted real-time tracking"],
            image: "https://picsum.photos/seed/k30/400/400"
          },
          {
            title: "R12L GPS for Cars",
            tags: ["Fleet Tracking", "Safety & Security"],
            features: ["10 security alerts", "Remote fuel supply control", "Operates in temperatures up to +70°C"],
            image: "https://picsum.photos/seed/r12l/400/400"
          },
          {
            title: "Teltonika Vehicle Tracker",
            tags: ["Delivery Fleet", "Motorcycles", "Cars"],
            features: ["Small size to hide from tampering", "Installation in less than an hour", "Driver behavior monitoring and recording"],
            image: "https://picsum.photos/seed/teltonika/400/400"
          }
        ]
      },
      efficiency: {
        title: "To Increase Operational Efficiency at the Lowest Cost",
        description: "From just tracking location to tracking the performance of each vehicle and delivery of each shipment.",
        features: [
          "Distribute work to drivers and technicians without losing productivity",
          "Track work/stop of each vehicle",
          "Idle time and distance traveled",
          "Fuel percentage before and after each trip"
        ],
        cta: "Try the System Now",
        image: "https://picsum.photos/seed/efficiency/600/600"
      },
      fleetTypes: {
        title: "ASNA AVL Fleet Tracking System to Serve All Types of Fleets",
        items: [
          { title: "Delivery Services Tracking", icon: Truck },
          { title: "Rental Car Tracking", icon: Car },
          { title: "Corporate Branch Tracking", icon: Building2 }
        ]
      },
      capabilities: {
        title: "Core Capabilities",
        subtitle: "Full fleet visibility with smart monitoring and control features designed for modern operations",
        items: [
          {
            title: "Saved Past Trip History",
            description: "Move from micro-management to clarity and confidence with ease of ensuring every driver and vehicle adheres to the path",
            features: [
              "Ability to define a geographic zone for each vehicle",
              "Track entry/exit of each vehicle from the geofence",
              "Alert for any unauthorized use of parked vehicles"
            ],
            cta: "Try the System Now",
            image: "https://picsum.photos/seed/geofence/800/600"
          }
        ]
      },
      realtime: {
        title: "GPS Fleet Tracking System Renews Tracking Data Every Second",
        items: [
          { title: "Full Remote Vehicle Control", icon: Zap },
          { title: "Direct API Integration with \"Tamm\" Platform", icon: ShieldCheck },
          { title: "Compatible with all vehicle tracking devices in Saudi Arabia", icon: Box },
          { title: "GPS tracking data and IoT devices for each vehicle", icon: Cpu }
        ],
        image: "https://picsum.photos/seed/realtime/800/600"
      },
      upgrade: {
        title: "Upgrade Your Fleet Tracking System",
        options: [
          {
            title: "Already own tracking devices?",
            subtitle: "Develop your fleet management",
            features: ["Remote vehicle control", "Malfunction alerts", "Driver violation record", "Vehicle downtime", "Fuel consumption percentage", "Dedicated technical support"],
            cta: "Try the System Now",
            color: "bg-primary"
          },
          {
            title: "Need tracking devices?",
            subtitle: "Integrated solution including tracking system with devices",
            features: ["Technical team support in choosing the device", "Tracking device installation", "Assistance in choosing the tracking device", "Registration in WASL platform", "Obtain the tracking system"],
            cta: "Get a Quote",
            color: "bg-secondary"
          }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "Can your own vehicle tracking devices be integrated with the ASNA AVL tracking system?",
            answer: "Yes, the ASNA AVL tracking system supports all approved devices in Saudi Arabia."
          },
          {
            question: "Is my data safe?",
            answer: "ASNA AVL uses end-to-end encryption, with your ability to adjust the access permissions of each member of the work team."
          },
          {
            question: "How does the ASNA AVL tracking system help you protect vehicles from theft?",
            answer: "Through the remote vehicle shutdown feature."
          },
          {
            question: "What is the GPS vehicle tracking system in the car?",
            answer: "It is a system for monitoring the location of the car or vehicle, its speed, and any movement of it using a tracking device that collects this data by receiving GPS satellite signals and converting them into clear information through tracking systems such as ASNA AVL."
          }
        ]
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

      <AccreditationSection 
        title={activeContent.accreditation.title}
      />

      <FeatureSection 
        title={activeContent.safety.title}
        description={activeContent.safety.description}
        features={activeContent.safety.features}
        ctaText={activeContent.safety.cta}
        imageSrc={activeContent.safety.image}
        imageAlt={activeContent.safety.title}
        onCtaClick={openDemoModal}
      />

      <SectionHeader 
        title={activeContent.noGuessing.title}
        subtitle={activeContent.noGuessing.desc}
        className="py-24 bg-gray-50 text-secondary mb-0"
      />

      <DevicesGrid 
        title={activeContent.devices.title}
        items={activeContent.devices.items}
        language={language}
      />

      <FeatureSection 
        title={activeContent.efficiency.title}
        description={activeContent.efficiency.description}
        features={activeContent.efficiency.features}
        ctaText={activeContent.efficiency.cta}
        imageSrc={activeContent.efficiency.image}
        imageAlt={activeContent.efficiency.title}
        reverse={true}
        onCtaClick={openDemoModal}
      />

      <FleetTypesGrid 
        title={activeContent.fleetTypes.title}
        items={activeContent.fleetTypes.items}
      />

      <CapabilitiesList 
        title={activeContent.capabilities.title}
        subtitle={activeContent.capabilities.subtitle}
        items={activeContent.capabilities.items}
        openDemoModal={openDemoModal}
      />

      <RealtimeDataSection 
        title={activeContent.realtime.title}
        items={activeContent.realtime.items}
        image={activeContent.realtime.image}
      />

      <UpgradeSection 
        title={activeContent.upgrade.title}
        options={activeContent.upgrade.options}
        openDemoModal={openDemoModal}
      />

      <FAQSection 
        title={activeContent.faq.title}
        items={activeContent.faq.items}
      />

      <Footer />
    </main>
  );
}
