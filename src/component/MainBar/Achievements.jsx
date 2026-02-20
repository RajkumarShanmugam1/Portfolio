import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaAward } from 'react-icons/fa';
import achievementsData from '../../data/achievements.json';

const Achievements = () => {
    return (
        <div className="space-y-10">

            {/* ── Header ── */}
            <header className="flex items-center gap-5">
                <div className="p-3.5 rounded-2xl text-accent-gold text-3xl border border-white/10 flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(168,85,247,0.10))', boxShadow: '0 0 30px rgba(245,158,11,0.3)' }}>
                    <FaAward />
                </div>
                <div>
                    <h2 className="text-4xl lg:text-5xl font-black pb-1"
                        style={{ background: 'linear-gradient(135deg, #fff 0%, #22d3ee 40%, #a855f7 70%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Achievements
                    </h2>
                    <div className="w-28 h-[3px] rounded-full"
                        style={{ background: 'linear-gradient(to right, #06b6d4, #6366f1, #a855f7, #ec4899)' }} />
                </div>
            </header>

            <motion.ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" layout>
                <AnimatePresence>
                    {achievementsData.length === 0 ? (
                        <li className="col-span-full text-center py-24 text-text-muted">
                            <p className="text-5xl mb-4">🏆</p>
                            <p className="text-lg font-bold">No achievements yet</p>
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
                            className="relative group overflow-hidden rounded-3xl border-[1.5px] border-white/[0.12] bg-white/[0.07] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                            style={{
                                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'transparent';
                                e.currentTarget.style.backgroundImage = 'linear-gradient(#111, #111), linear-gradient(135deg, #06b6d4, #a855f7, #ec4899)';
                                e.currentTarget.style.backgroundOrigin = 'border-box';
                                e.currentTarget.style.backgroundClip = 'padding-box, border-box';
                                e.currentTarget.style.boxShadow = '0 0 40px rgba(168,85,247,0.25)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = '';
                                e.currentTarget.style.backgroundImage = '';
                                e.currentTarget.style.boxShadow = '';
                            }}
                        >
                            {/* Gradient top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"
                                style={{ background: 'linear-gradient(to right, #06b6d4, #6366f1, #a855f7, #ec4899)' }} />

                            <a href={p.href} target="_blank" rel="noreferrer" className="block w-full">
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#06050f] via-transparent to-transparent opacity-80" />

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                                        <div className="w-12 h-12 flex items-center justify-center text-white rounded-full border border-white/20 scale-50 group-hover:scale-100 transition-transform duration-500"
                                            style={{ background: 'rgba(6,182,212,0.2)', backdropFilter: 'blur(12px)', boxShadow: '0 0 25px rgba(6,182,212,0.4)' }}>
                                            <FaEye size={20} />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 space-y-2 relative z-10">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] border border-white/10 px-3 py-1 rounded-full inline-block"
                                        style={{ color: '#22d3ee', background: 'rgba(6,182,212,0.10)' }}>
                                        {p.sub}
                                    </p>
                                    <h3 className="text-base font-black text-white leading-tight group-hover:text-glow transition-all line-clamp-1">{p.title}</h3>
                                </div>
                            </a>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </motion.ul>
        </div>
    );
};

export default Achievements;
