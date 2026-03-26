"use client";

import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, Sparkles, Headphones } from "lucide-react";
import { useState, useEffect } from "react";
import { fetchSettings, Settings } from "@/lib/api";

export const ContactSection = () => {
  const { language } = useLanguage();
  const [settings, setSettings] = useState<Settings | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    question: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const loadSettings = async () => {
      const data = await fetchSettings();
      if (data) setSettings(data);
    };
    loadSettings();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const message = language === "ar" 
      ? `*طلب تواصل جديد من موقع ASNA AVL*\n\n*الاسم:* ${formData.name}\n*الهاتف:* ${formData.phone}\n*السؤال:* ${formData.question}\n\n*يرجى الرد على العميل في أقرب وقت*`
      : `*New Contact Request from ASNA AVL Website*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Question:* ${formData.question}\n\n*Please respond to the client as soon as possible*`;
    
    const whatsappNumber = settings?.whatsapp?.replace(/\D/g, '') || "201028757002";
    
    setTimeout(() => {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", question: "" });
      
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: language === "ar" ? "رقم الهاتف" : "Phone Number",
      value: settings?.phoneNumber || "+966 50 000 0000",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      hoverBg: "hover:bg-blue-50/80"
    },
    {
      icon: Mail,
      title: language === "ar" ? "البريد الإلكتروني" : "Email Address",
      value: "info@asnaavl.com",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      hoverBg: "hover:bg-indigo-50/80"
    },
    {
      icon: MapPin,
      title: language === "ar" ? "موقعنا" : "Our Location",
      value: language === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      hoverBg: "hover:bg-purple-50/80"
    },
    {
      icon: Clock,
      title: language === "ar" ? "ساعات العمل" : "Working Hours",
      value: language === "ar" ? "الأحد - الخميس: 9 ص - 6 م" : "Sun - Thu: 9 AM - 6 PM",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      hoverBg: "hover:bg-emerald-50/80"
    }
  ];

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* GIF Background - Light */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/bg.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Light Overlay for better readability on light background */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      </div>

      {/* Animated Particles - Light */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -100, -200],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section - Dark Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Headphones className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-accent">
              {language === "ar" ? "دعم فني على مدار الساعة" : "24/7 Support"}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
            {language === "ar" ? "تواصل معنا" : "Contact Us"}
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            {language === "ar" 
              ? "نحن هنا للإجابة على جميع استفساراتك ومساعدتك في اختيار الحل الأمثل لاحتياجاتك"
              : "We're here to answer all your questions and help you choose the best solution for your needs"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Section - Dark Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className={`relative p-6 rounded-2xl border border-primary/10 bg-white shadow-md hover:shadow-xl transition-all duration-300 ${info.hoverBg}`}>
                    <div className={`w-14 h-14 rounded-xl ${info.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`w-7 h-7 ${info.iconColor}`} />
                    </div>
                    <p className="text-xs font-semibold text-primary/50 uppercase tracking-wider mb-2">
                      {info.title}
                    </p>
                    <p className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Badges - Dark Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 border border-primary/10 shadow-md"
            >
              <h3 className="text-lg font-bold text-primary mb-4 text-center flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                {language === "ar" ? "لماذا تختار أسناافل؟" : "Why Choose ASNA AVL?"}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  language === "ar" ? "دعم فني 24/7" : "24/7 Technical Support",
                  language === "ar" ? "استجابة سريعة" : "Quick Response",
                  language === "ar" ? "حلول مخصصة" : "Customized Solutions",
                  language === "ar" ? "ضمان الجودة" : "Quality Guarantee"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-primary/70">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Section - Dark Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl border border-primary/10 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary to-accent p-6">
              <h3 className="text-2xl font-bold text-white text-center">
                {language === "ar" ? "أرسل لنا رسالة" : "Send Us a Message"}
              </h3>
              <p className="text-white/90 text-center text-sm mt-2">
                {language === "ar" 
                  ? "سنقوم بالرد عليك في أقرب وقت ممكن" 
                  : "We'll get back to you as soon as possible"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={`block text-sm font-semibold text-primary ${language === "ar" ? "text-right" : "text-left"}`}>
                    {language === "ar" ? "الاسم بالكامل" : "Full Name"} <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 bg-secondary/30 border border-primary/10 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-primary placeholder:text-primary/30"
                    placeholder={language === "ar" ? "أدخل اسمك الكامل" : "Enter your full name"}
                  />
                </div>
                <div className="space-y-2">
                  <label className={`block text-sm font-semibold text-primary ${language === "ar" ? "text-right" : "text-left"}`}>
                    {language === "ar" ? "رقم الهاتف" : "Phone Number"} <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-5 py-4 bg-secondary/30 border border-primary/10 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-primary placeholder:text-primary/30"
                    placeholder={language === "ar" ? "05xxxxxxxx" : "05xxxxxxxx"}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className={`block text-sm font-semibold text-primary ${language === "ar" ? "text-right" : "text-left"}`}>
                  {language === "ar" ? "ما هو سؤالك؟" : "What is your question?"} <span className="text-accent">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.question}
                  onChange={(e) => setFormData({...formData, question: e.target.value})}
                  className="w-full px-5 py-4 bg-secondary/30 border border-primary/10 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-primary placeholder:text-primary/30 resize-none"
                  placeholder={language === "ar" ? "اكتب سؤالك هنا بالتفصيل..." : "Write your question in detail..."}
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{language === "ar" ? "جاري الإرسال..." : "Sending..."}</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>{language === "ar" ? "تم الإرسال بنجاح!" : "Sent Successfully!"}</span>
                  </>
                ) : (
                  <>
                    <span>{language === "ar" ? "إرسال الرسالة" : "Send Message"}</span>
                    <Send className={`w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${language === "ar" ? "rotate-180" : ""}`} />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-primary/40 flex items-center justify-center gap-2">
                <MessageCircle className="w-3 h-3" />
                {language === "ar" 
                  ? "سيتم التواصل معك عبر واتساب خلال 24 ساعة" 
                  : "We'll contact you via WhatsApp within 24 hours"}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};