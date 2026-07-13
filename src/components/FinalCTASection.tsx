import bgImage from '../assets/pranjalsarkar/1.webp';

export default function FinalCTASection() {
  return (
    <section 
      id="final-cta" 
      className="relative h-[400px] md:h-[420px] flex items-center justify-center overflow-hidden border-b border-white/8 bg-[#000001] group"
      style={{ clipPath: 'inset(0)' }}
    >
      
      {/* Viewport-fixed Background Image clipped to parent */}
      <div 
        className="fixed inset-0 w-full h-full bg-fill bg-center bg-no-repeat opacity-45 pointer-events-none z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Gradient Mask Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70 z-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center w-full">
        
        <div className="flex flex-col items-center justify-center">
          
          {/* Label Badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] text-[9px] font-bold tracking-[0.15em] uppercase text-[#D4A853] bg-[#D4A853]/[0.08] border border-[#D4A853]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853] animate-pulse shrink-0" />
              Limited Seats — Cohort 2
            </span>
          </div>

          {/* Title */}
          <h2 className="font-['Outfit',sans-serif] text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-3 tracking-tight">
            The director role <span className="text-[#D4A853]">won't wait forever.</span>
          </h2>

          {/* Sub */}
          <p className="text-white/85 text-xs md:text-sm leading-relaxed max-w-lg mx-auto mb-6 font-medium">
            Twenty seats. One cohort. A 12-week crucible that builds the kind of product leader companies fight to promote.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3.5 justify-center items-center mb-6 w-full sm:w-auto">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-[6px] text-neutral-950 text-[13px] md:text-[14px] font-bold tracking-wide no-underline transition-all duration-200 bg-[#D4A853] hover:bg-[#E5C180] hover:-translate-y-0.5 hover:shadow-[0_8px_15px_-8px_rgba(212,168,83,0.4)]"
            >
              Apply for Cohort 2 →
            </a>
            <a
              href="#judgment"
              className="px-6 py-2.5 rounded-[6px] text-white text-[13px] md:text-[14px] font-semibold tracking-wide no-underline transition-all duration-200 border border-white/[0.15] bg-white/[0.03] hover:bg-white/[0.08] hover:-translate-y-0.5"
            >
              Curriculum
            </a>
          </div>

          {/* Social Proof Mini Checklist */}
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center border-t border-white/[0.08] pt-4 w-full">
            {[
              { text: 'Application takes 15m' },
              { text: 'Decision in 5 days' },
              { text: 'Cohort 1: 100% promoted' },
            ].map((item, i) => (
              <div key={i} className="flex gap-2 items-center">
                <span className="w-4 h-4 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/25 flex items-center justify-center text-[8px] text-[#D4A853] font-bold shrink-0">
                  ✓
                </span>
                <span className="text-white/60 text-[11px] md:text-xs font-semibold">{item.text}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
