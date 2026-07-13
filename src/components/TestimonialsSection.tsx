import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import img1 from '../assets/pranjalsarkar/1.webp';
import img2 from '../assets/pranjalsarkar/2.webp';
import img3 from '../assets/pranjalsarkar/3.webp';
import img4 from '../assets/pranjalsarkar/4.webp';
import img5 from '../assets/pranjalsarkar/5.webp';
import img6 from '../assets/pranjalsarkar/6.webp';

const testimonials = [
  {
    name: 'ADITYA R.',
    role: 'Senior PM → Director of Product, Series B Fintech',
    quote: "Pranjal doesn't teach you what to think. He teaches you how to think when the stakes are real. I got promoted 6 months after the cohort ended. The most ROI I've ever gotten from any learning investment.",
    stars: 5,
    tag: 'Promoted in 6 months',
    avatar: 'AR',
    image: img1,
    stampText: "PROMOTED",
  },
  {
    name: 'SNEHA K.',
    role: 'Growth Lead → Head of Product, D2C Startup',
    quote: "I'd been stuck at Senior PM for 3 years. Two months into this program I had language for what I was missing. By month 4 I had the title. This is the program I wish existed years ago.",
    stars: 5,
    tag: 'Got Head of Product title',
    avatar: 'SK',
    image: img2,
    stampText: "TITLED",
  },
  {
    name: 'RAHUL M.',
    role: 'EM → Group PM, Unicorn',
    quote: "Coming from engineering, I always felt like I was faking the \"strategy\" part. This cohort gave me actual tools for judgment — not just vocabulary. The peer calibration sessions alone were worth the investment.",
    stars: 5,
    tag: 'Engineering → Product',
    avatar: 'RM',
    image: img4,
    stampText: "SCALED",
  },
  {
    name: 'PRIYA T.',
    role: 'Senior PM, Razorpay → Director, Fintech Startup',
    quote: "The AI-era angle is real. Pranjal prepares you for what comes after everyone has access to ChatGPT — the judgment gap. That's where the real opportunity is, and this program maps it out.",
    stars: 5,
    tag: 'Razorpay to Director',
    avatar: 'PT',
    image: img6,
    stampText: "DIRECTED",
  },
  {
    name: 'VIKRAM S.',
    role: 'Growth PM, Series A → Head of Growth, Series D',
    quote: "I've done Reforge. I've done Lenny's. This is the only program that made me uncomfortable in the right ways — and I grew the most because of it.",
    stars: 5,
    tag: 'Better than Reforge',
    avatar: 'VS',
    image: img3,
    stampText: "SECURED",
  },
  {
    name: 'MEERA L.',
    role: 'PM Lead → Director of Product, B2B SaaS',
    quote: "Pranjal has a rare ability: he can cut through your defensive framing and show you exactly what senior leaders are actually evaluating. It changed how I present myself in every room.",
    stars: 5,
    tag: 'B2B SaaS Director',
    avatar: 'ML',
    image: img5,
    stampText: "EVALUATED",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-6 text-[#D4A853] text-[13px]">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      className="relative py-16 md:py-14 overflow-hidden border-b border-white/8 "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background graphic elements */}
      {/* Vertical bars bottom-left */}
      <div className="absolute bottom-0 left-0 flex items-end gap-2.5 opacity-[0.03] pointer-events-none select-none z-0 pl-6 pb-6">
        <div className="w-4 h-12 bg-white rounded-t-sm" />
        <div className="w-4 h-24 bg-white rounded-t-sm" />
        <div className="w-4 h-36 bg-white rounded-t-sm" />
        <div className="w-4 h-48 bg-white rounded-t-sm" />
        <div className="w-4 h-28 bg-white rounded-t-sm" />
        <div className="w-4 h-16 bg-white rounded-t-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4A853]/8 border border-[#D4A853]/20 rounded text-[11px] font-semibold tracking-wider uppercase text-[#D4A853] mb-6 mx-auto">
            Testimonials
          </span>
          <h2 className="font-serif font-extrabold text-3xl md:text-5xl leading-[1.2] tracking-tight text-white mb-4">
            The results speak <br />
            <span className="text-[#D4A853] italic font-serif">louder than the pitch.</span>
          </h2>
          <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-xl mx-auto">
            From Senior PM to Director. From stuck to leading. Here's what our alumni say.
          </p>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Testimonial Quote Content */}
          <div className="lg:col-span-7 flex flex-col justify-center min-h-[300px] relative">
            
            {/* Outline Circle Overlapping Author Info */}
            <div className="absolute w-32 h-32 rounded-full border border-white/5 bottom-20 left-[28%] pointer-events-none z-0" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative z-10"
              >
                {/* SVG Quote Icon */}
                <div className="text-[#D4A853]/15 mb-4 select-none">
                  <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.154c-2.434.914-4.01 3.636-4.01 5.846h4v10h-10z" />
                  </svg>
                </div>
                
                <Stars count={testimonials[activeIndex].stars} />
                
                <blockquote className="text-white/90 text-lg md:text-2xl font-light leading-relaxed mb-8 font-sans">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* Author Block with Offset Gold Lines */}
                <div className="relative flex flex-col mt-6">
                  {/* Top line with name */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-[1.5px] bg-[#D4A853] shrink-0" />
                    <h4 className="font-sans text-base font-extrabold text-white tracking-widest uppercase leading-none">
                      {testimonials[activeIndex].name}
                    </h4>
                  </div>
                  
                  {/* Role text */}
                  <p className="text-white/40 text-[10px] tracking-wider uppercase mt-2 pl-16 font-semibold">
                    {testimonials[activeIndex].role}
                  </p>

                  {/* Bottom line */}
                  <div className="w-24 h-[1.5px] bg-[#D4A853] mt-5" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation arrows */}
            <div className="flex mt-10 relative z-10">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 bg-[#121212] border border-white/5 hover:bg-white/5 flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <svg className="w-4 h-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 bg-[#121212] border border-white/5 border-l-0 hover:bg-white/5 flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
                aria-label="Next testimonial"
              >
                <svg className="w-4 h-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Arched profile photo with stamp */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative w-full max-w-[300px]  aspect-[4/5] rounded-b-[160px]  overflow-hidden border border-white/10 shadow-2xl bg-neutral-900"
              >
                {/* Visual shadow mask overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none z-10" />

                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />

            
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
