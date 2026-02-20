import React from 'react';
import { motion } from 'framer-motion';
import { FaCoins } from 'react-icons/fa6';
import collectionData from '../../data/collection.json';

const Collection = () => {
    return (
        <div className="space-y-10">

            {/* ── Header ── */}
            <header className="flex items-center gap-5">
                <div className="p-3.5 rounded-2xl text-accent-pink text-3xl border border-white/10 shadow-glow-pink flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(168,85,247,0.10))' }}>
                    <FaCoins />
                </div>
                <div>
                    <h2 className="text-4xl lg:text-5xl font-black pb-1"
                        style={{ background: 'linear-gradient(135deg, #fff 0%, #22d3ee 40%, #a855f7 70%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Collection
                    </h2>
                    <div className="w-24 h-[3px] rounded-full"
                        style={{ background: 'linear-gradient(to right, #06b6d4, #6366f1, #a855f7, #ec4899)' }} />
                </div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                {collectionData.length === 0 ? (
                    <div className="col-span-full text-center py-24 text-text-muted">
                        <p className="text-5xl mb-4">💰</p>
                        <p className="text-lg font-bold">Collection is empty</p>
                        <p className="text-sm mt-1">Items will appear here soon.</p>
                    </div>
                ) : collectionData.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
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
                        {/* Shimmer overlay */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"
                            style={{ background: 'linear-gradient(to right, #06b6d4, #6366f1, #a855f7, #ec4899)' }} />

                        <div className="aspect-video overflow-hidden relative">
                            <img
                                src={item.img}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-70 group-hover:opacity-100 scale-100 group-hover:scale-110"
                                alt={item.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#06050f] via-transparent to-transparent opacity-60" />
                        </div>
                        <div className="p-6 relative z-10">
                            <h3 className="text-lg font-black text-white group-hover:text-glow transition-all">{item.title}</h3>
                            <p className="text-text-secondary text-sm font-medium mt-1">{item.sub}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Collection;
