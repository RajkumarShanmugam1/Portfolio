import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaAward } from 'react-icons/fa';
import achievementsData from '../../data/achievements.json';

const Achievements = () => {
    return (
        <article className="glass p-8 pt-6 lg:p-12 lg:pt-8 rounded-3xl space-y-10 animate-fadeIn relative">
            {/* ── Header ── */}
            <header className="flex items-center gap-5 border-b border-black/[0.06] pb-6">
                <div className="p-3 rounded-xl text-accent-blue text-2xl bg-[#f0f7ff] flex-shrink-0">
                    <FaAward />
                </div>
                <div>
                    <h2 className="text-3xl lg:text-4xl font-medium text-text-primary tracking-tight">
                        Achievements
                    </h2>
                </div>
            </header>

            <motion.ul
                className={achievementsData.length >= 4
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'
                    : 'flex flex-wrap gap-5'}
                layout
            >
                <AnimatePresence>
                    {achievementsData.length === 0 ? (
                        <li className="col-span-full text-center py-24 text-text-muted">
                            <p className="text-5xl mb-4">🏆</p>
                            <p className="text-lg font-medium">No achievements yet</p>
                            <p className="text-sm mt-1">Check back soon!</p>
                        </li>
                    ) : achievementsData.map((p, i) => (
                        <motion.li
                            key={p.title + p.cat}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className={`relative group overflow-hidden rounded-2xl bg-[#fafafa] transition-all duration-300 hover:-translate-y-1 hover:shadow-card cursor-pointer ${achievementsData.length < 4 ? 'w-full sm:w-64' : ''}`}
                        >
                            <a href={p.href} target="_blank" rel="noreferrer" className="block w-full">
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 bg-black/10">
                                        <div className="w-12 h-12 flex items-center justify-center text-white bg-accent-blue rounded-full scale-50 group-hover:scale-100 transition-transform duration-300">
                                            <FaEye size={20} />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 space-y-2 relative z-10">
                                    <p className="text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded text-text-secondary bg-black/[0.04] inline-block">
                                        {p.sub}
                                    </p>
                                    <h3 className="text-base font-medium text-text-primary leading-tight line-clamp-1">{p.title}</h3>
                                </div>
                            </a>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </motion.ul>
        </article>
    );
};

export default Achievements;
