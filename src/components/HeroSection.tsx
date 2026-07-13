import { useState, useEffect } from 'react';
import pranjalsarkar from "../assets/pranjalsarkar/image1.webp"
import FlipText from './FlipText';

const SLIDE_INTERVAL = 6000;

const slides = [
  {
    label: 'Cohort 2 — Applications Open',
    headline: 'Stop Managing Product.',
    accent: 'Start Leading It.',
    sub: 'A live, high-accountability cohort for senior PMs, EMs, and growth leads ready to earn the Director or Head of Product title — in the age of AI.',
  },
  {
    label: 'Selective Admission · 20 Seats Only',
    headline: 'Judgment Cannot Be Faked.',
    accent: 'It Has to Be Built.',
    sub: 'The AI Product Leadership Studio puts you in real, ambiguous, high-stakes decisions — week after week — until your judgment becomes unshakeable.',
  },
  {
    label: '18 of 18 Promoted · Cohort 1',
    headline: 'The Director Title Is Waiting.',
    accent: 'Are You Ready?',
    sub: 'Every seat in Cohort 1 produced a promotion. Cohort 2 has 20 seats. Applications are reviewed personally — and close soon.',
  },
];

const stats = [
  { num: '200+', label: 'Senior PMs Trained' },
  { num: '94%',  label: 'Promotion Rate'     },
  { num: '18',   label: 'Companies'           },
  { num: '3.2×', label: 'Avg. Salary Jump'   },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [fading,  setFading]  = useState(false);

  /* ── Auto-advance ── */
  useEffect(() => {
    const t = setInterval(() => advance(1), SLIDE_INTERVAL);
    return () => clearInterval(t);
  }, [current]);

  const advance = (dir: 1 | -1) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(c => (c + dir + slides.length) % slides.length);
      setFading(false);
    }, 300);
  };


  const s = slides[current];

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#080808] border-b border-white/8 py-20 lg:py-0">
      
      {/* Crisp grid layout lines */}
      <div className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none grid-bg" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-5 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div
              className={`w-full transition-all duration-300 ease-out ${
                fading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              {/* Badge */}
              <div className="flex justify-start mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] text-[10px] font-bold tracking-[0.08em] uppercase text-[#D4A853] bg-white/[0.03] border border-white/[0.08]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853] animate-pulse shrink-0" />
                  {s.label}
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-[Outfit,sans-serif] font-extrabold leading-[1.1] tracking-tight text-white mb-2 text-4xl md:text-[3.25rem]">
                <FlipText key={`h-${current}`} loop={false} duration={1.0}>
                  {s.headline}
                </FlipText>
              </h1>

              {/* Accent line (Gold text matching Reforge style accents) */}
              <h2 className="font-[Outfit,sans-serif] font-extrabold leading-[1.1] tracking-tight mb-8 text-[#D4A853] text-4xl md:text-[3.25rem]">
                <FlipText key={`a-${current}`} loop={false} duration={1.0} delay={0.15}>
                  {s.accent}
                </FlipText>
              </h2>

              {/* Sub text */}
              <p className="text-[#9CA3AF] text-[15px] md:text-[17px] leading-[1.7] max-w-[620px] mb-10 font-[Inter,sans-serif]">
                {s.sub}
              </p>

              {/* CTA Buttons - Sharp rounded-md Reforge style */}
              <div className="flex flex-wrap gap-4 justify-start mb-14">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-[6px] text-[#080808] text-[14px] font-bold tracking-wide no-underline transition-all duration-150 bg-[#D4A853] hover:bg-[#E5C180]"
                >
                  Apply for Cohort 2 <span className="text-[14px] font-bold">→</span>
                </a>
                <a
                  href="#program"
                  className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-[6px] text-white text-[14px] font-semibold tracking-wide no-underline transition-all duration-150 border border-white/[0.08] hover:bg-white/[0.04]"
                >
                  Explore Program
                </a>
              </div>

              {/* Trust Stats - Flat layout similar to Reforge's metric blocks */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.08] rounded-[8px] overflow-hidden border border-white/[0.08] w-full max-w-[620px]">
                {stats.map((st, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center py-5 px-4 bg-[#121212]/90 backdrop-blur-sm"
                  >
                    <span className="font-[Outfit,sans-serif] font-extrabold text-[1.5rem] leading-none mb-1 text-[#D4A853]">
                      {st.num}
                    </span>
                    <span className="text-[#9CA3AF] text-[10px] font-medium tracking-wide text-center leading-tight">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image of Pranjal Sarkar */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[380px] lg:max-w-[520px] aspect-[3/4] overflow-hidden ">
              <img
                src={pranjalsarkar}
                alt="Pranjal Sarkar Portrait"
                className="w-full h-full object-fill object-center"
              />
              
              {/* Reforge-style bottom mask overlay so the photo blends perfectly into the black background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/10 to-transparent z-[1]" />
            </div>
          </div>

        </div>
      </div>

     
    </section>
  );
}
