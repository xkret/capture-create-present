
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Capturing
          <span className="block text-amber-400">Moments</span>
          That Matter
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in">
          Professional photography that tells your story with artistry and passion
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button 
            onClick={scrollToPortfolio}
            className="bg-amber-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-300 transition-all duration-300 hover:scale-105"
          >
            View Portfolio
          </button>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToPortfolio}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-8 w-8 text-white" />
      </button>
    </section>
  );
};

export default Hero;
