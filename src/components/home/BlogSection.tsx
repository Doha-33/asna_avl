"use client";

import { useLanguage } from "../LanguageContext";
import { ArrowRight, Calendar, User, Clock, Tag, Eye } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchApi, Post } from "@/lib/api";
import { motion } from "framer-motion";

export const BlogSection = () => {
  const { language } = useLanguage();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchApi("/api/posts");
      if (data) {
        // Filter published posts and take latest 4
        const published = data.filter((p: Post) => p.status === "Published");
        setPosts(published.slice(0, 4));
      }
      setLoading(false);
    };
    loadPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
          <div className="text-primary/50 font-medium">
            {language === "ar" ? "جاري تحميل آخر المدونات..." : "Loading latest blogs..."}
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) return null;

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6"
        >
          <div className="text-start">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-bold text-accent">
                {language === "ar" ? "المدونة" : "Blog"}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4">
              {language === "ar" ? "آخر المقالات" : "Latest Articles"}
            </h2>
            <p className="text-base md:text-lg text-slate-500 max-w-2xl">
              {language === "ar" 
                ? "ابقَ على اطلاع بأحدث المقالات والنصائح في عالم إدارة الأسطول وتتبع المركبات" 
                : "Stay informed with the latest articles and tips in fleet management and vehicle tracking"}
            </p>
          </div>
          <Link 
            href={`/${language}/blog`} 
            className="group flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:bg-accent hover:text-white transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200"
          >
            <span>{language === "ar" ? "عرض جميع المقالات" : "View All Articles"}</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform rtl-flip" />
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8"
        >
          {/* Featured Post */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <Link 
              href={`/${language}/blog/${featuredPost._id}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={language === "ar" ? featuredPost.titleAr : featuredPost.titleEn} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-accent text-white text-xs font-bold rounded-full shadow-lg">
                    {language === "ar" ? "مميز" : "Featured"}
                  </span>
                </div>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-6 md:p-8">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-accent" />
                    <span>{new Date(featuredPost.createdAt).toLocaleDateString(language === "ar" ? "ar-EG" : "en-US")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User size={14} className="text-accent" />
                    <span>{language === "ar" ? featuredPost.userId.nameAr : featuredPost.userId.nameEn}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-accent" />
                    <span>{Math.ceil(featuredPost.contentAr.length / 500)} {language === "ar" ? "دقائق قراءة" : "min read"}</span>
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {language === "ar" ? featuredPost.titleAr : featuredPost.titleEn}
                </h3>
                
                <div 
                  className="text-slate-600 text-sm md:text-base mb-6 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: language === "ar" ? featuredPost.contentAr : featuredPost.contentEn }}
                />
                
                <div className="flex items-center gap-2 font-bold text-accent group-hover:gap-3 transition-all">
                  <span>{language === "ar" ? "اقرأ المزيد" : "Read More"}</span>
                  <ArrowRight size={18} className="rtl-flip" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Smaller Posts */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-4 md:gap-6">
            {otherPosts.map((post, idx) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link 
                  href={`/${language}/blog/${post._id}`}
                  className="group flex gap-4 bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 overflow-hidden rounded-xl">
                    <img 
                      src={post.image} 
                      alt={language === "ar" ? post.titleAr : post.titleEn} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <Calendar size={12} />
                      <span>{new Date(post.createdAt).toLocaleDateString(language === "ar" ? "ar-EG" : "en-US")}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />
                      <Clock size={12} />
                      <span>{Math.ceil(post.contentAr.length / 500)} {language === "ar" ? "دقائق" : "min"}</span>
                    </div>
                    <h4 className="text-sm md:text-base font-bold text-primary group-hover:text-accent transition-colors line-clamp-2">
                      {language === "ar" ? post.titleAr : post.titleEn}
                    </h4>
                    <div 
                      className="text-xs text-slate-500 mt-2 line-clamp-2 hidden md:block"
                      dangerouslySetInnerHTML={{ __html: language === "ar" ? post.contentAr : post.contentEn }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};