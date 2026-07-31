import bgImage from '../../assets/Pranjal in Events/1.webp';

export default function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="relative h-100 md:h-auto flex items-center justify-center overflow-hidden  bg-[#010308] group"
      style={{ clipPath: 'inset(0)' }}
    >

      {/* Viewport-fixed Background Image clipped to parent */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat   opacity-70 pointer-events-none z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Gradient Mask Overlay matching new dark blue aesthetic */}
      <div className="absolute inset-0 bg-linear-to-b from-[#010308]/80 via-[#010308]/60 to-[#010308]/60 z-0 pointer-events-none" />

      {/* Core background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
        <div className="w-200 h-100 bg-[radial-gradient(ellipse_at_center,rgba(0,128,199,0.15)_0%,transparent_60%)] blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-6 py-10 relative z-10 text-center w-full ">

        <div className="flex flex-col items-center justify-center">

          {/* Label Badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-[#33a8ff] bg-[#0080C7]/5 border border-[#0080C7]/30 shadow-[0_0_15px_rgba(0,128,199,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#33a8ff] animate-pulse shrink-0 shadow-[0_0_8px_rgba(51,168,255,0.8)]" />
              Limited Seats — Cohort 2
            </span>
          </div>

          <div className="relative mb-6">
            {/* Title */}
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-white mb-2">
              The director role <br className="sm:hidden" />
              <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">won't wait forever.</span>
            </h2>
            {/* Horizontal flare line (centered) */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 md:w-80 h-0.5 bg-linear-to-r from-transparent via-[rgba(24,37,226,1)] to-transparent shadow-[0_0_15px_rgba(24,37,226,0.9)] opacity-80" />
          </div>

          {/* Sub */}
          <p className="text-[#fbfbff] text-sm md:text-base lg:text-lg leading-8 max-w-4xl mx-auto mb-8 font-light">
            Twenty seats. One cohort. A 12-week crucible that builds the kind of product leader companies fight to promote.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3.5 justify-center items-center mb-6 w-full sm:w-auto">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-md text-neutral-950 text-[13px] md:text-[14px] font-bold tracking-wide no-underline transition-all duration-200 bg-[#0080C7] hover:bg-[#009CEE] hover:-translate-y-0.5 shadow-[0_0_24px_rgba(0,128,199,0.65)]"
            >
              Apply for Cohort 2 →
            </a>
            <a
              href="#judgment"
              className="px-6 py-2.5 rounded-md text-white text-[13px] md:text-[14px] font-semibold tracking-wide no-underline transition-all duration-200 border border-white/15 bg-white/3 hover:bg-white/8 hover:-translate-y-0.5 hover:border-white/30"
            >
              Curriculum
            </a>
          </div>

          {/* Social Proof Mini Checklist */}
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center border-t border-white/8 pt-4 w-full">
            {[
              { text: 'Application takes 15m' },
              { text: 'Decision in 5 days' },
              { text: 'Cohort 1: 100% promoted' },
            ].map((item, i) => (
              <div key={i} className="flex gap-2 items-center">
                <span className="w-4 h-4 rounded-full bg-[#0080C7]/10 border border-[#0080C7]/25 flex items-center justify-center text-[8px] text-[#0080C7] font-bold shrink-0">
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
