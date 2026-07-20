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
    <section id="faq" className="relative py-12 md:py-16 overflow-hidden border-b border-white/8 bg-[#000001]">
      {/* Decorative Blur Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0080C7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0080C7]/8 border border-[#0080C7]/20 rounded text-[11px] font-semibold tracking-wider uppercase text-[#0080C7] mb-6">
            FAQ
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-5xl leading-tight tracking-tight text-white mb-6">
            Questions <span className="text-[#0080C7]">Answered</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-8 max-w-3xl mx-auto">
            Still have something we didn't cover? Check our common questions or reach out to us directly.
          </p>
  
        </div>

        {/* Centered Accordion Cards */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-lg bg-[#0C0C0C]/80 border transition-all duration-300 mb-4 overflow-hidden ${
                  isOpen
                    ? 'border-[#0080C7]/35 border-l-4 border-l-[#0080C7] bg-[#121212]/90 shadow-[0_0_24px_rgba(0,128,199,0.2)]'
                    : 'border-white/6 border-l-4 border-l-transparent hover:border-[#0080C7]/25 hover:bg-[#121212]/50 hover:shadow-[0_0_15px_rgba(0,128,199,0.08)]'
                }`}
              >
                <button
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full text-left px-6 py-5 flex justify-between items-center cursor-pointer bg-transparent border-none outline-none focus:outline-none"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className={`font-serif text-base md:text-lg font-bold transition-colors duration-150 pr-4 ${
                    isOpen ? 'text-[#0080C7]' : 'text-white'
                  }`}>
                    {f.q}
                  </span>
                  <span className={`text-xl font-bold shrink-0 transition-all duration-300 block ${
                    isOpen ? 'text-[#0080C7] rotate-45' : 'text-white/40'
                  }`}>
                    +
                  </span>
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
                    >
                      <div className="px-6 pb-6 text-gray-300 text-sm md:text-base leading-8 border-t border-white/2 pt-4">
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
