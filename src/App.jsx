import React from 'react';
import SideBar from './component/Sidebar';
import MainBar from './component/MainBar';
import WallpaperCanvas from './component/WallpaperCanvas';
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
      {/* Animated wallpaper — renders behind everything */}
      <WallpaperCanvas />

      {/* Subtle shimmer line at top */}
      <div className="fixed top-0 left-0 right-0 h-[1px] z-[99]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)' }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 lg:px-10 pt-4 lg:pt-6 pb-20">
        <main className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 w-full">
          <SideBar />
          <MainBar />
        </main>
      </div>

      {/* Scroll To Top */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: showTop ? 1 : 0, scale: showTop ? 1 : 0.5 }}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-24 lg:bottom-8 right-4 lg:right-8 z-40 p-4 rounded-2xl transition-all duration-300 group"
        style={{
          background: 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.6)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        }}
      >
        <FaArrowUp className="w-5 h-5 text-accent-blue group-hover:-translate-y-1 transition-transform" />
      </motion.button>
    </div>
  );
};

export default App;
