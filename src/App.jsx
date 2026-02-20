import React from 'react';
import Particlebg from './component/Particlebf';
import SideBar from './component/Sidebar';
import MainBar from './component/MainBar';

const App = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Particlebg />

      {/* Aurora Flux — Multi-color Background Orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Cyan — top-left */}
        <div
          className="absolute top-[-15%] left-[-15%] w-[55%] h-[55%] rounded-full opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        {/* Violet — top-right */}
        <div
          className="absolute top-[-10%] right-[-15%] w-[50%] h-[55%] rounded-full opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        {/* Rose — bottom-right */}
        <div
          className="absolute bottom-[-15%] right-[-10%] w-[45%] h-[50%] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)', filter: 'blur(90px)' }}
        />
        {/* Indigo — bottom-left */}
        <div
          className="absolute bottom-[-15%] left-[-10%] w-[45%] h-[50%] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)', filter: 'blur(90px)' }}
        />
        {/* Center accent bloom */}
        <div
          className="absolute top-[35%] left-[35%] w-[30%] h-[30%] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)', filter: 'blur(100px)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-12 pt-1 lg:pt-2 pb-20">
        <main className="flex flex-col lg:flex-row items-start gap-4 lg:gap-8">
          <SideBar />
          <MainBar />
        </main>
      </div>
    </div>
  );
};

export default App;
