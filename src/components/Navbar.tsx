"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Truck, Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "./LanguageContext";
import { useDemoModal } from "./DemoModalContext";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();
  const { openDemoModal } = useDemoModal();
  const navbarRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  const pricingLink = `/${language}/pricing`;
  const aboutLink = `/${language}/about`;
  const whyLink = `/${language}/why-asnaavl`;
  const contactLink = `/${language}/contact`;
  const blogLink = `/${language}/blog`;
  const homeLink = `/${language}`;
  const appLink = `/${language}/app`;

  const navItems = [
    {
      key: "products",
      label: t("nav.products"),
      href: `/${language}/products`
    },
    {
      key: "solutions",
      label: t("nav.solutions"),
      href: `/${language}/solutions`
    },
    {
      key: "blogs",
      label: t("nav.blogs"),
      href: `/${language}/blog`
    },
    {
      key: "app",
      label: t("nav.app"),
      href: `/${language}/app`
    },
    {
      key: "pricing",
      label: t("nav.pricing"),
      href: `/${language}/pricing`
    },
    {
      key: "company",
      label: t("nav.company"),
      items: [
        { href: aboutLink, label: { ar: "نبذة عنا", en: "About Us" } },
        { href: whyLink, label: { ar: "لماذا ASNA AVL", en: "Why ASNA AVL" } },
        { href: contactLink, label: { ar: "اتصل بنا", en: "Contact Us" } },
      ]
    }
  ];

  // دالة مساعدة لعرض النص حسب اللغة
  const getText = (arText: string, enText: string) => {
    return language === "ar" ? arText : enText;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        ref={navbarRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg" 
            : "bg-white border-b border-gray-200"
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={homeLink} className="flex-shrink-0 flex items-center gap-2 group">
              <img 
                src="/logo.png" 
                alt="ASNA AVL" 
                className="h-12 w-14 object-contain"
              />
              <span className="text-lg sm:text-2xl font-extrabold tracking-tighter text-gray-900">
                ASNA AVL
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => item.items && handleMouseEnter(item.key)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3 xl:px-4 py-2 rounded-xl text-sm xl:text-base font-medium transition-all cursor-pointer ${
                      activeDropdown === item.key
                        ? "bg-accent/10 text-accent"
                        : "hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button
                    className={`flex items-center gap-1 px-3 xl:px-4 py-2 rounded-xl text-sm xl:text-base font-medium transition-all cursor-pointer ${
                      activeDropdown === item.key
                        ? "bg-accent/10 text-accent"
                        : "hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    <span>{item.label}</span>
                    <motion.div
                      animate={{ rotate: activeDropdown === item.key ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                )}

                <AnimatePresence>
                  {activeDropdown === item.key && item.items && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full ltr:left-0 rtl:right-0 mt-2 w-64 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden"
                    >
                      <div className="p-2">
                        {item.items.map((subItem, index) => (
                          <motion.div
                            key={subItem.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03 }}
                          >
                            <Link
                              href={subItem.href}
                              className="block px-4 py-3 rounded-xl hover:bg-accent/10 text-gray-700 hover:text-accent font-medium transition-all hover:translate-x-1"
                            >
                              {subItem.label[language]}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 xl:px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition-all text-sm xl:text-base font-medium group cursor-pointer text-gray-700"
            >
              <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>{language === "ar" ? "English" : "العربية"}</span>
            </button>
            {/* Catchy Offers Button */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Link 
                href="#offers" 
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-accent border border-accent/50 rounded-xl text-white font-bold text-sm relative overflow-hidden group shadow-lg shadow-accent/40 hover:shadow-accent/60 transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 whitespace-nowrap">
                  {language === "ar" ? "اكتشف عروضنا الجديدة والحصرية!" : "Discover our exclusive offers!"}
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-white/20 rounded-xl"
                  animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </Link>
            </motion.div>

            
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors relative w-10 h-10 flex items-center justify-center cursor-pointer text-gray-700"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gray-200 bg-white overflow-hidden"
          >
            <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="p-4 space-y-4">
                {/* Products Section */}
                <div className="space-y-2">
                  <Link 
                    href={`/${language}/products`} 
                    onClick={() => setIsOpen(false)} 
                    className="text-sm font-semibold text-gray-500 px-3 block hover:text-accent transition-colors"
                  >
                    {t("nav.products")}
                  </Link>
                </div>

                {/* Solutions Section */}
                <div className="space-y-2">
                  <Link 
                    href={`/${language}/solutions`} 
                    onClick={() => setIsOpen(false)} 
                    className="text-sm font-semibold text-gray-500 px-3 block hover:text-accent transition-colors"
                  >
                    {t("nav.solutions")}
                  </Link>
                </div>

                {/* Resources Section */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-500 px-3">
                    {t("nav.resources")}
                  </div>
                  <div className="grid gap-1">
                    <Link href={blogLink} onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-accent/10 text-gray-700 hover:text-accent font-medium transition-all">
                      {getText("المدونة", "Blog")}
                    </Link>
                  </div>
                </div>

                {/* Company Section */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-500 px-3">
                    {t("nav.company")}
                  </div>
                  <div className="grid gap-1">
                    <Link href={aboutLink} onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-accent/10 text-gray-700 hover:text-accent font-medium transition-all">
                      {getText("نبذة عنا", "About Us")}
                    </Link>
                    <Link href={whyLink} onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-accent/10 text-gray-700 hover:text-accent font-medium transition-all">
                      {getText("لماذا ASNA AVL", "Why ASNA AVL")}
                    </Link>
                    <Link href={contactLink} onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-accent/10 text-gray-700 hover:text-accent font-medium transition-all">
                      {getText("اتصل بنا", "Contact Us")}
                    </Link>
                  </div>
                </div>

                {/* App Link */}
                <Link
                  href={appLink}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl hover:bg-accent/10 text-gray-700 hover:text-accent font-medium transition-all"
                >
                  {getText("التطبيق", "App")}
                </Link>

                {/* Pricing Link */}
                <Link
                  href={pricingLink}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl hover:bg-accent/10 text-gray-700 hover:text-accent font-medium transition-all"
                >
                  {t("nav.pricing")}
                </Link>

                {/* Offers Link (Mobile) */}
                <Link
                  href="#offers"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl bg-accent text-white font-bold transition-all relative overflow-hidden shadow-lg shadow-accent/30"
                >
                  <span className="flex items-center gap-2 relative z-10">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </motion.div>
                    {language === "ar" ? "اكتشف عروضنا الجديدة والحصرية!" : "Discover our exclusive offers!"}
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  />
                </Link>

                {/* Language and Demo Buttons */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <button
                    onClick={toggleLanguage}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition-all flex items-center justify-center gap-2 font-medium cursor-pointer text-gray-700"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{language === "ar" ? "English" : "العربية"}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </div>
  );
};
