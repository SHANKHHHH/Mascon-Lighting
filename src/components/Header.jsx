import React from "react";
import logo from "../assets/images/MasconLogo.png";
import imagesIcon from "../assets/images/images.png";
import searchIcon from "../assets/images/search.png";
import cartIcon from "../assets/images/cart.png";

const Header = ({ activeSection = "home", onNavClick }) => {
  const navItems = [
    { id: "home", label: "HOME" },
    { id: "collections", label: "COLLECTIONS" },
    { id: "about", label: "ABOUT US" },
    { id: "blogs", label: "BLOGS" },
    { id: "contact", label: "CONTACT" },
  ];

  const navLinkClasses = (itemId) => {
    const baseClasses =
      "text-[#004B6E] font-medium text-sm tracking-wide transition-colors duration-200 relative hover:text-mascon-blue cursor-pointer";
    const activeClasses =
      activeSection === itemId
        ? "text-mascon-blue after:content-[''] after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:bg-mascon-blue"
        : "";
    return `${baseClasses} ${activeClasses}`;
  };

  const handleNavClick = (section) => {
    if (onNavClick) {
      onNavClick(section);
    } else {
      // Fallback: scroll to section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="bg-white px-8 py-4 border-b border-gray-100">
      <div className="flex items-center justify-between max-w-7xl mx-auto flex-wrap gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-25 h-25 flex items-center justify-center font-bold text-sm rounded-lg">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8  items-center order-3 w-full justify-center lg:order-2 lg:w-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={navLinkClasses(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex gap-8 items-center order-2 lg:order-3">
          <div className="w-4 h-4 flex items-center justify-center cursor-pointer transition-colors duration-200 hover:opacity-70">
            <img
              src={imagesIcon}
              alt="Images"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-4 h-4 flex items-center justify-center cursor-pointer transition-colors duration-200 hover:opacity-70">
            <img
              src={searchIcon}
              alt="Search"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-4 h-4 flex items-center justify-center cursor-pointer transition-colors duration-200 hover:opacity-70">
            <img
              src={cartIcon}
              alt="Cart"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
