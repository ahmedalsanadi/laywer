import { Award, BookOpen, Briefcase, FileText, Gavel } from 'lucide-react';

const AttorneyProfile = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-lawyer-dark">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center" data-aos="fade-up">
                    <span className="inline-block px-4 py-2 bg-lawyer-red/10 text-lawyer-red rounded-full text-sm font-semibold mb-4">
                        المؤسس
                    </span>
                    <h2 className="section-title">المحامي أحمد اليوسفي</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                        خبرة متميزة في مجال المحاماة والاستشارات القانونية لأكثر
                        من 15 عامًا
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <div
                            className="rounded-2xl overflow-hidden mb-6 shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                            data-aos="fade-up">
                            <img
                                src="/images/yossif-office-img.png"
                                alt="المحامي أحمد اليوسفي"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div
                            className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                            data-aos="fade-up">
                            <div className="flex items-center gap-3">
                                <div className="bg-lawyer-red/10 p-2 rounded-full">
                                    <Award
                                        className="text-lawyer-red"
                                        size={24}
                                    />
                                </div>
                                <span className="font-semibold">
                                    خبرة تزيد عن 15 عامًا
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-lawyer-red/10 p-2 rounded-full">
                                    <Gavel
                                        className="text-lawyer-red"
                                        size={24}
                                    />
                                </div>
                                <span className="font-semibold">
                                    محامي مترافع أمام المحكمة العليا
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-lawyer-red/10 p-2 rounded-full">
                                    <FileText
                                        className="text-lawyer-red"
                                        size={24}
                                    />
                                </div>
                                <span className="font-semibold">
                                    باحث دكتوراه في القانون الخاص
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8"
                            data-aos="fade-up">
                            <div className="mb-6 flex items-center gap-4">
                                <div className="p-3 bg-lawyer-red/10 rounded-full">
                                    <BookOpen className="h-6 w-6 text-lawyer-red" />
                                </div>
                                <h3 className="section-subtitle mb-0">
                                    المؤهلات العلمية
                                </h3>
                            </div>
                            <ul className="mb-8 space-y-4 text-muted-foreground">
                                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <span className="text-lawyer-red font-bold text-lg mt-1">
                                        •
                                    </span>
                                    <span>
                                        باحث دكتوراه في القانون الخاص - جامعة
                                        صنعاء
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <span className="text-lawyer-red font-bold text-lg mt-1">
                                        •
                                    </span>
                                    <span>
                                        ماجستير في قانون المرافعات المدنية
                                        والتجارية - جامعة صنعاء (امتياز)
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <span className="text-lawyer-red font-bold text-lg mt-1">
                                        •
                                    </span>
                                    <span>
                                        دبلوم تمهيدي في القانون الخاص - جامعة
                                        صنعاء
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <span className="text-lawyer-red font-bold text-lg mt-1">
                                        •
                                    </span>
                                    <span>
                                        ليسانس في الشريعة والقانون - جامعة صنعاء
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8"
                            data-aos="fade-up">
                            <div className="mb-6 flex items-center gap-4">
                                <div className="p-3 bg-lawyer-red/10 rounded-full">
                                    <Briefcase className="h-6 w-6 text-lawyer-red" />
                                </div>
                                <h3 className="section-subtitle mb-0">
                                    الخبرات المهنية
                                </h3>
                            </div>
                            <ul className="mb-8 space-y-4 text-muted-foreground">
                                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <span className="text-lawyer-red font-bold text-lg mt-1">
                                        •
                                    </span>
                                    <span>
                                        محامي مترافع أمام المحكمة العليا للنقض
                                        والإقرار
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <span className="text-lawyer-red font-bold text-lg mt-1">
                                        •
                                    </span>
                                    <span>
                                        خبرة تزيد عن 15 عامًا في مجال المحاماة
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <span className="text-lawyer-red font-bold text-lg mt-1">
                                        •
                                    </span>
                                    <span>
                                        محامي ومستشار قانوني لعدة شركات تجارية
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
                            data-aos="fade-up">
                            <div className="mb-6 flex items-center gap-4">
                                <div className="p-3 bg-lawyer-red/10 rounded-full">
                                    <FileText className="h-6 w-6 text-lawyer-red" />
                                </div>
                                <h3 className="section-subtitle mb-0">
                                    المؤلفات
                                </h3>
                            </div>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <span className="text-lawyer-red font-bold text-lg mt-1">
                                        •
                                    </span>
                                    <span>
                                        "التدخل في الخصومة المدنية على ضوء قانون
                                        المرافعات اليمني" - دراسة مقارنة
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <span className="text-lawyer-red font-bold text-lg mt-1">
                                        •
                                    </span>
                                    <span>بحث في قانون العلامات التجارية</span>
                                </li>
                                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <span className="text-lawyer-red font-bold text-lg mt-1">
                                        •
                                    </span>
                                    <span>
                                        بحث في قانون المرافعات - العوارض التي
                                        تعترض الخصومة القضائية
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <span className="text-lawyer-red font-bold text-lg mt-1">
                                        •
                                    </span>
                                    <span>
                                        بحث في القانون التجاري حول الكفالة
                                        التجارية
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AttorneyProfile;
