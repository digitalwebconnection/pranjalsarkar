import { useState } from 'react';
import { Users, TrendingUp, Building2 } from 'lucide-react';
import pranjalsarkar from "../../assets/pranjalsarkar/14.png"

const stats = [
  { num: '200+', label: 'Senior PMs Trained', icon: Users },
  { num: '94%', label: 'Promotion Rate', icon: TrendingUp },
  { num: '18', label: 'Companies', icon: Building2 },
  { num: '3.2×', label: 'Avg. Salary Jump', icon: TrendingUp },
];

export default function HeroSection() {

  const [fading] = useState(false);

  return (
    <section id="hero" className="relative h-[78vh] flex items-center overflow-hidden bg-[#000001] border-b border-white/8 py-20 lg:py-0">

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_left_center,rgba(0,128,199,0.05)_0%,transparent_50%)]" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-5 items-center">

          {/* Left Column - Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div
              className={`w-full transition-all duration-300 ease-out ${fading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
            >
              {/* Badge */}
              <div className="flex justify-start mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0080C7]/10 border border-[#0080C7]/20 rounded-full text-[10px] font-bold tracking-wider uppercase text-white/90 shadow-[0_0_15px_rgba(0,128,199,0.15)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0080C7] shadow-[0_0_8px_rgba(0,128,199,0.9)]" />
                  Applications Open
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif font-bold leading-tight tracking-tight text-white mb-1 text-3xl md:text-5xl whitespace-nowrap">
                Stop Managing Product.
              </h1>

              {/* Accent line with glow */}
              <div className="relative mb-5">
                <h2 className="font-serif font-bold leading-tight tracking-tight text-[#0080C7] text-3xl md:text-5xl drop-shadow-[0_0_15px_rgba(0,128,199,0.4)] whitespace-nowrap">
                  Start Leading It.
                </h2>
                {/* Horizontal flare line */}
                <div className="absolute -bottom-3 left-0 w-48 md:w-80 h-[2px] bg-gradient-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_15px_rgba(0,128,199,0.9)] opacity-80" />
              </div>

              {/* Sub text */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mb-7">
                A live, high-accountability cohort for senior PMs, EMs, and growth leads ready to earn the Director or Head of Product title — in the age of AI.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-start mb-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-8 py-3.5 rounded-md text-white text-[14px] font-bold tracking-wide no-underline transition-all duration-200 bg-[#005bb5] shadow-[0_0_20px_rgba(0,128,199,0.4)] border border-[#0080C7]/50 hover:bg-[#0066cc] hover:shadow-[0_0_30px_rgba(0,128,199,0.6)] hover:-translate-y-0.5"
                >
                  Apply for Cohort 2 <span className="text-[14px] font-bold">→</span>
                </a>
                <a
                  href="#program"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-white text-[14px] font-semibold tracking-wide no-underline transition-all duration-200 bg-transparent border border-white/10 hover:border-white/20 hover:bg-white/5 hover:-translate-y-0.5"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 border border-white/20">
                    <svg className="w-2.5 h-2.5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                  Explore Program
                </a>
              </div>

              {/* Trust Stats Container - Box with Glow */}
              <div className="grid grid-cols-2 md:grid-cols-4 w-full bg-[#121212]/90 backdrop-blur-sm border border-[#0080C7]/40 rounded-xl shadow-[0_0_25px_rgba(0,128,199,0.25)] overflow-hidden">
                {stats.map((st, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center py-4 px-2 transition-all duration-200 cursor-default group border-white/10 ${i % 2 !== 0 ? 'border-l' : ''} ${i > 0 ? 'md:border-l' : ''} ${i >= 2 ? 'border-t md:border-t-0' : ''}`}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0080C7]/10 flex items-center justify-center mb-2 text-[#0080C7] group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,128,199,0.15)]">
                      <st.icon size={16} strokeWidth={2} />
                    </div>
                    <span className="font-[Outfit,sans-serif] font-extrabold text-xl md:text-2xl leading-none mb-1 text-[#0080C7] transition-all duration-200 group-hover:drop-shadow-[0_0_15px_rgba(0,128,199,0.8)]">
                      {st.num}
                    </span>
                    <span className="text-[#9CA3AF] group-hover:text-white text-[9px] md:text-[10px] font-medium tracking-wide leading-tight transition-colors duration-200 text-center">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image of Pranjal Sarkar */}
          <div className="lg:col-span-6 mt-14 flex justify-center lg:justify-end relative">
            {/* Background Radial Glow & Concentric Circles */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none translate-x-12 translate-y-12">
              <div className="absolute w-[140%] aspect-square rounded-full bg-[radial-gradient(circle_at_center,rgba(0,128,199,0.25)_0%,transparent_60%)] blur-[20px]" />
              <div className="absolute w-[90%] md:w-[80%] aspect-square rounded-full border border-[#0080C7]/20" />
              <div className="absolute w-[110%] md:w-[100%] aspect-square rounded-full border border-[#0080C7]/10" />
              <div className="absolute w-[130%] md:w-[120%] aspect-square rounded-full border border-[#0080C7]/5" />
            </div>

            <div className="relative w-full max-w-95 lg:max-w-120 aspect-3.5/4 overflow-hidden z-10">
              <img
                src={pranjalsarkar}
                alt="Pranjal Sarkar Portrait"
                className="w-full h-full object-fill object-center"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
