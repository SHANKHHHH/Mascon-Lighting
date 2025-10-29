import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BlogImage from "../assets/images/Blog1.png";
import BlogHeader from "../assets/images/BlogHeader.png";

const BlogDetail = () => {
  const navigate = useNavigate();

  return (
    <section id="blog-detail" className="px-8 min-h-screen ">
      <div className="max-w-7xl mx-auto py-16">
        {/* Blog Image with Overlay */}
        <div className="mb-8 relative">
          <div className="relative rounded-3xl overflow-hidden bg-gray-100 w-full h-[500px] shadow-lg">
            <img
              src={BlogHeader}
              alt="Blog Hero"
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}
          </div>

          {/* Blog Content Card with Shadow - Now overlapping */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto relative -mt-20 z-10">
            {/* Blog Title */}
            <h1
              className="text-[46px] font-medium text-black mb-4 leading-tight"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              ILLUMINATE YOUR SPACE WITH CAPTIVATING DESIGNS
            </h1>

            {/* Date */}
            <p className="text-gray-500 text-lg mb-8">July 26, 2025</p>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our extensive catalog features a diverse range of decorative
                lamps that effortlessly blend aesthetics with functionality.
                Each piece is a testament to the skill and creativity of our
                collaborating artists, who meticulously handcraft every lamp to
                transform your spaces into captivating realms of light and
                beauty.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our extensive catalog features a diverse range of decorative
                lamps that effortlessly blend aesthetics with functionality.
                Each piece is a testament to the skill and creativity of our
                collaborating artists, who meticulously handcraft every lamp to
                transform your spaces into captivating realms of light and
                beauty.
              </p>

              {/* Embedded Image */}
              <div className="my-8">
                <img
                  src={BlogImage}
                  alt="Interior Design"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our extensive catalog features a diverse range of decorative
                lamps that effortlessly blend aesthetics with functionality.
                Each piece is a testament to the skill and creativity of our
                collaborating artists, who meticulously handcraft every lamp to
                transform your spaces into captivating realms of light and
                beauty.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our extensive catalog features a diverse range of decorative
                lamps that effortlessly blend aesthetics with functionality.
                Each piece is a testament to the skill and creativity of our
                collaborating artists, who meticulously handcraft every lamp to
                transform your spaces into captivating realms of light and
                beauty.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our extensive catalog features a diverse range of decorative
                lamps that effortlessly blend aesthetics with functionality.
                Each piece is a testament to the skill and creativity of our
                collaborating artists, who meticulously handcraft every lamp to
                transform your spaces into captivating realms of light and
                beauty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
