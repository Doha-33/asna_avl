"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft, Send, Truck, Settings, ShieldCheck, Fuel, BarChart3, Building2, Link2, Bell, Check, Info } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const { language } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fleetSize: "",
    solutions: [] as string[],
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const solutions = [
    { id: "tracking", icon: <Truck className="w-5 h-5" />, title: language === "ar" ? "نظام تتبع المركبات" : "Fleet Tracking System", subtitle: language === "ar" ? "الوحدة الأساسية" : "Core Module" },
    { id: "maintenance", icon: <Settings className="w-5 h-5" />, title: language === "ar" ? "برنامج إدارة الصيانة" : "Maintenance Management", subtitle: language === "ar" ? "الوحدة الأساسية" : "Core Module" },
    { id: "inspection", icon: <ShieldCheck className="w-5 h-5" />, title: language === "ar" ? "عمليات الفحص" : "Inspections", subtitle: language === "ar" ? "وحدة السلامة" : "Safety Module" },
    { id: "fuel", icon: <Fuel className="w-5 h-5" />, title: language === "ar" ? "إدارة الوقود" : "Fuel Management", subtitle: language === "ar" ? "التحكم في التكاليف" : "Cost Control" },
    { id: "reports", icon: <BarChart3 className="w-5 h-5" />, title: language === "ar" ? "إعداد التقارير" : "Reporting", subtitle: language === "ar" ? "وحدة التحليلات" : "Analytics Module" },
    { id: "rental", icon: <Building2 className="w-5 h-5" />, title: language === "ar" ? "نظام إدارة تأجير السيارات" : "Car Rental Management", subtitle: language === "ar" ? "وحدة الأعمال" : "Business Module" },
    { id: "integration", icon: <Link2 className="w-5 h-5" />, title: language === "ar" ? "التكامل التنظيمي" : "Regulatory Integration", subtitle: language === "ar" ? "وحدة الامتثال" : "Compliance Module" },
    { id: "notifications", icon: <Bell className="w-5 h-5" />, title: language === "ar" ? "الإشعارات والمراسلة" : "Notifications & Messaging", subtitle: language === "ar" ? "الاتصالات" : "Communications" },
  ];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const toggleSolution = (id: string) => {
    setFormData(prev => ({
      ...prev,
      solutions: prev.solutions.includes(id) 
        ? prev.solutions.filter(s => s !== id)
        : [...prev.solutions, id]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedSolutionsNames = solutions
      .filter(s => formData.solutions.includes(s.id))
      .map(s => s.title)
      .join(", ");

    const message = language === "ar" 
      ? `
*طلب عرض تجريبي جديد*
-------------------------
*الاسم:* ${formData.name}
*الشركة:* ${formData.company}
*البريد:* ${formData.email}
*الهاتف:* ${formData.phone}
*حجم الأسطول:* ${formData.fleetSize}
*الحلول المهتم بها:* ${selectedSolutionsNames}
    `.trim()
      : `
*New Demo Request*
-------------------------
*Name:* ${formData.name}
*Company:* ${formData.company}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Fleet Size:* ${formData.fleetSize}
*Interested Solutions:* ${selectedSolutionsNames}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/201028757002?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    
    // Clear form data
    setFormData({
      fleetSize: "",
      solutions: [],
      name: "",
      email: "",
      company: "",
      phone: "",
    });
    setStep(1);
    
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl relative"
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            {/* Header */}
            <div className="bg-primary p-8 text-center text-white relative">
              <button 
                onClick={onClose}
                className="absolute top-6 ltr:right-6 rtl:left-6 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {step === 1 && (language === "ar" ? "كم عدد المركبات أو الأصول التي لديك؟" : "How many vehicles or assets do you have?")}
                {step === 2 && (language === "ar" ? "ما الحلول التي تهتم بها؟" : "What solutions are you interested in?")}
                {step === 3 && (language === "ar" ? "دعنا نتعرف عليك" : "Let's get to know you")}
              </h2>
              <p className="text-white/60 text-sm font-medium">
                {language === "ar" ? `خطوة ${step} من 3` : `Step ${step} of 3`}
              </p>
            </div>

            {/* Content */}
            <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary/60">{language === "ar" ? "حجم الأسطول" : "Fleet Size"}</label>
                    <input 
                      type="text" 
                      placeholder={language === "ar" ? "حجم الأسطول" : "Fleet Size"}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:border-accent outline-none transition-all text-primary font-medium"
                      value={formData.fleetSize}
                      onChange={(e) => setFormData({...formData, fleetSize: e.target.value})}
                    />
                  </div>
                  <button 
                    disabled={!formData.fleetSize}
                    onClick={handleNext}
                    className="w-full accent-button py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{language === "ar" ? "متابعة" : "Continue"}</span>
                    {language === "ar" ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {solutions.map((sol) => (
                      <div 
                        key={sol.id}
                        onClick={() => toggleSolution(sol.id)}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-4 group relative ${
                          formData.solutions.includes(sol.id) 
                            ? "border-accent bg-accent/5" 
                            : "border-gray-100 hover:border-accent/30 bg-white"
                        }`}
                      >
                        <div className="absolute top-3 ltr:left-3 rtl:right-3">
                          <Info className="w-4 h-4 text-gray-300 hover:text-accent transition-colors" />
                        </div>
                        
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          formData.solutions.includes(sol.id) ? "bg-accent text-primary" : "bg-gray-50 text-gray-400 group-hover:text-accent"
                        }`}>
                          {sol.icon}
                        </div>
                        <div className="flex-1 text-start">
                          <h4 className="font-bold text-sm text-primary">{sol.title}</h4>
                          <p className="text-[10px] text-primary/40">{sol.subtitle}</p>
                        </div>
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                          formData.solutions.includes(sol.id) ? "bg-accent border-accent" : "border-gray-200"
                        }`}>
                          {formData.solutions.includes(sol.id) && <Check className="w-3 h-3 text-primary" />}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button 
                      onClick={handleBack}
                      className="flex-1 border-2 border-gray-100 rounded-xl py-4 font-bold text-primary hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                    >
                      {language === "ar" ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                      <span>{language === "ar" ? "رجوع" : "Back"}</span>
                    </button>
                    <button 
                      disabled={formData.solutions.length === 0}
                      onClick={handleNext}
                      className="flex-[2] accent-button py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>{language === "ar" ? "متابعة" : "Continue"}</span>
                      {language === "ar" ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 text-start">
                      <label className="text-sm font-bold text-primary/60">{language === "ar" ? "الاسم الكامل" : "Full Name"}</label>
                      <input 
                        required 
                        type="text" 
                        placeholder={language === "ar" ? "أحمد عدنان" : "Ahmed Adnan"}
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:border-accent outline-none transition-all text-primary"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2 text-start">
                      <label className="text-sm font-bold text-primary/60">{language === "ar" ? "البريد الإلكتروني للعمل" : "Business Email"}</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="your.email@company.com"
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:border-accent outline-none transition-all text-primary"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2 text-start">
                      <label className="text-sm font-bold text-primary/60">{language === "ar" ? "اسم الشركة" : "Company Name"}</label>
                      <input 
                        required 
                        type="text" 
                        placeholder={language === "ar" ? "اسم شركتك" : "Your Company"}
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:border-accent outline-none transition-all text-primary"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2 text-start">
                      <label className="text-sm font-bold text-primary/60">{language === "ar" ? "رقم الهاتف" : "Phone Number"}</label>
                      <div className="flex gap-2">
                        <div className="w-20 bg-gray-50 border border-gray-100 rounded-xl px-2 py-3 flex items-center justify-center gap-1 text-xs font-bold text-primary">
                          <img src="https://flagcdn.com/w20/sa.png" alt="SA" className="w-4 h-3" />
                          <span>+966</span>
                        </div>
                        <input 
                          required 
                          type="tel" 
                          placeholder={language === "ar" ? "أدخل رقم هاتفك" : "Enter phone number"}
                          className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:border-accent outline-none transition-all text-primary"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] text-center text-primary/40">
                    {language === "ar" 
                      ? "بإرسال هذا النموذج، فإنك توافق على أن يتم الاتصال بك من قبل فريق المبيعات لدينا" 
                      : "By submitting this form, you agree to be contacted by our sales team"}
                  </p>

                  <div className="flex gap-4">
                    <button 
                      type="button"
                      onClick={handleBack}
                      className="flex-1 border-2 border-gray-100 rounded-xl py-4 font-bold text-primary hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                    >
                      {language === "ar" ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                      <span>{language === "ar" ? "رجوع" : "Back"}</span>
                    </button>
                    <button 
                      type="submit"
                      className="flex-[2] accent-button py-4 text-lg flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>{language === "ar" ? "إرسال الطلب" : "Send Request"}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
