"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Tag, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Share2, 
  Link as LinkIcon,
  MessageCircle,
  Clock,
  ArrowRight,
  ArrowLeft,
  User,
  Eye,
  Heart,
  Bookmark,
  AlertCircle,
  RefreshCw,
  Home
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { fetchApi, Post } from "@/lib/api";

// Fallback JSON data matching your blog posts
const FALLBACK_POSTS: Post[] = [
  {
    "_id": "1",
    "titleAr": "أهمية تتبع المركبات وإدارة الأسطول للشركات",
    "titleEn": "The Importance of Vehicle Tracking and Fleet Management for Companies",
    "category": "Fleet Management",
    "status": "Published",
    "contentAr": "<p>في عالم الأعمال اليوم، أصبحت إدارة الأسطول وتتبع المركبات عنصرًا أساسيًا لضمان كفاءة التشغيل وتقليل التكاليف. سواء كنت تدير أسطولًا صغيرًا أو كبيرًا، فإن الاستثمار في منصة تتبع ذكية يمكن أن يحدث فرقًا كبيرًا في الأداء اليومي.</p><h2>فوائد تتبع المركبات للشركات</h2><h3>1. تقليل التكاليف التشغيلية</h3><p>من خلال مراقبة استهلاك الوقود، تحديد طرق القيادة الأمثل، والتقليل من الأخطاء البشرية.</p><h3>2. تحسين كفاءة الأسطول</h3><p>المنصة تساعد على جدولة الصيانة بشكل دوري وتجنب الأعطال المفاجئة، مما يحافظ على استمرارية العمل.</p><h3>3. تعزيز سلامة المركبات والسائقين</h3><p>تنبيهات السرعة، مواقع المركبات لحظيًا، وتحذيرات عند تجاوز الحدود المسموح بها تساعد على الوقاية من الحوادث.</p><h3>4. توفير الوقت والجهد</h3><p>متابعة المركبات وإدارة بياناتها كلها في مكان واحد، دون الحاجة للرجوع إلى تقارير ورقية أو أنظمة متعددة.</p><h2>كيف تساعد منصة Asnaavl؟</h2><p>توفر Asnaavl منصة متكاملة لإدارة الأسطول، تشمل:</p><ul><li>تذكيرات دقيقة للصيانة مثل تغيير الزيت والفحص الدوري</li><li>تحليل بيانات شامل لمراقبة أداء كل مركبة بشكل فردي</li><li>سهولة الاستخدام عبر لوحة تحكم مركزية لجميع المركبات في الأسطول</li><li>تجربة مجانية لمدة أسبوع لتركيب الجهاز واختبار النظام قبل الالتزام</li></ul><p>مع أكثر من 4,500 عميل و18,000 جهاز مستخدم، تعتبر Asnaavl الخيار الأمثل للشركات التي تبحث عن حلول ذكية وموثوقة لإدارة أسطولها بكفاءة وأمان.</p><p><strong>استثمر اليوم في تتبع أسطولك مع Asnaavl واجعل كل رحلة أكثر أمانًا وكفاءة.</strong></p>",
    "contentEn": "<p>In today's business world, fleet management and vehicle tracking have become essential for ensuring operational efficiency and reducing costs. Whether you manage a small or large fleet, investing in an intelligent tracking platform can make a significant difference in daily performance.</p><h2>Benefits of Vehicle Tracking for Companies</h2><h3>1. Reduce operational costs</h3><p>By monitoring fuel consumption, identifying optimal driving routes, and minimizing human errors.</p><h3>2. Improve fleet efficiency</h3><p>The platform helps schedule periodic maintenance and avoid sudden breakdowns, ensuring business continuity.</p><h3>3. Enhance vehicle and driver safety</h3><p>Speed alerts, real-time vehicle locations, and warnings when exceeding permitted limits help prevent accidents.</p><h3>4. Save time and effort</h3><p>Track vehicles and manage all their data in one place, without needing to refer to paper reports or multiple systems.</p><h2>How Does the Asnaavl Platform Help?</h2><p>Asnaavl provides an integrated fleet management platform, including:</p><ul><li>Accurate maintenance reminders such as oil changes and periodic inspections</li><li>Comprehensive data analysis to monitor each vehicle's performance individually</li><li>Ease of use through a central dashboard for all fleet vehicles</li><li>A one-week free trial for device installation and system testing before commitment</li></ul><p>With over 4,500 customers and 18,000 devices in use, Asnaavl is the ideal choice for companies seeking intelligent and reliable solutions to manage their fleet efficiently and safely.</p><p><strong>Invest in tracking your fleet with Asnaavl today and make every journey safer and more efficient.</strong></p>",
    "image": "https://images.unsplash.com/photo-1570125909232-263263f1c9f1?w=1200&h=600&fit=crop",
    "slug": "importance-of-vehicle-tracking",
    "authorName": "Ali",
    "createdAt": "2024-03-15T10:00:00Z",
    "userId": { "_id": "mock1", "nameAr": "أحمد محمد", "nameEn": "Ahmed Mohamed", "image": "" }
  },
  {
    "_id": "2",
    "titleAr": "كيف تختار أفضل جهاز تتبع للمركبات؟",
    "titleEn": "How to Choose the Best Vehicle Tracking Device?",
    "category": "Technology",
    "status": "Published",
    "contentAr": "<p>أصبحت أجهزة تتبع المركبات من أهم الأدوات التي تعتمد عليها الشركات والأفراد في مراقبة مركباتهم وتحسين إدارتها. ولكن مع وجود العديد من الخيارات في السوق، قد يكون من الصعب اختيار الجهاز المناسب. في هذه المدونة نوضح أهم العوامل التي يجب مراعاتها عند اختيار جهاز تتبع المركبات.</p><h2>1. دقة تحديد الموقع</h2><p>أهم ميزة في جهاز التتبع هي دقة تحديد الموقع. يجب أن يوفر الجهاز تحديثًا سريعًا وموقعًا دقيقًا للمركبة، حتى تتمكن من متابعتها لحظيًا دون تأخير.</p><h2>2. سهولة الاستخدام</h2><p>من الأفضل اختيار نظام تتبع يحتوي على منصة سهلة الاستخدام، بحيث يمكنك معرفة موقع المركبة بسرعة، مراجعة التقارير، متابعة حالة المركبة، والوصول إلى البيانات من الجوال أو الكمبيوتر.</p><h2>3. التقارير والتحليلات</h2><p>جهاز التتبع الجيد لا يقتصر فقط على عرض الموقع، بل يقدم تقارير مثل تقارير الرحلات، تقارير السرعة، تقارير التوقف، وتقارير استهلاك المركبة. هذه التقارير تساعدك على تحسين إدارة المركبات وتقليل التكاليف.</p><h2>4. تنبيهات الصيانة</h2><p>من الميزات المهمة التي يجب توفرها في جهاز التتبع هي تنبيهات الصيانة مثل تغيير الزيت، الفحص الدوري، والصيانة الدورية.</p><h2>5. التجربة قبل الشراء</h2><p>من الأفضل اختيار شركة توفر تجربة للجهاز قبل الشراء، لأن ذلك يتيح لك التأكد من أن النظام مناسب لاحتياجاتك.</p><p><strong>الخلاصة:</strong> اختيار جهاز تتبع مناسب يساعدك على حماية مركبتك، تقليل التكاليف، تحسين الأداء، وتوفير الوقت.</p>",
    "contentEn": "<p>Vehicle tracking devices have become one of the most important tools that companies and individuals rely on to monitor their vehicles and improve management. But with many options on the market, it can be difficult to choose the right device. In this blog, we explain the most important factors to consider when choosing a vehicle tracking device.</p><h2>1. Location Accuracy</h2><p>The most important feature of a tracking device is location accuracy. The device should provide fast updates and an accurate vehicle location so you can track it in real-time without delay.</p><h2>2. Ease of Use</h2><p>It's better to choose a tracking system with an easy-to-use platform, allowing you to quickly find the vehicle location, review reports, monitor vehicle status, and access data from mobile or computer.</p><h2>3. Reports and Analytics</h2><p>A good tracking device is not limited to showing location but provides reports such as trip reports, speed reports, stop reports, and vehicle consumption reports.</p><h2>4. Maintenance Alerts</h2><p>An important feature that should be available in a tracking device is maintenance alerts such as oil changes, periodic inspections, and routine maintenance.</p><h2>5. Trial Before Purchase</h2><p>It is better to choose a company that offers a device trial before purchase, as this allows you to ensure the system meets your needs.</p><p><strong>Summary:</strong> Choosing a suitable tracking device helps you protect your vehicle, reduce costs, improve performance, and save time.</p>",
    "image": "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1200&h=600&fit=crop",
    "slug": "how-to-choose-tracking-device",
    "authorName": "Ali",
    "createdAt": "2024-03-10T10:00:00Z",
    "userId": { "_id": "mock2", "nameAr": "سارة خالد", "nameEn": "Sara Khaled", "image": "" }
  },
  {
    "_id": "3",
    "titleAr": "كيف تساعد تقارير المركبات في تقليل التكاليف؟",
    "titleEn": "How Do Vehicle Reports Help Reduce Costs?",
    "category": "Fleet Management",
    "status": "Published",
    "contentAr": "<p>إدارة المركبات بدون بيانات واضحة قد يؤدي إلى زيادة التكاليف والأعطال. لذلك تعتبر تقارير المركبات من أهم الأدوات التي تساعد الشركات على تحسين الأداء وتقليل المصاريف.</p><h2>مراقبة استهلاك المركبة</h2><p>من خلال التقارير يمكنك معرفة عدد الرحلات، المسافات المقطوعة، أوقات التشغيل، وأوقات التوقف. هذه المعلومات تساعدك على فهم طريقة استخدام المركبة وتحسينها.</p><h2>تقليل الأعطال</h2><p>التقارير تساعدك على متابعة حالة المركبة وتذكيرك بمواعيد الصيانة مثل تغيير الزيت، تغيير الفلاتر، والفحص الدوري. الصيانة المنتظمة تقلل الأعطال وتزيد من عمر المركبة.</p><h2>تحسين أداء السائقين</h2><p>من خلال التقارير يمكن معرفة السرعة الزائدة، التوقف الطويل، والاستخدام غير الضروري. وهذا يساعد على تحسين أداء السائقين وتقليل استهلاك الوقود.</p><h2>توفير الوقت</h2><p>بدلًا من متابعة المركبات يدويًا، توفر التقارير معلومات جاهزة تساعدك على اتخاذ القرار بسرعة.</p><p><strong>الخلاصة:</strong> تقارير المركبات ليست مجرد أرقام، بل هي أداة تساعدك على تقليل التكاليف، تحسين الأداء، زيادة الكفاءة، والحفاظ على المركبات.</p>",
    "contentEn": "<p>Managing vehicles without clear data can lead to increased costs and breakdowns. Therefore, vehicle reports are among the most important tools that help companies improve performance and reduce expenses.</p><h2>Monitor Vehicle Consumption</h2><p>Through reports, you can know number of trips, distances traveled, operating times, and stop times. This information helps you understand and improve vehicle usage.</p><h2>Reduce Breakdowns</h2><p>Reports help you monitor vehicle status and remind you of maintenance schedules such as oil changes, filter changes, and periodic inspections. Regular maintenance reduces breakdowns and extends vehicle life.</p><h2>Improve Driver Performance</h2><p>Reports can reveal excessive speeding, long stops, and unnecessary usage. This helps improve driver performance and reduce fuel consumption.</p><h2>Save Time</h2><p>Instead of manually tracking vehicles, reports provide ready-made information to help you make quick decisions.</p><p><strong>Summary:</strong> Vehicle reports are not just numbers; they are a tool that helps you reduce costs, improve performance, increase efficiency, and maintain vehicles.</p>",
    "image": "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&h=600&fit=crop",
    "slug": "vehicle-reports-reduce-costs",
    "authorName": "Ali",
    "createdAt": "2024-03-05T10:00:00Z",
    "userId": { "_id": "mock3", "nameAr": "محمد إبراهيم", "nameEn": "Mohamed Ibrahim", "image": "" }
  }
];

// Helper function to get reading time
const getReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, '');
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} ${minutes === 1 ? 'min' : 'mins'}`;
};

// Social Share Component
const SocialShare = ({ title, url }: { title: string; url: string }) => {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    alert(isAr ? "تم نسخ الرابط!" : "Link copied!");
  };

  return (
    <div className="flex flex-col gap-3 sticky top-32">
      <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1877f2] hover:text-white transition-all shadow-sm">
        <Facebook className="w-4 h-4" />
      </a>
      <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1da1f2] hover:text-white transition-all shadow-sm">
        <Twitter className="w-4 h-4" />
      </a>
      <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0a66c2] hover:text-white transition-all shadow-sm">
        <Linkedin className="w-4 h-4" />
      </a>
      <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#25d366] hover:text-white transition-all shadow-sm">
        <MessageCircle className="w-4 h-4" />
      </a>
      <button onClick={handleCopyLink} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all shadow-sm">
        <LinkIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

// Table of Contents Component
const TableOfContents = ({ content, isAr }: { content: string; isAr: boolean }) => {
  const [headings, setHeadings] = useState<{ text: string; id: string }[]>([]);

  useEffect(() => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const h2Elements = tempDiv.querySelectorAll('h2');
    const h3Elements = tempDiv.querySelectorAll('h3');
    const allHeadings = [...h2Elements, ...h3Elements];
    setHeadings(allHeadings.map((h, i) => ({ text: h.textContent || '', id: `heading-${i}` })));
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <div className="bg-gray-50 rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-bold text-primary mb-4">
        {isAr ? "محتويات المقال" : "Table of Contents"}
      </h3>
      <ul className="space-y-2">
        {headings.map((heading, idx) => (
          <li key={idx}>
            <a href={`#${heading.id}`} className="text-primary/60 hover:text-accent text-sm transition-colors">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function BlogDetailPage() {
  const { language } = useLanguage();
  const params = useParams();
  const isAr = language === "ar";
  const [post, setPost] = useState<Post | null>(null);
  const [similarPosts, setSimilarPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      setError(false);
      setUsingFallback(false);
      
      try {
        const allPosts: Post[] = await fetchApi("/api/posts", 30000);
        if (allPosts && allPosts.length > 0) {
          const currentPost = allPosts.find(p => p._id === params.slug);
          if (currentPost) {
            setPost(currentPost);
            // Get similar posts (same category or others)
            const others = allPosts
              .filter(p => p._id !== params.slug && p.status === "Published")
              .slice(0, 3);
            setSimilarPosts(others);
          } else {
            // Try to find in fallback
            const fallbackPost = FALLBACK_POSTS.find(p => p._id === params.slug);
            if (fallbackPost) {
              setPost(fallbackPost);
              setUsingFallback(true);
              const others = FALLBACK_POSTS
                .filter(p => p._id !== params.slug)
                .slice(0, 3);
              setSimilarPosts(others);
            } else {
              setError(true);
            }
          }
        } else {
          // Use fallback data
          const fallbackPost = FALLBACK_POSTS.find(p => p._id === params.slug);
          if (fallbackPost) {
            setPost(fallbackPost);
            setUsingFallback(true);
            const others = FALLBACK_POSTS
              .filter(p => p._id !== params.slug)
              .slice(0, 3);
            setSimilarPosts(others);
          } else {
            setError(true);
          }
        }
      } catch (err) {
        console.error("Error loading post:", err);
        const fallbackPost = FALLBACK_POSTS.find(p => p._id === params.slug);
        if (fallbackPost) {
          setPost(fallbackPost);
          setUsingFallback(true);
          const others = FALLBACK_POSTS
            .filter(p => p._id !== params.slug)
            .slice(0, 3);
          setSimilarPosts(others);
        } else {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };
    
    if (params.slug) {
      loadPost();
    }
  }, [params.slug]);

  // Add IDs to headings for table of contents
  useEffect(() => {
    if (post && !loading) {
      setTimeout(() => {
        const contentDiv = document.querySelector('.blog-content');
        if (contentDiv) {
          const headings = contentDiv.querySelectorAll('h2, h3');
          headings.forEach((heading, i) => {
            heading.id = `heading-${i}`;
          });
        }
      }, 100);
    }
  }, [post, loading]);

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
            {isAr ? "جاري تحميل المقال..." : "Loading post..."}
          </div>
          <p className="text-primary/40 text-sm max-w-xs text-center">
            {isAr 
              ? "قد يستغرق هذا بضع ثوانٍ..." 
              : "This might take a few seconds..."}
          </p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center gap-8 p-4">
        <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center">
          <AlertCircle size={48} className="text-red-400" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {isAr ? "المقال غير موجود" : "Post not found"}
          </h1>
          <p className="text-primary/60 mb-8 max-w-md">
            {isAr 
              ? "عذراً، المقال الذي تبحث عنه غير موجود أو تم حذفه."
              : "Sorry, the post you're looking for doesn't exist or has been deleted."}
          </p>
          <Link href={`/${language}/blog`} className="accent-button px-8 py-3 inline-flex items-center gap-2">
            <Home size={18} />
            {isAr ? "العودة إلى المدونة" : "Back to Blog"}
          </Link>
        </div>
      </div>
    );
  }

  const displayDate = new Date(post.createdAt).toLocaleDateString(isAr ? 'ar-EG' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const readingTime = getReadingTime(isAr ? post.contentAr : post.contentEn);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/95 pt-32 pb-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent blur-[150px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href={`/${language}`} className="hover:text-white transition-colors">
                {isAr ? "الرئيسية" : "Home"}
              </Link>
              <span>/</span>
              <Link href={`/${language}/blog`} className="hover:text-white transition-colors">
                {isAr ? "المدونة" : "Blog"}
              </Link>
              <span>/</span>
              <span className="text-white/40 line-clamp-1">
                {isAr ? post.titleAr.substring(0, 30) : post.titleEn.substring(0, 30)}
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  <Tag size={14} />
                  {post.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                {isAr ? post.titleAr : post.titleEn}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/70 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{displayDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{readingTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye size={16} />
                  <span>{isAr ? "1.2K مشاهدة" : "1.2K views"}</span>
                </div>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl inline-flex">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xl">
                  {post.userId?.nameAr?.[0] || post.authorName?.[0] || "A"}
                </div>
                <div>
                  <div className="font-bold">
                    {isAr ? (post.userId?.nameAr || post.authorName || "أسناوي") : (post.userId?.nameEn || post.authorName || "Asnaawi")}
                  </div>
                  <div className="text-xs text-white/50">
                    {isAr ? "كاتب تقني" : "Technical Author"}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video relative bg-gray-100">
          <img 
            src={post.image} 
            alt={isAr ? post.titleAr : post.titleEn} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Fallback Notice */}
      {usingFallback && (
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center gap-3">
            <AlertCircle className="text-amber-600 w-5 h-5 flex-shrink-0" />
            <p className="text-amber-700 text-sm">
              {isAr 
                ? "عرض بيانات تجريبية مؤقتة. البيانات الحقيقية ستظهر عند الاتصال بالخادم."
                : "Showing temporary demo data. Real data will appear when connected to server."}
            </p>
          </div>
        </div>
      )}

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar Left: Social Share */}
            <div className="hidden lg:block lg:col-span-1">
              <SocialShare title={isAr ? post.titleAr : post.titleEn} url={currentUrl} />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-7 xl:col-span-8">
              {/* Table of Contents - Mobile */}
              <div className="lg:hidden mb-8">
                <TableOfContents content={isAr ? post.contentAr : post.contentEn} isAr={isAr} />
              </div>

              <div className="prose prose-lg max-w-none prose-headings:text-primary prose-p:text-primary/70 prose-strong:text-primary prose-li:text-primary/70">
                <div 
                  className="blog-content text-primary/70 leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ __html: isAr ? post.contentAr : post.contentEn }}
                />
              </div>

              {/* Tags Section */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold text-primary">{isAr ? "الوسوم:" : "Tags:"}</span>
                  <div className="flex flex-wrap gap-2">
                    {post.category.split(' ').map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-primary/60 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                    <span className="px-3 py-1 bg-gray-100 text-primary/60 text-sm rounded-full">
                      {isAr ? "تتبع المركبات" : "Vehicle Tracking"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                    {post.userId?.nameAr?.[0] || post.authorName?.[0] || "A"}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">
                      {isAr ? (post.userId?.nameAr || post.authorName || "أسناوي") : (post.userId?.nameEn || post.authorName || "Asnaawi")}
                    </h4>
                    <p className="text-primary/60 text-sm">
                      {isAr 
                        ? "خبير في مجال تتبع المركبات وإدارة الأسطول مع أكثر من 10 سنوات من الخبرة في تقديم حلول تقنية مبتكرة."
                        : "Expert in vehicle tracking and fleet management with over 10 years of experience in providing innovative technical solutions."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Right: Table of Contents */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
              <div className="sticky top-32">
                <TableOfContents content={isAr ? post.contentAr : post.contentEn} isAr={isAr} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Posts */}
      {similarPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary">
                {isAr ? "مقالات مشابهة" : "Similar Articles"}
              </h2>
              <Link href={`/${language}/blog`} className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                <span>{isAr ? "عرض الكل" : "View All"}</span>
                {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarPosts.map((p) => (
                <Link key={p._id} href={`/${language}/blog/${p._id}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={p.image} 
                        alt={isAr ? p.titleAr : p.titleEn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-primary/40 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(p.createdAt).toLocaleDateString(isAr ? 'ar-EG' : 'en-US')}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {getReadingTime(isAr ? p.contentAr : p.contentEn)}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {isAr ? p.titleAr : p.titleEn}
                      </h3>
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-xs">
                            {p.userId?.nameAr?.[0] || p.authorName?.[0] || "A"}
                          </div>
                          <span className="text-xs text-primary/60">
                            {isAr ? (p.userId?.nameAr || p.authorName || "أسناوي") : (p.userId?.nameEn || p.authorName || "Asnaawi")}
                          </span>
                        </div>
                        <div className="text-accent font-bold text-sm flex items-center gap-1">
                          <span>{isAr ? "اقرأ" : "Read"}</span>
                          <ArrowLeft size={12} className={isAr ? "rotate-180" : ""} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}