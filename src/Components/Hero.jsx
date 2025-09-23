import React, { useEffect, useState } from "react";
import profileImage from "../assets/sumon.jpg"; // তোমার নিজের ছবি

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="home"
      className="bg-gradient-to-br from-sky-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-black py-28 transition-all duration-700"
    >
      <div
        className={`max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10 transition-all duration-700 ease-in-out ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {/* Left: Text Content */}
        <div className="text-center md:text-left flex-1 font-libre">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight mb-4">
            🌟 Hi! I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">Sumon Mia</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium mb-4">
            A passionate{" "}
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              Full Stack Web Developer
            </span>{" "}
            💻📱
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm sm:text-base font-medium mb-8 mt-6">
            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full">
              HTML
            </span>
            <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full">
              CSS
            </span>
            <span className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 px-3 py-1 rounded-full">
              Javascript
            </span>
            <span className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 px-3 py-1 rounded-full">
              Bootstrap
            </span>
            <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full">
              React.js
            </span>
            <span className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 px-3 py-1 rounded-full">
              Tailwind CSS
            </span>
            <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-3 py-1 rounded-full">
              Firebase
            </span>
            
            <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-full">
              MongoDB
            </span>
            <span className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 px-3 py-1 rounded-full">
              Node.js
            </span>
            <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full">
              C
            </span>
            <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full">
              C++
            </span>
          </div>

          <a
            href="#projects"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
          >
            View My Work
          </a>
        </div>

        {/* Right: Profile Image Card */}
        <div className="flex-1 flex justify-center">
          <div className="relative group rounded-2xl shadow-2xl bg-white dark:bg-gray-800 p-6 sm:p-8 transition duration-500 hover:scale-105 hover:shadow-blue-400/50">
            <img
              src={profileImage}
              alt="Profile"
              className="w-72 h-72 object-cover rounded-full border-4 border-blue-400 dark:border-blue-600 mx-auto transition duration-300"
            />
            <div className="mt-5 text-center font-libre">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Sumon Mia
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Full Stack Web Developer
              </p>
            </div>
            {/* Decorative Ring Effect */}
            <div className="absolute inset-0 rounded-2xl border-4 border-dashed border-blue-200 dark:border-blue-600 animate-pulse opacity-20 group-hover:opacity-40 transition duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
