import React from "react";
import SereneGlow from "../assets/images/ceilingLamp2.jpg";
import SparkelingLights from "../assets/images/HangingLamp.jpg";
import IcemoonSeries from "../assets/images/ceilingLamp.jpg";
import ModernArtistry from "../assets/images/ceilingFan.jpg";

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: "Serene Glow",
      description:
        "Browse through our curated range of lamps designed with artistry and precision.",
      image: SereneGlow,
    },
    {
      id: 2,
      title: "Sparkeling Lights",
      description:
        "Browse through our curated range of lamps designed with artistry and precision.",
      image: SparkelingLights,
    },
    {
      id: 3,
      title: "Icemoon Series",
      description: "Browse through our curated range of lamps.",
      image: IcemoonSeries,
    },
    {
      id: 4,
      title: "Modern Artistry",
      description:
        "Browse through our curated range of lamps designed with artistry and precision.",
      image: ModernArtistry,
    },
  ];

  return (
    <section id="collections" className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <span className="px-4 py-2  text-gray-700 rounded-full text-sm font-medium border border-black">
            Decorative Lamps
          </span>
          <span className="px-4 py-2  text-gray-700 rounded-full text-sm font-medium border border-black">
            Handcrafted Lighting
          </span>
          <span className="px-4 py-2  text-gray-700 rounded-full text-sm font-medium border border-black">
            Artistic Lamps
          </span>
          <span className="px-4 py-2  text-gray-700 rounded-full text-sm font-medium border border-black">
            Artistic Lamps
          </span>
          <span className="px-4 py-2  text-gray-700 rounded-full text-sm font-medium border border-black">
            Artistic Lamps
          </span>
          <span className="px-4 py-2  text-gray-700 rounded-full text-sm font-medium border border-black">
            Artistic Lamps
          </span>
          <span className="px-4 py-2  text-gray-700 rounded-full text-sm font-medium border border-black">
            Artistic Lamps
          </span>
          <span className="px-4 py-2  text-gray-700 rounded-full text-sm font-medium border border-black">
            Artistic Lamps
          </span>
          <span className="px-4 py-2  text-gray-700 rounded-full text-sm font-medium border border-black">
            Artistic Lamps
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl  text-black text-center mb-6">
          Illuminate Your Space with Captivating Designs
        </h1>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-600 leading-relaxed pl-16 pr-8 text-center">
            Our extensive catalog features a diverse range of decorative lamps
            that effortlessly blend aesthetics with functionality. Each piece is
            a testament to the skill and creativity of our collaborating
            artists, who meticulously handcraft every lamp to transform your
            spaces into captivating realms of light and beauty.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="flex flex-col md:flex-row gap-16 items-start justify-center">
          {/* First Image */}
          <div className="text-left">
            <div className="mb-6 rounded-3xl overflow-hidden bg-gray-100 w-56 h-56 shadow-sm ">
              <img
                src={collections[0].image}
                alt={collections[0].title}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              {collections[0].title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {collections[0].description}
            </p>
          </div>

          {/* Second Image - Slightly Bigger */}
          <div className="text-left">
            <div className="mb-6 rounded-3xl overflow-hidden bg-gray-100 w-64 h-72 shadow-sm border border-gray-200">
              <img
                src={collections[1].image}
                alt={collections[1].title}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              {collections[1].title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {collections[1].description}
            </p>
          </div>

          {/* Third Image - Biggest (Center) */}
          <div className="text-left">
            <div className="mb-6 rounded-3xl overflow-hidden bg-gray-100 w-72 h-96 shadow-sm border border-gray-200">
              <img
                src={collections[2].image}
                alt={collections[2].title}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              {collections[2].title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {collections[2].description}
            </p>
          </div>

          {/* Fourth Image */}
          <div className="text-left">
            <div className="mb-6 rounded-3xl overflow-hidden bg-gray-100 w-56 h-56 shadow-sm border border-gray-200">
              <img
                src={collections[3].image}
                alt={collections[3].title}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">
              {collections[3].title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {collections[3].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
