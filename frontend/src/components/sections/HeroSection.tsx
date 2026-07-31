import { useState } from 'react';
import { Users, TrendingUp, Building2, Briefcase, CheckCircle2, ShieldAlert } from 'lucide-react';
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
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div
              className={`w-full transition-all duration-300 ease-out ${fading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
            >
              {/* Pre-headline */}
              <div className="flex justify-start mb-4 lg:mb-5">
                <span className="inline-flex items-center gap-2 px-4 py-1 bg-[#0080C7]/10 border border-[#0080C7]/20 rounded-full text-[10px] md:text-[11px] font-semibold text-blue-300 shadow-[0_0_15px_rgba(0,128,199,0.15)] max-w-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0080C7] shadow-[0_0_8px_rgba(0,128,199,0.9)] shrink-0" />
                  <span className="text-left leading-tight">For Product Managers with 3 to 8 years of experience pursuing leadership role in Product Management.</span>
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif font-bold leading-[1.1] tracking-tight text-white mb-4 text-3xl md:text-5xl lg:text-4xl">
                The rules change when you move from <span className="text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">Product Manager to Product Director under AI.</span>
              </h1>

              {/* Sub Headline Part 1 */}
              <p className="text-gray-100 font-medium text-md md:text-lg leading-relaxed max-w-2xl mb-5">
                It is not about experience, but it is about a different way of thinking. And that is exactly what <span className="text-white font-bold">AI Product Leadership Studio</span> is built to develop.
              </p>
              
              {/* Horizontal flare line */}
              <div className="w-24 md:w-32 lg:w-40 h-[2.5px] bg-linear-to-r from-[#00a8ff] via-[#2563EB] to-transparent mb-5 rounded-full shadow-[0_0_12px_rgba(0,168,255,0.8)]" />

              {/* Sub-headline Part 2 */}
              <p className="text-gray-300 text-sm md:text-md leading-relaxed max-w-2xl mb-4">
                This is the program in India where you spend up to 30 days solving a real product leadership challenge for a real company, presenting your strategy to their executive leadership, and defending every decision in front of real business leaders.
              </p>

              {/* Anti-ICP */}
              <div className="flex items-start gap-3 bg-red-900/10 border border-red-500/20 rounded-lg p-2 mb-8 max-w-2xl">
                <ShieldAlert className="text-red-400 shrink-0 mt-0.5" size={18} />
                <p className="text-red-200/90 text-[13px] md:text-xs leading-relaxed">
                  <strong>This is not for aspiring PMs.</strong> If you have fewer than 3 years of product experience, this program is not the right fit.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-2 justify-start mb-6">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-1.5 px-8 py-3.5 rounded-md text-white text-[14px] lg:text-[15px] font-bold tracking-wide no-underline transition-all duration-200 bg-linear-to-r from-[#0080C7] to-[rgba(24,37,226,0.9)] shadow-[0_0_20px_rgba(24,37,226,0.4)] hover:from-[#00a8ff] hover:to-[rgba(24,37,226,1)] hover:shadow-[0_0_30px_rgba(24,37,226,0.6)] hover:-translate-y-0.5 w-fit"
                >
                  Book Your Leadership Fit Conversation <span className="text-[14px] lg:text-[15px] font-bold">→</span>
                </a>
                <p className="text-gray-400 text-xs md:text-xs font-medium ml-1">
                  Every application includes a 1:1 conversation with Pranjal Sarkar before admission.
                </p>
              </div>
              
              {/* Trust line */}
              <div className="mt-4 flex items-center gap-3 ml-1">
                 <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-blue-900 border-2 border-[#000001] flex items-center justify-center z-30"><Users size={12} className="text-blue-300"/></div>
                    <div className="w-7 h-7 rounded-full bg-blue-800 border-2 border-[#000001] flex items-center justify-center z-20"><TrendingUp size={12} className="text-blue-200"/></div>
                 </div>
                 <p className="text-gray-300 text-[13px] font-semibold">1,000+ product professionals mentored across 10 countries.</p>
              </div>

            </div>
          </div>

          {/* Right Column - Image of Pranjal Sarkar */}
          <div className="lg:col-span-5 mt-12 lg:mt-4 flex justify-center lg:justify-end relative">
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

            <div className="relative w-full max-w-80 md:max-w-95 lg:max-w-120 aspect-[3.5/4] z-10">
              <img
                src={pranjalsarkar}
                alt="Pranjal Sarkar Portrait"
                className="w-full h-full object-fill object-center drop-shadow-[0px_0px_113px_rgba(24,37,226,0.6)]"
              />
            </div>
          </div>

        </div>

        {/* Trust Stats Container - Box with Glow */}
        <div className="flex flex-col w-full max-w-7xl mt-16 lg:mt-0 mb-8 relative z-20 gap-4">
            <div className="grid grid-cols-2 md:grid-cols-4 bg-[#0a0e17]/80 backdrop-blur-md border border-white/5 rounded-2xl shadow-xl overflow-hidden">
            {stats.map((st, i) => (
                <div
                key={i}
                className={`flex flex-col items-center justify-center py-5 px-4 cursor-default border-white/5 ${i % 2 !== 0 ? 'border-l' : ''} ${i > 0 ? 'md:border-l' : ''} ${i >= 2 ? 'border-t md:border-t-0' : ''}`}
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
            
            {/* Additional Program Facts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-[#0a0e17]/50 backdrop-blur-md border border-white/5 rounded-xl p-4 transition-all hover:bg-[#0a0e17]/70">
                    <div className="w-9 h-9 rounded-full bg-[#2563EB]/10 flex items-center justify-center shrink-0 border border-[#2563EB]/20">
                        <Building2 size={16} className="text-[#2563EB]" />
                    </div>
                    <span className="text-gray-300 font-medium text-sm">Own Executive Workspace</span>
                </div>
                <div className="flex items-center gap-3 bg-[#0a0e17]/50 backdrop-blur-md border border-white/5 rounded-xl p-4 transition-all hover:bg-[#0a0e17]/70">
                    <div className="w-9 h-9 rounded-full bg-[#2563EB]/10 flex items-center justify-center shrink-0 border border-[#2563EB]/20">
                        <Briefcase size={16} className="text-[#2563EB]" />
                    </div>
                    <span className="text-gray-300 font-medium text-sm">Real Company Leadership Challenge</span>
                </div>
                <div className="flex items-center gap-3 bg-[#0a0e17]/80 backdrop-blur-md border border-[#0080C7]/30 rounded-xl p-4 shadow-[0_0_15px_rgba(0,128,199,0.15)] transition-all hover:shadow-[0_0_20px_rgba(0,128,199,0.25)]">
                    <div className="w-9 h-9 rounded-full bg-[#0080C7]/20 flex items-center justify-center shrink-0 border border-[#0080C7]/40">
                        <CheckCircle2 size={16} className="text-[#00a8ff]" />
                    </div>
                    <span className="text-blue-100 font-bold text-sm tracking-wide">Application Only. Limited Cohort</span>
                </div>
            </div>
        </div>

      </div>

    </section>
  );
}