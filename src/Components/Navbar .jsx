import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Clipboard, Code, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold text-blue-600">Sumon Mia</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium text-sm sm:text-base">
            <a href="#home" className="hover:text-blue-500 transition">Home</a>
            <a href="#about" className="hover:text-blue-500 transition">About</a>
            <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Transparent Click Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-20 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64
          bg-gradient-to-b from-sky-100 to-blue-50 border-r border-blue-200
          text-gray-900 shadow-2xl rounded-r-3xl p-6
          transition-transform duration-300 ease-in-out z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <nav className="space-y-4 sm:space-y-6 text-sm sm:text-base font-medium">
          {[
            { name: "Home", icon: Home, href: "#home" },
            { name: "About", icon: User, href: "#about" },
            { name: "Skills", icon: Clipboard, href: "#skills" },
            { name: "Projects", icon: Code, href: "#projects" },
            { name: "Contact", icon: Mail, href: "#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={toggleMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-200 hover:text-blue-800 transition cursor-pointer select-none"
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
