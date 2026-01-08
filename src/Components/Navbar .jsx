import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Clipboard, Code, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "About", icon: User, href: "#about" },
  { name: "Skills", icon: Clipboard, href: "#skills" },
  { name: "Projects", icon: Code, href: "#projects" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all
          ${scrolled
            ? "bg-white/80 backdrop-blur shadow-md"
            : "bg-white"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">
            Sumon<span className="text-gray-800">Mia</span>
          </span>

          {/* Desktop */}
          <div className="hidden md:flex gap-6 text-gray-700 font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-sky-100 to-blue-50
                       z-50 p-6 shadow-2xl rounded-r-3xl"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-bold text-lg text-blue-600">Sumon Mia</h2>
              <button onClick={() => setIsOpen(false)}>
                <X />
              </button>
            </div>

            <nav className="space-y-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl
                             hover:bg-blue-200 hover:text-blue-800 transition"
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
