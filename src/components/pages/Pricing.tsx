"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { fetchSettings, Settings } from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Truck, 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  LayoutDashboard, 
  Smartphone, 
  Wrench, 
  Fuel, 
  BarChart3, 
  Bell, 
  Car,
  CheckCircle2,
  Info,
  Zap,
  Globe
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider, useLanguage } from "@/components/LanguageContext";

const PricingContent = () => {
  const { language, t } = useLanguage();
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product");
  
  const [step, setStep] = useState(1);
  const [settings, setSettings] = useState<Settings | null>(null);
  const [formData, setFormData] = useState({
    fleetSize: "",
    solutions: [] as string[],
    vehicleType: "",
    name: "",
    company: "",
    email: "",
    city: "",
    phone: "",
    source: "",
    product: productParam || "",
  });

  useEffect(() => {
    const loadSettings = async () => {
      const data = await fetchSettings();
      if (data) setSettings(data);
    };
    loadSettings();
  }, []);

  const fleetSizes = [
    { id: "1-49", label: language === "ar" ? "1-49 المركبات" : "1-49 Vehicles", sub: language === "ar" ? "أسطول صغير" : "Small Fleet", icon: <Car /> },
    { id: "50-200", label: language === "ar" ? "50-200 المركبات" : "50-200 Vehicles", sub: language === "ar" ? "أسطول متوسط" : "Medium Fleet", icon: <Truck /> },
    { id: "201-500", label: language === "ar" ? "201-500 المركبات" : "201-500 Vehicles", sub: language === "ar" ? "أسطول كبير" : "Large Fleet", icon: <Truck /> },
    { id: "500+", label: language === "ar" ? "+500 المركبات" : "+500 Vehicles", sub: language === "ar" ? "أسطول مؤسسي" : "Enterprise Fleet", icon: <Truck /> },
  ];

  const solutions = [
    { id: "tracking", label: language === "ar" ? "نظام تتبع المركبات" : "Vehicle Tracking System", sub: language === "ar" ? "الوحدة الأساسية" : "Core Module", icon: <Truck /> },
    { id: "maintenance", label: language === "ar" ? "برنامج إدارة الصيانة" : "Maintenance Management", sub: language === "ar" ? "الوحدة الأساسية" : "Core Module", icon: <Wrench /> },
    { id: "fuel", label: language === "ar" ? "إدارة الوقود" : "Fuel Management", sub: language === "ar" ? "التحكم في التكاليف" : "Cost Control", icon: <Fuel /> },
    { id: "inspection", label: language === "ar" ? "عمليات الفحص" : "Inspections", sub: language === "ar" ? "وحدة السلامة" : "Safety Module", icon: <ShieldCheck /> },
    { id: "reports", label: language === "ar" ? "إعداد التقارير" : "Reporting", sub: language === "ar" ? "وحدة التحليلات" : "Analytics Module", icon: <BarChart3 /> },
    { id: "rental", label: language === "ar" ? "نظام إدارة تأجير السيارات" : "Car Rental Management", sub: language === "ar" ? "وحدة الأعمال" : "Business Module", icon: <Car /> },
    { id: "compliance", label: language === "ar" ? "التكامل التنظيمي" : "Regulatory Integration", sub: language === "ar" ? "وحدة الامتثال" : "Compliance Module", icon: <ShieldCheck /> },
    { id: "notifications", label: language === "ar" ? "الإشعارات والمراسلة" : "Notifications & Messaging", sub: language === "ar" ? "الاتصالات" : "Communications", icon: <Bell /> },
  ];

  const vehicleTypes = [
    { id: "truck", label: language === "ar" ? "شاحنة" : "Truck", sub: language === "ar" ? "نقل ثقيل" : "Heavy Transport", icon: <Truck /> },
    { id: "car", label: language === "ar" ? "سيارة" : "Car", sub: language === "ar" ? "مركبات خفيفة" : "Light Vehicles", icon: <Car /> },
    { id: "van", label: language === "ar" ? "فان" : "Van", sub: language === "ar" ? "توصيل" : "Delivery", icon: <Truck /> },
    { id: "bus", label: language === "ar" ? "حافلة" : "Bus", sub: language === "ar" ? "نقل ركاب" : "Passenger Transport", icon: <Truck /> },
    { id: "other", label: language === "ar" ? "أخرى" : "Other", sub: language === "ar" ? "معدات خاصة" : "Special Equipment", icon: <Info /> },
  ];

  const handleFleetSizeSelect = (id: string) => {
    setFormData({ ...formData, fleetSize: id });
  };

  const handleVehicleTypeSelect = (id: string) => {
    setFormData({ ...formData, vehicleType: id });
  };

  const handleSolutionToggle = (id: string) => {
    const newSolutions = formData.solutions.includes(id)
      ? formData.solutions.filter(s => s !== id)
      : [...formData.solutions, id];
    setFormData({ ...formData, solutions: newSolutions });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `
*طلب تسعير جديد من ASNA AVL*
-------------------------
*الاسم:* ${formData.name}
*الشركة:* ${formData.company}
*البريد:* ${formData.email}
*المدينة:* ${formData.city}
*الهاتف:* ${formData.phone}
*حجم الأسطول:* ${formData.fleetSize}
*نوع المركبات:* ${formData.vehicleType}
*الحلول المطلوبة:* ${formData.solutions.join(", ")}
${formData.product ? `*المنتج المطلوب:* ${formData.product}` : ""}
*المصدر:* ${formData.source}
    `.trim();

    const whatsappNumber = settings?.whatsapp?.replace(/\+/g, "") || "201028757002";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    // Clear form data
    setFormData({
      fleetSize: "",
      solutions: [],
      vehicleType: "",
      name: "",
      company: "",
      email: "",
      city: "",
      phone: "",
      source: "",
      product: "",
    });
    setStep(1);
  };

  const toggleLanguage = () => {
    // This is a bit tricky since we are in a client component but the locale is in the URL
    // However, the LanguageContext provides setLanguage which handles the state
    // and we can use window.location to redirect if needed, but setLanguage should be enough
    // if the context is set up to handle route changes.
    // Actually, let's just use the context's setLanguage.
    const { setLanguage } = useLanguage(); // Need to destructure it inside the component
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-primary py-20 relative">
      {/* Language and Home Toggle for Pricing Page */}
      <div className="fixed top-6 ltr:right-6 rtl:left-6 z-50 flex items-center gap-3">
        <Link 
          href={`/${language}`}
          className="bg-white/80 backdrop-blur-md border border-gray-200 px-4 py-2 rounded-xl shadow-sm hover:bg-white transition-all flex items-center gap-2 font-bold text-sm text-primary"
        >
          <ArrowRight className="w-4 h-4 rtl-flip" />
          <span>{t("pricing.home")}</span>
        </Link>
        <button 
          onClick={() => {
            const newLang = language === "ar" ? "en" : "ar";
            window.location.href = window.location.href.replace(`/${language}`, `/${newLang}`);
          }}
          className="bg-white/80 backdrop-blur-md border border-gray-200 px-4 py-2 rounded-xl shadow-sm hover:bg-white transition-all flex items-center gap-2 font-bold text-sm"
        >
          <Globe className="w-4 h-4" />
          <span>{language === "ar" ? "English" : "العربية"}</span>
        </button>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              {step}
            </div>
            <span className="text-lg font-bold">
              {language === "ar" ? `خطوة ${step} من 4` : `Step ${step} of 4`}
            </span>
          </div>
          {step > 1 && (
            <button 
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2 text-primary/60 hover:text-primary transition-colors font-bold"
            >
              <ArrowRight className="rtl-flip" />
              <span>{t("pricing.back")}</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Form Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="text-start">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{t("pricing.step1.title")}</h2>
                    <p className="text-lg text-primary/60">{t("pricing.step1.subtitle")}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {fleetSizes.map((item) => (
                      <div 
                        key={item.id}
                        onClick={() => handleFleetSizeSelect(item.id)}
                        className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                          formData.fleetSize === item.id 
                            ? "border-primary bg-primary/5" 
                            : "border-gray-100 bg-white hover:border-primary/30"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            formData.fleetSize === item.id ? "bg-primary text-white" : "bg-gray-50 text-primary/40"
                          }`}>
                            {item.icon}
                          </div>
                          <div className="text-start">
                            <div className="font-bold text-lg">{item.label}</div>
                            <div className="text-sm text-primary/60">{item.sub}</div>
                          </div>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          formData.fleetSize === item.id ? "border-primary" : "border-gray-200"
                        }`}>
                          {formData.fleetSize === item.id && <div className="w-3 h-3 bg-primary rounded-full" />}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    disabled={!formData.fleetSize}
                    onClick={() => setStep(2)}
                    className="accent-button w-full md:w-auto text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <span>{t("pricing.next")}</span>
                    <ArrowLeft className="rtl-flip" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="text-start">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{t("pricing.step3.title")}</h2>
                    <p className="text-lg text-primary/60">{t("pricing.step3.subtitle")}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {vehicleTypes.map((item) => (
                      <div 
                        key={item.id}
                        onClick={() => handleVehicleTypeSelect(item.id)}
                        className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                          formData.vehicleType === item.id 
                            ? "border-primary bg-primary/5" 
                            : "border-gray-100 bg-white hover:border-primary/30"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            formData.vehicleType === item.id ? "bg-primary text-white" : "bg-gray-50 text-primary/40"
                          }`}>
                            {item.icon}
                          </div>
                          <div className="text-start">
                            <div className="font-bold text-lg">{item.label}</div>
                            <div className="text-sm text-primary/60">{item.sub}</div>
                          </div>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          formData.vehicleType === item.id ? "border-primary" : "border-gray-200"
                        }`}>
                          {formData.vehicleType === item.id && <div className="w-3 h-3 bg-primary rounded-full" />}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    disabled={!formData.vehicleType}
                    onClick={() => setStep(3)}
                    className="accent-button w-full md:w-auto text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <span>{t("pricing.next")}</span>
                    <ArrowLeft className="rtl-flip" />
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="text-start">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{t("pricing.step2.title")}</h2>
                    <p className="text-lg text-primary/60">{t("pricing.step2.subtitle")}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {solutions.map((item) => (
                      <div 
                        key={item.id}
                        onClick={() => handleSolutionToggle(item.id)}
                        className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                          formData.solutions.includes(item.id) 
                            ? "border-primary bg-primary/5" 
                            : "border-gray-100 bg-white hover:border-primary/30"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            formData.solutions.includes(item.id) ? "bg-primary text-white" : "bg-gray-50 text-primary/40"
                          }`}>
                            {item.icon}
                          </div>
                          <div className="text-start">
                            <div className="font-bold">{item.label}</div>
                            <div className="text-xs text-primary/40">{item.sub}</div>
                          </div>
                        </div>
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          formData.solutions.includes(item.id) ? "border-primary bg-primary" : "border-gray-200"
                        }`}>
                          {formData.solutions.includes(item.id) && <CheckCircle2 className="text-white w-4 h-4" />}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    disabled={formData.solutions.length === 0}
                    onClick={() => setStep(4)}
                    className="accent-button w-full md:w-auto text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <span>{t("pricing.next")}</span>
                    <ArrowLeft className="rtl-flip" />
                  </button>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="text-start">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{t("pricing.step4.title")}</h2>
                    <p className="text-lg text-primary/60">{t("pricing.step4.subtitle")}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 text-start">
                        <label className="text-sm font-bold">{t("form.name")}</label>
                        <input required name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder={language === "ar" ? "أحمد عدنان" : "Ahmed Adnan"} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" />
                      </div>
                      <div className="space-y-2 text-start">
                        <label className="text-sm font-bold">{t("form.company")}</label>
                        <input required name="company" value={formData.company} onChange={handleInputChange} type="text" placeholder={language === "ar" ? "اسم الشركة" : "Company Name"} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 text-start">
                        <label className="text-sm font-bold">{t("form.email")}</label>
                        <input required name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="your.email@company.com" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" />
                      </div>
                      <div className="space-y-2 text-start">
                        <label className="text-sm font-bold">{t("form.city")}</label>
                        <select required name="city" value={formData.city} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all">
                          <option value="">{language === "ar" ? "اختر مدينة" : "Select City"}</option>
                          <option value="Riyadh">{language === "ar" ? "الرياض" : "Riyadh"}</option>
                          <option value="Jeddah">{language === "ar" ? "جدة" : "Jeddah"}</option>
                          <option value="Dammam">{language === "ar" ? "الدمام" : "Dammam"}</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 text-start">
                        <label className="text-sm font-bold">{t("form.phone")}</label>
                        <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="05XXXXXXXX" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" />
                      </div>
                      <div className="space-y-2 text-start">
                        <label className="text-sm font-bold">
                          {language === "ar" ? "المنتج المطلوب (اختياري)" : "Requested Product (Optional)"}
                        </label>
                        <input 
                          name="product" 
                          value={formData.product} 
                          onChange={handleInputChange} 
                          type="text" 
                          placeholder={language === "ar" ? "مثال: جهاز تتبع G10" : "e.g. G10 Tracking Device"} 
                          className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" 
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 text-start">
                        <label className="text-sm font-bold">{t("form.source")}</label>
                        <select required name="source" value={formData.source} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all">
                          <option value="">{language === "ar" ? "اختر كيف سمعت عنا؟" : "How did you hear about us?"}</option>
                          <option value="Google">{language === "ar" ? "بحث جوجل" : "Google Search"}</option>
                          <option value="Social">{language === "ar" ? "مواقع التواصل" : "Social Media"}</option>
                          <option value="Referral">{language === "ar" ? "توصية" : "Referral"}</option>
                        </select>
                      </div>
                    </div>
                    
                    <button type="submit" className="accent-button w-full text-lg py-4 flex items-center justify-center gap-2">
                      <span>{t("pricing.submit")}</span>
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Info className="w-6 h-6" />
                <h4 className="font-bold text-lg">{language === "ar" ? "لماذا نحتاج هذه المعلومات؟" : "Why do we need this info?"}</h4>
              </div>
              <p className="text-primary/80 text-sm leading-relaxed">
                {language === "ar" 
                  ? "يساعدنا حجم الأسطول على فهم تعقيد عملياتك والتوصية بأنسب باقة من ASNA AVL. سنخصص عرضك التجريبي لعرض الميزات الأكثر أهمية لحجم عملياتك، مما يضمن أنك ترى أقصى قيمة من اليوم الأول."
                  : "Fleet size helps us understand the complexity of your operations and recommend the most suitable ASNA AVL package. We will customize your demo to showcase the features most relevant to your operation size, ensuring you see maximum value from day one."}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { title: language === "ar" ? "آمن وخاص" : "Secure & Private", desc: language === "ar" ? "معلوماتك مشفرة ولا تتم مشاركتها" : "Your info is encrypted and not shared", icon: <ShieldCheck className="text-green-500" /> },
                { title: language === "ar" ? "استجابة سريعة" : "Fast Response", desc: language === "ar" ? "يستجيب فريقنا في غضون 24 ساعة" : "Our team responds within 24 hours", icon: <Zap className="text-yellow-500" /> },
                { title: language === "ar" ? "لا يوجد التزام" : "No Obligation", desc: language === "ar" ? "استشارة وعرض تجريبي مجاني" : "Free consultation and demo", icon: <CheckCircle2 className="text-purple-500" /> },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-start">
                    <div className="font-bold text-sm">{item.title}</div>
                    <div className="text-xs text-primary/70">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default function PricingPageContent({ lang = "ar" }: { lang?: "ar" | "en" }) {
  return (
    <PricingContent />
  );
}
