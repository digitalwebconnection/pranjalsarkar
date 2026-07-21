import InteractiveBook, { type BookPage } from '../ui/InteractiveBook';
import coverImg from '../../assets/pranjalsarkar/3.webp';
import img1 from '../../assets/pranjalsarkar/image1.webp';
import img2 from '../../assets/pranjalsarkar/2.webp';
import img4 from '../../assets/pranjalsarkar/4.webp';
import img5 from '../../assets/pranjalsarkar/5.webp';
import img6 from '../../assets/pranjalsarkar/6.webp';

const LeftPageImage = ({ imgSrc }: { imgSrc: string }) => (
  <div className="relative w-full h-full bg-neutral-900 overflow-hidden flex flex-col justify-end">
    <img
      src={imgSrc}
      alt="Pranjal Sarkar"
      className="absolute inset-0 w-full h-full object-cover opacity-90"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
    <div className="relative z-10 p-5 text-left">
      <div className="text-[9px] font-bold text-[#0080C7] tracking-widest uppercase mb-0.5 font-mono">THE MANIFESTO</div>
      <div className="text-xs font-serif font-extrabold text-white leading-tight">Pranjal Sarkar</div>
      <p className="text-[8px] text-white/50 uppercase tracking-widest font-mono mt-0.5">Interactive Edition</p>
    </div>
  </div>
);

const bookPages: BookPage[] = [
  {
    pageNumber: 1,
    backContent: <LeftPageImage imgSrc={img1} />,
    content: (
      <div className="flex flex-col items-center text-center justify-center h-full px-4 py-4">
        <div className="text-3xl font-serif font-extrabold text-[#0080C7] mb-1">01</div>

        <h4 className="font-serif text-sm font-bold text-neutral-800 mb-2">Judgment Over Frameworks</h4>
        <p className="text-neutral-600 text-[10.5px] leading-relaxed">
          Frameworks are a starting point, not an answer. We train you to think from first principles so you can navigate problems no playbook anticipated. Deciding when to break the rules is what separates strategic leaders from ordinary executors. Learn to isolate core assumptions, evaluate trade-offs under high uncertainty, and design custom solutions that align with business realities.
        </p>
      </div>
    )
  },
  {
    pageNumber: 2,
    backContent: <LeftPageImage imgSrc={img2} />,
    content: (
      <div className="flex flex-col items-center text-center justify-center h-full px-4 py-4">
        <div className="text-3xl font-serif font-extrabold text-[#0080C7] mb-1">02</div>

        <h4 className="font-serif text-sm font-bold text-neutral-800 mb-2">AI as Amplifier</h4>
        <p className="text-neutral-600 text-[10.5px] leading-relaxed">
          AI handles 80% of execution. Your edge is the 20% that requires taste, context, and vision. We train exactly that 20%. While others use AI tools to generate generic templates, you will learn to use models as strategic sparring partners to stress-test your strategy, identify hidden vulnerabilities, and refine product briefs with high clarity.
        </p>
      </div>
    )
  },
  {
    pageNumber: 3,
    backContent: <LeftPageImage imgSrc={img4} />,
    content: (
      <div className="flex flex-col items-center text-center justify-center h-full px-4 py-4">
        <div className="text-3xl font-serif font-extrabold text-[#0080C7] mb-1">03</div>

        <h4 className="font-serif text-sm font-bold text-neutral-800 mb-2">Live Practice</h4>
        <p className="text-neutral-600 text-[10.5px] leading-relaxed">
          Every session puts you in director-level scenarios with real stakes, real disagreement, and real ambiguity. You don't just learn — you perform. Participate in active simulation rooms where you must present and defend your choices under pressure, resolving conflict and building consensus among cross-functional partners in real-time.
        </p>
      </div>
    )
  },
  {
    pageNumber: 4,
    backContent: <LeftPageImage imgSrc={img5} />,
    content: (
      <div className="flex flex-col items-center text-center justify-center h-full px-4 py-4">
        <div className="text-3xl font-serif font-extrabold text-[#0080C7] mb-1">04</div>

        <h4 className="font-serif text-sm font-bold text-neutral-800 mb-2">Peer Calibration</h4>
        <p className="text-neutral-600 text-[10.5px] leading-relaxed">
          Your cohort peers are senior PMs and EMs from top companies. No beginners. No hand-holding. Real debate, real growth. Calibrate your standards against the best in the industry, and build a trusted circle of leaders who critique your decision history, call out weak points, and push you to refine your communication strategy.
        </p>
      </div>
    )
  },
  {
    pageNumber: 5,
    backContent: <LeftPageImage imgSrc={img6} />,
    content: (
      <div className="flex flex-col items-center text-center justify-center h-full px-4 py-4">
        <h4 className="font-serif text-sm font-bold text-neutral-800 mb-2">Ready to Scale?</h4>
        <p className="text-neutral-600 text-[10.5px] leading-relaxed mb-4">
          Develop the rarefied judgment to make decision calls under extreme ambiguity and earn trust as an executive product leader. Step out of the details and into enterprise ownership by mastering capital allocation, product portfolio design, and high-influence organizational navigation.
        </p>
        <a
          href="#program"
          className="px-5 py-1.5 bg-[#0080C7] rounded-full text-[10px] font-bold text-neutral-900 hover:bg-[#009CEE] hover:shadow-[0_0_15px_rgba(0,128,199,0.5)] transition-all"
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
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[#0080C7]/2 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Typography, Manifesto & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0080C7]/8 border border-[#0080C7]/20 rounded text-[11px] font-semibold tracking-wider uppercase text-[#0080C7] mb-6 self-start">
              Philosophy
            </span>

            <h2 className="font-serif font-bold text-3xl md:text-5xl leading-tight tracking-tight text-white mb-4">
              Build Product Judgment <br />
              <span className="text-[#0080C7] font-serif">Under AI</span>
            </h2>

            {/* Manifesto Quote Block */}
            <div className="relative border-l-2 border-[#0080C7] pl-6 my-4">
              <p className="text-lg md:text-xl font-serif italic text-white/95 leading-relaxed">
                "We believe the era of tool-fluency as a competitive advantage is over. The era of judgment has just begun."
              </p>
            </div>

            <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-8 max-w-xl mb-8">
              Our curriculum isn't built around what's trending. It's built around what's permanent: the ability to know what matters, say no to the rest, and earn the room's trust under uncertainty.
            </p>

            {/* See How It Works CTA Button */}
            <a
              href="#program"
              className="group inline-flex items-center gap-2.5 px-10 py-3.5 bg-[#0080C7] border border-[#0080C7] rounded-full text-[#080808] font-bold text-sm transition-all duration-300 hover:bg-[#009CEE] hover:border-[#009CEE] hover:shadow-[0_0_24px_rgba(0,128,199,0.5)] hover:-translate-y-0.5 cursor-pointer self-start"
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
              authorImage={img5}

              bookTitle="Product Judgment Under AI"
              bookAuthor="Pranjal Sarkar"
              pages={bookPages}
              width={310}
              height={400}
              autoplay={true}
              autoplayDelay={2500}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
