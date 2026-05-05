"use client";

import { CheckCircle2, ShieldCheck, Truck, Wrench, Zap } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

// Component for animated counter
const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "white" }}>
      +{count.toLocaleString()}{suffix}
    </div>
  );
};

export const AboutSection = () => {
  const { language } = useLanguage();

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-primary)",
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[100px] animate-pulse" style={{ backgroundColor: "var(--color-accent)", opacity: 0.15 }} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-[100px] animate-pulse delay-700" style={{ backgroundColor: "var(--color-accent)", opacity: 0.1 }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ backgroundColor: "var(--color-accent)", opacity: 0.08 }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left side content */}
          <div className="text-start">
            <div className="inline-block px-4 py-2 rounded-full font-bold text-sm mb-6 backdrop-blur-sm" style={{ backgroundColor: "var(--color-accent)", color: "white", opacity: 0.9 }}>
              {language === "ar" ? "نبذة عنا" : "About Us"}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight" style={{ color: "white" }}>
              {language === "ar"
                ? "ASNA AVL هي شركة تكنولوجيا سعودية رائدة في حلول إدارة الأسطول"
                : "ASNA AVL is a leading Saudi technology company in fleet management solutions"}
            </h2>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              <p>
                {language === "ar"
                  ? "تأسست ASNA AVL في عام 2018، وتختص في تتبع المركبات وتقنية المعلومات. نقدم حلول إدارة الأسطول المتكاملة التي تساعدك على متابعة مركباتك بكفاءة وتقليل الوقت والتكاليف، عبر منصة واحدة سهلة الاستخدام."
                  : "Founded in 2018, ASNA AVL specializes in vehicle tracking and information technology. We provide integrated fleet management solutions that help you monitor your vehicles efficiently and reduce time and costs, through a single, easy-to-use platform."}
              </p>
              <p>
                {language === "ar"
                  ? "لقد خدمنا أكثر من 4,500 عميل وندير 18,000 جهاز، ونحن معتمدون من هيئة الاتصالات، هيئة النقل العام، هيئة الغذاء والدواء، والنقل التعليمي والمتخصص."
                  : "We have served more than 4,500 clients and manage 18,000 devices. We are certified by the Communications Authority, the Public Transport Authority, the Food and Drug Authority, and educational and specialized transport."}
              </p>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(8px)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <AnimatedCounter target={4500} />
                <div className="text-sm" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                  {language === "ar" ? "عميل يثق بنا" : "Trusted Clients"}
                </div>
              </div>
              <div className="rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(8px)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <AnimatedCounter target={18000} />
                <div className="text-sm" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                  {language === "ar" ? "جهاز مفعل" : "Active Devices"}
                </div>
              </div>
            </div>

          </div>

          {/* Right side - Map with animations */}
          <div className="relative">
            <div className="absolute -inset-10 rounded-full blur-[100px] animate-pulse" style={{ backgroundColor: "var(--color-accent)", opacity: 0.2 }} />
            <div className="absolute -inset-20 rounded-full blur-[80px] animate-pulse delay-1000" style={{ backgroundColor: "var(--color-accent)", opacity: 0.1 }} />
            
            <img
              src="/map.png"
              alt="Saudi Arabia Map"
              className="relative z-10 w-full h-auto transition-all duration-700 drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />

            {/* Pulsing dots on map */}
            <div className="absolute top-1/2 left-1/2">
              <div className="relative">
                <div className="w-4 h-4 rounded-full animate-ping absolute" style={{ backgroundColor: "var(--color-accent)" }} />
                <div className="w-4 h-4 rounded-full animate-pulse absolute" style={{ backgroundColor: "var(--color-accent)" }} />
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
              </div>
            </div>
            
            <div className="absolute top-1/3 left-1/3">
              <div className="relative">
                <div className="w-3 h-3 rounded-full animate-ping absolute delay-300" style={{ backgroundColor: "var(--color-accent)" }} />
                <div className="w-3 h-3 rounded-full animate-pulse delay-300 absolute" style={{ backgroundColor: "var(--color-accent)" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
              </div>
            </div>
            
            <div className="absolute bottom-1/4 right-1/4">
              <div className="relative">
                <div className="w-3 h-3 rounded-full animate-ping absolute delay-700" style={{ backgroundColor: "var(--color-accent)" }} />
                <div className="w-3 h-3 rounded-full animate-pulse delay-700 absolute" style={{ backgroundColor: "var(--color-accent)" }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
              </div>
            </div>

            <div className="absolute top-2/3 right-1/3">
              <div className="relative">
                <div className="w-2 h-2 rounded-full animate-ping absolute delay-1000" style={{ backgroundColor: "var(--color-accent)" }} />
                <div className="w-2 h-2 rounded-full animate-pulse delay-1000 absolute" style={{ backgroundColor: "var(--color-accent)" }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};