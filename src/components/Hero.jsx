import React from "react";
import "./Hero.css";
import HomeLighting from "../assets/images/HomeLighting.jpg";
import WallLighting from "../assets/images/wallLighting.jpg";

const Hero = () => {
  return (
    <div className="min-h-[60vh]">
      <div className="mx-auto px-8">
        <div className="flex gap-4 h-[600px]">
          {/* Main large image - takes most of the width */}
          <div className="flex-[3] rounded-3xl overflow-hidden">
            <img
              src={HomeLighting}
              alt="Home Lighting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second image - same height as main image */}
          <div className="w-[200px] rounded-3xl overflow-hidden">
            <img
              src={WallLighting}
              alt="Wall Lighting"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Third image - same height as main image */}
          <div className="w-[200px] rounded-3xl overflow-hidden">
            <img
              src={HomeLighting}
              alt="Home Lighting Secondary"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
