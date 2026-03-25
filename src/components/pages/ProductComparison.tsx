"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import { fetchApi, Product } from "@/lib/api";
import { Check, X, Loader2, ArrowLeftRight, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ComparisonResponse {
  products: Product[];
}

interface ProductComparisonProps {
  id1: string;
  id2: string;
}

export default function ProductComparison({ id1, id2 }: ProductComparisonProps) {
  const { t, language } = useLanguage();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadComparison() {
      setLoading(true);
      try {
        const data = await fetchApi(`/api/products/compare/${id1}/${id2}`);
        if (data && data.products) {
          setProducts(data.products);
        } else {
          setError(language === "ar" ? "فشل في تحميل بيانات المقارنة" : "Failed to load comparison data");
        }
      } catch (err) {
        setError(language === "ar" ? "حدث خطأ أثناء تحميل البيانات" : "An error occurred while loading data");
      } finally {
        setLoading(false);
      }
    }

    if (id1 && id2) {
      loadComparison();
    }
  }, [id1, id2, language]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
        <p className="text-gray-500 font-medium">
          {language === "ar" ? "جاري تحميل المقارنة..." : "Loading comparison..."}
        </p>
      </div>
    );
  }

  if (error || products.length < 2) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-2">
          <X className="w-8 h-8 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          {language === "ar" ? "عذراً، حدث خطأ" : "Sorry, an error occurred"}
        </h2>
        <p className="text-gray-600 max-w-md">
          {error || (language === "ar" ? "لم نتمكن من العثور على المنتجات للمقارنة" : "We couldn't find the products to compare")}
        </p>
      </div>
    );
  }

  const attributes = [
    { key: "brand", label: t("compare.brand") },
    { key: "network", label: t("compare.network") },
    { key: "sound", label: t("compare.sound") },
    { key: "interference", label: t("compare.interference") },
    { key: "power", label: t("compare.power") },
    { key: "installation", label: t("compare.installation") },
    { key: "price", label: t("compare.price"), isPrice: true },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-500 hover:text-accent font-bold transition-colors group"
        >
          {language === "ar" ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
          {language === "ar" ? "العودة للمنتجات" : "Back to Products"}
        </button>
      </div>

      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-4"
        >
          <ArrowLeftRight className="w-8 h-8 text-blue-600" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          {t("compare.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600"
        >
          {t("compare.subtitle")}
        </motion.p>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-gray-100 bg-white shadow-xl shadow-blue-500/5">
        <table className="w-full text-right rtl:text-right ltr:text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="p-6 text-sm font-semibold text-gray-400 uppercase tracking-wider w-1/4">
                {t("compare.attribute")}
              </th>
              {products.map((product, idx) => (
                <th key={product._id} className="p-6 w-1/3">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100">
                      <Image
                        src={product.imageUrl || "/placeholder.png"}
                        alt={product.name}
                        fill
                        className="object-contain p-2"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 text-center line-clamp-2">
                      {product.name}
                    </h3>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {attributes.map((attr, idx) => (
              <motion.tr
                key={attr.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="hover:bg-blue-50/30 transition-colors"
              >
                <td className="p-6 font-semibold text-gray-700 bg-gray-50/30">
                  {attr.label}
                </td>
                {products.map((product) => (
                  <td key={product._id} className="p-6 text-center">
                    {attr.isPrice ? (
                      <span className="text-xl font-bold text-blue-600">
                        {product.discountPrice || product.price} 
                        <span className="text-sm font-normal text-gray-500 mr-1">
                          {language === "ar" ? "ر.س" : "SAR"}
                        </span>
                      </span>
                    ) : (
                      <span className="text-gray-600 font-medium">
                        {product[attr.key as keyof Product] || "-"}
                      </span>
                    )}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product._id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-4">{product.name}</h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.channels?.map((channel) => (
                <span key={channel} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                  {channel}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
