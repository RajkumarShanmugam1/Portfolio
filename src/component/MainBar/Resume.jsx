import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap, FaBriefcase, FaLeaf,
  FaShieldHalved, FaCoins, FaBookOpen, FaFileLines, FaAward
} from 'react-icons/fa6';
import { FaFilePdf } from 'react-icons/fa';
import resumeData from '../../data/resume.json';
import resumePdf from '../../assets/Resume_Security_engineer.pdf';

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
    <div className={`p-2.5 rounded-xl border border-white/10 bg-white/5 ${accent.text} text-xl`}>
      {accent.icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-white tracking-tight uppercase">{label}</h3>
    </div>
  </div>
);

const Resume = () => (
  <article className="glass p-8 pt-6 lg:p-12 lg:pt-8 rounded-3xl space-y-10 animate-fadeIn relative">

    {/* ── Header ── */}
    <header className="flex items-center justify-between border-b border-white/10 pb-6">
      <div className="flex items-center gap-5">
        <div className="p-3 rounded-xl text-accent-blue text-2xl bg-white/5 border border-white/10 flex-shrink-0">
          <FaFileLines />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
          Resume
        </h2>
      </div>
      <a
        href={resumePdf}
        download="Rajkumar_Resume.pdf"
        className="btn-primary flex items-center gap-2.5 text-sm"
      >
        <FaFilePdf size={14} />
        <span className="hidden sm:inline">Download CV</span>
      </a>
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
                className={`absolute -left-[37px] top-1.5 w-3 h-3 rounded-full ${sectionAccents.education.dot} border-2 border-[#000000] z-10`}
              />
              <h4 className={`text-base font-semibold text-text-primary group-hover:${sectionAccents.education.text} transition-colors`}>
                {item.href ? <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a> : item.title}
              </h4>
              <p className={`${sectionAccents.education.text} font-medium text-xs uppercase tracking-wider mt-1 opacity-80`}>{item.span}</p>
              <p className="text-text-secondary font-medium mt-1 text-sm">{item.sub}</p>
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
                className={`absolute -left-[37px] top-1.5 w-3 h-3 rounded-full ${sectionAccents.experience.dot} border-2 border-[#000000] z-10`}
              />
              <h4 className={`text-base font-semibold text-text-primary group-hover:${sectionAccents.experience.text} transition-colors`}>
                {item.href ? <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a> : item.title}
              </h4>
              <p className={`${sectionAccents.experience.text} font-medium text-xs uppercase tracking-wider mt-1 opacity-80`}>{item.span}</p>
              <div className="text-text-secondary font-medium mt-1">
                <p className="text-sm">{item.sub}</p>
                <p className="text-xs text-text-muted mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section>
        <SectionHeader accent={sectionAccents.education} label="Certificates" />
        <div className="relative border-l-2 border-white/[0.06] pl-8 space-y-10">
          {resumeData.certificates.map((item, i) => (
            <motion.div key={i} variants={fadeInUp(i)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative group cursor-default">
              <div className={`absolute -left-[37px] top-1.5 w-3 h-3 rounded-full ${sectionAccents.education.dot} border-2 border-[#000000] z-10`} />
              <div className="flex items-center gap-3">
                <span className={`${sectionAccents.education.text} text-xl group-hover:scale-110 transition-transform`}>{hobbyIcons[item.icon] || <FaAward />}</span>
                <h4 className="text-base font-semibold text-white uppercase tracking-tight transition-all">{item.title}</h4>
              </div>
              <p className="text-text-secondary font-medium mt-1 text-sm">{item.issuer}</p>
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
              <div className={`absolute -left-[37px] top-1.5 w-3 h-3 rounded-full ${sectionAccents.hobbies.dot} border-2 border-[#000000] z-10`} />
              <div className="flex items-center gap-3">
                <span className={`${sectionAccents.hobbies.text} text-xl group-hover:scale-110 transition-transform`}>{hobbyIcons[item.icon]}</span>
                <h4 className="text-base font-semibold text-white uppercase tracking-tight transition-all">{item.title}</h4>
              </div>
              <p className="text-text-secondary font-medium mt-1 text-sm">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-accent-purple text-xl">
            <div className="w-5 h-5 rounded-sm bg-accent-purple" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight uppercase">Technical Skills</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7">
          {resumeData.skills.map((s, i) => (
            <motion.div key={i} variants={fadeInUp(i)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-2 group">
              <div className="flex justify-between items-end px-1">
                <h5 className="font-semibold text-text-primary tracking-tight flex items-center gap-3 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  {s.label}
                </h5>
                <span className="font-semibold text-xs font-mono tracking-tighter text-accent-cyan">
                  {s.value}%
                </span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.value}%` }}
                  transition={{ duration: 1.5, ease: 'circOut', delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  </article>
);

export default Resume;
