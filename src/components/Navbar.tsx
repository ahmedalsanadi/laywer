import { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, Scale, Phone, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ["contact", "team", "services", "about", "home"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Close mobile menu when clicking outside
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav 
      className={`py-4 sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg py-2" 
          : "bg-background/70 backdrop-blur-sm"
      }`}
      ref={menuRef}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Area */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-lawyer-red/20 rounded-full scale-110 group-hover:scale-125 transition-transform duration-300"></div>
            <div className="relative bg-gradient-to-br from-lawyer-red to-red-700 p-2 rounded-full shadow-md transition-transform duration-300 group-hover:rotate-12">
              <Scale className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-lawyer-red to-red-500 bg-clip-text text-transparent">مكتب اليوسفي</span>
            <span className="text-xs text-muted-foreground">للمحاماة والاستشارات القانونية</span>
          </div>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a 
            href="#home" 
            className={`transition-colors relative px-2 py-1 ${
              activeSection === "home" 
                ? "text-lawyer-red font-medium" 
                : "hover:text-lawyer-red"
            } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-lawyer-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
              activeSection === "home" ? "after:scale-x-100" : ""
            }`}
          >
            الرئيسية
          </a>
          <a 
            href="#about" 
            className={`transition-colors relative px-2 py-1 ${
              activeSection === "about" 
                ? "text-lawyer-red font-medium" 
                : "hover:text-lawyer-red"
            } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-lawyer-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
              activeSection === "about" ? "after:scale-x-100" : ""
            }`}
          >
            نبذة عنا
          </a>
          <a 
            href="#services" 
            className={`transition-colors relative px-2 py-1 ${
              activeSection === "services" 
                ? "text-lawyer-red font-medium" 
                : "hover:text-lawyer-red"
            } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-lawyer-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
              activeSection === "services" ? "after:scale-x-100" : ""
            }`}
          >
            خدماتنا
          </a>
          <a 
            href="#team" 
            className={`transition-colors relative px-2 py-1 ${
              activeSection === "team" 
                ? "text-lawyer-red font-medium" 
                : "hover:text-lawyer-red"
            } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-lawyer-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
              activeSection === "team" ? "after:scale-x-100" : ""
            }`}
          >
            فريقنا
          </a>
          <a 
            href="#contact" 
            className={`transition-colors relative px-2 py-1 ${
              activeSection === "contact" 
                ? "text-lawyer-red font-medium" 
                : "hover:text-lawyer-red"
            } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-lawyer-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
              activeSection === "contact" ? "after:scale-x-100" : ""
            }`}
          >
            اتصل بنا
          </a>
          
          {/* Contact Button */}
          <a 
            href="tel:+966123456789" 
            className="bg-lawyer-red hover:bg-lawyer-red/90 text-white px-4 py-2 rounded-md shadow-sm flex items-center gap-2 transition-all duration-300 hover:shadow-md ml-2"
          >
            <Phone size={16} />
            <span className="hidden lg:inline">استشارة سريعة</span>
          </a>
          
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <a 
            href="tel:+966123456789" 
            className="bg-lawyer-red hover:bg-lawyer-red/90 text-white p-2 rounded-md shadow-sm transition-all duration-300 hover:shadow-md"
            aria-label="Call for quick consultation"
          >
            <Phone size={20} />
          </a>
          <ThemeToggle />
          <button 
            className={`p-2 rounded-md transition-colors ${
              isMenuOpen 
                ? "bg-secondary text-lawyer-red" 
                : "hover:bg-secondary"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - Animated Slide Down */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg py-2 border-t border-border/50 transition-all duration-300 transform origin-top ${
          isMenuOpen 
            ? "opacity-100 scale-y-100" 
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col container mx-auto px-4">
          <a 
            href="#home" 
            className={`flex items-center justify-between py-3 px-4 rounded-md transition-colors ${
              activeSection === "home" 
                ? "text-lawyer-red bg-secondary/50" 
                : "hover:bg-secondary/30 hover:text-lawyer-red"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <span>الرئيسية</span>
            <ChevronDown size={16} className={activeSection === "home" ? "rotate-180 transform transition-transform duration-300" : "transition-transform duration-300"} />
          </a>
          <div className="h-px bg-border/50 mx-4 my-1"></div>
          
          <a 
            href="#about" 
            className={`flex items-center justify-between py-3 px-4 rounded-md transition-colors ${
              activeSection === "about" 
                ? "text-lawyer-red bg-secondary/50" 
                : "hover:bg-secondary/30 hover:text-lawyer-red"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <span>نبذة عنا</span>
            <ChevronDown size={16} className={activeSection === "about" ? "rotate-180 transform transition-transform duration-300" : "transition-transform duration-300"} />
          </a>
          <div className="h-px bg-border/50 mx-4 my-1"></div>
          
          <a 
            href="#services" 
            className={`flex items-center justify-between py-3 px-4 rounded-md transition-colors ${
              activeSection === "services" 
                ? "text-lawyer-red bg-secondary/50" 
                : "hover:bg-secondary/30 hover:text-lawyer-red"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <span>خدماتنا</span>
            <ChevronDown size={16} className={activeSection === "services" ? "rotate-180 transform transition-transform duration-300" : "transition-transform duration-300"} />
          </a>
          <div className="h-px bg-border/50 mx-4 my-1"></div>
          
          <a 
            href="#team" 
            className={`flex items-center justify-between py-3 px-4 rounded-md transition-colors ${
              activeSection === "team" 
                ? "text-lawyer-red bg-secondary/50" 
                : "hover:bg-secondary/30 hover:text-lawyer-red"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <span>فريقنا</span>
            <ChevronDown size={16} className={activeSection === "team" ? "rotate-180 transform transition-transform duration-300" : "transition-transform duration-300"} />
          </a>
          <div className="h-px bg-border/50 mx-4 my-1"></div>
          
          <a 
            href="#contact" 
            className={`flex items-center justify-between py-3 px-4 rounded-md transition-colors ${
              activeSection === "contact" 
                ? "text-lawyer-red bg-secondary/50" 
                : "hover:bg-secondary/30 hover:text-lawyer-red"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <span>اتصل بنا</span>
            <ChevronDown size={16} className={activeSection === "contact" ? "rotate-180 transform transition-transform duration-300" : "transition-transform duration-300"} />
          </a>
        </div>
        
        {/* Quick Contact in Mobile Menu */}
        <div className="mt-4 p-4 bg-secondary/30 border-t border-border/50">
          <a 
            href="tel:+966123456789" 
            className="bg-lawyer-red hover:bg-lawyer-red/90 text-white py-3 px-4 rounded-md shadow-sm flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-md w-full"
          >
            <Phone size={18} />
            <span>اتصل الآن للحصول على استشارة سريعة</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;