"use client";

import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  User,
  Clock,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider, useLanguage } from "@/components/LanguageContext";
import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchApi, Post } from "@/lib/api";

const BlogContent = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadPosts = async () => {
    setLoading(true);
    setError(false);
    const data = await fetchApi("/api/posts", 30000); // 30s timeout for Render.com spin-up
    if (data) {
      const published = data.filter((p: Post) => p.status === "Published");
      setPosts(published);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const categories = [
    { id: "all", label: language === "ar" ? "الكل" : "All" },
    {
      id: "fleet",
      label: language === "ar" ? "إدارة الأسطول" : "Fleet Management",
    },
    { id: "tech", label: language === "ar" ? "التكنولوجيا" : "Technology" },
    {
      id: "logistics",
      label: language === "ar" ? "النقل واللوجستيات" : "Logistics",
    },
    {
      id: "regulations",
      label: language === "ar" ? "لوائح النقل" : "Regulations",
    },
    {
      id: "tracking",
      label: language === "ar" ? "تتبع المركبات" : "Vehicle Tracking",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary flex flex-col items-center justify-center gap-6">
        <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        <div className="text-primary/70 font-bold text-xl">
          {language === "ar" ? "جاري تحميل المدونات..." : "Loading blogs..."}
        </div>
        <p className="text-primary/40 text-sm max-w-xs text-center">
          {language === "ar" 
            ? "قد يستغرق هذا بضع ثوانٍ لإيقاظ الخادم..." 
            : "This might take a few seconds to wake up the server..."}
        </p>
      </div>
    );
  }

  if (error || posts.length === 0) {
    return (
      <div className="min-h-screen bg-secondary flex flex-col items-center justify-center gap-8 p-4">
        <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center">
          <Search size={48} className="text-primary/20" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-2">
            {language === "ar" ? "لم يتم العثور على مدونات" : "No blogs found"}
          </h2>
          <p className="text-primary/60">
            {language === "ar" 
              ? "عذراً، لا توجد مقالات منشورة حالياً أو حدث خطأ في الاتصال." 
              : "Sorry, there are no published articles at the moment or a connection error occurred."}
          </p>
        </div>
        <button 
          onClick={loadPosts}
          className="accent-button px-8 py-3"
        >
          {language === "ar" ? "إعادة المحاولة" : "Retry"}
        </button>
      </div>
    );
  }

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  const filteredPosts =
    activeCategory === "all"
      ? otherPosts
      : otherPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-secondary text-white">
      <Navbar />

      {/* Featured Post */}
      <section className="py-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/${language}/blog/${featuredPost._id}`}>
            <div className="relative group cursor-pointer overflow-hidden rounded-[40px] shadow-2xl">
              <img
                src={featuredPost.image}
                alt={language === "ar" ? featuredPost.titleAr : featuredPost.titleEn}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-start">
                <div className="flex items-center justify-start gap-4 mb-4">
                  <span className="bg-accent text-primary px-3 py-1 rounded-lg text-xs font-bold uppercase">
                    {language === "ar" ? "مميز" : "Featured"}
                  </span>
                  <span className="text-white/60 text-sm">
                    {new Date(featuredPost.createdAt).toLocaleDateString(language === "ar" ? "ar-EG" : "en-US")}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 max-w-4xl ml-0">
                  {language === "ar" ? featuredPost.titleAr : featuredPost.titleEn}
                </h2>
                <div 
                  className="text-xl text-white/70 mb-8 max-w-3xl ml-0 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: language === "ar" ? featuredPost.contentAr : featuredPost.contentEn }}
                />

                <div className="flex items-center justify-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                    {featuredPost.userId.image ? (
                      <img src={featuredPost.userId.image} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <User className="text-white" />
                    )}
                  </div>
                  <div className="text-start">
                    <div className="text-white font-bold">
                      {language === "ar" ? featuredPost.userId.nameAr : featuredPost.userId.nameEn}
                    </div>
                    <div className="text-white/40 text-sm">
                      {language === "ar" ? "كاتب" : "Author"}
                    </div>
                  </div>
                  <div className="accent-button ml-8">
                    {language === "ar"
                      ? "قراءة المدونة كاملة"
                      : "Read Full Blog"}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
      {/* Header Section */}
      <section className="pt-10 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-start">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                {language === "ar" ? "المدونة" : "Blog"}
              </h1>
            </div>
            <div className="relative w-full md:w-96">
              <Search className="absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 text-primary/40 w-5 h-5" />
              <input
                type="text"
                placeholder={
                  language === "ar" ? "بحث في المدونة" : "Search in blog"
                }
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-12 py-3 focus:border-accent outline-none transition-all"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-xl font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-white"
                    : "bg-gray-50 text-primary/60 hover:bg-gray-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={post._id}
                className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <Link href={`/${language}/blog/${post._id}`}>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={language === "ar" ? post.titleAr : post.titleEn}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 text-start">
                    <div className="flex items-center justify-start gap-4 text-sm text-primary/40 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> 10 min
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {new Date(post.createdAt).toLocaleDateString(language === "ar" ? "ar-EG" : "en-US")}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors line-clamp-2">
                      {language === "ar" ? post.titleAr : post.titleEn}
                    </h3>
                    <div 
                      className="text-primary/60 mb-8 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: language === "ar" ? post.contentAr : post.contentEn }}
                    />

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center overflow-hidden">
                          {post.userId.image ? (
                            <img src={post.userId.image} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <User size={16} className="text-primary/40" />
                          )}
                        </div>
                        <div className="text-start">
                          <div className="text-sm font-bold">{language === "ar" ? post.userId.nameAr : post.userId.nameEn}</div>
                          <div className="text-[10px] text-primary/40">
                            {language === "ar" ? "فريق ASNA AVL" : "ASNA AVL Team"}
                          </div>
                        </div>
                      </div>
                      <div className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                        <span>
                          {language === "ar" ? "اقرأ المزيد" : "Read More"}
                        </span>
                        <ArrowLeft
                          className={language === "ar" ? "rotate-180" : ""}
                          size={18}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            {language === "ar"
              ? "اشترك في نشرتنا الإخبارية"
              : "Subscribe to our newsletter"}
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            {language === "ar"
              ? "ابقى على اطلاع بأحدث معلومات إدارة الأسطول والاتجاهات الصناعية والعروض المميزة"
              : "Stay informed with the latest fleet management info, industry trends, and special offers"}
          </p>

          <form className="max-w-xl mx-auto flex flex-col gap-4">
            <input
              type="email"
              placeholder={
                language === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"
              }
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:border-accent transition-all text-center"
            />
            <button className="accent-button w-full py-4 text-lg">
              {language === "ar" ? "اشترك" : "Subscribe"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <BlogContent />;
}
