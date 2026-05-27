import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaAward } from 'react-icons/fa';
import achievementsData from '../../data/achievements.json';

const Achievements = () => {
    return (
        <div className="space-y-10">


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
                            className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 cursor-pointer"
                        >
                            <a href={p.href} target="_blank" rel="noreferrer" className="block w-full">
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                        <div className="w-12 h-12 flex items-center justify-center text-white bg-accent-blue rounded-full scale-50 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                                            <FaEye size={20} />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 space-y-2 relative z-10">
                                    <p className="text-[10px] font-semibold uppercase tracking-wider border border-white/10 px-2 py-1 rounded text-text-secondary bg-white/5 inline-block">
                                        {p.sub}
                                    </p>
                                    <h3 className="text-base font-semibold text-white leading-tight line-clamp-1">{p.title}</h3>
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
