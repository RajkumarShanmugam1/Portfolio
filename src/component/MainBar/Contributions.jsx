import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaHandshakeAngle } from 'react-icons/fa6';
import contributionsData from '../../data/contributions.json';

const ALL = 'all';
const HOF = 'hall of fame';
const ACK = 'acknowledgement';

const filters = [
    { label: 'All', value: ALL },
    { label: 'Hall of Fame', value: HOF },
    { label: 'Acknowledgement', value: ACK },
];

const Contributions = () => {
    const [active, setActive] = useState(ALL);
    const filtered = contributionsData.filter(p => active === ALL || (p.cat && p.cat.toLowerCase() === active.toLowerCase()));
    return (
        <div className="space-y-10">

            {/* ── Filters ── */}
            <div className="flex justify-center md:justify-end pb-2">
                <ul className="flex bg-white/[0.03] p-1 rounded-xl border border-white/[0.07] overflow-x-auto max-w-full shadow-inner gap-1">
                    {filters.map(f => (
                        <li key={f.value} className="shrink-0 relative">
                            <button
                                className={`relative px-4 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300 whitespace-nowrap uppercase tracking-wider ${active === f.value
                                    ? 'text-white bg-white/10'
                                    : 'text-text-muted hover:text-white hover:bg-white/5'
                                    }`}
                                onClick={() => setActive(f.value)}
                            >
                                <span className="relative z-10">{f.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <motion.ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" layout>
                <AnimatePresence>
                    {filtered.length === 0 ? (
                        <li className="col-span-full text-center py-24 text-text-muted">
                            <p className="text-5xl mb-4">🤝</p>
                            <p className="text-lg font-bold">No contributions found</p>
                            <p className="text-sm mt-1">Check back later!</p>
                        </li>
                    ) : filtered.map((p, i) => (
                        <motion.li
                            key={p.title + p.cat}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
                            className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20"
                        >
                            <a href={p.href} target="_blank" rel="noreferrer" className="block w-full">
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img src={p.img} alt={p.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />

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

export default Contributions;
