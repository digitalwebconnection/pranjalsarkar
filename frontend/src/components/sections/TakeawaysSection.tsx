export default function TakeawaysSection() {
  return (
    <section id="cohort-spec" className="relative py-8 md:py-14 overflow-hidden border-b border-white/8 bg-[#000000]">
      {/* Enhanced Multi-Layer Ambient Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Top Center Primary Radial Flare Glow */}
        <div className="absolute -top-25 left-1/2 -translate-x-1/2 w-[120%] h-150 bg-[radial-gradient(ellipse_at_top,rgba(0,136,255,0.5)_0%,rgba(0,60,180,0.3)_45%,transparent_80%)] blur-[120px]" />
        
        {/* Left Side Cyan Atmospheric Glow */}
        <div className="absolute top-[20%] left-[-15%] w-150 h-150 bg-[radial-gradient(circle_at_center,rgba(0,168,255,0.35)_0%,transparent_70%)] blur-[120px]" />

        {/* Right Side Electric Blue Glow */}
        <div className="absolute top-[50%] right-[-15%] w-150 h-150 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.35)_0%,transparent_70%)] blur-[100px]" />

        {/* Bottom Center Secondary Glow */}
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-150 h-100 bg-[radial-gradient(ellipse_at_bottom,rgba(0,136,255,0.4)_0%,rgba(0,60,180,0.25)_50%,transparent_70%)] blur-[80px]" />

        {/* Fine Texture Dot Matrix Overlay */}
        <div 
          className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(0, 140, 255, 0.45) 1.5px, transparent 0)',
            backgroundSize: '18px 18px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="relative mb-6 inline-block">
            <span className="text-[#00a8ff] text-[10px] font-bold tracking-[0.2em] uppercase block mb-3 font-mono">COHORT SPEC</span>
            <h2 className="font-serif font-bold text-3xl md:text-5xl lg:text-5xl leading-tight tracking-tight text-white mb-2 text-center">
              Everything You Need to Know<br />
              <span className="text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
                Before You Apply
              </span>
            </h2>

            {/* Centered Lens Flare Line */}
            <div className="relative mt-4 mx-auto w-25 sm:w-40 h-0.75 pointer-events-none flex items-center justify-center">
              <div className="w-full h-[1.5px] bg-linear-to-r from-transparent via-[#0066ff] via-25% to-transparent opacity-95" />
              <div className="absolute inset-0 h-0.75 bg-linear-to-r from-transparent via-[#00d5ff] via-50% to-transparent blur-[1.5px]" />
              <div className="absolute w-10 h-1.5 bg-[#0075ff] rounded-full blur-[3px] opacity-95 mix-blend-screen" />
              <div className="absolute w-20 h-2 bg-[#0075ff]/60 rounded-full blur-[7px]" />
            </div>
          </div>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-stretch">
          
          {/* Card 1: Duration */}
          <div className="relative rounded-xl p-px bg-linear-to-br from-[#0075ff]/80 via-[#0075ff]/5 to-transparent shadow-[-15px_-15px_30px_rgba(0,117,255,0.15)] transition-all duration-300 group hover:shadow-[-20px_-20px_40px_rgba(0,117,255,0.3)]">
            <div className="relative h-full w-full bg-[#060a14] rounded-xl overflow-hidden p-8 flex flex-col z-10 transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_top_left,rgba(0,168,255,0.15),transparent_70%)] pointer-events-none transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 opacity-60" />
              <h3 className="font-serif text-2xl font-bold text-white mb-4 tracking-tight">Duration</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-1">5 Weeks Live Studio</p>
              <p className="text-gray-300 text-base leading-relaxed">Up to 30 Days Real Company Exposure</p>
            </div>
          </div>

          {/* Card 2: Live Studio */}
          <div className="relative rounded-xl p-px bg-linear-to-br from-[#0075ff]/80 via-[#0075ff]/5 to-transparent shadow-[-15px_-15px_30px_rgba(0,117,255,0.15)] transition-all duration-300 group hover:shadow-[-20px_-20px_40px_rgba(0,117,255,0.3)]">
            <div className="relative h-full w-full bg-[#060a14] rounded-xl overflow-hidden p-8 flex flex-col z-10 transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_top_left,rgba(0,168,255,0.15),transparent_70%)] pointer-events-none transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 opacity-60" />
              <h3 className="font-serif text-2xl font-bold text-white mb-4 tracking-tight">Live Studio</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-1">32+ Hours Live Sessions</p>
              <p className="text-gray-300 text-base leading-relaxed">Group Simulations and AI Workshops</p>
            </div>
          </div>

          {/* Card 3: Weekly Commitment */}
          <div className="relative rounded-xl p-px bg-linear-to-br from-[#0075ff]/80 via-[#0075ff]/5 to-transparent shadow-[-15px_-15px_30px_rgba(0,117,255,0.15)] transition-all duration-300 group hover:shadow-[-20px_-20px_40px_rgba(0,117,255,0.3)]">
            <div className="relative h-full w-full bg-[#060a14] rounded-xl overflow-hidden p-8 flex flex-col z-10 transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_top_left,rgba(0,168,255,0.15),transparent_70%)] pointer-events-none transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 opacity-60" />
              <h3 className="font-serif text-2xl font-bold text-white mb-4 tracking-tight">Weekly Commitment</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-1">4 Hours Saturday + 4 Hours Sunday</p>
              <p className="text-gray-300 text-base leading-relaxed">3-5 Hours of Weekly Practice</p>
            </div>
          </div>

          {/* Card 4: Application Process */}
          <div className="relative rounded-xl p-px bg-linear-to-br from-[#0075ff]/80 via-[#0075ff]/5 to-transparent shadow-[-15px_-15px_30px_rgba(0,117,255,0.15)] transition-all duration-300 group hover:shadow-[-20px_-20px_40px_rgba(0,117,255,0.3)]">
            <div className="relative h-full w-full bg-[#060a14] rounded-xl overflow-hidden p-8 flex flex-col z-10 transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_top_left,rgba(0,168,255,0.15),transparent_70%)] pointer-events-none transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 opacity-60" />
              <h3 className="font-serif text-2xl font-bold text-white mb-4 tracking-tight">Application Process</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-2">Admission is interview-only.</p>
              <p className="text-gray-200 text-sm leading-relaxed">Every cohort is carefully curated through the Leadership Fit Interview.</p>
            </div>
          </div>

          {/* Card 5: Fee */}
          <div className="relative rounded-xl p-px bg-linear-to-br from-[#0075ff]/80 via-[#0075ff]/5 to-transparent shadow-[-15px_-15px_30px_rgba(0,117,255,0.15)] transition-all duration-300 group hover:shadow-[-20px_-20px_40px_rgba(0,117,255,0.3)]">
            <div className="relative h-full w-full bg-[#060a14] rounded-xl overflow-hidden p-8 flex flex-col z-10 transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_top_left,rgba(0,168,255,0.15),transparent_70%)] pointer-events-none transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 opacity-60" />
              <h3 className="font-serif text-2xl font-bold text-white mb-4 tracking-tight">Fee</h3>
              <p className="text-white text-xl font-semibold mb-3 tracking-wide">₹49,500 <span className="text-gray-200 font-normal text-md ml-1 tracking-normal">(Founding Cohort Price)</span></p>
              <p className="text-gray-200 text-sm leading-relaxed">
                This is the lowest price this program will ever be offered at. As cohort outcomes are established the fee will increase. Future cohort price: ₹1,50,000.
              </p>
            </div>
          </div>

          {/* Card 6: Timings */}
          <div className="relative rounded-xl p-px bg-linear-to-br from-[#0075ff]/80 via-[#0075ff]/5 to-transparent shadow-[-15px_-15px_30px_rgba(0,117,255,0.15)] transition-all duration-300 group hover:shadow-[-20px_-20px_40px_rgba(0,117,255,0.3)]">
            <div className="relative h-full w-full bg-[#060a14] rounded-xl overflow-hidden p-8 flex flex-col z-10 transition-all duration-300">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_top_left,rgba(0,168,255,0.15),transparent_70%)] pointer-events-none transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 opacity-60" />
              <h3 className="font-serif text-2xl font-bold text-white mb-4 tracking-tight">Timings</h3>
              <p className="text-gray-300 text-base font-semibold mb-3">Saturday and Sunday</p>
              <div className="space-y-1.5">
                <p className="text-gray-200 text-sm font-mono"><span className="text-gray-300 font-sans font-medium min-w-22.5 inline-block">INDIA:</span> 12:00PM – 4:00PM</p>
                <p className="text-gray-200 text-sm font-mono"><span className="text-gray-300 font-sans font-medium min-w-22.5 inline-block">UAE:</span> 10:30AM – 2:30PM</p>
                <p className="text-gray-200 text-sm font-mono"><span className="text-gray-300 font-sans font-medium min-w-22.5 inline-block">SINGAPORE:</span> 4:00PM – 8:00PM</p>
                <p className="text-gray-200 text-sm font-mono"><span className="text-gray-300 font-sans font-medium min-w-22.5 inline-block">UK:</span> 7:30AM – 11:30AM</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

