import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap, FaBriefcase, FaLeaf,
  FaShieldHalved, FaCoins, FaBookOpen, FaFileLines, FaAward
} from 'react-icons/fa6';
import { FaFilePdf } from 'react-icons/fa';
import resumeData from '../../data/resume.json';
import resumePdf from '../../assets/Rajkumar_Shanmugam.pdf';

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

/* Each timeline section has its own Apple system color.
   hoverClass is a full literal class string (not built via interpolation)
   so Tailwind's static scanner can actually find and generate it. */
const sectionAccents = {
  education: { dot: 'bg-accent-cyan', text: 'text-accent-cyan', hoverClass: 'group-hover:text-accent-cyan', icon: <FaGraduationCap />, bg: 'linear-gradient(145deg,#5ac8fa,#007aab)', shadow: 'rgba(90,200,250,0.4)' },
  experience: { dot: 'bg-accent-purple', text: 'text-accent-purple', hoverClass: 'group-hover:text-accent-purple', icon: <FaBriefcase />, bg: 'linear-gradient(145deg,#bf5af2,#7d2fe6)', shadow: 'rgba(175,82,222,0.4)' },
  hobbies: { dot: 'bg-accent-pink', text: 'text-accent-pink', hoverClass: 'group-hover:text-accent-pink', icon: <FaLeaf />, bg: 'linear-gradient(145deg,#ff6b8a,#e01040)', shadow: 'rgba(255,45,85,0.4)' },
};

const SectionHeader = ({ accent, label }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="p-2.5 rounded-xl text-white text-xl flex-shrink-0"
      style={{ background: accent.bg, boxShadow: '0 3px 10px ' + accent.shadow + ', 0 1px 0 rgba(255,255,255,0.2) inset' }}>
      {accent.icon}
    </div>
    <div>
      <h3 className="text-base font-medium text-text-primary tracking-tight uppercase">{label}</h3>
    </div>
  </div>
);

const Resume = () => (
  <article className="glass p-8 pt-6 lg:p-12 lg:pt-8 rounded-3xl space-y-10 animate-fadeIn relative">

    {/* ── Header ── */}
    <header className="flex items-center justify-between border-b pb-6" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
      <div className="flex items-center gap-5">
        <div className="p-3 rounded-xl text-white text-2xl flex-shrink-0"
          style={{ background: 'linear-gradient(145deg,#3a8eff,#0055d4)', boxShadow: '0 3px 10px rgba(0,122,255,0.4), 0 1px 0 rgba(255,255,255,0.2) inset' }}>
          <FaFileLines />
        </div>
        <h2 className="text-3xl lg:text-4xl font-medium text-text-primary tracking-tight">
          Resume
        </h2>
      </div>
      <a
        href={resumePdf}
        target="_blank"
        rel="noreferrer"
        className="btn-primary flex items-center gap-2.5 text-sm"
      >
        <FaFilePdf size={14} />
        <span className="hidden sm:inline">View CV</span>
      </a>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 pt-2">

      <section>
        <SectionHeader accent={sectionAccents.education} label="Education" />
        <div className="relative pl-8 space-y-10">
          {/* Animated line — scaleY from top, avoids % height issue on mobile */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 top-2 bottom-0 w-[2px] bg-black/[0.12]"
            style={{ transformOrigin: 'top' }}
          />
          {resumeData.education.map((item, i) => (
            <motion.div key={i} variants={fadeInUp(i)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="relative group cursor-default">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                className={`absolute -left-[37px] top-1.5 w-3 h-3 rounded-full ${sectionAccents.education.dot} border-2 border-white z-10`}
              />
              <h4 className={`text-base font-medium text-text-primary ${sectionAccents.education.hoverClass} transition-colors`}>
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
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 top-2 bottom-0 w-[2px] bg-black/[0.12]"
            style={{ transformOrigin: 'top' }}
          />
          {resumeData.experience.map((item, i) => (
            <motion.div key={i} variants={fadeInUp(i)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="relative group cursor-default">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                className={`absolute -left-[37px] top-1.5 w-3 h-3 rounded-full ${sectionAccents.experience.dot} border-2 border-white z-10`}
              />
              <h4 className={`text-base font-medium text-text-primary ${sectionAccents.experience.hoverClass} transition-colors`}>
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
        <div className="relative border-l-2 border-black/[0.06] pl-8 space-y-10">
          {resumeData.certificates.map((item, i) => (
            <motion.div key={i} variants={fadeInUp(i)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative group">
              <div className={`absolute -left-[37px] top-1.5 w-3 h-3 rounded-full ${sectionAccents.education.dot} border-2 border-white z-10`} />
              <div className="flex items-center gap-3">
                <span className={`${sectionAccents.education.text} text-xl group-hover:scale-110 transition-transform`}>{hobbyIcons[item.icon] || <FaAward />}</span>
                {item.href && item.href !== '#' ? (
                  <a href={item.href} target="_blank" rel="noreferrer"
                    className="text-base font-medium text-text-primary uppercase tracking-tight hover:text-accent-blue transition-colors">
                    {item.title}
                  </a>
                ) : (
                  <h4 className="text-base font-medium text-text-primary uppercase tracking-tight">{item.title}</h4>
                )}
              </div>
              <p className="text-text-secondary font-medium mt-1 text-sm">{item.issuer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section>
        <SectionHeader accent={sectionAccents.hobbies} label="Hobbies" />
        <div className="relative border-l-2 border-black/[0.06] pl-8 space-y-10">
          {resumeData.hobbies.map((item, i) => (
            <motion.div key={i} variants={fadeInUp(i)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative group cursor-default">
              <div className={`absolute -left-[37px] top-1.5 w-3 h-3 rounded-full ${sectionAccents.hobbies.dot} border-2 border-white z-10`} />
              <div className="flex items-center gap-3">
                <span className={`${sectionAccents.hobbies.text} text-xl group-hover:scale-110 transition-transform`}>{hobbyIcons[item.icon]}</span>
                <h4 className="text-base font-medium text-text-primary uppercase tracking-tight transition-all">{item.title}</h4>
              </div>
              <p className="text-text-secondary font-medium mt-1 text-sm">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills — full width so it doesn't sit alone beside an empty column */}
      <section className="md:col-span-2">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-2.5 rounded-xl text-white text-xl flex-shrink-0"
            style={{ background: 'linear-gradient(145deg,#bf5af2,#7d2fe6)', boxShadow: '0 3px 10px rgba(175,82,222,0.4), 0 1px 0 rgba(255,255,255,0.2) inset' }}>
            <div className="w-5 h-5 rounded-sm bg-white/80" />
          </div>
          <div>
            <h3 className="text-base font-medium text-text-primary tracking-tight uppercase">Technical Skills</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 gap-x-16">
          {resumeData.skills.map((s, i) => (
            <motion.div key={i} variants={fadeInUp(i)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-2 group">
              <div className="flex justify-between items-end px-1">
                <h5 className="font-medium text-text-primary tracking-tight flex items-center gap-3 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  {s.label}
                </h5>
                <span className="font-medium text-xs font-mono tracking-tighter text-accent-cyan">
                  {s.value}%
                </span>
              </div>
              <div className="h-1.5 bg-black/[0.07] rounded-full overflow-hidden">
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
