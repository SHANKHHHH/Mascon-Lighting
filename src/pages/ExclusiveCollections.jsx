import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeroProduct from "../assets/images/heroProduct.png";

const ExclusiveCollections = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const collections = [
    {
      id: 1,
      title: "Modern Recessed Lighting",
      description:
        "Browse through our curated range of lamps designed with artistry and precision.",
      image: HeroProduct,
    },
    {
      id: 2,
      title: "Artistic Pendant Lights",
      description:
        "Browse through our curated range of lamps designed with artistry and precision.",
      image: HeroProduct,
    },
    {
      id: 3,
      title: "Industrial Table Lamps",
      description:
        "Browse through our curated range of lamps designed with artistry and precision.",
      image: HeroProduct,
    },
    {
      id: 4,
      title: "Contemporary Wall Sconces",
      description:
        "Browse through our curated range of lamps designed with artistry and precision.",
      image: HeroProduct,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % collections.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + collections.length) % collections.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="exclusive-collections"
      className="py-16 px-8 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Navigation Controls */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={prevSlide}
            className="bg-gray-200 text-gray-700 px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-300 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="font-medium">Left</span>
          </button>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={nextSlide}
            className="bg-gray-200 text-gray-700 px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-300 transition-colors"
          >
            <span className="font-medium">Right</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-8">
          {/* Product Display */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
              <img
                src={collections[currentSlide].image}
                alt={collections[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed">
              {collections[currentSlide].description}
            </p>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center">
            {collections.map((_, index) => (
              <div key={index} className="flex items-center">
                <button
                  onClick={() => goToSlide(index)}
                  className={`text-sm font-medium transition-colors ${
                    index === currentSlide
                      ? "text-gray-800"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </button>
                {index < collections.length - 1 && (
                  <div className="w-8 h-px bg-gray-300 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Left Heading */}
        <div className="absolute bottom-8 left-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#737373] leading-tight">
            EXCLUSIVE
            <br />
            COLLECTION
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveCollections;
