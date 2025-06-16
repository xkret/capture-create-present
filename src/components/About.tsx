import { Award, Camera, Users, Heart } from "lucide-react";
const About = () => {
  const stats = [{
    icon: Camera,
    number: "500+",
    label: "Projects Completed"
  }, {
    icon: Users,
    number: "200+",
    label: "Happy Clients"
  }, {
    icon: Heart,
    number: "3",
    label: "Years Experience"
  }];
  return <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-300 mb-6">We are a team of passionate photographers driven by a deep love for storytelling through imagery. At the heart of our work is the belief that every moment big or small holds beauty, emotion, and meaning worth capturing.Our style blends creativity with precision, aiming to deliver images that are not only visually stunning but also emotionally resonant.</p>
            <p className="text-lg text-gray-300 mb-8">Every project is a collaboration, and we work closely with you to ensure your vision comes to life in every frame. Photography is more than our profession it's our art, our passion, and our way of preserving the moments that matter most. Let's create something unforgettable together.</p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>)}
            </div>
          </div>
          
          <div className="relative">
            <img alt="About me" className="rounded-lg shadow-2xl" src="/lovable-uploads/c0a35477-c03b-4907-9412-35a7f85b2ccc.jpg" />
            <div className="absolute -bottom-6 -right-6 bg-amber-400 text-black p-6 rounded-lg">
              <p className="font-semibold">"Photography is the art of making memories tangible"</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;