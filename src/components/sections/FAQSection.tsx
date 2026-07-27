import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Who is this program for?',
    a: 'Senior PMs, Engineering Managers transitioning to product, and Growth Leads who are 1–3 years away from a Director or Head of Product title. You should have at least 4 years of product experience and currently be working in a mid-to-large tech company.',
  },
  {
    q: 'Is this pre-recorded or live?',
    a: 'Every session is live. There are no pre-recorded videos to watch on your own. This is a high-touch, live cohort built around dialogue, simulation, and real-time feedback. That\'s what makes it work.',
  },
  {
    q: 'How is this different from Reforge, Lenny\'s, or online PM courses?',
    a: 'Most programs teach frameworks and concepts. We practice judgment. You\'ll face real ambiguous scenarios, make real calls, and get real feedback from Pranjal and your peers. The emphasis is always on "what would you actually do?" not "what does the framework say?"',
  },
  {
    q: 'What is the time commitment per week?',
    a: '4–6 hours per week. This includes 90 minutes of live session, 60–90 minutes of peer calibration, and 2–3 hours of scenario prep. If you are not willing to prioritize this, the program will not work for you.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-8 md:py-14 overflow-hidden bg-[#000000] text-white border-b border-white/5">

      {/* Outer section dot matrix grid overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute inset-0 opacity-12 mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, rgba(0, 140, 255, 0.35) 1.5px, transparent 0)',
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">

        {/* Scoped Background Concentric Arcs & Radial Glow (Scoped to max-w-4xl) */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-170 sm:max-w-200 h-130 pointer-events-none z-0">

          {/* Radial ambient glow behind title */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-187.5 h-100 bg-[radial-gradient(ellipse_at_top,rgba(0,136,255,0.25)_0%,rgba(0,60,180,0.1)_45%,transparent_75%)] blur-2xl" />

          {/* SVG Concentric Dome Arcs */}
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 960 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Outer Arc Gradient (Opacity 0 at center apex 50%) */}
              <linearGradient id="arc-grad-outer-scoped" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0044ff" stopOpacity="0.45" />
                <stop offset="25%" stopColor="#0070f3" stopOpacity="0.04" />
                <stop offset="50%" stopColor="#00c3ff" stopOpacity="0" />
                <stop offset="75%" stopColor="#0070f3" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#0044ff" stopOpacity="0.45" />
              </linearGradient>

              {/* Inner Arc Gradient (Opacity 0 at center apex 50%) */}
              <linearGradient id="arc-grad-inner-scoped" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0033cc" stopOpacity="0.45" />
                <stop offset="25%" stopColor="#0066ff" stopOpacity="0.01" />
                <stop offset="50%" stopColor="#00a2ff" stopOpacity="0" />
                <stop offset="75%" stopColor="#0066ff" stopOpacity="0.01" />
                <stop offset="100%" stopColor="#0033cc" stopOpacity="0.45" />
              </linearGradient>

              <filter id="arc-glow-scoped" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Outer Concentric Dome Arc (Plain Solid Line) */}
            <path
              d="M 30 500 A 450 450 0 0 1 930 500"
              stroke="url(#arc-grad-outer-scoped)"
              strokeWidth="1.75"
              fill="none"
              filter="url(#arc-glow-scoped)"
            />

            {/* Inner Concentric Dome Arc (Plain Solid Line) */}
            <path
              d="M 125 500 A 355 355 0 0 1 835 500"
              stroke="url(#arc-grad-inner-scoped)"
              strokeWidth="1.5"
              fill="none"
              filter="url(#arc-glow-scoped)"
            />
          </svg>
        </div>

        {/* Centered Header */}
        <div className="text-center mb-10 relative z-10">
          <div className="relative inline-block mb-6">
            <h2 className="font-serif font-bold text-5xl sm:text-6xl md:text-6xl leading-tight tracking-tight text-white mb-2">
              Questions <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-b from-[rgba(24,37,226,1)] to-[#006eff] drop-shadow-[0_0_15px_rgba(24,37,226,0.6)]">Answered</span>
            </h2>

            {/* Horizontal Lens Flare Line (Centered under Answered matching image 100%) */}
            <div className="relative mt-4 mx-auto w50 sm:w-70 h-0.75 pointer-events-none flex items-center justify-center">
              {/* 1. Base laser line track */}
              <div className="w-full h-[1.5px] bg-linear-to-r from-transparent via-[#0066ff] via-25% to-transparent opacity-95" />

              {/* 2. Tight horizontal glow streak */}
              <div className="absolute inset-0 h-0.75 bg-linear-to-r from-transparent via-[#00d5ff] via-50% to-transparent blur-[1.5px]" />

              {/* 3. Centered Hotspot Flare Core (100% match to image center spot) */}

              <div className="absolute w-15 h-2 bg-[#0044ff] rounded-full blur-[10px] opacity-95 mix-blend-screen" />
              <div className="absolute w-44 h-2 bg-[#0070f3]/60 rounded-full blur-[7px]" />
            </div>
          </div>

          <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed max-w-xl mx-auto mt-4">
            Still have something we didn't cover?<br />
            Check our common questions or reach out to us directly.
          </p>
        </div>

        {/* Centered Accordion Cards (100% Wireframe Copy) */}
        <div className="max-w-5xl mx-auto flex flex-col gap-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="group relative rounded-2xl p-px bg-linear-to-br from-[#0044ff]/90 via-white/10 to-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:shadow-[0_0_30px_rgba(0,128,199,0.15)] hover:via-white/20 hover:to-white/20 flex flex-col"
              >
                <div className="relative h-full bg-[#060a14] group-hover:bg-[#0a0f1c] rounded-[15px] p-4 sm:p-5 flex flex-col overflow-hidden transition-colors duration-300">
                  {/* Inner top gradient highlight line */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-linear-to-r from-transparent via-[#38bdf8]/60 to-transparent opacity-80" />

                  <button
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="w-full text-left flex justify-between items-center cursor-pointer bg-transparent border-none outline-none focus:outline-none gap-4 relative z-10"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <div className="flex items-center gap-4 sm:gap-5 flex-1">
                      {/* Circular Question Icon Badge */}
                      <div className="w-10 h-10 rounded-full border-2 border-[#0070f3]/50 bg-[#00142c] text-[#0070f3] flex items-center justify-center text-2xl font-bold shrink-0">
                        ?
                      </div>
                      <span className="font-bold text-base sm:text-[18px] text-white leading-snug">
                        {f.q}
                      </span>
                    </div>

                    {/* Circular Plus/Minus Toggle Icon */}
                    <div className={`w-9 h-9 rounded-full border border-[#0070f3]/10 bg-[#001226] text-[#0070f3] flex items-center justify-center shrink-0 transition-all duration-300   group-hover:text-[#38bdf8] ${isOpen ? 'bg-[#001c38] text-[#0070f3] ' : ''
                      }`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#0070f3]" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#0070f3] group-hover:text-[#0070f3]" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        role="region"
                        aria-labelledby={`faq-btn-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                        className="relative z-10"
                      >
                        <div className="pt-4 text-[#c8ced6] text-sm sm:text-base leading-relaxed pl-14 sm:pl-[3.85rem]">
                          {f.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
