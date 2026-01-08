import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-black py-8 sm:py-12 overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full opacity-30 animate-pulse-slow"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-30 animate-pulse-slow"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-sm sm:text-base text-gray-600 dark:text-gray-300">
        <p className="mb-3 sm:mb-0">
          © {new Date().getFullYear()} <span className="font-semibold text-blue-600 dark:text-blue-400">Sumon Mia</span>. All rights reserved.
        </p>

        <div className="flex gap-5 justify-center sm:justify-start mt-3 sm:mt-0">
          {/* GitHub */}
          <a
            href="https://github.com/Sumon7862"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-125 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sumon78/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-125 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
