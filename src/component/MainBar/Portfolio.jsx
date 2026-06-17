import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaBriefcase, FaChevronDown } from 'react-icons/fa6';
import contributionsData from '../../data/contributions.json';

const ALL = 'all';
const HOF = 'hall of fame';
const ACK = 'acknowledgement';

const filters = [
    { label: 'All', value: ALL },
    { label: 'Hall of Fame', value: HOF },
    { label: 'Acknowledgement', value: ACK },
];

const Portfolio = () => {
    const [active, setActive] = useState(ALL);
    const filtered = contributionsData.filter(p => active === ALL || (p.cat && p.cat.toLowerCase() === active.toLowerCase()));

    return (
        <article className="glass p-8 pt-6 lg:p-12 lg:pt-8 rounded-3xl space-y-6 lg:space-y-8 animate-fadeIn relative">
            {/* ── Header + Filters (same row on desktop to save vertical space) ── */}
            <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-black/[0.06] pb-6">
                <div className="flex items-center gap-5">
                    <div className="p-3 rounded-xl text-accent-blue text-2xl flex-shrink-0" style={{ background: 'rgba(0,122,255,0.1)' }}>
                        <FaBriefcase />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-medium text-text-primary tracking-tight">
                        Portfolio
                    </h2>
                </div>

                {/* Desktop: pill filters */}
                <ul className="hidden lg:flex p-1 rounded-xl overflow-x-auto max-w-full gap-1 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.5)' }}>
                    {filters.map(f => (
                        <li key={f.value} className="shrink-0 relative">
                            <button
                                className={`relative px-4 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 whitespace-nowrap uppercase tracking-wider ${active === f.value
                                    ? ''
                                    : 'text-text-muted hover:text-[#4f46e5]'
                                    }`}
                        style={active === f.value
                            ? { color: '#4f46e5', background: 'rgba(99,102,241,0.13)', border: '1px solid rgba(99,102,241,0.25)', boxShadow: '0 2px 10px rgba(99,102,241,0.15)' }
                            : {}}
                                onClick={() => setActive(f.value)}
                            >
                                <span className="relative z-10">{f.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile: dropdown filter */}
                <div className="lg:hidden relative">
                    <select
                        value={active}
                        onChange={(e) => setActive(e.target.value)}
                        className="w-full appearance-none bg-black/[0.04] text-text-primary text-sm font-medium rounded-xl px-4 py-2.5 pr-10 focus:outline-none"
                    >
                        {filters.map(f => (
                            <option key={f.value} value={f.value}>{f.label}</option>
                        ))}
                    </select>
                    <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted text-xs pointer-events-none" />
                </div>
            </header>

            <div className="space-y-10">
                <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
                    <AnimatePresence mode="popLayout">
                        {filtered.length === 0 ? (
                            <li className="col-span-full text-center py-24 text-text-muted">
                                <p className="text-5xl mb-4">💼</p>
                                <p className="text-lg font-medium">No portfolio items found</p>
                            </li>
                        ) : filtered.map((p, i) => (
                            <motion.li
                                key={p.title + p.cat}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25, delay: i * 0.02 }}
                                className="relative group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
                                style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.7)', boxShadow: '0 4px 16px rgba(0,0,0,0.07)' }}
                            >
                                <a href={p.href} target="_blank" rel="noreferrer" className="block w-full">
                                    <div className="aspect-[4/3] overflow-hidden relative">
                                        <img src={p.img} alt={p.title} loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 bg-black/10">
                                            <div className="w-12 h-12 flex items-center justify-center text-white bg-accent-blue rounded-full scale-50 group-hover:scale-100 transition-transform duration-300">
                                                <FaEye size={20} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-3 sm:p-5 space-y-1.5 sm:space-y-2 relative z-10">
                                        <p className="text-[9px] sm:text-[10px] font-medium uppercase tracking-wider px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-text-secondary inline-block" style={{ background: 'rgba(0,0,0,0.05)' }}>
                                            {p.sub}
                                        </p>
                                        <h3 className="text-sm sm:text-base font-medium text-text-primary leading-tight line-clamp-1">{p.title}</h3>
                                    </div>
                                </a>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            </div>
        </article>
    );
};

export default Portfolio;
