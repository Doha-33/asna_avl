"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  Users,
  Globe,
  Award,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider, useLanguage } from "@/components/LanguageContext";
import { use } from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
const AboutContent = () => {
  const { language } = useLanguage();

  const stats = [
    {
      label: language === "ar" ? "المركبات المدارة" : "Managed Vehicles",
      value: "+18,000",
      icon: <Globe className="text-accent" />,
    },
    {
      label: language === "ar" ? "شركة تثق بنا" : "Companies Trust Us",
      value: "+4,500",
      icon: <Users className="text-accent" />,
    },
    {
      label:
        language === "ar"
          ? "متوافق مع الأنظمة السعودية"
          : "Saudi Regulations Compliant",
      value: "100%",
      icon: <ShieldCheck className="text-accent" />,
    },
    {
      label: language === "ar" ? "جاهزية التشغيل" : "Operational Readiness",
      value: "100%",
      icon: <Zap className="text-accent" />,
    },
  ];

  
  const StatCard = ({ stat, index }: { stat: any; index: number }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    useEffect(() => {
      if (inView) {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepValue = parseInt(stat.value.replace(/[^0-9]/g, "")) / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += stepValue;
          if (current >= parseInt(stat.value.replace(/[^0-9]/g, ""))) {
            setCount(parseInt(stat.value.replace(/[^0-9]/g, "")));
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }, [inView, stat.value]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="group relative">
          {/* Glow effect on hover - دائري */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg" />

          {/* Main card - دائري */}
          <div className="relative bg-white p-8 rounded-full w-64 h-64 mx-auto flex flex-col items-center justify-center hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 border border-transparent hover:border-accent/50">
            {/* Icon with stronger hover effect - دائري */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-accent/20 transition-all duration-300">
              <div className="group-hover:scale-110 group-hover:text-accent transition-all duration-300">
                {stat.icon}
              </div>
            </div>

            {/* Counter with number formatting */}
            <div className="text-4xl font-extrabold mb-2 group-hover:text-accent transition-colors duration-300">
              {inView
                ? stat.value.includes("+")
                  ? `${count}+`
                  : stat.value.includes("%")
                    ? `${count}%`
                    : stat.value.includes("K")
                      ? `${count}K`
                      : count
                : "0"}
            </div>

            {/* Label with hover effect */}
            <div className="text-gray-500 font-medium text-sm group-hover:text-accent/80 transition-colors duration-300 text-center px-4">
              {stat.label}
            </div>

            {/* Decorative ring - يظهر عند الهافر */}
            <div className="absolute inset-0 rounded-full border-2 border-accent/0 group-hover:border-accent/20 transition-all duration-300 scale-105" />
          </div>
        </div>
      </motion.div>
    );
  };
  return (
    <div className="min-h-screen bg-secondary text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen relative pt-58 pb-24 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/cover.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Decorative blur effect (optional - يمكنك إبقاؤه أو إزالته) */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8">
              {language === "ar" ? "نبذة عنا" : "About Us"}
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed">
              {language === "ar"
                ? "ASNA AVL هي شركة تكنولوجيا سعودية المنشأ تعمل على تحويل عمليات الأسطول والتنقل من خلال حلول SaaS ذكية وآمنة ومتوافقة محلياً"
                : "ASNA AVL is a Saudi-origin technology company working to transform fleet operations and mobility through smart, secure, and locally compliant SaaS solutions"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        className="py-15 bg-white"
        style={{
          backgroundImage: "url('/bg3.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              {language === "ar" ? "رؤيتنا" : "Our Vision"}
            </h2>
            <p className="text-xl text-primary/60">
              {language === "ar"
                ? "تمكين كل أسطول من التحرك بذكاء أكبر"
                : "Empowering every fleet to move smarter"}
            </p>
          </div>

          <div className=" p-10 rounded-[40px] text-center max-w-5xl mx-auto">
            <p className="text-2xl md:text-3xl font-medium text-secondary leading-relaxed">
              {language === "ar"
                ? "نؤمن بمستقبل تسهم فيه البيانات المتقدمة، والأتمتة، والعمليات المترابطة في تحقيق مستويات غير مسبوقة من السلامة والكفاءة والنمو للأساطيل في جميع أنحاء المنطقة"
                : "We believe in a future where advanced data, automation, and interconnected processes contribute to achieving unprecedented levels of safety, efficiency, and growth for fleets across the region"}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-10 bg-white"
        style={{
          backgroundImage: "url('/bg3.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            {language === "ar" ? "أرقامنا تتحدث" : "Our Numbers Speak"}
          </h2>
        </div>
        <div
          style={{ backgroundImage: "url('/back.jpeg')" }}
          className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 rounded-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-white via-primary/5 to-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating orbs */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-20 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, gray 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              {/* Glow effect behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-[48px] blur-xl opacity-0 group-hover:opacity-75 transition-all duration-500" />

              {/* Main Card */}
              <div className="relative glass-card p-12 rounded-[48px] border border-white/20 backdrop-blur-xl bg-gradient-to-br from-white/90 to-white/80 shadow-2xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative">
                  {/* Text Content */}
                  <div className="text-start flex-1">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 relative z-10">
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {language === "ar"
                          ? "في ASNA AVL، نحن لا نكتفي ببناء البرمجيات فحسب"
                          : "At ASNA AVL, we don't just build software"}
                      </span>
                      <br />
                      <span className="text-gray-800">
                        {language === "ar"
                          ? "بل نبني مستقبل إدارة الأساطيل للشركات في المملكة العربية السعودية ومنطقة الخليج"
                          : "we build the future of fleet management for companies in Saudi Arabia and the Gulf region"}
                      </span>
                    </h2>

                    {/* Trust indicators */}
                    <div className="flex items-center gap-6 mt-8">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-600">
                          {language === "ar"
                            ? "حلول متكاملة"
                            : "Integrated Solutions"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-accent"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-600">
                          {language === "ar"
                            ? "متوافق محلياً"
                            : "Locally Compliant"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button with creative design */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    {/* Button glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Button */}
                    <Link
                      href={`/${language}/pricing`}
                      className="relative flex items-center gap-3 bg-gradient-to-r from-accent to-primary text-white text-lg px-10 py-5 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 group/btn"
                    >
                      <span>
                        {language === "ar"
                          ? "جرب النظام الآن"
                          : "Try the System Now"}
                      </span>

                      {/* Arrow animation */}
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {language === "ar" ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          ) : (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          )}
                        </svg>
                      </motion.span>
                    </Link>

                    {/* Small floating badge */}
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-3 -right-3 bg-white rounded-full px-3 py-1 text-xs font-bold shadow-lg border border-accent/20"
                    >
                      {language === "ar" ? "مجاني للتجربة" : "Free Trial"}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Bottom decorative line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <AboutContent />;
}
