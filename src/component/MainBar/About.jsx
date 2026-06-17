import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldHalved, FaTerminal, FaNetworkWired, FaBug } from 'react-icons/fa6';
import { FaReact, FaPython, FaLinux, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiWireshark } from 'react-icons/si';
import aboutData from '../../data/about.json';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  }),
};

const iconMap = {
  FaShieldAlt: <FaShieldHalved />, FaReact: <FaReact />, FaPython: <FaPython />,
  FaLinux: <FaLinux />, SiWireshark: <SiWireshark />, FaDocker: <FaDocker />,
  FaGitAlt: <FaGitAlt />, FaTerminal: <FaTerminal />, FaNetworkWired: <FaNetworkWired />, FaBug: <FaBug />,
};

const cardAccents = [
  { iconColor: '#5ac8fa', iconBg: 'rgba(90,200,250,0.18)' },
  { iconColor: '#af52de', iconBg: 'rgba(175,82,222,0.15)' },
  { iconColor: '#ff2d55', iconBg: 'rgba(255,45,85,0.15)' },
  { iconColor: '#007aff', iconBg: 'rgba(0,122,255,0.15)' },
];

const innerCard = {
  background: 'rgba(255,255,255,0.65)',
  border: '1px solid rgba(0,0,0,0.07)',
};

const About = () => (
  <article className="glass p-8 pt-6 lg:p-12 lg:pt-8 rounded-3xl space-y-10 animate-fadeIn relative">

    <section className="space-y-5 text-text-secondary text-base leading-relaxed max-w-4xl">
      {aboutData.bio.map((para, i) => (
        <motion.p key={i} variants={fadeInUp} initial="hidden" animate="visible" custom={i}>{para}</motion.p>
      ))}
    </section>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
      {aboutData.services.map((service, i) => {
        const accent = cardAccents[i % cardAccents.length];
        return (
          <motion.div key={i} variants={fadeInUp} initial="hidden" animate="visible" custom={i + 2}
            className="p-7 rounded-2xl relative overflow-hidden group transition-all duration-300"
            style={innerCard}
            whileHover={{ y: -2, background: 'rgba(255,255,255,0.85)' }}>
            <div className="flex items-start gap-5 relative z-10">
              <div style={{ color: accent.iconColor, background: accent.iconBg }}
                className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl text-xl group-hover:scale-105 transition-transform duration-300">
                {iconMap[service.iconType]}
              </div>
              <div>
                <h4 className="text-lg font-medium text-text-primary mb-2 tracking-tight">{service.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{service.text}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>

    <section className="pt-2">
      <h3 className="text-xl font-medium text-text-primary mb-6 flex items-center gap-3">
        <div className="w-10 h-px bg-accent-blue/50" />
        Tech Stack
        <div className="flex-1 h-px" style={{ background: 'rgba(0,0,0,0.08)' }} />
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {aboutData.techStack.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            variants={fadeInUp} initial="hidden" animate="visible" custom={i * 0.05 + 4}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            style={innerCard}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}>
            <span className={`text-xl ${s.color} group-hover:scale-110 transition-transform`}>{iconMap[s.iconType]}</span>
            <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{s.label}</span>
          </motion.a>
        ))}
      </div>
    </section>
  </article>
);

export default About;
