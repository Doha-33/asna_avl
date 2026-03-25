"use client";

import {
  Truck,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Globe,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchSettings, Settings } from "@/lib/api";
import { motion } from "framer-motion";

export const Footer = () => {
  const { language, t } = useLanguage();
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    const loadSettings = async () => {
      const data = await fetchSettings();
      if (data) setSettings(data);
    };
    loadSettings();
  }, []);

  return (
    <footer className="relative bg-primary pt-16 pb-8 overflow-hidden"
    style={{
        backgroundImage: "url('/footer.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary" />
        {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-accent/20 rounded-full animate-pulse" /> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/LOGOwhite.png"
                alt="ASNA AVL Logo"
                className="w-16 h-12"
              />
              <span className="text-2xl font-extrabold tracking-tighter text-white">
                ASNA AVL
              </span>
            </div>
            <p className="text-white/60 mb-6 max-w-sm leading-relaxed text-sm">
              {language === "ar"
                ? settings?.aboutUsAr ||
                  "ASNA AVL هي شركة سعودية متخصصة في تتبع المركبات وتقنية المعلومات، نقدم حلول إدارة الأسطول المتكاملة."
                : settings?.aboutUsEn ||
                  "ASNA AVL is a Saudi company specialized in vehicle tracking and information technology, providing integrated fleet management solutions."}
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              {settings?.phoneNumber && (
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <Phone size={14} />
                  <span>{settings.phoneNumber}</span>
                </div>
              )}
              {settings?.whatsapp && (
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.032 0C5.384 0 0 5.384 0 12.032c0 2.144.576 4.16 1.536 5.952L0 24l6.144-1.536c1.728.96 3.776 1.536 5.888 1.536 6.656 0 12.032-5.376 12.032-12.032S18.688 0 12.032 0zm0 22.016c-1.792 0-3.52-.448-5.056-1.28l-.384-.192-3.648.96.96-3.584-.192-.384a9.83 9.83 0 01-1.408-5.056c0-5.376 4.416-9.792 9.792-9.792 5.376 0 9.792 4.416 9.792 9.792-.064 5.376-4.48 9.792-9.856 9.792zM16.64 13.92c-.288-.144-1.696-.832-1.952-.928-.256-.096-.448-.144-.64.144-.192.288-.736.928-.896 1.12-.16.192-.32.224-.608.08-.288-.144-1.216-.448-2.304-1.408-.864-.768-1.44-1.728-1.6-2.016-.16-.288-.016-.448.128-.576.128-.128.288-.352.448-.528.16-.16.208-.288.32-.48.112-.192.048-.36-.032-.512-.08-.144-.64-1.536-.864-2.112-.24-.56-.48-.48-.64-.48-.16 0-.352-.032-.544-.032-.192 0-.48.064-.736.32-.256.256-.96.928-.96 2.272 0 1.344.96 2.624 1.088 2.816.128.192 1.856 2.88 4.48 3.968 2.624 1.088 2.624.704 3.104.672.48-.032 1.568-.64 1.792-1.248.224-.608.224-1.12.16-1.232-.064-.112-.224-.176-.512-.32z" />
                  </svg>
                  <span>{settings.whatsapp}</span>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {settings?.facebook && (
                <a
                  href={settings.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 text-white/70 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <Facebook size={16} />
                </a>
              )}
              {settings?.instagram && (
                <a
                  href={settings.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 text-white/70 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <Instagram size={16} />
                </a>
              )}
              {settings?.youtube && (
                <a
                  href={settings.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 text-white/70 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <Youtube size={16} />
                </a>
              )}
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 text-white/70 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 text-white/70 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
              >
                <Twitter size={16} />
              </a>
            </div>
          </motion.div>

          {/* Products Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6 text-white relative inline-block">
              {t("nav.products")}
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-3">
              {[
                {
                  href: `/${language}/products`,
                  label: language === "ar" ? "جميع المنتجات" : "All Products",
                },
                {
                  href: `/${language}/app`,
                  label: language === "ar" ? "تطبيق الجوال" : "Mobile App",
                },
                {
                  href: `/${language}/solutions`,
                  label: language === "ar" ? "الحلول" : "Solutions",
                },
                {
                  href: `/${language}/pricing`,
                  label: language === "ar" ? "التسعير" : "Pricing",
                },
              ].map((item, idx) => (
                <li key={idx}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
                    >
                      <ChevronRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm cursor-pointer group">
                      <ChevronRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                      <span>{item.label}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6 text-white relative inline-block">
              {t("nav.company")}
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-3">
              {[
                {
                  href: `/${language}/about`,
                  label: language === "ar" ? "نبذة عنا" : "About Us",
                },
                {
                  href: `/${language}/why-asnaavl`,
                  label: language === "ar" ? "لماذا ASNA AVL" : "Why ASNA AVL",
                },
                {
                  href: `/${language}/contact`,
                  label: language === "ar" ? "اتصل بنا" : "Contact Us",
                },
                {
                  href: `/${language}/blog`,
                  label: language === "ar" ? "المدونة" : "Blog",
                },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
                  >
                    <ChevronRight
                      size={12}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-6 text-white relative inline-block">
              {t("nav.resources")}
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-3">
              {[
                {
                  href: `/${language}/privacy-policy`,
                  label: t("legal.privacy"),
                },
                {
                  href: `/${language}/terms-of-service`,
                  label: t("legal.terms"),
                },
              ].map((item, idx) => (
                <li key={idx}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
                    >
                      <ChevronRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm cursor-pointer group">
                      <ChevronRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                      <span>{item.label}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© 2026 {t("footer.rights")}</p>
          <div className="flex gap-6">
            <Link
              href={`/${language}/privacy-policy`}
              className="hover:text-white transition-colors"
            >
              {t("legal.privacy")}
            </Link>
            <Link
              href={`/${language}/terms-of-service`}
              className="hover:text-white transition-colors"
            >
              {t("legal.terms")}
            </Link>
            <Link
              href={`/${language}/refund-policy`}
              className="hover:text-white transition-colors"
            >
              {t("legal.refund")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
