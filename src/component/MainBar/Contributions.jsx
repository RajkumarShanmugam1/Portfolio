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
                <ul className="flex bg-black/[0.04] p-1 rounded-xl overflow-x-auto max-w-full gap-1">
                    {filters.map(f => (
                        <li key={f.value} className="shrink-0 relative">
                            <button
                                className={`relative px-4 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 whitespace-nowrap uppercase tracking-wider ${active === f.value
                                    ? 'text-text-primary bg-surface shadow-card'
                                    : 'text-text-muted hover:text-text-primary'
                                    }`}
                                onClick={() => setActive(f.value)}
                            >
                                <span className="relative z-10">{f.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <AnimatePresence mode="popLayout">
                    {filtered.length === 0 ? (
                        <li className="col-span-full text-center py-24 text-text-muted">
                            <p className="text-5xl mb-4">🤝</p>
                            <p className="text-lg font-medium">No contributions found</p>
                            <p className="text-sm mt-1">Check back later!</p>
                        </li>
                    ) : filtered.map((p, i) => (
                        <motion.li
                            key={p.title + p.cat}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25, delay: i * 0.02 }}
                            className="relative group overflow-hidden rounded-2xl bg-[#fafafa] transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
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
            </ul>
        </div>
    );
};

export default Contributions;
