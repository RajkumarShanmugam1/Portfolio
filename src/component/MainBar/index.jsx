import React, { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCircleInfo,
  FaFileLines, FaRss, FaBriefcase, FaAward
} from 'react-icons/fa6';

class TabErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: false }; }
  static getDerivedStateFromError() { return { error: true }; }
  componentDidUpdate(prev) { if (prev.tabId !== this.props.tabId) this.setState({ error: false }); }
  render() {
    if (this.state.error) return (
      <div className="glass p-8 lg:p-12 rounded-3xl flex flex-col items-center justify-center min-h-64 text-text-muted gap-3">
        <p className="text-4xl">⚠️</p>
        <p className="font-medium text-text-primary">Something went wrong loading this section.</p>
        <button onClick={() => this.setState({ error: false })} className="btn-primary text-xs px-4 py-2">Try again</button>
      </div>
    );
    return this.props.children;
  }
}

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
      {/* Tab bar — glass pill on desktop, frosted bottom bar on mobile */}
      <nav
        className="fixed bottom-0 inset-x-0 z-50 px-3 pb-3 pt-2 lg:static lg:px-0 lg:pb-0 lg:pt-0 lg:mb-8 lg:flex lg:justify-center"
        role="tablist"
        aria-label="Sections"
      >
        {/* Mobile frosted bar background */}
        <div className="absolute inset-0 lg:hidden"
          style={{
            background: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            borderTop: '1px solid rgba(255,255,255,0.5)',
          }} />

        <div className="relative flex items-center justify-between lg:justify-center gap-0.5 max-w-full overflow-x-auto rounded-2xl p-1"
          style={{
            background: 'rgba(255,255,255,0.88)',
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            border: '1px solid rgba(255,255,255,0.7)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.9) inset',
          }}>
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={el => tabRefs.current[index] = el}
              role="tab"
              aria-selected={activeId === tab.id}
              tabIndex={activeId === tab.id ? 0 : -1}
              className={`relative flex-1 lg:flex-none px-2 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-sm font-medium transition-all duration-200 rounded-xl whitespace-nowrap flex flex-col lg:flex-row items-center justify-center gap-0.5 lg:gap-1.5
                ${activeId === tab.id ? '' : 'hover:opacity-80'}`}
              style={{ color: activeId === tab.id ? '#1d1d1f' : '#6e6e73' }}
              onClick={() => setActiveId(tab.id)}
              onKeyDown={e => handleKeyDown(e, index)}
            >
              <span className="relative z-10 inline-block">{tab.icon}</span>
              <span className="relative z-10">{tab.name}</span>
              {activeId === tab.id && (
                <motion.div
                  layoutId="active-segment"
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background: 'rgba(255,255,255,0.85)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.1), 0 1px 0 rgba(255,255,255,0.9) inset',
                  }}
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <TabErrorBoundary tabId={activeId}>
              <Suspense fallback={
                <div className="rounded-3xl min-h-[32rem] animate-pulse"
                  style={{
                    background: 'rgba(255,255,255,0.4)',
                    backdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.5)',
                  }} />
              }>
                <ActiveComponent />
              </Suspense>
            </TabErrorBoundary>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MainBar;
