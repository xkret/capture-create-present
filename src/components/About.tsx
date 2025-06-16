
import { Award, Camera, Users, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Camera, number: "500+", label: "Projects Completed" },
    { icon: Users, number: "200+", label: "Happy Clients" },
    { icon: Award, number: "15+", label: "Awards Won" },
    { icon: Heart, number: "8", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-300 mb-6">
              I'm Sarah Johnson, a passionate photographer with over 8 years of experience 
              capturing life's most precious moments. My journey began with a simple love 
              for freezing time and has evolved into a professional career dedicated to 
              telling stories through imagery.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Specializing in weddings, portraits, and landscape photography, I believe 
              every photo should evoke emotion and preserve memories that last a lifetime. 
              My approach combines technical expertise with artistic vision to create 
              stunning visuals that speak to the heart.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="About me"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-400 text-black p-6 rounded-lg">
              <p className="font-semibold">"Photography is the art of making memories tangible"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
