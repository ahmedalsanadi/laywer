import {
  Briefcase,
  Check,
  Clock,
  FileText,
  Search,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useRef, memo } from "react";

// Memoized service card for better performance
const ServiceCard = memo(
  ({
    service,
    index,
  }: {
    service: {
      icon: JSX.Element;
      title: string;
      description: string;
      image: string;
    };
    index: number;
  }) => (
    <div
      className="group relative isolate rounded-2xl overflow-hidden bg-gradient-to-br from-white/70 via-white/50 to-white/30 dark:from-gray-900/70 dark:via-gray-800/50 dark:to-gray-900/30 shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-md hover:shadow-2xl hover:scale-[1.015] transition-transform duration-500"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Glow effect */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-lawyer-red/30 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

      {/* Image */}
      <div className="h-56 w-full overflow-hidden relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
      </div>

      {/* Floating icon */}
      <div className="relative z-10 flex justify-center -mt-10 mb-4">
        <div className="bg-lawyer-red/10 p-4 rounded-full shadow-lg transition-all duration-500 group-hover:bg-lawyer-red/20">
          {service.icon}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-lawyer-red transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 min-h-[72px]">
          {service.description}
        </p>

        
      </div>

      {/* Decorative shape */}
      <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-lawyer-red/10 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 z-0" />
    </div>
  )
);

// Service data moved outside component to prevent recreation on each render
const servicesData = [
  {
    icon: <Briefcase className="h-10 w-10 text-lawyer-red" />,
    title: "تأسيس الشركات",
    description:
      "خدمات متكاملة في تأسيس وتسجيل الشركات بمختلف أنواعها وإعداد كافة العقود اللازمة.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: <Users className="h-10 w-10 text-lawyer-red" />,
    title: "قسمة التركات",
    description:
      "المساعدة في تقسيم التركات بشكل عادل بين الورثة وفقًا للقانون والشريعة الإسلامية.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: <FileText className="h-10 w-10 text-lawyer-red" />,
    title: "صياغة العقود",
    description:
      "صياغة مختلف أنواع العقود القانونية بدقة واحترافية عالية لضمان حقوق الأطراف.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: <Shield className="h-10 w-10 text-lawyer-red" />,
    title: "إعادة هيكلة الشركات",
    description:
      "تقديم الاستشارات وخدمات إعادة هيكلة وحوكمة الشركات لتحسين أدائها.",
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: <Search className="h-10 w-10 text-lawyer-red" />,
    title: "تسجيل العلامات التجارية",
    description:
      "المساعدة في تسجيل وحماية العلامات التجارية وفقًا للقوانين المحلية والدولية.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-lawyer-red" />,
    title: "الاستشارات القانونية",
    description:
      "تقديم استشارات قانونية متخصصة في مختلف المجالات لحل المشكلات القانونية.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
  },
];

const items = [
  {
    icon: <Star className="h-6 w-6 text-lawyer-red" />,
    title: "خبرة مهنية عالية",
    desc: "فريق من المحامين المتمرسين ذوي الخبرة في مختلف مجالات القانون.",
  },
  {
    icon: <Clock className="h-6 w-6 text-lawyer-red" />,
    title: "استجابة سريعة",
    desc: "نلتزم بالرد السريع على استفسارات العملاء وتقديم المشورة في أقرب وقت.",
  },
  {
    icon: <Check className="h-6 w-6 text-lawyer-red" />,
    title: "حلول قانونية فعالة",
    desc: "نقدم حلولًا قانونية مبتكرة وفعالة للمشكلات القانونية المعقدة.",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Using a more efficient intersection observer with a lower threshold
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Optimize by getting all cards at once and then animating them
          const cards = sectionRef.current?.querySelectorAll(".service-card");
          if (cards) {
            cards.forEach((card, index) => {
              setTimeout(() => {
                (card as HTMLElement).classList.add("animate-fade-in");
                (card as HTMLElement).classList.remove("opacity-0");
              }, index * 100); // Reduced delay time
            });
          }
          // Unobserve after animation to save resources
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-white dark:bg-lawyer-dark">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-2 bg-lawyer-red/10 text-lawyer-red rounded-full text-sm font-semibold mb-4">
            خدماتنا
          </span>
          <h2 className="section-title">خدماتنا القانونية المتميزة</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            نقدم مجموعة متنوعة من الخدمات القانونية المتميزة لتلبية احتياجات
            عملائنا بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="mt-20 px-4 sm:px-8 lg:px-0">
          <h3 className="section-subtitle text-center mb-14 text-2xl font-bold text-gray-900 dark:text-white">
            لماذا مكتب محاماة متميز؟
          </h3>

          {/* Mobile: Vertical Timeline */}
          <div className="relative border-s-2 border-lawyer-red/30 ps-6 space-y-10 md:hidden">
            {items.map((item, i) => (
              <div key={i} className="relative group">
                <div className="absolute -start-3 top-1.5 bg-white dark:bg-gray-900 border border-lawyer-red rounded-full p-1">
                  {item.icon}
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <h4 className="font-semibold text-lg mb-2 text-lawyer-red">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Horizontal Cards with Connector Line */}
          <div className="hidden md:grid grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-lawyer-red/20 z-0"></div>

            {items.map((item, i) => (
              <div
                key={i}
                className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md z-10 text-center"
              >
                <div className="flex justify-center -mt-12 mb-4">
                  <div className="bg-white dark:bg-gray-900 border border-lawyer-red rounded-full p-2">
                    {item.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-2 text-lawyer-red">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
