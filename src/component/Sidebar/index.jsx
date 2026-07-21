import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { FaEnvelope, FaFilePdf, FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCredly } from 'react-icons/si';
import { FaMedium } from 'react-icons/fa6';
import profileData from '../../data/profile.json';
import resumePdf from '../../assets/Rajkumar_Shanmugam.pdf';

const socialIcons = {
  GitHub:   { icon: <FaGithub />,   bg: 'linear-gradient(145deg,#333,#111)',     shadow: 'rgba(0,0,0,0.35)' },
  LinkedIn: { icon: <FaLinkedin />, bg: 'linear-gradient(145deg,#0a66c2,#004a93)', shadow: 'rgba(10,102,194,0.4)' },
  Medium:   { icon: <FaMedium />,   bg: 'linear-gradient(145deg,#242424,#000)',   shadow: 'rgba(0,0,0,0.35)' },
  Credly:   { icon: <SiCredly />,   bg: 'linear-gradient(145deg,#ff6b00,#d44f00)', shadow: 'rgba(255,107,0,0.4)' },
};

const row = {
  background: 'rgba(255,255,255,0.65)',
  border: '1px solid rgba(0,0,0,0.07)',
};

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className="w-full lg:w-[300px] lg:sticky lg:top-4 self-start flex-shrink-0">
      <div className="glass min-h-0 rounded-3xl overflow-hidden">

        {/* ── Profile ── */}
        <header className="flex flex-row lg:flex-col items-center text-left lg:text-center gap-5 lg:gap-4 p-6 lg:p-8 pb-4 lg:pb-6">
          <div className="relative shrink-0 group">
            {/* Gradient ring */}
            <div className="rounded-full p-[3px] transition-all duration-500 group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #60a5fa, #6366f1)',
                boxShadow: '0 0 0 0 rgba(99,102,241,0.4)',
                animation: 'profileGlow 3s ease-in-out infinite',
              }}>
              {/* White gap between ring and photo */}
              <div className="rounded-full p-[3px] bg-white">
                <div className="overflow-hidden rounded-full w-20 h-20 lg:w-32 lg:h-32">
                  <img src={profileData.avatar} alt={profileData.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 lg:flex-none flex flex-col justify-center lg:items-center min-w-0">
            <h1 className="text-xl lg:text-2xl font-medium text-text-primary mb-1 lg:mb-2 tracking-tight leading-snug truncate lg:whitespace-normal">
              {profileData.name}
            </h1>
            <div className="flex justify-start lg:justify-center min-h-[1.5rem] items-center font-mono font-medium text-[10px] tracking-widest uppercase text-accent-cyan">
              <Typewriter options={{ strings: profileData.status, autoStart: true, loop: true, delay: 60, deleteSpeed: 40 }} />
            </div>
            <button
              className="lg:hidden flex items-center gap-1.5 mt-3 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-accent-blue rounded-lg active:scale-95 transition-all self-start"
              style={{ background: 'rgba(0,122,255,0.15)', border: '1px solid rgba(0,122,255,0.25)' }}
              onClick={() => setIsExpanded(v => !v)}
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? 'Hide' : 'Show'} contact details</span>
              {isExpanded ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
            </button>
          </div>
        </header>

        {/* ── Info ── */}
        <div className={`${isExpanded ? 'block' : 'hidden'} lg:block px-6 lg:px-8 pb-6 lg:pb-8 space-y-5`}>
          <div className="h-px" style={{ background: 'rgba(0,0,0,0.07)' }} />

          <ul className="space-y-3">
            {[{ icon: <FaEnvelope />, title: 'Email', value: profileData.email }].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 p-3 rounded-xl transition-all group" style={row}>
                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-[9px] text-white text-sm transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(145deg,#3a8eff,#0055d4)', boxShadow: '0 2px 8px rgba(0,122,255,0.4), 0 1px 0 rgba(255,255,255,0.2) inset' }}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-medium text-text-muted uppercase tracking-wider mb-0.5">{item.title}</p>
                  <p className="text-text-primary text-xs font-medium break-all leading-snug">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-2.5">
            {profileData.social.filter(sc => sc.type === 'icon').map((social, idx) => {
              const si = socialIcons[social.name] ?? { icon: null, bg: '#555', shadow: 'rgba(0,0,0,0.25)' };
              return (
                <a key={idx} href={social.url} target="_blank" rel="noreferrer" aria-label={social.name}
                  className="w-10 h-10 flex items-center justify-center rounded-[11px] text-white text-lg hover:-translate-y-1 hover:scale-110 transition-all duration-200"
                  style={{
                    background: si.bg,
                    boxShadow: '0 3px 10px ' + si.shadow + ', 0 1px 0 rgba(255,255,255,0.2) inset',
                  }}>
                  {si.icon}
                </a>
              );
            })}
          </div>

          <a href={resumePdf} target="_blank" rel="noreferrer"
            className="btn-primary w-full flex items-center justify-center gap-2.5 py-2.5 text-xs">
            <FaFilePdf size={14} />
            <span>View Resume / CV</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
