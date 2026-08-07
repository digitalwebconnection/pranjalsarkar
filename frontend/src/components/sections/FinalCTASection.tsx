import personImage from '../../assets/pranjalsarkar/Untitled design.png' // Please ensure the uploaded person's image is saved at this path, or update this path
import { PiTarget, PiUsersThree, PiBuildings, PiChartLineUp } from 'react-icons/pi'

export default function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="relative min-h-150 lg:h-190 flex items-center overflow-hidden bg-[#02050A] group py-6 lg:py-0"
    >




      {/* --- CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0 relative z-10 w-full flex flex-col lg:flex-row items-center h-full">

        {/* Left Column - Person Image */}
        <div className="w-full lg:w-1/2 relative px-8 flex justify-center lg:justify-start lg:-ml-10 xl:-ml-20 mb-12 lg:mb-0 h-full items-end">

          {/* Subtle cyan-blue ambient wash over the whole section */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#009CEE]/8 via-transparent to-transparent pointer-events-none z-0" />

          {/* Faint dot-grid texture on the left edge of the section */}
          <div
            className="absolute left-0 top-[5%] w-[45%] h-[90%] pointer-events-none opacity-30 z-0"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(0,156,238,0.6) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
              maskImage: 'radial-gradient(ellipse at 0% 50%, black 0%, transparent 60%)',
              WebkitMaskImage: 'radial-gradient(ellipse at 0% 50%, black 0%, transparent 60%)'
            }}
          />

          {/* Concentric rings emanating from upper-right area (radar/ripple effect) */}
          <div className="absolute left-[1%] top-[5%] w-[200px] h-[200px] md:w-[600px] md:h-[600px] pointer-events-none z-0">
            <div className="absolute inset-0 rounded-full border-[1.5px] border-[#011aff] opacity-50 scale-[0.15]" />
            <div className="absolute inset-0 rounded-full border-[1.5px] border-[#0a22ff] opacity-80 scale-[0.3]" />
            <div className="absolute inset-0 rounded-full border-[1px] border-[#001aff] opacity-60 scale-[0.45]" />
            <div className="absolute inset-0 rounded-full border-[1px] border-[#001aff] opacity-50 scale-[0.6]" />
            <div className="absolute inset-0 rounded-full border-[1px] border-[#041dfa] opacity-30 scale-[0.75]" />
            <div className="absolute inset-0 rounded-full border-[1px] border-[#061de7] opacity-5 scale-[0.9]" />
          </div>



          {/* Electric blue glow halo behind the portrait */}
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[350px] h-[350px] md:w-[200px] md:h-[200px] bg-[#009CEE]/75 blur-[100px] md:blur-[120px] rounded-full z-10 pointer-events-none" />
          <div className="absolute top-[25%] left-[40%] -translate-x-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#0066FF]/80 blur-[80px] rounded-full z-10 pointer-events-none" />



          <img
            src={personImage}
            alt="Product Leader"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain relative z-20 drop-shadow-[0_0_40px_rgba(0,0,0,0.9)] pt-10 lg:pt-40"
            onError={(e) => {
              // Fallback to previous image if the new one isn't placed yet
              if (e.currentTarget.src.includes('pranjal.png')) {
                e.currentTarget.src = '/events/benner.png';
              }
            }}
          />
          {/* Shadow/gradient at the bottom of the image to blend it nicely */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#02050A] to-transparent z-30 pointer-events-none" />



          {/* Soft glow shadow at bottom-left */}
          <div className="absolute bottom-[-10%] left-[-15%] w-[350px] h-[200px] md:w-112.5 md:h-50 bg-[#0018ee] blur-[90px] md:blur-[110px] rounded-full z-[24] pointer-events-none" />
        </div>

        {/* Right Column - Text & CTA */}
        <div className="w-full lg:w-1/2 flex flex-col items-start lg:pl-4 xl:pl-12 mt-10">

          {/* Top Label */}
          <div className="flex items-center gap-4 mb-4 w-full">
            <span className="text-[#0066FF] font-bold tracking-[0.15em]  text-md md:text-lg  uppercase">
              AI Product Leadership Studio
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#0066FF]/50 relative max-w-[200px]">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#009CEE] rounded-full shadow-[0_0_12px_rgba(0,156,238,1)]" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="font-sans font-bold font-serif text-5xl md:text-5xl lg:text-6xl leading-[1.05] text-white mb-2 tracking-tight">
            Become the <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">Product Leader</span><br />
            Who Drives<br />
            What Matters<span className="text-[#0053ee]">.</span>
          </h2>

          {/* Decorative blue gradient line */}
          <div className="w-24  md:w-32 h-[2px] ms-2 bg-gradient-to-r from-[#0066FF] to-transparent mb-4" />

          {/* Subtitle */}
          <p className="text-[#E0E4EB] text-lg md:text-2xl leading-relaxed max-w-[28rem] mb-8 font-light">
            A simulation-first executive program for experienced PMs ready to lead at the top.
          </p>

          {/* CTA Button */}
          <a
            href="#contact"
            className="group flex items-stretch bg-gradient-to-t from-[#0023a1] to-[#0066FF] hover:from-[#0044FF] hover:to-[#0077FF] text-white rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(0,102,255,0.5)] hover:shadow-[0_0_40px_rgba(0,102,255,0.7)] border border-[#ffffff10] w-fit mb-10 hover:-translate-y-1 overflow-hidden"
          >
            {/* Arrow section */}
            <div className="flex items-center justify-center px-6 md:px-8 py-4 md:py-5 border-r border-white/15 bg-white/5">
              <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            {/* Text section */}
            <div className="flex items-center px-6 md:px-10 py-4 md:py-5 font-semibold text-sm md:text-[17px] tracking-wide uppercase">
              SUBMIT INTERVIEW REQUEST
            </div>
          </a>

          {/* Features Row */}
          <div className="flex flex-wrap md:flex-nowrap justify-between w-full  gap-y-8">

            {/* Feature 1 - Simulation-First Learning */}
            <div className="w-1/2 md:w-1/4 flex flex-col items-center text-center gap-3 px-2">
              <div className="text-[#0066FF]">
                <PiTarget className="w-15 h-15" height="light" />
              </div>
              <span className="text-[13px] text-gray-200 font-medium leading-snug">Simulation-First<br />Learning</span>
            </div>

            {/* Feature 2 - Peer Cohort */}
            <div className="w-1/2 md:w-1/4 flex flex-col items-center text-center gap-3 px-2 md:border-l border-[#0066FF]/20">
              <div className="text-[#0066FF]">
                <PiUsersThree className="w-15 h-15" height="light" />
              </div>
              <span className="text-[13px] text-gray-200 font-medium leading-snug">Peer Cohort of<br />Product Leaders</span>
            </div>

            {/* Feature 3 - Real Company Exposure */}
            <div className="w-1/2 md:w-1/4 flex flex-col items-center text-center gap-3 px-2 md:border-l border-[#0066FF]/20">
              <div className="text-[#0066FF]">
                <PiBuildings className="w-15 h-15" height="light" />
              </div>
              <span className="text-[13px] text-gray-200 font-medium leading-snug">Real Company<br />Exposure</span>
            </div>

            {/* Feature 4 - Leadership Transformation */}
            <div className="w-1/2 md:w-1/4 flex flex-col items-center text-center gap-3 px-2 md:border-l border-[#0066FF]/20">
              <div className="text-[#0066FF]">
                <PiChartLineUp className="w-15 h-15" height="light" />
              </div>
              <span className="text-[13px] text-gray-200 font-medium leading-snug">Leadership<br />Transformation</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
