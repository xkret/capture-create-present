
import { Camera, Users, Heart, Landscape } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Complete wedding day coverage with artistic storytelling and candid moments.",
      price: "Starting at $2,500",
      features: ["8-10 hours coverage", "500+ edited photos", "Online gallery", "Print release"],
    },
    {
      icon: Users,
      title: "Portrait Sessions",
      description: "Professional portraits for individuals, families, and corporate headshots.",
      price: "Starting at $350",
      features: ["1-2 hour session", "50+ edited photos", "Multiple outfits", "Location flexibility"],
    },
    {
      icon: Landscape,
      title: "Event Photography",
      description: "Corporate events, parties, and special occasions captured with precision.",
      price: "Starting at $800",
      features: ["4-6 hours coverage", "200+ edited photos", "Same-day highlights", "Commercial license"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional photography services tailored to capture your most important moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black p-8 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-amber-400 group"
            >
              <service.icon className="h-12 w-12 text-amber-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <div className="text-amber-400 text-xl font-semibold mb-6">{service.price}</div>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 bg-amber-400 text-black py-3 rounded-lg font-semibold hover:bg-amber-300 transition-colors duration-300">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
