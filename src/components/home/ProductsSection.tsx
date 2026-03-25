"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Package, LayoutGrid, Layers, ShoppingCart, ArrowRight, Sparkles, TrendingUp, Star, Heart } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { fetchApi, MainCategory, SubCategory, NestedCategory, Product } from "@/lib/api";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export const ProductsSection = () => {
  const { language } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");
  
  const [mainCategories, setMainCategories] = useState<MainCategory[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [nestedCategories, setNestedCategories] = useState<NestedCategory[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  
  const [selectedMain, setSelectedMain] = useState<string | null>(null);
  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const [selectedNested, setSelectedNested] = useState<string | null>(null);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [mains, subs, nesteds, allProducts] = await Promise.all([
        fetchApi("/api/mainCategories"),
        fetchApi("/api/subCategories"),
        fetchApi("/api/nestedCategories"),
        fetchApi("/api/products")
      ]);

      if (mains) setMainCategories(mains);
      if (subs) setSubCategories(subs);
      if (nesteds) setNestedCategories(nesteds);
      if (allProducts) setProducts(allProducts);
      
      if (categoryId) {
        setSelectedMain(categoryId);
      }
      
      setLoading(false);
    };
    loadData();
  }, []);

  const resetSelection = () => {
    setSelectedMain(null);
    setSelectedSub(null);
    setSelectedNested(null);
  };

  const filteredSubs = selectedMain 
    ? subCategories.filter(s => s.fatherId === selectedMain)
    : [];

  const filteredNesteds = selectedSub
    ? nestedCategories.filter(n => n.subCategoryId === selectedSub)
    : [];

  const filteredProducts = selectedNested
    ? products.filter(p => p.subSubCategory === selectedNested)
    : selectedSub
    ? products.filter(p => p.subCategory === selectedSub)
    : selectedMain
    ? products.filter(p => p.category === selectedMain)
    : products;

  if (loading) return null;

  // Breadcrumb animation variants
  const breadcrumbVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  // Category card variants
  const categoryCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5 }
    })
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/bg6.jpg')",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}>
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-accent">
                {language === "ar" ? "منتجاتنا" : "Our Products"}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
              {language === "ar" ? "اكتشف تشكيلتنا" : "Discover Our Collection"}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              {language === "ar" 
                ? "اختر من بين مجموعة واسعة من المنتجات عالية الجودة" 
                : "Choose from a wide range of high-quality products"}
            </p>
          </motion.div>

          {/* Breadcrumb Navigation */}
          {(selectedMain || selectedSub || selectedNested) && (
            <motion.div 
              variants={breadcrumbVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center gap-2 text-slate-500 font-medium mt-8"
            >
              <button 
                onClick={resetSelection}
                className={`px-3 py-1.5 rounded-lg transition-all duration-300 ${
                  !selectedMain 
                    ? 'bg-accent text-white shadow-lg shadow-accent/30' 
                    : 'hover:bg-slate-100'
                }`}
              >
                {language === "ar" ? "الكل" : "All"}
              </button>
              {selectedMain && (
                <>
                  <ChevronRight size={16} className="rtl-flip text-slate-300" />
                  <button 
                    onClick={() => { setSelectedSub(null); setSelectedNested(null); }}
                    className={`px-3 py-1.5 rounded-lg transition-all duration-300 ${
                      selectedMain && !selectedSub 
                        ? 'bg-accent text-white shadow-lg shadow-accent/30' 
                        : 'hover:bg-slate-100'
                    }`}
                  >
                    {mainCategories.find(m => m._id === selectedMain)?.[language === "ar" ? "nameAr" : "nameEn"]}
                  </button>
                </>
              )}
              {selectedSub && (
                <>
                  <ChevronRight size={16} className="rtl-flip text-slate-300" />
                  <button 
                    onClick={() => setSelectedNested(null)}
                    className={`px-3 py-1.5 rounded-lg transition-all duration-300 ${
                      selectedSub && !selectedNested 
                        ? 'bg-accent text-white shadow-lg shadow-accent/30' 
                        : 'hover:bg-slate-100'
                    }`}
                  >
                    {subCategories.find(s => s._id === selectedSub)?.[language === "ar" ? "nameAr" : "nameEn"]}
                  </button>
                </>
              )}
              {selectedNested && (
                <>
                  <ChevronRight size={16} className="rtl-flip text-slate-300" />
                  <span className="px-3 py-1.5 rounded-lg bg-accent text-white shadow-lg shadow-accent/30">
                    {nestedCategories.find(n => n._id === selectedNested)?.[language === "ar" ? "nameAr" : "nameEn"]}
                  </span>
                </>
              )}
            </motion.div>
          )}
        </div>

        {/* Navigation Levels */}
        <div className="space-y-8 mb-16">
          {/* Main Categories */}
          {!selectedMain && (
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {mainCategories.map((cat, idx) => (
                <motion.button
                  key={cat._id}
                  custom={idx}
                  variants={categoryCardVariants}
                  onClick={() => setSelectedMain(cat._id)}
                  className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 text-start overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <LayoutGrid className="text-accent" size={28} />
                    </div>
                    <div className="text-xl font-black text-primary mb-2 group-hover:text-accent transition-colors">
                      {language === "ar" ? cat.nameAr : cat.nameEn}
                    </div>
                    <div className="text-sm text-slate-400">
                      {language === "ar" ? "استكشف المنتجات" : "Explore products"}
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Sub Categories */}
          {selectedMain && !selectedSub && (
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filteredSubs.map((cat, idx) => (
                <motion.button
                  key={cat._id}
                  custom={idx}
                  variants={categoryCardVariants}
                  onClick={() => setSelectedSub(cat._id)}
                  className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 text-start overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <Layers className="text-accent" size={28} />
                    </div>
                    <div className="text-xl font-black text-primary mb-2 group-hover:text-accent transition-colors">
                      {language === "ar" ? cat.nameAr : cat.nameEn}
                    </div>
                    <div className="text-sm text-slate-400">
                      {language === "ar" ? "عرض التفاصيل" : "View details"}
                    </div>
                  </div>
                </motion.button>
              ))}
              {filteredSubs.length === 0 && (
                <div className="col-span-full text-center py-16">
                  <Package size={48} className="mx-auto text-slate-300 mb-4" />
                  <div className="text-slate-400 font-medium">
                    {language === "ar" ? "لا توجد أقسام فرعية" : "No sub-categories found"}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Nested Categories */}
          {selectedSub && !selectedNested && (
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filteredNesteds.map((cat, idx) => (
                <motion.button
                  key={cat._id}
                  custom={idx}
                  variants={categoryCardVariants}
                  onClick={() => setSelectedNested(cat._id)}
                  className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 text-start overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <Package className="text-accent" size={28} />
                    </div>
                    <div className="text-xl font-black text-primary mb-2 group-hover:text-accent transition-colors">
                      {language === "ar" ? cat.nameAr : cat.nameEn}
                    </div>
                    <div className="text-sm text-slate-400">
                      {language === "ar" ? "تصفح المنتجات" : "Browse products"}
                    </div>
                  </div>
                </motion.button>
              ))}
              {filteredNesteds.length === 0 && (
                <div className="col-span-full text-center py-16">
                  <Package size={48} className="mx-auto text-slate-300 mb-4" />
                  <div className="text-slate-400 font-medium">
                    {language === "ar" ? "لا توجد أقسام متداخلة" : "No nested categories found"}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>

        {/* Products Grid */}
        {(selectedMain || selectedSub || selectedNested) && (
          <div className="mt-12">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <h3 className="text-2xl font-black text-primary">
                  {language === "ar" ? "المنتجات المتاحة" : "Available Products"}
                </h3>
              </div>
              <div className="text-sm text-slate-400">
                {filteredProducts.length} {language === "ar" ? "منتج" : "products"}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: idx * 0.05 }}
                    key={product._id}
                    className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
                  >
                    <Link 
                      href={`/${language}/products/${product._id}`}
                      className="relative h-64 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center p-8 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="max-h-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                        referrerPolicy="no-referrer"
                      />
                      {product.discountPrice > 0 && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-accent to-accent/80 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                          {product.discountPrice} SAR
                        </div>
                      )}
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent/10 text-accent">
                          {product.brand}
                        </span>
                      </div>
                      <Link href={`/${language}/products/${product._id}`}>
                        <h3 className="text-xl font-black text-primary mb-3 hover:text-accent transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                      </Link>
                      <div 
                        className="text-slate-500 text-sm line-clamp-2 mb-4"
                        dangerouslySetInnerHTML={{ __html: product.description }}
                      />
                      <button 
                        onClick={() => router.push(`/${language}/pricing?product=${encodeURIComponent(product.name)}`)}
                        className="w-full py-3 rounded-xl bg-primary text-white font-bold hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      >
                        <ShoppingCart size={18} className="group-hover/btn:scale-110 transition-transform" />
                        {language === "ar" ? "طلب عرض سعر" : "Request a Quote"}
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform rtl-flip" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {filteredProducts.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-24"
                >
                  <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Package size={48} className="text-slate-300" />
                  </div>
                  <div className="text-slate-400 font-medium text-xl mb-2">
                    {language === "ar" ? "لا توجد منتجات" : "No products found"}
                  </div>
                  <div className="text-slate-300">
                    {language === "ar" 
                      ? "لم نجد أي منتجات في هذا القسم" 
                      : "We couldn't find any products in this category"}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};