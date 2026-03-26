"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  Users,
  Globe,
  Award,
  BarChart3,
  LayoutDashboard,
  HeartHandshake,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider, useLanguage } from "@/components/LanguageContext";
import { use } from "react";
import Link from "next/link";

const WhyContent = () => {
  const { language } = useLanguage();

  const features = [
    {
      title:
        language === "ar"
          ? "1. تكامل مباشر مع الأنظمة المحلية"
          : "1. Direct Integration with Local Systems",
      desc:
        language === "ar"
          ? "شراكات رسمية وتكاملات API مع منصات مثل 'قوى' و'تم' لامتثال تنظيمي سلس. مصمم خصيصاً للوائح السعودية واللغة والواقع التشغيلي."
          : "Official partnerships and API integrations with platforms like 'Qiwa' and 'Tamm' for seamless regulatory compliance. Specifically designed for Saudi regulations, language, and operational reality.",
      icon: <ShieldCheck className="text-accent" />,
    },
    {
      title: language === "ar" ? "2. منصة متكاملة" : "2. Integrated Platform",
      desc:
        language === "ar"
          ? "كل ما تحتاجه في مكان واحد: تتبع الأسطول، الصيانة، التأجير، الفحص، المراسلة، والتقارير على منصة مرنة وقابلة للتوسع لتناسب أي حجم أسطول أو قطاع."
          : "Everything you need in one place: fleet tracking, maintenance, rental, inspection, messaging, and reports on a flexible and scalable platform to suit any fleet size or sector.",
      icon: <LayoutDashboard className="text-accent" />,
    },
    {
      title:
        language === "ar"
          ? "3. تحليلات ذكية بالذكاء الاصطناعي"
          : "3. Smart AI Analytics",
      desc:
        language === "ar"
          ? "صيانة تنبؤية، تحليلات لسلوك السائقين، مراقبة فورية للتكاليف، وتنبيهات مؤتمتة تساعدك على العمل بذكاء أكبر، تقليل وقت التوقف، وزيادة الأرباح."
          : "Predictive maintenance, driver behavior analysis, instant cost monitoring, and automated alerts help you work smarter, reduce downtime, and increase profits.",
      icon: <Zap className="text-accent" />,
    },
    {
      title:
        language === "ar"
          ? "4. مصمم لكل القطاعات"
          : "4. Designed for All Sectors",
      desc:
        language === "ar"
          ? "تستخدمه شركات التأجير، ومقدمو الخدمات اللوجستية (3PL)، ومتخصصون توصيل الأغذية والمواد الاستهلاكية، والأساطيل الحكومية، والمؤسسات الكبرى."
          : "Used by rental companies, logistics service providers (3PL), food and consumer goods delivery specialists, government fleets, and large enterprises.",
      icon: <Globe className="text-accent" />,
    },
    {
      title:
        language === "ar"
          ? "5. الالتزام بنجاح العميل"
          : "5. Commitment to Customer Success",
      desc:
        language === "ar"
          ? "دعم عملاء محلي وإعداد وتدريب باللغتين العربية والإنجليزية، وثائق شاملة ودروس فيديو وإرشادات تبني استباقية."
          : "Local customer support, setup, and training in Arabic and English, comprehensive documentation, video lessons, and proactive adoption guidance.",
      icon: <HeartHandshake className="text-accent" />,
    },
  ];

  const values = [
    {
      title: language === "ar" ? "الابتكار" : "Innovation",
      desc:
        language === "ar"
          ? "دائماً في المقدمة مع الحلول التي تعتمد على الذكاء الاصطناعي وإنترنت الأشياء"
          : "Always at the forefront with solutions based on AI and IoT",
      icon: <Zap />,
    },
    {
      title: language === "ar" ? "الثقة" : "Trust",
      desc:
        language === "ar"
          ? "منصة آمنة وموثوقة مع شفافية وامتثال كاملين"
          : "A secure and reliable platform with full transparency and compliance",
      icon: <ShieldCheck />,
    },
    {
      title: language === "ar" ? "الشراكة" : "Partnership",
      desc:
        language === "ar"
          ? "أهدافك هي أهدافنا - النمو والكفاءة والامتثال ورضا العملاء"
          : "Your goals are our goals - growth, efficiency, compliance, and customer satisfaction",
      icon: <Users />,
    },
    {
      title: language === "ar" ? "التميز" : "Excellence",
      desc:
        language === "ar"
          ? "اهتمام لا هوادة فيه بجودة المنتج والتحسين المستمر"
          : "Unrelenting focus on product quality and continuous improvement",
      icon: <Award />,
    },
  ];

  const achievements = [
    {
      title:
        language === "ar"
          ? "إدارة آلاف المركبات بنجاح"
          : "Successfully Managing Thousands of Vehicles",
      desc:
        language === "ar"
          ? "إدارة آلاف المركبات بنجاح لأبرز العلامات التجارية في جميع أنحاء المملكة العربية السعودية ودول مجلس التعاون الخليجي."
          : "Successfully managing thousands of vehicles for top brands across Saudi Arabia and the GCC.",
      icon: <Award className="text-accent" />,
    },
    {
      title:
        language === "ar" ? "حلول رقمية رائدة" : "Leading Digital Solutions",
      desc:
        language === "ar"
          ? "نقود مجال الامتثال الرقمي وحلول التأجير، ونضع معايير رائدة لأفضل الممارسات في القطاع."
          : "Leading the digital compliance and rental solutions field, setting industry-leading standards for best practices.",
      icon: <Zap className="text-accent" />,
    },
    {
      title: language === "ar" ? "تقدير العملاء" : "Customer Appreciation",
      desc:
        language === "ar"
          ? "معترف به من قبل العملاء لتوفير الوقت وخفض التكاليف والعمليات الشفافة القابلة للمراجعة."
          : "Recognized by customers for saving time, reducing costs, and providing transparent, auditable operations.",
      icon: <Users className="text-accent" />,
    },
  ];

  return (
    <div className="min-h-screen bg-secondary text-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative pt-30 pb-24 overflow-hidden bg-secondary"
        style={{
          backgroundImage: "url('/bg5.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-secondary/95" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: language === "ar" ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-start"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                {language === "ar"
                  ? "هل أنت مستعد لتوسيع نطاق عملياتك بسهولة؟"
                  : "Are you ready to scale your operations easily?"}
              </h1>
              <p className="text-xl text-white/60 mb-10 leading-relaxed">
                {language === "ar"
                  ? "تم تصميم ASNA AVL خصيصاً لتلبية احتياجات الأساطيل السعودية المتطورة، ويقدم عمليات ذكية، وامتثالاً محلياً، ونتائج مستدامة"
                  : "ASNA AVL is specifically designed to meet the needs of advanced Saudi fleets, providing smart operations, local compliance, and sustainable results"}
              </p>
              <div className="flex flex-wrap gap-4 justify-start">
                <Link
                  href={`/${language}/pricing`}
                  className="accent-button text-lg px-8 py-4 text-center"
                >
                  {language === "ar" ? "جرب النظام الآن" : "Try the System Now"}
                </Link>
                <button className="outline-button text-lg px-8 py-4">
                  {language === "ar" ? "اعرف المزيد" : "Learn More"}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-[32px] border border-gray-100 relative group"
              style={{
                boxShadow: `
      0 20px 40px -10px rgba(0, 0, 0, 0.1),
      0 10px 20px -5px rgba(0, 0, 0, 0.05),
      0 0 0 1px rgba(0, 0, 0, 0.02) inset,
      0 4px 15px 0 rgba(251, 191, 36, 0.1)
    `,
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 via-accent/5 to-accent/20 rounded-[34px] blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />

              {/* Floating shadow animation */}
              <motion.div
                className="absolute inset-0 rounded-[32px] -z-10"
                animate={{
                  boxShadow: [
                    "0 30px 50px -15px rgba(255, 255, 255, 0.2)",
                    "0 40px 60px -15px rgba(255, 255, 255, 0.3)",
                    "0 30px 50px -15px rgba(255, 255, 255, 0.2)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-gray-800">
                  {language === "ar" ? "عمليات الأسطول" : "Fleet Operations"}
                </h3>
                <div className="relative">
                  <BarChart3 className="text-accent relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-accent/20 rounded-full blur-md"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-gray-50 p-4 rounded-2xl border border-gray-100 relative overflow-hidden group/card"
                  style={{
                    boxShadow:
                      "0 4px 8px -2px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
                  }}
                >
                  {/* Inner shadow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent" />
                  <div className="relative z-10">
                    <div className="text-gray-500 text-sm mb-1">
                      {language === "ar"
                        ? "المركبات النشطة"
                        : "Active Vehicles"}
                    </div>
                    <div className="text-2xl font-bold text-gray-800">847</div>
                  </div>
                  {/* Bottom shadow line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-gray-50 p-4 rounded-2xl border border-gray-100 relative overflow-hidden group/card"
                  style={{
                    boxShadow:
                      "0 4px 8px -2px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(255, 255, 255, 0.02)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent" />
                  <div className="relative z-10">
                    <div className="text-gray-500 text-sm mb-1">
                      {language === "ar" ? "معدل الكفاءة" : "Efficiency Rate"}
                    </div>
                    <div className="text-2xl font-bold text-accent">96%</div>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-accent/5 to-accent/10 p-6 rounded-2xl border border-accent/20 text-center relative overflow-hidden"
                style={{
                  boxShadow:
                    "0 10px 20px -8px rgba(57, 36, 251, 0.3), inset 0 2px 4px rgba(255,255,255,0.8)",
                }}
              >
                {/* Animated shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  <div className="text-accent text-sm font-bold mb-1 flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
                    {language === "ar" ? "توفير التكاليف" : "Cost Savings"}
                  </div>
                  <div className="text-3xl font-extrabold text-gray-800 flex items-center justify-center gap-1">
                    SR 2.4M
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-xs text-green-600 font-normal"
                    >
                      ▲
                    </motion.span>
                  </div>
                </div>

                {/* Bottom decorative shadow */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
              </motion.div>

              {/* Footer with subtle shadow */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                  <span className="text-gray-500 text-sm">
                    {language === "ar" ? "بيانات مباشرة" : "Live data"}
                  </span>
                </div>
                <span className="text-gray-400 text-xs flex items-center gap-1">
                  <span className="w-1 h-1 bg-gray-400 rounded-full" />
                  {language === "ar" ? "آخر تحديث: الآن" : "Updated: now"}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {language === "ar" ? "مهمتنا" : "Our Mission"}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Decorative quote marks */}
            <div className="absolute -top-6 -left-6 text-6xl text-accent/20 font-serif">
              "
            </div>
            <div className="absolute -bottom-6 -right-6 text-6xl text-accent/20 font-serif">
              "
            </div>

            {/* Main card */}
            <div className="glass-card bg-gradient-to-br from-secondary to-secondary/95 p-16 rounded-[60px] border border-white/10 shadow-2xl relative overflow-hidden group hover:shadow-accent/20 hover:shadow-2xl transition-all duration-500">
              {/* Animated gradient line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed relative z-10">
                {language === "ar"
                  ? "يساعد ASNA AVL المؤسسات على إدارة عمليات أساطيلها بذكاء، وتحسين أدائها، وتوسيع نطاقها، بالاعتماد على البيانات، مدعومة بالأتمتة، ومبنية على فهم عميق للسوق السعودي والخليجي. نساعدك على تقديم عمليات أكثر أماناً وذكاءً وكفاءة كل يوم."
                  : "ASNA AVL helps organizations manage their fleet operations smartly, improve performance, and scale, relying on data, supported by automation, and built on a deep understanding of the Saudi and Gulf market. We help you deliver safer, smarter, and more efficient operations every day."}
              </p>

              {/* Signature */}
              <div className="flex items-center justify-end gap-4 mt-8">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Award className="text-accent w-6 h-6" />
                </div>
                <div className="text-start">
                  <div className="text-white/80 text-sm">
                    {language === "ar" ? "فريق ASNA AVL" : "ASNA AVL Team"}
                  </div>
                  <div className="text-accent text-xs">
                    {language === "ar"
                      ? "نحو مستقبل أكثر ذكاءً"
                      : "Towards a Smarter Future"}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full" />
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-accent rounded-full" />
          <div className="absolute bottom-40 right-1/3 w-4 h-4 bg-accent rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              {language === "ar" ? "لماذا نحن؟" : "Why Us?"}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
              {language === "ar"
                ? "ما الذي يميز ASNA AVL؟"
                : "What makes ASNA AVL special?"}
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              {language === "ar"
                ? "أول منصة متكاملة مطورة محلياً للأسطول السعودي"
                : "The first locally developed integrated platform for the Saudi fleet"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`group relative ${i === 4 ? "md:col-span-2" : ""}`}
              >
                {/* Hover glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-[40px] opacity-0 group-hover:opacity-30 blur transition-all duration-500" />

                {/* Card */}
                <div className="relative glass-card p-10 rounded-[40px] border border-white/10 hover:border-accent/50 transition-all duration-500 overflow-hidden">
                  {/* Animated corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full" />

                  <div className="flex items-start gap-6">
                    {/* Icon with animation */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {feature.icon}
                      </div>
                      {/* Pulse effect */}
                      <div className="absolute inset-0 rounded-2xl bg-accent/20 animate-ping opacity-0 group-hover:opacity-30" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent to-primary"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)",
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
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              {language === "ar" ? "إنجازاتنا" : "Our Achievements"}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              {language === "ar"
                ? "انجازاتنا الرئيسية"
                : "Our Main Achievements"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "ar"
                ? "مسيرة من النجاح والتميز في خدمة عملائنا"
                : "A journey of success and excellence in serving our clients"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-full">
                  {/* Counter number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl font-bold text-primary/30 group-hover:scale-150 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {i + 1}
                  </div>

                  {/* Card */}
                  <div className="relative p-10 rounded-[40px] bg-white border-2 border-primary/10 group-hover:border-primary/30 shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      {item.icon}
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      {item.desc}
                    </p>

                    {/* Bottom decoration */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats counter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "500+", label: language === "ar" ? "عميل" : "Clients" },
              {
                value: "10K+",
                label: language === "ar" ? "مركبة" : "Vehicles",
              },
              {
                value: "98%",
                label:
                  language === "ar" ? "رضا العملاء" : "Client Satisfaction",
              },
              {
                value: "24/7",
                label: language === "ar" ? "دعم فني" : "Support",
              },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl md:text-4xl font-extrabold text-primary group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              {language === "ar" ? "الرؤية والقيم" : "Vision & Values"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-primary/60 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
                          ? "هل أنت مستعد للانضمام إلى مجتمع إدارة الأساطيل الأكثر تقدماً في المنطقة؟"
                          : "Are you ready to join the most advanced fleet management community in the region?"}
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

export default function WhyAsnaavlPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <WhyContent />;
}
