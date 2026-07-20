import { useState, useEffect } from 'react';

// Custom Vector Icons representing structural issues
const CalibrationIcon = () => (
  <div className="w-10 h-10 rounded-[6px] bg-[#0080C7]/10 border border-[#0080C7]/20 flex items-center justify-center text-[#0080C7] shrink-0">
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
      <circle cx="7.5" cy="16.5" r="1.5" stroke="currentColor" />
      <circle cx="16.5" cy="7.5" r="1.5" stroke="currentColor" />
    </svg>
  </div>
);

const JudgmentIcon = () => (
  <div className="w-10 h-10 rounded-[6px] bg-[#0080C7]/10 border border-[#0080C7]/20 flex items-center justify-center text-[#0080C7] shrink-0">
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  </div>
);

const AiIcon = () => (
  <div className="w-10 h-10 rounded-[6px] bg-[#0080C7]/10 border border-[#0080C7]/20 flex items-center justify-center text-[#0080C7] shrink-0">
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z" />
      <path strokeLinecap="round" d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </svg>
  </div>
);

const FailureIcon = () => (
  <div className="w-10 h-10 rounded-[6px] bg-[#0080C7]/10 border border-[#0080C7]/20 flex items-center justify-center text-[#0080C7] shrink-0">
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  </div>
);

const StatRing = ({ value, label, isActive }: { value: number; label: string; isActive: boolean }) => {
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
          className="stroke-white/[0.04] fill-none"
          strokeWidth={stroke}
        />
        <circle
          cx="32"
          cy="32"
          r={r}
          className={`fill-none transition-all duration-700 ease-out ${
            isActive ? 'stroke-[#0080C7]' : 'stroke-white/80'
          }`}
          strokeWidth={stroke}
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className={`absolute text-[12px] font-['Outfit',sans-serif] font-bold ${
        isActive ? 'text-[#0080C7]' : 'text-white/90'
      }`}>
        {label}
      </span>
    </div>
  );
};

const diagnosisData = [
  {
    id: 0,
    statNum: '78%',
    statValue: 78,
    statLabel: 'Career Stagnation',
    statDetail: '78% of senior PMs report feeling stuck for 2+ years before a leadership move.',
    reasonTitle: 'Your calibration environment is broken.',
    reasonBody: 'Most companies reward shipping velocity, not decision quality. So your feedback loop trains you to move fast, not think right.',
    icon: <CalibrationIcon />,
    impactBadge: 'Stagnant Loop',
    impactDesc: 'You become highly efficient at delivery, but are passed over for strategic roles because your strategic muscles never develop.',
    solution: 'We rebuild your decision-making framework from the ground up, forcing you to calibrate against senior leadership expectations.',
  },
  {
    id: 1,
    statNum: '61%',
    statValue: 61,
    statLabel: 'Promotion Key',
    statDetail: '61% of PM promotions to Director cite "judgment" as the deciding factor, not delivery.',
    reasonTitle: 'Nobody teaches judgment explicitly.',
    reasonBody: 'Every PM course covers frameworks. None cover the messy, ambiguous moment of deciding what actually matters — and defending it.',
    icon: <JudgmentIcon />,
    impactBadge: 'Invisible Bar',
    impactDesc: 'You keep refining your PM execution playbooks, but fail to realize that leadership is looking for calibrated risk-taking and conviction.',
    solution: 'Live, high-stakes simulations where you make real business calls under fire and defend them to experienced product leaders.',
  },
  {
    id: 2,
    statNum: '3×',
    statValue: 100,
    statLabel: 'Speed Multiplier',
    statDetail: 'PMs who practice structured decision-making get promoted 3× faster.',
    reasonTitle: 'You\'ve never had a safe space to fail.',
    reasonBody: 'Director-level thinking requires reps at high-stakes decisions. Most PMs never get those reps until they\'re already supposed to have the answer.',
    icon: <FailureIcon />,
    impactBadge: 'Failure Aversion',
    impactDesc: 'In your daily role, failing a high-stakes decision has real career consequences. This leads to risk aversion and playing it safe.',
    solution: 'A calibrated, low-risk sandbox environment where you can fail safely and run through 10 years of decision-making reps in 12 weeks.',
  },
  {
    id: 3,
    statNum: '91%',
    statValue: 91,
    statLabel: 'AI Mandate',
    statDetail: '91% of product leaders say AI has made strategic judgment MORE critical, not less.',
    reasonTitle: 'AI amplifies execution, not wisdom.',
    reasonBody: 'Tools handle research, synthesis, and writing. What\'s scarce is the human who decides what to build, why, and when to stop.',
    icon: <AiIcon />,
    impactBadge: 'Commoditized Execution',
    impactDesc: 'As AI automates the mechanical parts of product management, PMs who only know how to execute become commoditized.',
    solution: 'Develop high-leverage "judgment-first" workflows that leverage AI for heavy lifting while elevating your strategic output.',
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
    <section id="diagnosis" className="relative py-8 md:py-10 overflow-hidden border-b border-white/8 ">
      {/* Dynamic Progress Bar Animation Keyframe */}
      <style dangerouslySetInnerHTML={{__html: `
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
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0080C7]/8 border border-[#0080C7]/20 rounded text-[11px] font-semibold tracking-wider uppercase text-[#0080C7] mb-6">
            The Diagnosis
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-5xl leading-tight tracking-tight text-white mb-6">
            Why this keeps happening <br />
            <span className="text-[#0080C7]">and the data behind it.</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-8 max-w-4xl mx-auto">
            This isn't a motivation problem. It's a structural one. Here is the actual diagnostic data and the root causes keeping product talent capped.
          </p>
        </div>

        {/* Desktop Interactive Panel Layout */}
        <div 
          className="hidden lg:grid grid-cols-12 gap-8 items-stretch"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          {/* Left Column: Interactive Selector Cards */}
          <div className="col-span-5 flex flex-col gap-4">
            <div className="text-xs font-bold text-white/90 uppercase tracking-wider mb-2 pl-2">
              Select Data Point
            </div>
            
            {diagnosisData.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative flex items-center gap-5 p-5 rounded-xl text-left border transition-all duration-300 group cursor-pointer ${
                    isActive
                      ? 'bg-[#121212] border-[#0080C7]/80 shadow-[0_0_24px_rgba(0,128,199,0.25)] hover:shadow-[0_0_24px_rgba(0,128,199,0.35)]'
                      : 'bg-transparent border-white/5 hover:bg-white/[0.02] hover:border-white/10 hover:shadow-[0_0_15px_rgba(0,128,199,0.1)]'
                  }`}
                >
                  {/* Indicator arrow pointing to the detailed report */}
                  {isActive && (
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#0080C7]/80 z-20" />
                  )}

                  <StatRing value={item.statValue} label={item.statNum} isActive={isActive} />

                  <div className="flex-1 min-w-0">
                    <span className={`text-[10px] font-bold uppercase tracking-wider mb-1 block ${
                      isActive ? 'text-[#0080C7]' : 'text-white/90'
                    }`}>
                      {item.statLabel}
                    </span>
                    <p className={`text-[14px] font-semibold leading-snug line-clamp-2 ${
                      isActive ? 'text-white' : 'text-white/90 group-hover:text-white/80'
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
            <div className="w-full rounded-xl bg-[#121212] border border-white/50 p-4 md:p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-[#0080C7]/30 hover:shadow-[0_0_30px_rgba(0,128,199,0.15)]">
              {/* Dynamic visual progress line loader */}
              {isAutoplay && (
                <div 
                  key={activeIndex} 
                  className="absolute top-0 left-0 h-[2px] bg-[#0080C7] animate-progress-timer" 
                />
              )}

              {/* Subtle background header line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5" />
              
              <div>
                {/* Metric Header */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#0080C7] bg-[#0080C7]/10 border border-[#0080C7]/20 px-3 py-1 rounded-[4px]">
                    ANALYSIS REPORT
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-white/80 font-mono">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    LIVE DIAGNOSTIC
                  </div>
                </div>

                {/* Stat Headline */}
                <h3 className="font-serif text-xl md:text-2xl font-extrabold text-white leading-snug mb-4">
                  {diagnosisData[activeIndex].statDetail}
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
            <div key={item.id} className="rounded-[16px] bg-[#121212] border border-white/8 p-6 md:p-8 flex flex-col relative overflow-hidden transition-all duration-300 hover:border-[#0080C7]/30 hover:shadow-[0_0_30px_rgba(0,128,199,0.15)]">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0080C7]/30 to-transparent" />
              
              {/* Stat Circle & Label Row */}
              <div className="flex items-center gap-4 mb-5">
                <StatRing value={item.statValue} label={item.statNum} isActive={true} />
                <div>
                  <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#0080C7]">
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
