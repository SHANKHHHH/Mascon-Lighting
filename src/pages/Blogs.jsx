import React from "react";
import { useNavigate } from "react-router-dom";
import BlogImage from "../assets/images/Blog1.png";
import Blog2 from "../assets/images/Blog2.png";
import Blog3 from "../assets/images/Blog2.png";
import Blog4 from "../assets/images/Blog2.png";

const Blogs = () => {
  const navigate = useNavigate();
  const mainBlogPost = {
    id: 1,
    title: "Illuminate Your Space with Captivating Designs",
    description:
      "Lighting is more than just brightness — it sets the tone, creates mood, enhances safety, and transforms the way we experience spaces. At Mascon Lighting, we believe that every light has the power to inspire, whether it's in your home, office, retail space, or outdoors.",
    image: BlogImage,
    readMore: "Read More",
  };

  const blogPreviews = [
    {
      id: 2,
      title: "Illuminate Your Space with Captivating Designs",
      description:
        "Lighting is more than just brightness — it sets the tone, creates mood,",
      icon: "💡",
      image: Blog2,
    },
    {
      id: 3,
      title: "Illuminate Your Space with Captivating Designs",
      description:
        "Lighting is more than just brightness — it sets the tone, creates mood,",
      icon: "💡",
      image: Blog3,
    },
    {
      id: 4,
      title: "Illuminate Your Space with Captivating Designs",
      description:
        "Lighting is more than just brightness — it sets the tone, creates mood,",
      icon: "💡",
      image: Blog4,
    },
  ];

  return (
    <section id="blogs" className="py-16 px-8 bg-white pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl font-medium text-black"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Blogs
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="flex gap-16">
          {/* Main Blog Post - Left Section */}
          <div className="w-[676px] h-[709px]">
            <div className="bg-white rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
              {/* Main Blog Image */}
              <div className="w-[624px] h-[346px] mx-auto mt-10 overflow-hidden flex items-center justify-center">
                <img
                  src={mainBlogPost.image}
                  alt={mainBlogPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Main Blog Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-black mb-4 leading-tight">
                  {mainBlogPost.title}
                </h2>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {mainBlogPost.description}
                </p>
                <button
                  onClick={() => navigate("/blog/illuminate-your-space")}
                  className="inline-flex w-[150px] h-[49px] items-center gap-2 px-6 py-3 border-2 border-[#004B6E] text-[#004B6E] rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  {mainBlogPost.readMore}
                </button>
              </div>
            </div>
          </div>

          {/* Blog Preview Cards - Right Section */}
          <div className="space-y-16">
            {blogPreviews.map((preview) => (
              <div
                key={preview.id}
                className="bg-[#D9D9D9] w-[480px] h-[180px] rounded-2xl p-4 hover:bg-gray-200 transition-colors cursor-pointer "
              >
                <div className="flex items-center gap-4 h-full">
                  {/* Image - RECTANGULAR (taller) */}
                  <div className="w-[130px] h-[150px] rounded-2xl overflow-hidden flex-shrink-0 bg-black">
                    <img
                      src={preview.image}
                      alt={preview.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-black mb-2 leading-tight">
                      {preview.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {preview.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
