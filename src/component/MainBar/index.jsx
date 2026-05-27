import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaCircleInfo,
  FaFileLines, FaRss, FaPhone, FaBriefcase, FaAward
} from 'react-icons/fa6';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Achievements from './Achievements';
import Blog from './Blog';
import Contact from './Contact';

const tabs = [
  { name: 'About', icon: <FaCircleInfo />, id: 'about-section' },
  { name: 'Resume', icon: <FaFileLines />, id: 'resume-section' },
  { name: 'Portfolio', icon: <FaBriefcase />, id: 'portfolio-section' },
  { name: 'Awards', icon: <FaAward />, id: 'awards-section' },
  { name: 'Blog', icon: <FaRss />, id: 'blog-section' },
  { name: 'Contact', icon: <FaPhone />, id: 'contact-section' }
];

function MainBar() {
  const [activeTab, setActiveTab] = useState('About');

  // To handle scrolling
  const scrollToSection = (id, name) => {
    const element = document.getElementById(id);
    if (element) {
      // Adjusted for sticky header offset
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveTab(name);
    }
  };

  // Setup intersection observer to update active tab on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section is in the upper part of the viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const tab = tabs.find(t => t.id === id);
          if (tab) {
            setActiveTab(tab.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    tabs.forEach(tab => {
      const element = document.getElementById(tab.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex-1 min-w-0 space-y-0 pb-12 relative">
      {/* Sticky Tab Navigation */}
      <nav className="sticky top-0 z-[999] pt-0.5 pb-0.5 pointer-events-none">
        <div className="glass rounded-xl p-0.5 flex justify-center pointer-events-auto inline-block mx-auto">
          <ul className="flex flex-wrap items-center justify-center gap-0.5">
            {tabs.map(tab => (
              <li key={tab.name} className="relative">
                <button
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-black transition-all duration-300 rounded-lg whitespace-nowrap flex items-center gap-1.5
                    ${activeTab === tab.name ? 'text-white' : 'text-text-secondary hover:text-white hover:bg-white/5'}`}
                  onClick={() => scrollToSection(tab.id, tab.name)}
                >
                  <span className="relative z-10 inline-block">{tab.icon}</span>
                  <span className="relative z-10">{tab.name}</span>
                  {activeTab === tab.name && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-lg bg-white/10 border border-white/20 pointer-events-none"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="w-full relative z-0 mt-8 space-y-16">
          <div id="about-section" className="scroll-mt-24">
            <About />
          </div>
          <div id="resume-section" className="scroll-mt-24">
            <Resume />
          </div>
          <div id="portfolio-section" className="scroll-mt-24">
            <Portfolio />
          </div>
          <div id="awards-section" className="scroll-mt-24">
            <Achievements />
          </div>
          <div id="blog-section" className="scroll-mt-24">
            <Blog />
          </div>
          <div id="contact-section" className="scroll-mt-24">
            <Contact />
          </div>
      </div>
    </div>
  );
}

export default MainBar;