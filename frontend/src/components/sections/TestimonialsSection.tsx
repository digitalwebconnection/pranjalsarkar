const Linkedin = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from '../../constants/testimonialsData';


function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  const getFlagUrl = (loc: string) => {
    const l = loc.toLowerCase();
    if (l.includes("india")) return "in";
    if (l.includes("united state")) return "us";
    if (l.includes("sweden")) return "se";
    if (l.includes("south africa")) return "za";
    if (l.includes("germany")) return "de";
    return ""; 
  };

  useEffect(() => {
    if (!textRef.current) return;

    const checkTruncation = () => {
      if (textRef.current) {
        setIsTruncated(textRef.current.scrollHeight > textRef.current.clientHeight + 10);
      }
    };

    checkTruncation();

    const resizeObserver = new ResizeObserver(() => checkTruncation());
    resizeObserver.observe(textRef.current);

    return () => resizeObserver.disconnect();
  }, [t.quote]);

  const flagCode = getFlagUrl(t.location);

  return (
    <div className="shrink-0 px-3 py-6 flex" style={{ width: '340px' }}>
      <div className="relative flex flex-col h-full w-full bg-[#080d1a] pb-12 shadow-[0_0_35px_rgba(0,168,255,0.25)] border border-[#00a8ff]/20 rounded-xl overflow-visible transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,168,255,0.4)] hover:-translate-y-1">
        
        {/* Upper Half: Image with Blue Border */}
        <div className="w-full shrink-0 h-70  pb-0">
           <div className="w-full h-full border border-[#00a8ff]/30 rounded-t-xl overflow-hidden shadow-[0_0_15px_rgba(0,168,255,0.1)]">
             <img src={t.image} alt={t.name} className="w-full h-full object-cover object-top" loading="lazy" />
           </div>
        </div>

        {/* Flag Icon */}
        <div className="flex justify-center mt-3 mb-2 h-6">
          {flagCode && (
            <img 
              src={`https://flagcdn.com/w40/${flagCode}.png`} 
              width="28" 
              alt="flag" 
              className="drop-shadow-sm object-contain" 
            />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-6 text-center z-10">
          {/* Name & Location (Fixed height to keep card sizes equal) */}
          <div className="mb-4 h-15 flex flex-col justify-center">
            <h4 className="font-sans text-white text-[20px] tracking-widest uppercase mb-1 line-clamp-1">
              {t.name}
            </h4>
            <p className="text-white text-[11px] font-bold tracking-wider line-clamp-1">
              {t.location}
            </p>
          </div>

          {/* Quote (Fixed Height container to keep card sizes equal) */}
          <div className="relative mb-2 text-left flex flex-col h-37.5">
            <div className={`relative z-10 flex-1 ${isExpanded ? 'overflow-y-auto pr-1' : 'overflow-hidden'}`}>
              <style>{`
                .overflow-y-auto::-webkit-scrollbar { width: 4px; }
                .overflow-y-auto::-webkit-scrollbar-track { background: transparent; }
                .overflow-y-auto::-webkit-scrollbar-thumb { background: #555; border-radius: 4px; }
              `}</style>
              <p 
                ref={textRef}
                className={`text-gray-300 text-[11px] leading-loose ${!isExpanded ? 'line-clamp-6' : ''}`}
              >
                {t.quote}
              </p>
            </div>
            {(isTruncated || isExpanded) && (
              <div className="text-right mt-1 shrink-0">
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-white text-[12px] font-bold tracking-wide hover:text-gray-300 transition-colors"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Prominent LinkedIn Icon overlapping bottom */}
        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2">
          <a 
            href={t.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-14 h-14 bg-[#0a66c2] hover:bg-[#004182] rounded-full text-white transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="relative pt-8 md:pt-14 overflow-hidden border-b border-white/8 bg-[#000001]">

      {/* Ambient left side glow */}
      <div className="absolute top-1/4 -left-32 w-125 h-125 rounded-full z-0 bg-[#0044cc] blur-[130px] opacity-40 pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center mb-14">
        <h2 className="font-serif font-bold text-3xl md:text-5xl leading-tight tracking-tight text-white mb-6">
          The results speak <br />
          <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">
            louder than the pitch.
            {/* Horizontal flare line */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 md:w-64 h-0.5 bg-linear-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_20px_rgba(0,128,199,0.9)] opacity-90" />
          </span>
        </h2>
      </div>

      {/* Manual Scrolling Track with side arrows */}
      <div className="relative w-full z-10 max-w-7xl mx-auto px-2 sm:px-8  group">

        {/* Left Navigation Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 sm:left-4 top-[45%] -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-[#050b14]/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#00a8ff]/20 hover:border-[#00a8ff]/50 hover:text-[#00a8ff] transition-all duration-300 shadow-[0_0_15px_rgba(0,168,255,0.1)] hover:shadow-[0_0_25px_rgba(0,168,255,0.3)] opacity-0 group-hover:opacity-100 disabled:opacity-50"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          className="relative w-full overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
          }}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-5 px-6 md:px-12 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`
              .overflow-x-auto::-webkit-scrollbar { display: none; }
            `}</style>

            {testimonials.map((t, idx) => (
              <div className="snap-start shrink-0" key={idx}>
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Navigation Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 sm:right-4 top-[45%] -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-[#050b14]/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#00a8ff]/20 hover:border-[#00a8ff]/50 hover:text-[#00a8ff] transition-all duration-300 shadow-[0_0_15px_rgba(0,168,255,0.1)] hover:shadow-[0_0_25px_rgba(0,168,255,0.3)] opacity-0 group-hover:opacity-100 disabled:opacity-50"
        >
          <ChevronRight size={24} />
        </button>

      </div>

      {/* Final CTA */}
      <div className="mt-12 text-center pb-8 z-10 relative">
        <div className="inline-block relative group">
          {/* Animated glow pulse effect behind the button */}
          <div className="absolute inset-0 bg-[#00a8ff] rounded-full blur-xl opacity-40 group-hover:opacity-70 group-hover:blur-2xl transition-all duration-500 animate-pulse" />

          <a
            href="#contact"
            className="relative inline-flex items-center justify-center gap-3 px-12 py-4 md:px-14 md:py-2 bg-linear-to-r from-[#1749eb] via-[#0066ff] to-[#012368] text-white font-bold text-xl md:text-2xl rounded-full shadow-[0_0_25px_rgba(0,168,255,0.6)] hover:shadow-[0_0_40px_rgba(0,168,255,0.8)] hover:-translate-y-1.5 transition-all duration-300 border border-white/20 hover:border-white/50"
          >
            Submit Interview Request
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
}
