import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Building from "../assets/images/CompanyImage.png";
import Workspace from "../assets/images/HomeLighting.jpg";
import Portrait1 from "../assets/images/Founder1.png";
import Portrait2 from "../assets/images/Founder2.png";
import Portrait3 from "../assets/images/Founder3.png";

const Stat = ({ value, label }) => (
  <div className="text-left">
    <div
      className="text-[52px] font-normal text-black"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {value}
    </div>
    <div
      className="text-[17px] text-gray-500 leading-tight whitespace-pre-line"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {label}
    </div>
  </div>
);

const AboutDetail = () => {
  return (
    <section id="about-detail" className="py-16 px-8 bg-white pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Top: About + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div
              className="px-4 py-1 border rounded-full text-[14px] text-gray-600 mb-6 w-[117px] h-[40px] flex items-center justify-center font-light"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              ABOUT US
            </div>
            <h2
              className="text-[33px] font-normal text-black mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              About Our Company
            </h2>
            <p
              className="text-[19px] font-medium text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Mascon is a leading LED lighting brand committed to innovation and
              excellence. With a strong focus on the latest technology, we offer
              a comprehensive range of indoor, outdoor, and architectural
              lighting solutions. Our products are designed to meet the diverse
              needs of architects, designers, interior professionals,
              contractors, and builders, ensuring top-tier quality and
              performance.
            </p>
            <p
              className="text-[19px] font-medium text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              At Mascon, we believe in transforming spaces with cutting-edge
              lighting solutions that combine aesthetics, efficiency, and
              durability. Whether enhancing interiors or illuminating
              large-scale projects, our commitment to advanced technology and
              superior craftsmanship makes us a trusted name in the lighting
              industry.
            </p>

            {/* Horizontal Line */}
            <div className="flex justify-center my-8">
              <div className="w-[100%] h-px bg-gray-300"></div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 mt-8">
              <Stat value="95 %" label={"Premium\nProducts"} />
              <Stat value="10+" label="No. of cities" />
              <Stat value="100+" label={"No of\nproducts"} />
            </div>
          </div>

          <div className=" overflow-hidden  w-[568px] h-[700px]">
            <img
              src={Building}
              alt="About"
              className="w-[525px] h-[650px] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Quote + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="text-gray-700 h-[220px] flex flex-col justify-center">
            <div className="text-3xl text-[#737373]  mb-4">
              <ImQuotesLeft />
            </div>
            <p
              className="text-[34px] font-medium text-[#737373] mb-2"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Light is more than illumination — it is emotion, atmosphere, and
              culture.
            </p>
            <div className="text-3xl text-[#737373] ">
              <ImQuotesRight />
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-md">
            <img
              src={Workspace}
              alt="Workspace"
              className="w-full h-[220px] object-cover"
            />
          </div>
        </div>

        {/* Founders section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-start">
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow w-[300px] h-[300px]">
              <img
                src={Portrait1}
                alt="Founder 1"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow w-[300px] h-[300px]">
              <img
                src={Portrait2}
                alt="Founder 2"
                className="w-full  h-[300px] object-cover"
              />
            </div>
            <div className="col-span-2 rounded-xl overflow-hidden shadow w-[300px] h-[300px]">
              <img
                src={Portrait3}
                alt="Founder 3"
                className="w-full  h-[300px] object-cover"
              />
            </div>
          </div>

          <div>
            <h3
              className="text-[33px] font-normal text-black mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              The Founders.
            </h3>
            <p
              className="text-[19px] font-medium text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Mascon is a leading LED lighting brand committed to innovation and
              excellence. With a strong focus on the latest technology, we offer
              a comprehensive range of indoor, outdoor, and architectural
              lighting solutions. Our products are designed to meet the diverse
              needs of architects, designers, interior professionals,
              contractors, and builders, ensuring top-tier quality and
              performance.
            </p>
            <p
              className="text-[19px] font-medium text-gray-600 leading-relaxed mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Mascon is a leading LED lighting brand committed to innovation and
              excellence. With a strong focus on the latest technology, we offer
              a comprehensive range of indoor, outdoor, and architectural
              lighting solutions.
            </p>

            {/* Horizontal Line */}
            <div className="flex justify-center my-8">
              <div className="w-[100%] h-px bg-gray-300"></div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 mt-8">
              <Stat value="95 %" label={"Premium\nProducts"} />
              <Stat value="10+" label="No. of cities" />
              <Stat value="100+" label={"No of\nproducts"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetail;
