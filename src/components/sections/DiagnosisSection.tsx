import { useState, useEffect } from 'react';

// Custom Vector Icons representing structural issues
const CalibrationIcon = () => (
  <div className="w-11 h-11 rounded-lg bg-[#0080C7]/10 border border-[#0080C7]/40 shadow-[0_0_15px_rgba(0,128,199,0.2)] flex items-center justify-center text-[#0080C7] shrink-0">
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
      <circle cx="7.5" cy="16.5" r="1.5" stroke="currentColor" />
      <circle cx="16.5" cy="7.5" r="1.5" stroke="currentColor" />
    </svg>
  </div>
);

const JudgmentIcon = () => (
  <div className="w-11 h-11 rounded-lg bg-[#0080C7]/10 border border-[#0080C7]/40 shadow-[0_0_15px_rgba(0,128,199,0.2)] flex items-center justify-center text-[#0080C7] shrink-0">
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  </div>
);

const AiIcon = () => (
  <div className="w-11 h-11 rounded-lg bg-[#0080C7]/10 border border-[#0080C7]/40 shadow-[0_0_15px_rgba(0,128,199,0.2)] flex items-center justify-center text-[#0080C7] shrink-0">
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z" />
      <path strokeLinecap="round" d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </svg>
  </div>
);

const FailureIcon = () => (
  <div className="w-11 h-11 rounded-lg bg-[#0080C7]/10 border border-[#0080C7]/40 shadow-[0_0_15px_rgba(0,128,199,0.2)] flex items-center justify-center text-[#0080C7] shrink-0">
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  </div>
);

const StatRing = ({ value, label }: { value: number; label?: string; isActive?: boolean }) => {
  const r = 22;
  const stroke = 3;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;

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
          className="fill-none transition-all duration-700 ease-out stroke-[#2563EB]"
          strokeWidth={stroke}
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-[12px] font-['Outfit',sans-serif] font-bold text-[#2563EB]">
        {label}
      </span>
    </div>
  );
};

const diagnosisData = [
  {
    id: 0,
    statNum: '98%',
    statValue: 98,
    statLabel: 'AI Adoption',
    statDetail: '98% of Product Managers already use AI in their daily work.',
    reasonTitle: 'AI is now the standard.',
    reasonBody:
      'Using AI is no longer a competitive advantage. Every PM has access to the same tools.',
    icon: <AiIcon />,
    impactBadge: 'The Reality',
    impactDesc:
      'AI improves execution, but it does not replace strategic thinking or leadership.',
    solution:
      'Learn to use AI for high-quality decisions instead of just faster execution.',
  },
  {
    id: 1,
    statNum: '39%',
    statValue: 39,
    statLabel: 'AI Training',
    statDetail: 'Only 39% of PMs have received role-specific AI training.',
    reasonTitle: 'Knowledge is the gap.',
    reasonBody:
      'Most PMs use AI daily but have never learned how to apply it strategically.',
    icon: <JudgmentIcon />,
    impactBadge: 'Skill Gap',
    impactDesc:
      'Without structured AI thinking, experience alone is no longer enough.',
    solution:
      'Develop practical AI leadership skills through real business simulations.',
  },
  {
    id: 2,
    statNum: '87%',
    statValue: 87,
    statLabel: 'Leadership Hiring',
    statDetail: 'Senior Product Leadership hiring has grown by 87% in India.',
    reasonTitle: 'Demand is accelerating.',
    reasonBody:
      'Companies are hiring leaders who can connect business strategy with AI execution.',
    icon: <FailureIcon />,
    impactBadge: 'Market Shift',
    impactDesc:
      'Organizations are rewarding leadership capability over execution alone.',
    solution:
      'Practice executive decision-making before you step into leadership roles.',
  },
  {
    id: 3,
    statNum: '30–50%',
    statValue: 100,
    statLabel: 'Salary Premium',
    statDetail: 'AI Product Leaders earn 30–50% more than traditional Product Managers.',
    reasonTitle: 'Leadership creates value.',
    reasonBody:
      'The biggest salary gap today comes from strategic judgment, not years of experience.',
    icon: <CalibrationIcon />,
    impactBadge: 'Career Advantage',
    impactDesc:
      'Companies pay more for leaders who make confident business decisions under uncertainty.',
    solution:
      'Build executive judgment through real-world leadership challenges and boardroom simulations.',
  },
];

export default function DiagnosisSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % diagnosisData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  return (
    <section id="diagnosis" className="relative py-12 md:py-20 overflow-hidden border-b border-white/8 ">
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
        <div className="max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0080C7]/10 border border-[#0080C7]/30 rounded-md text-[10px] font-bold tracking-wider uppercase text-[#0080C7] mb-6 shadow-[0_0_15px_rgba(0,128,199,0.1)]">
            THE DATA
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-5xl leading-tight tracking-tight text-white mb-6">
            Why Product Leadership <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
              Needs a New Playbook..
              {/* Horizontal flare line */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-48 md:w-80 h-0.5 bg-linear-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
            </span>
          </h2>
          <p className="text-gray-100 text-sm md:text-base leading-relaxed max-w-5xl mx-auto mt-4">
        AI didn't replace Product Managers. It changed what companies value most—strategic thinking, executive judgment, and business leadership.   </p>
        </div>

        {/* Desktop Interactive Panel Layout */}
        <div
          className="hidden lg:grid grid-cols-12 gap-8 items-stretch"
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

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider mb-1 block text-[#2563EB]">
                      {item.statLabel}
                    </span>
                    <p className={`text-[14px] font-semibold leading-snug line-clamp-2 ${isActive ? 'text-white' : 'text-white/90 group-hover:text-white/80'
                      }`}>
                      {item.statDetail.replace(item.statNum + ' ', '')}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Analysis Report Card */}
          <div className="col-span-7 flex">
            <div className="w-full rounded-2xl bg-[#0a0c10] border border-[#0080C7]/20 p-6 md:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(0,128,199,0.08)] hover:shadow-[0_0_30px_rgba(0,128,199,0.15)]">

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

              <div>
                {/* Metric Header */}
                <div className="flex items-center justify-between gap-4 mb-8">
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#0080C7] bg-[#0080C7]/10 border border-[#0080C7]/20 px-3 py-1 rounded-sm shadow-[0_0_10px_rgba(0,128,199,0.1)]">
                    ANALYSIS REPORT
                  </span>
                  <div className="flex items-center gap-2 text-xs text-white/80 font-mono tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
                    LIVE DIAGNOSTIC
                  </div>
                </div>

                {/* Stat Headline */}
                <h3 className="font-serif text-xl md:text-[32px] font-bold text-white leading-[1.3] mb-6">
                  {diagnosisData[activeIndex].statDetail.split('MORE').map((part, i, arr) => (
                    <span key={i}>
                      {part.split(diagnosisData[activeIndex].statNum).map((subPart, j, subArr) => (
                        <span key={j}>
                          {subPart}
                          {j < subArr.length - 1 && (
                            <span className="text-[#2563EB]">{diagnosisData[activeIndex].statNum}</span>
                          )}
                        </span>
                      ))}
                      {i < arr.length - 1 && (
                        <span className="text-[#2563EB] drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]">MORE</span>
                      )}
                    </span>
                  ))}
                </h3>

                <div className="w-full h-px bg-white/50 mb-8" />

                {/* Root Cause Detail */}
                <div className="flex gap-5 items-start mb-4">
                  {diagnosisData[activeIndex].icon}
                  <div>
                    <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-wider mb-1">
                      The Root Cause
                    </h4>
                    <h5 className="text-base font-bold text-[#0080C7] mb-2 font-['Outfit',sans-serif]">
                      {diagnosisData[activeIndex].reasonTitle}
                    </h5>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {diagnosisData[activeIndex].reasonBody}
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-white/5 mb-4" />

                {/* Impact vs Fix Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Career Impact Box */}
                  <div className="bg-[#1C1212]/30 border border-red-500/10 rounded-[10px] p-5">
                    <div className="flex items-center gap-2 mb-2.5 text-red-400 text-xs font-bold uppercase tracking-wider">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {diagnosisData[activeIndex].impactBadge}
                    </div>
                    <p className="text-[13px] text-white/60 leading-relaxed">
                      {diagnosisData[activeIndex].impactDesc}
                    </p>
                  </div>

                  {/* Program Fix Box */}
                  <div className="bg-[#121A12]/30 border border-green-500/10 rounded-[10px] p-5">
                    <div className="flex items-center gap-2 mb-2.5 text-green-400 text-xs font-bold uppercase tracking-wider">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      PROGRAM METHOD
                    </div>
                    <p className="text-[13px] text-white/60 leading-relaxed">
                      {diagnosisData[activeIndex].solution}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Layout (Fully expanded cards for ease of reading) */}
        <div className="lg:hidden flex flex-col gap-6">
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
                  <h3 className="font-['Outfit',sans-serif] text-sm md:text-base font-bold text-white leading-snug mt-0.5">
                    {item.statDetail.replace(item.statNum + ' ', '')}
                  </h3>
                </div>
              </div>

              <div className="w-full h-px bg-white/5 my-4" />

              {/* The Root Cause */}
              <div className="flex gap-4 items-start mb-6">
                {item.icon}
                <div>
                  <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1">
                    The Root Cause
                  </h4>
                  <h5 className="text-sm font-bold text-[#0080C7] mb-1.5 font-['Outfit',sans-serif]">
                    {item.reasonTitle}
                  </h5>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {item.reasonBody}
                  </p>
                </div>
              </div>

              {/* Deep Dive Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Career Impact */}
                <div className="bg-[#1C1212]/30 border border-red-500/10 rounded-[10px] p-4">
                  <div className="flex items-center gap-2 mb-1.5 text-red-400 text-xs font-bold uppercase tracking-wider">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {item.impactBadge}
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {item.impactDesc}
                  </p>
                </div>

                {/* Program Fix */}
                <div className="bg-[#121A12]/30 border border-green-500/10 rounded-[10px] p-4">
                  <div className="flex items-center gap-2 mb-1.5 text-green-400 text-xs font-bold uppercase tracking-wider">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    PROGRAM METHOD
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
