
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`py-4 border-b border-border/50 sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3" 
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <img 
            src="https://img.icons8.com/fluency/48/scales--v1.png" 
            alt="مكتب اليوسفي للمحاماة" 
            className="h-10 w-10"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-lawyer-red to-red-500 bg-clip-text text-transparent">مكتب اليوسفي للمحاماة</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-lawyer-red transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-lawyer-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">الرئيسية</a>
          <a href="#about" className="hover:text-lawyer-red transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-lawyer-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">نبذة عنا</a>
          <a href="#services" className="hover:text-lawyer-red transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-lawyer-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">خدماتنا</a>
          <a href="#team" className="hover:text-lawyer-red transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-lawyer-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">فريقنا</a>
          <a href="#contact" className="hover:text-lawyer-red transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-lawyer-red after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">اتصل بنا</a>
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button 
            className="p-2 rounded-md hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg py-4 px-6 z-50 animate-fade-in border-t border-border/50">
          <div className="flex flex-col gap-4">
            <a 
              href="#home" 
              className="hover:text-lawyer-red transition-colors py-2 px-4 rounded-md hover:bg-secondary/50"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </a>
            <a 
              href="#about" 
              className="hover:text-lawyer-red transition-colors py-2 px-4 rounded-md hover:bg-secondary/50"
              onClick={() => setIsMenuOpen(false)}
            >
              نبذة عنا
            </a>
            <a 
              href="#services" 
              className="hover:text-lawyer-red transition-colors py-2 px-4 rounded-md hover:bg-secondary/50"
              onClick={() => setIsMenuOpen(false)}
            >
              خدماتنا
            </a>
            <a 
              href="#team" 
              className="hover:text-lawyer-red transition-colors py-2 px-4 rounded-md hover:bg-secondary/50"
              onClick={() => setIsMenuOpen(false)}
            >
              فريقنا
            </a>
            <a 
              href="#contact" 
              className="hover:text-lawyer-red transition-colors py-2 px-4 rounded-md hover:bg-secondary/50"
              onClick={() => setIsMenuOpen(false)}
            >
              اتصل بنا
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
