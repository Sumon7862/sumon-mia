import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/constants";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="section-bg py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of projects I&apos;ve built and deployed
          </p>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="premium-card rounded-2xl p-6 sm:p-8 flex flex-col group"
              >
                <span className="text-xs font-bold uppercase tracking-wider
                                 text-indigo-500 dark:text-indigo-400 mb-3">
                  {project.category}
                </span>

                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3
                               group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg
                                 bg-indigo-50 dark:bg-indigo-500/10
                                 text-indigo-600 dark:text-indigo-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5
                             rounded-xl btn-primary text-sm font-semibold"
                >
                  View Live
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full font-semibold
                       border-2 border-slate-200 dark:border-slate-700
                       text-slate-700 dark:text-slate-200
                       hover:border-indigo-300 dark:hover:border-indigo-500
                       hover:text-indigo-600 dark:hover:text-indigo-400
                       transition-colors"
          >
            {showAll ? "Show Less" : `Show All (${projects.length})`}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
