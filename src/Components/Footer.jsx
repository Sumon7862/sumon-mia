import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            © {new Date().getFullYear()}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">Sumon Mia</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> React
            </span>
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/Sumon7862"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400
                         hover:text-indigo-600 dark:hover:text-indigo-400
                         hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sumon78/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400
                         hover:text-indigo-600 dark:hover:text-indigo-400
                         hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
