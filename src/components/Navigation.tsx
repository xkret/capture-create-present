
import { useState, useEffect } from "react";
import { Camera, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-amber-400" />
            <span className="text-xl font-bold">FOCUS</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("home")} className="hover:text-amber-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection("portfolio")} className="hover:text-amber-400 transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection("about")} className="hover:text-amber-400 transition-colors">About</button>
            <button onClick={() => scrollToSection("services")} className="hover:text-amber-400 transition-colors">Services</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-amber-400 transition-colors">Contact</button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 absolute left-0 right-0 top-16 p-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("home")} className="text-left hover:text-amber-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection("portfolio")} className="text-left hover:text-amber-400 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection("about")} className="text-left hover:text-amber-400 transition-colors">About</button>
              <button onClick={() => scrollToSection("services")} className="text-left hover:text-amber-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection("contact")} className="text-left hover:text-amber-400 transition-colors">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
