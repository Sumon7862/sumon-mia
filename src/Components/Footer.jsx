import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-6 sm:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-sm sm:text-base text-gray-600">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Sumon Mia. All rights reserved.
        </p>

        <div className="flex gap-4 mt-3 sm:mt-0">
          <a
            href="https://github.com/Sumon7862"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-aminul-islam-sumon-785061376/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
