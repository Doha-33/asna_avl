"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight, 
  ShoppingCart, 
  ShieldCheck, 
  Zap, 
  CheckCircle2,
  Package,
  ChevronRight,
  ArrowLeftRight
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useParams, useRouter } from "next/navigation";
import { fetchApi, Product } from "@/lib/api";
import Link from "next/link";

export default function ProductDetail() {
  const { language } = useLanguage();
  const params = useParams();
  const router = useRouter();
  const isAr = language === "ar";
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      const allProducts: Product[] = await fetchApi("/api/products");
      if (allProducts) {
        const found = allProducts.find(p => p._id === params.id);
        if (found) setProduct(found);
      }
      setLoading(false);
    };
    loadProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6">
        <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        <div className="text-primary/70 font-bold text-xl">
          {isAr ? "جاري تحميل المنتج..." : "Loading product..."}
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center text-primary">
        <h1 className="text-4xl font-bold mb-4">{isAr ? "المنتج غير موجود" : "Product not found"}</h1>
        <Link href={`/${language}/products`} className="text-accent hover:underline font-bold">
          {isAr ? "العودة للمنتجات" : "Back to products"}
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-bold">
            <Link href={`/${language}/products`} className="hover:text-accent transition-colors">
              {isAr ? "المنتجات" : "Products"}
            </Link>
            <ChevronRight size={16} className="rtl-flip" />
            <span className="text-primary">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image Gallery */}
            <motion.div 
              initial={{ opacity: 0, x: isAr ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="aspect-square bg-slate-50 rounded-[40px] border-2 border-slate-100 flex items-center justify-center p-12 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="max-h-full object-contain hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div 
              initial={{ opacity: 0, x: isAr ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm">
                    {product.brand}
                  </span>
                  {product.discountPrice > 0 && (
                    <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-600 font-bold text-sm">
                      {isAr ? "خصم خاص" : "Special Discount"}
                    </span>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                  {product.name}
                </h1>
                {product.discountPrice > 0 && (
                  <div className="text-3xl font-black text-emerald-500 mb-6">
                    {product.discountPrice} SAR
                  </div>
                )}
                <div 
                  className="text-lg text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />

                {/* New Attributes Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-8 border-y border-slate-100 my-8">
                  {product.network && (
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-slate-400 uppercase font-black tracking-wider">{isAr ? "الشبكة" : "Network"}</span>
                      <span className="text-primary font-bold text-sm">{product.network}</span>
                    </div>
                  )}
                  {product.sound && (
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-slate-400 uppercase font-black tracking-wider">{isAr ? "الصوت" : "Sound"}</span>
                      <span className="text-primary font-bold text-sm">{product.sound}</span>
                    </div>
                  )}
                  {product.interference && (
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-slate-400 uppercase font-black tracking-wider">{isAr ? "التشويش" : "Interference"}</span>
                      <span className="text-primary font-bold text-sm">{product.interference}</span>
                    </div>
                  )}
                  {product.power && (
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-slate-400 uppercase font-black tracking-wider">{isAr ? "الطاقة" : "Power"}</span>
                      <span className="text-primary font-bold text-sm">{product.power}</span>
                    </div>
                  )}
                  {product.installation && (
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] text-slate-400 uppercase font-black tracking-wider">{isAr ? "التركيب" : "Installation"}</span>
                      <span className="text-primary font-bold text-sm">{product.installation}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: isAr ? "ضمان لمدة عام" : "1 Year Warranty", icon: <ShieldCheck className="text-accent" /> },
                  { title: isAr ? "تركيب احترافي" : "Professional Install", icon: <Zap className="text-accent" /> },
                  { title: isAr ? "دعم فني 24/7" : "24/7 Support", icon: <CheckCircle2 className="text-accent" /> },
                  { title: isAr ? "توصيل سريع" : "Fast Delivery", icon: <Package className="text-accent" /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    {item.icon}
                    <span className="font-bold text-sm text-primary">{item.title}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-100">
                <button 
                  onClick={() => router.push(`/${language}/pricing?product=${encodeURIComponent(product.name)}`)}
                  className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-primary text-white font-black text-lg hover:bg-accent transition-all shadow-xl shadow-primary/20 hover:shadow-accent/30 flex items-center justify-center gap-3"
                >
                  <ShoppingCart size={24} />
                  {isAr ? "طلب عرض سعر" : "Request a Quote"}
                </button>
                <button 
                  onClick={() => router.push(`/${language}/products?category=${product.category}`)}
                  className="w-full sm:w-auto px-8 py-5 rounded-2xl border-2 border-slate-100 text-primary font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
                >
                  <ArrowLeftRight size={20} />
                  {isAr ? "قارن مع منتجات أخرى" : "Compare with others"}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
