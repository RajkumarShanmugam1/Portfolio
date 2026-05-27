import React from 'react';
import Typewriter from 'typewriter-effect';
import profileData from '../../data/profile.json';

const Sidebar = () => {

  return (
    <header className="w-full flex flex-col md:flex-row items-center md:items-start gap-8 py-8 lg:py-12 px-4 lg:px-8">
      
      {/* ── Avatar ── */}
      <div className="relative shrink-0">
        <div className="relative p-1 rounded-full bg-gradient-to-br from-white/20 to-white/5 shadow-lg">
          <div className="relative overflow-hidden rounded-full bg-[#06050f] w-32 h-32 lg:w-40 lg:h-40">
            <img
              src={profileData.avatar}
              alt={profileData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 text-center md:text-left flex flex-col justify-center h-full pt-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-blue mb-3 sm:mb-4 tracking-tight drop-shadow-md pb-1 leading-tight sm:leading-snug">
          {profileData.name}
        </h1>
        
        <div className="flex md:justify-start justify-center min-h-[1.75rem] items-center font-mono font-medium text-[10px] sm:text-xs tracking-widest uppercase text-accent-blue/90">
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
      </div>
      
    </header>
  );
};

export default Sidebar;

