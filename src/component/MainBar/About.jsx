import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldHalved, FaTerminal, FaCircleInfo } from 'react-icons/fa6';
import { FaReact, FaPython, FaLinux, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiWireshark } from 'react-icons/si';
import aboutData from '../../data/about.json';


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  }),
};

const iconMap = {
  FaShieldAlt: <FaShieldHalved />,
  FaReact: <FaReact />,
  FaPython: <FaPython />,
  FaLinux: <FaLinux />,
  SiWireshark: <SiWireshark />,
  FaDocker: <FaDocker />,
  FaGitAlt: <FaGitAlt />,
  FaTerminal: <FaTerminal />,
};

/* Tricolor accents for service cards — use inline styles not dynamic Tailwind classes */
const cardAccents = [
  { border: 'rgba(6,182,212,0.25)', shadow: '0 0 35px rgba(6,182,212,0.25)', iconColor: '#22d3ee', iconBg: 'linear-gradient(135deg, rgba(6,182,212,0.20), rgba(6,182,212,0.05))' },
  { border: 'rgba(168,85,247,0.25)', shadow: '0 0 35px rgba(168,85,247,0.25)', iconColor: '#c084fc', iconBg: 'linear-gradient(135deg, rgba(168,85,247,0.20), rgba(99,102,241,0.05))' },
  { border: 'rgba(236,72,153,0.25)', shadow: '0 0 35px rgba(236,72,153,0.25)', iconColor: '#f472b6', iconBg: 'linear-gradient(135deg, rgba(236,72,153,0.20), rgba(168,85,247,0.05))' },
  { border: 'rgba(99,102,241,0.25)', shadow: '0 0 35px rgba(99,102,241,0.25)', iconColor: '#818cf8', iconBg: 'linear-gradient(135deg, rgba(99,102,241,0.20), rgba(6,182,212,0.05))' },
];

const About = () => (
  <article className="glass p-8 pt-6 lg:p-12 lg:pt-8 rounded-3xl space-y-10 animate-fadeIn relative">
    
    {/* ── Header ── */}
    <header className="flex items-center gap-5 border-b border-white/10 pb-6">
      <div className="p-3 rounded-xl text-accent-blue text-2xl bg-white/5 border border-white/10 flex-shrink-0">
        <FaCircleInfo />
      </div>
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
          About me
        </h2>
      </div>
    </header>

    {/* ── Bio ── */}
    <section className="space-y-5 text-text-secondary text-base leading-relaxed max-w-4xl">
      {aboutData.bio.map((para, i) => (
        <motion.p key={i} variants={fadeInUp} initial="hidden" animate="visible" custom={i}>
          {para}
        </motion.p>
      ))}
    </section>

    {/* ── Services Grid ── */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
      {aboutData.services.map((service, i) => {
        return (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={i + 2}
            className="p-7 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 relative overflow-hidden group"
          >
            <div className="flex items-start gap-5 relative z-10">
              <div
                className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-black/40 border border-white/10 text-xl text-accent-blue group-hover:scale-105 transition-transform duration-300"
              >
                {iconMap[service.iconType]}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2 tracking-tight transition-colors">{service.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{service.text}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* ── Tech Stack ── */}
    <section className="pt-2">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
        <div className="w-10 h-px bg-accent-blue/50" />
        Tech Stack
        <div className="flex-1 h-px bg-white/10" />
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {aboutData.techStack.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={i * 0.05 + 4}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-text-secondary font-medium hover:border-accent-blue/50 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 cursor-default active:scale-95 group"
          >
            <span className={`text-xl ${s.color} group-hover:scale-110 transition-transform`}>{iconMap[s.iconType]}</span>
            <span className="text-sm">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  </article>
);

export default About;
