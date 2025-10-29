import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { FaPowerOff } from "react-icons/fa";
import { BsPlugin, BsBrightnessHighFill } from "react-icons/bs";
import { LuShieldCheck } from "react-icons/lu";
import { RiLightbulbFlashFill } from "react-icons/ri";
import IcemoonSeries from "../assets/images/ceilingLamp.jpg";

const ProductPage = () => {
  const navigate = useNavigate();

  const productSpecs = [
    {
      category: "Product Reference",
      specs: [
        { label: "Environment", value: "--" },
        { label: "Installation", value: "--" },
      ],
    },
    {
      category: "Construction & Material",
      specs: [
        { label: "Housing", value: "--" },
        { label: "Body Finish", value: "--" },
        { label: "Cut-out Size", value: "--" },
        { label: "Line Drawing", value: "--" },
        { label: "PCB Size", value: "--" },
      ],
    },
    {
      category: "Optical System",
      specs: [
        { label: "Beam Angle", value: "--" },
        { label: "CCT (Color Temperature)", value: "--" },
        { label: "Lumen Output", value: "--" },
        { label: "Efficacy (lm/w)", value: "--" },
        { label: "Tilt", value: "--" },
        { label: "Swivel", value: "--" },
        { label: "UGR (Unified Glare Rating)", value: "--" },
      ],
    },
    {
      category: "Electrical System",
      specs: [
        { label: "Driver Type", value: "--" },
        { label: "Input Voltage", value: "--" },
        { label: "Compatibility", value: "--" },
        { label: "THD(%)", value: "--" },
        { label: "Sensor Type", value: "--" },
      ],
    },
    {
      category: "Protection",
      specs: [
        { label: "Surge Protection (kV)", value: "--" },
        { label: "IP Rating", value: "--" },
        { label: "IK", value: "--" },
      ],
    },
  ];

  const features = [
    { icon: <FaPowerOff className="w-6 h-6 text-[#004B6E]" />, label: "5W" },
    { icon: <BsPlugin className="w-6 h-6 text-[#004B6E]" />, label: "230V AC" },
    {
      icon: <LuShieldCheck className="w-6 h-6 text-[#004B6E]" />,
      label: "Protection",
    },
    {
      icon: <RiLightbulbFlashFill className="w-6 h-6 text-[#004B6E]" />,
      label: "Efficiency",
    },
    {
      icon: <BsBrightnessHighFill className="w-6 h-6 text-[#004B6E]" />,
      label: "Brightness",
    },
  ];

  return (
    <section id="product-page" className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Product Images */}
        <div className="mb-12">
          {/* Main Product Image */}
          <div className="mb-6 rounded-3xl overflow-hidden bg-gray-100 w-full h-[500px] shadow-lg">
            <img
              src={IcemoonSeries}
              alt="ICEMOON Product in real environment"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-4 justify-center">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 shadow-sm"
              >
                <img
                  src={IcemoonSeries}
                  alt={`ICEMOON view ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Title and Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1
            className="text-[34px] text-[#004B6E] mb-4 md:mb-0"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
          >
            ICEMOON | ML-1000 | 10W
          </h1>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#004B6E] rounded-lg text-[#004B6E] font-medium hover:border-gray-400 transition-colors">
              <Download className="w-4 h-4 text-[#004B6E]" />
              Download Catalog
            </button>
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-6 py-3 border-2 border-[#004B6E]  rounded-lg text-[#004B6E]  font-medium hover:border-gray-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#004B6E]" />
              Back to Collections
            </button>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="flex gap-8 mb-12 ">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center text-2xl mb-2">
                {feature.icon}
              </div>
              <span className="text-sm text-gray-600">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Product Specifications */}
        <div className="flex flex-col gap-6">
          {productSpecs.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="bg-gray-50 rounded-lg p-6 w-full"
            >
              <h3 className="text-lg font-semibold text-black mb-4 border-b border-gray-200 pb-2">
                {section.category}
              </h3>
              <div className="space-y-3">
                {section.specs.map((spec, specIndex) => (
                  <div
                    key={specIndex}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-600 text-sm">{spec.label}</span>
                    <span className="text-black font-medium text-sm">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
