"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductsSection } from "@/components/home/ProductsSection";
import { useLanguage } from "@/components/LanguageContext";

export default function ProductsPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <div className="py-20 text-white"
        style={{
          backgroundImage: "url('/bgg.jpeg')",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            {language === "ar" ? "منتجاتنا" : "Our Products"}
          </h1>
          <p className="text-xl text-white/70 max-w-2xl">
            {language === "ar" 
              ? "استكشف مجموعتنا الكاملة من المنتجات والحلول التقنية المتقدمة."
              : "Explore our full range of advanced products and technical solutions."}
          </p>
        </div>
      </div>
      <ProductsSection />
      <Footer />
    </main>
  );
}
