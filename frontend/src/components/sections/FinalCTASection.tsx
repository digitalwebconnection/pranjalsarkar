const bgImage = '/events/benner.png';

export default function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="relative min-h-105 md:min-h-125 flex items-center overflow-hidden bg-[#000000] group"
      style={{ clipPath: 'inset(0)' }}
    >

      {/* Normal Image Element */}
      <img
        src={bgImage}
        alt="CTA Background"
        className="absolute inset-0 w-full h-full object-fill object-right md:object-right pointer-events-none z-0 "
      />

      {/* Left-to-right gradient overlay — dark on left for text, transparent on right for image */}
      <div className="absolute inset-0 bg-linear-to-r from-[#000000]/95 via-[#010308]/50 to-transparent z-1 pointer-events-none" />
      {/* Additional top/bottom vignette */}
      <div className="absolute inset-0 bg-linear-to-b from-[#010308]/0 via-transparent to-[#010308]/40 z-1 pointer-events-none" />

      {/* Core background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-1 flex items-center justify-start pl-20">
        <div className="w-120 h-80 bg-[radial-gradient(ellipse_at_center,rgba(0,128,199,0.1)_0%,transparent_60%)] blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-6 py-8 md:py-32 relative z-10 w-full">
        <div className="flex flex-col items-start justify-center max-w-xl">
          <div className="relative mb-6">
            {/* Title */}
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-6xl leading-tight tracking-tight text-white mb-2 text-left">
              The director role <br className="sm:hidden" />
              <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">won't wait forever.</span>
            </h2>
            {/* Horizontal flare line (left-aligned) */}
            <div className="absolute -bottom-4 left-0 w-48 md:w-80 h-0.5 bg-linear-to-r from-[rgba(24,37,226,1)] via-[rgba(24,37,226,0.6)] to-transparent shadow-[0_0_15px_rgba(24,37,226,0.9)] opacity-80" />
          </div>

          {/* Sub */}
          <p className="text-[#fbfbff] text-sm md:text-base lg:text-lg leading-8 max-w-lg mb-8 font-light text-left">
            Twenty seats. One cohort. A 12-week crucible that builds the kind of product leader companies fight to promote.
          </p>

          {/* CTA Button */}
          <div className="flex flex-row gap-3.5 items-center mb-8">
            <a
              href="#contact"
              className="cursor-pointer px-6 py-2.5 rounded-md text-neutral-950 text-[13px] md:text-xl font-bold tracking-wide no-underline transition-all duration-200 bg-[#0080C7] hover:bg-[#009CEE] hover:-translate-y-0.5 shadow-[0_0_24px_rgba(0,128,199,0.95)]"
            >
              Submit Interview Request →
            </a>
          </div>

          {/* Social Proof Mini Checklist */}
          <div className="flex flex-wrap gap-4 md:gap-6 border-t border-white/8 pt-4">
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
