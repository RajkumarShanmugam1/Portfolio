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
                                className={`relative px-4 py-1.5 text-[10px] font-black rounded-lg transition-all duration-300 whitespace-nowrap uppercase tracking-wider ${active === f.value
                                    ? 'text-white'
                                    : 'text-text-muted hover:text-white hover:bg-white/[0.07]'
                                    }`}
                                onClick={() => setActive(f.value)}
                            >
                                <span className="relative z-10">{f.label}</span>
                                {active === f.value && (
                                    <motion.div
                                        layoutId="filter-pill"
                                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-cyan via-accent-indigo to-accent-purple opacity-20"
                                        initial={false}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
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
                            className="relative group overflow-hidden rounded-3xl border-[1.5px] border-white/[0.12] bg-white/[0.07] transition-all duration-500 hover:-translate-y-2"
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
                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"
                                style={{ background: 'linear-gradient(to right, #a855f7, #ec4899)' }} />

                            <a href={p.href} target="_blank" rel="noreferrer" className="block w-full">
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img src={p.img} alt={p.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#06050f] via-transparent to-transparent opacity-80" />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                                        <div className="w-12 h-12 flex items-center justify-center text-white rounded-full border border-white/20 scale-50 group-hover:scale-100 transition-transform duration-500"
                                            style={{ background: 'rgba(168,85,247,0.2)', backdropFilter: 'blur(12px)', boxShadow: '0 0 25px rgba(168,85,247,0.4)' }}>
                                            <FaEye size={20} />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 space-y-2 relative z-10">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] border border-white/10 px-3 py-1 rounded-full inline-block"
                                        style={{ color: '#c084fc', background: 'rgba(168,85,247,0.12)' }}>
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

export default Contributions;
