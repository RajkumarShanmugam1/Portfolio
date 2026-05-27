import React from 'react';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope, FaMedium } from 'react-icons/fa';
import { SiCredly } from 'react-icons/si';
import profileData from '../../data/profile.json';
import resumePdf from '../../assets/Resume_Security_engineer.pdf';

const Contact = () => {

  const socialIcons = {
    GitHub: <FaGithub />,
    LinkedIn: <FaLinkedin />,
    Medium: <FaMedium />,
    Credly: <SiCredly />,
  };



  return (
    <article className="glass p-8 pt-6 lg:p-12 lg:pt-8 rounded-3xl space-y-10 animate-fadeIn relative">
      {/* ── Header ── */}
      <header className="flex items-center gap-5 border-b border-white/10 pb-6">
        <div className="p-3 rounded-xl text-accent-blue text-2xl bg-white/5 border border-white/10 flex-shrink-0">
          <FaPhone />
        </div>
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Contact
          </h2>
        </div>
      </header>

      <div className="max-w-2xl mx-auto space-y-10">
        {/* Contact info */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { icon: <FaEnvelope />, title: 'Email', value: profileData.email },
            { icon: <FaLocationDot />, title: 'Location', value: profileData.location }
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-5 p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] group hover:bg-white/[0.06] transition-all">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl text-accent-blue bg-white/5 border border-white/10 text-xl transition-all duration-300 group-hover:bg-white/10 group-hover:scale-105">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">{item.title}</p>
                <p className="text-text-primary font-medium">{item.value}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Social + CV */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4 border-t border-white/10">
          <div className="flex gap-3">
            {profileData.social.filter(s => s.type === 'icon').map((social, idx) => (
              <a key={idx} href={social.url}
                className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-text-secondary hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                {socialIcons[social.name]}
              </a>
            ))}
          </div>
          <a href={resumePdf}
            download="Rajkumar_Resume.pdf"
            className="btn-primary w-full sm:w-max flex items-center justify-center gap-3">
            <FaFilePdf size={16} />
            <span>Download Resume / CV</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Contact;
