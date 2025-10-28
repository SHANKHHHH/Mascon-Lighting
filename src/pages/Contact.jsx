import React, { useState } from "react";
import { Instagram } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section - Contact Information */}
          <div className="space-y-8">
            {/* Tagline */}
            <p
              className="text-gray-500 text-[14px] font-light"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              /get in touch/
            </p>

            {/* Main Heading */}
            <h1
              className="text-[27px] font-normal text-black leading-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              We'd love to hear from you. Whether you have a question, need
              assistance, or want to explore opportunities with us, our team is
              just a message away.
            </h1>

            {/* Descriptive Text */}
            <p
              className="text-gray-700 text-[17px] font-normal leading-relaxed"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Have something on your mind? We're here to listen! Reach out for
              inquiries, collaborations, or just to say hello—we're always happy
              to connect.
            </p>

            {/* Contact Details */}
            <div className="grid grid-cols-2 gap-8">
              {/* Call Center */}
              <div>
                <h3
                  className="text-[#737373] text-[20px] font-normal mb-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Call Center
                </h3>
                <p
                  className="text-black text-[15px] font-medium mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  (91) 8088835689
                </p>
                {/* <p className="text-black text-lg">(91) 9470763941</p> */}
              </div>

              {/* Our Location */}
              <div>
                <h3
                  className="text-[#737373] text-[20px] font-normal mb-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Our Location
                </h3>
                <p
                  className="text-black text-[15px] font-medium mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  E0004, NCS, Bagaluru,
                </p>
                <p
                  className="text-black text-[15px] font-medium mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Bengaluru-560064
                </p>
              </div>

              {/* E-mail */}
              <div>
                <h3
                  className="text-[#737373] text-[20px] font-normal mb-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  E-mail
                </h3>
                <p
                  className="text-black text-[15px] font-medium mb-2"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  info@masconlighting.com
                </p>
              </div>

              {/* Social Network */}
              <div>
                <h3
                  className="text-[#737373] text-[20px] font-normal mb-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Social network
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/mascon.lighting/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mascon Lighting on Facebook"
                    className="w-6 h-6 flex items-center justify-center transition-all duration-200 hover:scale-105 group"
                  >
                    <FaFacebookF className="w-6 h-6 text-black hover:text-[#004B6E] transition-all duration-300 group-hover:rotate-[360deg]" />
                  </a>
                  <a
                    href="https://www.instagram.com/mascon_lighting"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mascon Lighting on Instagram"
                    className="w-6 h-6 rounded flex items-center justify-center transition-all duration-200 hover:scale-105 group"
                  >
                    <Instagram className="w-6 h-6 text-black hover:text-[#004B6E] transition-all duration-300 group-hover:rotate-[360deg]" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCDnllE6tazswO1gpeUrUjxw"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mascon Lighting on YouTube"
                    className="w-6 h-6 flex items-center justify-center transition-all duration-200 hover:scale-105 group"
                  >
                    <FaYoutube className="w-6 h-6 text-black hover:text-[#004B6E] transition-all duration-300 group-hover:rotate-[360deg]" />
                  </a>
                  <a
                    href="https://in.pinterest.com/mascon_lighting/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mascon Lighting on Pinterest"
                    className="w-6 h-6 flex items-center justify-center transition-all duration-200 hover:scale-105 group"
                  >
                    <FaPinterestP className="w-6 h-6 text-black hover:text-[#004B6E] transition-all duration-300 group-hover:rotate-[360deg]" />
                  </a>
                  <a
                    href="https://in.linkedin.com/company/masconlighting"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Mascon Lighting on LinkedIn"
                    className="w-6 h-6 flex items-center justify-center transition-all duration-200 hover:scale-105 group"
                  >
                    <FaLinkedinIn className="w-6 h-6 text-black hover:text-[#004B6E] transition-all duration-300 group-hover:rotate-[360deg]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-gray-100 rounded-3xl p-16 shadow-lg w-[535px] h-[620px] ">
            <h2
              className="text-[25px] font-normal text-black mb-8"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Get in Touch
            </h2>

            <form
              onSubmit={handleSubmit}
              className="w-[361px] h-[460px] rounded-3xl p-4"
            >
              {/* Full Name */}
              <div className="mb-10">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-400 pb-2 text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* E-mail */}
              <div className="mb-10">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-400 pb-2 text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Phone Number */}
              <div className="mb-10">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-400 pb-2 text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div className="mb-10">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  // rows={4}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-400 pb-2 text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none "
                />
              </div>

              {/* Submit Button */}
              <div className="mt-10">
                <button
                  type="submit"
                  className="w-[152px] h-[48px] bg-[#004B6E] text-white py-3 px-6 rounded-3xl font-medium hover:bg-[#c9c9c9] transition-colors"
                >
                  Send Query
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
