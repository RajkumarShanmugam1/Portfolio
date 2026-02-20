import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaChevronDown, FaChevronUp,
  FaEnvelope, FaCalendarDays, FaAward, FaUser, FaCircleInfo,
  FaFileLines, FaTrophy, FaRss, FaPhone, FaHandshakeAngle, FaCoins, FaBriefcase
} from 'react-icons/fa6';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { SiCredly } from 'react-icons/si';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';

const tabs = [
  { name: 'About', icon: <FaCircleInfo /> },
  { name: 'Resume', icon: <FaFileLines /> },
  { name: 'Portfolio', icon: <FaBriefcase /> },
  { name: 'Blog', icon: <FaRss /> },
  { name: 'Contact', icon: <FaPhone /> }
];

const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 },
};

const components = {
  About: About,
  Resume: Resume,
  Portfolio: Portfolio,
  Blog: Blog,
  Contact: Contact,
};

function MainBar() {
  const [activeTab, setActiveTab] = useState('About');
  const ActiveComponent = components[activeTab];

  return (
    <div className="flex-1 min-w-0 space-y-0 pb-12 relative">
      {/* Sticky Fade Effect Zone */}
      <div className="sticky top-0 z-40 h-24 pointer-events-none bg-gradient-to-b from-site-bg via-site-bg/80 to-transparent -mb-24" />

      {/* Sticky Tab Navigation */}
      <nav className="sticky top-0 z-50 pt-1 pb-1">
        <div className="glass rounded-2xl p-1 lg:p-1.5 flex justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-1">
            {tabs.map(tab => (
              <li key={tab.name} className="relative">
                <button
                  className={`px-3 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-sm font-black transition-all duration-300 rounded-xl whitespace-nowrap flex items-center gap-2
                    ${activeTab === tab.name ? 'text-white' : 'text-text-secondary hover:text-white hover:bg-white/5'}`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  <span className="relative z-10 inline-block">{tab.icon}</span>
                  <span className="relative z-10">{tab.name}</span>
                  {activeTab === tab.name && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: 'linear-gradient(135deg, #06b6d4, #6366f1, #a855f7, #ec4899)', boxShadow: '0 0 25px rgba(168,85,247,0.5), 0 0 60px rgba(99,102,241,0.2)' }}
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="w-full relative z-0 mt-0"
        >
          <div className="pt-0">
            <ActiveComponent />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default MainBar;