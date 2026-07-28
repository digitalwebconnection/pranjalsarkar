import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { Target, Calendar, CheckCircle } from 'lucide-react';
const stages = [
  {
    phase: "Week 1",
    title: "Think Like a Product Director",
    weeks: "Week 1",
    focus: "Strategic Judgment",
    desc: "Learn to evaluate product decisions with executive thinking, challenge assumptions, and defend your recommendations with confidence.",

    deliverables: [
      "Executive Decision Framework",
      "Strategic Judgment Assessment",
      "Decision Review Session",
    ],

    actions: [
      "Leadership Thinking",
      "Decision Frameworks",
      "Executive Feedback",
    ],
  },

  {
    phase: "Week 2",
    title: "Own the Business",
    weeks: "Week 2",
    focus: "Business Strategy",
    desc: "Connect product strategy with revenue, customer value, and business outcomes to make stronger executive decisions.",

    deliverables: [
      "Business Strategy Canvas",
      "Commercial Thinking",
      "Executive Trade-off Models",
    ],

    actions: [
      "Business Metrics",
      "Growth Strategy",
      "Value Creation",
    ],
  },

  {
    phase: "Week 3",
    title: "Lead AI Products",
    weeks: "Week 3",
    focus: "AI Leadership",
    desc: "Learn how Product Leaders evaluate AI opportunities, manage risks, and build AI-first product strategies.",

    deliverables: [
      "AI Decision Playbook",
      "Responsible AI Framework",
      "AI Strategy Toolkit",
    ],

    actions: [
      "AI Leadership",
      "Risk Management",
      "Product Strategy",
    ],
  },

  {
    phase: "Week 4",
    title: "Lead Organizations",
    weeks: "Week 4",
    focus: "Leadership Systems",
    desc: "Build alignment across teams, improve decision systems, and lead cross-functional product organizations.",

    deliverables: [
      "Leadership Operating Model",
      "Cross-functional Alignment",
      "Decision Systems",
    ],

    actions: [
      "Team Leadership",
      "Stakeholder Alignment",
      "Execution Excellence",
    ],
  },

  {
    phase: "Week 5",
    title: "Influence Executives",
    weeks: "Week 5",
    focus: "Executive Communication",
    desc: "Present ideas with clarity, influence difficult conversations, and earn executive trust in high-stakes meetings.",

    deliverables: [
      "Executive Presentation",
      "Communication Framework",
      "Influence Playbook",
    ],

    actions: [
      "Boardroom Skills",
      "Executive Presence",
      "Leadership Communication",
    ],
  },

  {
    phase: "Week 6",
    title: "Real Leadership Challenge",
    weeks: "Week 6",
    focus: "Capstone Experience",
    desc: "Solve a real Product Leadership challenge for a company and present your recommendations to experienced business leaders.",

    deliverables: [
      "Real Company Project",
      "Leadership Presentation",
      "Executive Feedback",
    ],

    actions: [
      "Real Business Case",
      "Panel Review",
      "Leadership Certificate",
    ],
  },
];

export default function JudgementSection() {
  return (
    <section id="judgment" className="relative py-12 md:py-20 overflow-hidden border-b border-white/8 bg-[#000001]">
      {/* Background Decorative Gradients */}
      {/* Background Decorative Wavy Dots & Glow */}
      <div className="absolute top-0 right-0 w-150 h-150 md:w-225 md:h-225 opacity-80 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #0080C7 2px, transparent 2px)',
          backgroundSize: '32px 32px',
          transform: 'perspective(800px) rotateX(60deg) rotateY(-20deg) skewX(20deg) scale(1.2) translateX(10%) translateY(-10%)',
          WebkitMaskImage: 'radial-gradient(circle at 70% 30%, black 10%, transparent 60%)',
          maskImage: 'radial-gradient(circle at 70% 30%, black 10%, transparent 60%)'
        }}
      />
      <div className="absolute top-0 right-0 w-[50%] h-[60%] z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,68,204,0.4)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[60%] h-[60%] z-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,128,199,0.1)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center justify-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0080C7]/8 border border-[#0080C7]/20 rounded text-[11px] font-semibold tracking-wider uppercase text-[#0080C7] mb-6 shadow-[0_0_15px_rgba(0,128,199,0.1)]">The Method</span>
          <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-white mb-8">
            From Product Manager<br />
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
              To Product Director.
              {/* Horizontal flare line */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 md:w-80 h-0.5 bg-linear-to-r from-transparent via-[#0044cc] to-transparent shadow-[0_0_20px_rgba(0,68,204,0.9)] opacity-90" />
            </span>
          </h2>

          <p className="text-gray-300 text-sm md:text-[15px] lg:text-[17px] leading-8 max-w-3xl mx-auto font-sans">
            A structured 6-week journey that transforms how you think, communicate, and make executive-level product decisions.</p>
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
          blurAmount={0}
        >
          {stages.map((s, i) => (
            <ScrollStackItem key={i}>
              <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 p-8 md:p-12 rounded-xl bg-[#0a0c10] border border-white/10 border-l-[3px] border-l-[#0044cc] shadow-[inset_30px_30px_80px_-20px_rgba(0,68,204,0.4),0_15px_40px_rgba(0,0,0,0.5)] hover:shadow-[inset_30px_30px_100px_-20px_rgba(0,68,204,0.5),0_20px_50px_rgba(0,0,0,0.6)] hover:border-white/20 hover:border-l-[#0044cc] min-h-115 flex-col justify-between transition-all duration-500 relative overflow-hidden group">

                {/* Inner radial glow */}
                <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,rgba(0,68,204,0.15),transparent_70%)] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Left Column */}
                <div className="flex flex-col justify-between h-full min-h-40 lg:min-h-0 relative z-10">
                  <div>
                    <span className="text-[#0080C7] text-[10px] font-bold tracking-[0.2em] uppercase block mb-3 font-mono drop-shadow-[0_0_5px_rgba(0,128,199,0.5)]">
                      {s.phase}
                    </span>
                    <h3 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight tracking-tight drop-shadow-md">
                      {s.title}
                    </h3>
                    <div className="flex items-start gap-2 mb-6">
                      <Target size={14} className="text-[#0080C7] mt-0.5 shrink-0 drop-shadow-[0_0_5px_rgba(0,128,199,0.6)]" />
                      <p className="text-[#0080C7] text-[12px] font-semibold uppercase tracking-wide leading-snug drop-shadow-[0_0_5px_rgba(0,128,199,0.3)]">
                        Focus: <span className="text-white/90 font-sans tracking-normal capitalize">{s.focus}</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-wider text-[#0080C7] bg-[#0080C7]/5 border border-[#0080C7]/30 px-3.5 py-2 rounded-sm font-mono shadow-[0_0_10px_rgba(0,128,199,0.1)]">
                      <Calendar size={13} className="opacity-80" />
                      {s.weeks}
                    </span>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-between gap-6 relative z-10">
                  <div>
                    <p className="text-gray-300 text-[15px] md:text-[17px] leading-relaxed mb-6 font-sans">
                      {s.desc}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-white/10 w-full my-6" />

                    {/* Core Deliverables */}
                    <h4 className="text-[#0080C7] text-[11px] font-bold uppercase tracking-widest mb-4 font-mono drop-shadow-[0_0_5px_rgba(0,128,199,0.3)]">
                      Core Outcomes & Deliverables:
                    </h4>
                    <ul className="space-y-4">
                      {s.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300 text-[15px] md:text-[16px] leading-relaxed font-sans">
                          <CheckCircle size={18} className="text-[#0080C7] shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(0,128,199,0.5)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hands-on Assets tags at the bottom */}
                  <div className="pt-4">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#0080C7] mb-3 font-mono drop-shadow-[0_0_5px_rgba(0,128,199,0.3)]">Hands-on Assets:</span>
                    <div className="flex flex-wrap gap-2.5">
                      {s.actions.map((a, j) => (
                        <span
                          key={j}
                          className="px-3.5 py-1.5 rounded-sm bg-transparent border border-[#0080C7]/30 text-white/90 text-[11px] font-semibold tracking-wide hover:bg-[#0080C7]/10 hover:border-[#0080C7]/50 transition-all shadow-[0_0_10px_rgba(0,128,199,0.05)]"
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
