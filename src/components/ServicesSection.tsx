
import { Briefcase, Check, Clock, FileText, Search, Shield, Star, Users } from "lucide-react";
import { useEffect, useRef, memo } from "react";

// Memoized service card for better performance
const ServiceCard = memo(({ service, index }: { 
  service: { 
    icon: JSX.Element; 
    title: string; 
    description: string; 
    image: string; 
  }; 
  index: number; 
}) => (
  <div 
    className="service-card bg-white dark:bg-gray-800 hover:border-lawyer-red group rounded-xl overflow-hidden shadow-lg opacity-0"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    <div className="aspect-video overflow-hidden">
      <img 
        src={service.image} 
        alt={service.title} 
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <div className="mb-4 flex justify-center">
        <div className="p-3 rounded-full bg-lawyer-red/10 group-hover:bg-lawyer-red/20 transition-colors">
          {service.icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-center group-hover:text-lawyer-red transition-colors">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-center">
        {service.description}
      </p>
    </div>
  </div>
));

// Service data moved outside component to prevent recreation on each render
const servicesData = [
  {
    icon: <Briefcase className="h-10 w-10 text-lawyer-red" />,
    title: "تأسيس الشركات",
    description: "خدمات متكاملة في تأسيس وتسجيل الشركات بمختلف أنواعها وإعداد كافة العقود اللازمة.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Users className="h-10 w-10 text-lawyer-red" />,
    title: "قسمة التركات",
    description: "المساعدة في تقسيم التركات بشكل عادل بين الورثة وفقًا للقانون والشريعة الإسلامية.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <FileText className="h-10 w-10 text-lawyer-red" />,
    title: "صياغة العقود",
    description: "صياغة مختلف أنواع العقود القانونية بدقة واحترافية عالية لضمان حقوق الأطراف.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Shield className="h-10 w-10 text-lawyer-red" />,
    title: "إعادة هيكلة الشركات",
    description: "تقديم الاستشارات وخدمات إعادة هيكلة وحوكمة الشركات لتحسين أدائها.",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Search className="h-10 w-10 text-lawyer-red" />,
    title: "تسجيل العلامات التجارية",
    description: "المساعدة في تسجيل وحماية العلامات التجارية وفقًا للقوانين المحلية والدولية.",
    image: "https://images.unsplash.com/photo-1569310081736-7bff242d2eb7?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Briefcase className="h-10 w-10 text-lawyer-red" />,
    title: "الاستشارات القانونية",
    description: "تقديم استشارات قانونية متخصصة في مختلف المجالات لحل المشكلات القانونية.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop"
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Using a more efficient intersection observer with a lower threshold
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Optimize by getting all cards at once and then animating them
          const cards = sectionRef.current?.querySelectorAll('.service-card');
          if (cards) {
            cards.forEach((card, index) => {
              setTimeout(() => {
                (card as HTMLElement).classList.add('animate-fade-in');
                (card as HTMLElement).classList.remove('opacity-0');
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
          <span className="inline-block px-4 py-2 bg-lawyer-red/10 text-lawyer-red rounded-full text-sm font-semibold mb-4">خدماتنا</span>
          <h2 className="section-title">خدماتنا القانونية المتميزة</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            نقدم مجموعة متنوعة من الخدمات القانونية المتميزة لتلبية احتياجات عملائنا بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="section-subtitle text-center mb-8">
            لماذا مكتب محاماة متميز؟
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 bg-lawyer-red/10 rounded-full">
                  <Star className="h-8 w-8 text-lawyer-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">خبرة مهنية عالية</h4>
                  <p className="text-muted-foreground text-sm">
                    فريق من المحامين المتمرسين ذوي الخبرة في مختلف مجالات القانون.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 bg-lawyer-red/10 rounded-full">
                  <Clock className="h-8 w-8 text-lawyer-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">استجابة سريعة</h4>
                  <p className="text-muted-foreground text-sm">
                    نلتزم بالرد السريع على استفسارات العملاء وتقديم المشورة في أقرب وقت.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 bg-lawyer-red/10 rounded-full">
                  <Check className="h-8 w-8 text-lawyer-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">حلول قانونية فعالة</h4>
                  <p className="text-muted-foreground text-sm">
                    نقدم حلولًا قانونية مبتكرة وفعالة للمشكلات القانونية المعقدة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
