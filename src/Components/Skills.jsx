import React from "react";

const skills = [
  { name: "HTML", color: "bg-blue-100 text-blue-800" },
  { name: "CSS", color: "bg-yellow-100 text-yellow-800" },
  { name: "JavaScript", color: "bg-indigo-100 text-indigo-800" },
  { name: "React.js", color: "bg-teal-100 text-teal-800" },
  { name: "Redux", color: "bg-purple-100 text-purple-800" },
  { name: "Node.js", color: "bg-pink-100 text-pink-800" },
  { name: "Express.js", color: "bg-green-100 text-green-800" },
  { name: "MongoDB", color: "bg-gray-100 text-gray-800" },
  { name: "MySQL", color: "bg-blue-50 text-blue-800" },
  { name: "Bootstrap", color: "bg-yellow-50 text-yellow-700" },
  { name: "Tailwind CSS", color: "bg-indigo-50 text-indigo-700" },
  { name: "Firebase", color: "bg-orange-50 text-orange-700" },
  { name: "Git & GitHub", color: "bg-gray-50 text-gray-700" },
  { name: "Netlify", color: "bg-blue-50 text-blue-700" },
  { name: "Vercel", color: "bg-green-50 text-green-700" },
  { name: "Java (Android)", color: "bg-pink-50 text-pink-700" },
  { name: "C", color: "bg-gray-200 text-gray-800" },
  { name: "C++", color: "bg-gray-200 text-gray-800" },
  { name: "Java", color: "bg-gray-200 text-gray-800" },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-br from-white to-blue-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-10 text-center border-b-4 border-blue-400 inline-block">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3 text-sm sm:text-base font-medium mt-6">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`${skill.color} px-4 py-2 rounded-full shadow-sm hover:shadow-md transition duration-300`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
