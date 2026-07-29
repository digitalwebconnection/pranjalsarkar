import { useState } from 'react';
import { Users, TrendingUp, Building2 } from 'lucide-react';
import pranjalsarkar from "../../assets/pranjalsarkar/18.webp"
 
const stats = [
  { num: '10', label: 'Executive Simulations', icon: Users },
  { num: '20', label: 'Executive Decisions', icon: TrendingUp },
  { num: '5', label: 'AI Executive Advisors', icon: Building2 },
  { num: '10', label: 'Boardroom Reviews', icon: TrendingUp },
];
 
export default function HeroSection() {
 
  const [fading] = useState(false);
 
  return (
    <section id="hero" className="relative w-full min-h-screen lg:min-h-screen flex flex-col justify-between overflow-hidden bg-[#000001] border-b border-white/8 pt-24 lg:pt-28 pb-6 lg:pb-8">
 
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.25)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left_center,rgba(0,168,255,0.1)_0%,transparent_50%)]" />
      </div>
 
      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-6 flex flex-col justify-between flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-5 items-center">
 
          {/* Left Column - Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div
              className={`w-full transition-all duration-300 ease-out ${fading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
            >
              {/* Badge */}
              <div className="flex justify-start mb-4 lg:mb-6">
                <span className="inline-flex items-center gap-2 px-5 py-2 bg-[#0080C7]/10 border border-[#0080C7]/20 rounded-full text-[12px] font-bold tracking-wider uppercase text-white/90 shadow-[0_0_15px_rgba(0,128,199,0.15)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0080C7] shadow-[0_0_8px_rgba(0,128,199,0.9)]" />
                  Applications Open
                </span>
              </div>
 
              {/* Headline */}
              <h1 className="font-serif font-bold leading-tight tracking-tight text-white mb-2 text-4xl md:text-5xl lg:text-6xl whitespace-nowrap">
                Become a Product Director
              </h1>
 
              <h2 className="font-serif font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_0_15px_rgba(24,37,226,0.6)] whitespace-nowrap mt-1 mb-3 lg:mb-4">
                in the AI Era.
              </h2>
              {/* Horizontal flare line */}
              <div className="w-24 md:w-32 lg:w-40 h-[2.5px] bg-linear-to-r from-[#00a8ff] via-[#2563EB] to-transparent mb-8 rounded-full shadow-[0_0_12px_rgba(0,168,255,0.8)]" />
 
              {/* Sub text */}
              <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl lg:max-w-2xl mb-8 lg:mb-10">
            A hands-on leadership program where experienced Product Managers solve real business challenges, present to executives, and build Product Director-level thinking.   </p>
 
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-start mb-8 lg:mb-0">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-1.5 px-8 py-3.5 rounded-md text-white text-[14px] lg:text-[15px] font-bold tracking-wide no-underline transition-all duration-200 bg-linear-to-r from-[#0080C7] to-[rgba(24,37,226,0.9)] shadow-[0_0_20px_rgba(24,37,226,0.4)] hover:from-[#00a8ff] hover:to-[rgba(24,37,226,1)] hover:shadow-[0_0_30px_rgba(24,37,226,0.6)] hover:-translate-y-0.5"
                >
                  Apply for Cohort 2 <span className="text-[14px] lg:text-[15px] font-bold">→</span>
                </a>
                <a
                  href="#program"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md text-white text-[14px] lg:text-[15px] font-semibold tracking-wide no-underline transition-all duration-200 bg-transparent border border-white/10 hover:border-white/20 hover:bg-white/5 hover:-translate-y-0.5"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 border border-[#0080C7]">
                    <svg className="w-2.5 h-2.5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                  Explore Program
                </a>
              </div>
 
            </div>
          </div>
 
          {/* Right Column - Image of Pranjal Sarkar */}
          <div className="lg:col-span-6 mt-12 lg:mt-4 flex justify-center lg:justify-end relative">
            {/* Background Radial Glow & Concentric Circles */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none translate-x-12 translate-y-12">
              <div className="absolute w-[140%] aspect-square rounded-full bg-[radial-gradient(circle_at_center,rgba(0,128,199,0.25)_0%,transparent_60%)] blur-[20px]" />
              {/* Concentric rings matching the reference */}
              <div className="absolute w-[50%] aspect-square rounded-full border border-[#0080C7]/4" />
              <div className="absolute w-[65%] aspect-square rounded-full border border-[#0080C7]/[0.07]" />
              <div className="absolute w-[80%] aspect-square rounded-full border border-[#0080C7]/9" />
              <div className="absolute w-[95%] aspect-square rounded-full border border-[#0080C7]/9" />
              <div className="absolute w-[130%] aspect-square rounded-full border border-[#0080C7]/5" />
              <div className="absolute w-[150%] aspect-square rounded-full border border-[#0080C7]/5" />
              <div className="absolute w-[170%] aspect-square rounded-full border border-[#0080C7]/5" />
              <div className="absolute w-[190%] aspect-square rounded-full border border-[#0080C7]/2" />
            </div>
 
            <div className="relative w-full max-w-80 md:max-w-95 lg:max-w-120 aspect-3.5/4 z-10">
              <img
                src={pranjalsarkar}
                alt="Pranjal Sarkar Portrait"
                className="w-full h-full object-fill object-center drop-shadow-[0px_0px_113px_rgba(24,37,226,0.6)]"
              />
            </div>
          </div>
 
        </div>
 
        {/* Trust Stats Container - Box with Glow */}
        <div className="grid grid-cols-2 md:grid-cols-4 w-full max-w-7xl bg-[#0a0e17]/80 backdrop-blur-md border border-white/5 rounded-2xl shadow-xl overflow-hidden mt-12 lg:-mt-10 mb-8 relative z-20">
          {stats.map((st, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center py-4 px-4 cursor-default border-white/5 ${i % 2 !== 0 ? 'border-l' : ''} ${i > 0 ? 'md:border-l' : ''} ${i >= 2 ? 'border-t md:border-t-0' : ''}`}
            >
              <div className="w-10 h-10 rounded-full bg-linear-to-b from-[#2563EB]/20 to-transparent border border-t-[#2563EB]/60 border-b-transparent border-x-transparent flex items-center justify-center mb-2 text-[#2563EB] shadow-[inset_0_1px_5px_rgba(37,99,235,0.2)]">
                <st.icon size={18} strokeWidth={2} className="drop-shadow-[0_0_5px_rgba(37,99,235,0.4)]" />
              </div>
              <span className="font-sans font-bold text-2xl md:text-[28px] leading-none mb-1.5 text-[#2563EB] drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]">
                {st.num}
              </span>
              <span className="text-[#8a94a6] text-[11px] md:text-xs font-medium tracking-wide text-center">
                {st.label}
              </span>
            </div>
          ))}
        </div>
      </div>
 
    </section>
  );
}