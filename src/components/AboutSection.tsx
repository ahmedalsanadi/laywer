import {
  Award,
  Briefcase,
  Check,
  Shield,
  Users,
  Star,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import CountUp from "react-countup";
import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  // Using react-intersection-observer for better performance than native IntersectionObserver
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      className={`py-24 relative bg-gradient-to-b from-white to-gray-50 dark:from-lawyer-dark dark:to-gray-900 overflow-hidden ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-700`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-lawyer-red/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lawyer-red/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20 text-center" data-aos="fade-up">
          <span className="inline-block px-5 py-2 bg-lawyer-red/10 text-lawyer-red rounded-full text-sm font-semibold mb-5 border border-lawyer-red/20">
            نبذة عنا
          </span>
          <h2 className="text-4xl font-bold mb-6 dark:text-white text-lawyer-red">
            لماذا تختار مكتب اليوسفي للمحاماة
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            تأسس المكتب عام 2010 بموجب ترخيص رقم (355) الصادر من نقابة المحامين
            اليمنيين. منذ ذلك الحين، يلتزم بتقديم خدمات قانونية عالية
            الاحترافية، مع التركيز على توفير أفضل الحلول القانونية لعملائه.
          </p>
        </div>

        <div
  ref={statsRef}
  className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-24"
>
  {[
    { value: 15, label: "سنوات من الخبرة", icon: Award },
    { value: 50, label: "استشارات قانونية شهريًا", icon: Briefcase },
    { value: 300, label: "قضايا ناجحة", icon: Check },
    { value: 25, label: "عميل دائم", icon: Users },
  ].map((stat, index) => (
    <div
      key={index}
      className="stat-card relative bg-white dark:bg-gray-800/90 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm sm:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-lg sm:hover:shadow-2xl group overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="absolute -right-6 -top-6 sm:-right-10 sm:-top-10 w-16 h-16 sm:w-28 sm:h-28 rounded-full bg-lawyer-red/10 group-hover:bg-lawyer-red/20 transition-colors duration-300"></div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="mb-2 sm:mb-4 bg-lawyer-red/10 w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center">
          <stat.icon className="text-lawyer-red" size={20} />
        </div>
        <span className="stat-number text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white text-lawyer-red block mb-1 sm:mb-2">
          {statsInView ? (
            <CountUp end={stat.value} duration={2.5} />
          ) : (
            "0"
          )}
        </span>
        <span className="stat-label text-sm sm:text-base md:text-lg font-medium text-center">
          {stat.label}
        </span>
      </div>
    </div>
  ))}
</div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div
            className="md:col-span-2 bg-white dark:bg-gray-800/90 p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-lawyer-red to-red-700 inline-block bg-clip-text text-transparent mb-8">
              نبذة عن المكتب
            </h3>
            <p className="mb-8 text-muted-foreground leading-relaxed text-lg">
              تأسس المكتب عام 2010 بموجب ترخيص رقم (355) الصادر من نقابة
              المحامين اليمنيين. منذ ذلك الحين، يلتزم بتقديم خدمات قانونية عالية
              الاحترافية، مع التركيز على توفير أفضل الحلول القانونية لعملائه.
            </p>

            <h4 className="text-xl font-bold mb-5 border-b border-gray-200 dark:border-gray-700 pb-2">
              رؤيتنا ورسالتنا
            </h4>
            <div className="mb-8 bg-gray-50 dark:bg-gray-700/50 p-5 rounded-xl border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <h5 className="font-bold mb-3 flex items-center gap-3 text-lg text-lawyer-red">
                <Award className="text-lawyer-red" size={20} />
                رؤيتنا
              </h5>
              <p className="text-muted-foreground pr-8 leading-relaxed">
                أن نكون من بين المكاتب الرائدة في اليمن في تقديم الخدمات
                والاستشارات القانونية.
              </p>
            </div>

            <div className="mb-8 bg-gray-50 dark:bg-gray-700/50 p-5 rounded-xl border border-gray-100 dark:border-gray-700 transform transition-all duration-300 hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <h5 className="font-bold mb-3 flex items-center gap-3 text-lg text-lawyer-red">
                <Briefcase className="text-lawyer-red" size={20} />
                رسالتنا
              </h5>
              <p className="text-muted-foreground pr-8 leading-relaxed">
                تقديم خدمات قانونية متميزة بفريق كفء يرسخ مبدأ العدالة ويحفظ
                الحقوق، مع تحقيق رضا وثقة العملاء.
              </p>
            </div>

            <div className="relative mt-12 overflow-hidden rounded-2xl shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=2080&auto=format&fit=crop"
                alt="مكتب المحاماة"
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 right-6 z-10">
                <p className="text-white font-bold text-xl">
                  مكتب اليوسفي للمحاماة
                </p>
                <p className="text-white/90 text-sm flex items-center gap-1">
                  <Star size={14} className="text-lawyer-red fill-lawyer-red" />
                  <Star size={14} className="text-lawyer-red fill-lawyer-red" />
                  <Star size={14} className="text-lawyer-red fill-lawyer-red" />
                  <Star size={14} className="text-lawyer-red fill-lawyer-red" />
                  <Star size={14} className="text-lawyer-red fill-lawyer-red" />
                  <span className="mr-1">تأسس عام 2010</span>
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3" data-aos="fade-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-lawyer-red to-red-700 inline-block bg-clip-text text-transparent mb-8">
              قيمنا المؤسسية
            </h3>
            <ul className="space-y-8">
              {[
                {
                  icon: Shield,
                  title: "المسؤولية",
                  description:
                    "نتحمل المسؤولية الكاملة في جميع القضايا التي نتولاها، ونعمل بجد لتحقيق أفضل النتائج.",
                },
                {
                  icon: Check,
                  title: "الالتزام",
                  description:
                    "نلتزم بأعلى معايير الأخلاق المهنية والمصداقية في تعاملاتنا مع العملاء والمحاكم.",
                },
                {
                  icon: Users,
                  title: "المشاركة",
                  description:
                    "نؤمن بأهمية إشراك العملاء في كل خطوة من خطوات قضاياهم وإحاطتهم بكل التفاصيل.",
                },
                {
                  icon: Award,
                  title: "الإبداع",
                  description:
                    "نسعى دائمًا لإيجاد حلول إبداعية وفعالة للمشكلات القانونية المعقدة.",
                },
              ].map((value, index) => (
                <li key={index} className="flex items-start gap-6 group">
                  <div className="mt-1 bg-gradient-to-br from-lawyer-red to-red-700 rounded-xl p-3.5 shadow-xl shrink-0 group-hover:shadow-lawyer-red/30 transition-all duration-300 border border-lawyer-red/10">
                    <value.icon size={28} className="text-white" />
                  </div>
                  <div className="bg-white dark:bg-gray-800/90 p-6 rounded-2xl shadow-lg flex-1 border border-gray-100 dark:border-gray-700 transform transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 backdrop-blur-sm">
                    <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                      {value.title}
                      <ChevronLeft
                        size={18}
                        className="text-lawyer-red group-hover:translate-x-1 transition-transform"
                      />
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 bg-lawyer-red rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-pattern opacity-10"></div>
              <div className="relative z-10">
                <h4 className="text-white text-2xl font-bold mb-4">
                  هل تحتاج إلى مساعدة قانونية؟
                </h4>
                <p className="text-white/90 mb-6">
                  فريقنا من المحامين المتخصصين جاهز لتقديم المساعدة القانونية
                  المناسبة لك.
                </p>
                <button className="bg-white text-lawyer-red font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                  تواصل معنا الآن
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .bg-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E");
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection;
