import InteractiveBook, { type BookPage } from './InteractiveBook';
import coverImg from '../assets/pranjalsarkar/3.webp';

const JudgmentIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7H1.5m16.5-1l3-1m0 0l-3 9a5.002 5.002 0 006 0M18 6l3 9m-3-9H12" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
  </svg>
);

const PracticeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const AmplificationIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z" />
    <path strokeLinecap="round" d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
  </svg>
);

const PeerIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const bookPages: BookPage[] = [
  {
    pageNumber: 1,
    title: 'Pillar I',
    content: (
      <div className="flex flex-col items-center text-center justify-center h-full px-2 py-4">
        <div className="text-3xl font-serif font-extrabold text-[#D4A853] mb-1">01</div>
        <div className="w-9 h-9 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/30 flex items-center justify-center text-[#D4A853] mb-3">
          <JudgmentIcon />
        </div>
        <h4 className="font-serif text-sm font-bold text-neutral-800 mb-2">Judgment Over Frameworks</h4>
        <p className="text-neutral-600 text-[11px] leading-relaxed">
          Frameworks are a starting point, not an answer. We train you to think from first principles — so you can navigate problems no playbook anticipated.
        </p>
      </div>
    )
  },
  {
    pageNumber: 2,
    title: 'Pillar II & III',
    backContent: (
      <div className="flex flex-col items-center text-center justify-center h-full px-2 py-4">
        <div className="text-3xl font-serif font-extrabold text-[#D4A853] mb-1">03</div>
        <div className="w-9 h-9 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/30 flex items-center justify-center text-[#D4A853] mb-3">
          <PracticeIcon />
        </div>
        <h4 className="font-serif text-sm font-bold text-neutral-800 mb-2">Live Practice</h4>
        <p className="text-neutral-600 text-[11px] leading-relaxed">
          Every session puts you in director-level scenarios with real stakes, real disagreement, and real ambiguity. You don't just learn — you perform.
        </p>
      </div>
    ),
    content: (
      <div className="flex flex-col items-center text-center justify-center h-full px-2 py-4">
        <div className="text-3xl font-serif font-extrabold text-[#D4A853] mb-1">02</div>
        <div className="w-9 h-9 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/30 flex items-center justify-center text-[#D4A853] mb-3">
          <AmplificationIcon />
        </div>
        <h4 className="font-serif text-sm font-bold text-neutral-800 mb-2">AI as Amplifier</h4>
        <p className="text-neutral-600 text-[11px] leading-relaxed">
          AI handles 80% of execution. Your edge is the 20% that requires taste, context, and vision. We train exactly that 20%.
        </p>
      </div>
    )
  },
  {
    pageNumber: 3,
    title: 'Pillar IV & V',
    backContent: (
      <div className="flex flex-col items-center text-center justify-center h-full px-2 py-4">
        <div className="text-3xl font-serif font-extrabold text-[#D4A853] mb-1">04</div>
        <div className="w-9 h-9 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/30 flex items-center justify-center text-[#D4A853] mb-3">
          <PeerIcon />
        </div>
        <h4 className="font-serif text-sm font-bold text-neutral-800 mb-2">Peer Calibration</h4>
        <p className="text-neutral-600 text-[11px] leading-relaxed">
          Your cohort peers are senior PMs and EMs from top companies. No beginners. No hand-holding. Real debate, real growth.
        </p>
      </div>
    ),
    content: (
      <div className="flex flex-col items-center text-center justify-center h-full px-2 py-4">
        <div className="w-9 h-9 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/30 flex items-center justify-center text-[#D4A853] mb-3">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h4 className="font-serif text-sm font-bold text-neutral-800 mb-2">Ready to Scale?</h4>
        <p className="text-neutral-600 text-[11px] leading-relaxed mb-4">
          Develop the rarefied judgment to make decision calls under extreme ambiguity and earn trust as an executive product leader.
        </p>
        <a 
          href="#program" 
          className="px-5 py-1.5 bg-[#D4A853] rounded-full text-[10px] font-bold text-neutral-900 hover:bg-[#c39744] transition-colors"
        >
          Explore Program
        </a>
      </div>
    )
  }
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="relative py-8 md:py-14 overflow-hidden border-b border-white/8">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[#D4A853]/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography, Manifesto & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4A853]/8 border border-[#D4A853]/20 rounded text-[11px] font-semibold tracking-wider uppercase text-[#D4A853] mb-6 self-start">
              Philosophy
            </span>
            
            <h2 className="font-serif font-extrabold text-3xl md:text-5xl leading-[1.2] tracking-tight text-white mb-4">
              Build Product Judgment <br />
              <span className="text-[#D4A853] italic font-serif">Under AI</span>
            </h2>
            
            {/* Manifesto Quote Block */}
            <div className="relative border-l-2 border-[#D4A853] pl-6 my-4">
              <p className="text-lg md:text-xl font-serif italic text-white/95 leading-relaxed">
                "We believe the era of tool-fluency as a competitive advantage is over. The era of judgment has just begun."
              </p>
            </div>

            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Our curriculum isn't built around what's trending. It's built around what's permanent: the ability to know what matters, say no to the rest, and earn the room's trust under uncertainty.
            </p>

            {/* See How It Works CTA Button */}
            <a 
              href="#program" 
              className="group inline-flex items-center gap-2.5 px-10 py-3.5 bg-[#D4A853] border border-[#D4A853] rounded-full text-[#080808] font-bold text-sm transition-all duration-300 hover:bg-[#E5C180] hover:border-[#E5C180] hover:shadow-[0_0_24px_rgba(212,168,83,0.25)] hover:-translate-y-0.5 cursor-pointer self-start"
            >
              See How It Works
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

          {/* Right Column: Recreated Interactive Book */}
          <div className="lg:col-span-6 w-full flex justify-center items-center">
            <InteractiveBook
              coverImage={coverImg}
              bookTitle="Product Judgment Under AI"
              bookAuthor="Pranjal Sarkar"
              pages={bookPages}
              width={310}
              height={400}
              autoplay={true}
              autoplayDelay={2000}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
