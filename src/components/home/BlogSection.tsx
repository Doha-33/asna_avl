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

  // Helper function to strip HTML tags and get first 4 lines
  const getFirstFourLines = (htmlContent: string) => {
    // Create a temporary div to strip HTML tags
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    
    // Split by newlines and filter out empty lines
    const lines = textContent.split(/\r?\n/).filter(line => line.trim().length > 0);
    
    // Take first 4 lines and join them
    const firstFourLines = lines.slice(0, 4).join(' ');
    
    return firstFourLines;
  };

  // Mock data for fallback
  const mockPosts: Post[] = [
    {
      _id: "mock1",
      titleAr: "أهمية الكاميرات في المركبات ودورها في حماية السائق والأسطول",
      titleEn: "The Importance of Cameras in Vehicles and Their Role in Protecting Drivers and Fleets",
      category: "Safety",
      status: "Published",
      contentAr: "أصبحت الكاميرات في المركبات من أهم التقنيات الحديثة التي تساعد على زيادة الأمان وتحسين إدارة المركبات، سواء للأفراد أو للشركات التي تمتلك أسطول سيارات. توفر الكاميرات تسجيلًا مستمرًا للطريق وسلوك القيادة، مما يساعد في حماية السائق والمركبة وتقليل المخاطر.\n\nما هي كاميرات المركبات؟\nكاميرات المركبات هي أجهزة يتم تركيبها داخل أو خارج السيارة لتسجيل الفيديو أثناء القيادة، وتعمل بشكل مستمر أو عند حدوث حركة أو حادث.\n\nفوائد كاميرات المركبات\n1. توثيق الحوادث: تسجيل كل ما يحدث أثناء القيادة للمساعدة في معرفة سبب الحادث وإثبات الحقوق.\n2. تحسين سلوك القيادة: جعل السائق أكثر التزامًا بقواعد القيادة وتقليل السرعة الزائدة.\n3. حماية المركبة: من الحوادث والسرقة والتخريب والاستخدام غير المصرح به.\n4. مراقبة الأسطول: متابعة المركبات والسائقين وتحسين الأداء للشركات.\n5. تسجيل مستمر للطريق: لمراجعة مسار الرحلة ومدة التوقف وأسلوب القيادة.\n\nأنواع كاميرات المركبات\n- كاميرا أمامية: تسجل الطريق أمام المركبة.\n- كاميرا خلفية: تساعد في الرجوع للخلف وتسجيل ما يحدث خلف المركبة.\n- كاميرا داخلية: لمراقبة السائق أو الركاب.\n- كاميرات متعددة: تغطي المركبة من أكثر من زاوية.\n\nمتى تحتاج إلى كاميرا في مركبتك؟\nعند امتلاك سيارة خاصة وتريد حماية إضافية، أو إدارة أسطول مركبات، أو تقليل الحوادث، أو مراقبة السائقين.\n\nالخلاصة\nكاميرات المركبات أصبحت من الأدوات الأساسية لزيادة الأمان وحماية المركبات وتحسين القيادة، مما يجعلها استثمارًا مهمًا لكل من الأفراد والشركات.",
      contentEn: "Vehicle cameras have become one of the most important modern technologies that help increase safety and improve vehicle management, whether for individuals or companies with vehicle fleets. Cameras provide continuous recording of the road and driving behavior, helping to protect the driver and vehicle and reduce risks.\n\nWhat Are Vehicle Cameras?\nVehicle cameras are devices installed inside or outside the car to record video while driving, operating continuously or when motion or an accident occurs.\n\nBenefits of Vehicle Cameras\n1. Document accidents: Record everything that happens while driving to help determine accident causes and prove rights.\n2. Improve driving behavior: Make drivers more committed to traffic rules and reduce speeding.\n3. Protect the vehicle: From accidents, theft, vandalism, and unauthorized use.\n4. Monitor fleets: Track vehicles and drivers and improve performance for companies.\n5. Continuous road recording: To review trip routes, stop durations, and driving style.\n\nTypes of Vehicle Cameras\n- Front camera: Records the road ahead.\n- Rear camera: Assists in reversing and records what happens behind the vehicle.\n- Interior camera: To monitor the driver or passengers.\n- Multi-cameras: Cover the vehicle from multiple angles.\n\nWhen Do You Need a Camera in Your Vehicle?\nWhen you own a private car and want extra protection, manage a vehicle fleet, want to reduce accidents, or monitor drivers.\n\nSummary\nVehicle cameras have become essential tools for increasing safety, protecting vehicles, and improving driving, making them an important investment for both individuals and companies.",
      image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=800",
      slug: "importance-of-vehicle-cameras",
      authorName: "Ali",
      userId: {_id: "mock1", nameAr: "علي", nameEn: "Ali", image: "" },
      createdAt: new Date().toISOString()
    },
    {
      _id: "mock2",
      titleAr: "الفرق بين أجهزة تتبع المركبات: العادي – بالحساسات – OBD – بدون أسلاك",
      titleEn: "Differences Between Vehicle Tracking Devices: Standard – With Sensors – OBD – Wireless",
      category: "Technology",
      status: "Published",
      contentAr: "أصبحت أجهزة تتبع المركبات جزءًا أساسيًا من إدارة السيارات والأساطيل، لكن يوجد أكثر من نوع من الأجهزة، ولكل نوع استخدام مختلف. في هذه المدونة نشرح الفرق بين أجهزة التتبع العادية، أجهزة OBD، الأجهزة بالحساسات، والأجهزة اللاسلكية (بدون أسلاك) حتى تتمكن من اختيار الجهاز المناسب.\n\nأولاً: أجهزة التتبع العادية (السلكية)\nهذا النوع هو الأكثر استخدامًا في الشركات، ويتم توصيله مباشرة بكهرباء المركبة.\nالمميزات: يعمل بشكل دائم دون الحاجة للشحن، دقة عالية في التتبع، مخفي داخل السيارة، مناسب لإدارة الأسطول.\nمناسب لـ: الشركات، أساطيل المركبات، الاستخدام طويل المدى.\n\nثانياً: أجهزة التتبع مع الحساسات\nهذا النوع هو جهاز تتبع عادي لكن يتم توصيله بحساسات إضافية مثل حساس الحرارة، الرطوبة، الوقود، والباب.\nالمميزات: مراقبة حالة المركبة أو الشحنة، تنبيهات فورية، تقارير دقيقة، مناسب للنقل المبرد.\nمناسب لـ: نقل الأغذية، الأدوية، الشحن المبرد، الشحنات الحساسة.\n\nثالثاً: أجهزة OBD\nيتم تركيبها في منفذ خاص داخل السيارة تحت الطبلون بسهولة بدون أسلاك.\nالمميزات: تركيب سهل (Plug & Play)، لا يحتاج فني، يعرض بيانات المركبة.\nالعيوب: ظاهر ويمكن فكه بسهولة، أقل أمانًا، مكانه محدود.\nمناسب لـ: الاستخدام الشخصي، التجربة السريعة، الشركات الصغيرة.\n\nرابعاً: الأجهزة بدون أسلاك (البطارية)\nيعمل ببطارية داخلية ولا يحتاج إلى توصيل كهرباء.\nالمميزات: لا يحتاج تركيب، سهل النقل، يمكن إخفاؤه، مرن.\nالعيوب: يحتاج شحن، قد يتوقف إذا انتهت البطارية، تحديث أقل أحيانًا.\nمناسب لـ: التتبع المؤقت، الأفراد، الاستخدام المؤقت.\n\nالخلاصة: اختيار الجهاز يعتمد على احتياجك: للأمان اختر سلكي، للمراقبة الإضافية اختر بحساسات، للسهولة اختر OBD، وللتنقل اختر لاسلكي.",
      contentEn: "Vehicle tracking devices have become an essential part of car and fleet management, but there is more than one type of device, each with different uses. In this blog, we explain the differences between standard tracking devices, OBD devices, sensor-equipped devices, and wireless devices so you can choose the right device.\n\nFirst: Standard (Wired) Tracking Devices\nThis type is most commonly used in companies and connects directly to the vehicle's electricity.\nFeatures: Works continuously without need for charging, high tracking accuracy, hidden inside the vehicle, suitable for fleet management.\nBest for: Companies, vehicle fleets, long-term use.\n\nSecond: Tracking Devices with Sensors\nThis is a standard tracking device but connected to additional sensors such as temperature, humidity, fuel, and door sensors.\nFeatures: Monitor vehicle or cargo condition, instant alerts, accurate reports, suitable for refrigerated transport.\nBest for: Food transport, pharmaceuticals, refrigerated shipping, sensitive shipments.\n\nThird: OBD Devices\nInstalled in a special port inside the vehicle under the dashboard easily without wires.\nFeatures: Easy plug-and-play installation, no technician needed, displays vehicle data.\nDisadvantages: Visible and can be easily removed, less secure, limited placement.\nBest for: Personal use, quick trial, small companies.\n\nFourth: Wireless (Battery) Devices\nRuns on internal battery and does not need to connect to electricity.\nFeatures: No installation needed, easy to move between cars, can be hidden, flexible.\nDisadvantages: Needs charging, may stop if battery dies, sometimes less frequent updates.\nBest for: Temporary tracking, individuals, short-term use.\n\nSummary: Choosing a device depends on your need: for security choose wired, for additional monitoring choose with sensors, for ease choose OBD, for portability choose wireless.",
      image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=800",
      slug: "differences-between-tracking-devices",
      authorName: "Ali",
      userId: {_id: "mock1", nameAr: "علي", nameEn: "Ali", image: "" },
      createdAt: new Date().toISOString()
    },
    {
      _id: "mock3",
      titleAr: "لماذا تختلف أسعار أجهزة التتبع؟ وما الذي يجب الانتباه له قبل الشراء",
      titleEn: "Why Do Tracking Device Prices Differ? And What Should You Pay Attention to Before Buying",
      category: "Buying Guide",
      status: "Published",
      contentAr: "عند البحث عن جهاز تتبع للمركبات ستلاحظ وجود فروق كبيرة في الأسعار بين الشركات. قد يبدو أن جميع الأجهزة متشابهة من الخارج، لكن الحقيقة أن الفرق في السعر غالبًا يكون بسبب جودة التطبيق، وخدمة ما بعد البيع، ونوع شريحة الاتصال المستخدمة. في هذه المدونة نوضح أهم الأسباب التي تؤدي إلى اختلاف الأسعار، وما الذي يجب الانتباه له قبل اتخاذ قرار الشراء.\n\nأولاً: جودة التطبيق والمنصة\nالتطبيق أو المنصة هو الجزء الأهم في نظام التتبع. بعض الأنظمة الرخيصة تقدم تطبيقات ضعيفة تعاني من بطء في تحديث الموقع، توقف التطبيق، صعوبة الاستخدام، وأخطاء في البيانات. بينما الأنظمة الاحترافية تقدم تحديثًا مباشرًا، تقارير واضحة، تنبيهات دقيقة، وواجهة سهلة الاستخدام.\n\nثانياً: خدمة ما بعد البيع\nبعض الشركات تبيع الجهاز بسعر منخفض ولكن بدون خدمة حقيقية بعد البيع، مما يسبب مشاكل في الدعم الفني والصيانة. بينما الشركات الموثوقة توفر دعمًا فنيًا مستمرًا وصيانة وتحديثات.\n\nثالثاً: شرائح الاتصال مجهولة المصدر\nبعض الأجهزة الرخيصة تستخدم شرائح اتصال غير معروفة المصدر قد تسبب توقف الجهاز فجأة، ضعف الإشارة، أو انقطاع الخدمة.\n\nرابعاً: الفرق بين السعر الرخيص والقيمة الحقيقية\nالسعر المنخفض قد يعني تطبيقًا ضعيفًا، جهازًا أقل جودة، عدم وجود دعم فني، وتقارير غير دقيقة. بينما السعر المناسب غالبًا ما يشمل جهازًا موثوقًا ومنصة مستقرة ودعمًا فنيًا.\n\nكيف تختار النظام المناسب؟\nقبل اختيار جهاز التتبع، تأكد من تجربة التطبيق، جودة التقارير، توفر الدعم الفني، نوع شريحة الاتصال، وسمعة الشركة.\n\nالخلاصة\nاختلاف أسعار أجهزة التتبع أمر طبيعي، لكن النظام الجيد لا يعتمد فقط على الجهاز، بل يشمل تطبيقًا قويًا، خدمة ما بعد البيع، واتصالًا مستقرًا.",
      contentEn: "When searching for a vehicle tracking device, you will notice significant price differences between companies. Devices may look similar externally, but the price difference is often due to application quality, after-sales service, and the type of SIM card used. In this blog, we explain the most important reasons for price differences and what you should pay attention to before making a purchase decision.\n\nFirst: Application and Platform Quality\nThe application or platform is the most important part of the tracking system. Some cheap systems offer weak applications that suffer from slow location updates, app crashes, difficulty of use, and data errors. Professional systems offer real-time updates, clear reports, accurate alerts, and an easy-to-use interface.\n\nSecond: After-Sales Service\nSome companies sell devices at low prices but without real after-sales service, causing technical support and maintenance issues. Trusted companies provide continuous technical support, maintenance, and updates.\n\nThird: Unknown Source SIM Cards\nSome cheap devices use SIM cards from unknown sources that may cause sudden device stoppage, weak signal, or service interruption.\n\nFourth: Difference Between Low Price and Real Value\nA low price may mean a weak application, lower quality device, lack of technical support, and inaccurate reports. An appropriate price often includes a reliable device, stable platform, and technical support.\n\nHow to Choose the Right System?\nBefore choosing a tracking device, test the application, check report quality, ensure technical support availability, know the SIM card type, and check company reputation.\n\nSummary\nPrice differences in tracking devices are normal, but a good system depends not only on the device but also on a strong application, after-sales service, and stable connectivity.",
      image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=800",
      slug: "why-tracking-device-prices-differ",
      authorName: "Ali",
      userId: {_id: "mock1", nameAr: "علي", nameEn: "Ali", image: "" },
      createdAt: new Date().toISOString()
    }
  ];

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchApi("/api/posts");
        if (data && data.length > 0) {
          // Filter published posts and take latest 4
          const published = data.filter((p: Post) => p.status === "Published");
          setPosts(published.slice(0, 5));
        } else {
          // Use mock data if API returns empty
          setPosts(mockPosts);
        }
      } catch (error) {
        console.error("Error loading posts, using mock data:", error);
        // Use mock data if API fails
        setPosts(mockPosts);
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
                    <span>{language === "ar" ? featuredPost.userId?.nameAr || featuredPost.authorName : featuredPost.userId?.nameEn || featuredPost.authorName}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-accent" />
                    <span>{Math.ceil((language === "ar" ? featuredPost.contentAr : featuredPost.contentEn).length / 500)} {language === "ar" ? "دقائق قراءة" : "min read"}</span>
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {language === "ar" ? featuredPost.titleAr : featuredPost.titleEn}
                </h3>
                
                {/* Display first 4 lines of content */}
                <p className="text-slate-600 text-sm md:text-base mb-6 line-clamp-4">
                  {language === "ar" 
                    ? getFirstFourLines(featuredPost.contentAr)
                    : getFirstFourLines(featuredPost.contentEn)
                  }
                </p>
                
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
                      <span>{Math.ceil((language === "ar" ? post.contentAr : post.contentEn).length / 500)} {language === "ar" ? "دقائق" : "min"}</span>
                    </div>
                    <h4 className="text-sm md:text-base font-bold text-primary group-hover:text-accent transition-colors line-clamp-2">
                      {language === "ar" ? post.titleAr : post.titleEn}
                    </h4>
                    {/* Display first 2 lines for smaller posts on desktop */}
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 hidden md:block">
                      {language === "ar" 
                        ? getFirstFourLines(post.contentAr).substring(0, 100) + "..."
                        : getFirstFourLines(post.contentEn).substring(0, 100) + "..."
                      }
                    </p>
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