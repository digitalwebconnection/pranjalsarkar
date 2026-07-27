import { useRef, useEffect } from 'react';
import { Calendar, Users, Briefcase, Award, Cpu, FileSpreadsheet } from 'lucide-react';
import gsap from 'gsap';
import video from "../../assets/video/youtube.mp4"

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

function TiltCard({ children, className = '' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const sheenRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    const sheen = sheenRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const px = (x / rect.width) - 0.5;
      const py = (y / rect.height) - 0.5;

      // Gentle rotation max 12 degrees
      const rotateX = -py * 12;
      const rotateY = px * 12;

      const sheenX = (x / rect.width) * 100;
      const sheenY = (y / rect.height) * 100;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 500,
        ease: 'power2.out',
        duration: 0.1,
        overwrite: 'auto'
      });

      if (sheen) {
        gsap.to(sheen, {
          opacity: 0.12,
          background: `radial-gradient(circle 120px at ${sheenX}% ${sheenY}%, rgba(255, 255, 255, 0.45), transparent)`,
          duration: 0.2,
          overwrite: 'auto'
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        ease: 'power2.out',
        duration: 0.5,
        overwrite: 'auto'
      });

      if (sheen) {
        gsap.to(sheen, {
          opacity: 0,
          duration: 0.5,
          overwrite: 'auto'
        });
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* 3D Sheen overlay layer */}
      <div
        ref={sheenRef}
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity z-30"
        style={{ mixBlendMode: 'overlay' }}
      />
      {/* Card Content Wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between" style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </div>
  );
}

export default function TakeawaysSection() {

  return (
    <section id="takeaways" className="relative py-8 md:py-14 overflow-hidden border-b border-white/8 bg-[#000000]">
      {/* Enhanced Multi-Layer Ambient Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Top Center Primary Radial Flare Glow */}
        <div className="absolute -top-25 left-1/2 -translate-x-1/2 w-225 h-150 bg-[radial-gradient(ellipse_at_top,rgba(0,136,255,0.25)_0%,rgba(0,60,180,0.12)_45%,transparent_75%)] blur-[60px]" />
        
        {/* Left Side Cyan Atmospheric Glow */}
        <div className="absolute top-[30%] left-[-10%] w-137.5 h-137.5 bg-[radial-gradient(circle_at_center,rgba(0,168,255,0.15)_0%,transparent_60%)] blur-[80px]" />

        {/* Right Side Electric Blue Glow */}
        <div className="absolute top-[60%] right-[-10%] w-137.5 h-137.5 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_60%)] blur-[80px]" />

        {/* Fine Texture Dot Matrix Overlay */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(0, 140, 255, 0.35) 1.5px, transparent 0)',
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="relative mb-6 inline-block">
            <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-white mb-2 text-center">
              Program Takeaways -<br />
              <span className="text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
                not just a certificate.
              </span>
            </h2>

            {/* Centered Lens Flare Line */}
            <div className="relative mt-2 mx-auto w-25 sm:w-40 h-0.75 pointer-events-none flex items-center justify-center">
              <div className="w-full h-[1.5px] bg-linear-to-r from-transparent via-[#0066ff] via-25% to-transparent opacity-95" />
              <div className="absolute inset-0 h-0.75 bg-linear-to-r from-transparent via-[#00d5ff] via-50% to-transparent blur-[1.5px]" />
             
              <div className="absolute w-10 h-1.5 bg-[#0075ff] rounded-full blur-[3px] opacity-95 mix-blend-screen" />
              <div className="absolute w-20 h-2 bg-[#0075ff]/60 rounded-full blur-[7px]" />
            </div>
          </div>

          <p className="text-[#e5e5ec] text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto text-center font-normal mt-2">
            Everything you earn, build, and keep from your 12 weeks in the Studio. Designed to serve as your personal product leadership toolkit for years to come.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Card 1: Product Judgment Framework (Signature) - Spans 7 cols */}
          <div className="lg:col-span-7 relative rounded-2xl p-px bg-linear-to-br from-[#0075ff]/90 via-[#0075ff]/0 to-transparent shadow-[-10px_-10px_30px_rgba(0,117,255,0.3)] transition-all duration-300">
            <div className="relative h-full w-full bg-[#060a14] rounded-[15px] p-8 flex flex-col justify-between overflow-hidden z-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(0,117,255,0.35),transparent_70%)] pointer-events-none opacity-100" />
              {/* Top edge highlight stroke */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-linear-to-r from-transparent via-[#00a2ff]/70 to-transparent opacity-80" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="w-11 h-11 rounded-xl border border-[#0070f3]/40 bg-[#001026] text-[#00a8ff] flex items-center justify-center shrink-0 shadow-[inset_0_0_10px_rgba(0,136,255,0.25)]">
                    <Award size={20} className="text-[#00a8ff] drop-shadow-[0_0_8px_rgba(0,168,255,0.8)]" />
                  </span>
                  <span className="px-3.5 py-1.5 rounded-md bg-[#0080C7]/15 border border-[#0080C7]/40 text-[#00a8ff] text-[9px] font-bold tracking-wider uppercase font-mono shadow-[0_0_15px_rgba(0,128,199,0.3)]">
                    SIGNATURE FRAMEWORK
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight leading-tight">
                  Product Judgment Framework
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-lg mb-8">
                  A proprietary decision-making blueprint designed to navigate high ambiguity, calibrate trade-offs, and deliver product choices at the C-suite and board levels.
                </p>
              </div>

              {/* Visual Blueprint Diagram inside card */}
              <div className="bg-[#03060a] border border-[#0075ff]/25 rounded-xl p-6 mt-auto relative z-10 shadow-inner">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-[#060a14] border border-white/10 w-full text-center shadow-md">
                    <span className="text-[10px] font-bold text-white/90 tracking-wider uppercase mb-2 font-mono">INPUT</span>
                    <div className="text-[#0075ff]/60 mb-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 12 12 17 22 12"></polyline><polyline points="2 17 12 22 22 17"></polyline></svg>
                    </div>
                    <span className="text-xs font-semibold text-white">Ambiguous Data</span>
                  </div>
                  <div className="text-[#00a8ff] font-bold rotate-90 sm:rotate-0 drop-shadow-[0_0_8px_rgba(0,168,255,0.6)]">→</div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-[#0075ff]/10 border border-[#0075ff]/60 w-full text-center shadow-[0_0_20px_rgba(0,168,255,0.3)]">
                    <span className="text-[10px] font-bold text-[#00a8ff] tracking-wider uppercase mb-2 font-mono drop-shadow-[0_0_5px_rgba(0,168,255,0.5)]">CALIBRATION</span>
                    <div className="text-[#0075ff] mb-2 drop-shadow-[0_0_8px_rgba(0,168,255,0.8)]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"></path><rect width="4" height="4" x="10" y="3" rx="2"></rect><path d="M22 9h-4l-3 3-3-3H2"></path><path d="M5 9v12"></path><path d="M19 9v12"></path><path d="M2 21h6"></path><path d="M16 21h6"></path></svg>
                    </div>
                    <span className="text-xs font-semibold text-white">Risk & Trade-off Stack</span>
                  </div>
                  <div className="text-[#00a8ff] font-bold rotate-90 sm:rotate-0 drop-shadow-[0_0_8px_rgba(0,168,255,0.6)]">→</div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-[#060a14] border border-white/10 w-full text-center shadow-md">
                    <span className="text-[10px] font-bold text-white/40 tracking-wider uppercase mb-2 font-mono">OUTPUT</span>
                    <div className="text-[#0075ff]/60 mb-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                    </div>
                    <span className="text-xs font-semibold text-white">Board-Ready Call</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: AI Leadership Toolkit - Spans 5 cols */}
          <TiltCard className="lg:col-span-5 relative rounded-2xl p-px bg-linear-to-br from-[#0075ff]/90 via-[#0075ff]/0 to-transparent shadow-[-10px_-10px_30px_rgba(0,117,255,0.3)] transition-all duration-300">
            <div className="relative h-full w-full bg-[#060a14] rounded-[15px] p-8 flex flex-col justify-between overflow-hidden z-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_top_left,rgba(0,117,255,0.35),transparent_70%)] pointer-events-none opacity-100" />
              {/* Top highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-linear-to-r from-transparent via-[#00a2ff]/60 to-transparent opacity-80" />

              <div className="relative z-10">
                <div className="mb-8">
                  <span className="w-11 h-11 rounded-xl border border-[#0070f3]/40 bg-[#001026] text-[#00a8ff] flex items-center justify-center shrink-0 shadow-[inset_0_0_10px_rgba(0,136,255,0.25)]">
                    <Cpu size={20} className="text-[#00a8ff] drop-shadow-[0_0_8px_rgba(0,168,255,0.8)]" />
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight leading-tight">
                  AI Leadership Toolkit
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  12 advanced mental models for leading product strategy in the age of AI. Learn to position your roadmap, extend AI capabilities, leverage AI for accelerated validation, and shift human focus from execution to pure judgment.
                </p>
              </div>

              {/* List items inside card */}
              <div className="space-y-3 mt-auto relative z-10">
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#03060a] border border-[#0075ff]/20 shadow-inner">
                  <span className="w-2 h-2 rounded-full bg-[#00a8ff] shadow-[0_0_8px_rgba(0,168,255,0.8)]" />
                  <span className="text-xs text-[#00a8ff] font-mono font-bold tracking-wide">model 01 :</span>
                  <span className="text-xs text-white/90 font-mono tracking-wide">the cognitive layering strategy</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#03060a] border border-[#0075ff]/20 shadow-inner">
                  <span className="w-2 h-2 rounded-full bg-[#00a8ff] shadow-[0_0_8px_rgba(0,168,255,0.8)]" />
                  <span className="text-xs text-[#00a8ff] font-mono font-bold tracking-wide">model 02 :</span>
                  <span className="text-xs text-white/90 font-mono tracking-wide">reworking for strategic intent</span>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Card 3: 6 Director Sim Recordings - Spans 4 cols */}
          <TiltCard className="lg:col-span-4 relative rounded-2xl p-px bg-linear-to-br from-[#0075ff]/90 via-[#0075ff]/0 to-transparent shadow-[-10px_-10px_30px_rgba(0,117,255,0.3)] transition-all duration-300">
            <div className="relative h-full w-full bg-[#060a14] rounded-[15px] p-7 flex flex-col justify-between overflow-hidden z-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_top_left,rgba(0,117,255,0.25),transparent_70%)] pointer-events-none opacity-100" />
              <div className="relative z-10">
                <h3 className="font-serif text-lg font-bold text-white mb-2.5 tracking-tight leading-tight">
                  6 Director Sim Recordings
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-6">
                  Full video logs of our 6 high-intensity "Director in the Room" simulations. Study the strategic debate, decision trees, and feedback roundups forever.
                </p>
              </div>

              <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-neutral-900 border border-[#0075ff]/30 flex items-center justify-center mt-auto shadow-md">
                <video
                  src={video}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>
          </TiltCard>

          {/* Card 4: 90-Day Director Plan Template - Spans 4 cols */}
          <TiltCard className="lg:col-span-4 relative rounded-2xl p-px bg-linear-to-br from-[#0075ff]/90 via-[#0075ff]/0 to-transparent shadow-[-10px_-10px_30px_rgba(0,117,255,0.3)] transition-all duration-300">
            <div className="relative h-full w-full bg-[#060a14] rounded-[15px] p-7 flex flex-col justify-between overflow-hidden z-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_top_left,rgba(0,117,255,0.25),transparent_70%)] pointer-events-none opacity-100" />
              <div className="relative z-10">
                <div className="mb-5">
                  <span className="w-10 h-10 rounded-xl border border-[#0070f3]/40 bg-[#001026] text-[#00a8ff] flex items-center justify-center shrink-0 shadow-[inset_0_0_8px_rgba(0,136,255,0.25)]">
                    <FileSpreadsheet size={18} className="text-[#00a8ff] drop-shadow-[0_0_6px_rgba(0,168,255,0.6)]" />
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2.5 tracking-tight leading-tight">
                  90-Day Director Plan Template
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-6">
                  A plug-and-play strategic template to hit the ground running. Map context, establish organizational influence, build alignment, and score early wins.
                </p>
              </div>

              {/* Timeline UI widget */}
              <div className="bg-[#03060a] border border-[#0075ff]/20 rounded-lg p-4 mt-auto">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-[#00a8ff] font-mono bg-[#0075ff]/15 px-2 py-0.5 rounded border border-[#00a8ff]/40 shadow-[0_0_8px_rgba(0,168,255,0.3)]">W1-4</span>
                    <span className="text-[11px] text-white/90">Calibrate Context & Teams</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-white/50 font-mono bg-white/5 px-2 py-0.5 rounded border border-white/10">W5-8</span>
                    <span className="text-[11px] text-white/70">Execute Early Strategy Wins</span>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Card 5: Promotion Narrative Playbook - Spans 4 cols */}
          <TiltCard className="lg:col-span-4 relative rounded-2xl p-px bg-linear-to-br from-[#0075ff]/90 via-[#0075ff]/0 to-transparent shadow-[-10px_-10px_30px_rgba(0,117,255,0.3)] transition-all duration-300">
            <div className="relative h-full w-full bg-[#060a14] rounded-[15px] p-7 flex flex-col justify-between overflow-hidden z-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_top_left,rgba(0,117,255,0.25),transparent_70%)] pointer-events-none opacity-100" />
              <div className="relative z-10">
                <div className="mb-5">
                  <span className="w-10 h-10 rounded-xl border border-[#0070f3]/40 bg-[#001026] text-[#00a8ff] flex items-center justify-center shrink-0 shadow-[inset_0_0_8px_rgba(0,136,255,0.25)]">
                    <Briefcase size={18} className="text-[#00a8ff] drop-shadow-[0_0_6px_rgba(0,168,255,0.6)]" />
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2.5 tracking-tight leading-tight">
                  Promotion Narrative Playbook
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-6">
                  A step-by-step roadmap to present your leadership readiness to executive sponsors, structure skip-level syncs, and command authority.
                </p>
              </div>

              {/* Checklist Playbook widget */}
              <div className="bg-[#03060a] border border-[#0075ff]/20 rounded-lg p-4 mt-auto space-y-2">
                <div className="flex items-center gap-2.5 text-xs text-white/90">
                  <span className="text-[#00a8ff] font-bold text-[11px] drop-shadow-[0_0_5px_rgba(0,168,255,0.8)]">✔</span>
                  <span>Audit decision history records</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/90">
                  <span className="text-[#00a8ff] font-bold text-[11px] drop-shadow-[0_0_5px_rgba(0,168,255,0.8)]">✔</span>
                  <span>Executive positioning playbook</span>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Card 6: Post-Program Office Hours - Spans 5 cols */}
          <TiltCard className="lg:col-span-5 relative rounded-2xl p-px bg-linear-to-br from-[#0075ff]/90 via-[#0075ff]/0 to-transparent shadow-[-10px_-10px_30px_rgba(0,117,255,0.3)] transition-all duration-300">
            <div className="relative h-full w-full bg-[#060a14] rounded-[15px] p-8 flex flex-col justify-between overflow-hidden z-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_top_left,rgba(0,117,255,0.35),transparent_70%)] pointer-events-none opacity-100" />
              <div className="relative z-10">
                <div className="mb-6">
                  <span className="w-11 h-11 rounded-xl border border-[#0070f3]/40 bg-[#001026] text-[#00a8ff] flex items-center justify-center shrink-0 shadow-[inset_0_0_10px_rgba(0,136,255,0.25)]">
                    <Calendar size={20} className="text-[#00a8ff] drop-shadow-[0_0_8px_rgba(0,168,255,0.8)]" />
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3 tracking-tight leading-tight">
                  Post-Program Office Hours
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Growth doesn't stop at week 12. You receive monthly group check-ins and coaching office hours with Pranjal for 3 months post-graduation to support you in applying your frameworks live on the job.
                </p>
              </div>

              {/* Mini Calendar Schedule Widget */}
              <div className="bg-[#03060a] border border-[#0075ff]/20 rounded-lg p-4 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-[#0075ff]/15 border border-[#00a8ff]/40 rounded text-center shrink-0 min-w-13.5 shadow-[0_0_12px_rgba(0,168,255,0.25)]">
                    <span className="block text-[10px] font-bold text-[#00a8ff] uppercase tracking-wider font-mono">MONTH</span>
                    <span className="block text-lg font-extrabold text-white leading-tight font-serif">+1, +2, +3</span>
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] font-bold text-[#00a8ff] uppercase tracking-wider font-mono mb-0.5">Live Cohort Check-Ins</span>
                    <p className="text-xs text-white/70 leading-normal m-0">Live coaching alignment sessions on real challenges.</p>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Card 7: Leadership Portfolio & Alumni (Signature) - Spans 7 cols */}
          <TiltCard className="lg:col-span-7 relative rounded-2xl p-px bg-linear-to-br from-[#0075ff]/90 via-[#0075ff]/0 to-transparent shadow-[-10px_-10px_30px_rgba(0,117,255,0.3)] transition-all duration-300">
            <div className="relative h-full w-full bg-[#060a14] rounded-[15px] p-8 flex flex-col justify-between overflow-hidden z-10">
              <div className="absolute top-0 right-0 w-48 h-48 bg-linear-to-bl from-[#00a8ff]/15 to-transparent blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-11 h-11 rounded-xl border border-[#0070f3]/40 bg-[#001026] text-[#00a8ff] flex items-center justify-center shrink-0 shadow-[inset_0_0_10px_rgba(0,136,255,0.25)]">
                    <Users size={20} className="text-[#00a8ff] drop-shadow-[0_0_8px_rgba(0,168,255,0.8)]" />
                  </span>
                  <span className="px-3 py-1.5 rounded-md bg-[#0080C7]/15 border border-[#0080C7]/40 text-[#00a8ff] text-[9px] font-bold tracking-wider uppercase font-mono shadow-[0_0_15px_rgba(0,128,199,0.25)]">
                    PORTFOLIO & NETWORK
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-3 tracking-tight leading-tight">
                  Leadership Portfolio & Alumni Group
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Graduate with a fully documented Leadership Portfolio containing your decision history, logic debriefs, and final panel thesis. Plus, gain lifetime access to the exclusive Slack alumni community of senior PMs and directors.
                </p>
              </div>

              {/* Slack Channel/Chat Visual Mockup */}
              <div className="bg-[#03060a] border border-[#0075ff]/20 rounded-lg p-5 mt-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-col w-full">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono mb-2">ALUMNI SLACK COMMUNITY</span>
                    <div className="flex items-center gap-2 p-2.5 rounded bg-[#060a14] border border-[#0075ff]/30">
                      <span className="text-[#00a8ff] font-bold font-mono">#</span>
                      <span className="text-xs text-white/95 font-semibold font-mono">leadership-studio-alumni</span>
                      <span className="ml-auto w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                    </div>
                  </div>
                  <div className="flex flex-col shrink-0 min-w-35 text-center sm:text-right">
                    <span className="block text-[10px] text-white/40 uppercase tracking-widest font-mono mb-1">NETWORK STRENGTH</span>
                    <span className="text-base font-extrabold text-[#00a8ff] drop-shadow-[0_0_8px_rgba(0,168,255,0.6)]">200+ Leaders</span>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>

        </div>

      </div>
    </section>
  );
}
