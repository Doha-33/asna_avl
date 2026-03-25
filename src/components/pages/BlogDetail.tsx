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
  ArrowLeft
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { fetchApi, Post } from "@/lib/api";

const SocialShare = () => (
  <div className="flex flex-col gap-4 sticky top-32">
    <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm">
      <Facebook className="w-5 h-5" />
    </button>
    <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm">
      <Twitter className="w-5 h-5" />
    </button>
    <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm">
      <Linkedin className="w-5 h-5" />
    </button>
    <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm">
      <MessageCircle className="w-5 h-5" />
    </button>
    <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm">
      <LinkIcon className="w-5 h-5" />
    </button>
  </div>
);

const SimilarPostCard = ({ title, date, image, category, readTime }: { title: string, date: string, image: string, category: string, readTime: string }) => {
  const { language } = useLanguage();
  const isAr = language === "ar";
  return (
    <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all group">
      <div className="relative h-48">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
      </div>
      <div className="p-6">
        <div className="text-xs text-gray-400 mb-2">{date}</div>
        <h3 className="text-lg font-extrabold text-primary mb-4 line-clamp-2">{title}</h3>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-[10px] text-white font-bold">F</div>
            <div className="text-[10px] font-bold text-primary">{isAr ? "فليتو" : "Fleetoo"}</div>
          </div>
          <div className="text-[10px] text-gray-400 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
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

  useEffect(() => {
    const loadPost = async () => {
      const allPosts: Post[] = await fetchApi("/api/posts");
      if (allPosts) {
        const currentPost = allPosts.find(p => p._id === params.slug);
        if (currentPost) {
          setPost(currentPost);
          // Get similar posts (same category or just others)
          const others = allPosts.filter(p => p._id !== params.slug).slice(0, 3);
          setSimilarPosts(others);
        }
      }
      setLoading(false);
    };
    loadPost();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-primary flex flex-col items-center justify-center gap-6">
        <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        <div className="text-white/70 font-bold text-xl">
          {isAr ? "جاري تحميل المقال..." : "Loading post..."}
        </div>
        <p className="text-white/40 text-sm max-w-xs text-center">
          {isAr 
            ? "قد يستغرق هذا بضع ثوانٍ لإيقاظ الخادم..." 
            : "This might take a few seconds to wake up the server..."}
        </p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">{isAr ? "المقال غير موجود" : "Post not found"}</h1>
        <Link href={`/${language}/blog`} className="text-accent hover:underline">
          {isAr ? "العودة للمدونة" : "Back to blog"}
        </Link>
      </div>
    );
  }

  const displayDate = new Date(post.createdAt).toLocaleDateString(isAr ? 'ar-EG' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className="min-h-screen bg-secondary text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent blur-[150px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            >
              {isAr ? post.titleAr : post.titleEn}
            </motion.h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{displayDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>{post.category}</span>
              </div>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="text-end">
                <div className="font-bold text-lg">{isAr ? "فليتو" : "Fleetoo"}</div>
                <div className="text-sm text-white/60">{isAr ? "فريق التحرير" : "Editorial Team"}</div>
              </div>
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 bg-accent flex items-center justify-center text-white font-black text-2xl">
                F
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="rounded-[40px] overflow-hidden shadow-2xl border border-white/10 aspect-video relative">
          <Image 
            src={post.image} 
            alt={isAr ? post.titleAr : post.titleEn} 
            fill
            className="w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar Left: Social */}
            <div className="hidden lg:block lg:col-span-1">
              <SocialShare />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-11">
              <div className="prose prose-invert prose-lg max-w-none">
                <div 
                  className="text-white leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: isAr ? post.contentAr : post.contentEn }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Posts */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
              {isAr ? "المدونات المشابهة" : "Similar Blogs"}
            </h2>
            <Link href={`/${language}/blog`} className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              <span>{isAr ? "عرض الكل" : "View All"}</span>
              {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {similarPosts.map((p) => (
              <Link key={p._id} href={`/${language}/blog/${p._id}`}>
                <SimilarPostCard 
                  title={isAr ? p.titleAr : p.titleEn}
                  date={new Date(p.createdAt).toLocaleDateString(isAr ? 'ar-EG' : 'en-US')}
                  image={p.image}
                  category={p.category}
                  readTime={isAr ? "5 دقائق" : "5 mins"}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
