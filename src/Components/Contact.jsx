import React from "react";
import { Github, Linkedin, MessageCircle } from "lucide-react";

const contacts = [
  {
    name: "WhatsApp",
    icon: <MessageCircle size={20} />,
    href: "https://wa.me/01937952527",
    bg: "bg-green-500 hover:bg-green-600",
    text: "text-white",
  },
  {
    name: "GitHub",
    icon: <Github size={20} />,
    href: "https://github.com/Sumon7862",
    bg: "bg-gray-900 hover:bg-black",
    text: "text-white",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/sumon78/",
    bg: "bg-blue-500 hover:bg-blue-600",
    text: "text-white",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-tr from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-black py-20 sm:py-28 overflow-hidden"
    >
      {/* Animated Background Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full opacity-30 animate-pulse-slow"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-30 animate-pulse-slow"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-6 border-b-4 border-blue-300 inline-block pb-2">
          Let's Connect
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl mb-12 leading-relaxed">
          I'm always open to discussing new opportunities, exciting projects, or collaborations.
          Whether it's a job offer, freelance work, or just a hello — feel free to reach out!
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {contacts.map((contact, i) => (
            <a
              key={i}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative ${contact.bg} ${contact.text} px-6 py-3 sm:px-8 sm:py-4 rounded-3xl font-semibold shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 flex items-center gap-3`}
            >
              <span className="transform transition duration-300 group-hover:scale-125">
                {contact.icon}
              </span>
              <span className="text-sm sm:text-base">{contact.name}</span>

              {/* Animated Circle Effect */}
              <span className="absolute -top-2 -left-2 w-4 h-4 bg-white rounded-full opacity-50 animate-ping-slow"></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
