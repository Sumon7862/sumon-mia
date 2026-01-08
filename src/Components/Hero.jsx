import { motion } from "framer-motion";
import profileImage from "../assets/sumon.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const skills = [
  "HTML", "CSS", "JavaScript", "Bootstrap", "React.js",
  "Tailwind CSS", "Firebase", "MongoDB", "Node.js", "C", "C++"
];

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-sky-50 via-white to-emerald-50
                 dark:from-gray-900 dark:via-gray-800 dark:to-black
                 py-20 sm:py-28 overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
                   flex flex-col-reverse md:flex-row items-center gap-10"
      >
        {/* LEFT CONTENT */}
        <motion.div variants={item} className="flex-1 text-center md:text-left">
          <motion.h1
            variants={item}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold
                       text-gray-800 dark:text-white leading-tight mb-4"
          >
            Assalamu Alaikum! I’m{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Sumon Mia
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base sm:text-lg md:text-xl
                       text-gray-700 dark:text-gray-300 font-medium mb-6"
          >
            A passionate{" "}
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              Full Stack Web Developer
            </span>{" "}
            💻📱
          </motion.p>

          {/* SKILLS */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center md:justify-start
                       gap-2 sm:gap-3 mb-8"
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium
                           bg-white dark:bg-gray-800
                           border border-gray-200 dark:border-gray-700
                           text-gray-800 dark:text-gray-200
                           shadow-sm cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.a
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="inline-block bg-blue-600 text-white
                       px-6 py-3 rounded-full font-semibold
                       hover:bg-blue-700 dark:bg-blue-500
                       dark:hover:bg-blue-600 transition"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* RIGHT IMAGE CARD */}
        <motion.div
          variants={item}
          whileHover={{ y: -8 }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-2xl bg-white dark:bg-gray-800
                       p-6 sm:p-8 shadow-2xl group"
          >
            <img
              src={profileImage}
              alt="Sumon Mia"
              className="w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72
                         object-cover rounded-full mx-auto
                         border-4 border-blue-400 dark:border-blue-600"
            />

            <div className="mt-5 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                Sumon Mia
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Full Stack Web Developer
              </p>
            </div>

            {/* GLOW RING */}
            <div
              className="absolute inset-0 rounded-2xl border-2 border-blue-400
                         opacity-20 group-hover:opacity-40
                         transition duration-500"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
