import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaChevronDown, FaChevronUp,
  FaEnvelope, FaCalendarDays, FaAward, FaLocationDot
} from 'react-icons/fa6';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { SiCredly } from 'react-icons/si';
import Typewriter from 'typewriter-effect';
import profileData from '../../data/profile.json';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialIcons = {
    GitHub: <FaGithub />,
    LinkedIn: <FaLinkedin />,
    Medium: <FaMedium />,
    Credly: <SiCredly />,
  };

  const infoItems = [
    { icon: <FaEnvelope />, label: 'Email', value: profileData.email, gradient: 'from-accent-blue/20 to-accent-cyan/10', iconColor: 'text-accent-cyan' },
    { icon: <FaCalendarDays />, label: 'Birthday', value: profileData.birthday, gradient: 'from-accent-indigo/20 to-accent-purple/10', iconColor: 'text-accent-indigo' },
    { icon: <FaLocationDot />, label: 'Location', value: profileData.location, gradient: 'from-accent-purple/20 to-accent-pink/10', iconColor: 'text-accent-purple' }
  ];

  const socialColors = [
    'hover:from-accent-blue hover:to-accent-cyan',
    'hover:from-accent-indigo hover:to-accent-purple',
    'hover:from-accent-purple hover:to-accent-pink',
    'hover:from-accent-pink hover:to-accent-gold',
  ];

  return (
    <aside className="w-full lg:w-[320px] lg:sticky lg:top-8 self-start flex-shrink-0 z-40">
      <div className="glass glass-hover rounded-[2rem] overflow-hidden group">

        {/* ── Profile Header ── */}
        <div className="flex flex-row lg:flex-col items-center gap-3 lg:gap-4 pt-0 lg:pt-1 px-5 lg:px-10 pb-4 lg:pb-5 relative overflow-hidden">
          {/* Ambient top glow */}
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)' }} />

          <div className="relative shrink-0 group/avatar">
            {/* Pulsating back-glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-cyan/20 via-accent-purple/20 to-accent-pink/20 rounded-full blur-2xl opacity-40 animate-pulse pointer-events-none" />

            {/* Rotating Border Aura */}
            <div className="relative p-[3px] rounded-[22px] lg:rounded-[32px] overflow-hidden shadow-2xl ring-pulse">
              {/* The rotating gradient 'light' */}
              <div
                className="absolute inset-[-100%] animate-spin-slow opacity-80 group-hover/avatar:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 0%, #06b6d4 25%, #a855f7 50%, #ec4899 75%, transparent 100%)',
                  animationDuration: '4s'
                }}
              />

              {/* Inner mask/background */}
              <div className="relative overflow-hidden rounded-[19px] lg:rounded-[29px] bg-[#06050f] aspect-square">
                <img
                  src={profileData.avatar}
                  alt={profileData.name}
                  className="w-16 h-16 lg:w-32 lg:h-32 object-cover opacity-95 group-hover/avatar:opacity-100 transition-all duration-500"
                />
                {/* Glass Shine Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-30 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Name + Role */}
          <div className="flex-1 lg:text-center min-w-0">
            <h1 className="text-xl lg:text-2xl font-black text-white mb-1 lg:mb-2 tracking-tighter truncate group-hover:text-glow transition-all">
              {profileData.name}
            </h1>
            {/* Gradient underline */}
            <div className="hidden lg:block w-16 h-[2px] mx-auto mb-3 rounded-full"
              style={{ background: 'linear-gradient(to right, #06b6d4, #a855f7, #ec4899)' }} />
            <div className="flex lg:justify-center h-7 items-center font-mono font-black text-[10px] lg:text-[11px] tracking-widest uppercase"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
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
            <button
              className="lg:hidden flex items-center gap-2 mt-3 px-4 py-1.5 text-[10px] font-black uppercase tracking-wider text-accent-cyan bg-accent-blue/10 border border-accent-blue/20 rounded-xl hover:bg-accent-blue hover:text-white transition-all shadow-lg active:scale-95"
              onClick={() => setIsExpanded(v => !v)}
            >
              <span>{isExpanded ? 'Hide' : 'Show'} Profile</span>
              {isExpanded ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
            </button>
          </div>
        </div>

        {/* ── Info Section ── */}
        <div className={`${isExpanded ? 'block' : 'hidden'} lg:block px-5 lg:px-10 pb-10 lg:pb-14`}>
          {/* Neon divider */}
          <div className="neon-line mb-4 lg:mb-6" />

          <ul className="space-y-4 lg:space-y-5">
            {infoItems.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 lg:gap-4 group/item">
                <div className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-gradient-to-br ${item.gradient} border border-white/5 rounded-2xl ${item.iconColor} text-lg lg:text-xl transition-all duration-400`}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] lg:text-[10px] text-text-muted uppercase tracking-[0.2em] font-black mb-0.5 lg:mb-1">{item.label}</p>
                  <p className="text-[11px] lg:text-[13px] text-text-secondary truncate font-bold group-hover/item:text-white transition-colors">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="flex justify-center gap-3 mt-10 lg:mt-12">
            {profileData.social.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white/[0.03] border border-white/10 rounded-2xl text-text-muted hover:text-white hover:bg-gradient-to-br ${socialColors[idx % socialColors.length]} transition-all duration-400 group/social`}
                title={social.name}
              >
                <span className="text-lg lg:text-xl transition-transform">
                  {socialIcons[social.name] || <FaAward />}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient shift keyframe injected via style tag */}
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
