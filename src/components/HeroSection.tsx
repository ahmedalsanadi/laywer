import { ArrowLeft } from 'lucide-react';

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative min-h-[100vh] flex items-center overflow-hidden">
            {/* New background with optimized gradient overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/50 z-10"></div>
                <img
                    // src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1500&auto=format&fit=crop"
                    src="/images/landing-1.jpg" // Updated to use local image
                    alt="مكتب محاماة"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />

                {/* Abstract SVG background overlay for visual interest */}
                <div className="absolute inset-0 z-5 opacity-10">
                    <svg
                        width="100%"
                        height="100%"
                        xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern
                                id="smallGrid"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse">
                                <path
                                    d="M 20 0 L 0 0 0 20"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="0.5"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width="100%"
                            height="100%"
                            fill="url(#smallGrid)"
                        />
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
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
                    {/* Text Content */}
                    <div
                        className="w-full md:w-1/2"
                        data-aos="fade-in"
                        data-aos-delay="300">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow-lg">
                            خبرة قانونية{' '}
                            <span className="text-lawyer-red">متميزة</span>
                        </h1>
                        <p
                            className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
                            data-aos="fade-in"
                            data-aos-delay="600">
                            مكتب المحامي أحمد اليوسفي للمحاماة والاستشارات
                            القانونية، خبرة أكثر من 15 عامًا في الخدمات
                            القانونية المتميزة
                        </p>

                        <div
                            className="flex flex-wrap gap-4"
                            data-aos="fade-in"
                            data-aos-delay="900">
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-lawyer-red text-white rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-red flex items-center gap-2">
                                تواصل معنا
                                <ArrowLeft size={18} />
                            </a>
                            <a
                                href="#services"
                                className="px-8 py-3 bg-white bg-opacity-10 backdrop-blur-sm text-white hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow-white rounded-md flex items-center gap-2">
                                خدماتنا
                                <ArrowLeft size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Lawyer Image with Curved Border - UPDATED WITH UPLOADED IMAGE */}
                    <div
                        className="w-full md:w-1/2 flex justify-center"
                        data-aos="fade-in"
                        data-aos-delay="600">
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-32 h-32 border-t-4 border-r-4 border-lawyer-red rounded-tr-3xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-4 border-l-4 border-lawyer-red rounded-bl-3xl"></div>

                            {/* Image with frame - UPDATED WITH UPLOADED IMAGE */}
                            <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                                <img
                                    src="/images/hero.png"
                                    alt="المحامي أحمد اليوسفي"
                                    className="w-[300px] h-[400px] object-cover object-top"
                                    loading="eager"
                                />

                                {/* Overlay gradient */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
                            </div>

                            {/* Experience badge */}
                            <div className="absolute -bottom-5 right-0 bg-lawyer-red text-white px-4 py-2 rounded-full shadow-lg z-20">
                                <span className="font-bold">خبرة +15 عام</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator with improved visibility */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-white opacity-70 hover:opacity-100 transition-opacity hover:text-lawyer-red">
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
                            strokeLinejoin="round">
                            <path d="M12 5v14M5 12l7 7 7-7" />
                        </svg>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
