import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Redux",
  "Node.js", "Express.js", "MongoDB", "MySQL",
  "Bootstrap", "Tailwind CSS", "Firebase",
  "Git & GitHub", "Netlify", "Vercel", "C", "C++"
];

const education = [
  {
    degree: "B.Sc.",
    institute: "National Institute of Science and Technology (NIST)",
    major: "Computer Science & Engineering",
    year: "2023"
  },
  {
    degree: "H.S.C",
    institute: "Govt. Science College",
    major: "Science",
    year: "2018"
  },
  {
    degree: "S.S.C",
    institute: "Bagbari High School",
    major: "Science",
    year: "2016"
  }
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-white via-blue-50 to-emerald-50
                 dark:from-gray-900 dark:via-gray-800 dark:to-black
                 py-20 sm:py-28"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* TITLE */}
        <motion.h2
          variants={item}
          className="text-3xl sm:text-4xl font-bold text-blue-700
                     dark:text-blue-400 mb-10 inline-block
                     border-b-4 border-blue-500"
        >
          About Me
        </motion.h2>

        {/* INTRO */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg text-gray-700
                     dark:text-gray-300 leading-relaxed mb-10"
        >
          Hello! I'm <strong className="text-blue-600">Sumon Mia</strong>, a dedicated{" "}
          <span className="font-semibold text-blue-600">
            Full Stack Web Developer
          </span>{" "}
          from Bangladesh. I specialize in building dynamic, responsive
          web applications and Android apps using modern technologies.
        </motion.p>

        {/* EDUCATION */}
        <motion.div variants={item} className="mb-14">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-6">
            🎓 Education
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-gray-800
                           border border-gray-200 dark:border-gray-700
                           rounded-2xl p-6 shadow-md
                           transition"
              >
                <h4 className="font-bold text-lg text-blue-600 mb-2">
                  {edu.degree}
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {edu.institute}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {edu.major}
                </p>
                <span className="inline-block mt-3 text-sm font-medium
                                 text-emerald-600 dark:text-emerald-400">
                  {edu.year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SKILLS */}
        <motion.div variants={item} className="mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-emerald-600 mb-6">
            💼 Skills & Technologies
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1 rounded-full text-xs sm:text-sm
                           font-medium bg-white dark:bg-gray-800
                           border border-gray-200 dark:border-gray-700
                           text-gray-800 dark:text-gray-200
                           shadow-sm cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={item}
          className="text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Sumon_CV.pdf"
            download
            className="inline-block bg-blue-600 text-white
                       px-8 py-3 rounded-full font-semibold
                       hover:bg-blue-700 dark:bg-blue-500
                       dark:hover:bg-blue-600 transition"
          >
            📄 Download My CV
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
