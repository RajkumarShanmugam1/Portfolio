import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaAward } from 'react-icons/fa';
import achievementsData from '../../data/achievements.json';

const innerCard = {
  background: 'rgba(255,255,255,0.65)',
  border: '1px solid rgba(0,0,0,0.07)',
};

const Achievements = () => (
  <article className="glass p-8 pt-6 lg:p-12 lg:pt-8 rounded-3xl space-y-10 animate-fadeIn relative">
    <header className="flex items-center gap-5 border-b pb-6" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
      <div className="p-3 rounded-xl text-accent-blue text-2xl flex-shrink-0"
        style={{ background: 'rgba(0,122,255,0.15)' }}>
        <FaAward />
      </div>
      <h2 className="text-3xl lg:text-4xl font-medium text-text-primary tracking-tight">Achievements</h2>
    </header>

    <motion.ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" layout>
      <AnimatePresence>
        {achievementsData.length === 0 ? (
          <li className="col-span-full text-center py-24 text-text-muted">
            <p className="text-5xl mb-4">🏆</p>
            <p className="text-lg font-medium text-text-secondary">No achievements yet</p>
            <p className="text-sm mt-1">Check back soon!</p>
          </li>
        ) : achievementsData.map((p, i) => (
          <motion.li key={p.title + p.cat} layout
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative group overflow-hidden rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1"
            style={innerCard}>
            <a href={p.href} target="_blank" rel="noreferrer" className="block w-full">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={p.img} alt={p.title} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                  style={{ background: 'rgba(0,0,0,0.3)' }}>
                  <div className="w-12 h-12 flex items-center justify-center text-white bg-accent-blue rounded-full scale-50 group-hover:scale-100 transition-transform duration-300">
                    <FaEye size={20} />
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-2">
                <p className="text-[10px] font-medium uppercase tracking-wider px-2 py-1 rounded text-text-muted inline-block"
                  style={{ background: 'rgba(0,0,0,0.05)' }}>
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

export default Achievements;
