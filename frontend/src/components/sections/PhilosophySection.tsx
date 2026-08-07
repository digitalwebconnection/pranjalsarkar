import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cardData } from '../../constants/philosophyData';

export default function PhilosophySection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextCard = () => setActiveIdx((prev) => (prev + 1) % cardData.length);
  const prevCard = () => setActiveIdx((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));

  const activeCard = cardData[activeIdx];

  return (
    <section id="transformation" className="relative py-8 md:py-14 overflow-hidden border-b border-white/8 bg-[#000001]">
      {/* Intense Background Radial Glows */}
      <div className="absolute top-[-5%] right-[-10%] w-[60%] h-[80%] z-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.45)_0%,transparent_70%)] blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[60%] h-[60%] z-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,128,199,0.15)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Typography, Manifesto & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-white mb-6">
              What changes after this {" "}
              <span className="relative text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
                 studio program?
                {/* Horizontal flare line */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-48 md:w-72 h-0.5 bg-linear-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
              </span>
            </h2>

            {/* Manifesto Quote Block */}
            <div className="relative border-l-2 border-[#0080C7] pl-6 my-6 shadow-[-4px_0_15px_-4px_rgba(0,128,199,0.6)]">
              <p className="text-lg md:text-xl font-serif  text-white/95 leading-relaxed drop-shadow-sm">
                "The Studio is designed to help you build judgment and not just knowledge."
              </p>
            </div>

            <p className="text-gray-300 text-sm md:text-[15px] lg:text-[17px] leading-8 max-w-xl mb-10 font-sans">
              None of these capabilities are developed by watching lectures or memorizing frameworks. They emerge through repeated executive decisions, boardroom discussions, AI leadership simulations, feedback, reflection, and real business challenges.
            </p>

            {/* See How It Works CTA Button */}
            <a
              href="#program"
              className="group flex sm:inline-flex w-full sm:w-auto justify-center items-center gap-2.5 px-10 py-4 bg-linear-to-r from-[#0080C7] to-[rgba(24,37,226,0.9)] rounded-full text-white font-bold text-sm transition-all duration-300 hover:from-[#00a8ff] hover:to-[rgba(24,37,226,1)] shadow-[0_0_20px_rgba(24,37,226,0.4)] hover:shadow-[0_0_30px_rgba(24,37,226,0.6)] hover:-translate-y-0.5 cursor-pointer self-center sm:self-start"
            >
              Submit Interview Request
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Right Column: Manual Cards */}
          <div className="lg:col-span-6 w-full flex flex-col justify-center items-center relative mt-10 lg:mt-0 px-0 lg:px-4">
            {/* Ambient backlight behind the cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#00a8ff] blur-[120px] opacity-15 pointer-events-none -z-10" />
            
            <div className="relative w-full max-w-120">
              {/* The Card */}
              <div className="relative rounded-xl p-px bg-linear-to-br from-[#00a8ff]/60 via-[#00a8ff]/10 to-transparent shadow-[-15px_-15px_30px_rgba(0,168,255,0.15)] transition-all duration-300 hover:shadow-[-20px_-20px_40px_rgba(0,168,255,0.25)]">
                <div className="relative rounded-xl bg-[#050b14] flex flex-col h-112.5 lg:h-120 overflow-hidden w-full p-8 md:p-12">
                  
                  {/* Top-Left Ambient Glow Overlay */}
                  <div className="absolute top-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_top_left,rgba(0,168,255,0.2),transparent_70%)] pointer-events-none z-0" />
                  
                  <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
                    
                    {!activeCard.isCta ? (
                      <>
                        <div className="text-7xl font-serif font-extrabold text-transparent bg-clip-text bg-linear-to-b from-[#00a8ff] to-[#0044cc] mb-6 drop-shadow-[0_0_15px_rgba(0,168,255,0.4)]">
                          {activeCard.step}
                        </div>
                        <h3 className="font-serif text-2xl md:text-4xl font-bold text-white mb-5 leading-tight">
                          {activeCard.title}
                        </h3>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                          {activeCard.desc}
                        </p>
                      </>
                    ) : (
                      <>
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                          {activeCard.title}
                        </h3>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
                          {activeCard.desc}
                        </p>
                        <a
                          href="#simulation"
                          className="px-8 py-4 bg-linear-to-r from-[#00a8ff] to-[#0044cc] rounded-full text-base font-bold text-white hover:shadow-[0_0_25px_rgba(0,168,255,0.5)] transition-all hover:-translate-y-1"
                        >
                          Explore The Studio
                        </a>
                      </>
                    )}

                  </div>
                  
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center items-center gap-6 mt-8">
                <button 
                  onClick={prevCard}
                  aria-label="Previous card"
                  className="w-12 h-12 rounded-full border border-white/10 bg-[#050b14]/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#00a8ff]/20 hover:border-[#00a8ff]/50 hover:text-[#00a8ff] transition-all duration-300 shadow-[0_0_15px_rgba(0,168,255,0.1)] hover:shadow-[0_0_25px_rgba(0,168,255,0.3)]"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="text-gray-400 font-mono text-sm font-bold tracking-widest">
                  <span className="text-white">{activeCard.step}</span> <span className="text-gray-600">/</span> 08
                </div>
                <button 
                  onClick={nextCard}
                  aria-label="Next card"
                  className="w-12 h-12 rounded-full border border-white/10 bg-[#050b14]/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#00a8ff]/20 hover:border-[#00a8ff]/50 hover:text-[#00a8ff] transition-all duration-300 shadow-[0_0_15px_rgba(0,168,255,0.1)] hover:shadow-[0_0_25px_rgba(0,168,255,0.3)]"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
