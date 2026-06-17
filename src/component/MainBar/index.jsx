import React, { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCircleInfo,
  FaFileLines, FaRss, FaBriefcase, FaAward
} from 'react-icons/fa6';
// About loads eagerly — it's the default tab and should render immediately.
// The rest are code-split so a visitor only downloads the tab they actually open.
import About from './About';
const Resume = lazy(() => import('./Resume'));
const Portfolio = lazy(() => import('./Portfolio'));
const Achievements = lazy(() => import('./Achievements'));
const Blog = lazy(() => import('./Blog'));

const tabs = [
  { name: 'About', icon: <FaCircleInfo />, id: 'about', Component: About },
  { name: 'Resume', icon: <FaFileLines />, id: 'resume', Component: Resume },
  { name: 'Portfolio', icon: <FaBriefcase />, id: 'portfolio', Component: Portfolio },
  { name: 'Awards', icon: <FaAward />, id: 'awards', Component: Achievements },
  { name: 'Blog', icon: <FaRss />, id: 'blog', Component: Blog }
];

function MainBar() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const ActiveComponent = tabs.find(t => t.id === activeId)?.Component ?? About;
  const tabRefs = React.useRef([]);

  const handleKeyDown = (e, index) => {
    let next = index;
    if (e.key === 'ArrowRight') next = (index + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = tabs.length - 1;
    else return;
    e.preventDefault();
    setActiveId(tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="flex-1 min-w-0 pb-24 lg:pb-12 relative">
      {/* Segmented Control Nav — fixed bottom tab bar on mobile, inline centered on desktop */}
      <nav
        className="fixed bottom-0 inset-x-0 z-50 px-3 pb-3 pt-2 bg-surface/95 backdrop-blur-md shadow-[0_-1px_3px_rgba(0,0,0,0.06)]
          lg:static lg:px-0 lg:pb-0 lg:pt-0 lg:bg-transparent lg:backdrop-blur-none lg:shadow-none lg:mb-8 lg:flex lg:justify-center"
        role="tablist"
        aria-label="Sections"
      >
        <div className="bg-black/[0.05] rounded-2xl p-1 flex items-center justify-between lg:justify-center gap-0.5 max-w-full overflow-x-auto">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={el => tabRefs.current[index] = el}
              role="tab"
              aria-selected={activeId === tab.id}
              tabIndex={activeId === tab.id ? 0 : -1}
              className={`relative flex-1 lg:flex-none px-2 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-sm font-medium transition-colors duration-200 rounded-xl whitespace-nowrap flex flex-col lg:flex-row items-center justify-center gap-0.5 lg:gap-1.5
                ${activeId === tab.id ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}`}
              onClick={() => setActiveId(tab.id)}
              onKeyDown={e => handleKeyDown(e, index)}
            >
              <span className="relative z-10 inline-block">{tab.icon}</span>
              <span className="relative z-10">{tab.name}</span>
              {activeId === tab.id && (
                <motion.div
                  layoutId="active-segment"
                  className="absolute inset-0 rounded-xl bg-surface shadow-card pointer-events-none"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      <div className="w-full relative z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <Suspense fallback={<div className="glass p-8 lg:p-12 rounded-3xl h-64 animate-pulse" />}>
              <ActiveComponent />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MainBar;
