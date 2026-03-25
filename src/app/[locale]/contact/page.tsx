"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  ShieldCheck,
  Video,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider, useLanguage } from "@/components/LanguageContext";
import { use } from "react";
import Link from "next/link";

const ContactContent = () => {
  const { language } = useLanguage();

  const contactInfo = [
    {
      title:
        language === "ar"
          ? "المبيعات والاستفسارات العامة"
          : "Sales & General Inquiries",
      email: "sales@asnaavl.sa",
      phone: "01028757002",
      icon: <Mail className="text-accent" />,
    },
    {
      title: language === "ar" ? "عنوان المكتب" : "Office Address",
      address:
        language === "ar"
          ? "الخزنة، حي الإشبيلية، PM7، الرياض، المملكة العربية السعودية"
          : "Al Khazna, Ishbiliyah District, PM7, Riyadh, Saudi Arabia",
      icon: <MapPin className="text-accent" />,
    },
    {
      title: language === "ar" ? "دعم العملاء" : "Customer Support",
      email: "customers@asnaavl.sa",
      whatsapp: "01028757002",
      icon: <MessageSquare className="text-accent" />,
    },
  ];

  return (
    <div className="min-h-screen bg-secondary text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-br from-primary via-primary/50 to-primary">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
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
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"
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
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"
          />

          {/* Floating particles - lighter color */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent/10 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Decorative element - lighter */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl mx-auto mb-8"
            />
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-white">
                {language === "ar"
                  ? "مرحباً، كيف يمكننا مساعدتك؟"
                  : "Hello, how can we help you?"}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              {language === "ar"
                ? "سواء كان لديك سؤال أو ترغب في عرض تجريبي مخصص أو تحتاج إلى دعم - فريق ASNA AVL هنا من أجلك."
                : "Whether you have a question, want a custom demo, or need support - the ASNA AVL team is here for you."}
            </motion.p>

            {/* Quick contact buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center mt-12"
            >
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full hover:bg-accent/10 transition-all duration-300 border border-gray-200">
                <MessageSquare size={18} className="text-accent" />
                <span className="text-gray-700">WhatsApp</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full hover:bg-accent/10 transition-all duration-300 border border-gray-200">
                <Mail size={18} className="text-accent" />
                <span className="text-gray-700">Email</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full hover:bg-accent/10 transition-all duration-300 border border-gray-200">
                <Phone size={18} className="text-accent" />
                <span className="text-gray-700">Phone</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration - lighter */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-accent/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-accent/5 rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Glow effect - lighter */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 via-primary/30 to-accent/30 rounded-[50px] blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />

            {/* Main card - white background */}
            <div className="relative bg-white p-12 md:p-16 rounded-[50px] border border-gray-100 shadow-2xl overflow-hidden">
              {/* Animated background - very subtle */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="text-start">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <Video className="text-accent w-6 h-6" />
                    </div>
                    <span className="text-accent font-bold text-sm uppercase tracking-wider">
                      {language === "ar" ? "عرض مباشر" : "Live Demo"}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800">
                    {language === "ar"
                      ? "هل ترغب في عرض تجريبي مباشر؟"
                      : "Do you want a live demo?"}
                  </h2>

                  <p className="text-lg text-gray-600 max-w-xl">
                    {language === "ar"
                      ? "تحدث مباشرة مع أحد خبراء ASNA AVL وشاهد منصتنا قيد التشغيل. احصل على رؤى مخصصة لعمليات أسطولك."
                      : "Talk directly with one of ASNA AVL's experts and see our platform in action. Get custom insights for your fleet operations."}
                  </p>

                  {/* Features list */}
                  <div className="flex flex-wrap gap-4 mt-6">
                    {[
                      language === "ar" ? "تخصيص كامل" : "Full customization",
                      language === "ar" ? "دعم مباشر" : "Live support",
                      language === "ar" ? "بدون التزام" : "No commitment",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-green-600"
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
                        <span className="text-gray-500 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={`/${language}/pricing`}
                    className="relative group/btn inline-block"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-0 group-hover/btn:opacity-75 transition-all duration-500" />
                    <div className="relative bg-accent text-white font-bold text-lg px-12 py-5 rounded-2xl hover:bg-primary transition-all duration-300 flex items-center gap-3">
                      <span>
                        {language === "ar"
                          ? "احجز عرضاً تجريبياً مجانياً"
                          : "Book a free demo"}
                      </span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </motion.span>
                    </div>
                  </Link>
                </motion.div>
              </div>

              {/* Bottom decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              {language === "ar" ? "معلومات الاتصال" : "Contact Information"}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">
              {language === "ar"
                ? "كيف يمكننا مساعدتك؟"
                : "How can we help you?"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-3xl blur opacity-0 group-hover:opacity-30 transition-all duration-500" />

                {/* Card */}
                <div className="relative glass-card p-8 rounded-3xl border border-white/10 hover:border-accent/50 transition-all duration-500 overflow-hidden">
                  {/* Icon with animation */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-accent/20 animate-ping opacity-0 group-hover:opacity-30" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-accent transition-colors duration-300">
                    {info.title}
                  </h3>

                  <div className="space-y-3">
                    {info.email && (
                      <div className="flex items-center gap-3 text-white/60 group-hover:text-white/80 transition-colors duration-300">
                        <Mail size={16} className="text-accent/60" />
                        <span>{info.email}</span>
                      </div>
                    )}
                    {info.phone && (
                      <div className="flex items-center gap-3 text-white/60 group-hover:text-white/80 transition-colors duration-300">
                        <Phone size={16} className="text-accent/60" />
                        <span dir="ltr">{info.phone}</span>
                      </div>
                    )}
                    {info.whatsapp && (
                      <div className="flex items-center gap-3 text-white/60 group-hover:text-white/80 transition-colors duration-300">
                        <MessageSquare size={16} className="text-accent/60" />
                        <span dir="ltr">{info.whatsapp}</span>
                      </div>
                    )}
                    {info.address && (
                      <div className="flex items-start gap-3 text-white/60 group-hover:text-white/80 transition-colors duration-300">
                        <MapPin size={16} className="text-accent/60 mt-1" />
                        <span className="leading-relaxed">{info.address}</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom decoration */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}

            {/* Social Media Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-3xl blur opacity-0 group-hover:opacity-30 transition-all duration-500" />

              <div className="relative glass-card p-8 rounded-3xl border border-white/10 hover:border-accent/50 transition-all duration-500">
                <h3 className="text-xl font-bold mb-6 text-white">
                  {language === "ar" ? "تواصل معنا" : "Connect with us"}
                </h3>

                <div className="flex items-center gap-4">
                  {[
                    { icon: Twitter, color: "hover:bg-[#1DA1F2]" },
                    { icon: Facebook, color: "hover:bg-[#4267B2]" },
                    { icon: Linkedin, color: "hover:bg-[#0077b5]" },
                    { icon: Instagram, color: "hover:bg-[#E1306C]" },
                  ].map((social, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:text-white transition-all duration-300 cursor-pointer ${social.color}`}
                    >
                      <social.icon size={20} />
                    </motion.div>
                  ))}
                </div>

                {/* Availability status */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-white/40 text-sm">
                      {language === "ar" ? "متاحون 24/7" : "Available 24/7"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-24 bg-white text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              {language === "ar" ? "قم بزيارة مكتبنا" : "Visit our office"}
            </h2>
            <p className="text-xl text-primary/60">
              {language === "ar"
                ? "موجود في قلب منطقة الأعمال في الرياض"
                : "Located in the heart of the business district in Riyadh"}
            </p>
          </div>

          <div className="rounded-[40px] overflow-hidden border border-gray-100 shadow-2xl h-[500px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.647464646464!2d46.7911286!3d24.7911286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0123456789ab%3A0x1234567890abcdef!2sAsnaavl!5e0!3m2!1sen!2ssa!4v1709396185000!5m2!1sen!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
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
                      <span className="text-gray-800">
                        {language === "ar"
                          ? "نحن نقدر كل استفسار. يتم التعامل مع معلوماتك بشكل آمن ولا يتم مشاركتها أبداً خارج ASNA AVL."
                          : "We value every inquiry. Your information is handled securely and is never shared outside of ASNA AVL."}
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
                      className="absolute -top-3 -right-3 bg-white text-primary rounded-full px-3 py-1 text-xs font-bold shadow-lg border border-accent/20"
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

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <ContactContent />;
}
