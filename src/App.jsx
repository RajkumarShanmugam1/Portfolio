import React from 'react';
import Particlebg from './component/Particlebf';
import SideBar from './component/Sidebar';
import MainBar from './component/MainBar';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa6';

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showTop, setShowTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="relative min-h-screen w-full">
      <Particlebg />

      <div className="fixed top-0 left-0 right-0 h-[1px] z-[99] bg-white/[0.05]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 pt-1 lg:pt-4 pb-20">
        <main className="flex flex-col items-center gap-8 w-full">
          <SideBar />
          <MainBar />
        </main>
      </div>

      {/* ── Scroll To Top Button ── */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: showTop ? 1 : 0, scale: showTop ? 1 : 0.5 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xl text-white shadow-2xl hover:bg-white/[0.1] transition-colors group"
      >
        <FaArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink opacity-0 group-hover:opacity-20 transition-opacity" />
      </motion.button>
    </div>
  );
};

export default App;
