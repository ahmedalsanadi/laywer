
import { Facebook, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, memo } from "react";

// Memoized contact card component
const ContactCard = memo(({ icon, title, children }: { 
  icon: React.ReactNode; 
  title: string; 
  children: React.ReactNode; 
}) => (
  <div className="contact-card flex items-start">
    <div className="bg-lawyer-red p-3 rounded-full mr-4 shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold mb-2">{title}</h4>
      {children}
    </div>
  </div>
));

const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-lawyer-dark dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-2 bg-lawyer-red/10 text-lawyer-red rounded-full text-sm font-semibold mb-4">اتصل بنا</span>
          <h2 className="section-title">تواصل معنا</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            نحن هنا للإجابة على استفساراتك وتقديم المساعدة القانونية التي تحتاجها
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-lawyer-red to-red-500 inline-block bg-clip-text text-transparent">معلومات الاتصال</h3>
            <div className="space-y-8">
              <ContactCard icon={<MapPin className="h-6 w-6 text-white" />} title="العنوان">
                <p className="text-muted-foreground">
                  الجمهورية اليمنية، صنعاء، شارع تعز، جنوب جولة المرور، عمارة مياس، الدور الرابع، جوار الشارقة مول
                </p>
              </ContactCard>
              
              <ContactCard icon={<Mail className="h-6 w-6 text-white" />} title="البريد الإلكتروني">
                <a 
                  href="mailto:Lawyeralyousefi@gmail.com" 
                  className="text-lawyer-red hover:underline transition-all"
                >
                  Lawyeralyousefi@gmail.com
                </a>
              </ContactCard>
              
              <ContactCard icon={<Phone className="h-6 w-6 text-white" />} title="أرقام الهاتف">
                <p className="text-muted-foreground">
                  778877408 / 777579746 / 01603803
                </p>
              </ContactCard>
              
              <ContactCard icon={<Facebook className="h-6 w-6 text-white" />} title="فيسبوك">
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
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-lawyer-red to-red-500 inline-block bg-clip-text text-transparent">أرسل رسالة</h3>
            {formSubmitted ? (
              <div className="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-200 rounded-lg p-4 flex items-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>تم إرسال رسالتك بنجاح، سنقوم بالرد عليك قريبًا.</span>
              </div>
            ) : null}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-lawyer-red focus:border-transparent"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-lawyer-red focus:border-transparent"
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-lawyer-red focus:border-transparent"
                  placeholder="أدخل رقم هاتفك"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-lawyer-red focus:border-transparent resize-none"
                  placeholder="اكتب رسالتك هنا"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-lawyer-red text-white rounded-lg hover:bg-opacity-90 w-full flex items-center justify-center gap-2"
              >
                <Send size={18} />
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
