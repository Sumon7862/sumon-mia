import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio built with React & Tailwind CSS showcasing projects & skills.",
    link: "https://sumon-mia.netlify.app/",
    category: "Web App",
  },
  {
    title: "E-commerce Website",
    description:
      "Full-featured e-commerce platform with authentication, product management, and Stripe payments.",
    link: "https://bikriplus.netlify.app/",
    category: "Web App",
  },
  {
    title: "Task Manager",
    description:
      "Clean and intuitive To-Do app with focused functionality and minimal design.",
    link: "https://todo7862.netlify.app/",
    category: "Web App",
  },
  {
    title: "Landing Page Design",
    description:
      "Professional corporate landing page with clean design and smooth navigation.",
    link: "https://corporatelandingpagedesign.netlify.app/",
    category: "Landing Page",
  },
  {
    title: "Number Guessing Game",
    description:
      "Fun & interactive number-guessing game with instant feedback and easy engagement.",
    link: "https://sumon7862.github.io/Guessing-Game/",
    category: "Game",
  },
  {
    title: "MCQ Quiz System",
    description:
      "Streamlined MCQ quiz app with clean interface and instant result feedback.",
    link: "https://sumon7862.github.io/MCQ-Project/",
    category: "Web App",
  },
  {
    title: "Counter",
    description:
      "Minimal, responsive counter app with large buttons and immediate feedback.",
    link: "https://sumon7862.github.io/Counter/",
    category: "Web App",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(projects.slice(0, 3));

  useEffect(() => {
    setVisibleProjects(showAll ? projects : projects.slice(0, 3));
  }, [showAll]);

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-black py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-16 text-center border-b-4 border-blue-300 inline-block pb-2">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleProjects.map((project, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-2xl shadow-lg p-6 sm:p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Category */}
              <span className="text-xs sm:text-sm font-semibold text-blue-500 mb-2 uppercase">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Live Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium text-sm sm:text-base text-center transition-all duration-300"
              >
                🔗 View Live
              </a>
            </div>
          ))}
        </div>

        {/* See More / Less */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 sm:px-8 py-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 font-medium transition-all duration-300"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
