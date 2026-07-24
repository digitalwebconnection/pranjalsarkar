import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden border-b border-white/8 bg-[#000001]">
      
      {/* Concentric arcs background effect */}
      <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden pointer-events-none flex justify-center z-0">
        
        {/* Core background glow */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(0,128,199,0.18)_0%,transparent_70%)] blur-[40px]" />
        
        {/* Outer Arc */}
        <div 
          className="absolute top-[-400px] left-1/2 -translate-x-1/2 w-[1600px] h-[1600px] rounded-full border-[1.5px] border-[#0080C7]/15" 
          style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 45%)', maskImage: 'linear-gradient(to bottom, black 30%, transparent 45%)' }} 
        />
        
        {/* Main Arc */}
        <div 
          className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1300px] h-[1300px] rounded-full border-[2px] border-[#0080C7]/30 shadow-[0_0_50px_rgba(0,128,199,0.15)]" 
          style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 25%, transparent 40%)', maskImage: 'linear-gradient(to bottom, black 25%, transparent 40%)' }} 
        />
        
        {/* Inner Arc */}
        <div 
          className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full border-[1.5px] border-[#0080C7]/40 shadow-[inset_0_50px_50px_-50px_rgba(0,128,199,0.25)]" 
          style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 35%)', maskImage: 'linear-gradient(to bottom, black 20%, transparent 35%)' }} 
        />

      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center mb-16">
          <div className="relative mb-6">
            <h2 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-white mb-2">
              Questions <br />
              <span className="text-[#2094f3] drop-shadow-[0_0_20px_rgba(0,128,199,0.8)]">Answered</span>
            </h2>
            {/* Horizontal flare line (centered) */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 md:w-80 h-[2px] bg-gradient-to-r from-transparent via-[#0080C7] to-transparent shadow-[0_0_15px_rgba(0,128,199,0.9)] opacity-80" />
          </div>

          <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Still have something we didn't cover?<br />
            Check our common questions or reach out to us directly.
          </p>
        </div>

        {/* Centered Accordion Cards */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`group relative rounded-xl bg-[#03060C] border transition-all duration-300 mb-4 overflow-hidden ${
                  isOpen
                    ? 'border-[#0080C7]/40 shadow-[0_0_30px_rgba(0,128,199,0.15)] bg-[#050A14]'
                    : 'border-[#0080C7]/15 hover:border-[#0080C7]/30 hover:shadow-[0_0_20px_rgba(0,128,199,0.1)] hover:bg-[#050A14]'
                }`}
              >
                {/* Inner top highlight for glassmorphism feel */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0080C7]/40 to-transparent opacity-70" />
                
                {/* Inner radial glow when active */}
                {isOpen && (
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,128,199,0.08)_0%,transparent_60%)] pointer-events-none" />
                )}

                <button
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full text-left px-5 py-4 md:px-6 md:py-5 flex justify-between items-center cursor-pointer bg-transparent border-none outline-none focus:outline-none gap-4 relative z-10"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div className="flex items-center gap-4 md:gap-5 flex-1">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-[#0080C7]/40 flex items-center justify-center text-[#33a8ff] font-medium text-sm md:text-base shrink-0 shadow-[inset_0_0_10px_rgba(0,128,199,0.1)] bg-[#001020]">
                      ?
                    </div>
                    <span className="font-bold text-[15px] md:text-[17px] text-[#f8fafc] pr-2 leading-tight">
                      {f.q}
                    </span>
                  </div>
                  
                  <div className={`w-8 h-8 md:w-9 md:h-9 rounded-full border border-[#0080C7]/40 flex items-center justify-center text-[#33a8ff] text-xl shrink-0 transition-all duration-300 shadow-[inset_0_0_10px_rgba(0,128,199,0.1)] bg-[#001020] group-hover:bg-[#001830] ${
                    isOpen ? 'rotate-45 bg-[#001830]' : ''
                  }`}>
                    <span className="mb-[2px] ml-[1px]">+</span>
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
                      <div className="px-5 md:px-6 pb-5 md:pb-6 text-[#94a3b8] text-[14px] md:text-[15px] leading-relaxed pl-[4.25rem] md:pl-[4.75rem]">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

