import {
  Award,
  BookOpen,
  Briefcase,
  FileText,
  Gavel,
  ChevronLeft,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AttorneyProfile = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="attorney"
      className={`py-24 relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-700`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-lawyer-red/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lawyer-red/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20 text-center" data-aos="fade-up">
          <span className="inline-block px-5 py-2 bg-lawyer-red/10 text-lawyer-red rounded-full text-sm font-semibold mb-5 border border-lawyer-red/20">
            المؤسس
          </span>
          <h2 className="text-4xl font-bold mb-6 dark:text-white text-lawyer-red">
            المحامي أحمد اليوسفي
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            خبرة متميزة في مجال المحاماة والاستشارات القانونية لأكثر من 15 عامًا
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div
              className="rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative group"
              data-aos="fade-up"
            >
              <img
                src="/images/yossif-office-img.png"
                alt="المحامي أحمد اليوسفي"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-bold text-xl">المحامي أحمد اليوسفي</p>
                <p className="text-white/90">مؤسس مكتب اليوسفي للمحاماة</p>
              </div>
            </div>

            <div
              className="bg-white dark:bg-gray-800/90 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-lawyer-red to-red-700 inline-block bg-clip-text text-transparent">
                نبذة مختصرة
              </h3>

              {[
                {
                  icon: Award,
                  text: "خبرة تزيد عن 15 عامًا",
                },
                {
                  icon: Gavel,
                  text: "محامي مترافع أمام المحكمة العليا",
                },
                {
                  icon: FileText,
                  text: "باحث دكتوراه في القانون الخاص",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 mb-3 last:mb-0 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="bg-lawyer-red/10 p-3 rounded-full flex-shrink-0">
                    <item.icon className="text-lawyer-red" size={20} />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div
              className="bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="p-3 bg-lawyer-red/10 rounded-full">
                  <BookOpen className="h-6 w-6 text-lawyer-red" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-lawyer-red to-red-700 inline-block bg-clip-text text-transparent">
                  المؤهلات العلمية
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "باحث دكتوراه في القانون الخاص - جامعة صنعاء",
                  "ماجستير في قانون المرافعات المدنية والتجارية - جامعة صنعاء (امتياز)",
                  "دبلوم تمهيدي في القانون الخاص - جامعة صنعاء",
                  "ليسانس في الشريعة والقانون - جامعة صنعاء",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                  >
                    <span className="text-lawyer-red font-bold text-lg mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-muted-foreground text-lg group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="p-3 bg-lawyer-red/10 rounded-full">
                  <Briefcase className="h-6 w-6 text-lawyer-red" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-lawyer-red to-red-700 inline-block bg-clip-text text-transparent">
                  الخبرات المهنية
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "محامي مترافع أمام المحكمة العليا للنقض والإقرار",
                  "خبرة تزيد عن 15 عامًا في مجال المحاماة",
                  "محامي ومستشار قانوني لعدة شركات تجارية",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                  >
                    <span className="text-lawyer-red font-bold text-lg mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-muted-foreground text-lg group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="p-3 bg-lawyer-red/10 rounded-full">
                  <FileText className="h-6 w-6 text-lawyer-red" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-lawyer-red to-red-700 inline-block bg-clip-text text-transparent">
                  المؤلفات
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  '"التدخل في الخصومة المدنية على ضوء قانون المرافعات اليمني" - دراسة مقارنة',
                  "بحث في قانون العلامات التجارية",
                  "بحث في قانون المرافعات - العوارض التي تعترض الخصومة القضائية",
                  "بحث في القانون التجاري حول الكفالة التجارية",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
                  >
                    <span className="text-lawyer-red font-bold text-lg mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-muted-foreground text-lg group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
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

export default AttorneyProfile;
