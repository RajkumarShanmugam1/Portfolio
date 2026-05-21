import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaHandshakeAngle, FaCoins, FaBriefcase } from 'react-icons/fa6';
import Achievements from './Achievements';
import Contributions from './Contributions';
import Collection from './Collection';

const subTabs = [
    { id: 'awards', label: 'Awards', icon: <FaAward />, component: Achievements },
    { id: 'contributions', label: 'Activities', icon: <FaHandshakeAngle />, component: Contributions },
    { id: 'collection', label: 'Collections', icon: <FaCoins />, component: Collection },
];

const Portfolio = () => {
    const [activeSub, setActiveSub] = useState('awards');
    const ActiveSubComponent = subTabs.find(t => t.id === activeSub)?.component || Achievements;

    return (
        <article className="glass p-8 pt-6 lg:p-12 lg:pt-8 rounded-4xl space-y-8 animate-fadeIn relative">
            {/* Ambient corner glows (matching About.jsx) */}
            <div className="absolute top-0 right-0 w-[500px] h-[400px] -z-10 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at top right, rgba(168,85,247,0.08) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 left-0 w-[400px] h-[300px] -z-10 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at bottom left, rgba(6,182,212,0.07) 0%, transparent 70%)' }} />

            {/* ── Standard Header ── */}
            <header className="flex items-center gap-5">
                <div className="p-3.5 rounded-2xl text-accent-indigo text-3xl border border-white/10 shadow-glow-purple flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.10))' }}>
                    <FaBriefcase />
                </div>
                <div>
                    <h2 className="text-4xl lg:text-5xl font-black pb-1"
                        style={{ background: 'linear-gradient(135deg, #fff 0%, #22d3ee 40%, #a855f7 70%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Portfolio
                    </h2>
                    <div className="w-24 h-[3px] rounded-full"
                        style={{ background: 'linear-gradient(to right, #06b6d4, #6366f1, #a855f7, #ec4899)' }} />
                </div>
            </header>

            {/* Sub-Navigation (Integrated into the main card) */}
            <header className="glass p-1 rounded-2xl flex flex-wrap justify-center gap-1 border-white/[0.06] shadow-xl relative z-20">
                {subTabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveSub(tab.id)}
                        className={`relative px-4 py-2 rounded-xl text-[9px] lg:text-[11px] font-black uppercase tracking-wider flex items-center gap-2 transition-all duration-300 ${activeSub === tab.id ? 'text-white' : 'text-text-muted hover:text-white hover:bg-white/[0.06]'
                            }`}
                    >
                        {activeSub === tab.id && (
                            <motion.span
                                layoutId="sub-pill"
                                className="absolute inset-0 rounded-xl"
                                style={{ background: 'linear-gradient(135deg, #06b6d4, #6366f1, #a855f7, #ec4899)', boxShadow: '0 0 12px rgba(168,85,247,0.3)' }}
                                transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                            />
                        )}
                        <span className="relative z-10 text-xs">{tab.icon}</span>
                        <span className="relative z-10">{tab.label}</span>
                    </button>
                ))}
            </header>

            {/* Content Area */}
            <div className="relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSub}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <ActiveSubComponent />
                    </motion.div>
                </AnimatePresence>
            </div>
        </article>
    );
};

export default Portfolio;
