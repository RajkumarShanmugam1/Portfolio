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
                        <p className="text-lg font-medium">Collection is empty</p>
                        <p className="text-sm mt-1">Items will appear here soon.</p>
                    </div>
                ) : collectionData.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                        className="relative group overflow-hidden rounded-2xl bg-[#fafafa] transition-all duration-300 hover:-translate-y-1 hover:shadow-card cursor-pointer"
                    >
                        <div className="aspect-video overflow-hidden relative">
                            <img
                                src={item.img}
                                loading="lazy"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                alt={item.title}
                            />
                        </div>
                        <div className="p-6 relative z-10">
                            <h3 className="text-lg font-medium text-text-primary transition-all line-clamp-1">{item.title}</h3>
                            <p className="text-text-secondary text-sm mt-1 line-clamp-2">{item.sub}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Collection;
