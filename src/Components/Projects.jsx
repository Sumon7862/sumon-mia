import React, { useState } from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern and responsive portfolio website built using React and Tailwind CSS. It showcases personal projects, skills, and contact info.",
    link: "https://my-portfolio7862.netlify.app/",
  },
  {
    title: "E-commerce Website",
    description:
      "A full-featured e-commerce website with user authentication, product management, cart, and Stripe payment integration.",
    link: "https://bikriplus.netlify.app/",
  },
  {
    title: "Task Manager",
    description:
      "A simple, clean To-Do app landing page with minimal design, intuitive UI, and focused functionality.",
    link: "https://todo7862.netlify.app/",
  },
  {
    title: "Landing Page Design",
    description:
      "Professional and modern corporate landing page with clean design, clear content sections, and intuitive navigation.",
    link: "https://corporatelandingpagedesign.netlify.app/",
  },
  {
    title: "Number Guessing Game",
    description:
      "Fun & interactive number-guessing game web page with simple UI, instant feedback, and easy user engagement.",
    link: "https://sumon7862.github.io/Guessing-Game/",
  },
  {
    title: "MCQ Quiz System",
    description:
      "A streamlined MCQ quiz app with clean interface, clear questions & answers, and instant result feedback.",
    link: "https://sumon7862.github.io/MCQ-Project/",
  },
  {
    title: "Counter",
    description:
      "Minimal & responsive counter app UI with large buttons and instant feedback.",
    link: "https://sumon7862.github.io/Counter/",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-black py-20 sm:py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-12 sm:mb-14 text-center border-b-4 border-blue-300 inline-block pb-2">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {visibleProjects.map((project, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-5 sm:p-6 flex flex-col"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base transition duration-300"
              >
                🔗 View Project
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition duration-300 text-sm sm:text-base"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
