import { useState } from "react";
import { Eye } from "lucide-react";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      category: "weddings",
      title: "Nicole & Ivan's Wedding",
      image: "https://www.instagram.com/p/C1m8H2Ys-Ji/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA===rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      category: "portrait",
      title: "Studio Session",
      image: "https://www.instagram.com/p/DKCyULvi80u/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA===rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      category: "corporate",
      title: "Mountain Vista",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      category: "outdoors",
      title: "Off the AC's",
      image: "https://www.instagram.com/p/C5-i2HBsEDc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA===rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      category: "corporate",
      title: "Class and Elegancy",
      image: "https://www.instagram.com/p/CzxajFfirYF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA===rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      category: "outdoors",
      title: "Sunset",
      image: "https://www.instagram.com/p/CvrYXiDtoEQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA===rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const categories = ["all", "wedding", "portrait", "corporate", "outdoors"];

  const filteredItems = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of my finest work across various photography disciplines
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                filter === category
                  ? "bg-amber-400 text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer hover-scale"
              onClick={() => setSelectedImage(item.image)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <Eye className="h-8 w-8 text-white mx-auto mb-2" />
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-gray-300 capitalize">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Portfolio item"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
