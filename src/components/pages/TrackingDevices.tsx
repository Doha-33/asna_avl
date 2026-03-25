"use client";

import { useLanguage } from "@/components/LanguageContext";
import { useDemoModal } from "@/components/DemoModalContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { TrackingHeroFeatures } from "@/components/sections/TrackingHeroFeatures";
import { TrackingTabsSection } from "@/components/sections/TrackingTabsSection";
import { TrackingManufacturersFilter } from "@/components/sections/TrackingManufacturersFilter";
import { TrackingDeviceGrid } from "@/components/sections/TrackingDeviceGrid";
import { 
  CheckCircle2, 
  Wrench, 
  Search, 
  Headphones, 
  Map as MapIcon, 
  Cpu, 
  Filter,
  X,
  Smartphone,
  Bell,
  BarChart3,
  Link as LinkIcon,
  Check,
  Zap
} from "lucide-react";
import { useState } from "react";

export default function TrackingDevicesPage() {
  const { language } = useLanguage();
  const { openDemoModal } = useDemoModal();
  const isAr = language === "ar";
  const [activeTab, setActiveTab] = useState<"system" | "devices">("system");
  const [selectedManufacturer, setSelectedManufacturer] = useState<string | null>(null);

  const content = {
    ar: {
      hero: {
        title: "أجهزة تتبع السيارات",
        subtitle: "احصل على افضل اجهزة تتبع السيارات مع نظام تتبع على جوالك",
        features: [
          { title: "تمتلك أجهزة تتبع السيارات؟", desc: "تركيب مجاني عند طلب نظام فليتو", icon: Wrench },
          { title: "تبحث عن أجهزة تتبع للأسطول؟", desc: "ضمان سنتين على الأجهزة وتركيب شامل للمركبات مع نظام التتبع", icon: Search },
          { title: "بعد التركيب؟", desc: "تدريب فريقك على نظام التتبع ودعم فني محلي 24/7", icon: Headphones },
        ]
      },
      tabs: {
        system: "نظام تتبع المركبات",
        devices: "أجهزة تتبع معتمدة"
      },
      systemTab: {
        title: "إمتلك منظومة تتبع كاملة للمركبات",
        items: [
          { title: "سجلات الرحلات", icon: MapIcon },
          { title: "تنبيهات المخالفات على الجوال", icon: Bell },
          { title: "تقارير أداء فورية", icon: BarChart3 }
        ],
        cta: "إحصل على عرض السعر"
      },
      devicesTab: {
        title: "إمتلك منظومة تتبع كاملة للمركبات",
        items: [
          { title: "المساعدة في إختيار جهاز التتبع", icon: LinkIcon },
          { title: "التسجيل في منصة وصل", icon: CheckCircle2 },
          { title: "تركيب جهاز التتبع و تجربة الاداء", icon: Wrench }
        ],
        cta: "إحصل على عرض السعر"
      },
      manufacturers: {
        title: "تصفية بواسطة المصنع",
        clear: "مسح التصفية",
        items: [
          { name: "Jimi IoT", logo: "https://picsum.photos/seed/jimi/100/100" },
          { name: "Seeworld Technology", logo: "https://picsum.photos/seed/seeworld/100/100" },
          { name: "Tkstar", logo: "https://picsum.photos/seed/tkstar/100/100" },
          { name: "Teltonika", logo: "https://picsum.photos/seed/teltonika/100/100" }
        ]
      },
      deviceList: [
        {
          image: "https://picsum.photos/seed/r12l/400/300",
          title: "gps للسيارات R12L",
          manufacturer: "Jimi IoT",
          tags: [
            { text: "تتبع الاسطول", color: "bg-primary text-white" },
            { text: "حماية وأمان", color: "bg-green-100 text-green-700" }
          ],
          features: ["10 تنبيهات أمنية", "تحكم عن بعد في امداد الوقود", "يعمل في درجات حرارة +70 درجة مئوية"]
        },
        {
          image: "https://picsum.photos/seed/s21l/400/300",
          title: "جي بي اس للسيارة S21L",
          manufacturer: "Jimi IoT",
          tags: [
            { text: "المركبات الخفيفة", color: "bg-primary text-white" },
            { text: "صغير", color: "bg-purple-100 text-purple-700" },
            { text: "بدون فني", color: "bg-blue-100 text-blue-700" }
          ],
          features: ["بطارية قابلة لإعادة الشحن", "صغير للمركبات الخفيفة", "يكتشف أي اهتزاز و حركة"]
        },
        {
          image: "https://picsum.photos/seed/p10/400/300",
          title: "جهاز تتبع P10",
          manufacturer: "Tkstar",
          tags: [
            { text: "تتبع الاصول", color: "bg-primary text-white" },
            { text: "بدون اسلاك", color: "bg-pink-100 text-pink-700" },
            { text: "للسيارات الشخصية", color: "bg-blue-100 text-blue-700" }
          ],
          features: ["تصميم لاسلكي قابل للتنقل", "مناسب لتتبع الحاويات والمخزون", "يمكن اخفاؤه في أي مكان داخل السيارة"]
        },
        {
          image: "https://picsum.photos/seed/fmc150/400/300",
          title: "جهاز GPS Teltonika FMC150",
          manufacturer: "Teltonika",
          tags: [
            { text: "الأفضل للأسطول", color: "bg-green-100 text-green-700" },
            { text: "ذكي", color: "bg-pink-100 text-pink-700" }
          ],
          features: ["سرعة نقل البيانات عبر 4G LTE Cat 1", "دقة موقع حتى 2.5 متر", "تشخيص متقدم للمركبات"]
        },
        {
          image: "https://picsum.photos/seed/gps-yl/400/300",
          title: "جهاز تتبع GPS",
          manufacturer: "Seeworld Technology",
          tags: [
            { text: "تتبع التوصيل", color: "bg-primary text-white" },
            { text: "مقاومة المطر والأتربة", color: "bg-blue-100 text-blue-700" },
            { text: "دبابات", color: "bg-purple-100 text-purple-700" }
          ],
          features: ["انذار خارجي لإيجاد المركبة في الزحام", "يناسب مناخ السعودية", "تتبع موقع مزدوج GNSS وGPS"]
        },
        {
          image: "https://picsum.photos/seed/r56l/400/300",
          title: "جهاز تتبع السيارات R56L",
          manufacturer: "Jimi IoT",
          tags: [
            { text: "تتبع المركبات", color: "bg-primary text-white" },
            { text: "منفذ OBD-II", color: "bg-blue-100 text-blue-700" },
            { text: "سهل التركيب", color: "bg-purple-100 text-purple-700" }
          ],
          features: ["تستطيع تركيبه بنفسك", "يخزن السجلات حتى 6 شهور", "تتبع GPS مع الأقمار الصناعية"]
        }
      ],
      finalCta: {
        title: "هل أنت مستعد لاتصالات أسطول فورية وموثوقة؟",
        cta: "جرب النظام الآن"
      }
    },
    en: {
      hero: {
        title: "Vehicle Tracking Devices",
        subtitle: "Get the best vehicle tracking devices with a tracking system on your mobile",
        features: [
          { title: "Already have tracking devices?", desc: "Free installation when ordering Fleetoo system", icon: Wrench },
          { title: "Looking for fleet tracking devices?", desc: "Two-year warranty on devices and comprehensive installation for vehicles with the tracking system", icon: Search },
          { title: "After installation?", desc: "Training your team on the tracking system and 24/7 local technical support", icon: Headphones },
        ]
      },
      tabs: {
        system: "Fleet Tracking System",
        devices: "Certified Tracking Devices"
      },
      systemTab: {
        title: "Own a Complete Vehicle Tracking Ecosystem",
        items: [
          { title: "Trip Logs", icon: MapIcon },
          { title: "Mobile Violation Alerts", icon: Bell },
          { title: "Instant Performance Reports", icon: BarChart3 }
        ],
        cta: "Get a Quote"
      },
      devicesTab: {
        title: "Own a Complete Vehicle Tracking Ecosystem",
        items: [
          { title: "Assistance in Choosing Tracking Device", icon: LinkIcon },
          { title: "Registration in WASL Platform", icon: CheckCircle2 },
          { title: "Tracking Device Installation & Performance Test", icon: Wrench }
        ],
        cta: "Get a Quote"
      },
      manufacturers: {
        title: "Filter by Manufacturer",
        clear: "Clear Filter",
        items: [
          { name: "Jimi IoT", logo: "https://picsum.photos/seed/jimi/100/100" },
          { name: "Seeworld Technology", logo: "https://picsum.photos/seed/seeworld/100/100" },
          { name: "Tkstar", logo: "https://picsum.photos/seed/tkstar/100/100" },
          { name: "Teltonika", logo: "https://picsum.photos/seed/teltonika/100/100" }
        ]
      },
      deviceList: [
        {
          image: "https://picsum.photos/seed/r12l/400/300",
          title: "GPS for Cars R12L",
          manufacturer: "Jimi IoT",
          tags: [
            { text: "Fleet Tracking", color: "bg-primary text-white" },
            { text: "Protection & Safety", color: "bg-green-100 text-green-700" }
          ],
          features: ["10 security alerts", "Remote fuel supply control", "Works in temperatures up to +70°C"]
        },
        {
          image: "https://picsum.photos/seed/s21l/400/300",
          title: "Car GPS S21L",
          manufacturer: "Jimi IoT",
          tags: [
            { text: "Light Vehicles", color: "bg-primary text-white" },
            { text: "Small", color: "bg-purple-100 text-purple-700" },
            { text: "No Technician Needed", color: "bg-blue-100 text-blue-700" }
          ],
          features: ["Rechargeable battery", "Small for light vehicles", "Detects any vibration and movement"]
        },
        {
          image: "https://picsum.photos/seed/p10/400/300",
          title: "Tracking Device P10",
          manufacturer: "Tkstar",
          tags: [
            { text: "Asset Tracking", color: "bg-primary text-white" },
            { text: "Wireless", color: "bg-pink-100 text-pink-700" },
            { text: "Personal Cars", color: "bg-blue-100 text-blue-700" }
          ],
          features: ["Portable wireless design", "Suitable for container and inventory tracking", "Can be hidden anywhere inside the car"]
        },
        {
          image: "https://picsum.photos/seed/fmc150/400/300",
          title: "GPS Device Teltonika FMC150",
          manufacturer: "Teltonika",
          tags: [
            { text: "Best for Fleet", color: "bg-green-100 text-green-700" },
            { text: "Smart", color: "bg-pink-100 text-pink-700" }
          ],
          features: ["4G LTE Cat 1 data transfer speed", "Location accuracy up to 2.5 meters", "Advanced vehicle diagnostics"]
        },
        {
          image: "https://picsum.photos/seed/gps-yl/400/300",
          title: "GPS Tracking Device",
          manufacturer: "Seeworld Technology",
          tags: [
            { text: "Delivery Tracking", color: "bg-primary text-white" },
            { text: "Rain and Dust Resistant", color: "bg-blue-100 text-blue-700" },
            { text: "Motorcycles", color: "bg-purple-100 text-purple-700" }
          ],
          features: ["External alarm to find vehicle in traffic", "Fits Saudi climate", "Dual GNSS and GPS location tracking"]
        },
        {
          image: "https://picsum.photos/seed/r56l/400/300",
          title: "Car Tracking Device R56L",
          manufacturer: "Jimi IoT",
          tags: [
            { text: "Vehicle Tracking", color: "bg-primary text-white" },
            { text: "OBD-II Port", color: "bg-blue-100 text-blue-700" },
            { text: "Easy Installation", color: "bg-purple-100 text-purple-700" }
          ],
          features: ["Can be installed by yourself", "Stores logs up to 6 months", "GPS tracking with satellites"]
        }
      ],
      finalCta: {
        title: "Ready for Instant and Reliable Fleet Communications?",
        cta: "Try the System Now"
      }
    }
  };

  const activeContent = isAr ? content.ar : content.en;
  const filteredDevices = selectedManufacturer 
    ? activeContent.deviceList.filter(d => d.manufacturer === selectedManufacturer)
    : activeContent.deviceList;

  return (
    <main className="min-h-screen bg-secondary text-white">
      <Navbar />
      
      <HeroSection 
        title={activeContent.hero.title}
        subtitle={activeContent.hero.subtitle}
        isAr={isAr}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-20 mb-24">
        <TrackingHeroFeatures items={activeContent.hero.features} />
      </div>

      <section className="py-24 bg-primary/20">
        <TrackingTabsSection 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={activeContent.tabs}
          systemTab={activeContent.systemTab}
          devicesTab={activeContent.devicesTab}
          isAr={isAr}
          onCtaClick={openDemoModal}
        />
      </section>

      <section className="py-24 bg-white text-secondary">
        <TrackingManufacturersFilter 
          title={activeContent.manufacturers.title}
          clearText={activeContent.manufacturers.clear}
          items={activeContent.manufacturers.items}
          selectedManufacturer={selectedManufacturer}
          setSelectedManufacturer={setSelectedManufacturer}
        />
      </section>

      <section className="py-24 bg-gray-50">
        <TrackingDeviceGrid devices={filteredDevices} />
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

