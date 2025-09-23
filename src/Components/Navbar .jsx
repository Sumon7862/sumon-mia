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
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Sumon Mia</div>
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#home" className="hover:text-blue-500 transition">Home</a>
            <a href="#about" className="hover:text-blue-500 transition">About</a>
            <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Transparent Click Overlay: sidebar open হলে sidebar ছাড়া বাকী জায়গায় ক্লিক করলে sidebar বন্ধ হবে */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-transparent"
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
        <nav className="space-y-6 text-base font-medium">
          <a
            href="#home"
            onClick={toggleMenu}
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-200 hover:text-blue-800 transition cursor-pointer select-none"
          >
            <Home className="w-5 h-5" />
            Home
          </a>
          <a
            href="#about"
            onClick={toggleMenu}
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-200 hover:text-blue-800 transition cursor-pointer select-none"
          >
            <User className="w-5 h-5" />
            About
          </a>
          <a
            href="#skills"
            onClick={toggleMenu}
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-200 hover:text-blue-800 transition cursor-pointer select-none"
          >
            <Clipboard className="w-5 h-5" />
            Skills
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-200 hover:text-blue-800 transition cursor-pointer select-none"
          >
            <Code className="w-5 h-5" />
            Projects
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-200 hover:text-blue-800 transition cursor-pointer select-none"
          >
            <Mail className="w-5 h-5" />
            Contact
          </a>
        </nav>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
