import { useState } from 'react';
import pranjalsarkar from "../../assets/pranjalsarkar/image1.webp"

const stats = [
  { num: '200+', label: 'Senior PMs Trained' },
  { num: '94%', label: 'Promotion Rate' },
  { num: '18', label: 'Companies' },
  { num: '3.2×', label: 'Avg. Salary Jump' },
];

export default function HeroSection() {

  const [fading] = useState(false);

  return (
    <section id="hero" className="relative h-[80vh] flex items-center overflow-hidden bg-[#000001] border-b border-white/8 py-20 lg:py-0">

      <div className="absolute inset-0 z-0   " />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-5 items-center">

          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div
              className={`w-full transition-all duration-300 ease-out ${fading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
            >
              {/* Badge */}
              <div className="flex justify-start mb-3">
                Applications Open
              </div>

              {/* Headline */}
              <h1 className="font-serif font-bold leading-tight tracking-tight text-white mb-2 text-3xl md:text-5xl">
                Stop Managing Product.
              </h1>

              {/* Accent line (Gold text matching Reforge style accents) */}
              <h2 className="font-serif font-bold leading-tight tracking-tight mb-8 text-[#0080C7] text-3xl md:text-5xl">
                Start Leading It.
              </h2>

              {/* Sub text */}
              <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-8 max-w-3xl mb-10">
                A live, high-accountability cohort for senior PMs, EMs, and growth leads ready to earn the Director or Head of Product title — in the age of AI.
              </p>

              {/* CTA Buttons - Sharp rounded-md Reforge style */}
              <div className="flex flex-wrap gap-4 justify-start mb-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-[6px] text-[#080808] text-[14px] font-bold tracking-wide no-underline transition-all duration-200 bg-[#0080C7] hover:bg-[#009CEE] hover:shadow-[0_0_24px_rgba(0,128,199,0.8)] hover:-translate-y-0.5"
                >
                  Apply for Cohort 2 <span className="text-[14px] font-bold">→</span>
                </a>
                <a
                  href="#program"
                  className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-[6px] text-white text-[14px] font-semibold tracking-wide no-underline transition-all duration-200 border border-white/8 hover:border-white/20 hover:bg-white/8 hover:-translate-y-0.5"
                >
                  Explore Program
                </a>
              </div>

              {/* Trust Stats - Flat layout similar to Reforge's metric blocks */}
              <div className="grid grid-cols-2 md:grid-cols-4  overflow-hidden   w-full ">
                {stats.map((st, i) => (
                  <div
                    key={i}
                    className="flex flex-col  py-5  transition-all duration-200  cursor-default group"
                  >
                    <span className="font-[Outfit,sans-serif] font-extrabold text-[1.5rem] leading-none mb-1 text-[#0080C7] transition-all duration-200  group-hover:drop-shadow-[0_0_10px_rgba(0,128,199,0.65)]">
                      {st.num}
                    </span>
                    <span className="text-[#9CA3AF] group-hover:text-white text-[10px] font-medium tracking-wide  leading-tight transition-colors duration-200">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image of Pranjal Sarkar */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[380px] lg:max-w-[520px] aspect-3/4 overflow-hidden ">
              <img
                src={pranjalsarkar}
                alt="Pranjal Sarkar Portrait"
                className="w-full h-full object-fill object-center"
              />

              {/* Reforge-style bottom mask overlay so the photo blends perfectly into the black background */}
              <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-[#080808]/10 to-transparent z-1" />
            </div>
          </div>

        </div>
      </div>


    </section>
  );
}
