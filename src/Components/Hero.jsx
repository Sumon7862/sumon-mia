import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import profileImage from "../assets/sumon.jpg";
import { stats } from "../data/constants";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <section id="home" className="mesh-bg relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24
                   flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16"
      >
        <motion.div variants={item} className="flex-1 text-center md:text-left">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full
                       bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100
                       dark:border-indigo-500/20 text-sm font-medium text-indigo-600
                       dark:text-indigo-400"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold
                       text-slate-900 dark:text-white leading-tight mb-4"
          >
            Assalamu Alaikum! I&apos;m{" "}
            <span className="gradient-text">Sumon Mia</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl"
          >
            A passionate{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Full Stack Web Developer
            </span>{" "}
            crafting beautiful, responsive web experiences from Bangladesh.
          </motion.p>

          <motion.div
            variants={item}
            className="grid grid-cols-3 gap-4 mb-10 max-w-md mx-auto md:mx-0"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="premium-card rounded-2xl p-4 text-center"
              >
                <div className="font-display text-2xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full"
            >
              View My Work
              <ArrowDown className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/Sumon_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                         font-semibold border-2 border-indigo-200 dark:border-indigo-500/30
                         text-indigo-600 dark:text-indigo-400
                         hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition"
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="flex-1 flex justify-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 blur-2xl opacity-30 scale-110" />
            <div className="relative premium-card rounded-3xl p-6 sm:p-8">
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Sumon Mia"
                  className="w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72
                             object-cover rounded-2xl mx-auto
                             ring-4 ring-indigo-200 dark:ring-indigo-500/30"
                />
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center text-white font-display font-bold text-lg shadow-lg">
                  Dev
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                  Sumon Mia
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Full Stack Web Developer
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
