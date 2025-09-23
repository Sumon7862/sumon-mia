import React from "react";
import { Github, Linkedin, MessageCircle } from "lucide-react"; // ✅ WhatsApp icon

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-tr from-blue-50 to-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">Let's Connect</h2>
        <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
          I'm always open to discussing new opportunities, exciting projects, or collaborations.
          Whether it's a job offer, freelance work, or just a hello — feel free to reach out!
        </p>

        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap mb-8">
          {/* ✅ WhatsApp */}
          <a
            href="https://wa.me/01937952527"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium transition"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>

          {/* 🐱 GitHub */}
          <a
            href="https://github.com/Sumon7862"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-black text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium transition"
          >
            <Github size={18} /> GitHub
          </a>

          {/* 🔗 LinkedIn */}
          <a
            href="https://www.linkedin.com/in/md-aminul-islam-sumon-785061376/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

        <p className="text-sm sm:text-base text-gray-500">
          © {new Date().getFullYear()} Sumon Mia. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
