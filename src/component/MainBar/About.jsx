import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldHalved, FaTerminal, FaCircleInfo } from 'react-icons/fa6';
import { FaReact, FaPython, FaLinux, FaDocker, FaGitAlt, FaFilePdf } from 'react-icons/fa';
import { SiWireshark } from 'react-icons/si';
import aboutData from '../../data/about.json';
import profileData from '../../data/profile.json';

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
  <article className="glass p-8 pt-6 lg:p-12 lg:pt-8 rounded-4xl space-y-10 animate-fadeIn relative">
    {/* ── Realistic Nebula Background ── */}
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60 overflow-hidden rounded-4xl">
      <div className="absolute top-[-15%] right-[-15%] w-[70%] h-[60%] bg-[#4c1d95]/20 rounded-full blur-[110px] animate-nebula-flux" />
      <div className="absolute bottom-[-15%] left-[-15%] w-[60%] h-[50%] bg-[#0891b2]/15 rounded-full blur-[90px] animate-nebula-flux-slow" />
      <div className="absolute top-[20%] left-[30%] w-[45%] h-[35%] bg-[#be185d]/10 rounded-full blur-[100px] animate-pulse" />
    </div>

    {/* Ambient corner glows */}
    <div className="absolute top-0 right-0 w-[500px] h-[400px] -z-10 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at top right, rgba(168,85,247,0.08) 0%, transparent 70%)' }} />
    <div className="absolute bottom-0 left-0 w-[400px] h-[300px] -z-10 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at bottom left, rgba(6,182,212,0.07) 0%, transparent 70%)' }} />

    {/* ── Header ── */}
    <header className="flex items-center gap-5">
      <div
        className="p-3.5 rounded-2xl text-accent-cyan text-3xl border border-white/10 shadow-glow-blue flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(168,85,247,0.10))' }}
      >
        <FaCircleInfo />
      </div>
      <div>
        <h2 className="text-4xl lg:text-5xl font-black pb-1"
          style={{ background: 'linear-gradient(135deg, #fff 0%, #22d3ee 40%, #a855f7 70%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          About me
        </h2>
        <div className="w-24 h-[3px] rounded-full"
          style={{ background: 'linear-gradient(to right, #06b6d4, #6366f1, #a855f7, #ec4899)' }} />
      </div>
    </header>

    {/* ── Bio ── */}
    <section className="space-y-5 text-text-secondary text-[1.05rem] leading-relaxed max-w-4xl">
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
            className="p-7 rounded-3xl bg-white/[0.07] border transition-all duration-500 group relative overflow-hidden active:scale-[0.98]"
            style={{
              borderColor: accent.border,
              boxShadow: accent.shadow,
              outline: '0.5px solid rgba(255,255,255,0.05)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.backgroundImage = 'linear-gradient(#111, #111), linear-gradient(135deg, #06b6d4, #a855f7, #ec4899)';
              e.currentTarget.style.backgroundOrigin = 'border-box';
              e.currentTarget.style.backgroundClip = 'padding-box, border-box';
              e.currentTarget.style.borderWidth = '1.5px';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = accent.border;
              e.currentTarget.style.backgroundImage = 'none';
              e.currentTarget.style.borderWidth = '';
            }}
          >
            {/* Hover shimmer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.04), rgba(168,85,247,0.04), rgba(236,72,153,0.03))' }} />
            <div className="flex items-start gap-5 relative z-10">
              <div
                className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-2xl border border-white/5 text-2xl group-hover:scale-110 transition-transform duration-300"
                style={{ background: accent.iconBg, color: accent.iconColor }}
              >
                {iconMap[service.iconType]}
              </div>
              <div>
                <h4 className="text-lg font-black text-white mb-1.5 tracking-tight group-hover:text-glow transition-all">{service.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{service.text}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* ── Tech Stack ── */}
    <section className="pt-2">
      <h3 className="text-xl font-black text-white mb-6 flex items-center gap-3">
        <div className="w-10 h-[3px] rounded-full" style={{ background: 'linear-gradient(to right, #06b6d4, #a855f7)' }} />
        Tech Stack
        <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(168,85,247,0.2), transparent)' }} />
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {aboutData.techStack.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={i * 0.05 + 4}
            className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-2xl text-text-secondary font-bold hover:border-accent-cyan/40 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300 cursor-default active:scale-95 group"
          >
            <span className={`text-xl ${s.color} group-hover:scale-110 transition-transform`}>{iconMap[s.iconType]}</span>
            <span className="text-sm">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* ── Resume CTA ── */}
    <section className="pt-4 flex justify-center border-t border-white/[0.06]">
      <motion.a
        href={profileData.cvLink || '#'}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={8}
        className="btn-primary flex items-center gap-3 py-4 px-12 group"
      >
        <FaFilePdf size={18} className="group-hover:rotate-12 transition-transform" />
        <span className="text-sm">Download My Full Resume</span>
      </motion.a>
    </section>
  </article>
);

export default About;
