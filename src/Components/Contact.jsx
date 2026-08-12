import { motion } from "framer-motion";
import { MessageCircle, Github, Linkedin, Mail } from "lucide-react";
import { contacts } from "../data/constants";

const iconMap = {
  WhatsApp: MessageCircle,
  GitHub: Github,
  LinkedIn: Linkedin,
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <section id="contact" className="mesh-bg relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        <motion.div variants={item} className="mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <motion.p
          variants={item}
          className="text-slate-600 dark:text-slate-300 text-lg mb-4 leading-relaxed max-w-2xl mx-auto"
        >
          I&apos;m always open to discussing new opportunities, exciting projects, or collaborations.
        </motion.p>

        <motion.a
          variants={item}
          href="mailto:sumonmia7862@gmail.com"
          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400
                     font-medium mb-12 hover:underline"
        >
          <Mail className="w-4 h-4" />
          sumonmia7862@gmail.com
        </motion.a>

        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-5"
        >
          {contacts.map((contact) => {
            const Icon = iconMap[contact.name];
            return (
              <motion.a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative flex items-center gap-3 px-7 py-4 rounded-2xl
                           bg-gradient-to-r ${contact.color} text-white font-semibold
                           shadow-lg hover:shadow-xl transition-shadow`}
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {contact.name}
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
