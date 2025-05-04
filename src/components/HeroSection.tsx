import { ArrowLeft, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black/5 to-black/10 dark:from-black dark:to-black/90 py-16 sm:py-20"
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 z-0">
        {/* Background images */}
        <div className="absolute inset-0 bg-[url('/images/landing-7.jpg')] dark:bg-[url('/images/landing-1.jpg')] bg-cover bg-center opacity-10 dark:opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/30 via-transparent to-transparent dark:from-black/40"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          {/* Image section - Now on top for mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px]">
              {/* Main image with modern frame */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="/images/hero.png"
                  alt="المحامي أحمد اليوسفي"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-black/20 via-transparent to-black/20 animate-pulse"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 border-t-4 border-r-4 border-lawyer-red rounded-tr-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-4 border-l-4 border-lawyer-red rounded-bl-3xl"></div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 right-4 bg-gradient-to-r from-lawyer-red to-red-600 text-white px-5 py-2 rounded-full shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm sm:text-base">
                    خبرة +15 عام
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content - Now below image for mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-right space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-lawyer-red/10 text-lawyer-red text-sm font-medium">
                مكتب محاماة معتمد
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className=" text-gray-900 dark:text-white">
                خبرة قانونية
              </span>
              <span className=" text-lawyer-red mt-2"> متميزة </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
            >
              خبرة تمتد لأكثر من 15 عامًا في تقديم خدمات قانونية متميزة بكل
              احترافية وشفافية. نقدّم حلولاً قانونية متكاملة للأفراد والشركات في
              مختلف المجالات القانونية
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-lawyer-red text-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-lawyer-red/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  تواصل معنا
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-lawyer-red to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="#services"
                className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border border-gray-200 dark:border-gray-700 hover:border-lawyer-red dark:hover:border-lawyer-red transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  خدماتنا
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                </span>
              </a>
            </motion.div>

            {/* Stats section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0 mt-12"
            >
              {[
                { number: "15+", label: "سنوات الخبرة" },
                { number: "1000+", label: "قضية ناجحة" },
                { number: "98%", label: "رضا العملاء" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="text-2xl font-bold text-lawyer-red mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-lawyer-red transition-colors"
        >
          <span className="text-sm font-medium">المزيد</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
