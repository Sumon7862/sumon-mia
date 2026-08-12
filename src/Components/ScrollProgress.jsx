import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left
                 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
