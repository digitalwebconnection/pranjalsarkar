import { useState } from 'react';
import { BookOpen, Target, Video, Box, Layers, Users } from 'lucide-react';

import { modules } from '../../constants/curriculumData';

export default function dCurriculumSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="curriculum" className="relative py-8 md:py-14 overflow-hidden border-b border-white/8 bg-[#010308]">

      {/* Enhanced Multi-Layer Ambient Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Top Center Primary Radial Glow */}
        <div className="absolute -top-25 left-1/2 -translate-x-1/2 w-225 h-150 bg-[radial-gradient(ellipse_at_top,rgba(0,136,255,0.25)_0%,rgba(0,60,180,0.12)_45%,transparent_75%)] blur-[60px]" />

        {/* Right Side Cyan Glow */}
        <div className="absolute top-[30%] right-[-10%] w-137.5 h-137.5 bg-[radial-gradient(circle_at_center,rgba(0,168,255,0.15)_0%,transparent_60%)] blur-[80px]" />

        {/* Fine Texture Dot Matrix Overlay */}
        <div
          className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(0, 140, 255, 0.35) 1.5px, transparent 0)',
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-6 relative z-10">

        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-5">
          <div>


            <div className="relative mb-4">
              <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-5xl leading-tight tracking-tight text-white mb-2">
                Everything You
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">Need to Know Before You Apply</span>
              </h2>

              {/* Horizontal Lens Flare Line */}

            </div>

          </div>

          {/* Key Facts List with Gradient Borders & Blue Glow */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { label: 'Live sessions', value: '32+ hrs', icon: Video },
              { label: 'Weekly Practice', value: '3-5 hrs', icon: Box },
              { label: 'Program Duration', value: '5 Weeks', icon: Layers },
              { label: 'Company Exposure', value: '30 Days', icon: Users },
            ].map((s, i) => (
              <div
                key={i}
                className="group relative rounded-xl p-px bg-linear-to-br from-[#00a8ff]/70 via-white/10 to-white/10  transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,168,255,0.25)] hover:from-[#00a8ff] flex flex-col"
              >
                <div className="relative h-full bg-[#060a14] group-hover:bg-[#0a0f1c] rounded-xl p-5 flex items-center gap-4 overflow-hidden transition-colors duration-300">
                  {/* Top highlight line */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-linear-to-r from-transparent via-[#00a2ff]/60 to-transparent opacity-80" />

                  {/* Circular Icon Badge */}
                  <div className="w-11 h-11 rounded-full border border-[#0070f3]/10 bg-[#001026] text-[#0075ff] flex items-center justify-center shrink-0 shadow-[inset_0_0_10px_rgba(0,136,255,0.25)] group-hover:border-[#00a8ff] transition-colors">
                    <s.icon className="w-5 h-5 text-[#00a8ff] drop-shadow-[0_0_6px_rgba(0,168,255,0.6)]" />
                  </div>

                  <div className="flex flex-col justify-center min-w-0">
                    <span className="text-[#91a0b6] text-[10px] uppercase font-bold tracking-widest mb-1 truncate">{s.label}</span>
                    <span className="font-['Outfit',sans-serif] text-[#0075ff] text-[18px] md:text-[20px] font-black drop-shadow-[0_0_8px_rgba(0,168,255,0.5)] transition-colors">{s.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Split-Screen Dashboard & Mobile Tabbed View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Mobile Horizontal Navigation Tabs */}
          <div className="lg:hidden flex overflow-x-auto gap-2 pb-4 scrollbar-none snap-x">
            {modules.map((m, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`snap-center px-5 py-3.5 rounded-lg border text-[11px] font-bold uppercase tracking-wider whitespace-nowrap shrink-0 transition-all cursor-pointer ${activeTab === i
                  ? 'bg-black text-white border-transparent shadow-[0_0_20px_rgba(0,168,255,0.5)]'
                  : 'bg-[#050B14] text-[#a1a1aa] border-[#0080C7]/20'
                  }`}
              >
                {m.week}
              </button>
            ))}
          </div>

          {/* Left Column: Vertical Timeline selector (Desktop only) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-3 relative before:absolute before:left-6.75 before:top-8 before:bottom-8 before:w-0.5 before:bg-linear-to-b before:from-[#0080C7]/60 before:to-[#0080C7]/15">
            {modules.map((m, i) => {
              const isActive = activeTab === i;
              return (
                <div
                  key={i}
                  className={`group relative rounded-xl transition-all duration-300 ${isActive
                    ? 'p-px bg-linear-to-r from-[#00a8ff]/90 via-white/10 to-white/10 shadow-[0_0_20px_rgba(0,168,255,0.2)]'
                    : ''
                    }`}
                >
                  <button
                    onClick={() => setActiveTab(i)}
                    className={`w-full flex gap-5 items-center p-5 rounded-xl text-left cursor-pointer transition-all duration-300 group z-10 relative overflow-hidden ${isActive
                      ? 'bg-[#060a14] rounded-[11px]'
                      : 'bg-transparent border border-transparent hover:bg-[#050A14]/60 hover:border-[#0080C7]/20 hover:shadow-[0_0_15px_rgba(0,128,199,0.1)]'
                      }`}
                  >
                    {isActive && (
                      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#33a8ff]/60 to-transparent opacity-80" />
                    )}

                    {/* Timeline circle indicator */}
                    <span className={`w-4 h-4 rounded-full border-[3px] flex items-center justify-center shrink-0 transition-all duration-300 ${isActive
                      ? 'bg-[#00a8ff] border-[#001020] scale-125 shadow-[0_0_12px_#00a8ff]'
                      : 'bg-[#050B14] border-[#0080C7]/40 group-hover:border-[#33a8ff]'
                      }`}
                    />

                    <div className="min-w-0 z-10">
                      <div className="text-[#33a8ff] text-[9px] font-bold tracking-widest uppercase mb-1 font-mono">
                        {m.week}
                      </div>
                      <span className={`font-serif text-sm md:text-base font-bold transition-colors block ${isActive ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]' : 'text-[#a1a1aa] group-hover:text-white'
                        }`}>
                        {m.title}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Curriculum Card Panel with Signature Gradient Border */}
          <div className="lg:col-span-7 group relative rounded-xl p-px bg-linear-to-br from-[#0075ff]/90 via-white/10 to-white/10 shadow-[0_0_35px_rgba(0,128,199,0.25)] transition-all duration-300 flex flex-col">
            <div className="relative h-full w-full bg-[#000000] group-hover:bg-[#070e1c] rounded-[15px] p-4 md:p-8 flex flex-col justify-between overflow-hidden transition-colors duration-300 z-10 min-h-120">



              {/* Subtle inner radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,117,255,0.65)_0%,transparent_40%)] pointer-events-none" />

              <div className="relative z-10">
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#0080C7]/20 pb-6 mb-6">
                  <div>
                    <span className="text-[#0075ff] text-[10px] font-bold tracking-[0.2em] uppercase block mb-1.5 font-mono">
                      {modules[activeTab].week}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
                      {modules[activeTab].title}
                    </h3>
                  </div>
                  <span className="px-3.5 py-1.5 bg-[#0080C7]/10 border border-[#0080C7]/30 rounded text-white text-[10px] font-bold uppercase tracking-wider font-mono shadow-[0_0_10px_rgba(0,128,199,0.2)]">
                    Detail {activeTab + 1}
                  </span>
                </div>

                {/* Focus and Topics Grid */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[10px] font-bold text-[#64748b] tracking-widest uppercase mb-2 font-mono flex items-center gap-2">
                      <Target size={14} className="text-[#33a8ff]" /> Overview
                    </h4>
                    <p className="text-[#e2e8f0] text-sm md:text-base lg:text-lg leading-relaxed">
                      {modules[activeTab].focus}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-bold text-[#ffffff] tracking-widest uppercase mb-4 font-mono flex items-center gap-2">
                      <BookOpen size={14} className="text-[#33a8ff]" /> Key Details
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {modules[activeTab].topics.map((t, idx) => (
                        <div key={idx} className="flex gap-3.5 items-start p-3.5 rounded-lg bg-[#0A101C] border border-[#0080C7]/20 hover:border-[#0080C7]/50 transition-colors">
                          <span className="text-[#33a8ff] shrink-0 mt-0.5 font-bold text-sm">→</span>
                          <span className="text-[#e1e1e9] text-[14px] leading-relaxed">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Practical Simulation & Deliverable Details Footer */}
              {modules[activeTab].caseStudy && (
                <div className="relative z-10 border-t border-[#0080C7]/20 pt-6 mt-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-lg bg-[#0080C7]/10 border border-[#0080C7]/30 shadow-[0_0_15px_rgba(0,128,199,0.15)]">
                    <div>
                      <span className="block text-[10px] font-bold text-[#33a8ff] uppercase tracking-wider font-mono mb-1.5 drop-shadow-[0_0_5px_rgba(0,128,199,0.5)]">
                        ADDITIONAL INFO
                      </span>
                      <p className="text-sm text-[#f8fafc] font-bold m-0 leading-relaxed">
                        {modules[activeTab].caseStudy}
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
