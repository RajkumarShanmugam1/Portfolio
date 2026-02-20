import React from 'react';
import { motion } from 'framer-motion';
import { FaLocationDot, FaPaperPlane, FaPhone } from 'react-icons/fa6';
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope, FaMedium } from 'react-icons/fa';
import { SiCredly } from 'react-icons/si';
import profileData from '../../data/profile.json';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState(null);
  const [sending, setSending] = useState(false);

  const isValid = form.name.trim() && form.email.includes('@') && form.message.trim();

  const socialIcons = {
    GitHub: <FaGithub />,
    LinkedIn: <FaLinkedin />,
    Medium: <FaMedium />,
    Credly: <SiCredly />,
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setFeedback(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    setSending(true);
    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
      setFeedback('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setFeedback('error');
    } finally {
      setSending(false);
    }
  };

  const inputClass = "w-full px-5 py-4 rounded-2xl text-text-primary placeholder:text-text-muted outline-none transition-all duration-300 font-medium border border-white/[0.08] bg-white/[0.03] focus:border-accent-cyan/50 focus:bg-white/[0.06]";

  return (
    <article className="glass p-8 pt-6 lg:p-12 lg:pt-8 rounded-4xl space-y-10 animate-fadeIn relative">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-96 h-80 -z-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(236,72,153,0.07) 0%, transparent 70%)' }} />

      {/* ── Header ── */}
      <header className="flex items-center gap-5">
        <div className="p-3.5 rounded-2xl text-accent-pink text-3xl border border-white/10 shadow-glow-pink flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(168,85,247,0.10))' }}>
          <FaPhone />
        </div>
        <div>
          <h2 className="text-4xl lg:text-5xl font-black pb-1"
            style={{ background: 'linear-gradient(135deg, #fff 0%, #22d3ee 40%, #a855f7 70%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Contact
          </h2>
          <div className="w-20 h-[3px] rounded-full"
            style={{ background: 'linear-gradient(to right, #06b6d4, #6366f1, #a855f7, #ec4899)' }} />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column */}
        <div className="space-y-10">
          {/* Map */}
          <section className="h-56 rounded-3xl overflow-hidden border border-white/[0.08] shadow-glow-purple/20">
            <iframe
              src={`https://maps.google.com/maps?q=${profileData.location}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full grayscale invert-[0.9] brightness-[0.65] opacity-70"
              title="Location"
            />
          </section>

          {/* Contact info */}
          <ul className="space-y-5">
            {[
              { icon: <FaEnvelope />, title: 'Email', value: profileData.email, color: 'text-accent-cyan', bg: 'rgba(6,182,212,0.12)', border: 'rgba(6,182,212,0.2)' },
              { icon: <FaLocationDot />, title: 'Location', value: profileData.location, color: 'text-accent-purple', bg: 'rgba(168,85,247,0.12)', border: 'rgba(168,85,247,0.2)' }
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-5 group">
                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${item.color} text-2xl border transition-all duration-300 group-hover:scale-110`}
                  style={{ background: item.bg, borderColor: item.border }}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">{item.title}</p>
                  <p className="text-text-primary font-medium">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Social + CV */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              {profileData.social.filter(s => s.type === 'icon').map((social, idx) => (
                <a key={idx} href={social.url}
                  className="w-12 h-12 flex items-center justify-center bg-white/[0.04] border border-white/[0.08] rounded-2xl text-text-secondary hover:text-white hover:-translate-y-1.5 transition-all duration-300"
                  style={{ '--hover-bg': 'rgba(168,85,247,0.2)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,85,247,0.15)'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.borderColor = ''; }}
                >
                  {socialIcons[social.name]}
                </a>
              ))}
            </div>
            <a href={profileData.cvLink || '#'}
              className="btn-primary w-full lg:w-max flex items-center justify-center gap-3 py-3.5 px-8">
              <FaFilePdf size={16} />
              <span className="font-black tracking-widest uppercase text-xs">Download Resume / CV</span>
            </a>
          </div>
        </div>

        {/* Right column — Form */}
        <section className="space-y-6 p-8 rounded-3xl border border-white/[0.06] relative overflow-hidden"
          style={{ background: 'rgba(10,8,30,0.6)' }}>
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(236,72,153,0.5), rgba(168,85,247,0.5), transparent)' }} />
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)' }} />

          <h3 className="text-xl font-black text-white flex items-center gap-3">
            <div className="w-6 h-[2px] rounded-full" style={{ background: 'linear-gradient(to right, #ec4899, #a855f7)' }} />
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className={inputClass} required />
              <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} className={inputClass} required />
            </div>
            <textarea name="message" placeholder="Your Message..." rows="5" value={form.message} onChange={handleChange} className={`${inputClass} resize-none`} required />

            <motion.button
              type="submit"
              disabled={!isValid || sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full py-4 flex items-center justify-center gap-3 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
            >
              <FaPaperPlane size={14} className={sending ? 'animate-ping' : ''} />
              <span className="font-black tracking-[0.2em] uppercase text-sm">
                {sending ? 'Transmitting...' : 'Send Message'}
              </span>
            </motion.button>

            {feedback === 'success' && (
              <motion.p initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="text-emerald-400 font-bold text-center bg-emerald-400/10 py-3 rounded-xl border border-emerald-400/20">
                ✓ Message Sent Successfully!
              </motion.p>
            )}
            {feedback === 'error' && (
              <motion.p initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="text-red-400 font-bold text-center bg-red-400/10 py-3 rounded-xl border border-red-400/20">
                ✗ Something went wrong. Please try again.
              </motion.p>
            )}
          </form>
        </section>
      </div>
    </article>
  );
};

export default Contact;
