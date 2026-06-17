import React from 'react';
import SideBar from './component/Sidebar';
import MainBar from './component/MainBar';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa6';

const App = () => {
  const [showTop, setShowTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="relative min-h-screen w-full">
      <div className="fixed top-0 left-0 right-0 h-[1px] z-[99] bg-black/[0.06]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-10 pt-1 lg:pt-4 pb-20">
        <main className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 w-full">
          <SideBar />
          <MainBar />
        </main>
      </div>

      {/* ── Scroll To Top Button ── */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: showTop ? 1 : 0, scale: showTop ? 1 : 0.5 }}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-24 lg:bottom-8 right-4 lg:right-8 z-40 p-4 rounded-2xl bg-surface text-text-primary shadow-card hover:bg-[#f5f5f7] transition-colors group"
      >
        <FaArrowUp className="w-5 h-5 text-accent-blue group-hover:-translate-y-1 transition-transform" />
      </motion.button>
    </div>
  );
};

export default App;
