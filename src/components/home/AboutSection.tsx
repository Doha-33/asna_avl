"use client";

import { CheckCircle2, ShieldCheck, Truck, Wrench, Zap } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import Link from "next/link";

export const AboutSection = () => {
  const { language } = useLanguage();

  const whyChooseUs = [
    {
      title:
        language === "ar" ? "ضمان ذهبي خمس سنوات" : "5-Year Golden Guarantee",
      desc:
        language === "ar"
          ? "نقدم ضماناً شاملاً لمدة 5 سنوات على جميع أجهزتنا."
          : "We offer a comprehensive 5-year guarantee on all our devices.",
      icon: <ShieldCheck className="text-accent" />,
    },
    {
      title: language === "ar" ? "التركيب في موقعك" : "On-site Installation",
      desc:
        language === "ar"
          ? "فريقنا يصل إليك أينما كنت لتركيب الأجهزة باحترافية."
          : "Our team comes to you wherever you are to install devices professionally.",
      icon: <Truck className="text-accent" />,
    },
    {
      title:
        language === "ar" ? "استبدال برسم رمزي" : "Symbolic Replacement Fee",
      desc:
        language === "ar"
          ? "في حالة عطل الجهاز بعد الخمس سنوات يتم استبداله برسوم رمزية."
          : "In case of device failure after 5 years, it is replaced for a symbolic fee.",
      icon: <Zap className="text-accent" />,
    },
    {
      title: language === "ar" ? "سهولة النقل" : "Easy Transfer",
      desc:
        language === "ar"
          ? "يمكن نقل الجهاز من سيارة إلى سيارة أخرى بسهولة تامة."
          : "The device can be easily transferred from one car to another.",
      icon: <Wrench className="text-accent" />,
    },
  ];

  return (
    <section
      className="py-24 bg-secondary overflow-hidden"
      style={{
        backgroundImage: "url('/bg6.jpg')",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-start">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6">
              {language === "ar" ? "نبذة عنا" : "About Us"}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
              {language === "ar"
                ? "ASNA AVL هي شركة تكنولوجيا سعودية رائدة في حلول إدارة الأسطول"
                : "ASNA AVL is a leading Saudi technology company in fleet management solutions"}
            </h2>
            <div className="space-y-6 text-lg text-primary/70 leading-relaxed">
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

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">
                  +4,500
                </div>
                <div className="text-sm text-primary/60">
                  {language === "ar" ? "عميل يثق بنا" : "Trusted Clients"}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">
                  +18,000
                </div>
                <div className="text-sm text-primary/60">
                  {language === "ar" ? "جهاز مفعل" : "Active Devices"}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-accent/20 blur-[100px] rounded-full" />
            <img
              src="/map.png"
              alt="Saudi Arabia Map"
              className="relative z-10 w-full h-auto transition-all duration-700"
              referrerPolicy="no-referrer"
            />

            {/* Pulsing dots on map */}
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-accent rounded-full animate-ping z-20" />
            <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-accent rounded-full animate-ping z-20 delay-700" />
            <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-accent rounded-full animate-ping z-20 delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};
