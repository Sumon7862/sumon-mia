import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-tr from-blue-50 to-white py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Let's Connect</h2>
        <p className="text-gray-700 text-lg mb-8">
          I'm always open to discussing new opportunities, exciting projects, or collaborations.
          Whether it's a job offer, freelance work, or just a hello — feel free to reach out!
        </p>

        <div className="flex justify-center gap-4 flex-wrap mb-8">
          <a
            href="mailto:kibriahassan3500@gmail.com"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full font-medium transition"
          >
            <Mail size={18} /> Send Email
          </a>
          <a
            href="https://github.com/kibria900"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-black text-white px-5 py-3 rounded-full font-medium transition"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/golam-kibria-hassan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-full font-medium transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Golam Kibria Hassan. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
