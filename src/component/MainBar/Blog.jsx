import React from 'react';
import { motion } from 'framer-motion';
import { FaRss } from 'react-icons/fa';
import blogData from '../../data/blog.json';

const Blog = () => (
    <article className="glass p-8 pt-6 lg:p-12 lg:pt-8 rounded-4xl space-y-10 animate-fadeIn relative">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-80 -z-10 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at top right, rgba(6,182,212,0.08) 0%, transparent 70%)' }} />

        {/* ── Header ── */}
        <header className="flex items-center gap-5">
            <div className="p-3.5 rounded-2xl text-accent-cyan text-3xl border border-white/10 shadow-glow-blue flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(99,102,241,0.10))' }}>
                <FaRss />
            </div>
            <div>
                <h2 className="text-4xl lg:text-5xl font-black pb-1"
                    style={{ background: 'linear-gradient(135deg, #fff 0%, #22d3ee 40%, #a855f7 70%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Blog
                </h2>
                <div className="w-16 h-[3px] rounded-full"
                    style={{ background: 'linear-gradient(to right, #06b6d4, #6366f1, #a855f7, #ec4899)' }} />
            </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.length === 0 ? (
                <div className="col-span-full text-center py-24 text-text-muted">
                    <p className="text-5xl mb-4">✍️</p>
                    <p className="text-lg font-bold">No blog posts yet</p>
                    <p className="text-sm mt-1">Articles will be published soon.</p>
                </div>
            ) : blogData.map((post, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group relative flex flex-col bg-white/[0.03] border border-white/[0.08] rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                    style={{ '--hover-shadow': '0 0 35px rgba(6,182,212,0.2)' }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 35px rgba(6,182,212,0.2)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >
                    {/* Gradient top accent */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: 'linear-gradient(to right, #06b6d4, #6366f1, #a855f7, #ec4899)' }} />

                    <a href={post.href} target="_blank" rel="noreferrer" className="block h-full">
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src={post.img}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                alt={post.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#06050f] via-[#06050f]/30 to-transparent" />
                            <div className="absolute top-4 left-4 px-3 py-1 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10"
                                style={{ background: 'rgba(6,182,212,0.15)', color: '#22d3ee' }}>
                                {post.category}
                            </div>
                        </div>
                        <div className="p-6 space-y-3">
                            <time className="text-[10px] font-bold text-text-muted uppercase tracking-wider">{post.date}</time>
                            <h3 className="text-lg font-black text-text-primary leading-tight group-hover:text-accent-cyan transition-colors">{post.title}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">{post.text}</p>
                        </div>
                    </a>
                </motion.div>
            ))}
        </div>
    </article>
);

export default Blog;
