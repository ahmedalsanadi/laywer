
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import AttorneyProfile from "../components/AttorneyProfile";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
import AOSWrapper from "../components/AOS/AOSWrapper";

const Index = () => {
  useEffect(() => {
    document.title = "مكتب المحامي أحمد اليوسفي";

  }, []);

  return (
   <AOSWrapper>
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <AttorneyProfile />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
    </AOSWrapper>
  );
};

export default Index;
