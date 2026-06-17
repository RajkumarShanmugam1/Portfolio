import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { FaEnvelope, FaFilePdf, FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCredly } from 'react-icons/si';
import { FaMedium } from 'react-icons/fa6';
import profileData from '../../data/profile.json';
import resumePdf from '../../assets/Resume_Security_engineer.pdf';

const socialIcons = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  Medium: <FaMedium />,
  Credly: <SiCredly />,
};

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className="w-full lg:w-[300px] lg:sticky lg:top-4 self-start flex-shrink-0">
      <div className="glass min-h-0 rounded-3xl overflow-hidden">

        {/* ── Profile ── */}
        <header className="flex flex-row lg:flex-col items-center text-left lg:text-center gap-5 lg:gap-4 p-6 lg:p-8 pb-4 lg:pb-6">
          {/* ── Avatar ── */}
          <div className="relative shrink-0">
            <div className="relative p-1 rounded-full bg-surface shadow-card">
              <div className="relative overflow-hidden rounded-full bg-[#f5f5f7] w-20 h-20 lg:w-32 lg:h-32">
                <img
                  src={profileData.avatar}
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 lg:flex-none flex flex-col justify-center lg:items-center min-w-0">
            <h1 className="text-xl lg:text-2xl font-medium text-text-primary mb-1 lg:mb-2 tracking-tight leading-snug truncate lg:whitespace-normal">
              {profileData.name}
            </h1>

            <div className="flex justify-start lg:justify-center min-h-[1.5rem] items-center font-mono font-medium text-[10px] tracking-widest uppercase text-accent-blue/90">
              <Typewriter
                options={{
                  strings: profileData.status,
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </div>

            {/* Mobile-only toggle for contact details */}
            <button
              className="lg:hidden flex items-center gap-1.5 mt-3 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-accent-blue bg-[#f0f7ff] rounded-lg active:scale-95 transition-all self-start"
              onClick={() => setIsExpanded(v => !v)}
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? 'Hide' : 'Show'} contact details</span>
              {isExpanded ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
            </button>
          </div>
        </header>

        {/* ── Info (always visible on desktop, toggled on mobile) ── */}
        <div className={`${isExpanded ? 'block' : 'hidden'} lg:block px-6 lg:px-8 pb-6 lg:pb-8 space-y-5`}>
          <div className="h-px bg-black/[0.06]" />

          <ul className="space-y-3">
            {[
              { icon: <FaEnvelope />, title: 'Email', value: profileData.email }
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#fafafa] hover:bg-[#f5f5f7] transition-all group">
                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg text-accent-blue bg-[#f0f7ff] text-sm transition-all duration-300 group-hover:scale-105">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-medium text-text-muted uppercase tracking-wider mb-0.5">{item.title}</p>
                  <p className="text-text-primary text-xs font-medium truncate">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-center gap-2.5">
            {profileData.social.filter(s => s.type === 'icon').map((social, idx) => (
              <a key={idx} href={social.url}
                target="_blank" rel="noreferrer"
                aria-label={social.name}
                className="w-10 h-10 flex items-center justify-center bg-[#fafafa] rounded-xl text-text-secondary hover:text-accent-blue hover:bg-[#f0f7ff] hover:-translate-y-1 transition-all duration-300"
              >
                {socialIcons[social.name]}
              </a>
            ))}
          </div>

          <a href={resumePdf}
            download="Rajkumar_Resume.pdf"
            className="btn-primary w-full flex items-center justify-center gap-2.5 py-2.5 text-xs">
            <FaFilePdf size={14} />
            <span>Download Resume / CV</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
