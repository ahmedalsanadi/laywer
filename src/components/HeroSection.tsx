import { ArrowLeft } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] py-8 sm:py-16 flex items-center overflow-hidden"
    >
      {/* Background with optimized gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/50 dark:from-black/80 dark:via-black/70 dark:to-black/50 from-white/80 via-white/70 to-white/50 z-10"></div>
        <img
          src="/images/landing-1.jpg"
          alt="مكتب محاماة"
          className="w-full h-full object-cover object-center dark:block hidden"
          loading="eager"
        />
        <img
          src="/images/landing-5.jpg"
          alt="مكتب محاماة"
          className="w-full h-full object-cover object-center block dark:hidden"
          loading="eager"
        />

        {/* Abstract SVG background overlay for visual interest */}
        <div className="absolute inset-0 z-5 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="smallGrid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
            <path
              d="M0,0 L100,100 M100,0 L0,100"
              strokeWidth="1.5"
              stroke="white"
              strokeOpacity="0.2"
            />
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-4 sm:py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Content - Now first in mobile view */}
          <div
            className="w-full md:w-1/1 text-center md:text-right order-2 md:order-1 mt-6 md:mt-0"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-4 sm:mb-6 text-shadow-lg">
              خبرة قانونية <span className="text-lawyer-red">متميزة</span>
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl text-black/80 dark:text-white/80 mb-6 sm:mb-8 lg:leading-relaxed"
              data-aos="fade-in"
              data-aos-delay="600"
            >
          خبرة تمتد لأكثر من 15 عامًا في تقديم خدمات قانونية متميزة بكل احترافية وشفافية.
          نقدّم حلولاً قانونية متكاملة للأفراد والشركات في مختلف المجالات القانونية
            </p>

            <div
              className="flex flex-wrap justify-center md:justify-start gap-4"
              data-aos="fade-in"
              data-aos-delay="900"
            >
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 bg-lawyer-red text-white rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-red flex items-center gap-2"
              >
                تواصل معنا
                <ArrowLeft size={18} />
              </a>
              <a
                href="#services"
                className="px-6 sm:px-8 py-3 bg-black/10 dark:bg-white/10 backdrop-blur-sm text-black dark:text-white hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-white rounded-md flex items-center gap-2"
              >
                خدماتنا
                <ArrowLeft size={18} />
              </a>
            </div>
          </div>

          {/* Lawyer Image with Curved Border - Now appears first in mobile view */}
          <div
            className="w-full md:w-1/2 flex justify-center order-1 md:order-2"
            data-aos="fade-in"
            data-aos-delay="600"
          >
            <div className="relative group">
              {/* Modern frame with animated border */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-gradient-to-br from-lawyer-red/30 via-transparent to-lawyer-red/30 opacity-70 group-hover:opacity-100 transition-all duration-500 z-0"></div>

              {/* Decorative corner elements (animated) */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-16 h-16 sm:w-24 sm:h-24 border-t-4 border-r-4 border-lawyer-red rounded-tr-3xl transition-all duration-300 group-hover:-top-3 group-hover:-right-3 group-hover:w-20 group-hover:h-20 sm:group-hover:w-28 sm:group-hover:h-28 z-10"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-16 h-16 sm:w-24 sm:h-24 border-b-4 border-l-4 border-lawyer-red rounded-bl-3xl transition-all duration-300 group-hover:-bottom-3 group-hover:-left-3 group-hover:w-20 group-hover:h-20 sm:group-hover:w-28 sm:group-hover:h-28 z-10"></div>

              {/* Main image with elegant frame - Resized for mobile */}
              <div className="relative z-20 rounded-xl overflow-hidden border-4 border-white/20 shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02]">
                <img
                  src="/images/hero.png"
                  alt="المحامي أحمد اليوسفي"
                  className="w-[280px] h-[380px] xs:w-[300px] xs:h-[400px] sm:w-[320px] sm:h-[420px] md:w-[350px] md:h-[450px] object-cover object-top"
                  loading="eager"
                />

                {/* Professional overlay with subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating experience badge with glow effect - Adjusted for mobile */}
              <div className="absolute -bottom-5 right-1/2 transform translate-x-1/2 bg-gradient-to-r from-lawyer-red to-lawyer-red text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-xl z-30 group-hover:shadow-glow-red transition-all duration-300">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs sm:text-sm md:text-base">
                    خبرة +15 عام
                  </span>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with improved visibility - Hidden on smallest screens */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white opacity-70 hover:opacity-100 transition-opacity hover:text-lawyer-red"
        >
          <span className="text-sm font-semibold">المزيد</span>
          <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;