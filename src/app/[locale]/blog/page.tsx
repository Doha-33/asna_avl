"use client";

import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  User,
  Clock,
  ChevronRight,
  ArrowLeft,
  Tag,
  Eye,
  Heart,
  Share2,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider, useLanguage } from "@/components/LanguageContext";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { fetchApi, Post } from "@/lib/api";

// Fallback JSON data for when API fails
const FALLBACK_POSTS: Post[] = [
  {
    "_id": "1",
    "titleAr": "أهمية تتبع المركبات وإدارة الأسطول للشركات",
    "titleEn": "The Importance of Vehicle Tracking and Fleet Management for Companies",
    "category": "Fleet Management",
    "status": "Published",
    "contentAr": "في عالم الأعمال اليوم، أصبحت إدارة الأسطول وتتبع المركبات عنصرًا أساسيًا لضمان كفاءة التشغيل وتقليل التكاليف. سواء كنت تدير أسطولًا صغيرًا أو كبيرًا، فإن الاستثمار في منصة تتبع ذكية يمكن أن يحدث فرقًا كبيرًا في الأداء اليومي.",
    "contentEn": "In today's business world, fleet management and vehicle tracking have become essential for ensuring operational efficiency and reducing costs.",
    "image": "https://images.unsplash.com/photo-1570125909232-263263f1c9f1?w=800&h=500&fit=crop",
    "slug": "importance-of-vehicle-tracking",
    "authorName": "Ali",
    "createdAt": "2024-03-15T10:00:00Z",
    "userId": {_id: "mock1", "nameAr": "أحمد محمد", "nameEn": "Ahmed Mohamed", "image": "" }
  },
  {
    "_id": "2",
    "titleAr": "كيف تختار أفضل جهاز تتبع للمركبات؟",
    "titleEn": "How to Choose the Best Vehicle Tracking Device?",
    "category": "Technology",
    "status": "Published",
    "contentAr": "أصبحت أجهزة تتبع المركبات من أهم الأدوات التي تعتمد عليها الشركات والأفراد في مراقبة مركباتهم وتحسين إدارتها. مع وجود العديد من الخيارات في السوق، قد يكون من الصعب اختيار الجهاز المناسب.",
    "contentEn": "Vehicle tracking devices have become one of the most important tools that companies and individuals rely on to monitor their vehicles.",
    "image": "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&h=500&fit=crop",
    "slug": "how-to-choose-tracking-device",
    "authorName": "Ali",
    "createdAt": "2024-03-10T10:00:00Z",
    "userId": {_id: "mock2", "nameAr": "سارة خالد", "nameEn": "Sara Khaled", "image": "" }
  },
  {
    "_id": "3",
    "titleAr": "كيف تساعد تقارير المركبات في تقليل التكاليف؟",
    "titleEn": "How Do Vehicle Reports Help Reduce Costs?",
    "category": "Fleet Management",
    "status": "Published",
    "contentAr": "إدارة المركبات بدون بيانات واضحة قد يؤدي إلى زيادة التكاليف والأعطال. لذلك تعتبر تقارير المركبات من أهم الأدوات التي تساعد الشركات على تحسين الأداء وتقليل المصاريف.",
    "contentEn": "Managing vehicles without clear data can lead to increased costs and breakdowns. Vehicle reports are among the most important tools that help companies improve performance.",
    "image": "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=500&fit=crop",
    "slug": "vehicle-reports-reduce-costs",
    "authorName": "Ali",
    "createdAt": "2024-03-05T10:00:00Z",
    "userId": {_id: "mock3", "nameAr": "محمد إبراهيم", "nameEn": "Mohamed Ibrahim", "image": "" }
  },
  {
    "_id": "4",
    "titleAr": "أهمية الصيانة الدورية للمركبات والتذكيرات الذكية",
    "titleEn": "Regular Vehicle Maintenance and Smart Reminders",
    "category": "Maintenance",
    "status": "Published",
    "contentAr": "الصيانة الدورية من أهم العوامل التي تحافظ على المركبة وتقلل الأعطال المفاجئة. إهمال الصيانة قد يؤدي إلى مشاكل كبيرة وتكاليف مرتفعة.",
    "contentEn": "Regular maintenance is one of the most important factors in maintaining a vehicle and reducing sudden breakdowns.",
    "image": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=500&fit=crop",
    "slug": "regular-maintenance-smart-reminders",
    "authorName": "Ali",
    "createdAt": "2024-02-28T10:00:00Z",
    "userId": {_id: "mock4", "nameAr": "نورا عبدالله", "nameEn": "Nora Abdullah", "image": "" }
  },
  {
    "_id": "5",
    "titleAr": "أهمية حساس الحرارة والرطوبة في المركبات",
    "titleEn": "Importance of Temperature and Humidity Sensors in Vehicles",
    "category": "Technology",
    "status": "Published",
    "contentAr": "في قطاعات نقل الأغذية والأدوية، تعتبر درجة الحرارة والرطوبة من أهم العوامل التي تؤثر على سلامة المنتجات وجودتها.",
    "contentEn": "In food and pharmaceutical transport sectors, temperature and humidity are among the most important factors affecting product safety.",
    "image": "https://images.unsplash.com/photo-1581094794329-c8112c4e8e0a?w=800&h=500&fit=crop",
    "slug": "temperature-humidity-sensors",
    "authorName": "Ali",
    "createdAt": "2024-02-20T10:00:00Z",
    "userId": {_id: "mock5", "nameAr": "خالد المنصور", "nameEn": "Khaled Al-Mansour", "image": "" }
  },
  {
    "_id": "6",
    "titleAr": "أهمية الكاميرات في المركبات وحماية السائق والأسطول",
    "titleEn": "Vehicle Cameras: Protecting Drivers and Fleets",
    "category": "Safety",
    "status": "Published",
    "contentAr": "أصبحت الكاميرات في المركبات من أهم التقنيات الحديثة التي تساعد على زيادة الأمان وتحسين إدارة المركبات.",
    "contentEn": "Vehicle cameras have become one of the most important modern technologies that help increase safety.",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop",
    "slug": "vehicle-cameras-driver-fleet-protection",
    "authorName": "Ali",
    "createdAt": "2024-02-15T10:00:00Z",
    "userId": {_id: "mock6", "nameAr": "عمر السيد", "nameEn": "Omar El-Sayed", "image": "" }
  },
  {
    "_id": "7",
    "titleAr": "الفرق بين أجهزة تتبع المركبات: عادي - OBD - لاسلكي",
    "titleEn": "Differences Between Vehicle Tracking Devices",
    "category": "Technology",
    "status": "Published",
    "contentAr": "أصبحت أجهزة تتبع المركبات جزءًا أساسيًا من إدارة السيارات والأساطيل، لكن يوجد أكثر من نوع من الأجهزة.",
    "contentEn": "Vehicle tracking devices have become an essential part of car and fleet management, but there are multiple types.",
    "image": "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&h=500&fit=crop",
    "slug": "differences-between-tracking-devices",
    "authorName": "Ali",
    "createdAt": "2024-02-10T10:00:00Z",
    "userId": {_id: "mock7", "nameAr": "ليلى حسن", "nameEn": "Laila Hassan", "image": "" }
  },
  {
    "_id": "8",
    "titleAr": "لماذا تختلف أسعار أجهزة التتبع؟ نصائح قبل الشراء",
    "titleEn": "Why Do Tracking Device Prices Differ? Tips Before Buying",
    "category": "Buying Guide",
    "status": "Published",
    "contentAr": "عند البحث عن جهاز تتبع ستلاحظ فروق كبيرة في الأسعار. الفرق غالبًا يكون بسبب جودة التطبيق وخدمة ما بعد البيع.",
    "contentEn": "When searching for a tracking device, you'll notice significant price differences, often due to app quality and after-sales service.",
    "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    "slug": "tracking-device-prices-tips",
    "authorName": "Ali",
    "createdAt": "2024-02-05T10:00:00Z",
    "userId": {_id: "mock8", "nameAr": "أحمد رضا", "nameEn": "Ahmed Reda", "image": "" }
  }
];

const BlogContent = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [usingFallback, setUsingFallback] = useState(false);

  const loadPosts = async () => {
    setLoading(true);
    setError(false);
    setUsingFallback(false);
    
    try {
      const data = await fetchApi("/api/posts", 30000);
      if (data && data.length > 0) {
        const published = data.filter((p: Post) => p.status === "Published");
        if (published.length > 0) {
          setPosts(published);
        } else {
          // Use fallback if no published posts
          setPosts(FALLBACK_POSTS);
          setUsingFallback(true);
        }
      } else {
        // Use fallback data
        setPosts(FALLBACK_POSTS);
        setUsingFallback(true);
      }
    } catch (err) {
      console.error("Error loading posts:", err);
      setPosts(FALLBACK_POSTS);
      setUsingFallback(true);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const categories = [
    { id: "all", label: language === "ar" ? "الكل" : "All", icon: null },
    { id: "Fleet Management", label: language === "ar" ? "إدارة الأسطول" : "Fleet Management", icon: null },
    { id: "Technology", label: language === "ar" ? "التكنولوجيا" : "Technology", icon: null },
    { id: "Safety", label: language === "ar" ? "السلامة" : "Safety", icon: null },
    { id: "Maintenance", label: language === "ar" ? "الصيانة" : "Maintenance", icon: null },
    { id: "Buying Guide", label: language === "ar" ? "دليل الشراء" : "Buying Guide", icon: null },
  ];

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    let filtered = activeCategory === "all" 
      ? posts 
      : posts.filter((post) => post.category === activeCategory);
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((post) => {
        const title = language === "ar" 
          ? post.titleAr.toLowerCase() 
          : post.titleEn.toLowerCase();
        const content = language === "ar" 
          ? post.contentAr.toLowerCase() 
          : post.contentEn.toLowerCase();
        return title.includes(query) || content.includes(query);
      });
    }
    
    return filtered;
  }, [posts, activeCategory, searchQuery, language]);

  const featuredPost = posts[0];
  const otherPosts = filteredPosts;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-accent border-t-transparent rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-accent/20 rounded-full animate-pulse" />
          </div>
        </div>
        <div className="text-center">
          <div className="text-primary/70 font-bold text-xl mb-2">
            {language === "ar" ? "جاري تحميل المدونات..." : "Loading blogs..."}
          </div>
          <p className="text-primary/40 text-sm max-w-xs text-center">
            {language === "ar" 
              ? "قد يستغرق هذا بضع ثوانٍ..." 
              : "This might take a few seconds..."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />

      {/* Hero Section with Gradient */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="text-start max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                  <span className="text-sm font-bold">
                    {language === "ar" ? "مدونتنا" : "Our Blog"}
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {language === "ar" ? "المدونة" : "Blog"}
                </h1>
                <p className="text-xl text-primary/60 mb-8">
                  {language === "ar" 
                    ? "اكتشف أحدث المقالات والنصائح حول تتبع المركبات وإدارة الأسطول"
                    : "Discover the latest articles and tips about vehicle tracking and fleet management"}
                </p>
              </motion.div>
              
              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative max-w-md"
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder={language === "ar" ? "ابحث في المدونة..." : "Search in blog..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-full px-12 py-3 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all shadow-sm"
                />
              </motion.div>
            </div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-8 bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">{posts.length}</div>
                <div className="text-sm text-primary/60">{language === "ar" ? "مقالات" : "Articles"}</div>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-sm text-primary/60">{language === "ar" ? "دقائق قراءة" : "Min Read"}</div>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">4.5K+</div>
                <div className="text-sm text-primary/60">{language === "ar" ? "مشاهدة" : "Views"}</div>
              </div>
            </motion.div>
          </div>

          {/* Fallback Notice */}
          {usingFallback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center gap-3"
            >
              <AlertCircle className="text-amber-600 w-5 h-5" />
              <p className="text-amber-700 text-sm">
                {language === "ar" 
                  ? "عرض بيانات تجريبية مؤقتة. البيانات الحقيقية ستظهر عند الاتصال بالخادم."
                  : "Showing temporary demo data. Real data will appear when connected to server."}
              </p>
              <button
                onClick={loadPosts}
                className="mr-auto flex items-center gap-2 text-amber-700 hover:text-amber-900 text-sm font-bold"
              >
                <RefreshCw size={14} />
                {language === "ar" ? "إعادة المحاولة" : "Retry"}
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 sticky top-0 bg-white/80 backdrop-blur-md z-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, index) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-white text-primary/60 hover:bg-gray-50 hover:text-primary border border-gray-200"
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === "all" && !searchQuery && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href={`/${language}/blog/${featuredPost._id}`}>
                <div className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={featuredPost.image}
                    alt={language === "ar" ? featuredPost.titleAr : featuredPost.titleEn}
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-start">
                    <div className="flex items-center gap-4 mb-4 flex-wrap">
                      <span className="bg-accent text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase shadow-lg">
                        {language === "ar" ? "مقال مميز" : "Featured Post"}
                      </span>
                      <span className="text-white/70 text-sm flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(featuredPost.createdAt).toLocaleDateString(language === "ar" ? "ar-EG" : "en-US")}
                      </span>
                      <span className="text-white/70 text-sm flex items-center gap-1">
                        <Clock size={14} />
                        {language === "ar" ? "8 دقائق قراءة" : "8 min read"}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 max-w-4xl">
                      {language === "ar" ? featuredPost.titleAr : featuredPost.titleEn}
                    </h2>
                    
                    <p className="text-white/80 text-lg mb-6 max-w-3xl line-clamp-2">
                      {language === "ar" 
                        ? featuredPost.contentAr.replace(/<[^>]*>/g, '').substring(0, 150)
                        : featuredPost.contentEn.replace(/<[^>]*>/g, '').substring(0, 150)}
                      ...
                    </p>

                    <div className="flex items-center gap-6 flex-wrap">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                          <User className="text-white" size={20} />
                        </div>
                        <div>
                          <div className="text-white font-bold">
                            {language === "ar" ? featuredPost.userId?.nameAr || "أسناوي" : featuredPost.userId?.nameEn || "Asnaawi"}
                          </div>
                          <div className="text-white/50 text-xs">
                            {language === "ar" ? "كاتب تقني" : "Technical Author"}
                          </div>
                        </div>
                      </div>
                      <div className="accent-button px-8 py-3 text-base">
                        {language === "ar" ? "اقرأ المقال كاملاً" : "Read Full Article"}
                        <ChevronRight size={18} className={language === "ar" ? "rotate-180" : ""} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {otherPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={40} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                {language === "ar" ? "لا توجد مقالات" : "No articles found"}
              </h3>
              <p className="text-primary/60">
                {language === "ar" 
                  ? "لم يتم العثور على مقالات تطابق معايير البحث"
                  : "No articles match your search criteria"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Link href={`/${language}/blog/${post._id}`}>
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={language === "ar" ? post.titleAr : post.titleEn}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-bold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 text-start">
                      <div className="flex items-center gap-4 text-xs text-primary/40 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(post.createdAt).toLocaleDateString(language === "ar" ? "ar-EG" : "en-US")}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {language === "ar" ? "5 دقائق" : "5 min"}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {language === "ar" ? post.titleAr : post.titleEn}
                      </h3>
                      
                      <p className="text-primary/60 text-sm mb-4 line-clamp-3">
                        {language === "ar" 
                          ? post.contentAr.replace(/<[^>]*>/g, '').substring(0, 100)
                          : post.contentEn.replace(/<[^>]*>/g, '').substring(0, 100)}
                        ...
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 flex items-center justify-center">
                            <User size={14} className="text-primary" />
                          </div>
                          <span className="text-xs font-medium text-primary/60">
                            {language === "ar" ? post.userId?.nameAr || "أسناوي" : post.userId?.nameEn || "Asnaawi"}
                          </span>
                        </div>
                        <div className="text-accent font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          <span>{language === "ar" ? "اقرأ" : "Read"}</span>
                          <ArrowLeft size={14} className={language === "ar" ? "rotate-180" : ""} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default function BlogPage() {
  return <BlogContent />;
}