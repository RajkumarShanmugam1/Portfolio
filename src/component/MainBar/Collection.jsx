import React from 'react';
import { motion } from 'framer-motion';
import { FaCoins } from 'react-icons/fa6';
import collectionData from '../../data/collection.json';

const Collection = () => {
    return (
        <div className="space-y-10">


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
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                        className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 cursor-pointer"
                    >
                        <div className="aspect-video overflow-hidden relative">
                            <img
                                src={item.img}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-105"
                                alt={item.title}
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        <div className="p-6 relative z-10">
                            <h3 className="text-lg font-semibold text-white transition-all line-clamp-1">{item.title}</h3>
                            <p className="text-text-secondary text-sm mt-1 line-clamp-2">{item.sub}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Collection;
