import { Facebook, Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { useState, memo, useRef } from "react";
import { motion } from "framer-motion";

// Memoized contact card component with animation
const ContactCard = memo(
  ({
    icon,
    title,
    children,
    delay = 0,
  }: {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
    delay?: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="contact-card flex items-start p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
    >
      <div className="bg-lawyer-red p-3 rounded-xl mr-4 shrink-0 shadow-md shadow-lawyer-red/20">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h4>
        <div className="text-gray-600 dark:text-gray-300">{children}</div>
      </div>
    </motion.div>
  )
);

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Reset form status after 5 seconds
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 overflow-x-hidden"
    >
      <div className="container mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-block px-4 py-2 bg-lawyer-red/10 text-lawyer-red rounded-full text-sm font-semibold mb-4">
            اتصل بنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            تواصل معنا
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            نحن هنا للإجابة على استفساراتك وتقديم المساعدة القانونية التي
            تحتاجها
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact info card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800 h-full"
          >
            <h3 className="text-2xl font-bold mb-8 relative">
              <span className="bg-gradient-to-r from-lawyer-red to-red-500 bg-clip-text text-transparent">
                معلومات الاتصال
              </span>
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-lawyer-red rounded-full"></span>
            </h3>

            <div className="space-y-6">
              <ContactCard
                icon={<MapPin className="h-6 w-6 text-white" />}
                title="العنوان"
                delay={0.1}
              >
                <p>
                  الجمهورية اليمنية، صنعاء، شارع تعز، جنوب جولة المرور، عمارة
                  مياس، الدور الرابع، جوار الشارقة مول
                </p>
              </ContactCard>

              <ContactCard
                icon={<Mail className="h-6 w-6 text-white" />}
                title="البريد الإلكتروني"
                delay={0.2}
              >
                <a
                  href="mailto:Lawyeralyousefi@gmail.com"
                  className="text-lawyer-red hover:underline transition-all break-all"
                >
                  Lawyeralyousefi@gmail.com
                </a>
              </ContactCard>

              <ContactCard
                icon={<Phone className="h-6 w-6 text-white" />}
                title="أرقام الهاتف"
                delay={0.3}
              >
                <div className="flex flex-wrap gap-2">
                  <a
                    href="tel:778877408"
                    className="hover:text-lawyer-red transition-all"
                  >
                    778877408
                  </a>{" "}
                  /
                  <a
                    href="tel:777579746"
                    className="hover:text-lawyer-red transition-all"
                  >
                    777579746
                  </a>{" "}
                  /
                  <a
                    href="tel:01603803"
                    className="hover:text-lawyer-red transition-all"
                  >
                    01603803
                  </a>
                </div>
              </ContactCard>

              <ContactCard
                icon={<Facebook className="h-6 w-6 text-white" />}
                title="فيسبوك"
                delay={0.4}
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61557633721658"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lawyer-red hover:underline transition-all"
                >
                  مكتب المحامي أحمد اليوسفي
                </a>
              </ContactCard>
            </div>

            {/* Social media buttons */}
            <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                تابعنا على وسائل التواصل الاجتماعي
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-lawyer-red hover:text-white transition-all"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-lawyer-red hover:text-white transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-lawyer-red hover:text-white transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800"
          >
            <h3 className="text-2xl font-bold mb-8 relative">
              <span className="bg-gradient-to-r from-lawyer-red to-red-500 bg-clip-text text-transparent">
                أرسل رسالة
              </span>
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-lawyer-red rounded-full"></span>
            </h3>

            {formStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-200 rounded-lg p-4 flex items-center mb-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>تم إرسال رسالتك بنجاح، سنقوم بالرد عليك قريبًا.</span>
              </motion.div>
            )}

            {formStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-200 rounded-lg p-4 flex items-center mb-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>حدث خطأ أثناء إرسال رسالتك، يرجى المحاولة مرة أخرى.</span>
              </motion.div>
            )}

            <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 font-medium text-gray-900 dark:text-gray-100"
                  >
                    الاسم <span className="text-lawyer-red">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-10 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-lawyer-red/50 focus:border-lawyer-red transition-all"
                      placeholder="أدخل اسمك الكامل"
                      required
                      disabled={formStatus === "submitting"}
                    />
                    <svg
                      className="absolute top-3 right-3 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-gray-900 dark:text-gray-100"
                  >
                    البريد الإلكتروني <span className="text-lawyer-red">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-10 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-lawyer-red/50 focus:border-lawyer-red transition-all"
                      placeholder="أدخل بريدك الإلكتروني"
                      required
                      disabled={formStatus === "submitting"}
                    />
                    <Mail className="absolute top-3 right-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 font-medium text-gray-900 dark:text-gray-100"
                >
                  رقم الهاتف <span className="text-lawyer-red">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-10 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-lawyer-red/50 focus:border-lawyer-red transition-all"
                    placeholder="أدخل رقم هاتفك"
                    required
                    disabled={formStatus === "submitting"}
                  />
                  <Phone className="absolute top-3 right-3 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-gray-900 dark:text-gray-100"
                >
                  الرسالة <span className="text-lawyer-red">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-lawyer-red/50 focus:border-lawyer-red transition-all resize-none"
                    placeholder="اكتب رسالتك هنا"
                    required
                    disabled={formStatus === "submitting"}
                  ></textarea>
                </div>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  سيتم الرد على رسالتك في أقرب وقت ممكن.
                </p>
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="px-6 py-3 bg-lawyer-red text-white rounded-lg hover:bg-opacity-90 w-full flex items-center justify-center gap-2 shadow-lg shadow-lawyer-red/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === "submitting" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    إرسال الرسالة
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 h-[400px] relative"
        >
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <div className="w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15392.683811037445!2d44.232619!3d15.312942!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1603db004f067483%3A0x2a0f66c26248ffaf!2z2YXZg9iq2Kgg2KfZhNmF2K3Yp9mF2Yog2KfYrdmF2K8g2KfZhNmK2YjYs9mB2Yo!5e0!3m2!1sar!2sus!4v1746336425153!5m2!1sar!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="dark:grayscale dark:opacity-80"
              ></iframe>
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-lawyer-red text-white rounded-lg text-sm hover:bg-opacity-90 transition-all"
                >
                  الاتجاهات إلى المكتب
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
