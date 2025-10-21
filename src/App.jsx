import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collections from "./pages/Collections";
import About from "./pages/About";
import ExclusiveCollections from "./pages/ExclusiveCollections";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200; // Adjusted threshold for better UX
      setScrolled(isScrolled);

      // Only update active section if user is not manually navigating
      if (!isNavigating) {
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
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavigating]);

  const handleNavClick = (section) => {
    setIsNavigating(true);
    setActiveSection(section);

    const element = document.getElementById(section);
    if (element) {
      const offsetTop = section === "home" ? 0 : 50; // Account for sticky header
      const targetPosition = element.offsetTop - offsetTop;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Re-enable scroll detection after smooth scroll completes
      setTimeout(() => {
        setIsNavigating(false);
      }, 1000); // Give enough time for smooth scroll to complete
    } else {
      setIsNavigating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 m-0 p-0">
      {/* Sticky Header - appears when scrolled */}
      {scrolled && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
          <Header activeSection={activeSection} onNavClick={handleNavClick} />
        </div>
      )}

      {/* Main Content */}
      <div className="relative">
        {/* Initial Rounded Container */}
        {!scrolled && (
          <section id="home">
            <div className="mx-4 bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Header inside rounded container */}
              <Header
                activeSection={activeSection}
                onNavClick={handleNavClick}
              />

              {/* Hero section inside rounded container */}
              <div className="pt-8 pb-8">
                <Hero />
              </div>
            </div>
          </section>
        )}

        {/* Hero section when scrolled */}
        {scrolled && (
          <section id="home" className="pt-8 bg-gray-100">
            <div className="px-8 py-8">
              <Hero />
            </div>
          </section>
        )}

        {/* Additional sections */}
        <div className={scrolled ? "" : "mt-16"}>
          <Collections />
          <About />
          <ExclusiveCollections />
          <Blogs />
          <Contact />

          {/* Footer */}
          <footer className="bg-slate-800 text-white py-16 px-8">
            <div className="max-w-7xl mx-auto text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">MASCON</h3>
                <p className="text-slate-300">Innovative Lighting Solutions</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                <div>
                  <h4 className="font-semibold mb-4">Company</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>
                      <button
                        onClick={() => handleNavClick("about")}
                        className="hover:text-white transition-colors cursor-pointer"
                      >
                        About Us
                      </button>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        News
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Products</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>
                      <button
                        onClick={() => handleNavClick("collections")}
                        className="hover:text-white transition-colors cursor-pointer"
                      >
                        Collections
                      </button>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Custom Solutions
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Support
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Resources</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Documentation
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNavClick("blogs")}
                        className="hover:text-white transition-colors cursor-pointer"
                      >
                        Blog
                      </button>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Help Center
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Contact</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>
                      <button
                        onClick={() => handleNavClick("contact")}
                        className="hover:text-white transition-colors cursor-pointer"
                      >
                        Get in Touch
                      </button>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Sales
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-slate-700 text-slate-400">
                <p>
                  &copy; 2024 MASCON Innovative Lighting. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
