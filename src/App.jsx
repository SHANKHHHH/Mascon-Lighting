import React, { useState, useEffect } from "react";
import MasconWhiteLogo from "./assets/images/mascon LOGO WHITE-cropped.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collections from "./pages/Collections";
import About from "./pages/About";
import ExclusiveCollections from "./pages/ExclusiveCollections";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "collections", "about", "blogs", "contact"];
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 80) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);

    const element = document.getElementById(section);
    if (element) {
      const offsetTop = section === "home" ? 0 : 50; // Account for sticky header
      const targetPosition = element.offsetTop - offsetTop;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen  m-0 p-0">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white ">
        <Header activeSection={activeSection} onNavClick={handleNavClick} />
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* All sections */}
        <Hero />
        <Collections />
        <About />
        <ExclusiveCollections />
        <Blogs />
        <Contact />

        {/* Footer */}
        <footer className="bg-[#1f2937] text-white py-16 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <img
                src={MasconWhiteLogo}
                alt="Mascon Lighting"
                className="w-32 h-auto mb-6"
              />
              <p
                className="text-[40px] font-medium leading-tight text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Illuminate Your Space
                <br />
                with Captivating Designs
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 text-sm">
              <div>
                <h4 className="text-slate-300 font-medium mb-4">Company</h4>
                <ul className="space-y-3 text-slate-300/90">
                  <li>
                    <button
                      onClick={() => handleNavClick("about")}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("collections")}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      Collections
                    </button>
                  </li>
                  <li>
                    <a className="hover:text-white transition-colors" href="#">
                      Catalog
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("blogs")}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      Blogs
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-slate-300 font-medium mb-4">Contact Us</h4>
                <ul className="space-y-3 text-slate-300/90">
                  <li>
                    <a
                      href="https://www.facebook.com/mascon.lighting/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <span className="inline-flex w-5 h-5 items-center justify-center">
                        <FaFacebookF className="w-4 h-4" />
                      </span>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/mascon_lighting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <span className="inline-flex w-5 h-5 items-center justify-center">
                        <FaInstagram className="w-4 h-4" />
                      </span>
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCDnllE6tazswO1gpeUrUjxw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <span className="inline-flex w-5 h-5 items-center justify-center">
                        <FaYoutube className="w-4 h-4" />
                      </span>
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://in.pinterest.com/mascon_lighting/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <span className="inline-flex w-5 h-5 items-center justify-center">
                        <FaPinterestP className="w-4 h-4" />
                      </span>
                      Pinterest
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://in.linkedin.com/company/masconlighting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <span className="inline-flex w-5 h-5 items-center justify-center">
                        <FaLinkedinIn className="w-4 h-4" />
                      </span>
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright at bottom */}
          <div className="max-w-7xl mx-auto mt-10 text-left">
            <p className="text-slate-400 text-sm">
              Copyright © {new Date().getFullYear()} Mascon Lighting. All rights
              reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
