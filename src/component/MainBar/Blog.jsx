import React from 'react';
import { motion } from 'framer-motion';
import { FaRss } from 'react-icons/fa';
import blogData from '../../data/blog.json';

const Blog = () => (
    <article className="glass p-8 pt-6 lg:p-12 lg:pt-8 rounded-3xl space-y-10 animate-fadeIn relative">
        {/* ── Header ── */}
        <header className="flex items-center gap-5 border-b border-white/10 pb-6">
            <div className="p-3 rounded-xl text-accent-blue text-2xl bg-white/5 border border-white/10 flex-shrink-0">
                <FaRss />
            </div>
            <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    Blog
                </h2>
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
                    className="group relative flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                >
                    <a href={post.href} target="_blank" rel="noreferrer" className="block h-full">
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src={post.img}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                alt={post.title}
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                            <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-md text-[10px] font-semibold uppercase tracking-widest border border-white/10 text-white">
                                {post.category}
                            </div>
                        </div>
                        <div className="p-6 space-y-3">
                            <time className="text-xs font-semibold text-text-muted uppercase tracking-wider">{post.date}</time>
                            <h3 className="text-lg font-semibold text-text-primary leading-tight group-hover:text-accent-blue transition-colors">{post.title}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">{post.text}</p>
                        </div>
                    </a>
                </motion.div>
            ))}
        </div>
    </article>
);

export default Blog;
