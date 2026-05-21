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

      {/* ── Scroll Progress Bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 z-[100] origin-left bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink"
        style={{ scaleX }}
      />
      <div className="fixed top-0 left-0 right-0 h-1.5 z-[99] bg-white/[0.03] backdrop-blur-sm" />

      {/* Aurora Flux — Multi-color Background Orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Cyan — top-left */}
        <div
          className="absolute top-[-15%] left-[-15%] w-[55%] h-[55%] rounded-full opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        {/* Violet — top-right */}
        <div
          className="absolute top-[-10%] right-[-15%] w-[50%] h-[55%] rounded-full opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        {/* Rose — bottom-right */}
        <div
          className="absolute bottom-[-15%] right-[-10%] w-[45%] h-[50%] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)', filter: 'blur(90px)' }}
        />
        {/* Indigo — bottom-left */}
        <div
          className="absolute bottom-[-15%] left-[-10%] w-[45%] h-[50%] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)', filter: 'blur(90px)' }}
        />
        {/* Center accent bloom */}
        <div
          className="absolute top-[35%] left-[35%] w-[30%] h-[30%] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)', filter: 'blur(100px)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-12 pt-1 lg:pt-2 pb-20">
        <main className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8">
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
