import { useLanguage } from "@/components/LanguageContext";
import { useDemoModal } from "@/components/DemoModalContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FinalCTA } from "@/components/shared/FinalCTA";
import { OrganizationFeaturesGrid } from "@/components/sections/OrganizationFeaturesGrid";
import { OrganizationSecuritySection } from "@/components/sections/OrganizationSecuritySection";
import { OrganizationFAQ } from "@/components/sections/OrganizationFAQ";
import { 
  Users, 
  ShieldCheck, 
  LayoutGrid, 
  MapPin, 
  History, 
  TrendingUp, 
  Lock, 
  RefreshCw, 
  Database
} from "lucide-react";

export default function OrganizationSolutionPage() {
  const { language } = useLanguage();
  const { openDemoModal } = useDemoModal();
  const isAr = language === "ar";

  const content = {
    ar: {
      hero: {
        title: "نظم أسطولك ومكّن فرقك",
        subtitle: "تحكّم مركزي في المستخدمين والأصول والمواقع والسياسات عبر إدارة تنظيمية مرنة من فليتو.",
        ctaPrimary: "جرب النظام الآن",
        ctaSecondary: "اعرف المزيد"
      },
      intro: {
        title: "إدارة تنظيمية متكاملة",
        desc: "يمكّن حل إدارة التنظيم في فليتو مشغلي الأساطيل من هيكلة أساطيلهم وتوسيع نطاقها وضمان أمنها، مع تحكم تفصيلي في الأشخاص والمركبات والأدوار والصلاحيات."
      },
      features: [
        {
          title: "إدارة الفروع والتسلسل الهرمي",
          desc: "أنشئ مؤسسة بهيكل متعدد المستويات بفروع وأقسام ومجموعات أصول غير محدودة",
          icon: LayoutGrid,
          points: ["إسناد الأصول والمستخدمين والمركبات إلى الفروع", "تمكين الإشراف الدقيق"]
        },
        {
          title: "إدارة أدوار وصلاحيات المستخدمين",
          desc: "تحديد الأدوار (مدير، سائق، فني، ضيف) بصلاحيات وصول دقيقة ومفصلة",
          icon: Users,
          points: ["إضافة الموظفين الجدد بسهولة", "تعديل الصلاحيات مع تغيّر الفرق"]
        },
        {
          title: "تجميع الأصول والمركبات",
          desc: "ضع علامات على المركبات والمعدات وأصول الدعم وقم بتجميعها لإعداد تقارير مستهدفة وتخطيط الصيانة والتعيين التشغيلي",
          icon: ShieldCheck
        },
        {
          title: "تكامل المواقع والمرافق التشغيلية",
          desc: "اربط المستخدمين والأصول بالفروع الجغرافية أو مراكز الخدمة لإدارة تشغيلية مخصصة لكل منطقة",
          icon: MapPin,
          points: ["تعيين المرافق لحظياً", "تشغيل الأسطول بسرعة أو إعادة توزيعه"]
        },
        {
          title: "سجلات مركزية للمراجعة والأنشطة",
          desc: "تسجيل جميع التعديلات والتعيينات وتغييرات الصلاحيات تلقائياً مع بيانات المستخدم ووقت التنفيذ",
          icon: History,
          points: ["وصول فوري إلى جميع التغييرات السابقة", "الامتثال وإجراء المراجعات الداخلية"]
        },
        {
          title: "أدوات النمو والتوسع",
          desc: "مصمم للمؤسسات من جميع الأحجام من الشركات ذات الموقع الواحد إلى الأساطيل الكبيرة متعددة الفروع والأقسام",
          icon: TrendingUp,
          points: ["استيراد ونقل وإعادة هيكلة بالجملة"]
        }
      ],
      security: {
        title: "الأمان والتكامل",
        items: [
          {
            title: "تشفير كامل مع إدارة الوصول",
            desc: "وصول قائم على الأدوار لبيانات المستخدم/الأصول مع بروتوكولات أمان على مستوى المؤسسات",
            icon: Lock
          },
          {
            title: "تكامل سلس",
            desc: "يعمل مع وحدات الصيانة والتأجير والتتبع لإعداد التقارير لعمليات موحدة",
            icon: RefreshCw
          },
          {
            title: "نسخ احتياطي واسترداد مركزي",
            desc: "نسخ احتياطية آلية وخيارات استرداد سريعة لضمان استمرارية الأعمال",
            icon: Database
          }
        ]
      },
      faq: {
        title: "الأسئلة الشائعة",
        items: [
          {
            question: "هل يمكنني التحكم في الوصول إلى مواقع وأقسام مختلفة؟",
            answer: "نعم، يدعم فليتو إدارة الفروع المتعددة مع صلاحيات مخصصة ورؤية واضحة للأصول. يمكنك إنشاء هياكل تنظيمية غير محدودة، وتعيين مستخدمين ومركبات لفروع مختلفة، والتحكم تماماً بما يمكن لكل قسم رؤيته وإدارته داخل المنصة"
          },
          {
            question: "هل إعادة الهيكلة سهلة مع توسعنا؟",
            answer: "بالتأكيد — تتيح لك العمليات الجماعية وأدوات السحب والإفلات البسيطة تنفيذ المهام بسرعة وبدون أخطاء. تم تصميم فليتو ليتوسع مع نمو عملك، بدءاً من الشركات ذات الموقع الواحد وصولاً إلى الأساطيل الكبيرة متعددة الفروع والأقسام. كما أن إعادة الهيكلة، واستخراج البيانات، وإعادة تنظيم الهيكل تتم بسلاسة وبشكل بديهي"
          },
          {
            question: "هل يتم تسجيل جميع التغييرات لأغراض المراجعة؟",
            answer: "نعم، يتم تسجيل كل إجراء أو تعديل أو تعيين مع تفاصيل المستخدم والتاريخ والوقت. يحتفظ فليتو بسجلات تدقيق شاملة لجميع التغييرات التنظيمية، وتحديثات الصلاحيات، وتعيينات الأصول — مما يضمن كامل الشفافية لتلبية متطلبات الامتثال والمراجعات الداخلية"
          }
        ]
      },
      finalCta: {
        title: "ضع مؤسستك بين يديك — رقمية، آمنة، وقابلة للنمو",
        cta: "جرب النظام الآن"
      }
    },
    en: {
      hero: {
        title: "Organize Your Fleet and Empower Your Teams",
        subtitle: "Centralized control over users, assets, locations, and policies through flexible organizational management from Fleetoo.",
        ctaPrimary: "Try the System Now",
        ctaSecondary: "Learn More"
      },
      intro: {
        title: "Integrated Organizational Management",
        desc: "Fleetoo's organizational management solution enables fleet operators to structure and scale their fleets and ensure their security, with detailed control over people, vehicles, roles, and permissions."
      },
      features: [
        {
          title: "Branch and Hierarchy Management",
          desc: "Create a multi-level organization with unlimited branches, departments, and asset groups",
          icon: LayoutGrid,
          points: ["Assign assets, users, and vehicles to branches", "Enable granular supervision"]
        },
        {
          title: "User Roles and Permissions Management",
          desc: "Define roles (manager, driver, technician, guest) with precise and detailed access permissions",
          icon: Users,
          points: ["Add new employees easily", "Modify permissions as teams change"]
        },
        {
          title: "Asset and Vehicle Grouping",
          desc: "Tag vehicles, equipment, and support assets and group them for targeted reporting, maintenance planning, and operational assignment",
          icon: ShieldCheck
        },
        {
          title: "Location and Operational Facility Integration",
          desc: "Link users and assets to geographic branches or service centers for customized operational management for each region",
          icon: MapPin,
          points: ["Assign facilities in real-time", "Operate or redistribute the fleet quickly"]
        },
        {
          title: "Centralized Audit and Activity Logs",
          desc: "Automatically record all edits, assignments, and permission changes with user data and execution time",
          icon: History,
          points: ["Instant access to all previous changes", "Compliance and internal audits"]
        },
        {
          title: "Growth and Expansion Tools",
          desc: "Designed for organizations of all sizes, from single-site companies to large multi-branch fleets and departments",
          icon: TrendingUp,
          points: ["Bulk import, transfer, and restructuring"]
        }
      ],
      security: {
        title: "Security and Integration",
        items: [
          {
            title: "Full Encryption with Access Management",
            desc: "Role-based access to user/asset data with enterprise-level security protocols",
            icon: Lock
          },
          {
            title: "Seamless Integration",
            desc: "Works with maintenance, rental, and tracking units for unified reporting for consolidated operations",
            icon: RefreshCw
          },
          {
            title: "Centralized Backup and Recovery",
            desc: "Automated backups and fast recovery options to ensure business continuity",
            icon: Database
          }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "Can I control access to different locations and departments?",
            answer: "Yes, Fleetoo supports multi-branch management with custom permissions and clear asset visibility. You can create unlimited organizational structures, assign users and vehicles to different branches, and fully control what each department can see and manage within the platform."
          },
          {
            question: "Is restructuring easy as we expand?",
            answer: "Absolutely — bulk operations and simple drag-and-drop tools allow you to perform tasks quickly and without errors. Fleetoo is designed to scale with your business growth, from single-site companies to large multi-branch fleets. Restructuring, data extraction, and reorganization are seamless and intuitive."
          },
          {
            question: "Are all changes recorded for audit purposes?",
            answer: "Yes, every action, edit, or assignment is recorded with user details, date, and time. Fleetoo maintains comprehensive audit logs for all organizational changes, permission updates, and asset assignments — ensuring full transparency to meet compliance requirements and internal audits."
          }
        ]
      },
      finalCta: {
        title: "Put Your Organization in Your Hands — Digital, Secure, and Scalable",
        cta: "Try the System Now"
      }
    }
  };

  const activeContent = isAr ? content.ar : content.en;

  return (
    <main className="min-h-screen bg-secondary text-white">
      <Navbar />
      
      <HeroSection
        title={activeContent.hero.title}
        subtitle={activeContent.hero.subtitle}
        ctaText={activeContent.hero.ctaPrimary}
        bookText={activeContent.hero.ctaSecondary}
        onCtaClick={openDemoModal}
        imageSrc="https://picsum.photos/seed/org-hero/1200/800"
        isAr={isAr}
        language={language}
        reverse
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionHeader
            title={activeContent.intro.title}
            description={activeContent.intro.desc}
            centered
            dark
          />
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <OrganizationFeaturesGrid items={activeContent.features} />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <OrganizationSecuritySection 
            title={activeContent.security.title}
            items={activeContent.security.items}
            isAr={isAr}
          />
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader
            title={activeContent.faq.title}
            centered
            dark
          />
          <OrganizationFAQ items={activeContent.faq.items} />
        </div>
      </section>

      <FinalCTA
        title={activeContent.finalCta.title}
        ctaText={activeContent.finalCta.cta}
        onCtaClick={openDemoModal}
      />

      <Footer />
    </main>
  );
}
