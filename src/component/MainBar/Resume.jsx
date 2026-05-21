import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap, FaBriefcase, FaLeaf,
  FaShieldHalved, FaCoins, FaBookOpen, FaFileLines
} from 'react-icons/fa6';
import { FaFilePdf } from 'react-icons/fa';
import resumeData from '../../data/resume.json';

const fadeInUp = (i) => ({
  hidden: { opacity: 0, x: -25, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    },
  },
});

const hobbyIcons = {
  shield: <FaShieldHalved />,
  coins: <FaCoins />,
  book: <FaBookOpen />
};

/* Each timeline section has its own accent color */
const sectionAccents = {
  education: { color: '#06b6d4', dot: 'bg-accent-cyan', glow: 'shadow-glow-blue', text: 'text-accent-cyan', icon: <FaGraduationCap />, border: 'border-accent-blue/20', bg: 'bg-accent-blue/10' },
  experience: { color: '#a855f7', dot: 'bg-accent-purple', glow: 'shadow-glow-purple', text: 'text-accent-purple', icon: <FaBriefcase />, border: 'border-accent-purple/20', bg: 'bg-accent-purple/10' },
  hobbies: { color: '#ec4899', dot: 'bg-accent-pink', glow: 'shadow-glow-pink', text: 'text-accent-pink', icon: <FaLeaf />, border: 'border-accent-pink/20', bg: 'bg-accent-pink/10' },
};

const SectionHeader = ({ accent, label }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className={`p-3 ${accent.bg} rounded-2xl ${accent.text} text-2xl border ${accent.border} ${accent.glow}`}>
      {accent.icon}
    </div>
    <div>
      <h3 className="text-xl font-black text-white tracking-tight uppercase">{label}</h3>
      <div className="w-12 h-[2px] mt-1 rounded-full" style={{ background: `linear-gradient(to right, ${accent.color}, transparent)` }} />
    </div>
  </div>
);

const Resume = () => (
  <article className="glass p-8 pt-6 lg:p-12 lg:pt-8 rounded-4xl space-y-10 animate-fadeIn relative">
    {/* Ambient glows */}
    <div className="absolute top-0 right-0 w-[500px] h-[400px] -z-10 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at top right, rgba(168,85,247,0.08) 0%, transparent 70%)' }} />
    <div className="absolute bottom-40 left-0 w-[400px] h-[400px] -z-10 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at bottom left, rgba(6,182,212,0.06) 0%, transparent 70%)' }} />

    {/* ── Header ── */}
    <header className="flex items-center gap-5">
      <div className="p-3.5 rounded-2xl text-accent-cyan text-3xl border border-white/10 shadow-glow-blue flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(168,85,247,0.10))' }}>
        <FaFilePdf />
      </div>
      <div>
        <h2 className="text-4xl lg:text-5xl font-black pb-1"
          style={{ background: 'linear-gradient(135deg, #fff 0%, #22d3ee 40%, #a855f7 70%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Resume
        </h2>
        <div className="w-24 h-[3px] rounded-full"
          style={{ background: 'linear-gradient(to right, #06b6d4, #6366f1, #a855f7, #ec4899)' }} />
      </div>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 pt-2">

      <section>
        <SectionHeader accent={sectionAccents.education} label="Education" />
        <div className="relative pl-8 space-y-10">
          {/* Animated line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 top-2 w-[2px] bg-white/[0.08]"
          />
          {resumeData.education.map((item, i) => (
            <motion.div key={i} variants={fadeInUp(i)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="relative group cursor-default">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                className={`absolute -left-[41px] top-1.5 w-4 h-4 rounded-full ${sectionAccents.education.dot} border-4 border-[#06050f] ${sectionAccents.education.glow} z-10 group-hover:scale-125 transition-transform duration-300`}
              />
              <h4 className={`text-base font-black text-text-primary group-hover:${sectionAccents.education.text} transition-colors`}>
                {item.href ? <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a> : item.title}
              </h4>
              <p className={`${sectionAccents.education.text} font-black text-[10px] uppercase tracking-widest mt-1 opacity-80`}>{item.span}</p>
              <p className="text-text-secondary font-bold mt-1 text-sm">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader accent={sectionAccents.experience} label="Experience" />
        <div className="relative pl-8 space-y-10">
          {/* Animated line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 top-2 w-[2px] bg-white/[0.08]"
          />
          {resumeData.experience.map((item, i) => (
            <motion.div key={i} variants={fadeInUp(i)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="relative group cursor-default">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                className={`absolute -left-[41px] top-1.5 w-4 h-4 rounded-full ${sectionAccents.experience.dot} border-4 border-[#06050f] ${sectionAccents.experience.glow} z-10 group-hover:scale-125 transition-transform duration-300`}
              />
              <h4 className={`text-base font-black text-text-primary group-hover:${sectionAccents.experience.text} transition-colors`}>
                {item.href ? <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a> : item.title}
              </h4>
              <p className={`${sectionAccents.experience.text} font-black text-[10px] uppercase tracking-widest mt-1 opacity-80`}>{item.span}</p>
              <div className="text-text-secondary font-bold mt-1">
                <p className="text-sm">{item.sub}</p>
                <p className="text-xs text-text-muted italic mt-1 font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section>
        <SectionHeader accent={sectionAccents.hobbies} label="Hobbies" />
        <div className="relative border-l-2 border-white/[0.06] pl-8 space-y-10">
          {resumeData.hobbies.map((item, i) => (
            <motion.div key={i} variants={fadeInUp(i)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative group cursor-default">
              <div className={`absolute -left-[41px] top-1.5 w-4 h-4 rounded-full ${sectionAccents.hobbies.dot} border-4 border-[#06050f] ${sectionAccents.hobbies.glow} z-10 group-hover:scale-125 transition-transform duration-300`} />
              <div className="flex items-center gap-3">
                <span className={`${sectionAccents.hobbies.text} text-xl group-hover:scale-110 transition-transform`}>{hobbyIcons[item.icon]}</span>
                <h4 className="text-base font-black text-white uppercase tracking-tight group-hover:text-glow transition-all">{item.title}</h4>
              </div>
              <p className="text-text-secondary font-medium mt-1 text-sm">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-2xl border border-white/10 shadow-glow-purple"
            style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.10))' }}>
            <div className="w-6 h-6 rounded animate-pulse"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #6366f1, #a855f7)' }} />
          </div>
          <div>
            <h3 className="text-xl font-black text-white tracking-tight uppercase">Technical Skills</h3>
            <div className="w-12 h-[2px] mt-1 rounded-full"
              style={{ background: 'linear-gradient(to right, #a855f7, transparent)' }} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7">
          {resumeData.skills.map((s, i) => (
            <motion.div key={i} variants={fadeInUp(i)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-2.5 group">
              <div className="flex justify-between items-end px-1">
                <h5 className="font-bold text-text-primary tracking-tight flex items-center gap-3 group-hover:text-white transition-colors">
                  <div className="w-2 h-2 rounded-full shadow-glow-blue"
                    style={{ background: 'linear-gradient(135deg, #06b6d4, #a855f7)' }} />
                  {s.label}
                </h5>
                <span className="font-black text-[11px] font-mono tracking-tighter group-hover:text-glow transition-all"
                  style={{ background: 'linear-gradient(to right, #22d3ee, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {s.value}%
                </span>
              </div>
              <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden border border-white/5 shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.value}%` }}
                  transition={{ duration: 1.5, ease: 'circOut', delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`h-full rounded-full bg-gradient-to-r ${s.color} shadow-glow-purple/30 relative`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  </article>
);

export default Resume;
