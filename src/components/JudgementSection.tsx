import ScrollStack, { ScrollStackItem } from './ScrollStack';

const stages = [
  {
    phase: 'Phase 1',
    title: 'Calibrate Your Baseline',
    weeks: 'Weeks 1–2',
    focus: 'Self-Calibration & Executive Gap Analysis',
    desc: 'Before you can build Director-level judgment, you must understand your default decision-making patterns. We begin by stress-testing your baseline, exposing blind spots in your strategic, commercial, and technical reasoning.',
    deliverables: [
      'Personalized PM Judgment Index (calibrated against 100+ Heads of Product)',
      'Director-Level Competency Map outlining your top 3 growth vectors',
      'Strategic communication plan to realign executive perception of your impact'
    ],
    actions: ['PM Judgment Audit', 'Stakeholder Map Exercise', 'Personal Board of Directors framework'],
  },
  {
    phase: 'Phase 2',
    title: 'Practice Under Pressure',
    weeks: 'Weeks 3–7',
    focus: 'Active Simulation & Peer Challenge',
    desc: 'You do not learn product judgment by watching. You learn by making hard choices under fire. Every week, you will step into a simulated board room where you face high-stakes, ambiguous decisions, defending your choices against direct peer and mentor challenge.',
    deliverables: [
      '6 complete decision briefs covering portfolio strategy, AI resource trade-offs, and critical pivots',
      'Live video review feedback on your executive presence and presentation style',
      'Custom prompts and models to leverage AI as a second-brain judgment simulator'
    ],
    actions: ['6× Sim Scenarios', 'Weekly Peer Calibration', 'AI Judgment Toolkit workshops'],
  },
  {
    phase: 'Phase 3',
    title: 'Build Your Narrative',
    weeks: 'Weeks 8–10',
    focus: 'Executive Presence & Promotion Strategy',
    desc: 'Building great product judgment is only half the battle; the other half is making sure the executive team recognizes it. We focus on rewriting your professional narrative, shifting how you present your achievements, and structuring your case for promotion.',
    deliverables: [
      'A complete Promotion Case Document containing your decision portfolio and business case',
      'Tailored 90-day transition roadmap for your target Director/Head of Product role',
      'One-on-one narrative audit with Pranjal to fine-tune your messaging'
    ],
    actions: ['1:1 Coaching Session', 'Promotion Narrative workshop', '90-Day Director Plan template'],
  },
  {
    phase: 'Phase 4',
    title: 'Step Into the Room',
    weeks: 'Weeks 11–12',
    focus: 'Final Thesis & Panel Defense',
    desc: 'The capstone of the program. You will present your synthesized product leadership thesis to an active panel of VP and C-level product executives, proving your ability to steer product vision, defend resource allocations, and navigate AI disruption.',
    deliverables: [
      'Synthesized Product Leadership Thesis approved by executive panel',
      'Verified Product Leadership Portfolio showcasing decision history and logic',
      'Lifetime membership in the exclusive Leadership Studio Alumni network'
    ],
    actions: ['Leadership Thesis presentation', 'Panel feedback session', 'Alumni network onboarding'],
  },
];

export default function JudgementSection() {
  return (
    <section id="judgment" className="relative py-8 md:py-10 overflow-hidden border-b border-white/8 ">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center justify-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4A853]/8 border border-[#D4A853]/20 rounded text-[11px] font-semibold tracking-wider uppercase text-[#D4A853] mb-6">The Method</span>
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-4xl md:text-[3.5rem] leading-[1.15] tracking-tight text-white mb-6">
            How Leadership-Level<br />
            <span className="text-[#D4A853]">Judgment Gets Built</span>
          </h2>

          <p className="text-lg text-white/90 leading-relaxed max-w-5xl mx-auto">
            Judgment isn't taught through videos. It's built through reps, feedback, and calibrated pressure. Here's our 4-phase methodology.
          </p>
        </div>

        {/* Interactive Scroll Stack Container */}
        <ScrollStack
          useWindowScroll={true}
          itemDistance={100}
          itemScale={0.03}
          itemStackDistance={28}
          stackPosition="12%"
          scaleEndPosition="6%"
          baseScale={0.9}
          blurAmount={1.5}
        >
          {stages.map((s, i) => (
            <ScrollStackItem key={i}>
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 p-8 md:p-12 rounded-xl bg-[#121212] border border-white/8 border-l-4 border-l-[#D4A853] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] min-h-[460px] flex-col justify-between">
                
                {/* Left Column */}
                <div className="flex flex-col justify-between h-full min-h-[160px] lg:min-h-0">
                  <div>
                    <span className="text-[#D4A853] text-[10px] font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
                      {s.phase}
                    </span>
                    <h3 className="font-['Outfit',sans-serif] text-2xl lg:text-3xl font-extrabold text-white mb-4 leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-[#D4A853] text-[11px] font-semibold uppercase tracking-wider mb-6">
                      Focus: {s.focus}
                    </p>
                  </div>
                  <div>
                    <span className="inline-block text-[11px] font-bold tracking-wider text-[#D4A853] bg-[#D4A853]/8 border border-[#D4A853]/20 px-3.5 py-1.5 rounded-[4px] font-mono">
                      {s.weeks}
                    </span>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 font-medium">
                      {s.desc}
                    </p>
                    
                    {/* Divider */}
                    <div className="h-px bg-white/8 w-full my-5" />

                    {/* Core Deliverables */}
                    <h4 className="text-white text-[11px] font-bold uppercase tracking-wider mb-3.5">
                      Core Outcomes & Deliverables:
                    </h4>
                    <ul className="space-y-3">
                      {s.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-white/70 text-xs md:text-sm leading-relaxed">
                          <span className="text-[#D4A853] shrink-0 mt-0.5 font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hands-on Assets tags at the bottom */}
                  <div className="pt-2">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Hands-on Assets:</span>
                    <div className="flex flex-wrap gap-2.5">
                      {s.actions.map((a, j) => (
                        <span
                          key={j}
                          className="px-3.5 py-1.5 rounded-[4px] bg-white/3 border border-white/8 text-white text-[11px] font-semibold tracking-wide hover:border-[#D4A853]/30 transition-colors"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
}
