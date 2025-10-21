import React, { useState } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import ArtisticLamp from "../assets/images/artisitcLamp.jpg";

const About = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const accordionItems = [
    {
      id: 1,
      question: "How are your lamps made?",
      answer:
        "Browse through our curated range of lamps designed with artistry and precision.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop&crop=center",
    },
    {
      id: 2,
      question: "How are your lamps made?",
      answer:
        "Browse through our curated range of lamps designed with artistry and precision.",
      image: null,
    },
    {
      id: 3,
      question: "How are your lamps made?",
      answer:
        "Browse through our curated range of lamps designed with artistry and precision.",
      image: null,
    },
    {
      id: 4,
      question: "How are your lamps made?",
      answer:
        "Browse through our curated range of lamps designed with artistry and precision.",
      image: null,
    },
  ];

  return (
    <section id="about" className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section */}
          <div className="space-y-8">
            {/* Header with Arrow */}
            <div className="flex items-center gap-3">
              <div className="border border-[#686868] rounded-xl p-1">
                <ArrowRight className="w-12 h-4 text-[#686868]" />
              </div>
              <span className="text-sm font-medium text-[#686868] uppercase tracking-wider">
                AT MASCON
              </span>
            </div>

            {/* Mission Statement */}
            <div className="space-y-6">
              <h1 className=" md:text-5xl  text-[#474747] leading-tight">
                At Mascon, we aim to meet every lighting need with{" "}
                <span className="font-bold">innovation</span>, make life
                brighter, safer, and better.
              </h1>
            </div>

            {/* Lamp Image */}
            <div className="rounded-2xl overflow-hidden bg-gray-100 w-full max-w-md">
              <img
                src={ArtisticLamp}
                alt="Artistic Lamp"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Call to Action */}
            <p className="text-gray-600 font-semibold text-sm">
              Watch our videos and follow us on YouTube.
            </p>
          </div>

          {/* Right Section - FAQ Accordion */}
          <div className="space-y-4">
            {accordionItems.map((item, index) => (
              <div key={item.id} className="border-b border-gray-200 pb-4">
                <div className="flex items-start gap-4">
                  {/* Number */}
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <span className="text-xl font-medium text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <button
                      onClick={() =>
                        setActiveAccordion(
                          activeAccordion === index ? -1 : index
                        )
                      }
                      className="text-left w-full"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-mascon-blue transition-colors">
                        {item.question}
                      </h3>
                    </button>

                    {activeAccordion === index && (
                      <div className="flex items-start gap-4">
                        <p className="text-gray-600 text-sm leading-relaxed flex-1">
                          {item.answer}
                        </p>
                        {item.image && (
                          <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                            <img
                              src={item.image}
                              alt="Lamp detail"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Learn More Button */}
            <div className="pt-8 float-right">
              <button className="bg-[#004B6E] text-white px-6 py-2 rounded-full flex items-center gap-3 hover:bg-blue-700 transition-colors">
                <span className="font-medium">Learn More</span>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <ChevronRight className="w-3 h-3 text-[#004B6E]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
