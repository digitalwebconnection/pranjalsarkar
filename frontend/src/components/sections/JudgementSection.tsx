import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { Target, Calendar, CheckCircle } from 'lucide-react';
const stages = [
  {
    phase: "Week 1",
    title: "Think Like a Product Director",
    weeks: "Week 1",
    focus: "Strategic Judgment",
    desc: "You'll learn to approach problems with strategic judgment, challenge assumptions before others do, and defend important product decisions with confidence instead of opinion.",
    deliverables: [
      "You stop thinking like a Product Manager and start evaluating decisions like a Product Director."
    ],
  },
  {
    phase: "Week 2",
    title: "Own the Business",
    weeks: "Week 2",
    focus: "Business Strategy",
    desc: "You'll learn to connect every product decision to business strategy, customer value and commercial outcomes, making trade-offs that create long-term business impact.",
    deliverables: [
      "You stop talking about features and start talking about business outcomes."
    ],
  },
  {
    phase: "Week 3",
    title: "Lead AI-Native Products",
    weeks: "Week 3",
    focus: "AI Leadership",
    desc: "You'll learn how Product Leaders evaluate AI opportunities, govern responsible AI adoption and make decisions that balance innovation with business risk.",
    deliverables: [
      "You stop using AI as an assistant and start leading AI initiatives with confidence."
    ],
  },
  {
    phase: "Week 4",
    title: "Lead Organizations",
    weeks: "Week 4",
    focus: "Leadership Systems",
    desc: "You'll learn how to align cross-functional teams, design scalable product organizations and create decision systems that help teams move faster together.",
    deliverables: [
      "You stop managing products in isolation and start leading the organization around them."
    ],
  },
  {
    phase: "Week 5",
    title: "Influence Executives",
    weeks: "Week 5",
    focus: "Executive Communication",
    desc: "You'll learn how to communicate strategically, influence difficult conversations and build executive confidence in your recommendations.",
    deliverables: [
      "You stop presenting updates and start shaping executive decisions."
    ],
  },
  {
    phase: "Week 6",
    title: "Product Leadership Exposure",
    weeks: "Week 6",
    focus: "Capstone Experience",
    desc: "You'll be assigned real product company and its leadership to work alongside to solve an actual Product Leadership challenge and present your recommendations to experienced business leaders.",
    deliverables: [
      "You stop preparing for Product Leadership and start practicing it."
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
        <div className="max-w-6xl mx-auto text-center justify-center mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0080C7]/8 border border-[#0080C7]/20 rounded text-[11px] font-semibold tracking-wider uppercase text-[#0080C7] mb-6 shadow-[0_0_15px_rgba(0,128,199,0.1)]">The Complete Studio Curriculum</span>
          <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-5xl leading-tight tracking-tight text-white mb-8">
            Your 5-Week Leadership<br />
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
              Transformation Journey
              {/* Horizontal flare line */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 md:w-80 h-0.5 bg-linear-to-r from-transparent via-[#0044cc] to-transparent shadow-[0_0_20px_rgba(0,68,204,0.9)] opacity-90" />
            </span>
          </h2>

          <p className="text-gray-300 text-sm md:text-[15px] lg:text-[17px] leading-8 max-w-6xl mx-auto font-sans">
            Every week develops one Product Leadership capability that immediately changes how you think, make decisions and operate at work. That capability becomes the foundation for the next week, creating a leadership transformation that builds progressively over five weeks.
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
          blurAmount={0}
        >
          {stages.map((s, i) => (
            <ScrollStackItem key={i}>
              <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 p-6 md:p-8 rounded-xl bg-[#0a0c10] border border-white/10 border-l-[3px] border-l-[#0044cc] shadow-[inset_30px_30px_80px_-20px_rgba(0,68,204,0.4),0_15px_40px_rgba(0,0,0,0.5)] hover:shadow-[inset_30px_30px_100px_-20px_rgba(0,68,204,0.5),0_20px_50px_rgba(0,0,0,0.6)] hover:border-white/20 hover:border-l-[#0044cc] h-110 lg:h-80 flex-col justify-between transition-all duration-500 relative overflow-hidden group">

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
                      Visible Transformation:
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
                </div>

              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

        {/* Separate Card */}
        <div className="max-w-6xl mx-auto  p-6 md:p-8 rounded-xl bg-[#0a0c10] border border-[#0080C7]/30 shadow-[inset_0_0_80px_rgba(0,128,199,0.2),0_0_40px_rgba(0,128,199,0.15)] hover:shadow-[inset_0_0_120px_rgba(0,128,199,0.3),0_0_60px_rgba(0,128,199,0.3)] hover:border-[#002ec7]/90 transition-all duration-500 relative overflow-hidden group text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,128,199,0.25)_0%,transparent_70%)] pointer-events-none opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#002ec7] blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#0044cc] blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />

          <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight tracking-tight drop-shadow-[0_0_15px_rgba(0,128,199,0.5)] relative z-10">
            By the end of six weeks
          </h3>
          <p className="text-gray-300 text-[16px] md:text-[18px] leading-relaxed font-sans max-w-6xl mx-auto relative z-10">
            You'll leave with stronger judgment, greater business understanding, practical AI leadership capability, executive communication skills and experience solving real Product Leadership challenges.
          </p>
        </div>

      </div>
    </section>
  );
}
