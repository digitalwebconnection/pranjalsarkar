import { useState, useEffect } from 'react';
import { BookOpen, Target, CheckCircle } from 'lucide-react';

const modules = [
  {
    week: 'Weeks 1–2',
    title: 'PM Judgment Audit & Calibration',
    focus: 'Establish your baseline competency mapping and executive perception profile.',
    caseStudy: 'Simulation: The Executive Stakeholder Audit. Calibrating leadership narrative style.',
    deliverable: 'Strategic Competency Matrix & Gap Remediation Roadmap',
    topics: [
      'What "Director-level thinking" actually means in practice',
      'The Judgment Stack: intuition, data, context, conviction',
      'PM Archetype Assessment — knowing your default mode',
      'Stakeholder power mapping for senior PMs',
    ],
  },
  {
    week: 'Weeks 3–4',
    title: 'Decision Architecture',
    focus: 'Master decision architecture under extreme uncertainty and time pressure.',
    caseStudy: 'Simulation: The Irreversible Bet. Defending product decisions with <50% data.',
    deliverable: 'Decision Log template and Reversible vs Irreversible playbook',
    topics: [
      'Making decisions with incomplete data at speed',
      'Reversible vs. irreversible decisions framework',
      'The "Right Call in the Wrong Room" scenario',
      'AI as a decision-support tool — not a crutch',
    ],
  },
  {
    week: 'Weeks 5–6',
    title: 'Strategy & Tradeoffs',
    focus: 'Align product strategy with business value and navigate stakeholder negotiation.',
    caseStudy: 'Simulation: The Strategic Tradeoff. Saying "no" to a major customer request from the VP.',
    deliverable: 'Strategic Positioning Brief & Tradeoff negotiation outline',
    topics: [
      'Product strategy as a set of defensible bets',
      'Saying no at the Director level — and making it land',
      'Roadmap negotiation with exec stakeholders',
      'The AI Feature Trap: when to build vs. integrate',
    ],
  },
  {
    week: 'Weeks 7–8',
    title: 'Leading Up, Across & Down',
    focus: 'Develop executive communication and command influence across engineering, design, and growth.',
    caseStudy: 'Simulation: The C-Suite Roadmap Pitch. Structuring your business case for maximum impact.',
    deliverable: 'Executive Business Case Deck & Cross-Functional RACI matrix',
    topics: [
      'Communicating product vision to the C-suite',
      'Managing EMs and designers at the leadership level',
      'Cross-functional influence without authority',
      'Building and presenting a business case for your roadmap',
    ],
  },
  {
    week: 'Weeks 9–10',
    title: 'Promotion Readiness & Narrative',
    focus: 'Structure your narrative for skip-level reviews and design your transition roadmap.',
    caseStudy: 'Simulation: The Promotion Panel. Building and presenting your promotion case.',
    deliverable: '5-Part Promotion Narrative Document & 90-Day Transition Plan',
    topics: [
      'The 5-part Director Promotion Narrative framework',
      'Evidence vs. expectation — what your skip-level actually wants',
      'Your 90-day plan for the role above you',
      '1:1 coaching session — personalized to your context',
    ],
  },
  {
    week: 'Weeks 11–12',
    title: 'The Leadership Thesis',
    focus: 'Synthesize your program learnings into a defensible Product Leadership Thesis.',
    caseStudy: 'Simulation: The Leadership Thesis Presentation. Defending your strategy to a VP of Product panel.',
    deliverable: 'Completed Executive Portfolio & Signed Leadership Thesis',
    topics: [
      'Building a portfolio of decisions, not deliverables',
      'Leadership Thesis presentation to panel',
      'Panel Q&A and director-level feedback session',
      'Alumni onboarding and network activation',
    ],
  },
];

export default function CurriculumSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % modules.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [activeTab, isPaused]);

  return (
    <section id="curriculum" className="relative py-12 md:py-16 overflow-hidden border-b border-white/8 bg-[#000001]">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#D4A853]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4A853]/8 border border-[#D4A853]/20 rounded text-[11px] font-semibold tracking-wider uppercase text-[#D4A853] mb-6">
              Curriculum
            </span>
            <h2 className="font-['Outfit',sans-serif] font-extrabold text-4xl md:text-5xl leading-[1.15] tracking-tight text-white mb-6">
              12 Weeks.<br />
              <span className="text-[#D4A853]">Built for Directors.</span>
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-[580px]">
              Every week is live. Every session builds on the last. No filler. No padding. Just the reps that matter.
            </p>
          </div>

          {/* Key Facts List */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Live sessions', value: '24 hrs' },
              { label: 'Simulation scenarios', value: '6 total' },
              { label: 'Frameworks introduced', value: '18+' },
              { label: 'Alumni from Cohort 1', value: '18 promoted' },
            ].map((s, i) => (
              <div
                key={i}
                className="py-4 px-5 rounded-[6px] bg-[#121212] border border-white/[0.08] flex flex-col justify-center"
              >
                <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest mb-1">{s.label}</span>
                <span className="font-['Outfit',sans-serif] text-[#D4A853] text-[16px] md:text-[18px] font-black">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Split-Screen Dashboard & Mobile Tabbed View */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Mobile Horizontal Navigation Tabs */}
          <div className="lg:hidden flex overflow-x-auto gap-2 pb-4 scrollbar-none snap-x">
            {modules.map((m, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`snap-center px-4 py-3 rounded-[6px] border text-[11px] font-bold uppercase tracking-wider whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  activeTab === i
                    ? 'bg-[#D4A853] text-neutral-950 border-[#D4A853]'
                    : 'bg-[#121212] text-white/60 border-white/[0.08]'
                }`}
              >
                {m.week}
              </button>
            ))}
          </div>

          {/* Left Column: Vertical Timeline selector (Desktop only) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-3 relative before:absolute before:left-[27px] before:top-8 before:bottom-8 before:w-[1px] before:bg-white/[0.08]">
            {modules.map((m, i) => {
              const isActive = activeTab === i;
              return (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex gap-5 items-center p-5 rounded-lg border text-left cursor-pointer transition-all duration-300 group z-10 ${
                    isActive
                      ? 'bg-[#121212] border-[#D4A853]/40 shadow-[0_15px_30px_-10px_rgba(212,168,83,0.1)]'
                      : 'bg-transparent border-transparent hover:bg-white/[0.02]'
                  }`}
                >
                  {/* Timeline circle indicator */}
                  <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                    isActive
                      ? 'bg-[#D4A853] border-[#D4A853] scale-110 shadow-[0_0_8px_#D4A853]'
                      : 'bg-neutral-900 border-white/20 group-hover:border-[#D4A853]'
                  }`}
                  />
                  
                  <div className="min-w-0">
                    <div className="text-[#D4A853] text-[9px] font-bold tracking-widest uppercase mb-1 font-mono">
                      {m.week}
                    </div>
                    <span className={`font-['Outfit',sans-serif] text-sm md:text-base font-extrabold transition-colors block ${
                      isActive ? 'text-white' : 'text-white/60 group-hover:text-white'
                    }`}>
                      {m.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Curriculum Card Panel */}
          <div className="lg:col-span-7 rounded-xl bg-[#121212] border border-white/[0.08] p-8 md:p-10 flex flex-col justify-between shadow-2xl relative min-h-[480px]">
            {/* Background Light Ray */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4A853]/5 to-transparent blur-xl pointer-events-none" />

            <div>
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-6">
                <div>
                  <span className="text-[#D4A853] text-[10px] font-bold tracking-[0.2em] uppercase block mb-1 font-mono">
                    {modules[activeTab].week}
                  </span>
                  <h3 className="font-['Outfit',sans-serif] text-xl md:text-2xl font-black text-white leading-tight">
                    {modules[activeTab].title}
                  </h3>
                </div>
                <span className="px-3 py-1 bg-white/[0.03] border border-white/[0.08] rounded text-white/50 text-[10px] font-bold uppercase tracking-wider font-mono">
                  Module {activeTab + 1}
                </span>
              </div>

              {/* Focus and Topics Grid */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-bold text-white/40 tracking-widest uppercase mb-2 font-mono flex items-center gap-2">
                    <Target size={12} className="text-[#D4A853]" /> Module Focus
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed font-medium">
                    {modules[activeTab].focus}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-white/40 tracking-widest uppercase mb-3.5 font-mono flex items-center gap-2">
                    <BookOpen size={12} className="text-[#D4A853]" /> Core Subjects covered
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {modules[activeTab].topics.map((t, idx) => (
                      <div key={idx} className="flex gap-3 items-start p-2.5 rounded bg-white/[0.01] border border-white/[0.03]">
                        <span className="text-[#D4A853] shrink-0 mt-0.5 font-bold text-xs">→</span>
                        <span className="text-white/70 text-xs md:text-sm leading-normal">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Simulation & Deliverable Details Footer */}
            <div className="border-t border-white/[0.08] pt-6 mt-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded bg-[#D4A853]/[0.02] border border-[#D4A853]/25">
                <div>
                  <span className="block text-[9px] font-bold text-[#D4A853] uppercase tracking-wider font-mono mb-1">
                    WEEKLY PRACTICAL WORK
                  </span>
                  <p className="text-xs text-white/90 font-bold m-0">
                    {modules[activeTab].caseStudy}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-white/50">
                <CheckCircle size={14} className="text-[#D4A853] shrink-0" />
                <span>
                  <strong className="text-white/85 font-semibold">Key Deliverable:</strong> {modules[activeTab].deliverable}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
