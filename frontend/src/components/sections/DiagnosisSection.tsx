import { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import youtubeVideo from '../../assets/video/youtube.mp4';

const StatRing = ({ value, label, isActive }: { value: number; label?: string; isActive?: boolean }) => {
  const r = 22;
  const stroke = 3;
  const circ = 2 * Math.PI * r;
  // Handle case where value might not be a pure number out of 100 easily (like 50 for <50%)
  const offset = circ - (Math.min(value, 100) / 100) * circ;

  return (
    <div className="relative flex items-center justify-center shrink-0 w-16 h-16">
      <svg className="w-full h-full -rotate-90">
        <circle
          cx="32"
          cy="32"
          r={r}
          className="stroke-white/4 fill-none"
          strokeWidth={stroke}
        />
        <circle
          cx="32"
          cy="32"
          r={r}
          className={`fill-none transition-all duration-700 ease-out ${isActive ? 'stroke-[#2563EB]' : 'stroke-white/20'}`}
          strokeWidth={stroke}
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className={`absolute text-[12px] font-['Outfit',sans-serif] font-bold ${isActive ? 'text-[#2563EB]' : 'text-white/60'}`}>
        {label}
      </span>
    </div>
  );
};

import { diagnosisData } from '../../constants/diagnosisData';

export default function DiagnosisSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % diagnosisData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  return (
    <section id="diagnosis" className="relative py-8 md:py-14 overflow-hidden border-b border-white/8 ">
      {/* Background Dots Pattern & Glows */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.35)_1.5px,transparent_1.5px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_80%_100%_at_center,transparent_40%,black_100%)] opacity-100 pointer-events-none" />
      
      {/* Intense Top-Right Blue Glow */}
      <div className="absolute top-[-5%] right-[-10%] w-[55%] h-[75%] z-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.45)_0%,transparent_70%)] blur-[90px] pointer-events-none" />
      
      {/* Subtle Left Blue Glow */}
      <div className="absolute top-[15%] left-[-15%] w-[45%] h-[60%] z-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.25)_0%,transparent_60%)] blur-[80px] pointer-events-none" />

      {/* Dynamic Progress Bar Animation Keyframe */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes progress-timer {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress-timer {
          animation: progress-timer 5s linear forwards;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 md:px-6 relative z-10">

        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0080C7]/10 border border-[#0080C7]/30 rounded-md text-[10px] font-bold tracking-wider uppercase text-[#0080C7] mb-6 shadow-[0_0_15px_rgba(0,128,199,0.1)]">
            MARKET SHIFT
          </span>
          <h2 className="font-serif font-bold text-2xl md:text-5xl leading-tight tracking-tight text-white mb-6">
            The rules just changed. And the product <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
              world is shifting faster.
              {/* Horizontal flare line */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-48 md:w-80 h-0.5 bg-linear-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
            </span>
          </h2>
          <p className="text-gray-100 text-sm md:text-[15px] leading-relaxed max-w-6xl mx-auto mt-4">
        Generative AI didn't replace Product Managers. It changed what organizations value. Activities that once differentiated experienced Product Managers like writing PRDs, creating roadmaps, documenting requirements and producing polished presentations are increasingly becoming faster, cheaper and easier with AI. As these tasks become commodities, organizations are placing greater value on leaders who can make sound business decisions, navigate ambiguity, lead AI initiatives, build organizations and influence executive teams. The gap is no longer defined by experience alone. It is defined by the ability to operate at a different level.   </p>
        </div>

        {/* Desktop Interactive Panel Layout */}
        <div
          className="hidden lg:grid grid-cols-12 gap-8 items-stretch mb-16"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          {/* Left Column: Interactive Selector Cards */}
          <div className="col-span-5 flex flex-col gap-4">
            <div className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2 pl-2">
              Select Data Point
            </div>

            {diagnosisData.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative flex items-center gap-5 p-5 rounded-xl text-left border transition-all duration-300 group cursor-pointer ${isActive
                    ? 'bg-[#0a0c10] border-[#0080C7] shadow-[0_0_20px_rgba(0,128,199,0.3)]'
                    : 'bg-[#0a0c10]/50 border-[#0080C7]/10 hover:border-[#0080C7]/30 hover:bg-[#0a0c10] hover:shadow-[0_0_15px_rgba(0,128,199,0.15)]'
                    }`}
                >
                  {/* Indicator arrow pointing to the detailed report */}
                  {isActive && (
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0080C7] drop-shadow-[0_0_8px_rgba(0,128,199,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  )}

                  <StatRing value={item.statValue} label={item.statNum} isActive={isActive} />

                  <div className="flex-1 min-w-0 pr-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider mb-1 block text-[#2563EB]">
                      {item.statLabel}
                    </span>
                    <p className={`text-[14px] font-semibold leading-snug line-clamp-2 ${isActive ? 'text-white' : 'text-white/90 group-hover:text-white/80'
                      }`}>
                      {item.headline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Analysis Report Card */}
          <div className="col-span-7 flex">
            <div className="w-full rounded-2xl bg-[#0a0c10] border border-[#0080C7]/20 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(0,128,199,0.08)] hover:shadow-[0_0_30px_rgba(0,128,199,0.15)]">

              {/* Permanent Top Edge Glow and Inner Gradient */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
              <div className="absolute top-0 left-0 right-0 h-48 bg-linear-to-b from-[#0080C7]/8 to-transparent pointer-events-none" />

              {/* Dynamic visual progress line loader */}
              {isAutoplay && (
                <div
                  key={activeIndex}
                  className="absolute top-0 left-0 h-0.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-progress-timer"
                />
              )}

              <div className="relative z-10 flex flex-col h-full justify-center">
                {/* Metric Header */}
                <div className="flex items-center justify-between gap-4 mb-10">
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#0080C7] bg-[#0080C7]/10 border border-[#0080C7]/20 px-3 py-1 rounded-sm shadow-[0_0_10px_rgba(0,128,199,0.1)]">
                    MARKET DATA
                  </span>
                  <div className="flex items-center gap-2 text-xs text-white/80 font-mono tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
                    LIVE SOURCE
                  </div>
                </div>

                {/* Stat Headline */}
                <h3 className="font-serif text-[40px] md:text-[52px] font-bold text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#00a8ff] drop-shadow-[0_0_15px_rgba(24,37,226,0.4)] leading-tight mb-6">
                  {diagnosisData[activeIndex].headline}
                </h3>

                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium mb-10">
                  {diagnosisData[activeIndex].description}
                </p>

                <div className="mt-auto pt-8 border-t border-white/10">
                  <a href={diagnosisData[activeIndex].link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-[#00a8ff] font-semibold hover:text-white transition-colors duration-200 group">
                    {diagnosisData[activeIndex].sourceName}
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden flex flex-col gap-6 mb-16">
          {diagnosisData.map((item) => (
            <div key={item.id} className="rounded-2xl bg-[#121212] border border-white/8 p-6 md:p-8 flex flex-col relative overflow-hidden transition-all duration-300 hover:border-[#0080C7]/30 hover:shadow-[0_0_30px_rgba(0,128,199,0.15)]">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#0080C7]/30 to-transparent" />

              {/* Stat Circle & Label Row */}
              <div className="flex items-center gap-4 mb-5">
                <StatRing value={item.statValue} label={item.statNum} isActive={true} />
                <div>
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#2563EB]">
                    {item.statLabel}
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#00a8ff] mb-4">
                {item.headline}
              </h3>
              
              <p className="text-base text-gray-200 leading-relaxed font-medium mb-6">
                {item.description}
              </p>

              <div className="mt-auto pt-5 border-t border-white/10">
                  <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[13px] text-[#00a8ff] font-semibold hover:text-white transition-colors duration-200">
                    {item.sourceName}
                  </a>
              </div>
            </div>
          ))}
        </div>

        {/* Video Block and Bridge Line */}
        <div className="max-w-full mx-auto flex flex-col items-center mt-12 md:mt-20 h-160 ">
            {/* Video Placeholder */}
            <div 
                className="w-full aspect-video rounded-xl bg-[#0a0e17] border border-white/10 shadow-[0_0_40px_rgba(24,37,226,0.15)] relative overflow-hidden flex items-center justify-center group cursor-pointer mb-12"
                onClick={toggleVideo}
            >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,168,255,0.05)_0%,transparent_70%)] pointer-events-none z-10" />
                
                <video 
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover z-0" 
                    src={youtubeVideo} 
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                    controls={isVideoPlaying}
                />

                {!isVideoPlaying && (
                    <>
                        {/* Play Button Glow */}
                        <div className="absolute w-24 h-24 bg-[#0080C7]/30 blur-[30px] rounded-full group-hover:bg-[#0080C7]/50 transition-all duration-500 z-20 pointer-events-none" />
                        
                        {/* Play Button */}
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 border border-white/20 backdrop-blur-md rounded-full flex items-center justify-center relative z-20 group-hover:scale-110 transition-transform duration-300 pointer-events-none">
                           <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1.5 opacity-90 group-hover:opacity-100" fill="currentColor" />
                        </div>
                    </>
                )}
            </div>

            {/* Bridge Line */}
            <div className="max-w-6xl text-center">
               <p className="text-gray-300 text-base md:text-[16px] leading-[1.8] font-medium">
                 The next generation of Product Leaders won't be defined by how much they know. They'll be defined by the quality of the decisions they make under uncertainty. That's why this Studio doesn't stop at teaching concepts. <span className="text-white font-bold">It develops executive judgment through repeated practice, feedback, and real-world application.</span>
               </p>
            </div>
        </div>

      </div>
    </section>
  );
}
