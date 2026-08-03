import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { CheckCircle } from 'lucide-react';
import { stages } from '../../constants/judgementData';

export default function JudgementSection() {
  return (
    <section id="judgment" className="relative py-8 md:py-14 overflow-hidden border-b border-white/8 bg-[#000001]">
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
            What You Learn<br />
            <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
              Each Week
              {/* Horizontal flare line */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 md:w-80 h-0.5 bg-linear-to-r from-transparent via-[#0044cc] to-transparent shadow-[0_0_20px_rgba(0,68,204,0.9)] opacity-90" />
            </span>
          </h2>

          <p className="text-gray-300 text-sm md:text-[15px] lg:text-[17px] leading-8 max-w-6xl mx-auto font-sans">
            Every week builds one executive capability through simulation, live instruction, AI practice and independent study.
          </p>
        </div>

        {/* Interactive Scroll Stack Container */}
        <ScrollStack
          useWindowScroll={true}
          itemDistance={150}
          itemScale={0.03}
          itemStackDistance={28}
          stackPosition="12%"
          scaleEndPosition="6%"
          baseScale={0.9}
          blurAmount={0}
        >
          {stages.map((s, i) => (
            <ScrollStackItem key={i}>
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 p-6 md:p-8 rounded-xl bg-[#0a0c10] border border-white/10 border-l-[3px] border-l-[#0044cc] shadow-[inset_30px_30px_80px_-20px_rgba(0,68,204,0.4),0_15px_40px_rgba(0,0,0,0.5)] hover:shadow-[inset_30px_30px_100px_-20px_rgba(0,68,204,0.5),0_20px_50px_rgba(0,0,0,0.6)] hover:border-white/20 hover:border-l-[#0044cc] h-auto min-h-100 flex-col justify-between transition-all duration-500 relative overflow-hidden group">

                {/* Inner radial glow */}
                <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,rgba(0,68,204,0.15),transparent_70%)] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Left Column */}
                <div className="flex flex-col gap-8 relative z-10 lg:sticky lg:top-8 self-start">
                  <div>
                    <span className="text-[#0080C7] text-[10px] font-bold tracking-[0.2em] uppercase block mb-3 font-mono drop-shadow-[0_0_5px_rgba(0,128,199,0.5)]">
                      {s.phase}
                    </span>
                    <h3 className="font-serif text-2xl lg:text-2xl font-bold text-white mb-5 leading-tight tracking-tight drop-shadow-md pr-4">
                      {s.title}
                    </h3>
                  </div>

                  <div className="pt-6 lg:pt-0">
                    {/* Transformation Expected */}
                    <h4 className="text-[#0080C7] text-[11px] font-bold uppercase tracking-widest mb-3 font-mono drop-shadow-[0_0_5px_rgba(0,128,199,0.3)]">
                      Transformation Expected:
                    </h4>
                    <p className="text-gray-300 text-[14px] md:text-[15px] leading-relaxed font-sans italic border-l-2 border-[#0080C7]/40 pl-4 py-1 bg-linear-to-r from-[#0080C7]/5 to-transparent">
                      {s.transformation}
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6 relative z-10 pt-6 lg:pt-0">
                  <div>

                    {/* Curriculum Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-10 md:gap-y-8">
                      {s.curriculum.map((cur, idx) => (
                        <div key={idx} className="flex flex-col">
                          <h4 className="text-white font-serif font-bold text-[17px] leading-tight mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                            {cur.category}
                          </h4>
                          <p className="text-[#0080C7] text-[10px] md:text-[11px]  tracking-wider mb-4 leading-relaxed opacity-90 block max-w-[90%]">
                            {cur.meta}
                          </p>
                          <ul className="space-y-3">
                            {cur.items.map((item, iIdx) => (
                              <li key={iIdx} className="flex items-start gap-2.5 text-gray-300 text-[14px] leading-relaxed font-sans">
                                <CheckCircle size={15} strokeWidth={2.5} className="text-[#0080C7] shrink-0 mt-0.75 drop-shadow-[0_0_5px_rgba(0,128,199,0.5)]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

        {/* Spacer to allow the final card to scroll cleanly without the next section overlapping it prematurely */}
        <div className="h-[60vh] min-h-75" aria-hidden="true" />

        {/* Post-Week 5 Section */}
        <div className="relative z-20  mt-12">
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#0044cc] opacity-10 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-[#0080C7] text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 font-mono drop-shadow-[0_0_15px_rgba(0,128,199,0.6)]">
                What Happens After Week 5?
              </h2>
              <p className="text-gray-300 text-[16px] md:text-[18px] font-sans max-w-4xl mx-auto leading-relaxed px-4 drop-shadow-md">
                After five weeks of simulations, decision principles and AI practice, you move into up to <span className="text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">30 days of real company exposure</span> where you work on a strategic challenge provided by a real product company.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {/* Step 01 */}
              <div className="bg-[#0a0c10] border border-[#0080C7]/20 p-6 rounded-xl hover:border-[#0080C7]/70 hover:bg-[#0080C7]/10 transition-all duration-300 group shadow-[0_0_20px_rgba(0,128,199,0.15)] hover:shadow-[0_0_40px_rgba(0,128,199,0.4)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0080C7] opacity-0 group-hover:opacity-20 blur-[50px] transition-opacity duration-500 rounded-full" />
                <div className="text-[#0080C7] text-4xl font-serif font-bold mb-4 opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_15px_rgba(0,128,199,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(0,128,199,0.8)] relative z-10">01</div>
                <h4 className="text-white text-lg font-bold mb-3 font-serif leading-snug drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] relative z-10">Understand the Business Challenge</h4>
                <p className="text-gray-400 text-[14px] leading-relaxed font-sans group-hover:text-gray-200 transition-colors relative z-10">
                  The real company leadership introduces the business context, strategic challenge, expectations and constraints you will work within.
                </p>
              </div>
              {/* Step 02 */}
              <div className="bg-[#0a0c10] border border-[#0080C7]/20 p-6 rounded-xl hover:border-[#0080C7]/70 hover:bg-[#0080C7]/10 transition-all duration-300 group shadow-[0_0_20px_rgba(0,128,199,0.15)] hover:shadow-[0_0_40px_rgba(0,128,199,0.4)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0080C7] opacity-0 group-hover:opacity-20 blur-[50px] transition-opacity duration-500 rounded-full" />
                <div className="text-[#0080C7] text-4xl font-serif font-bold mb-4 opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_15px_rgba(0,128,199,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(0,128,199,0.8)] relative z-10">02</div>
                <h4 className="text-white text-lg font-bold mb-3 font-serif leading-snug drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] relative z-10">Investigate and Build Your Point of View</h4>
                <p className="text-gray-400 text-[14px] leading-relaxed font-sans group-hover:text-gray-200 transition-colors relative z-10">
                  You study the real problem, gather evidence, work through incomplete information and decide what you believe the real company should do.
                </p>
              </div>
              {/* Step 03 */}
              <div className="bg-[#0a0c10] border border-[#0080C7]/20 p-6 rounded-xl hover:border-[#0080C7]/70 hover:bg-[#0080C7]/10 transition-all duration-300 group shadow-[0_0_20px_rgba(0,128,199,0.15)] hover:shadow-[0_0_40px_rgba(0,128,199,0.4)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0080C7] opacity-0 group-hover:opacity-20 blur-[50px] transition-opacity duration-500 rounded-full" />
                <div className="text-[#0080C7] text-4xl font-serif font-bold mb-4 opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_15px_rgba(0,128,199,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(0,128,199,0.8)] relative z-10">03</div>
                <h4 className="text-white text-lg font-bold mb-3 font-serif leading-snug drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] relative z-10">Build Your Strategy With Your Judgment</h4>
                <p className="text-gray-400 text-[14px] leading-relaxed font-sans group-hover:text-gray-200 transition-colors relative z-10">
                  You develop your own strategy and document the decisions, trade-offs, risks and reasoning behind your recommendation.
                </p>
              </div>
              {/* Step 04 */}
              <div className="bg-[#0a0c10] border border-[#0080C7]/20 p-6 rounded-xl hover:border-[#0080C7]/70 hover:bg-[#0080C7]/10 transition-all duration-300 group shadow-[0_0_20px_rgba(0,128,199,0.15)] hover:shadow-[0_0_40px_rgba(0,128,199,0.4)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0080C7] opacity-0 group-hover:opacity-20 blur-[50px] transition-opacity duration-500 rounded-full" />
                <div className="text-[#0080C7] text-4xl font-serif font-bold mb-4 opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_15px_rgba(0,128,199,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(0,128,199,0.8)] relative z-10">04</div>
                <h4 className="text-white text-lg font-bold mb-3 font-serif leading-snug drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] relative z-10">Face the Leadership Team and Defend Your Strategy</h4>
                <p className="text-gray-400 text-[14px] leading-relaxed font-sans group-hover:text-gray-200 transition-colors relative z-10">
                  You present your recommendation to real company leaders, respond to their questions and defend the judgment behind the decisions you made.
                </p>
              </div>
            </div>

            <div className="bg-[#0a0c10] border border-[#0080C7]/40 p-6 md:p-8 rounded-xl text-center max-w-7xl mx-auto relative overflow-hidden group hover:border-[#0080C7]/80 transition-all duration-500 shadow-[0_0_40px_-10px_rgba(0,128,199,0.4)] hover:shadow-[0_0_60px_-5px_rgba(0,128,199,0.6)]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,128,199,0.25)_0%,transparent_70%)] pointer-events-none opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <h4 className="text-white font-serif text-2xl md:text-3xl font-bold mb-6 drop-shadow-[0_0_15px_rgba(0,128,199,0.8)] relative z-10">What You Walk Away With</h4>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 relative z-10">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#0080C7] drop-shadow-[0_0_8px_rgba(0,128,199,0.6)]" size={22} />
                  <span className="text-gray-200 font-sans text-[17px] font-medium drop-shadow-md">Certificate of Completion</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#0080C7] drop-shadow-[0_0_8px_rgba(0,128,199,0.6)]" size={22} />
                  <span className="text-gray-200 font-sans text-[17px] font-medium drop-shadow-md">Experience Letter</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-[#0080C7] drop-shadow-[0_0_8px_rgba(0,128,199,0.6)]" size={22} />
                  <span className="text-gray-200 font-sans text-[17px] font-medium drop-shadow-md">Product Leadership Award</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
