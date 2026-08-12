import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/constants";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <section id="about" className="section-bg py-20 sm:py-28">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={item} className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <motion.p
          variants={item}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-300
                     leading-relaxed mb-14 text-center max-w-3xl mx-auto"
        >
          Hello! I&apos;m <strong className="text-indigo-600 dark:text-indigo-400">Sumon Mia</strong>,
          a dedicated Full Stack Web Developer from Bangladesh. I specialize in building dynamic,
          responsive web applications using modern technologies like React, Node.js, and MongoDB.
          I love turning ideas into clean, user-friendly digital experiences.
        </motion.p>

        <motion.div variants={item}>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-500/20">
              <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
              Education
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="premium-card rounded-2xl p-6 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-display font-bold text-lg text-indigo-600 dark:text-indigo-400">
                    {edu.degree}
                  </h4>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full
                                   bg-emerald-50 dark:bg-emerald-500/10
                                   text-emerald-600 dark:text-emerald-400">
                    {edu.year}
                  </span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  {edu.institute}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {edu.major}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
