"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight, ArrowLeft, Package, Sparkles, TrendingUp, Eye, Heart, Star } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { fetchApi, MainCategory, Product } from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const FeaturedProducts = () => {
  const { language } = useLanguage();
  const router = useRouter();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  useEffect(() => {
    const loadFeatured = async () => {
      try {
        const [mains, allProducts] = await Promise.all([
          fetchApi("/api/mainCategories"),
          fetchApi("/api/products")
        ]);

        if (mains && allProducts) {
          // Get the first product from each of the first 4 main categories
          const featured: Product[] = [];
          const usedCategories = new Set<string>();

          for (const main of mains) {
            if (featured.length >= 4) break;
            const product = allProducts.find((p: Product) => p.category === main._id);
            if (product) {
              featured.push(product);
              usedCategories.add(main._id);
            }
          }

          // If we have less than 4, just fill with any products
          if (featured.length < 4) {
            for (const p of allProducts) {
              if (featured.length >= 4) break;
              if (!featured.find(fp => fp._id === p._id)) {
                featured.push(p);
              }
            }
          }

          setFeaturedProducts(featured);
        }
      } catch (error) {
        console.error("Error loading featured products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadFeatured();
  }, []);

  const handleQuoteRequest = (productName: string) => {
    router.push(`/${language}/pricing?product=${encodeURIComponent(productName)}`);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/${language}/products/${productId}`);
  };

  if (loading || featuredProducts.length === 0) return null;

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-accent">
                {language === "ar" ? "اختيارات مميزة" : "Featured Choices"}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
              {language === "ar" ? "منتجاتنا المميزة" : "Featured Products"}
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              {language === "ar" 
                ? "اكتشف مجموعتنا الواسعة من الحلول التقنية المتقدمة المصممة خصيصاً لتلبية احتياجاتك."
                : "Discover our wide range of advanced technical solutions specifically designed to meet your needs."}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href={`/${language}/products`}
              className="group flex items-center gap-3 px-8 py-4 bg-white rounded-2xl text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-primary/20"
            >
              <span>{language === "ar" ? "عرض جميع المنتجات" : "View All Products"}</span>
              {language === "ar" ? 
                <ArrowLeft className="group-hover:-translate-x-2 transition-transform duration-300" size={18} /> : 
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={18} />
              }
            </Link>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredProduct(product._id)}
              onMouseLeave={() => setHoveredProduct(null)}
              key={product._id}
              className="group relative bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col cursor-pointer"
              onClick={() => handleProductClick(product._id)}
            >
              {/* Image Container */}
              <div className="relative h-64 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="max-h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute top-4 right-4">
                  <span className="text-xs uppercase tracking-wider font-black px-3 py-1.5 rounded-full bg-primary/10 text-primary backdrop-blur-sm">
                    {product.brand}
                  </span>
                </div>

                {/* Quick View Button on Hover */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: hoveredProduct === product._id ? 1 : 0, y: hoveredProduct === product._id ? 0 : 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-primary/80 backdrop-blur-sm flex items-center justify-center gap-3"
                >
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product._id);
                    }}
                    className="px-6 py-3 bg-white text-primary rounded-xl font-bold hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-2"
                  >
                    <Eye size={18} />
                    {language === "ar" ? "عرض التفاصيل" : "View Details"}
                  </button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">

                <h3 className="text-xl font-black text-primary mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                
                <div 
                  className="text-slate-500 text-sm line-clamp-2 mb-4 flex-grow"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />

                {/* Price and Action */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuoteRequest(product.name);
                    }}
                    className="group/btn px-5 py-2.5 rounded-xl bg-primary text-white font-bold hover:bg-accent transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <ShoppingCart size={16} className="group-hover/btn:scale-110 transition-transform" />
                    <span className="text-sm">
                      {language === "ar" ? "طلب عرض سعر" : "Request Quote"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent/5 to-transparent rounded-tl-full pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};