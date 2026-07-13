import { Play, Calendar, Users, Briefcase, Award, Cpu, FileSpreadsheet } from 'lucide-react';

export default function TakeawaysSection() {
  return (
    <section id="takeaways" className="relative py-8 md:py-14 overflow-hidden border-b border-white/8 ">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#D4A853]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4A853]/8 border border-[#D4A853]/20 rounded text-[11px] font-semibold tracking-wider uppercase text-[#D4A853] mb-6 mx-auto">
            What You Leave With
          </span>
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-4xl md:text-5xl leading-[1.15] tracking-tight text-white mb-6 text-center">
            Program Takeaways —<br />
            <span className="text-[#D4A853]">not just a certificate.</span>
          </h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-[720px] mx-auto text-center font-medium">
            Everything you earn, build, and keep from your 12 weeks in the Studio. Designed to serve as your personal product leadership toolkit for years to come.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Product Judgment Framework (Signature) - Spans 7 cols */}
          <div className="lg:col-span-7 rounded-xl bg-[#0C0C0C]/80 border border-[#D4A853]/30 p-8 flex flex-col justify-between hover:border-[#D4A853]/60 transition-all duration-300 shadow-[0_20px_50px_-20px_rgba(212,168,83,0.15)] group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#D4A853]/10 to-transparent blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="p-3 bg-[#D4A853]/10 border border-[#D4A853]/25 rounded-lg text-[#D4A853]">
                  <Award size={20} />
                </span>
                <span className="px-2.5 py-1 rounded-[4px] bg-[#D4A853]/15 border border-[#D4A853]/35 text-[#D4A853] text-[9px] font-bold tracking-wider uppercase font-mono">
                  SIGNATURE FRAMEWORK
                </span>
              </div>
              
              <h3 className="font-['Outfit',sans-serif] text-xl md:text-2xl font-extrabold text-white mb-3">
                Product Judgment Framework
              </h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-lg mb-8">
                A proprietary decision-making blueprint designed to navigate high ambiguity, calibrate trade-offs, and defend product choices at the C-suite and Board levels.
              </p>
            </div>

            {/* Visual Blueprint Diagram inside card */}
            <div className="bg-[#121212] border border-white/[0.06] rounded-lg p-5 mt-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-col items-center p-3 rounded bg-white/[0.02] border border-white/[0.04] w-full text-center">
                  <span className="text-[10px] font-bold text-white/40 tracking-wider uppercase mb-1 font-mono">INPUT</span>
                  <span className="text-xs font-semibold text-white">Ambiguous Data</span>
                </div>
                <div className="text-[#D4A853] font-bold rotate-90 sm:rotate-0">→</div>
                <div className="flex flex-col items-center p-3 rounded bg-[#D4A853]/[0.03] border border-[#D4A853]/20 w-full text-center">
                  <span className="text-[10px] font-bold text-[#D4A853] tracking-wider uppercase mb-1 font-mono">CALIBRATION</span>
                  <span className="text-xs font-semibold text-white">Risk & Trade-off Stack</span>
                </div>
                <div className="text-[#D4A853] font-bold rotate-90 sm:rotate-0">→</div>
                <div className="flex flex-col items-center p-3 rounded bg-white/[0.02] border border-white/[0.04] w-full text-center">
                  <span className="text-[10px] font-bold text-white/40 tracking-wider uppercase mb-1 font-mono">OUTCOME</span>
                  <span className="text-xs font-semibold text-white">Exec-Ready Call</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: AI Leadership Toolkit - Spans 5 cols */}
          <div className="lg:col-span-5 rounded-xl bg-[#0C0C0C]/80 border border-white/[0.08] p-8 flex flex-col justify-between hover:border-[#D4A853]/30 transition-all duration-300 shadow-2xl group relative overflow-hidden">
            <div>
              <div className="mb-6">
                <span className="inline-flex p-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white/80 group-hover:text-[#D4A853] group-hover:border-[#D4A853]/25 transition-all">
                  <Cpu size={20} />
                </span>
              </div>
              <h3 className="font-['Outfit',sans-serif] text-xl font-extrabold text-white mb-3">
                AI Leadership Toolkit
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                12 advanced mental models for leading product strategy in the age of AI. Learn to position your roadmap around AI capabilities, leverage AI for accelerated validation, and shift human focus from execution to pure judgment.
              </p>
            </div>

            {/* List items inside card */}
            <div className="space-y-2 mt-auto">
              <div className="flex items-center gap-3 px-3 py-2 rounded bg-white/[0.02] border border-white/[0.04]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853]" />
                <span className="text-xs text-white/80 font-mono">Model 04: The Cognitive Layering strategy</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded bg-white/[0.02] border border-white/[0.04]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853]" />
                <span className="text-xs text-white/80 font-mono">Model 07: Prompting for Strategic Intent</span>
              </div>
            </div>
          </div>

          {/* Card 3: 6 Director Sim Recordings - Spans 4 cols */}
          <div className="lg:col-span-4 rounded-xl bg-[#0C0C0C]/80 border border-white/[0.08] p-7 flex flex-col justify-between hover:border-[#D4A853]/30 transition-all duration-300 shadow-2xl group">
            <div>
              <div className="mb-5">
                <span className="inline-flex p-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white/80 group-hover:text-[#D4A853] group-hover:border-[#D4A853]/25 transition-all">
                  <Play size={20} />
                </span>
              </div>
              <h3 className="font-['Outfit',sans-serif] text-lg font-extrabold text-white mb-2.5">
                6 Director Sim Recordings
              </h3>
              <p className="text-white/60 text-xs leading-relaxed mb-6">
                Full video logs of our 6 high-intensity "Director in the Room" simulations. Study the strategic debate, decision trees, and feedback roundups forever.
              </p>
            </div>

            {/* Simulated Video Player UI Widget */}
            <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-neutral-900 border border-white/[0.05] flex items-center justify-center mt-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              <span className="w-10 h-10 rounded-full bg-[#D4A853] hover:bg-[#E5C180] transition-colors flex items-center justify-center text-neutral-900 cursor-pointer shadow-lg z-10 translate-y-2 group-hover:translate-y-0 duration-300">
                <Play size={16} fill="currentColor" className="ml-0.5" />
              </span>
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[9px] font-mono text-white/50 z-10">
                <span>SIM_REPLAY_03.MP4</span>
                <span>01:14:22</span>
              </div>
            </div>
          </div>

          {/* Card 4: 90-Day Director Plan Template - Spans 4 cols */}
          <div className="lg:col-span-4 rounded-xl bg-[#0C0C0C]/80 border border-white/[0.08] p-7 flex flex-col justify-between hover:border-[#D4A853]/30 transition-all duration-300 shadow-2xl group">
            <div>
              <div className="mb-5">
                <span className="inline-flex p-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white/80 group-hover:text-[#D4A853] group-hover:border-[#D4A853]/25 transition-all">
                  <FileSpreadsheet size={20} />
                </span>
              </div>
              <h3 className="font-['Outfit',sans-serif] text-lg font-extrabold text-white mb-2.5">
                90-Day Director Plan Template
              </h3>
              <p className="text-white/60 text-xs leading-relaxed mb-6">
                A plug-and-play strategic template to hit the ground running. Map context, establish organizational influence, build alignment, and score early wins.
              </p>
            </div>

            {/* Timeline UI widget */}
            <div className="bg-[#121212] border border-white/[0.05] rounded-lg p-4 mt-auto">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-[#D4A853] font-mono bg-[#D4A853]/5 px-2 py-0.5 rounded border border-[#D4A853]/20">W1-4</span>
                  <span className="text-[11px] text-white/70">Calibrate Context & Teams</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-white/40 font-mono bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.05]">W5-8</span>
                  <span className="text-[11px] text-white/70">Execute Early Strategy Wins</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Promotion Narrative Playbook - Spans 4 cols */}
          <div className="lg:col-span-4 rounded-xl bg-[#0C0C0C]/80 border border-white/[0.08] p-7 flex flex-col justify-between hover:border-[#D4A853]/30 transition-all duration-300 shadow-2xl group">
            <div>
              <div className="mb-5">
                <span className="inline-flex p-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white/80 group-hover:text-[#D4A853] group-hover:border-[#D4A853]/25 transition-all">
                  <Briefcase size={20} />
                </span>
              </div>
              <h3 className="font-['Outfit',sans-serif] text-lg font-extrabold text-white mb-2.5">
                Promotion Narrative Playbook
              </h3>
              <p className="text-white/60 text-xs leading-relaxed mb-6">
                A step-by-step roadmap to present your leadership readiness to executive sponsors, structure skip-level syncs, and command authority.
              </p>
            </div>

            {/* Checklist Playbook widget */}
            <div className="bg-[#121212] border border-white/[0.05] rounded-lg p-4 mt-auto space-y-2">
              <div className="flex items-center gap-2.5 text-xs text-white/80">
                <span className="text-[#D4A853] text-[10px]">✔</span>
                <span>Audit decision history records</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/80">
                <span className="text-[#D4A853] text-[10px]">✔</span>
                <span>Executive positioning playbook</span>
              </div>
            </div>
          </div>

          {/* Card 6: Post-Program Office Hours - Spans 5 cols */}
          <div className="lg:col-span-5 rounded-xl bg-[#0C0C0C]/80 border border-white/[0.08] p-8 flex flex-col justify-between hover:border-[#D4A853]/30 transition-all duration-300 shadow-2xl group">
            <div>
              <div className="mb-6">
                <span className="inline-flex p-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white/80 group-hover:text-[#D4A853] group-hover:border-[#D4A853]/25 transition-all">
                  <Calendar size={20} />
                </span>
              </div>
              <h3 className="font-['Outfit',sans-serif] text-xl font-extrabold text-white mb-3">
                Post-Program Office Hours
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Growth doesn't stop at week 12. You receive monthly group check-ins and coaching office hours with Pranjal for 3 months post-graduation to support you in applying your frameworks live on the job.
              </p>
            </div>

            {/* Mini Calendar Schedule Widget */}
            <div className="bg-[#121212] border border-white/[0.05] rounded-lg p-4 mt-auto">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-[#D4A853]/10 border border-[#D4A853]/20 rounded text-center shrink-0 min-w-[54px]">
                  <span className="block text-[10px] font-bold text-[#D4A853] uppercase tracking-wider font-mono">MONTH</span>
                  <span className="block text-lg font-extrabold text-white leading-tight font-serif">+1, +2, +3</span>
                </div>
                <div className="text-left">
                  <span className="block text-[10px] font-bold text-[#D4A853] uppercase tracking-wider font-mono mb-0.5">Live Cohort Check-Ins</span>
                  <p className="text-xs text-white/60 leading-normal m-0">Live coaching alignment sessions on real challenges.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 7: Leadership Portfolio & Alumni (Signature) - Spans 7 cols */}
          <div className="lg:col-span-7 rounded-xl bg-[#0C0C0C]/80 border border-[#D4A853]/30 p-8 flex flex-col justify-between hover:border-[#D4A853]/60 transition-all duration-300 shadow-[0_20px_50px_-20px_rgba(212,168,83,0.15)] group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#D4A853]/10 to-transparent blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="p-3 bg-[#D4A853]/10 border border-[#D4A853]/25 rounded-lg text-[#D4A853]">
                  <Users size={20} />
                </span>
                <span className="px-2.5 py-1 rounded-[4px] bg-[#D4A853]/15 border border-[#D4A853]/35 text-[#D4A853] text-[9px] font-bold tracking-wider uppercase font-mono">
                  PORTFOLIO & NETWORK
                </span>
              </div>
              <h3 className="font-['Outfit',sans-serif] text-xl md:text-2xl font-extrabold text-white mb-3">
                Leadership Portfolio & Alumni Group
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Graduate with a fully documented Leadership Portfolio containing your decision history, logic debriefs, and final panel thesis. Plus, gain lifetime access to the exclusive Slack alumni community of senior PMs and directors.
              </p>
            </div>

            {/* Slack Channel/Chat Visual Mockup */}
            <div className="bg-[#121212] border border-white/[0.06] rounded-lg p-5 mt-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-col w-full">
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest font-mono mb-2">ALUMNI SLACK COMMUNITY</span>
                  <div className="flex items-center gap-2 p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-[#D4A853] font-bold font-mono">#</span>
                    <span className="text-xs text-white/90 font-semibold font-mono">leadership-studio-alumni</span>
                    <span className="ml-auto w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="flex flex-col shrink-0 min-w-[140px] text-center sm:text-right">
                  <span className="block text-[10px] text-white/30 uppercase tracking-widest font-mono mb-1">NETWORK STRENGTH</span>
                  <span className="text-base font-extrabold text-[#D4A853]">200+ Leaders</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
