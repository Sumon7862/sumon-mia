import { motion } from "framer-motion";

const skills = [
  { name: "HTML", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
  { name: "CSS", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
  { name: "JavaScript", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200" },
  { name: "React.js", color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200" },
  { name: "Redux", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
  { name: "Node.js", color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200" },
  { name: "Express.js", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
  { name: "MongoDB", color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200" },
  { name: "MySQL", color: "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200" },
  { name: "Bootstrap", color: "bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-200" },
  { name: "Tailwind CSS", color: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-200" },
  { name: "Firebase", color: "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-200" },
  { name: "Git & GitHub", color: "bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-200" },
  { name: "Netlify", color: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-200" },
  { name: "Vercel", color: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-200" },
  { name: "C", color: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200" },
  { name: "C++", color: "bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-200" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-white to-blue-50
                 dark:from-gray-900 dark:to-gray-800
                 py-20 sm:py-28"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* TITLE */}
        <motion.h2
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl font-bold
                     text-blue-700 dark:text-blue-400
                     mb-12 text-center inline-block
                     border-b-4 border-blue-400 pb-2"
        >
          My Skills
        </motion.h2>

        {/* SKILL TAGS */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              variants={item}
              whileHover={{
                y: -6,
                scale: 1.1,
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`${skill.color}
                px-4 py-2 rounded-full
                text-xs sm:text-sm md:text-base
                font-semibold cursor-pointer
                transition`}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
