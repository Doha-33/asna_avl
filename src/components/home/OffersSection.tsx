"use client";

import { useLanguage } from "../LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { fetchApi, fetchSettings, Offer } from "@/lib/api";
import { ExternalLink, Sparkles, Tag, Clock, ArrowRight, ChevronLeft, ChevronRight, X as CloseIcon, Send, User, Phone, MessageSquare } from "lucide-react";

export const OffersSection = () => {
  const { language } = useLanguage();
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState("201012345678");

  useEffect(() => {
    const loadData = async () => {
      const [offersData, settings] = await Promise.all([
        fetchApi("/api/offers"),
        fetchSettings()
      ]);

      if (offersData && offersData.length > 0) {
        setOffers(offersData);
      } else {
        // Mock data if API is empty
        setOffers([
          {
            _id: "1",
            offerName: language === "ar" ? "خصم 20% على باقات الأساطيل" : "20% Discount on Fleet Packages",
            desc: language === "ar" 
              ? "احصل على خصم حصري عند الاشتراك في باقة إدارة الأساطيل السنوية. العرض ساري لفترة محدودة."
              : "Get an exclusive discount when subscribing to the annual fleet management package. Offer valid for a limited time.",
            image: "https://picsum.photos/seed/offer1/800/600",
            link: "#"
          },
          {
            _id: "2",
            offerName: language === "ar" ? "تركيب مجاني لأجهزة التتبع" : "Free Tracking Device Installation",
            desc: language === "ar"
              ? "وفر تكاليف التركيب عند شراء أكثر من 5 أجهزة تتبع. فريقنا الفني سيقوم بالتركيب مجاناً."
              : "Save on installation costs when purchasing more than 5 tracking devices. Our technical team will install for free.",
            image: "https://picsum.photos/seed/offer2/800/600",
            link: "#"
          },
          {
            _id: "3",
            offerName: language === "ar" ? "شهر مجاني عند التجديد" : "One Month Free on Renewal",
            desc: language === "ar"
              ? "جدد اشتراكك الآن واحصل على شهر إضافي مجاناً. استمر في مراقبة أسطولك دون انقطاع."
              : "Renew your subscription now and get an extra month for free. Keep monitoring your fleet without interruption.",
            image: "https://picsum.photos/seed/offer3/800/600",
            link: "#"
          }
        ]);
      }

      if (settings && settings.whatsapp) {
        // Remove + and spaces
        setWhatsappNumber(settings.whatsapp.replace(/\+/g, "").replace(/\s/g, ""));
      }
      setLoading(false);
    };
    loadData();
  }, [language]);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOffer) return;

    setIsSubmitting(true);
    
    const text = language === "ar" 
      ? `طلب عرض: ${selectedOffer.offerName}\nالاسم: ${formData.name}\nرقم الهاتف: ${formData.phone}\nالرسالة: ${formData.message}`
      : `Offer Request: ${selectedOffer.offerName}\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
    
    setIsSubmitting(false);
    setSelectedOffer(null);
    setFormData({ name: "", phone: "", message: "" });
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);
  };

  // Get visible offers (3 at a time)
  const getVisibleOffers = () => {
    const visible: Offer[] = [];
    if (offers.length === 0) return visible;
    for (let i = 0; i < Math.min(3, offers.length); i++) {
      const index = (currentIndex + i) % offers.length;
      visible.push(offers[index]);
    }
    return visible;
  };

  if (loading || offers.length === 0) return null;

  const visibleOffers = getVisibleOffers();

  return (
    <section id="offers" className="py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-accent">
              {language === "ar" ? "عروض محدودة" : "Limited Offers"}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
            {language === "ar" ? "عروضنا الحصرية" : "Exclusive Offers"}
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            {language === "ar" 
              ? "استفد من أفضل العروض والخصومات لإدارة أسطولك بكفاءة أعلى"
              : "Take advantage of the best offers and discounts for efficient fleet management"}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {offers.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center border border-slate-200"
              >
                <ChevronLeft size={20} className="lg:w-6 lg:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center border border-slate-200"
              >
                <ChevronRight size={20} className="lg:w-6 lg:h-6" />
              </button>
            </>
          )}

          {/* Offers Grid - Shows 3 at a time */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="wait" custom={direction}>
              {visibleOffers.map((offer, idx) => (
                <motion.div
                  key={`${offer._id}-${currentIndex}`}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
                >
                  {/* Image Container */}
                  <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                    <img 
                      src={offer.image} 
                      alt={offer.offerName} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    
                    {/* Offer Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="flex items-center gap-1.5 bg-accent text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                        <Tag size={12} />
                        <span>{language === "ar" ? "عرض خاص" : "Special Offer"}</span>
                      </div>
                    </div>

                    {/* Hover Overlay with Button */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-primary/80 backdrop-blur-sm flex items-center justify-center z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    >
                      <button 
                        onClick={() => setSelectedOffer(offer)}
                        className="px-6 py-3 bg-white text-primary rounded-xl font-bold hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
                      >
                        <span>{language === "ar" ? "عرض التفاصيل" : "View Details"}</span>
                        <ArrowRight size={16} />
                      </button>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-black text-primary mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                      {offer.offerName}
                    </h3>
                    
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
                      {offer.desc}
                    </p>

                    {/* Footer with CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock size={12} />
                        <span>
                          {language === "ar" ? "عرض محدود" : "Limited time"}
                        </span>
                      </div>
                      <button 
                        onClick={() => setSelectedOffer(offer)}
                        className="inline-flex items-center gap-1 text-sm font-bold text-accent hover:text-primary transition-colors group/link"
                      >
                        <span>{language === "ar" ? "اعرف المزيد" : "Learn more"}</span>
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Indicators */}
        {offers.length > 3 && (
          <div className="flex justify-center gap-2 mt-8 md:mt-10">
            {offers.map((_, idx) => {
              // Show only relevant indicators or all if less than 7
              const isVisible = offers.length <= 7 || 
                Math.abs(idx - currentIndex) <= 2 || 
                idx === 0 || 
                idx === offers.length - 1;
              
              if (!isVisible && offers.length > 7) return null;
              
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className="group focus:outline-none"
                >
                  <div
                    className={`transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-6 h-2 bg-accent rounded-full"
                        : "w-2 h-2 bg-slate-300 rounded-full group-hover:bg-slate-400 group-hover:scale-110"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        )}

        {/* Offer Count Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10 md:mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-slate-100">
            <span className="text-lg font-black text-accent">{offers.length}</span>
            <span className="text-xs text-slate-500 font-medium">
              {language === "ar" ? "عرض حصري" : "Exclusive Offers"}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Offer Details Modal */}
      <AnimatePresence>
        {selectedOffer && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedOffer(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedOffer(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full text-primary hover:bg-accent hover:text-white transition-all shadow-lg"
              >
                <CloseIcon size={20} />
              </button>

              {/* Left Side: Offer Info */}
              <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                <img 
                  src={selectedOffer.image} 
                  alt={selectedOffer.offerName} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <div className="inline-flex items-center gap-1.5 bg-accent text-white px-3 py-1.5 rounded-full text-xs font-bold w-fit mb-4">
                    <Tag size={12} />
                    <span>{language === "ar" ? "عرض حصري" : "Exclusive Offer"}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                    {selectedOffer.offerName}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed line-clamp-4">
                    {selectedOffer.desc}
                  </p>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="w-full md:w-1/2 p-8 md:p-10 overflow-y-auto">
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-primary mb-2">
                    {language === "ar" ? "احصل على العرض الآن" : "Get the Offer Now"}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {language === "ar" 
                      ? "املأ البيانات التالية وسنتواصل معك عبر واتساب لإتمام طلبك"
                      : "Fill in the following details and we will contact you via WhatsApp to complete your request"}
                  </p>
                </div>

                <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-primary/60 uppercase tracking-wider px-1">
                      {language === "ar" ? "الاسم الكامل" : "Full Name"}
                    </label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-accent transition-colors" />
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={language === "ar" ? "أدخل اسمك بالكامل" : "Enter your full name"}
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-primary/60 uppercase tracking-wider px-1">
                      {language === "ar" ? "رقم الهاتف" : "Phone Number"}
                    </label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-accent transition-colors" />
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={language === "ar" ? "01XXXXXXXXX" : "01XXXXXXXXX"}
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-primary/60 uppercase tracking-wider px-1">
                      {language === "ar" ? "رسالة إضافية (اختياري)" : "Additional Message (Optional)"}
                    </label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400 group-focus-within:text-accent transition-colors" />
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={language === "ar" ? "كيف يمكننا مساعدتك؟" : "How can we help you?"}
                        rows={3}
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-accent text-white rounded-xl font-bold shadow-lg shadow-accent/25 hover:bg-primary transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{language === "ar" ? "إرسال عبر واتساب" : "Send via WhatsApp"}</span>
                    <Send size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
