import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldHalved, FaTerminal, FaNetworkWired, FaBug } from 'react-icons/fa6';
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
  FaNetworkWired: <FaNetworkWired />,
  FaBug: <FaBug />,
};

/* Apple system colors for service card icons — flat, no glow */
const cardAccents = [
  { iconColor: '#5ac8fa', iconBg: '#f0f9ff' },
  { iconColor: '#af52de', iconBg: '#faf5fd' },
  { iconColor: '#ff2d55', iconBg: '#fff5f7' },
  { iconColor: '#007aff', iconBg: '#f0f7ff' },
];

const About = () => (
  <article className="glass p-8 pt-6 lg:p-12 lg:pt-8 rounded-3xl space-y-10 animate-fadeIn relative">

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
        const accent = cardAccents[i % cardAccents.length];
        return (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={i + 2}
            className="p-7 rounded-2xl bg-[#fafafa] transition-all duration-300 hover:bg-[#f5f5f7] relative overflow-hidden group"
          >
            <div className="flex items-start gap-5 relative z-10">
              <div
                style={{ color: accent.iconColor, background: accent.iconBg }}
                className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl text-xl group-hover:scale-105 transition-transform duration-300"
              >
                {iconMap[service.iconType]}
              </div>
              <div>
                <h4 className="text-lg font-medium text-text-primary mb-2 tracking-tight transition-colors">{service.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{service.text}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* ── Tech Stack ── */}
    <section className="pt-2">
      <h3 className="text-xl font-medium text-text-primary mb-6 flex items-center gap-3">
        <div className="w-10 h-px bg-accent-blue/50" />
        Tech Stack
        <div className="flex-1 h-px bg-black/[0.06]" />
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {aboutData.techStack.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={i * 0.05 + 4}
            className="flex items-center gap-2 px-4 py-2 bg-[#fafafa] rounded-lg text-text-secondary font-medium hover:bg-[#f0f7ff] hover:-translate-y-0.5 transition-all duration-300 cursor-default active:scale-95 group"
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
