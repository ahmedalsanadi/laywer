import { Award, Briefcase, Check, Shield, Users } from 'lucide-react';
import CountUp from 'react-countup';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
    // Using react-intersection-observer for better performance than native IntersectionObserver
    const [statsRef, statsInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    });

    return (
        <section
            id="about"
            className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-lawyer-dark dark:to-gray-900">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center" data-aos="fade-up">
                    <span className="inline-block px-4 py-2 bg-lawyer-red/10 text-lawyer-red rounded-full text-sm font-semibold mb-4">
                        نبذة عنا
                    </span>
                    <h2 className="section-title">
                        لماذا تختار مكتب اليوسفي للمحاماة
                    </h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                        تأسس المكتب عام 2010 بموجب ترخيص رقم (355) الصادر من
                        نقابة المحامين اليمنيين. منذ ذلك الحين، يلتزم بتقديم
                        خدمات قانونية عالية الاحترافية، مع التركيز على توفير
                        أفضل الحلول القانونية لعملائه.
                    </p>
                </div>

                <div
                    ref={statsRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    <div
                        className="stat-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        data-aos="fade-up">
                        <span className="stat-number text-lawyer-red">
                            {statsInView ? (
                                <CountUp end={15} duration={2} />
                            ) : (
                                '0'
                            )}
                        </span>
                        <span className="stat-label">سنوات من الخبرة</span>
                    </div>

                    <div
                        className="stat-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        data-aos="fade-up">
                        <span className="stat-number text-lawyer-red">
                            {statsInView ? (
                                <CountUp end={50} duration={2} />
                            ) : (
                                '0'
                            )}
                        </span>
                        <span className="stat-label">
                            استشارات قانونية شهريًا
                        </span>
                    </div>

                    <div
                        className="stat-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        data-aos="fade-up">
                        <span className="stat-number text-lawyer-red">
                            {statsInView ? (
                                <CountUp end={300} duration={2} />
                            ) : (
                                '0'
                            )}
                        </span>
                        <span className="stat-label">قضايا ناجحة</span>
                    </div>

                    <div
                        className="stat-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        data-aos="fade-up">
                        <span className="stat-number text-lawyer-red">
                            {statsInView ? (
                                <CountUp end={25} duration={2} />
                            ) : (
                                '0'
                            )}
                        </span>
                        <span className="stat-label">عميل دائم</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div
                        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
                        data-aos="fade-right">
                        <h3 className="section-subtitle bg-gradient-to-r from-lawyer-red to-red-500 inline-block bg-clip-text text-transparent mb-6">
                            نبذة عن المكتب
                        </h3>
                        <p className="mb-6 text-muted-foreground leading-relaxed">
                            تأسس المكتب عام 2010 بموجب ترخيص رقم (355) الصادر من
                            نقابة المحامين اليمنيين. منذ ذلك الحين، يلتزم بتقديم
                            خدمات قانونية عالية الاحترافية، مع التركيز على توفير
                            أفضل الحلول القانونية لعملائه.
                        </p>

                        <h4 className="text-xl font-semibold mb-4">
                            رؤيتنا ورسالتنا
                        </h4>
                        <div className="mb-6 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2 flex items-center gap-2 text-lg">
                                <Award className="text-lawyer-red" size={20} />
                                رؤيتنا
                            </h5>
                            <p className="text-muted-foreground pr-7">
                                أن نكون من بين المكاتب الرائدة في اليمن في تقديم
                                الخدمات والاستشارات القانونية.
                            </p>
                        </div>

                        <div className="mb-6 bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2 flex items-center gap-2 text-lg">
                                <Briefcase
                                    className="text-lawyer-red"
                                    size={20}
                                />
                                رسالتنا
                            </h5>
                            <p className="text-muted-foreground pr-7">
                                تقديم خدمات قانونية متميزة بفريق كفء يرسخ مبدأ
                                العدالة ويحفظ الحقوق، مع تحقيق رضا وثقة العملاء.
                            </p>
                        </div>

                        <div className="relative mt-10">
                            <img
                                src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=2080&auto=format&fit=crop"
                                alt="مكتب المحاماة"
                                className="rounded-lg shadow-lg"
                            />
                            <div className="absolute -bottom-5 -right-5 bg-lawyer-red p-4 rounded-lg shadow-lg">
                                <p className="text-white font-bold">
                                    مكتب اليوسفي للمحاماة
                                </p>
                                <p className="text-white/80 text-sm">
                                    تأسس عام 2010
                                </p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-left">
                        <h3 className="section-subtitle bg-gradient-to-r from-lawyer-red to-red-500 inline-block bg-clip-text text-transparent mb-6">
                            قيمنا
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-lawyer-red rounded-full p-3 shadow-lg shrink-0">
                                    <Shield size={24} className="text-white" />
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg flex-1">
                                    <h4 className="font-semibold text-lg mb-2">
                                        المسؤولية
                                    </h4>
                                    <p className="text-muted-foreground">
                                        نتحمل المسؤولية الكاملة في جميع القضايا
                                        التي نتولاها، ونعمل بجد لتحقيق أفضل
                                        النتائج لعملائنا.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-lawyer-red rounded-full p-3 shadow-lg shrink-0">
                                    <Check size={24} className="text-white" />
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg flex-1">
                                    <h4 className="font-semibold text-lg mb-2">
                                        الالتزام
                                    </h4>
                                    <p className="text-muted-foreground">
                                        نلتزم بأعلى معايير الأخلاق المهنية
                                        والمصداقية في تعاملاتنا مع العملاء
                                        والمحاكم.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-lawyer-red rounded-full p-3 shadow-lg shrink-0">
                                    <Users size={24} className="text-white" />
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg flex-1">
                                    <h4 className="font-semibold text-lg mb-2">
                                        المشاركة
                                    </h4>
                                    <p className="text-muted-foreground">
                                        نؤمن بأهمية إشراك العملاء في كل خطوة من
                                        خطوات قضاياهم وإحاطتهم بكل التفاصيل.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-lawyer-red rounded-full p-3 shadow-lg shrink-0">
                                    <Award size={24} className="text-white" />
                                </div>
                                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg flex-1">
                                    <h4 className="font-semibold text-lg mb-2">
                                        الإبداع
                                    </h4>
                                    <p className="text-muted-foreground">
                                        نسعى دائمًا لإيجاد حلول إبداعية وفعالة
                                        للمشكلات القانونية المعقدة.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
