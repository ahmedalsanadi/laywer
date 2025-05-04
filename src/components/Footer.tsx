
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">مكتب المحامي أحمد اليوسفي</h3>
            <p className="text-gray-300 text-sm">
              مكتب متخصص في المحاماة والاستشارات القانونية بخبرة تزيد عن 15 عامًا في مختلف مجالات القانون.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white text-sm">تأسيس الشركات</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white text-sm">قسمة التركات</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white text-sm">صياغة العقود</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white text-sm">الاستشارات القانونية</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white text-sm">الرئيسية</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white text-sm">نبذة عنا</a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-white text-sm">فريقنا</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white text-sm">اتصل بنا</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <address className="not-italic text-gray-300 text-sm space-y-2">
              <p>صنعاء، شارع تعز، جنوب جولة المرور</p>
              <p>هاتف: 778877408</p>
              <p>
                <a href="mailto:Lawyeralyousefi@gmail.com" className="hover:text-white">
                  Lawyeralyousefi@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} جميع الحقوق محفوظة | مكتب المحامي أحمد اليوسفي
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
